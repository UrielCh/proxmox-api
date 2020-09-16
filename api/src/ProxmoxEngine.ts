import { ApiRequestable } from "./proxy";
import fetch, { RequestInit } from 'node-fetch';
import querystring from 'querystring';

export class ProxmoxEngine implements ApiRequestable {
    public CSRFPreventionToken?: string;
    public ticket?: string;
    private username: string;
    private password: string;
    private host: string;
    private port: number;
    private schema: 'http' | 'https';

    constructor(options: { host: string, port?: number, schema?: 'https' | 'http', username?: string, password: string }) {
        this.username = options.username || 'root@pam';
        this.password = options.password;
        this.host = options.host;
        this.port = options.port || 8006;
        this.schema = options.schema || 'https';

        if (!this.password) {
            const msg = `password is missing for Proxmox connection`;
            console.error(msg);
            throw Error(msg)
        }

    }

    async doRequest(httpMethod: string, path: string, pathTemplate: string, params?: { [key: string]: any }): Promise<any> {
        // throw new Error("Method not implemented.");
        // async renameVM(realVmid: number, name: string): Promise<string> {

        if (!this.ticket) {
            await this.getTicket();
        }
        /**
         * Remove undefined values
         */
        if (params)
            for (let k in params) {
                if (params.hasOwnProperty(k) && params[k] == null) {
                    delete params[k];
                }
            }

        const options: HeadersInit = {
            'Content-Type': 'application/x-www-form-urlencoded',
            cookie: `PVEAuthCookie=${this.ticket}`,
            CSRFPreventionToken: this.CSRFPreventionToken as string
        };

        /**
         * Append parameters
         */
        let requestUrl = `${this.schema}://${this.host}:${this.port}${path}`;


        const requestInit: RequestInit = {
            method: httpMethod.toUpperCase(),
            headers: options,
        };

        if (typeof (params) === 'object' && Object.keys(params).length > 0) {
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
        try {
            const req = await fetch(requestUrl, requestInit);
            if (req.status === 400) {
                const data = await req.text();
                debugger;
                if (data.startsWith('{')) {
                    const json = JSON.parse(data);
                    throw Error(`${httpMethod} ${requestUrl} return Error 400: ${JSON.stringify(json.errors)}`);
                }
                console.error(data)
                throw Error(`${httpMethod} ${requestUrl} return Error 400: ${JSON.stringify(data)}`);
            }

            if (req.status !== 200) {
                throw Error(`get ${requestUrl} connetion failed with ${req.status}: ${req.statusText}`);
            }
            const data = await req.text();
            if (data.startsWith('{')) {
                const json = JSON.parse(data);
                return json.data;
            }
            console.log('NEED Implementaion for ', data);
            const json = JSON.parse(data);
            debugger;
            return json.data;
        } catch (e) {
            console.error(`FaILED to call ${httpMethod} ${requestUrl}`, e)
            throw Error(`FaILED to call ${httpMethod} ${requestUrl}`);
        }
    }


    async getTicket(): Promise<string> {
        if (this.ticket)
            return this.ticket;
        try {
            const password = this.password;
            const username = this.username;
            const req = await fetch(`${this.schema}://${this.host}:${this.port}/api2/json/access/ticket`, {
                method: 'POST',
                body: querystring.encode({ username, password }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            if (req.status !== 200) {
                throw Error(`login failed with ${req.status}: ${req.statusText}`);
            }
            const body = await req.json();
            // cap
            const { CSRFPreventionToken, ticket } = body.data;
            this.CSRFPreventionToken = CSRFPreventionToken;
            this.ticket = ticket;
            return ticket;
        } catch (e) {
            debugger;
            console.log(e);
            throw Error('auth Failed !');
        }
    }
}

export default ProxmoxEngine;