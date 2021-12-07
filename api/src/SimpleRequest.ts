import https from 'https';
import http, { IncomingHttpHeaders } from 'http';
import querystring from 'querystring';
import { URL } from 'url';
import { ParsedUrlQueryInput } from 'querystring';

export interface SimpleRequestBodyJson {
    json: any;
}

export interface SimpleRequestBodyText {
    text: string,
}

export interface SimpleRequestBodyForm {
    form: ParsedUrlQueryInput
}

export interface SimpleRequestBodyBuffer {
    raw: Buffer | Uint8Array;
}

export type SimpleRequestBody = SimpleRequestBodyJson | SimpleRequestBodyText | SimpleRequestBodyForm | SimpleRequestBodyBuffer;

export class SimpleResponse {
    private chunks: any[] = [];
    private waiter: Promise<void>;

    constructor(private client: http.ClientRequest, private res: http.IncomingMessage) {
        this.waiter = new Promise((accept) => {
            res.on('data', chunk => this.chunks.push(chunk))
            res.once('end', () => accept())
        })
    }

    get headers(): IncomingHttpHeaders {
        return this.res.headers;
    }

    get statusText(): string {
        return this.res.statusMessage || '';
    }
    get statusMessage(): string {
        return this.statusText;
    }

    get code(): number {
        return this.statusCode;
    }

    get statusCode(): number {
        return this.res.statusCode || 0;
    }

    async text(): Promise<string> {
        await this.waiter;
        return this.chunks.map((chunk) => chunk.toString()).join('');
    }

    async json<T = any>(): Promise<T> {
        const text = await this.text();
        return JSON.parse(text);
    }
}

const CT = 'content-type';
export function doSimpleRequest(options: https.RequestOptions | string | URL, body?: SimpleRequestBody): Promise<SimpleResponse> {
    return new Promise<SimpleResponse>((accept, reject) => {
        let opt: https.RequestOptions;
        if ('string' === typeof options) {
            options = new URL(options);
        }
        if (options instanceof URL) {
            // https.RequestOptions
            opt = { host: options.host, hostname: options.hostname, port: options.port, protocol: options.protocol, path: options.pathname, method: 'GET' };
        } else {
            opt = options;
        }

        if (!opt.headers) {
            opt.headers = {};
        }
        const headers = opt.headers;
        let uploadData: null | string | Buffer | Uint8Array | string = null;
        if (body) {
            if ('json' in body) {
                if (!headers[CT]) {
                    headers[CT] = 'application/json;charset=UTF-8';
                }
                uploadData = JSON.stringify(body.json);
            } else if ('form' in body) {
                if (!headers[CT]) {
                    headers[CT] = 'application/x-www-form-urlencoded';
                }
                uploadData = querystring.stringify(body.form)
            } else if ('raw' in body) {
                uploadData = body.raw
            } else if ('text' in body) {
                uploadData = body.text
            }
        if (uploadData)
                headers['Content-Length'] = String(uploadData.length);
        }
        let client: http.ClientRequest;
        if (opt.protocol === 'https:') {
            client = https.request(opt, res => {
                accept(new SimpleResponse(client, res));
            })
        } else {
            client = http.request(opt, res => {
                accept(new SimpleResponse(client, res));
            })
        }
        client.once('error', error => {
            reject(error);
        })
        if (uploadData) {
            client.write(uploadData)
        }
        client.end()
    })
}