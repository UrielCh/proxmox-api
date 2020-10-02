import { Proxmox } from "./model";
import ProxmoxEngine from "./ProxmoxEngine";
import { buildApiProxy } from "./proxy";
import { ProxmoxEngineOptions } from './ProxmoxEngine';

export function proxmoxApi(options: ProxmoxEngineOptions): Proxmox.Api {
    return buildApiProxy(new ProxmoxEngine(options), '/api2/json');
}

export default proxmoxApi;
