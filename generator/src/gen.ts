import pveapi from './pveapi';
import { pveApiNode, PveCallParameters, PveCallDesc, PveParametersArray, PveParametersObject } from './pveapiModel';
import fs from 'fs';
import path from 'path';

const EOL = '\n';

const protectFieldName = (name: string) => {
    if (~name.indexOf('-') || ~name.indexOf('.'))
        return `'${name}'`;
    return name;
}

const snakeToLowerCamel = (str: string) => {
    let lowercameCase = str.replace(
        /([-_ ][a-z])/g,
        (group) => group.toUpperCase()
            .replace(' ', '')
            .replace('-', '')
            .replace('_', '')
    );
    return lowercameCase;
}

const snakeToUpperCamel = (str: string) => {
    let lowercameCase = snakeToLowerCamel(str)
    return lowercameCase[0].toUpperCase() + lowercameCase.substr(1);
}

const unNify = (propName: string): string[] => {
    if (!~propName.indexOf('[n]'))
        return [protectFieldName(propName)];
    let max = 4;
    const prefix = propName.replace('[n]', '');
    if (prefix === 'link') max = 8;
    else if (prefix === 'hostpci') max = 8;
    else if (prefix === 'ide') max = 4;
    else if (prefix === 'ipconfig') max = 8;
    const out = [] as string[];
    for (let i = 0; i < max; i++) {
        out.push(`${prefix}${i}`);
    }
    return out;
}
const TAB = '    ';

export class Generator {
    retTypes = [] as string[];

    code = [] as string[];
    // lineoffset = '';
    type2TypeName: { [key: string]: string } = {};
    usedNamed: { [name: string]: string } = {};


    getFinalData(): string {
        const header = 'export namespace Proxmox {';
        const typings = this.getNewType().join(EOL)
        const code = this.code.join(EOL);
        const retTypes = this.retTypes.join(EOL);
        const footer = `}${EOL}export default Proxmox;`;

        return header + EOL + typings + EOL + retTypes + EOL + code + EOL + footer + EOL;
    }

    getNewType(): string[] {
        return Object.values(this.usedNamed);
    }


    mapType2(pveType: PveCallParameters, name: string): string {
        name = name.replace(/-/g, '');
        name = name.replace('[n]', '');
        const typeCopy: any = { ...pveType };
        delete typeCopy["default"];
        delete typeCopy["default_key"];
        delete typeCopy["description"];
        delete typeCopy["format_description"];
        delete typeCopy["verbose_description"];
        // delete typeCopy["title"];
        delete typeCopy["requires"]; // 3544 lines
        delete typeCopy["optional"];
        delete typeCopy["typetext"];

        const key = JSON.stringify(typeCopy);

        const oldType = this.type2TypeName[key];
        if (oldType)
            return oldType;


        let newTypePrefix = `T${name}`;
        const docs: string[] = [];
        //if (newTypePrefix === 'Tapplication')
        //debugger;
        //if ((pveType as any).title) {
        //    docs.push('title: ' + (pveType as any).title);
        //}

        if (pveType.verbose_description) {
            docs.push(...pveType.verbose_description.split(/[\r\n]+/));
        } else if (pveType.description) {
            docs.push(...pveType.description.split(/[\r\n]+/));
        }

        //if ('pve-qm-hostpci' === (pveType as any)['format'])
        //debugger;
        for (const k of ['pattern', 'format', 'minimum', 'maximum', 'minLength', 'maxLength', 'type']) {
            if (typeof ((pveType as any)[k]) !== 'undefined') {
                let v: any = (pveType as any)[k];
                if (typeof (v) !== 'string')
                    v = JSON.stringify(v);
                if (k === 'type' && v === 'string')
                    continue;
                docs.push(`@${k} ${v}`);
            }
            delete typeCopy[k];
        }
        //if (newTypePrefix === 'pveqmhostpci') // 3
        //    debugger;

        // const key2 = JSON.stringify(typeCopy);
        //if (key2.length > 5)
        //    docs.push(`key: ${key2}`);

        // {"maxLength":40,"type":"string","typetext":"<string>"}
        if (typeof ((pveType as any).format) === 'string') {
            newTypePrefix = (pveType as any).format.replace(/-/g, '');
        } else if (key === '{"type":"string"}') {
            newTypePrefix = 'string';
        } else if (key === '{"type":"boolean"}') {
            newTypePrefix = 'boolean';
        } else if (pveType.type === 'string' && pveType.typetext === "<string>" && pveType.maxLength) {
            newTypePrefix = `String${pveType.minLength || 0}_${pveType.maxLength}`;
        } else if (pveType.type === 'integer') {
            if (typeof (pveType.minimum) === 'undefined') {
                if (typeof (pveType.maximum) === 'undefined') {
                    newTypePrefix = 'integer';
                } else {
                    newTypePrefix = `integerMax${pveType.maximum}`;
                }
            } else {
                if (typeof (pveType.maximum) === 'undefined') {
                    newTypePrefix = `integer_Min${pveType.minimum}`;
                } else {
                    newTypePrefix = `integer${pveType.minimum}_${pveType.maximum}`;
                }
            }
        }

        let newType = `${newTypePrefix}`;
        let i = 1;
        while (this.usedNamed[newType]) {
            newType = `${newTypePrefix}_${i++}`;
        }
        this.type2TypeName[key] = newType;

        const tsType = this.mapType(pveType.type || 'string');
        if (newType == tsType && !(pveType as any).enum) {
            // native Type, no remapping
            return newType;
        }

        // append doc
        let declaration = [] as string[];
        if (docs.length) {
            declaration.push(`${TAB}/**`);
            for (const doc of docs)
                declaration.push(`${TAB} * ${doc}`);
            declaration.push(`${TAB} */`);
        }

        if (pveType.type === 'string' && pveType.enum) {
            declaration.push(`${TAB}export type ${newType} = '${pveType.enum.join("' | '")}';`);
            // const fullType = `${TAB}export type ${newType} = '${pveType.enum.join("' | '")}';`;
            //this.usedNamed[newType] = fullType;
        } else {
            declaration.push(`${TAB}export type ${newType} = ${tsType};`);
        }
        this.usedNamed[newType] = declaration.join(EOL);
        return newType;
    }

