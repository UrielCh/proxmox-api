/**
 * Generic type for Api parameters
 */
export type ApiParamType = { [key: string]: any; };

/**
 * common interface used to call API engine
 */
export interface ApiRequestable {
    /**
     * Execute a request on the API with promise
     *
     * @param httpMethod: The HTTP method GET POST PUT DELETE
     * @param path: The request final path
     * @param pathTemplate: The request path with {pathParams}
     * @param params: The request parameters (passed as query string or body params)
     */
    doRequest(httpMethod: string, path: string, pathTemplate: string, params?: {[key:string]: any}): Promise<any>;
}

/**
 * Common Getter part fot handlers
 * - $()
 * - $getv/$put()/$post()/$delete()
 * - path navigation
 */
const commonGet = (key: string, target: ProxyApi) => {
    if (key.startsWith('$')) {
        // give parameter in path
        if (key === '$') {
            return (id: string | number) => {
                // escape '/' char
                const idStr = String(id).replace(/\//g, '%2F');
                const child = new ProxyApi(target._engine, `${target._path}/${idStr}`, `${target._model}/*`);
                return new Proxy(child, handlerChild);
            }
        }
        // $get $post $delete $put
        const fnc = (params: any) => {
            const mtd = key.substring(1);
            return target._engine.doRequest(mtd, target._path, target._model, params);
        }
        return fnc.bind(target._engine);
    }
    if (key.startsWith('_'))
        key = key.substring(1);
    const child = new ProxyApi(target._engine, `${target._path}/${key}`, `${target._model}/${key}`);
    return new Proxy(child, handlerChild);
}

/**
 * handler for all proxy level except the root one
 * handle:
 * - Object Field
 * - $()
 * - $getv/$put()/$post()/$delete()
 * - path navigation
 */
const handlerChild = <ProxyHandler<ProxyApi>>{
    construct(target: ProxyApi, argArray: any, newTarget?: any) {
        return target;
    },
    get(target: ProxyApi, p: PropertyKey, receiver: any) {
        if (typeof p === 'symbol')
            return (<any>target)[p];
        const key = p.toString();
        switch (key) {
            case 'toString':
            case 'valueOf':
            case 'toLocaleString':
                return (<any>target)[p];
        }
        return commonGet(key, target);
    }
}
/**
 * handler for the first level of the proxy
 * handle:
 * - Object Field
 * - EventEmitter Field
 * - $()
 * - $get()/$put()/$post()/$delete()
 * - path navigation
 */
const handlerRoot = <ProxyHandler<ProxyApi>>{
    construct(target: ProxyApi, argArray: any, newTarget?: any) {
        return target;
    },
    get(target: ProxyApi, p: PropertyKey, receiver: any) {
        if (typeof p === 'symbol')
            return (target as any)[p];
        let key = p.toString();
        switch (key) {
            // object
            case 'toString':
            case 'valueOf':
            case 'toLocaleString':
                // hasOwnProperty
                // isPrototypeOf
                // propertyIsEnumerable
                // constructor
                return (target as any)[p];
            // EventEmitter
            case 'addListener':
            case 'on':
            case 'once':
            case 'prependListener':
            case 'prependOnceListener':
            case 'removeListener':
            case 'off':
            case 'removeAllListeners':
            case 'setMaxListeners':
            case 'getMaxListeners':
            case 'listeners':
            case 'rawListeners':
            case 'emit':
            case 'eventNames':
            case 'listenerCount':
                return (target as any)[p];
        }
        return commonGet(key, target);
    }
}

/**
 * Data cloned on each Proxy node call
 * maintains full PATH for each calls
 */
class ProxyApi {
    public _model: string;
    
    constructor(public _engine: ApiRequestable, public _path: string, model?: string) {
        this._model = model || this._path;
    }
    toString(): string {
        return `ProxyApi{path:${this._path}}`;
    }
}
/**
 * Build API API Proxy
 * 
 * @param engine Api logic code
 * @param path base prefix for url
 */
export function buildApiProxy(engine: ApiRequestable, path: string): any {
    return new Proxy(new ProxyApi(engine, path), handlerRoot) as any;
}
