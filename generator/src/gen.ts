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


export class Generator {
    retTypes = [] as string[];

    code = [] as string[];
    // lineoffset = '';
    type2TypeName: { [key: string]: string } = {};
    usedNamed: { [name: string]: string } = {};


    getFinalData(): string {
        const typings = this.getNewType().join(EOL)
        const code = this.code.join(EOL);
        const retTypes = this.retTypes.join(EOL);

        return typings + EOL + retTypes + EOL + code + EOL;
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
        delete typeCopy["title"];
        delete typeCopy["requires"]; // 3544 lines
        delete typeCopy["optional"];
        delete typeCopy["typetext"];

        const key = JSON.stringify(typeCopy);

        const oldType = this.type2TypeName[key];
        if (oldType)
            return oldType;


        let newTypePrefix = `T${name}`;

        const docs: string[] = [];

        for (const k of ['pattern', 'format', 'minimum', 'maximum', 'minLength', 'maxLength', 'type']) {
            if (typeof ((pveType as any)[k]) !== 'undefined') {
                let v: any = (pveType as any)[k];
                if (typeof (v) !== 'string')
                    v = JSON.stringify(v);
                docs.push(`@${k} ${v}`);
            }
            delete typeCopy[k];
        }

        const key2 = JSON.stringify(typeCopy);
        if (key2.length > 10)
            docs.push(`key: ${key2}`);

        // {"maxLength":40,"type":"string","typetext":"<string>"}
        if (typeof ((pveType as any).format) === 'string') {
            newTypePrefix = (pveType as any).format.replace(/-/g, '');
        } else if (key === '{"type":"string"}') {
            newTypePrefix = 'string';
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
        if (pveType.type === 'string') {
            if (pveType.enum) {
                const fullType = `export type ${newType} = '${pveType.enum.join("' | '")}';`;
                this.usedNamed[newType] = fullType;
                return newType;
            }
        }
        const tsType = this.mapType(pveType.type || 'string');
        if (newType != tsType) {
            let declaration = [] as string[];
            if (docs.length) {
                declaration.push('/**');
                for (const doc of docs)
                    declaration.push(` * ${doc}`);
                declaration.push(' */');
            }
            declaration.push(`export type ${newType} = ${tsType};`);
            this.usedNamed[newType] = declaration.join(EOL);
        }
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
        let lineOffset = '    ';
        this.code.push('export interface Proxmox {')
        for (const api of pveapi) {
            this.generate(api, lineOffset, new Set());
        }
        this.code.push('}')
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
                let returnType = this.mapsReturn(theInfo, path);
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

    genModelObject(info: PveParametersObject, lineOffset0: string): string {
        if (!info.properties)
            return 'any'; // no data ...
        let lines: string[] = [];
        lines.push('{');
        let lineOffset = lineOffset0 + '    ';
        for (const pname of Object.keys(info.properties)) {
            const prop = info.properties[pname];
            let line = [] as string[];
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
                    fullType = this.genModelArray(prop);
                    break
                case 'object':
                    fullType = this.genModelObject(prop, lineOffset + '    ');
                    break
                default:
                    fullType = 'any';
            }
            for (const propName of unNify(pname)) {

                line.push(`${lineOffset}${propName}${opt}: ${fullType};`);
            }
            lines.push(line.join(EOL));
        }
        lines.push('}');
        return lines.join(EOL);
    }

    genModelArray(info: PveParametersArray): string {
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
            return this.genModelArray(info.items) + '[]';
        }
        if (info.items.type === 'object') {
            return this.genModelObject(info.items, '') + '[]';
        }
        return 'any[]';
    }


    mapsReturn(theInfo: PveCallDesc, path: string): string {
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
        let TypeName = 'ret' + path.replace(/\//g, '_').replace(/-/g, '_').replace(/[{}]/g, '') + theInfo.method;
        let fullType = 'any';
        if (returns.type === 'array') {
            if (returns.items && returns.items.type === 'object') {
                fullType = this.genModelObject(returns.items, '');
                retTypeOptfix = '[]';
                // TypeName = TypeName + '[]';
            } else {
                fullType = this.genModelArray(returns);
            }
        } else if (returns.type === 'object') {
            fullType = this.genModelObject(returns, '');
        }
        if (fullType === 'any')
            this.retTypes.push(`export type ${TypeName} = ${fullType};`);
        else
            this.retTypes.push(`export interface ${TypeName} ${fullType};`);
        return TypeName + retTypeOptfix;
    }
}
const gen = new Generator();
gen.start();
const dest = path.join(__dirname, '..', '..', 'api', 'src', 'model.ts');
console.log('writing to ', dest);
fs.writeFileSync(dest, gen.getFinalData(), { encoding: 'utf8' })