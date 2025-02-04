module.exports = {

"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "flattenTypes": (()=>flattenTypes),
    "formatOddHexstrings": (()=>formatOddHexstrings),
    "formatParam": (()=>formatParam),
    "isAbiConstructorFragment": (()=>isAbiConstructorFragment),
    "isAbiErrorFragment": (()=>isAbiErrorFragment),
    "isAbiEventFragment": (()=>isAbiEventFragment),
    "isAbiFragment": (()=>isAbiFragment),
    "isAbiFunctionFragment": (()=>isAbiFunctionFragment),
    "isOddHexstring": (()=>isOddHexstring),
    "isSimplifiedStructFormat": (()=>isSimplifiedStructFormat),
    "jsonInterfaceMethodToString": (()=>jsonInterfaceMethodToString),
    "mapStructNameAndType": (()=>mapStructNameAndType),
    "mapStructToCoderFormat": (()=>mapStructToCoderFormat),
    "mapTypes": (()=>mapTypes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/string_manipulation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
;
;
const isAbiFragment = (item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item) && typeof item === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item.type) && [
        'function',
        'event',
        'constructor',
        'error'
    ].includes(item.type);
const isAbiErrorFragment = (item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item) && typeof item === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item.type) && item.type === 'error';
const isAbiEventFragment = (item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item) && typeof item === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item.type) && item.type === 'event';
const isAbiFunctionFragment = (item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item) && typeof item === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item.type) && item.type === 'function';
const isAbiConstructorFragment = (item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item) && typeof item === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(item.type) && item.type === 'constructor';
const isSimplifiedStructFormat = (type)=>typeof type === 'object' && typeof type.components === 'undefined' && typeof type.name === 'undefined';
const mapStructNameAndType = (structName)=>structName.includes('[]') ? {
        type: 'tuple[]',
        name: structName.slice(0, -2)
    } : {
        type: 'tuple',
        name: structName
    };
