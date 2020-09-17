import { Proxmox } from "./model";
import { ApiRequestable, buildApiProxy } from "./proxy";

export function proxyProxmox(ovhEngine: ApiRequestable): Proxmox.Api {
    return buildApiProxy(ovhEngine, '/api2/json');
}
export default proxyProxmox;
