import { Proxmox } from "./model";
import ProxmoxEngine from "./ProxmoxEngine";
import { ApiRequestable, buildApiProxy } from "./proxy";
import { ProxmoxEngineOptions } from './ProxmoxEngine';

function isProxmoxEngine(val: any): val is ApiRequestable {
    return 'doRequest' in val;
}

export function proxmoxApi(options: ProxmoxEngineOptions | ApiRequestable): Proxmox.Api {
    if (isProxmoxEngine(options))
        return buildApiProxy(options, '/api2/json');
    else
        return buildApiProxy(new ProxmoxEngine(options), '/api2/json');
}

export default proxmoxApi;