const mapStructToCoderFormat = (struct)=>{
    const components = [];
    for (const key of Object.keys(struct)){
        const item = struct[key];
        if (typeof item === 'object') {
            components.push(Object.assign(Object.assign({}, mapStructNameAndType(key)), {
                components: mapStructToCoderFormat(item)
            }));
        } else {
            components.push({
                name: key,
                type: struct[key]
            });
        }
    }
    return components;
};
const mapTypes = (types)=>{
    const mappedTypes = [];
    for (const type of types){
        let modifiedType = type;
        // Clone object
        if (typeof type === 'object') {
            modifiedType = Object.assign({}, type);
        }
        // Remap `function` type params to bytes24 since Ethers does not
        // recognize former type. Solidity docs say `Function` is a bytes24
        // encoding the contract address followed by the function selector hash.
        if (typeof type === 'object' && type.type === 'function') {
            modifiedType = Object.assign(Object.assign({}, type), {
                type: 'bytes24'
            });
        }
        if (isSimplifiedStructFormat(modifiedType)) {
            const structName = Object.keys(modifiedType)[0];
            mappedTypes.push(Object.assign(Object.assign({}, mapStructNameAndType(structName)), {
                components: mapStructToCoderFormat(modifiedType[structName])
            }));
        } else {
            mappedTypes.push(modifiedType);
        }
    }
    return mappedTypes;
};
const isOddHexstring = (param)=>typeof param === 'string' && /^(-)?0x[0-9a-f]*$/i.test(param) && param.length % 2 === 1;
const formatOddHexstrings = (param)=>isOddHexstring(param) ? `0x0${param.substring(2)}` : param;
const paramTypeBytes = /^bytes([0-9]*)$/;
const paramTypeBytesArray = /^bytes([0-9]*)\[\]$/;
const paramTypeNumber = /^(u?int)([0-9]*)$/;
const paramTypeNumberArray = /^(u?int)([0-9]*)\[\]$/;
const formatParam = (type, _param)=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // clone if _param is an object
    const param = typeof _param === 'object' && !Array.isArray(_param) ? Object.assign({}, _param) : _param;
    // Format BN to string
    if (param instanceof BigInt || typeof param === 'bigint') {
        return param.toString(10);
    }
    if (paramTypeBytesArray.exec(type) || paramTypeNumberArray.exec(type)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const paramClone = [
            ...param
        ];
        return paramClone.map((p)=>formatParam(type.replace('[]', ''), p));
    }
    // Format correct width for u?int[0-9]*
    let match = paramTypeNumber.exec(type);
    if (match) {
        const size = parseInt(match[2] ? match[2] : '256', 10);
        if (size / 8 < param.length) {
            // pad to correct bit width
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leftPad"])(param, size);
        }
    }
    // Format correct length for bytes[0-9]+
    match = paramTypeBytes.exec(type);
    if (match) {
        const hexParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUint8Array"])(param) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(param) : param;
        // format to correct length
        const size = parseInt(match[1], 10);
        if (size) {
            let maxSize = size * 2;
            if (param.startsWith('0x')) {
                maxSize += 2;
            }
            // pad to correct length
            const paddedParam = hexParam.length < maxSize ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rightPad"])(param, size * 2) : hexParam;
            return formatOddHexstrings(paddedParam);
        }
        return formatOddHexstrings(hexParam);
    }
    return param;
};
const flattenTypes = (includeTuple, puts)=>{
    const types = [];
    puts.forEach((param)=>{
        if (typeof param.components === 'object') {
            if (!param.type.startsWith('tuple')) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"](`Invalid value given "${param.type}". Error: components found but type is not tuple.`);
            }
            const arrayBracket = param.type.indexOf('[');
            const suffix = arrayBracket >= 0 ? param.type.substring(arrayBracket) : '';
            const result = flattenTypes(includeTuple, param.components);
            if (Array.isArray(result) && includeTuple) {
                types.push(`tuple(${result.join(',')})${suffix}`);
            } else if (!includeTuple) {
                types.push(`(${result.join(',')})${suffix}`);
            } else {
                types.push(`(${result.join()})`);
            }
        } else {
            types.push(param.type);
        }
    });
    return types;
};
const jsonInterfaceMethodToString = (json)=>{
    var _a, _b, _c, _d;
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (isAbiErrorFragment(json) || isAbiEventFragment(json) || isAbiFunctionFragment(json)) {
        if ((_a = json.name) === null || _a === void 0 ? void 0 : _a.includes('(')) {
            return json.name;
        }
        return `${(_b = json.name) !== null && _b !== void 0 ? _b : ''}(${flattenTypes(false, (_c = json.inputs) !== null && _c !== void 0 ? _c : []).join(',')})`;
    }
    // Constructor fragment
    return `(${flattenTypes(false, (_d = json.inputs) !== null && _d !== void 0 ? _d : []).join(',')})`;
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/errors_api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ /**
 *
 *  @module ABI
 */ __turbopack_esm__({
    "encodeErrorSignature": (()=>encodeErrorSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-ssr] (ecmascript)");
;
;
;
const encodeErrorSignature = (functionName)=>{
    if (typeof functionName !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbiErrorFragment"])(functionName)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid parameter value in encodeErrorSignature');
    }
    let name;
    if (functionName && (typeof functionName === 'function' || typeof functionName === 'object')) {
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(functionName);
    } else {
        name = functionName;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha3Raw"])(name);
}; //# sourceMappingURL=errors_api.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/events_api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ /**
 *
 *  @module ABI
 */ __turbopack_esm__({
    "encodeEventSignature": (()=>encodeEventSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-ssr] (ecmascript)");
;
;
;
const encodeEventSignature = (functionName)=>{
    if (typeof functionName !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbiEventFragment"])(functionName)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid parameter value in encodeEventSignature');
    }
    let name;
    if (functionName && (typeof functionName === 'function' || typeof functionName === 'object')) {
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(functionName);
    } else {
        name = functionName;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha3Raw"])(name);
}; //# sourceMappingURL=events_api.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "WORD_SIZE": (()=>WORD_SIZE),
    "alloc": (()=>alloc),
    "allocUnsafe": (()=>allocUnsafe),
    "convertExternalAbiParameter": (()=>convertExternalAbiParameter),
    "extractArrayType": (()=>extractArrayType),
    "isAbiParameter": (()=>isAbiParameter),
    "isDynamic": (()=>isDynamic),
    "toAbiParams": (()=>toAbiParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$0$2e$7$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/abitype@0.7.1_typescript@5.7.3_zod@3.24.1/node_modules/abitype/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
const WORD_SIZE = 32;
function alloc(size = 0) {
    var _a;
    if (((_a = globalThis.Buffer) === null || _a === void 0 ? void 0 : _a.alloc) !== undefined) {
        const buf = globalThis.Buffer.alloc(size);
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    var _a;
    if (((_a = globalThis.Buffer) === null || _a === void 0 ? void 0 : _a.allocUnsafe) !== undefined) {
        const buf = globalThis.Buffer.allocUnsafe(size);
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return new Uint8Array(size);
}
function convertExternalAbiParameter(abiParam) {
    var _a, _b;
    return Object.assign(Object.assign({}, abiParam), {
        name: (_a = abiParam.name) !== null && _a !== void 0 ? _a : '',
        components: (_b = abiParam.components) === null || _b === void 0 ? void 0 : _b.map((c)=>convertExternalAbiParameter(c))
    });
}
function isAbiParameter(param) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(param) && typeof param === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(param.type) && typeof param.type === 'string';
}
function toAbiParams(abi) {
    return abi.map((input)=>{
        var _a;
        if (isAbiParameter(input)) {
            return input;
        }
        if (typeof input === 'string') {
            return convertExternalAbiParameter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$0$2e$7$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(input.replace(/tuple/, '')));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSimplifiedStructFormat"])(input)) {
            const structName = Object.keys(input)[0];
            const structInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapStructNameAndType"])(structName);
            structInfo.name = (_a = structInfo.name) !== null && _a !== void 0 ? _a : '';
            return Object.assign(Object.assign({}, structInfo), {
                components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapStructToCoderFormat"])(input[structName])
            });
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid abi');
    });
}
function extractArrayType(param) {
    const arrayParenthesisStart = param.type.lastIndexOf('[');
    const arrayParamType = param.type.substring(0, arrayParenthesisStart);
    const sizeString = param.type.substring(arrayParenthesisStart);
    let size = -1;
    if (sizeString !== '[]') {
        size = Number(sizeString.slice(1, -1));
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(size)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid fixed array size', {
                size: sizeString
            });
        }
    }
    return {
        param: {
            type: arrayParamType,
            name: '',
            components: param.components
        },
        size
    };
}
function isDynamic(param) {
    var _a, _b;
    if (param.type === 'string' || param.type === 'bytes' || param.type.endsWith('[]')) return true;
    if (param.type === 'tuple') {
        return (_b = (_a = param.components) === null || _a === void 0 ? void 0 : _a.some(isDynamic)) !== null && _b !== void 0 ? _b : false;
    }
    if (param.type.endsWith(']')) {
        return isDynamic(extractArrayType(param).param);
    }
    return false;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeAddress": (()=>decodeAddress),
    "encodeAddress": (()=>encodeAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-ssr] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
;
;
;
;
const ADDRESS_BYTES_COUNT = 20;
const ADDRESS_OFFSET = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"] - ADDRESS_BYTES_COUNT;
function encodeAddress(param, input) {
    if (typeof input !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('address type expects string as input type', {
            value: input,
            name: param.name,
            type: param.type
        });
    }
    let address = input.toLowerCase();
    if (!address.startsWith('0x')) {
        address = `0x${address}`;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input is not valid address', {
            value: input,
            name: param.name,
            type: param.type
        });
    }
    // for better performance, we could convert hex to destination bytes directly (encoded var)
    const addressBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].hexToUint8Array(address);
    // expand address to WORD_SIZE
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    encoded.set(addressBytes, ADDRESS_OFFSET);
    return {
        dynamic: false,
        encoded
    };
}
function decodeAddress(_param, bytes) {
    const addressBytes = bytes.subarray(ADDRESS_OFFSET, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    if (addressBytes.length !== ADDRESS_BYTES_COUNT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid decoding input, not enough bytes to decode address', {
            bytes
        });
    }
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].uint8ArrayToHexString(addressBytes);
    // should we check is decoded value is valid address?
    // if(!isAddress(result)) {
    //     throw new AbiError("encoded data is not valid address", {
    //         address: result,
    //     });
    // }
    return {
        result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(result),
        encoded: bytes.subarray(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]),
        consumed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]
    };
} //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/numbersLimits.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ /*
 * this variable contains the precalculated limits for all the numbers for uint and int types
 */ __turbopack_esm__({
    "numberLimits": (()=>numberLimits)
});
const numberLimits = new Map();
let base = BigInt(256); // 2 ^ 8 = 256
for(let i = 8; i <= 256; i += 8){
    numberLimits.set(`uint${i}`, {
        min: BigInt(0),
        max: base - BigInt(1)
    });
    numberLimits.set(`int${i}`, {
        min: -base / BigInt(2),
        max: base / BigInt(2) - BigInt(1)
    });
    base *= BigInt(256);
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
numberLimits.set(`int`, numberLimits.get('int256'));
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
numberLimits.set(`uint`, numberLimits.get('uint256')); //# sourceMappingURL=numbersLimits.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeNumber": (()=>decodeNumber),
    "encodeNumber": (()=>encodeNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$numbersLimits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/numbersLimits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/string_manipulation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-ssr] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
;
;
;
;
;
// eslint-disable-next-line no-bitwise
const mask = BigInt(1) << BigInt(256);
function bigIntToUint8Array(value, byteLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]) {
    let hexValue;
    if (value < 0) {
        hexValue = (mask + value).toString(16);
    } else {
        hexValue = value.toString(16);
    }
    hexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])(hexValue, byteLength * 2);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].hexToUint8Array(hexValue);
}
function uint8ArrayToBigInt(value, max) {
    const hexValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].uint8ArrayToHexString(value);
    const result = BigInt(hexValue);
    if (result <= max) return result;
    return result - mask;
}
function encodeNumber(param, input) {
    let value;
    try {
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBigInt"])(input);
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input is not number value', {
            type: param.type,
            value: input,
            name: param.name
        });
    }
    const limit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$numbersLimits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberLimits"].get(param.type);
    if (!limit) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided abi contains invalid number datatype', {
            type: param.type
        });
    }
    if (value < limit.min) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input is less then minimum for given type', {
            type: param.type,
            value: input,
            name: param.name,
            minimum: limit.min.toString()
        });
    }
    if (value > limit.max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input is greater then maximum for given type', {
            type: param.type,
            value: input,
            name: param.name,
            maximum: limit.max.toString()
        });
    }
    return {
        dynamic: false,
        encoded: bigIntToUint8Array(value)
    };
}
function decodeNumber(param, bytes) {
    if (bytes.length < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Not enough bytes left to decode', {
            param,
            bytesLeft: bytes.length
        });
    }
    const boolBytes = bytes.subarray(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    const limit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$numbersLimits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberLimits"].get(param.type);
    if (!limit) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided abi contains invalid number datatype', {
            type: param.type
        });
    }
    const numberResult = uint8ArrayToBigInt(boolBytes, limit.max);
    if (numberResult < limit.min) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('decoded value is less then minimum for given type', {
            type: param.type,
            value: numberResult,
            name: param.name,
            minimum: limit.min.toString()
        });
    }
    if (numberResult > limit.max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('decoded value is greater then maximum for given type', {
            type: param.type,
            value: numberResult,
            name: param.name,
            maximum: limit.max.toString()
        });
    }
    return {
        result: numberResult,
        encoded: bytes.subarray(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]),
        consumed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]
    };
} //# sourceMappingURL=number.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bool.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeBool": (()=>decodeBool),
    "encodeBoolean": (()=>encodeBoolean)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
