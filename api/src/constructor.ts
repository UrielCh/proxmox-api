import { Proxmox } from "./model";
import ProxmoxEngine from "./ProxmoxEngine";
import { ApiRequestable, buildApiProxy } from "./proxy";
import { ProxmoxEngineOptions } from './ProxmoxEngine';

function isProxmoxEngine(val: ProxmoxEngineOptions | ApiRequestable): val is ApiRequestable {
    return 'doRequest' in val;
}

/**
 * Default main package function, this function return a javascript Proxy to use your proxmox API.
 * 
 * @param options authentification option or a doRequest provider.
 * 
 * @returns the proxy object
 */
export function proxmoxApi(options: ProxmoxEngineOptions | ApiRequestable): Proxmox.Api {
    if (isProxmoxEngine(options))
        return buildApiProxy(options, '/api2/json');
    else
        return buildApiProxy(new ProxmoxEngine(options), '/api2/json');
}

export default proxmoxApi;
