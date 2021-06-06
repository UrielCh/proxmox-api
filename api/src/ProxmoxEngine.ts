import { ApiRequestable } from "./proxy";
import fetch, { RequestInit, HeadersInit, Response } from 'node-fetch';
import querystring from 'querystring';
import AbortController from 'abort-controller';

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
        if ((options as ProxmoxEngineOptionsToken).tokenID) {
            const optToken = options as ProxmoxEngineOptionsToken;
            this.username = '';
            this.password = '';
            if (!optToken.tokenID.match(/.*@.+\!.+/)) {
                const msg = 'invalid tokenID, format should look be like USER@REALM!TOKENID';
                console.error(msg);
                throw Error(msg)
            }
            if (!optToken.tokenSecret.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)) {
                const msg = 'invalid tokenSecret, format should be an lowercased UUID like 12345678-1234-1234-1234-1234567890ab';
                console.error(msg);
                throw Error(msg)
            }
            // USER@REALM!TOKENID
            this.ticket == `PVEAPIToken=${optToken.tokenID}=${optToken.tokenSecret}`;
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

        let options: HeadersInit = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        // use token
        if (!this.username) {
            // PVEAPIToken=USER@REALM!TOKENID=UUID  // ticket
            options.Authorization = this.ticket as string;
        } else {
            options.cookie = `PVEAuthCookie=${this.ticket}`;
            options.CSRFPreventionToken = this.CSRFPreventionToken as string;
        }

        /**
         * Append parameters
         */
        let requestUrl = `${this.schema}://${this.host}:${this.port}${path}`;

        const requestInit: RequestInit = {
            method: httpMethod.toUpperCase(),
            headers: options,
        };

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
                // options['Content-Length'] = String(reqBody.length);
                requestInit.body = querystring.stringify(params);
                options['Content-Length'] = String(requestInit.body.length);
            } else {
                requestUrl += `?${querystring.stringify(params)}`;
            }
        }
        let req: Response;
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), this.queryTimeout);
            requestInit.signal = controller.signal;
            req = await fetch(requestUrl, requestInit);
            clearTimeout(timeout);
        } catch (e) {
            console.error(`FaILED to call ${httpMethod} ${requestUrl}`, e)
            throw Error(`FaILED to call ${httpMethod} ${requestUrl}`);
        }
        const contentType = req.headers.get('content-type') as string;
        let data: { data: any, errors?: any } = { data: null };
        if (contentType === 'application/json;charset=UTF-8') {
            data = await req.json();
        } else if (!contentType) {
            data.errors = await req.text();
        } else { // should never append
            throw Error(`${httpMethod} ${requestUrl} unexpected contentType "${contentType}" status Line:${req.status} ${req.statusText}`);
            // data.data = req.text();
        }

        switch (req.status) {
            case 400:
                throw Error(`${httpMethod} ${requestUrl} return Error ${req.status} ${req.statusText}: ${JSON.stringify(data)}`);
            case 500:
                throw Error(`${httpMethod} ${requestUrl} return Error ${req.status} ${req.statusText}: ${JSON.stringify(data)}`);
            case 401:
                if (req.statusText === 'invalid PVE ticket' || req.statusText === 'permission denied - invalid PVE ticket') {
                    this.ticket = undefined;
                    if (!this.username)
                        retries = 10;
                    if (!retries)
                        retries = 0;
                    retries++;
                    if (retries < 2)
                        return this.doRequest(httpMethod, path, pathTemplate, params, retries);
                }
                throw Error(`${httpMethod} ${requestUrl} return Error ${req.status} ${req.statusText}: ${JSON.stringify(data)}`);
            case 200:
                return data.data;
            default:
                throw Error(`${httpMethod} ${requestUrl} connetion failed with ${req.status} ${req.statusText} return: ${JSON.stringify(data)}`);
        }
    }

    public async getTicket(): Promise<string> {
        if (this.ticket)
            return this.ticket;
        const requestUrl = `${this.schema}://${this.host}:${this.port}/api2/json/access/ticket`;
        try {
            const password = this.password;
            const username = this.username;
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), this.authTimeout);
            const req = await fetch(requestUrl, {
                signal: controller.signal,
                method: 'POST',
                body: querystring.encode({ username, password }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            clearTimeout(timeout);
            if (req.status !== 200) {
                throw Error(`login failed with ${req.status}: ${req.statusText}`);
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