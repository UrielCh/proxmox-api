# Changelog

## v0.4.1
* rewrite undici fetch integration.
* add debug parameter.
* add cause in Exception
* remove console.log

## v0.4.0
* use undici fetch (will fix issue 14 in the next release)
* add proxmoxApi export (same as default)
* fix missing GET params. (issue 11 and 12)

## v0.3.2
* add missing uppercase on method. (issue 10)

## v0.3.1
 * fix regrestion in API Keys usage. (issue 9)

## V0.3.0
 * fix project layout
 * add doc
 * change proxmoxApi signature to proxmoxApi(options: ProxmoxEngineOptions | ApiRequestable): Proxmox.Api.

## V0.1.3
 * add authTimeout option, to limit authentification time.
 * add queryTimeout option to limit non auth request timeout.
