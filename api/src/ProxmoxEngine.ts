import { ApiRequestable } from "./proxy";
//import fetch, { RequestInit, HeadersInit, Response } from 'node-fetch';
import querystring from 'querystring';
import { doSimpleRequest, SimpleRequestBody, SimpleResponse } from "./SimpleRequest";
// import AbortController from 'abort-controller';
import https from 'https';

export interface ProxmoxEngineOptionsCommon {
    host: string;
    port?: number;
    schema?: 'https' | 'http';
    authTimeout?: number;
    queryTimeout?: number;
}

export interface ProxmoxEngineOptionsPass extends ProxmoxEngineOptionsCommon {
    username?: string;
    password: string;
}

export interface ProxmoxEngineOptionsToken extends ProxmoxEngineOptionsCommon {
    tokenID: string;
    tokenSecret: string;
}

export type ProxmoxEngineOptions = ProxmoxEngineOptionsToken | ProxmoxEngineOptionsPass;

/**
 * keep the API engine there is non direct acess needed
 */
export class ProxmoxEngine implements ApiRequestable {
    public CSRFPreventionToken?: string;
    public ticket?: string;
    private username: string;
    private password: string;
    private host: string;
    private port: number;
    private schema: 'http' | 'https';
    private authTimeout: number;
    private queryTimeout: number;

