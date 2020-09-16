import { Proxmox } from "./model";
import { ApiRequestable, buildApiProxy } from "./proxy";

export function proxyProxmox(ovhEngine: ApiRequestable): Proxmox {
    return buildApiProxy(ovhEngine, '/api2/json');
}
export default proxyProxmox;
