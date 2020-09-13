import pveapi from './pveapi';
import { pveApiNode, PveCallParameters } from './pveapiModel';
import fs from 'fs';
import path from 'path';

const EOL = '\n';

const protectFieldName = (name: string) => {
    if (~name.indexOf('-'))
        return `'${name}'`;
    return name;
}


export class Generator {
    code = [] as string[];
    // lineoffset = '';
    type2TypeName: { [key: string]: string } = {};
    usedNamed: { [name: string]: string } = {};


    getFinalData(): string {
        const typings = this.getNewType().join(EOL)
        const code = this.code.join(EOL);
        return typings + EOL + code + EOL;
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
        delete typeCopy["title"];
        delete typeCopy["requires"]; // 3544 lines
        delete typeCopy["optional"];
        delete typeCopy["typetext"];

        const key = JSON.stringify(typeCopy);
        //if (key === '{"maxLength":128,"type":"string"}')
        //    console.log('aaa');

        const oldType = this.type2TypeName[key];
        if (oldType)
            return oldType;

        let newTypePrefix = `T${name}`;

        // {"maxLength":40,"type":"string","typetext":"<string>"}
        if (typeof((pveType as any).format) === 'string') {
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
                const fullType = `export type ${newType} = '${pveType.enum.join("'| '")}';`;
                this.usedNamed[newType] = fullType;
                return newType;
            }
        }
        const tsType = this.mapType(pveType.type || 'string');
        if (newType != tsType)
            this.usedNamed[newType] = `// ${key}${EOL}export type ${newType} = ${tsType};`;
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
            this.generate(api, lineOffset);
        }
        this.code.push('}')
    }

    generate(node: pveApiNode, lineOffset0: string) {
        const { info, children, path, text } = node;
        let extraSemicon = '';
        if (text.startsWith('{')) {
            let varname = text.replace(/[{}]/g, '');
            this.code.push(`${lineOffset0}$(${varname}: string): {`);
            extraSemicon = ';';
        } else {
            this.code.push(`${lineOffset0}${protectFieldName(text)}: {`);
        }
        const lineOffset = lineOffset0 + '    ';
        if (info) {
            for (const mtd of ['DELETE', 'GET', 'POST', 'PUT'] as const) {
                const theInfo = info[mtd];
                if (theInfo) {
                    this.code.push(`${lineOffset}/**`);
                    this.code.push(`${lineOffset} * ${theInfo.description}`);
                    if (theInfo.description) {
                        this.code.push(`${lineOffset} * ${mtd} ${path}`);
                    }
                    this.code.push(`${lineOffset} */`);
                    let params = [] as string[];
                    const properties = theInfo.parameters.properties;
                    let allOptional = '?';
                    if (properties) {
                        for (const propName of Object.keys(properties)) {
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
                        pTxt = `param${allOptional}: {${params.join(', ')}}`;

                    let returnType = 'any'

                    if (theInfo.returns && theInfo.returns.type) {
                        returnType = theInfo.returns.type;
                    }

                    this.code.push(`${lineOffset}$${mtd.toLowerCase()}(${pTxt}): Promise<${this.mapType(returnType)}>;`);
                }
            }
        }
        if (children) {
            // const lineOffset2 = lineOffset + '    ';
            for (const child of children) {
                this.generate(child, lineOffset);
            }
        }
        this.code.push(`${lineOffset0}}${extraSemicon}`);
    }
}
const gen = new Generator();
gen.start();

fs.writeFileSync(path.join(__dirname, '..', 'api', 'index.ts'), gen.getFinalData(), { encoding: 'utf8' })