    constructor(options: ProxmoxEngineOptions) {
        //if ((options as ProxmoxEngineOptionsToken).tokenID) {
        if ('tokenID' in options && options.tokenSecret) {
            //const optToken = options as ProxmoxEngineOptionsToken;
            this.username = '';
            this.password = '';
            if (!options.tokenID.match(/.*@.+\!.+/)) {
                const msg = 'invalid tokenID, format should look be like USER@REALM!TOKENID';
                console.error(msg);
                throw Error(msg)
            }
            if (!options.tokenSecret.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)) {
                const msg = 'invalid tokenSecret, format should be an lowercased UUID like 12345678-1234-1234-1234-1234567890ab';
                console.error(msg);
                throw Error(msg)
            }
            // USER@REALM!TOKENID
            this.ticket = `PVEAPIToken=${options.tokenID}=${options.tokenSecret}`;
        } else {
            const optPass = options as ProxmoxEngineOptionsPass;
            this.username = optPass.username || 'root@pam';
            this.password = optPass.password;
            if (!this.password) {
                const msg = `password is missing for Proxmox connection`;
                console.error(msg);
                throw Error(msg)
            }
        }
        this.host = options.host;
        this.port = options.port || 8006;
        this.schema = options.schema || 'https';
        this.authTimeout = options.authTimeout || 5000;
        this.queryTimeout = options.queryTimeout || 60000;
    }

    public async doRequest(httpMethod: string, path: string, pathTemplate: string, params?: { [key: string]: any }, retries?: number): Promise<any> {
        if (!this.ticket) {
            await this.getTicket();
        }
        /**
         * Remove null values
         */
        if (retries && params)
            for (let k in params) {
                if (params.hasOwnProperty(k) && params[k] === null) {
                    delete params[k];
                }
            }

        let headers: {[key: string]: string} = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        // use token
        if (!this.username) {
            // PVEAPIToken=USER@REALM!TOKENID=UUID  // ticket
            headers.Authorization = this.ticket as string;
        } else {
            headers.cookie = `PVEAuthCookie=${this.ticket}`;
            headers.CSRFPreventionToken = this.CSRFPreventionToken as string;
        }
        /**
         * Append parameters
         */

        let body: SimpleRequestBody | undefined = undefined;

        const httpOptions: https.RequestOptions = {host: this.host, port: this.port, path: path, method: httpMethod, headers};
        let formBody: any = null;
        if (typeof (params) === 'object' && Object.keys(params).length > 0) {
            for (const k of Object.keys(params)) {
                const v = params[k];
                if (v === true)
                    params[k] = 1;
                else if (v === false)
                    params[k] = 0;
            }
            if (httpMethod === 'PUT' || httpMethod === 'POST') {
                // Escape unicode
                //reqBody = JSON
                //    .stringify(params)
                //    .replace(/[\u0080-\uFFFF]/g, (m) => '\\u' + ('0000' + m.charCodeAt(0).toString(16)).slice(-4)); 
                body = {form: params};
            } else {
                httpOptions.path = `${httpOptions.path}?${querystring.stringify(params)}`
            }
        }
        // let requestUrl = `${this.schema}://${this.host}:${this.port}${path}`;
        //let req: Response;

        let res: SimpleResponse | null = null;
        try {
            httpOptions.timeout = this.queryTimeout;
            res = await doSimpleRequest(httpOptions, body);
            // const controller = new AbortController();
            // const timeout = setTimeout(() => controller.abort(), this.queryTimeout);
            // requestInit.signal = controller.signal;
            // req = await fetch(requestUrl, requestInit);
            // clearTimeout(timeout);
        } catch (e) {
            console.error(`FaILED to call ${httpMethod} ${httpOptions.path}`, e)
            throw Error(`FaILED to call ${httpMethod} ${httpOptions.path}`);
        }
        const contentType = res.headers['content-type'] as string;
        let data: { data: any, errors?: any } = { data: null };
        if (contentType === 'application/json;charset=UTF-8') {
            data = await res.json();
        } else if (!contentType) {
            data.errors = res.text;// await req.text();
        } else { // should never append
            throw Error(`${httpMethod} ${httpOptions.path} unexpected contentType "${contentType}" status Line:${res.statusCode} ${res.text}`);
            // data.data = req.text();
        }

        switch (res.statusCode) {
            case 400:
                throw Error(`${httpMethod} ${httpOptions.path} return Error ${res.statusCode} ${res.statusText}: ${JSON.stringify(data)}`);
            case 500:
                throw Error(`${httpMethod} ${httpOptions.path} return Error ${res.statusCode} ${res.statusText}: ${JSON.stringify(data)}`);
            case 401:
                if (res.statusText === 'invalid PVE ticket' || res.statusText === 'permission denied - invalid PVE ticket') {
                    this.ticket = undefined;
                    if (!this.username)
                        retries = 10;
                    if (!retries)
                        retries = 0;
                    retries++;
                    if (retries < 2)
                        return this.doRequest(httpMethod, path, pathTemplate, params, retries);
                }
                throw Error(`${httpMethod} ${httpOptions.path} return Error ${res.statusCode} ${res.statusText}: ${JSON.stringify(data)}`);
            case 200:
                return data.data;     
            default:
                throw Error(`${httpMethod} ${httpOptions.path} connetion failed with ${res.statusCode} ${res.statusText} return: ${JSON.stringify(data)}`);
        }
    }

    public async getTicket(): Promise<string> {
        if (this.ticket)
            return this.ticket;
        const requestUrl = `${this.schema}://${this.host}:${this.port}/api2/json/access/ticket`;
        try {
            const password = this.password;
            const username = this.username;
            // const controller = new AbortController();
            // const timeout = setTimeout(() => controller.abort(), this.authTimeout);
            //const postBody = querystring.encode({ username, password });
            //const headers= {
            //    'Content-Type': 'application/x-www-form-urlencoded',
            //    'Content-Length': String(postBody.length),
            //}

            const req = await doSimpleRequest({
                host: this.host,
                port: this.port,
                path: '/api2/json/access/ticket',
                //signal: controller.signal,
                method: 'POST',
            }, {form: { username, password }});
            // clearTimeout(timeout);
            if (req.statusCode !== 200) {
                throw Error(`login failed with ${req.statusCode}: ${req.statusText}`);
            }
            const body = await req.json();
            const { CSRFPreventionToken, ticket } = body.data;
            this.CSRFPreventionToken = CSRFPreventionToken;
            this.ticket = ticket;
            return ticket;
        } catch (e) {
            console.log(e);
            throw Error(`Auth ${requestUrl} Failed! with Exception: ${e}`);
        }
    }
}

export default ProxmoxEngine;