// import pveapi from './pveapi6';
// import pveapi from './pveapi7';
import pveapi from './pveapi8';
import { pveApiNode, PveCallParameters, PveCallDesc, PveParametersArray, PveParametersObject, PveHttpMtd, PveParametersUndef } from './pveapiModel';
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
    // retTypes = [] as string[];
    retTypes: { [key: string]: string } = {};

    code = [] as string[];
    // lineoffset = '';
    type2TypeName: { [key: string]: string } = {};
    usedNamed: { [name: string]: string } = {};

    getFinalData(): string {
        const licence = `// Proxmox-API Interactive proxmox API for developpers how do not like reading docs
// Copyright (C) 2020-2024  Chemouni Uriel <uchemouni@gmail.com>
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
`
        const header = 'export namespace Proxmox {';
        const typings = this.getNewType().join(EOL)
        const code = this.code.join(EOL);
        // const retTypes = this.retTypes.join(EOL);
        const retTypes = this.getretTypes().join(EOL);
        const footer = `}${EOL}export default Proxmox;`;

        return licence + EOL + header + EOL + typings + EOL + retTypes + EOL + code + EOL + footer + EOL;
    }

    appendComment(dest: string[], lineOffset: string, ...lines: string[]) {
        dest.push(`${lineOffset}/**`);
        this.appendCommentLines(dest, lineOffset, ...lines);
        dest.push(`${lineOffset} */`);
    }

    appendCommentLines(dest: string[], lineOffset: string, ...lines: string[]) {
        for (const doc of lines) {
            let line = doc.trim();
            if (!doc.startsWith('@'))
                line = line.replace(/([{}])/g, '\\$1')
            dest.push(`${lineOffset} * ${line}`);
        }
    }

    getNewType(): string[] {
        const keys = Object.keys(this.usedNamed);
        keys.sort();
        const types: string[] = [];
        for (const key of keys) {
            types.push(this.usedNamed[key]);
        }
        return types;
        // return Object.values(this.usedNamed);
    }

    getretTypes(): string[] {
        const keys = Object.keys(this.retTypes);
        keys.sort();
        const types: string[] = [];
        for (const key of keys) {
            types.push(this.retTypes[key]);
        }
        return types;
        // return Object.values(this.usedNamed);
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
                    // replace minus signe by a __
                    newTypePrefix = `integer_Min${pveType.minimum}`.replace('-', '__');
                } else {
                    newTypePrefix = `integer${pveType.minimum}_${pveType.maximum}`;
                }
            }
        }

        let newType = `${newTypePrefix}`;
        let i = 1;
        while (this.usedNamed[newType]) {
            // handle colision
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
            this.appendComment(declaration, TAB, ...docs)
        }

        if (pveType.type === 'string' && pveType.enum) {
            declaration.push(`${TAB}export type ${newType} = '${pveType.enum.sort().join("' | '")}';`);
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
        //if (path === '/nodes/{node}/qemu/{vmid}/vncproxy')
        //    debugger;
        if (info) {
            for (const mtd of Object.keys(info)) {
                const theInfo: PveCallDesc = info[mtd as PveHttpMtd] as PveCallDesc;
                this.code.push(`${lineOffset}/**`);
                this.appendCommentLines(this.code, lineOffset, theInfo.description);

                if (theInfo.description) {
                    this.appendCommentLines(this.code, lineOffset, `${mtd} ${path}`);
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
                let returnType = this.mapsReturn(node, theInfo, path);
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

    genModelObject(info: PveParametersObject | PveParametersUndef, lineOffset0: string, additionalProperties?: 0 | 1): string {
        if (!info.properties)
            return 'any'; // no data ...
        let lines: string[] = [];
        lines.push('{');
        let lineOffset = lineOffset0 + TAB;
        for (const pname of Object.keys(info.properties)) {
            const prop = info.properties[pname];
            let line = [] as string[];
            for (const propName of unNify(pname)) {
                // propName can be {id}
                const comments = [];
                if (prop.verbose_description) {
                    for (let entry of prop.verbose_description.split(/[\r\n]+/g)) {
                        entry = entry.trim();
                        if (entry)
                            comments.push(entry)
                    }
                } else {
                    if (prop.description) {
                        for (const entry of prop.description.split(/[\r\n]+/g))
                            comments.push(entry)
                    }
                }
                if (comments.length) {
                    this.appendComment(line, lineOffset, ...comments);
                }
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
                let propName2 = propName;
                if (propName.startsWith('{'))
                    propName2 = `$(${propName2.replace(/[{}]+/g, '')}: string)`;
                line.push(`${lineOffset}${propName2}${opt}: ${fullType};`);
            }
            lines.push(line.join(EOL));
        }
        if (additionalProperties) {
            this.appendComment(lines, lineOffset, 'additionalProperties')
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

    mapsReturn(node: pveApiNode, theInfo: PveCallDesc, path: string): string {
        const returns = theInfo.returns;
        const additionalProperties = theInfo.returns.additionalProperties;
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
        } else if (returns.type === 'number') {
            return 'number' + retTypeOptfix
        } else if (returns.type === 'integer') {
            return 'number' + retTypeOptfix
        } else if (returns.type === 'boolean') {
            return 'boolean' + retTypeOptfix
        } else if (returns.type === 'string') {
            return 'string' + retTypeOptfix
        } else if (returns.type === 'any') {
            return 'any'
        } else if (returns.properties) {
            fullType = this.genModelObject(returns, `${TAB}`, additionalProperties || 1);
        }
        if (fullType === 'any') {
            typeName = 'any';
            // return any;
            // this.retTypes.push(`export type ${TypeName} = ${fullType};`);
        }
        else {
            const code: string[] = [];
            this.appendComment(code, TAB, `Returned by ${theInfo.method} ${node.path}`);
            code.push(`${TAB}export interface ${typeName} ${fullType}`);
            this.retTypes[typeName] = code.join(EOL);
//            this.retTypes.push(
        }
        return typeName + retTypeOptfix;
    }
}
const gen = new Generator();
gen.start();
const dest = path.join(__dirname, '..', '..', 'api', 'src', 'model.ts');
console.log(`Writing to ${dest}`);
fs.writeFileSync(dest, gen.getFinalData(), { encoding: 'utf8' })
console.log(`${dest} Updated.`);
