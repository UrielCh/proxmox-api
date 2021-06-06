import { Proxmox } from "./model";
import ProxmoxEngine from "./ProxmoxEngine";
import { buildApiProxy } from "./proxy";
import { ProxmoxEngineOptions } from './ProxmoxEngine';

export function proxmoxApi(options: ProxmoxEngineOptions | ProxmoxEngine): Proxmox.Api {
    if ((options as any).getTicket)
        return buildApiProxy(options as ProxmoxEngine, '/api2/json');
    else
        return buildApiProxy(new ProxmoxEngine(options as ProxmoxEngineOptions), '/api2/json');
}

export default proxmoxApi;
