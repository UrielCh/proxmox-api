// Proxmox-API Interactive proxmox API for developpers how do not like reading docs
// Copyright (C) 2020-2022  Chemouni Uriel <uchemouni@gmail.com>
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { ApiRequestable } from "./proxy";
import querystring from 'querystring'; // TODO use URLSearchParams
import { fetch, Response } from 'undici';
import { URL } from "url";

/**
 * Common Proxmox authentification properties
 */
export interface ProxmoxEngineOptionsCommon {
    /**
     * Proxmox address
     */
    host: string;
    /**
     * Proxmox connexion port, default is 8006
     */
    port?: number;
    /**
     * http protocol, can be http or https, default is https
     */
    schema?: 'https' | 'http';
    /**
     * separated timeout for authentification call, default is 5 second
     */
    authTimeout?: number;
    /**
     * timeout for proxmox request, default is 60 seconds
     */
    queryTimeout?: number;
}

/**
 * Proxmox authentification as user / password
 */
export interface ProxmoxEngineOptionsPass extends ProxmoxEngineOptionsCommon {
    /**
     * Your username, if not specified will use root@pam
     */
    username?: string;
    /**
     * The password
     */
    password: string;
}

/**
 * Proxmox authentification as tokenID / tokenSecret
 */
export interface ProxmoxEngineOptionsToken extends ProxmoxEngineOptionsCommon {
    tokenID: string;
    tokenSecret: string;
}

/**
 * Type Union for proxmox Authentification options
 */
export type ProxmoxEngineOptions = ProxmoxEngineOptionsToken | ProxmoxEngineOptionsPass;

/**
 * Default Proxmox doRequest provider, this Class will be used if you provide Proxmox authentification options to the Proxy generator
 */
export class ProxmoxEngine implements ApiRequestable {
    public CSRFPreventionToken?: string;
    public ticket?: string;
    private readonly username: string;
    private readonly password: string;
    private host: string;
    private port: number;
    private readonly schema: 'http' | 'https';
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

    /**
     * 
     * @param httpMethod 
     * @param path 
     * @param pathTemplate 
     * @param params 
     * @param retries 
     * @returns 
     */
    public async doRequest(httpMethod: string, path: string, pathTemplate: string, params?: { [key: string]: any }, retries?: number): Promise<any> {
        const { CSRFPreventionToken, ticket } = await this.getTicket();
        // ensure that method is uppercased
        httpMethod = httpMethod.toUpperCase();
        /**
         * Remove null values
         */
        if (retries && params)
            for (let k in params) {
                if (params.hasOwnProperty(k) && params[k] === null) {
                    delete params[k];
                }
            }

        let headers: { [key: string]: string } = {
            //    'Content-Type': 'application/x-www-form-urlencoded',
        };
        // use token
        if (!this.username) {
            // PVEAPIToken=USER@REALM!TOKENID=UUID  // ticket
            headers.Authorization = ticket;
        } else {
            headers.cookie = `PVEAuthCookie=${ticket}`;
            headers.CSRFPreventionToken = CSRFPreventionToken;
        }
        /**
         * Append parameters
         */
        let body: any | undefined = undefined;
        const requestUrl = new URL(`${this.schema}://${this.host}:${this.port}/path`);
        // const httpOptions: https.RequestOptions = {host: this.host, port: this.port, path: path, method: httpMethod, headers};
        // let formBody: any = null;
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
                body = { form: params };
            } else {
                Object.entries(params).forEach(([k, v]) => requestUrl.searchParams.set(k, v))
            }
        }

        let res: Response | null = null;
        try {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), this.queryTimeout);
            res = await fetch(requestUrl, {
                method: httpMethod,
                body: JSON.stringify(body),
                signal: controller.signal,
                headers
            })
            clearTimeout(id);
        } catch (e) {
            // console.log(error.name === 'AbortError');
            console.error(`FaILED to call ${httpMethod} ${requestUrl}`, e)
            throw Error(`FaILED to call ${httpMethod} ${requestUrl}`);
        }
        const contentType = res.headers.get('content-type');
        let data: { data: any, errors?: any } = { data: null };
        if (contentType === 'application/json;charset=UTF-8') {
            data = (await res.json()) as { data: any, errors?: any };
        } else if (!contentType) {
            data.errors = await res.text();// await req.text();
        } else { // should never append
            throw Error(`${httpMethod} ${requestUrl} unexpected contentType "${contentType}" status Line:${res.status} ${res.text}`);
            // data.data = req.text();
        }

        switch (res.status) {
            case 400:
                throw Error(`${httpMethod} ${requestUrl} return Error ${res.status} ${res.statusText}: ${JSON.stringify(data)}`);
            case 500:
                throw Error(`${httpMethod} ${requestUrl} return Error ${res.status} ${res.statusText}: ${JSON.stringify(data)}`);
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
                throw Error(`${httpMethod} ${requestUrl} return Error ${res.status} ${res.statusText}: ${JSON.stringify(data)}`);
            case 200:
                return data.data;
            default:
                throw Error(`${httpMethod} ${requestUrl} connetion failed with ${res.status} ${res.statusText} return: ${JSON.stringify(data)}`);
        }
    }

    /**
     * return the current ticket/token, or create new ones, is previous one had been discared, or missing.
     * @returns Proxmox API ticket and CSRFPreventionToken
     */
    public async getTicket(): Promise<{ ticket: string, CSRFPreventionToken: string }> {
        if (this.ticket) {
            if (!this.username)
                return { ticket: this.ticket, CSRFPreventionToken: '' };
            if (this.CSRFPreventionToken)
                return { ticket: this.ticket, CSRFPreventionToken: this.CSRFPreventionToken };
        }
        const requestUrl = `${this.schema}://${this.host}:${this.port}/api2/json/access/ticket`;
        try {
            const { password, username } = this;
            // const controller = new AbortController();
            // const timeout = setTimeout(() => controller.abort(), this.authTimeout);
            const postBody = querystring.encode({ username, password });
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': String(postBody.length),
            }

            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), this.authTimeout);

            const req = await fetch(requestUrl, {
                method: 'POST',
                headers,
                signal: controller.signal,
                body: JSON.stringify({ form: { username, password } })
            },);
            clearTimeout(id);


            // const req = await reqApi.post(requestUrl, {form: { username, password }});
            // clearTimeout(timeout);
            if (req.status !== 200) {
                throw Error(`login failed with ${req.status}: ${req.statusText}`);
            }
            const body = await req.json() as { data: { cap: any, ticket: string, CSRFPreventionToken: string, username: string } };
            const { CSRFPreventionToken, ticket } = body.data;
            this.CSRFPreventionToken = CSRFPreventionToken;
            this.ticket = ticket;
            return { ticket, CSRFPreventionToken };
        } catch (e) {
            console.log(e);
            throw Error(`Auth ${requestUrl} Failed! with Exception: ${e}`);
        }
    }
}

export default ProxmoxEngine;