    mapType(type: string) {
        if (type === 'integer')
            return 'number';
        if (type === 'array')
            return 'any[]';
        return type;
    }

    start() {
        let lineOffset = `${TAB}${TAB}`;
        this.code.push(`${TAB}export interface Api {`)
        for (const api of pveapi) {
            this.generate(api, lineOffset, new Set());
        }
        this.code.push(`${TAB}}`);
    }

    generate(node: pveApiNode, lineOffset0: string, pathVariables: Set<string>) {
        const { info, children, path, text } = node;
        let extraSemicon = ',';

        if (text.startsWith('{')) {
            let varname = text.replace(/[{}]/g, '');
            let pathParamType = 'string';
            if (varname === 'vmid')
                pathParamType = 'number';
            this.code.push(`${lineOffset0}$(${varname}: ${pathParamType}): {`);
            extraSemicon = ';';
            pathVariables = new Set<string>([...pathVariables, varname])
        } else {
            this.code.push(`${lineOffset0}${protectFieldName(text)}: {`);
        }
        const lineOffset = lineOffset0 + '    ';
        if (info) {
            for (const mtd of ['DELETE', 'GET', 'POST', 'PUT'] as const) {
                const data = info[mtd];
                if (!data)
                    continue;
                const theInfo: PveCallDesc = data;
                this.code.push(`${lineOffset}/**`);
                this.code.push(`${lineOffset} * ${theInfo.description}`);

                if (theInfo.description) {
                    this.code.push(`${lineOffset} * ${mtd} ${path}`);
                }
                if (typeof (theInfo.allowtoken) !== 'undefined') {
                    this.code.push(`${lineOffset} * @allowtoken ${theInfo.allowtoken}`);
                }
                if (typeof (theInfo.permissions) !== 'undefined') {
                    this.code.push(`${lineOffset} * @permissions ${JSON.stringify(theInfo.permissions)}`);
                }

                this.code.push(`${lineOffset} */`);
                let params = [] as string[];
                const properties = theInfo.parameters.properties;
                let allOptional = '?';
                if (properties) {
                    for (const propName of Object.keys(properties)) {

                        if (pathVariables.has(propName))
                            continue;

                        const prop = properties[propName];
                        const opt = prop.optional ? '?' : '';

                        const type = this.mapType2(prop, propName);

                        if (!prop.optional)
                            allOptional = '';

                        if (~propName.indexOf('[n]')) {
                            let max = 4;
                            const prefix = propName.replace('[n]', '');
                            if (prefix === 'link') max = 8;
                            else if (prefix === 'hostpci') max = 8;
                            else if (prefix === 'ide') max = 4;
                            else if (prefix === 'ipconfig') max = 8;
                            for (let i = 0; i < max; i++) {
                                params.push(`${prefix}${i}${opt}: ${type}`)
                            }
                        } else {
                            params.push(`${protectFieldName(propName)}${opt}: ${type}`)
                        }
                    }
                }
                let pTxt = '';
                if (params.length)
                    pTxt = `param${allOptional}: { ${params.join(', ')} }`;
                // if (path === '/nodes/{node}/qemu/{vmid}/status/current')
                //    debugger;
                let returnType = this.mapsReturn(theInfo, path, data.returns.additionalProperties);
                this.code.push(`${lineOffset}$${mtd.toLowerCase()}(${pTxt}): Promise<${this.mapType(returnType)}>;`);
            }
        }
        if (children) {
            // const lineOffset2 = lineOffset + '    ';
            for (const child of children) {
                this.generate(child, lineOffset, pathVariables);
            }
        }
        this.code.push(`${lineOffset0}}${extraSemicon}`);
    }