;
;
;
;
function encodeBoolean(param, input) {
    let value;
    try {
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBool"])(input);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidBooleanError"]) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input is not valid boolean value', {
                type: param.type,
                value: input,
                name: param.name
            });
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeNumber"])({
        type: 'uint8',
        name: ''
    }, Number(value));
}
function decodeBool(_param, bytes) {
    const numberResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumber"])({
        type: 'uint8',
        name: ''
    }, bytes);
    if (numberResult.result > 1 || numberResult.result < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid boolean value encoded', {
            boolBytes: bytes.subarray(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]),
            numberResult
        });
    }
    return {
        result: numberResult.result === BigInt(1),
        encoded: numberResult.encoded,
        consumed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]
    };
} //# sourceMappingURL=bool.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeBytes": (()=>decodeBytes),
    "encodeBytes": (()=>encodeBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
;
;
;
;
;
const MAX_STATIC_BYTES_COUNT = 32;
function encodeBytes(param, input) {
    // hack for odd length hex strings
    if (typeof input === 'string' && input.length % 2 !== 0) {
        // eslint-disable-next-line no-param-reassign
        input += '0';
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(input)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input is not valid bytes value', {
            type: param.type,
            value: input,
            name: param.name
        });
    }
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToUint8Array"])(input);
    const [, size] = param.type.split('bytes');
    // fixed size
    if (size) {
        if (Number(size) > MAX_STATIC_BYTES_COUNT || Number(size) < 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('invalid bytes type. Static byte type can have between 1 and 32 bytes', {
                type: param.type
            });
        }
        if (Number(size) < bytes.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('provided input size is different than type size', {
                type: param.type,
                value: input,
                name: param.name
            });
        }
        const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
        encoded.set(bytes);
        return {
            dynamic: false,
            encoded
        };
    }
    const partsLength = Math.ceil(bytes.length / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    // one word for length of data + WORD for each part of actual data
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"] + partsLength * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    encoded.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeNumber"])({
        type: 'uint32',
        name: ''
    }, bytes.length).encoded);
    encoded.set(bytes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    return {
        dynamic: true,
        encoded
    };
}
function decodeBytes(param, bytes) {
    const [, sizeString] = param.type.split('bytes');
    let size = Number(sizeString);
    let remainingBytes = bytes;
    let partsCount = 1;
    let consumed = 0;
    if (!size) {
        // dynamic bytes
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumber"])({
            type: 'uint32',
            name: ''
        }, remainingBytes);
        size = Number(result.result);
        consumed += result.consumed;
        remainingBytes = result.encoded;
        partsCount = Math.ceil(size / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]);
    }
    if (size > bytes.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('there is not enough data to decode', {
            type: param.type,
            encoded: bytes,
            size
        });
    }
    return {
        result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(remainingBytes.subarray(0, size)),
        encoded: remainingBytes.subarray(partsCount * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]),
        consumed: consumed + partsCount * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]
    };
} //# sourceMappingURL=bytes.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/string.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeString": (()=>decodeString),
    "encodeString": (()=>encodeString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
;
;
;
function encodeString(_param, input) {
    if (typeof input !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('invalid input, should be string', {
            input
        });
    }
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8ToBytes"])(input);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBytes"])({
        type: 'bytes',
        name: ''
    }, bytes);
}
function decodeString(_param, bytes) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytes"])({
        type: 'bytes',
        name: ''
    }, bytes);
    return {
        result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToUtf8"])(r.result),
        encoded: r.encoded,
        consumed: r.consumed
    };
} //# sourceMappingURL=string.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "encodeDynamicParams": (()=>encodeDynamicParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-ssr] (ecmascript)");
;
;
;
function encodeDynamicParams(encodedParams) {
    let staticSize = 0;
    let dynamicSize = 0;
    const staticParams = [];
    const dynamicParams = [];
    // figure out static size
    for (const encodedParam of encodedParams){
        if (encodedParam.dynamic) {
            staticSize += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"];
        } else {
            staticSize += encodedParam.encoded.length;
        }
    }
    for (const encodedParam of encodedParams){
        if (encodedParam.dynamic) {
            staticParams.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeNumber"])({
                type: 'uint256',
                name: ''
            }, staticSize + dynamicSize));
            dynamicParams.push(encodedParam);
            dynamicSize += encodedParam.encoded.length;
        } else {
            staticParams.push(encodedParam);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(...staticParams.map((p)=>p.encoded), ...dynamicParams.map((p)=>p.encoded));
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeParamFromAbiParameter": (()=>decodeParamFromAbiParameter),
    "encodeParamFromAbiParameter": (()=>encodeParamFromAbiParameter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bytes.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/array.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/tuple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bool.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/string.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function encodeParamFromAbiParameter(param, value) {
    if (param.type === 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeString"])(param, value);
    }
    if (param.type === 'bool') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBoolean"])(param, value);
    }
    if (param.type === 'address') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAddress"])(param, value);
    }
    if (param.type === 'tuple') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeTuple"])(param, value);
    }
    if (param.type.endsWith(']')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeArray"])(param, value);
    }
    if (param.type.startsWith('bytes')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBytes"])(param, value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeNumber"])(param, value);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Unsupported', {
        param,
        value
    });
}
function decodeParamFromAbiParameter(param, bytes) {
    if (param.type === 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString"])(param, bytes);
    }
    if (param.type === 'bool') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBool"])(param, bytes);
    }
    if (param.type === 'address') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAddress"])(param, bytes);
    }
    if (param.type === 'tuple') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTuple"])(param, bytes);
    }
    if (param.type.endsWith(']')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArray"])(param, bytes);
    }
    if (param.type.startsWith('bytes')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytes"])(param, bytes);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumber"])(param, bytes);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Unsupported', {
        param,
        bytes
    });
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/array.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeArray": (()=>decodeArray),
    "encodeArray": (()=>encodeArray)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function encodeArray(param, values) {
    if (!Array.isArray(values)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Expected value to be array', {
            abi: param,
            values
        });
    }
    const { size, param: arrayItemParam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractArrayType"])(param);
    const encodedParams = values.map((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeParamFromAbiParameter"])(arrayItemParam, v));
    const dynamic = size === -1;
    const dynamicItems = encodedParams.length > 0 && encodedParams[0].dynamic;
    if (!dynamic && values.length !== size) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]("Given arguments count doesn't match array length", {
            arrayLength: size,
            argumentsLength: values.length
        });
    }
    if (dynamic || dynamicItems) {
        const encodingResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDynamicParams"])(encodedParams);
        if (dynamic) {
            const encodedLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeNumber"])({
                type: 'uint256',
                name: ''
            }, encodedParams.length).encoded;
            return {
                dynamic: true,
                encoded: encodedParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(encodedLength, encodingResult) : encodedLength
            };
        }
        return {
            dynamic: true,
            encoded: encodingResult
        };
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(...encodedParams.map((p)=>p.encoded))
    };
}
function decodeArray(param, bytes) {
    // eslint-disable-next-line prefer-const
    let { size, param: arrayItemParam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractArrayType"])(param);
    const dynamic = size === -1;
    let consumed = 0;
    const result = [];
    let remaining = bytes;
    // dynamic array, we need to decode length
    if (dynamic) {
        const lengthResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumber"])({
            type: 'uint32',
            name: ''
        }, bytes);
        size = Number(lengthResult.result);
        consumed = lengthResult.consumed;
        remaining = lengthResult.encoded;
    }
    const hasDynamicChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDynamic"])(arrayItemParam);
    if (hasDynamicChild) {
        // known length but dynamic child, each child is actually head element with encoded offset
        for(let i = 0; i < size; i += 1){
            const offsetResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumber"])({
                type: 'uint32',
                name: ''
            }, remaining.subarray(i * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WORD_SIZE"]));
            consumed += offsetResult.consumed;
            const decodedChildResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParamFromAbiParameter"])(arrayItemParam, remaining.subarray(Number(offsetResult.result)));
            consumed += decodedChildResult.consumed;
            result.push(decodedChildResult.result);
        }
        return {
            result,
            encoded: remaining.subarray(consumed),
            consumed
        };
    }
    for(let i = 0; i < size; i += 1){
        // decode static params
        const decodedChildResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParamFromAbiParameter"])(arrayItemParam, bytes.subarray(consumed));
        consumed += decodedChildResult.consumed;
        result.push(decodedChildResult.result);
    }
    return {
        result,
        encoded: bytes.subarray(consumed),
        consumed
    };
} //# sourceMappingURL=array.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bool.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/tuple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/tuple.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeTuple": (()=>decodeTuple),
    "encodeTuple": (()=>encodeTuple)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function encodeTuple(param, input) {
    var _a, _b, _c;
    let dynamic = false;
    if (!Array.isArray(input) && typeof input !== 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('param must be either Array or Object', {
            param,
            input
        });
    }
    const narrowedInput = input;
    const encoded = [];
    for(let i = 0; i < ((_b = (_a = param.components) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); i += 1){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const paramComponent = param.components[i];
        let result;
        if (Array.isArray(narrowedInput)) {
            if (i >= narrowedInput.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('input param length missmatch', {
                    param,
                    input
                });
            }
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeParamFromAbiParameter"])(paramComponent, narrowedInput[i]);
        } else {
            const paramInput = narrowedInput[(_c = paramComponent.name) !== null && _c !== void 0 ? _c : ''];
            // eslint-disable-next-line no-null/no-null
            if (paramInput === undefined || paramInput === null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('missing input defined in abi', {
                    param,
                    input,
                    paramName: paramComponent.name
                });
            }
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeParamFromAbiParameter"])(paramComponent, paramInput);
        }
        if (result.dynamic) {
            dynamic = true;
        }
        encoded.push(result);
    }
    if (dynamic) {
        return {
            dynamic: true,
            encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDynamicParams"])(encoded)
        };
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(...encoded.map((e)=>e.encoded))
    };
}
function decodeTuple(param, bytes) {
    const result = {
        __length__: 0
    };
    // tracks how much static params consumed bytes
    let consumed = 0;
    if (!param.components) {
        return {
            result,
            encoded: bytes,
            consumed
        };
    }
    // track how much dynamic params consumed bytes
    let dynamicConsumed = 0;
    for (const [index, childParam] of param.components.entries()){
        let decodedResult;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDynamic"])(childParam)) {
            // if dynamic, we will have offset encoded
            const offsetResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumber"])({
                type: 'uint32',
                name: ''
            }, bytes.subarray(consumed));
            // offset counts from start of original byte sequence
            decodedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParamFromAbiParameter"])(childParam, bytes.subarray(Number(offsetResult.result)));
            consumed += offsetResult.consumed;
            dynamicConsumed += decodedResult.consumed;
        } else {
            // static param, just decode
            decodedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParamFromAbiParameter"])(childParam, bytes.subarray(consumed));
            consumed += decodedResult.consumed;
        }
        result.__length__ += 1;
        result[index] = decodedResult.result;
        if (childParam.name && childParam.name !== '') {
            result[childParam.name] = decodedResult.result;
        }
    }
    return {
        encoded: bytes.subarray(consumed + dynamicConsumed),
        result,
        consumed: consumed + dynamicConsumed
    };
} //# sourceMappingURL=tuple.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/decode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeParameters": (()=>decodeParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/tuple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-ssr] (ecmascript) <export * as utils>");
;
;
;
function decodeParameters(abis, bytes, _loose) {
    const abiParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAbiParams"])(abis);
    const bytesArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].hexToUint8Array(bytes);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTuple"])({
        type: 'tuple',
        name: '',
        components: abiParams
    }, bytesArray).result;
} //# sourceMappingURL=decode.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/encode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "encodeParameters": (()=>encodeParameters),
    "inferTypesAndEncodeParameters": (()=>inferTypesAndEncodeParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-ssr] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/base/tuple.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * @param params - The params to infer the ABI from
 * @returns The inferred ABI
 * @example
 * ```
 * inferParamsAbi([1, -1, 'hello', '0x1234', ])
 * ```
 * > [{ type: 'int256' }, { type: 'uint256' }, { type: 'string' }, { type: 'bytes' }]
 * ```
 */ function inferParamsAbi(params) {
    const abi = [];
    params.forEach((param)=>{
        if (Array.isArray(param)) {
            const inferredParams = inferParamsAbi(param);
            abi.push({
                type: 'tuple',
                components: inferredParams,
                name: ''
            });
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            abi.push({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(param, true)
            });
        }
    });
    return abi;
}
function encodeParameters(abi, params) {
    if ((abi === null || abi === void 0 ? void 0 : abi.length) !== params.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid number of values received for given ABI', {
            expected: abi === null || abi === void 0 ? void 0 : abi.length,
            received: params.length
        });
    }
    const abiParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAbiParams"])(abi);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].uint8ArrayToHexString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeTuple"])({
        type: 'tuple',
        name: '',
        components: abiParams
    }, params).encoded);
}
function inferTypesAndEncodeParameters(params) {
    try {
        const abiParams = inferParamsAbi(params);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].uint8ArrayToHexString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$base$2f$tuple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeTuple"])({
            type: 'tuple',
            name: '',
            components: abiParams
        }, params).encoded);
    } catch (e) {
        // throws If the inferred params type caused an error
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Could not infer types from given params', {
            params
        });
    }
} //# sourceMappingURL=encode.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ /**
 *
 *  @module ABI
 */ __turbopack_esm__({
    "decodeParameter": (()=>decodeParameter),
    "decodeParameters": (()=>decodeParameters),
    "decodeParametersWith": (()=>decodeParametersWith),
    "encodeParameter": (()=>encodeParameter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/encode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/decode.js [app-ssr] (ecmascript)");
;
;
;
;
const encodeParameter = (abi, param)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeParameters"])([
        abi
    ], [
        param
    ]);
const decodeParametersWith = (abis, bytes, loose)=>{
    try {
        if (abis.length > 0 && (!bytes || bytes === '0x' || bytes === '0X')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]("Returned values aren't valid, did it run Out of Gas? " + 'You might also see this error if you are not using the ' + 'correct ABI for the contract you are retrieving data from, ' + 'requesting data from a block number that does not exist, ' + 'or querying a node which is not fully synced.');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeParameters"])(abis, `0x${bytes.replace(/0x/i, '')}`, loose);
    } catch (err) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"](`Parameter decoding error: ${err.message}`, {
            internalErr: err
        });
    }
};
const decodeParameters = (abi, bytes)=>decodeParametersWith(abi, bytes, false);
const decodeParameter = (abi, bytes)=>decodeParameters([
        abi
    ], bytes)['0']; //# sourceMappingURL=parameters_api.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/decode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/encode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/functions_api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ /**
 *
 *  @module ABI
 */ __turbopack_esm__({
    "decodeFunctionCall": (()=>decodeFunctionCall),
    "decodeFunctionReturn": (()=>decodeFunctionReturn),
    "encodeFunctionCall": (()=>encodeFunctionCall),
    "encodeFunctionSignature": (()=>encodeFunctionSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/encode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
const encodeFunctionSignature = (functionName)=>{
    if (typeof functionName !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbiFunctionFragment"])(functionName)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid parameter value in encodeFunctionSignature');
    }
    let name;
    if (functionName && (typeof functionName === 'function' || typeof functionName === 'object')) {
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(functionName);
    } else {
        name = functionName;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha3Raw"])(name).slice(0, 10);
};
const encodeFunctionCall = (jsonInterface, params)=>{
    var _a;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbiFunctionFragment"])(jsonInterface)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Invalid parameter value in encodeFunctionCall');
    }
    return `${encodeFunctionSignature(jsonInterface)}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeParameters"])((_a = jsonInterface.inputs) !== null && _a !== void 0 ? _a : [], params !== null && params !== void 0 ? params : []).replace('0x', '')}`;
};
const decodeFunctionCall = (functionsAbi, data, methodSignatureProvided = true)=>{
    const value = methodSignatureProvided && data && data.length >= 10 && data.startsWith('0x') ? data.slice(10) : data;
    if (!functionsAbi.inputs) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3ContractError"]('No inputs found in the ABI');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParameters"])([
        ...functionsAbi.inputs
    ], value);
    return Object.assign(Object.assign({}, result), {
        __method__: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(functionsAbi)
    });
};
const decodeFunctionReturn = (functionsAbi, returnValues)=>{
    // If it is a constructor there is nothing to decode!
    if (functionsAbi.type === 'constructor') {
        return returnValues;
    }
    if (!returnValues) {
        // Using "null" value intentionally to match legacy behavior
        // eslint-disable-next-line no-null/no-null
        return null;
    }
    const value = returnValues.length >= 2 ? returnValues.slice(2) : returnValues;
    if (!functionsAbi.outputs) {
        // eslint-disable-next-line no-null/no-null
        return null;
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParameters"])([
        ...functionsAbi.outputs
    ], value);
    if (result.__length__ === 1) {
        return result[0];
    }
    return result;
}; //# sourceMappingURL=functions_api.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/logs_api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeLog": (()=>decodeLog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <locals>");
;
const STATIC_TYPES = [
    'bool',
    'string',
    'int',
    'uint',
    'address',
    'fixed',
    'ufixed'
];
const _decodeParameter = (inputType, clonedTopic)=>inputType === 'string' ? clonedTopic : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParameter"])(inputType, clonedTopic);
const decodeLog = (inputs, data, topics)=>{
    const clonedTopics = Array.isArray(topics) ? topics : [
        topics
    ];
    const indexedInputs = {};
    const nonIndexedInputs = {};
    for (const [i, input] of inputs.entries()){
        if (input.indexed) {
            indexedInputs[i] = input;
        } else {
            nonIndexedInputs[i] = input;
        }
    }
    const decodedNonIndexedInputs = data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParametersWith"])(Object.values(nonIndexedInputs), data, true) : {
        __length__: 0
    };
    // If topics are more than indexed inputs, that means first topic is the event signature
    const offset = clonedTopics.length - Object.keys(indexedInputs).length;
    const decodedIndexedInputs = Object.values(indexedInputs).map((input, index)=>STATIC_TYPES.some((s)=>input.type.startsWith(s)) ? _decodeParameter(input.type, clonedTopics[index + offset]) : clonedTopics[index + offset]);
    const returnValues = {
        __length__: 0
    };
    let indexedCounter = 0;
    let nonIndexedCounter = 0;
    for (const [i, res] of inputs.entries()){
        returnValues[i] = res.type === 'string' ? '' : undefined;
        if (indexedInputs[i]) {
            returnValues[i] = decodedIndexedInputs[indexedCounter];
            indexedCounter += 1;
        }
        if (nonIndexedInputs[i]) {
            returnValues[i] = decodedNonIndexedInputs[String(nonIndexedCounter)];
            nonIndexedCounter += 1;
        }
        if (res.name) {
            returnValues[res.name] = returnValues[i];
        }
        returnValues.__length__ += 1;
    }
    return returnValues;
}; //# sourceMappingURL=logs_api.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/decode_contract_error_data.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "decodeContractErrorData": (()=>decodeContractErrorData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$errors_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/errors_api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <locals>");
;
;
;
const decodeContractErrorData = (errorsAbi, error)=>{
    if (error === null || error === void 0 ? void 0 : error.data) {
        let errorName;
        let errorSignature;
        let errorArgs;
        try {
            const errorSha = error.data.slice(0, 10);
            const errorAbi = errorsAbi.find((abi)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$errors_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeErrorSignature"])(abi).startsWith(errorSha));
            if (errorAbi === null || errorAbi === void 0 ? void 0 : errorAbi.inputs) {
                errorName = errorAbi.name;
                errorSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(errorAbi);
                // decode abi.inputs according to EIP-838
                errorArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParameters"])([
                    ...errorAbi.inputs
                ], error.data.substring(10));
            } else if (error.data.startsWith('0x08c379a0')) {
                // If ABI was not provided, check for the 2 famous errors: 'Error(string)' or 'Panic(uint256)'
                errorName = 'Error';
                errorSignature = 'Error(string)';
                // decode abi.inputs according to EIP-838
                errorArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParameters"])([
                    {
                        name: 'message',
                        type: 'string'
                    }
                ], error.data.substring(10));
            } else if (error.data.startsWith('0x4e487b71')) {
                errorName = 'Panic';
                errorSignature = 'Panic(uint256)';
                // decode abi.inputs according to EIP-838
                errorArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeParameters"])([
                    {
                        name: 'code',
                        type: 'uint256'
                    }
                ], error.data.substring(10));
            } else {
                console.error('No matching error abi found for error data', error.data);
            }
        } catch (err) {
            console.error(err);
        }
        if (errorName) {
            error.setDecodedProperties(errorName, errorSignature, errorArgs);
        }
    }
}; //# sourceMappingURL=decode_contract_error_data.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/eip_712.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({
    "getMessage": (()=>getMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/encode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
;
;
;
const TYPE_REGEX = /^\w+/;
const ARRAY_REGEX = /^(.*)\[([0-9]*?)]$/;
/**
 * Get the dependencies of a struct type. If a struct has the same dependency multiple times, it's only included once
 * in the resulting array.
 */ const getDependencies = (typedData, type, dependencies = [])=>{
    const match = type.match(TYPE_REGEX);
    const actualType = match[0];
    if (dependencies.includes(actualType)) {
        return dependencies;
    }
    if (!typedData.types[actualType]) {
        return dependencies;
    }
    return [
        actualType,
        ...typedData.types[actualType].reduce((previous, _type)=>[
                ...previous,
                ...getDependencies(typedData, _type.type, previous).filter((dependency)=>!previous.includes(dependency))
            ], [])
    ];
};
/**
 * Encode a type to a string. All dependant types are alphabetically sorted.
 *
 * @param {TypedData} typedData
 * @param {string} type
 * @param {Options} [options]
 * @return {string}
 */ const encodeType = (typedData, type)=>{
    const [primary, ...dependencies] = getDependencies(typedData, type);
    // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
    const types = [
        primary,
        ...dependencies.sort()
    ];
    return types.map((dependency)=>// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${dependency}(${typedData.types[dependency].map((_type)=>`${_type.type} ${_type.name}`)})`).join('');
};
/**
 * Get a type string as hash.
 */ const getTypeHash = (typedData, type)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(encodeType(typedData, type));
/**
 * Get encoded data as a hash. The data should be a key -> value object with all the required values. All dependant
 * types are automatically encoded.
 */ const getStructHash = (typedData, type, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(encodeData(typedData, type, data));
const getMessage = (typedData, hash)=>{
    const EIP_191_PREFIX = '1901';
    const message = `0x${EIP_191_PREFIX}${getStructHash(typedData, 'EIP712Domain', typedData.domain).substring(2)}${getStructHash(typedData, typedData.primaryType, typedData.message).substring(2)}`;
    if (hash) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(message);
    }
    return message;
};
/**
 * Encodes a single value to an ABI serialisable string, number or Buffer. Returns the data as tuple, which consists of
 * an array of ABI compatible types, and an array of corresponding values.
 */ const encodeValue = (typedData, type, data)=>{
    const match = type.match(ARRAY_REGEX);
    // Checks for array types
    if (match) {
        const arrayType = match[1];
        const length = Number(match[2]) || undefined;
        if (!Array.isArray(data)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"]('Cannot encode data: value is not of array type', {
                data
            });
        }
        if (length && data.length !== length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"](`Cannot encode data: expected length of ${length}, but got ${data.length}`, {
                data
            });
        }
        const encodedData = data.map((item)=>encodeValue(typedData, arrayType, item));
        const types = encodedData.map((item)=>item[0]);
        const values = encodedData.map((item)=>item[1]);
        return [
            'bytes32',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeParameters"])(types, values))
        ];
    }
    if (typedData.types[type]) {
        return [
            'bytes32',
            getStructHash(typedData, type, data)
        ];
    }
    // Strings and arbitrary byte arrays are hashed to bytes32
    if (type === 'string') {
        return [
            'bytes32',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(data)
        ];
    }
    if (type === 'bytes') {
        return [
            'bytes32',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(data)
        ];
    }
    return [
        type,
        data
    ];
};
/**
 * Encode the data to an ABI encoded Buffer. The data should be a key -> value object with all the required values. All
 * dependant types are automatically encoded.
 */ const encodeData = (typedData, type, data)=>{
    const [types, values] = typedData.types[type].reduce(([_types, _values], field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(data[field.name]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(field.type)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiError"](`Cannot encode data: missing data for '${field.name}'`, {
                data,
                field
            });
        }
        const value = data[field.name];
        const [_type, encodedValue] = encodeValue(typedData, field.type, value);
        return [
            [
                ..._types,
                _type
            ],
            [
                ..._values,
                encodedValue
            ]
        ];
    }, [
        [
            'bytes32'
        ],
        [
            getTypeHash(typedData, type)
        ]
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeParameters"])(types, values);
}; //# sourceMappingURL=eip_712.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/ __turbopack_esm__({});
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$errors_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/errors_api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$events_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/events_api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/functions_api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$logs_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/logs_api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/decode_contract_error_data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$eip_712$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/eip_712.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=8367d_web3-eth-abi_lib_esm_a96ed7._.js.map