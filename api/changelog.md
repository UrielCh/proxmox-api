# Changelog

## v1.1.0
* update ESM compatibility
* add support for Proxmox 8
* update deps

## v1.0.2
* Merge PR 20

## v1.0.1
* improve codebase adding CODE_OF_CONDUCT.md, CONTRIBUTING.md
* add funding
* fix common-js usage for the project

## v1.0.0
* Dual stack package, ESM + CJS
* Should work with deno

## v0.4.2
* add application/octet-stream support

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