    genModelObject(info: PveParametersObject, lineOffset0: string, additionalProperties?: 0 | 1): string {
        if (!info.properties)
            return 'any'; // no data ...
        let lines: string[] = [];
        lines.push('{');
        let lineOffset = lineOffset0 + TAB;
        for (const pname of Object.keys(info.properties)) {
            const prop = info.properties[pname];
            let line = [] as string[];
            for (const propName of unNify(pname)) {
                line.push(`${lineOffset}/**`);
                if (prop.verbose_description) {
                    for (let entry of prop.verbose_description.split(/[\r\n]+/g)) {
                        entry = entry.trim();
                        if (entry)
                            line.push(`${lineOffset} * ${entry.trim()}`);
                    }
                } else
                    if (prop.description) {
                        for (const entry of prop.description.split(/[\r\n]+/g))
                            line.push(`${lineOffset} * ${entry.trim()}`);
                    }

                line.push(`${lineOffset} */`);
                let opt = prop.optional ? '?' : '';
                // if (prop.additionalProperties) // TODO
                let fullType = 'any';
                switch (prop.type) {
                    case 'boolean':
                        fullType = 'boolean'
                        break
                    case 'number':
                    case 'integer':
                        fullType = 'number'
                        break
                    case 'string':
                        fullType = 'string'
                        break
                    case 'array':
                        fullType = this.genModelArray(prop, lineOffset + TAB);
                        break
                    case 'object':
                        fullType = this.genModelObject(prop, lineOffset + TAB);
                        break
                    default:
                        fullType = 'any';
                }
                line.push(`${lineOffset}${propName}${opt}: ${fullType};`);
            }
            lines.push(line.join(EOL));
        }
        if (additionalProperties) {
            lines.push(`${lineOffset}/**`);
            lines.push(`${lineOffset} * additionalProperties`);
            lines.push(`${lineOffset} */`);
            lines.push(`${lineOffset}[additionalProperties: string]: any;`);
        }
        lines.push(`${lineOffset0}}`);
        return lines.join(EOL);
    }

    genModelArray(info: PveParametersArray, lineOffset0: string): string {
        if (!info.items) {
            return 'string[]'
        }
        if (info.items.type === 'string') {
            return 'string[]'
        }
        if (info.items.type === 'number') {
            return 'number[]'
        }
        if (info.items.type === 'array') {
            return this.genModelArray(info.items, lineOffset0) + '[]';
        }
        if (info.items.type === 'object') {
            return this.genModelObject(info.items, lineOffset0) + '[]';
        }
        return 'any[]';
    }

    mapsReturn(theInfo: PveCallDesc, path: string, additionalProperties?: 0 | 1): string {
        const returns = theInfo.returns;
        if (!returns)
            return 'void';
        if (returns.type === 'null') {
            return 'null';
        };

        if (returns.type === 'array') {
            const ret: PveParametersArray = returns;
            if (!ret.items)
                return 'string[]';
            if (ret.items.type === 'number') {
                return 'number[]';
            }
            if (ret.items.type === 'string') {
                return 'string[]';
            }
        }
        let retTypeOptfix = '';
        let typeName = snakeToLowerCamel(path.replace(/{[a-z]+}/g, '').replace(/\/\//g, ' ').replace(/\//g, ' ').trim() + ' ' + theInfo.name);

        let fullType = 'any';
        //if ('nodesLxcFirewallIndex' === typeName) {
        //    debugger;
        //}
        if (typeName === 'nodesIndex') {
            // the only duplicated type
            if (path.endsWith('}')) {
                typeName += '2';
            }
        }

        if (returns.type === 'array') {
            if (returns.items && returns.items.type === 'object') {
                typeName = typeName.replace(/list$/, '')
                fullType = this.genModelObject(returns.items, `${TAB}`, additionalProperties || 1);
                retTypeOptfix = '[]';
            } else {
                fullType = this.genModelArray(returns, `${TAB}`);
            }
        } else if (returns.type === 'object') {
            fullType = this.genModelObject(returns, `${TAB}`, additionalProperties || 1);
        }
        if (fullType === 'any') {
            typeName = 'any';
            // return any;
            // this.retTypes.push(`export type ${TypeName} = ${fullType};`);
        }
        else {
            this.retTypes.push(`${TAB}export interface ${typeName} ${fullType}`);
        }
        return typeName + retTypeOptfix;
    }
}
const gen = new Generator();
gen.start();
const dest = path.join(__dirname, '..', '..', 'api', 'src', 'model.ts');
console.log('writing to ', dest);
fs.writeFileSync(dest, gen.getFinalData(), { encoding: 'utf8' })