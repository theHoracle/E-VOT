(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/bb04d_web3-utils_lib_esm_589818._.js", {

"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "isUint8Array": (()=>isUint8Array),
    "uint8ArrayConcat": (()=>uint8ArrayConcat),
    "uint8ArrayEquals": (()=>uint8ArrayEquals)
});
function isUint8Array(data) {
    var _a, _b;
    return data instanceof Uint8Array || ((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Uint8Array' || ((_b = data === null || data === void 0 ? void 0 : data.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'Buffer';
}
function uint8ArrayConcat(...parts) {
    const length = parts.reduce((prev, part)=>{
        const agg = prev + part.length;
        return agg;
    }, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    for (const part of parts){
        result.set(part, offset);
        offset += part.length;
    }
    return result;
}
function uint8ArrayEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for(let i = 0; i < a.byteLength; i += 1){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=uint8array.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
 * @module Utils
 */ __turbopack_esm__({
    "asciiToHex": (()=>asciiToHex),
    "bytesToHex": (()=>bytesToHex),
    "bytesToUint8Array": (()=>bytesToUint8Array),
    "ethUnitMap": (()=>ethUnitMap),
    "fromAscii": (()=>fromAscii),
    "fromDecimal": (()=>fromDecimal),
    "fromUtf8": (()=>fromUtf8),
    "fromWei": (()=>fromWei),
    "hexToAscii": (()=>hexToAscii),
    "hexToBytes": (()=>hexToBytes),
    "hexToNumber": (()=>hexToNumber),
    "hexToNumberString": (()=>hexToNumberString),
    "hexToString": (()=>hexToString),
    "hexToUtf8": (()=>hexToUtf8),
    "numberToHex": (()=>numberToHex),
    "stringToHex": (()=>stringToHex),
    "toAscii": (()=>toAscii),
    "toBigInt": (()=>toBigInt),
    "toBool": (()=>toBool),
    "toChecksumAddress": (()=>toChecksumAddress),
    "toDecimal": (()=>toDecimal),
    "toHex": (()=>toHex),
    "toNumber": (()=>toNumber),
    "toUtf8": (()=>toUtf8),
    "toWei": (()=>toWei),
    "utf8ToBytes": (()=>utf8ToBytes),
    "utf8ToHex": (()=>utf8ToHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/default_validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-client] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
;
;
;
;
;
const ethUnitMap = {
    noether: BigInt(0),
    wei: BigInt(1),
    kwei: BigInt(1000),
    Kwei: BigInt(1000),
    babbage: BigInt(1000),
    femtoether: BigInt(1000),
    mwei: BigInt(1000000),
    Mwei: BigInt(1000000),
    lovelace: BigInt(1000000),
    picoether: BigInt(1000000),
    gwei: BigInt(1000000000),
    Gwei: BigInt(1000000000),
    shannon: BigInt(1000000000),
    nanoether: BigInt(1000000000),
    nano: BigInt(1000000000),
    szabo: BigInt(1000000000000),
    microether: BigInt(1000000000000),
    micro: BigInt(1000000000000),
    finney: BigInt(1000000000000000),
    milliether: BigInt(1000000000000000),
    milli: BigInt(1000000000000000),
    ether: BigInt('1000000000000000000'),
    kether: BigInt('1000000000000000000000'),
    grand: BigInt('1000000000000000000000'),
    mether: BigInt('1000000000000000000000000'),
    gether: BigInt('1000000000000000000000000000'),
    tether: BigInt('1000000000000000000000000000000')
};
const PrecisionLossWarning = 'Warning: Using type `number` with values that are large or contain many decimals may cause loss of precision, it is recommended to use type `string` or `BigInt` when using conversion methods';
const bytesToUint8Array = (data)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'bytes'
    ], [
        data
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(data)) {
        return data;
    }
    if (Array.isArray(data)) {
        return new Uint8Array(data);
    }
    if (typeof data === 'string') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].hexToUint8Array(data);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBytesError"](data);
};
/**
 * @internal
 */ const { uint8ArrayToHexString } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"];
const bytesToHex = (bytes)=>uint8ArrayToHexString(bytesToUint8Array(bytes));
const hexToBytes = (bytes)=>{
    if (typeof bytes === 'string' && bytes.slice(0, 2).toLowerCase() !== '0x') {
        return bytesToUint8Array(`0x${bytes}`);
    }
    return bytesToUint8Array(bytes);
};
const hexToNumber = (value)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'hex'
    ], [
        value
    ]);
    // To avoid duplicate code and circular dependency we will
    // use `hexToNumber` implementation from `web3-validator`
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].hexToNumber(value);
};
const toDecimal = hexToNumber;
const numberToHex = (value, hexstrict)=>{
    if (typeof value !== 'bigint') __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'int'
    ], [
        value
    ]);
    // To avoid duplicate code and circular dependency we will
    // use `numberToHex` implementation from `web3-validator`
    let updatedValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].numberToHex(value);
    if (hexstrict) {
        if (!updatedValue.startsWith('-') && updatedValue.length % 2 === 1) {
            // To avoid duplicate a circular dependency we will not be using the padLeft method
            updatedValue = '0x0'.concat(updatedValue.slice(2));
        } else if (updatedValue.length % 2 === 0 && updatedValue.startsWith('-')) updatedValue = '-0x0'.concat(updatedValue.slice(3));
    }
    return updatedValue;
};
const fromDecimal = numberToHex;
const hexToNumberString = (data)=>hexToNumber(data).toString();
const utf8ToHex = (str)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'string'
    ], [
        str
    ]);
    // To be compatible with 1.x trim null character
    // eslint-disable-next-line no-control-regex
    let strWithoutNullCharacter = str.replace(/^(?:\u0000)/, '');
    // eslint-disable-next-line no-control-regex
    strWithoutNullCharacter = strWithoutNullCharacter.replace(/(?:\u0000)$/, '');
    return bytesToHex(new TextEncoder().encode(strWithoutNullCharacter));
};
const fromUtf8 = utf8ToHex;
const stringToHex = utf8ToHex;
const hexToUtf8 = (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUtf8"])(hexToBytes(str));
const toUtf8 = (input)=>{
    if (typeof input === 'string') {
        return hexToUtf8(input);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'bytes'
    ], [
        input
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToUtf8"])(input);
};
const utf8ToBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"];
const hexToString = hexToUtf8;
const asciiToHex = (str)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'string'
    ], [
        str
    ]);
    let hexString = '';
    for(let i = 0; i < str.length; i += 1){
        const hexCharCode = str.charCodeAt(i).toString(16);
        // might need a leading 0
        hexString += hexCharCode.length % 2 !== 0 ? `0${hexCharCode}` : hexCharCode;
    }
    return `0x${hexString}`;
};
const fromAscii = asciiToHex;
const hexToAscii = (str)=>{
    const decoder = new TextDecoder('ascii');
    return decoder.decode(hexToBytes(str));
};
const toAscii = hexToAscii;
const toHex = (value, returnType)=>{
    if (typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(value)) {
        return returnType ? 'address' : `0x${value.toLowerCase().replace(/^0x/i, '')}`;
    }
    if (typeof value === 'boolean') {
        // eslint-disable-next-line no-nested-ternary
        return returnType ? 'bool' : value ? '0x01' : '0x00';
    }
    if (typeof value === 'number') {
        // eslint-disable-next-line no-nested-ternary
        return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
    }
    if (typeof value === 'bigint') {
        return returnType ? 'bigint' : numberToHex(value);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(value)) {
        return returnType ? 'bytes' : bytesToHex(value);
    }
    if (typeof value === 'object' && !!value) {
        return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
    }
    if (typeof value === 'string') {
        if (value.startsWith('-0x') || value.startsWith('-0X')) {
            return returnType ? 'int256' : numberToHex(value);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value)) {
            return returnType ? 'bytes' : value;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInt"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUInt"])(value)) {
            return returnType ? 'bytes' : `0x${value}`;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInt"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUInt"])(value)) {
            // This condition seems problematic because meeting
            // both conditions `!isInt(value) && isUInt(value)` should be impossible.
            // But a value pass for those conditions: "101611154195520776335741463917853444671577865378275924493376429267637792638729"
            // Note that according to the docs: it is supposed to be treated as a string (https://docs.web3js.org/guides/web3_upgrade_guide/x/web3_utils_migration_guide#conversion-to-hex)
            // In short, the strange is that isInt(value) is false but isUInt(value) is true for the value above.
            // TODO: isUInt(value) should be investigated.
            // However, if `toHex('101611154195520776335741463917853444671577865378275924493376429267637792638729', true)` is called, it will return `true`.
            // But, if `toHex('101611154195520776335741463917853444671577865378275924493376429267637792638729')` is called, it will throw inside `numberToHex`.
            return returnType ? 'uint' : numberToHex(value);
        }
        if (!Number.isFinite(value)) {
            return returnType ? 'string' : utf8ToHex(value);
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexProcessingError"](value);
};
const toNumber = (value)=>{
    if (typeof value === 'number') {
        if (value > 1e20) {
            console.warn(PrecisionLossWarning);
            // JavaScript converts numbers >= 10^21 to scientific notation when coerced to strings,
            // leading to potential parsing errors and incorrect representations.
            // For instance, String(10000000000000000000000) yields '1e+22'.
            // Using BigInt prevents this
            return BigInt(value);
        }
        return value;
    }
    if (typeof value === 'bigint') {
        return value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER ? Number(value) : value;
    }
    if (typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value)) {
        return hexToNumber(value);
    }
    try {
        return toNumber(BigInt(value));
    } catch (_a) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidNumberError"](value);
    }
};
const toBigInt = (value)=>{
    if (typeof value === 'number') {
        return BigInt(value);
    }
    if (typeof value === 'bigint') {
        return value;
    }
    // isHex passes for dec, too
    if (typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(value)) {
        if (value.startsWith('-')) {
            return -BigInt(value.substring(1));
        }
        return BigInt(value);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidNumberError"](value);
};
const fromWei = (number, unit)=>{
    let denomination;
    if (typeof unit === 'string') {
        denomination = ethUnitMap[unit];
        if (!denomination) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidUnitError"](unit);
        }
    } else {
        if (unit < 0 || !Number.isInteger(unit)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidIntegerError"](unit);
        }
        denomination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigintPower"])(BigInt(10), BigInt(unit));
    }
    // value in wei would always be integer
    // 13456789, 1234
    const value = String(toNumber(number));
    // count number of zeros in denomination
    // 1000000 -> 6
    const numberOfZerosInDenomination = denomination.toString().length - 1;
    if (numberOfZerosInDenomination <= 0) {
        return value.toString();
    }
    // pad the value with required zeros
    // 13456789 -> 13456789, 1234 -> 001234
    const zeroPaddedValue = value.padStart(numberOfZerosInDenomination, '0');
    // get the integer part of value by counting number of zeros from start
    // 13456789 -> '13'
    // 001234 -> ''
    const integer = zeroPaddedValue.slice(0, -numberOfZerosInDenomination);
    // get the fraction part of value by counting number of zeros backward
    // 13456789 -> '456789'
    // 001234 -> '001234'
    const fraction = zeroPaddedValue.slice(-numberOfZerosInDenomination).replace(/\.?0+$/, '');
    if (integer === '') {
        return fraction ? `0.${fraction}` : '0';
    }
    if (fraction === '') {
        return integer;
    }
    const updatedValue = `${integer}.${fraction}`;
    return updatedValue.slice(0, integer.length + numberOfZerosInDenomination + 1);
};
const toWei = (number, unit)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'number'
    ], [
        number
    ]);
    let denomination;
    if (typeof unit === 'string') {
        denomination = ethUnitMap[unit];
        if (!denomination) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidUnitError"](unit);
        }
    } else {
        if (unit < 0 || !Number.isInteger(unit)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidIntegerError"](unit);
        }
        denomination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigintPower"])(BigInt(10), BigInt(unit));
    }
    let parsedNumber = number;
    if (typeof parsedNumber === 'number') {
        if (parsedNumber < 1e-15) {
            console.warn(PrecisionLossWarning);
        }
        if (parsedNumber > 1e20) {
            console.warn(PrecisionLossWarning);
            parsedNumber = BigInt(parsedNumber);
        } else {
            // in case there is a decimal point, we need to convert it to string
            parsedNumber = parsedNumber.toLocaleString('fullwide', {
                useGrouping: false,
                maximumFractionDigits: 20
            });
        }
    }
    // if value is decimal e.g. 24.56 extract `integer` and `fraction` part
    // to avoid `fraction` to be null use `concat` with empty string
    const [integer, fraction] = String(typeof parsedNumber === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(parsedNumber) ? parsedNumber : toNumber(parsedNumber)).split('.').concat('');
    // join the value removing `.` from
    // 24.56 -> 2456
    const value = BigInt(`${integer}${fraction}`);
    // multiply value with denomination
    // 2456 * 1000000 -> 2456000000
    const updatedValue = value * denomination;
    // check if whole number was passed in
    const decimals = fraction.length;
    if (decimals === 0) {
        return updatedValue.toString();
    }
    // trim the value to remove extra zeros
    return updatedValue.toString().slice(0, -decimals);
};
const toChecksumAddress = (address)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(address, false)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"](address);
    }
    const lowerCaseAddress = address.toLowerCase().replace(/^0x/i, '');
    // calling `Uint8Array.from` because `noble-hashes` checks with `instanceof Uint8Array` that fails in some edge cases:
    // 	https://github.com/paulmillr/noble-hashes/issues/25#issuecomment-1750106284
    const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].uint8ArrayToHexString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].ensureIfUint8Array(utf8ToBytes(lowerCaseAddress))));
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(hash) || hash === '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470') return ''; // // EIP-1052 if hash is equal to c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470, keccak was given empty data
    let checksumAddress = '0x';
    const addressHash = hash.replace(/^0x/i, '');
    for(let i = 0; i < lowerCaseAddress.length; i += 1){
        // If ith character is 8 to f then make it uppercase
        if (parseInt(addressHash[i], 16) > 7) {
            checksumAddress += lowerCaseAddress[i].toUpperCase();
        } else {
            checksumAddress += lowerCaseAddress[i];
        }
    }
    return checksumAddress;
};
const toBool = (value)=>{
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'number' && (value === 0 || value === 1)) {
        return Boolean(value);
    }
    if (typeof value === 'bigint' && (value === BigInt(0) || value === BigInt(1))) {
        return Boolean(value);
    }
    if (typeof value === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value) && (value === '1' || value === '0' || value === 'false' || value === 'true')) {
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
        return Boolean(Number(value));
    }
    if (typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value) && (value === '0x1' || value === '0x0')) {
        return Boolean(toNumber(value));
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBooleanError"](value);
}; //# sourceMappingURL=converters.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/event_emitter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "EventEmitter": (()=>EventEmitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
;
class EventEmitter extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    constructor(){
        super(...arguments);
        // must be defined for backwards compatibility
        this.maxListeners = Number.MAX_SAFE_INTEGER;
    }
    setMaxListeners(maxListeners) {
        this.maxListeners = maxListeners;
        return this;
    }
    getMaxListeners() {
        return this.maxListeners;
    }
} //# sourceMappingURL=event_emitter.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
 * @module Utils
 */ __turbopack_esm__({
    "checkAddressCheckSum": (()=>checkAddressCheckSum),
    "compareBlockNumbers": (()=>compareBlockNumbers),
    "isAddress": (()=>isAddress),
    "isBloom": (()=>isBloom),
    "isContractAddressInBloom": (()=>isContractAddressInBloom),
    "isContractInitOptions": (()=>isContractInitOptions),
    "isHex": (()=>isHex),
    "isHexStrict": (()=>isHexStrict),
    "isInBloom": (()=>isInBloom),
    "isNullish": (()=>isNullish),
    "isTopic": (()=>isTopic),
    "isTopicInBloom": (()=>isTopicInBloom),
    "isUserEthereumAddressInBloom": (()=>isUserEthereumAddressInBloom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bloom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/bloom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$topic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/topic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/eth_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
;
;
;
const isHexStrict = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"];
const isHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"];
const checkAddressCheckSum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAddressCheckSum"];
const isAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"];
const isBloom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bloom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBloom"];
const isInBloom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bloom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInBloom"];
const isUserEthereumAddressInBloom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bloom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUserEthereumAddressInBloom"];
const isContractAddressInBloom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bloom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContractAddressInBloom"];
const isTopic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$topic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopic"];
const isTopicInBloom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$topic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopicInBloom"];
const compareBlockNumbers = (blockA, blockB)=>{
    const isABlockTag = typeof blockA === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockTag"])(blockA);
    const isBBlockTag = typeof blockB === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockTag"])(blockB);
    if (blockA === blockB || (blockA === 'earliest' || blockA === 0) && (blockB === 'earliest' || blockB === 0) // only exception compare blocktag with number
    ) {
        return 0;
    }
    if (blockA === 'earliest') {
        return -1;
    }
    if (blockB === 'earliest') {
        return 1;
    }
    if (isABlockTag && isBBlockTag) {
        // Increasing order:  earliest, finalized , safe, latest, pending
        const tagsOrder = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTags"].EARLIEST]: 1,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTags"].FINALIZED]: 2,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTags"].SAFE]: 3,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTags"].LATEST]: 4,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTags"].PENDING]: 5
        };
        if (tagsOrder[blockA] < tagsOrder[blockB]) {
            return -1;
        }
        return 1;
    }
    if (isABlockTag && !isBBlockTag || !isABlockTag && isBBlockTag) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBlockError"]('Cannot compare blocktag with provided non-blocktag input.');
    }
    const bigIntA = BigInt(blockA);
    const bigIntB = BigInt(blockB);
    if (bigIntA < bigIntB) {
        return -1;
    }
    if (bigIntA === bigIntB) {
        return 0;
    }
    return 1;
};
const isContractInitOptions = (options)=>typeof options === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options) && Object.keys(options).length !== 0 && [
        'input',
        'data',
        'from',
        'gas',
        'gasPrice',
        'gasLimit',
        'address',
        'jsonInterface',
        'syncWithContext',
        'dataInputFill'
    ].some((key)=>key in options);
const isNullish = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"]; //# sourceMappingURL=validation.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/objects.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "mergeDeep": (()=>mergeDeep)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$primitives_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/primitives_types.js [app-client] (ecmascript)");
;
;
const isIterable = (item)=>typeof item === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(item) && !Array.isArray(item) && !(item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$primitives_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedArray"]);
const mergeDeep = (destination, ...sources)=>{
    if (!isIterable(destination)) {
        return destination;
    }
    const result = Object.assign({}, destination); // clone deep here
    for (const src of sources){
        // const src = { ..._src };
        // eslint-disable-next-line no-restricted-syntax
        for(const key in src){
            if (isIterable(src[key])) {
                if (!result[key]) {
                    result[key] = {};
                }
                result[key] = mergeDeep(result[key], src[key]);
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(src[key]) && Object.hasOwnProperty.call(src, key)) {
                if (Array.isArray(src[key]) || src[key] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$primitives_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedArray"]) {
                    result[key] = src[key].slice(0);
                } else {
                    result[key] = src[key];
                }
            }
        }
    }
    return result;
}; //# sourceMappingURL=objects.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/string_manipulation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "fromTwosComplement": (()=>fromTwosComplement),
    "leftPad": (()=>leftPad),
    "padLeft": (()=>padLeft),
    "padRight": (()=>padRight),
    "rightPad": (()=>rightPad),
    "toTwosComplement": (()=>toTwosComplement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/default_validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-client] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-client] (ecmascript)");
;
;
;
const padLeft = (value, characterAmount, sign = '0')=>{
    // To avoid duplicate code and circular dependency we will
    // use `padLeft` implementation from `web3-validator`
    if (typeof value === 'string') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value)) {
            return value.padStart(characterAmount, sign);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].padLeft(value, characterAmount, sign);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'int'
    ], [
        value
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].padLeft(value, characterAmount, sign);
};
const padRight = (value, characterAmount, sign = '0')=>{
    if (typeof value === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value)) {
        return value.padEnd(characterAmount, sign);
    }
    const hexString = typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(value) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(value);
    const prefixLength = hexString.startsWith('-') ? 3 : 2;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        hexString.startsWith('-') ? 'int' : 'uint'
    ], [
        value
    ]);
    return hexString.padEnd(characterAmount + prefixLength, sign);
};
const rightPad = padRight;
const leftPad = padLeft;
const toTwosComplement = (value, nibbleWidth = 64)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'int'
    ], [
        value
    ]);
    const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"])(value);
    if (val >= 0) return padLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(val), nibbleWidth);
    const largestBit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigintPower"])(BigInt(2), BigInt(nibbleWidth * 4));
    if (-val >= largestBit) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NibbleWidthError"](`value: ${value}, nibbleWidth: ${nibbleWidth}`);
    }
    const updatedVal = BigInt(val);
    const complement = updatedVal + largestBit;
    return padLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(complement), nibbleWidth);
};
const fromTwosComplement = (value, nibbleWidth = 64)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
        'int'
    ], [
        value
    ]);
    const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"])(value);
    if (val < 0) return val;
    const largestBit = Math.ceil(Math.log(Number(val)) / Math.log(2));
    if (largestBit > nibbleWidth * 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NibbleWidthError"](`value: "${value}", nibbleWidth: "${nibbleWidth}"`);
    // check the largest bit to see if negative
    if (nibbleWidth * 4 !== largestBit) return val;
    const complement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigintPower"])(BigInt(2), BigInt(nibbleWidth) * BigInt(4));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"])(BigInt(val) - complement);
}; //# sourceMappingURL=string_manipulation.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "convert": (()=>convert),
    "convertScalarValue": (()=>convertScalarValue),
    "format": (()=>format),
    "isDataFormat": (()=>isDataFormat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/string_manipulation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-client] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const { parseBaseType } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"];
const isDataFormat = (dataFormat)=>typeof dataFormat === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(dataFormat) && 'number' in dataFormat && 'bytes' in dataFormat;
/**
 * Finds the schema that corresponds to a specific data path within a larger JSON schema.
 * It works by iterating over the dataPath array and traversing the JSON schema one step at a time until it reaches the end of the path.
 *
 * @param schema - represents a JSON schema, which is an object that describes the structure of JSON data
 * @param dataPath - represents an array of strings that specifies the path to the data within the JSON schema
 * @param oneOfPath - represents an optional array of two-element tuples that specifies the "oneOf" option to choose, if the schema has oneOf and the data path can match multiple subschemas
 * @returns the JSON schema that matches the data path
 *
 */ const findSchemaByDataPath = (schema, dataPath, oneOfPath = [])=>{
    let result = Object.assign({}, schema);
    let previousDataPath;
    for (const dataPart of dataPath){
        if (result.oneOf && previousDataPath) {
            const currentDataPath = previousDataPath;
            const path = oneOfPath.find(([key])=>key === currentDataPath);
            if (path && path[0] === previousDataPath) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                result = result.oneOf[path[1]];
            }
        }
        if (!result.properties && !result.items) {
            return undefined;
        }
        if (result.properties) {
            result = result.properties[dataPart];
        } else if (result.items && result.items.properties) {
            const node = result.items.properties;
            result = node[dataPart];
        } else if (result.items && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(result.items)) {
            result = result.items;
        } else if (result.items && Array.isArray(result.items)) {
            result = result.items[parseInt(dataPart, 10)];
        }
        if (result && dataPart) previousDataPath = dataPart;
    }
    return result;
};
const convertScalarValue = (value, ethType, format)=>{
    try {
        const { baseType, baseTypeSize } = parseBaseType(ethType);
        if (baseType === 'int' || baseType === 'uint') {
            switch(format.number){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_NUMBER"].NUMBER:
                    return Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])(value));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_NUMBER"].HEX:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])(value));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_NUMBER"].STR:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])(value).toString();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_NUMBER"].BIGINT:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])(value);
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormatterError"](`Invalid format: ${String(format.number)}`);
            }
        }
        if (baseType === 'bytes') {
            let paddedValue;
            if (baseTypeSize) {
                if (typeof value === 'string') paddedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padLeft"])(value, baseTypeSize * 2);
                else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(value)) {
                    paddedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(new Uint8Array(baseTypeSize - value.length), value);
                }
            } else {
                paddedValue = value;
            }
            switch(format.bytes){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_BYTES"].HEX:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToUint8Array"])(paddedValue));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_BYTES"].UINT8ARRAY:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToUint8Array"])(paddedValue);
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormatterError"](`Invalid format: ${String(format.bytes)}`);
            }
        }
        if (baseType === 'string') {
            return String(value);
        }
    } catch (error) {
        // If someone didn't use `eth` keyword we can return original value
        // as the scope of this code is formatting not validation
        return value;
    }
    return value;
};
const convertArray = ({ value, schemaProp, schema, object, key, dataPath, format, oneOfPath = [] })=>{
    var _a, _b;
    // If value is an array
    if (Array.isArray(value)) {
        let _schemaProp = schemaProp;
        // TODO This is a naive approach to solving the issue of
        // a schema using oneOf. This chunk of code was intended to handle
        // BlockSchema.transactions
        // TODO BlockSchema.transactions are not being formatted
        if ((schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.oneOf) !== undefined) {
            // The following code is basically saying:
            // if the schema specifies oneOf, then we are to loop
            // over each possible schema and check if they type of the schema
            // matches the type of value[0], and if so we use the oneOfSchemaProp
            // as the schema for formatting
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            schemaProp.oneOf.forEach((oneOfSchemaProp, index)=>{
                var _a, _b;
                if (!Array.isArray(schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.items) && (typeof value[0] === 'object' && ((_a = oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.items) === null || _a === void 0 ? void 0 : _a.type) === 'object' || typeof value[0] === 'string' && ((_b = oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.items) === null || _b === void 0 ? void 0 : _b.type) !== 'object')) {
                    _schemaProp = oneOfSchemaProp;
                    oneOfPath.push([
                        key,
                        index
                    ]);
                }
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items)) {
            // Can not find schema for array item, delete that item
            // eslint-disable-next-line no-param-reassign
            delete object[key];
            dataPath.pop();
            return true;
        }
        // If schema for array items is a single type
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(_schemaProp.items) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(_schemaProp.items.format)) {
            for(let i = 0; i < value.length; i += 1){
                // eslint-disable-next-line no-param-reassign
                object[key][i] = convertScalarValue(value[i], // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                (_a = _schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) === null || _a === void 0 ? void 0 : _a.format, format);
            }
            dataPath.pop();
            return true;
        }
        // If schema for array items is an object
        if (!Array.isArray(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) && ((_b = _schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) === null || _b === void 0 ? void 0 : _b.type) === 'object') {
            for (const arrObject of value){
                // eslint-disable-next-line no-use-before-define
                convert(arrObject, schema, dataPath, format, oneOfPath);
            }
            dataPath.pop();
            return true;
        }
        // If schema for array is a tuple
        if (Array.isArray(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items)) {
            for(let i = 0; i < value.length; i += 1){
                // eslint-disable-next-line no-param-reassign
                object[key][i] = convertScalarValue(value[i], _schemaProp.items[i].format, format);
            }
            dataPath.pop();
            return true;
        }
    }
    return false;
};
const convert = (data, schema, dataPath, format, oneOfPath = [])=>{
    var _a;
    // If it's a scalar value
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(data) && !Array.isArray(data)) {
        return convertScalarValue(data, schema === null || schema === void 0 ? void 0 : schema.format, format);
    }
    const object = data;
    // case when schema is array and `items` is object
    if (Array.isArray(object) && (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' && ((_a = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a === void 0 ? void 0 : _a.type) === 'object') {
        convertArray({
            value: object,
            schemaProp: schema,
            schema,
            object,
            key: '',
            dataPath,
            format,
            oneOfPath
        });
    } else {
        for (const [key, value] of Object.entries(object)){
            dataPath.push(key);
            let schemaProp = findSchemaByDataPath(schema, dataPath, oneOfPath);
            // If value is a scaler value
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(schemaProp)) {
                delete object[key];
                dataPath.pop();
                continue;
            }
            // If value is an object, recurse into it
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value)) {
                convert(value, schema, dataPath, format, oneOfPath);
                dataPath.pop();
                continue;
            }
            // If value is an array
            if (convertArray({
                value,
                schemaProp,
                schema,
                object,
                key,
                dataPath,
                format,
                oneOfPath
            })) {
                continue;
            }
            // The following code is basically saying:
            // if the schema specifies oneOf, then we are to loop
            // over each possible schema and check if they type of the schema specifies format
            // and if so we use the oneOfSchemaProp as the schema for formatting
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            if ((schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.format) === undefined && (schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.oneOf) !== undefined) {
                for (const [_index, oneOfSchemaProp] of schemaProp.oneOf.entries()){
                    if ((oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.format) !== undefined) {
                        schemaProp = oneOfSchemaProp;
                        break;
                    }
                }
            }
            object[key] = convertScalarValue(value, schemaProp.format, format);
            dataPath.pop();
        }
    }
    return object;
};
const format = (schema, data, returnFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"])=>{
    let dataToParse;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(data)) {
        dataToParse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])({}, data);
    } else if (Array.isArray(data)) {
        dataToParse = [
            ...data
        ];
    } else {
        dataToParse = data;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(schema) ? schema : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].ethAbiToJsonSchema(schema);
    if (!jsonSchema.properties && !jsonSchema.items && !jsonSchema.format) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormatterError"]('Invalid json schema for formatting');
    }
    return convert(dataToParse, jsonSchema, [], returnFormat);
}; //# sourceMappingURL=formatter.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
 * This package provides utility functions for Ethereum dapps and other web3.js packages.
 *
 * For using Utils functions, first install Web3 package using `npm i web3` or `yarn add web3`.
 * After that, Web3 Utils functions will be available as mentioned below.
 * ```ts
 * import { Web3 } from 'web3';
 * const web3 = new Web3();
 *
 * const value = web3.utils.fromWei("1", "ether")
 *
 * ```
 *
 * For using individual package install `web3-utils` package using `npm i web3-utils` or `yarn add web3-utils` and only import required functions.
 * This is more efficient approach for building lightweight applications.
 * ```ts
 * import { fromWei, soliditySha3Raw } from 'web3-utils';
 *
 * console.log(fromWei("1", "ether"));
 * console.log(soliditySha3Raw({ type: "string", value: "helloworld" }))
 *
 * ```
 * @module Utils
 */ __turbopack_esm__({
    "encodePacked": (()=>encodePacked),
    "getStorageSlotNumForLongString": (()=>getStorageSlotNumForLongString),
    "keccak256": (()=>keccak256Wrapper),
    "keccak256Wrapper": (()=>keccak256Wrapper),
    "processSolidityEncodePackedArgs": (()=>processSolidityEncodePackedArgs),
    "sha3": (()=>sha3),
    "sha3Raw": (()=>sha3Raw),
    "soliditySha3": (()=>soliditySha3),
    "soliditySha3Raw": (()=>soliditySha3Raw)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/utils.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/string_manipulation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.4.0/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-client] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-client] (ecmascript)");
;
;
;
;
;
;
const SHA3_EMPTY_BYTES = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
const keccak256Wrapper = (data)=>{
    let processedData;
    if (typeof data === 'bigint' || typeof data === 'number') {
        processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data.toString());
    } else if (Array.isArray(data)) {
        processedData = new Uint8Array(data);
    } else if (typeof data === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(data)) {
        processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
    } else {
        processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToUint8Array"])(data);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].ensureIfUint8Array(processedData)));
};
;
const sha3 = (data)=>{
    let updatedData;
    if (typeof data === 'string') {
        if (data.startsWith('0x') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(data)) {
            updatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(data);
        } else {
            updatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$4$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
        }
    } else {
        updatedData = data;
    }
    const hash = keccak256Wrapper(updatedData);
    // EIP-1052 if hash is equal to c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470, keccak was given empty data
    return hash === SHA3_EMPTY_BYTES ? undefined : hash;
};
const sha3Raw = (data)=>{
    const hash = sha3(data);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(hash)) {
        return SHA3_EMPTY_BYTES;
    }
    return hash;
};
/**
 * returns type and value
 * @param arg - the input to return the type and value
 * @returns - the type and value of the input
 */ const getType = (arg)=>{
    if (Array.isArray(arg)) {
        throw new Error('Autodetection of array types is not supported.');
    }
    let type;
    let value;
    // if type is given
    if (typeof arg === 'object' && ('t' in arg || 'type' in arg) && ('v' in arg || 'value' in arg)) {
        type = 't' in arg ? arg.t : arg.type;
        value = 'v' in arg ? arg.v : arg.value;
        type = type.toLowerCase() === 'bigint' ? 'int' : type;
    } else if (typeof arg === 'bigint') {
        return [
            'int',
            arg
        ];
    } else {
        type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(arg, true);
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(arg);
        if (!type.startsWith('int') && !type.startsWith('uint')) {
            type = 'bytes';
        }
    }
    if ((type.startsWith('int') || type.startsWith('uint')) && typeof value === 'string' && !/^(-)?0x/i.test(value)) {
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigInt"])(value);
    }
    return [
        type,
        value
    ];
};
/**
 * returns the type with size if uint or int
 * @param name - the input to return the type with size
 * @returns - the type with size of the input
 */ const elementaryName = (name)=>{
    if (name.startsWith('int[')) {
        return `int256${name.slice(3)}`;
    }
    if (name === 'int') {
        return 'int256';
    }
    if (name.startsWith('uint[')) {
        return `uint256'${name.slice(4)}`;
    }
    if (name === 'uint') {
        return 'uint256';
    }
    return name;
};
/**
 * returns the size of the value of type 'byte'
 */ const parseTypeN = (value, typeLength)=>{
    const typesize = /^(\d+).*$/.exec(value.slice(typeLength));
    return typesize ? parseInt(typesize[1], 10) : 0;
};
/**
 * returns the bit length of the value
 * @param value - the input to return the bit length
 * @returns - the bit length of the input
 */ const bitLength = (value)=>{
    const updatedVal = value.toString(2);
    return updatedVal.length;
};
/**
 * Pads the value based on size and type
 * returns a string of the padded value
 * @param type - the input to pad
 * @returns = the padded value
 */ const solidityPack = (type, val)=>{
    const value = val.toString();
    if (type === 'string') {
        if (typeof val === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToHex"])(val);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStringError"](val);
    }
    if (type === 'bool' || type === 'boolean') {
        if (typeof val === 'boolean') return val ? '01' : '00';
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBooleanError"](val);
    }
    if (type === 'address') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"](value);
        }
        return value;
    }
    const name = elementaryName(type);
    if (type.startsWith('uint')) {
        const size = parseTypeN(name, 'uint'.length);
        if (size % 8 || size < 8 || size > 256) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSizeError"](value);
        }
        const num = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"])(value);
        if (bitLength(num) > size) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidLargeValueError"](value);
        }
        if (num < BigInt(0)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidUnsignedIntegerError"](value);
        }
        return size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leftPad"])(num.toString(16), size / 8 * 2) : num.toString(16);
    }
    if (type.startsWith('int')) {
        const size = parseTypeN(name, 'int'.length);
        if (size % 8 || size < 8 || size > 256) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSizeError"](type);
        }
        const num = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNumber"])(value);
        if (bitLength(num) > size) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidLargeValueError"](value);
        }
        if (num < BigInt(0)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toTwosComplement"])(num.toString(), size / 8 * 2);
        }
        return size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leftPad"])(num.toString(16), size / 4) : num.toString(16);
    }
    if (name === 'bytes') {
        if (value.replace(/^0x/i, '').length % 2 !== 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBytesError"](value);
        }
        return value;
    }
    if (type.startsWith('bytes')) {
        if (value.replace(/^0x/i, '').length % 2 !== 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBytesError"](value);
        }
        const size = parseTypeN(type, 'bytes'.length);
        if (!size || size < 1 || size > 64 || size < value.replace(/^0x/i, '').length / 2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidBytesError"](value);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rightPad"])(value, size * 2);
    }
    return '';
};
const processSolidityEncodePackedArgs = (arg)=>{
    const [type, val] = getType(arg);
    // array case
    if (Array.isArray(val)) {
        // go through each element of the array and use map function to create new hexarg list
        const hexArg = val.map((v)=>solidityPack(type, v).replace('0x', ''));
        return hexArg.join('');
    }
    const hexArg = solidityPack(type, val);
    return hexArg.replace('0x', '');
};
const encodePacked = (...values)=>{
    const hexArgs = values.map(processSolidityEncodePackedArgs);
    return `0x${hexArgs.join('').toLowerCase()}`;
};
const soliditySha3 = (...values)=>sha3(encodePacked(...values));
const soliditySha3Raw = (...values)=>sha3Raw(encodePacked(...values));
const getStorageSlotNumForLongString = (mainSlotNumber)=>sha3(`0x${(typeof mainSlotNumber === 'number' ? mainSlotNumber.toString() : mainSlotNumber).padStart(64, '0')}`); //# sourceMappingURL=hash.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/random.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
 * @module Utils
 */ __turbopack_esm__({
    "randomBytes": (()=>randomBytes),
    "randomHex": (()=>randomHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
;
;
const randomBytes = (size)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomBytesSync"])(size);
const randomHex = (byteSize)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(randomBytes(byteSize)); //# sourceMappingURL=random.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/promise_helpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "isPromise": (()=>isPromise),
    "pollTillDefined": (()=>pollTillDefined),
    "pollTillDefinedAndReturnIntervalId": (()=>pollTillDefinedAndReturnIntervalId),
    "rejectIfConditionAtInterval": (()=>rejectIfConditionAtInterval),
    "rejectIfTimeout": (()=>rejectIfTimeout),
    "waitWithTimeout": (()=>waitWithTimeout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
function isPromise(object) {
    return (typeof object === 'object' || typeof object === 'function') && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    typeof object.then === 'function';
}
function waitWithTimeout(awaitable, timeout, error) {
    return __awaiter(this, void 0, void 0, function*() {
        let timeoutId;
        const result = yield Promise.race([
            awaitable instanceof Promise ? awaitable : awaitable(),
            new Promise((resolve, reject)=>{
                timeoutId = setTimeout(()=>error ? reject(error) : resolve(undefined), timeout);
            })
        ]);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (result instanceof Error) {
            throw result;
        }
        return result;
    });
}
function pollTillDefinedAndReturnIntervalId(func, interval) {
    let intervalId;
    const polledRes = new Promise((resolve, reject)=>{
        intervalId = setInterval(function intervalCallbackFunc() {
            (()=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        const res = yield waitWithTimeout(func, interval);
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(res)) {
                            clearInterval(intervalId);
                            resolve(res);
                        }
                    } catch (error) {
                        clearInterval(intervalId);
                        reject(error);
                    }
                }))();
            return intervalCallbackFunc;
        }(), interval);
    });
    return [
        polledRes,
        intervalId
    ];
}
function pollTillDefined(func, interval) {
    return __awaiter(this, void 0, void 0, function*() {
        return pollTillDefinedAndReturnIntervalId(func, interval)[0];
    });
}
function rejectIfTimeout(timeout, error) {
    let timeoutId;
    const rejectOnTimeout = new Promise((_, reject)=>{
        timeoutId = setTimeout(()=>{
            reject(error);
        }, timeout);
    });
    return [
        timeoutId,
        rejectOnTimeout
    ];
}
function rejectIfConditionAtInterval(cond, interval) {
    let intervalId;
    const rejectIfCondition = new Promise((_, reject)=>{
        intervalId = setInterval(()=>{
            (()=>__awaiter(this, void 0, void 0, function*() {
                    const error = yield cond();
                    if (error) {
                        clearInterval(intervalId);
                        reject(error);
                    }
                }))();
        }, interval);
    });
    return [
        intervalId,
        rejectIfCondition
    ];
} //# sourceMappingURL=promise_helpers.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uuid.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
 * @module Utils
 */ __turbopack_esm__({
    "uuidV4": (()=>uuidV4)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/random.js [app-client] (ecmascript)");
;
;
const uuidV4 = ()=>{
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(16);
    // https://github.com/ethers-io/ethers.js/blob/ce8f1e4015c0f27bf178238770b1325136e3351a/packages/json-wallets/src.ts/utils.ts#L54
    // Section: 4.1.3:
    // - time_hi_and_version[12:16] = 0b0100
    /* eslint-disable-next-line */ bytes[6] = bytes[6] & 0x0f | 0x40;
    // Section 4.4
    // - clock_seq_hi_and_reserved[6] = 0b0
    // - clock_seq_hi_and_reserved[7] = 0b1
    /* eslint-disable-next-line */ bytes[8] = bytes[8] & 0x3f | 0x80;
    const hexString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes);
    return [
        hexString.substring(2, 10),
        hexString.substring(10, 14),
        hexString.substring(14, 18),
        hexString.substring(18, 22),
        hexString.substring(22, 34)
    ].join('-');
}; //# sourceMappingURL=uuid.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "isBatchRequest": (()=>isBatchRequest),
    "isBatchResponse": (()=>isBatchResponse),
    "isResponseRpcError": (()=>isResponseRpcError),
    "isResponseWithError": (()=>isResponseWithError),
    "isResponseWithNotification": (()=>isResponseWithNotification),
    "isResponseWithResult": (()=>isResponseWithResult),
    "isSubscriptionResult": (()=>isSubscriptionResult),
    "isValidResponse": (()=>isValidResponse),
    "setRequestIdStart": (()=>setRequestIdStart),
    "toBatchPayload": (()=>toBatchPayload),
    "toPayload": (()=>toPayload),
    "validateResponse": (()=>validateResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uuid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
;
;
;
const isResponseRpcError = (rpcError)=>{
    const errorCode = rpcError.error.code;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpcErrorsMap"].has(errorCode) || errorCode >= -32099 && errorCode <= -32000;
};
const isResponseWithResult = (response)=>!Array.isArray(response) && !!response && response.jsonrpc === '2.0' && // JSON RPC consider "null" as valid response
    'result' in response && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(response.error) && (typeof response.id === 'number' || typeof response.id === 'string');
const isResponseWithError = (response)=>!Array.isArray(response) && response.jsonrpc === '2.0' && !!response && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(response.result) && // JSON RPC consider "null" as valid response
    'error' in response && (typeof response.id === 'number' || typeof response.id === 'string');
const isResponseWithNotification = (response)=>!Array.isArray(response) && !!response && response.jsonrpc === '2.0' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(response.params) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(response.method);
const isSubscriptionResult = (response)=>!Array.isArray(response) && !!response && response.jsonrpc === '2.0' && 'id' in response && // JSON RPC consider "null" as valid response
    'result' in response;
const validateResponse = (response)=>isResponseWithResult(response) || isResponseWithError(response);
const isValidResponse = (response)=>Array.isArray(response) ? response.every(validateResponse) : validateResponse(response);
const isBatchResponse = (response)=>Array.isArray(response) && response.length > 0 && isValidResponse(response);
// internal optional variable to increment and use for the jsonrpc `id`
let requestIdSeed;
const setRequestIdStart = (start)=>{
    requestIdSeed = start;
};
const toPayload = (request)=>{
    var _a, _b, _c, _d;
    if (typeof requestIdSeed !== 'undefined') {
        requestIdSeed += 1;
    }
    return {
        jsonrpc: (_a = request.jsonrpc) !== null && _a !== void 0 ? _a : '2.0',
        id: (_c = (_b = request.id) !== null && _b !== void 0 ? _b : requestIdSeed) !== null && _c !== void 0 ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidV4"])(),
        method: request.method,
        params: (_d = request.params) !== null && _d !== void 0 ? _d : undefined
    };
};
const toBatchPayload = (requests)=>requests.map((request)=>toPayload(request));
const isBatchRequest = (request)=>Array.isArray(request) && request.length > 0; //# sourceMappingURL=json_rpc.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_deferred_promise.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    "Web3DeferredPromise": (()=>Web3DeferredPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-client] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
;
class Web3DeferredPromise {
    /**
     *
     * @param timeout - (optional) The timeout in milliseconds.
     * @param eagerStart - (optional) If true, the timer starts as soon as the promise is created.
     * @param timeoutMessage - (optional) The message to include in the timeout erro that is thrown when the promise times out.
     */ constructor({ timeout, eagerStart, timeoutMessage } = {
        timeout: 0,
        eagerStart: false,
        timeoutMessage: 'DeferredPromise timed out'
    }){
        // public tag to treat object as promise by different libs
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        this[_a] = 'Promise';
        this._state = 'pending';
        this._promise = new Promise((resolve, reject)=>{
            this._resolve = resolve;
            this._reject = reject;
        });
        this._timeoutMessage = timeoutMessage;
        this._timeoutInterval = timeout;
        if (eagerStart) {
            this.startTimer();
        }
    }
    /**
     * Returns the current state of the promise.
     * @returns 'pending' | 'fulfilled' | 'rejected'
     */ get state() {
        return this._state;
    }
    /**
     *
     * @param onfulfilled - (optional) The callback to execute when the promise is fulfilled.
     * @param onrejected  - (optional) The callback to execute when the promise is rejected.
     * @returns
     */ then(onfulfilled, onrejected) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._promise.then(onfulfilled, onrejected);
        });
    }
    /**
     *
     * @param onrejected - (optional) The callback to execute when the promise is rejected.
     * @returns
     */ catch(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    onrejected) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._promise.catch(onrejected);
        });
    }
    /**
     *
     * @param onfinally - (optional) The callback to execute when the promise is settled (fulfilled or rejected).
     * @returns
     */ finally(onfinally) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._promise.finally(onfinally);
        });
    }
    /**
     * Resolves the current promise.
     * @param value - The value to resolve the promise with.
     */ resolve(value) {
        this._resolve(value);
        this._state = 'fulfilled';
        this._clearTimeout();
    }
    /**
     * Rejects the current promise.
     * @param reason - The reason to reject the promise with.
     */ reject(reason) {
        this._reject(reason);
        this._state = 'rejected';
        this._clearTimeout();
    }
    /**
     * Starts the timeout timer for the promise.
     */ startTimer() {
        if (this._timeoutInterval && this._timeoutInterval > 0) {
            this._timeoutId = setTimeout(this._checkTimeout.bind(this), this._timeoutInterval);
        }
    }
    _checkTimeout() {
        if (this._state === 'pending' && this._timeoutId) {
            this.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationTimeoutError"](this._timeoutMessage));
        }
    }
    _clearTimeout() {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    }
}
_a = Symbol.toStringTag; //# sourceMappingURL=web3_deferred_promise.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/chunk_response_parser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChunkResponseParser": (()=>ChunkResponseParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-client] (ecmascript)");
;
class ChunkResponseParser {
    constructor(eventEmitter, autoReconnect){
        this.eventEmitter = eventEmitter;
        this.autoReconnect = autoReconnect;
        this.chunkTimeout = 1000 * 15;
    }
    clearQueues() {
        if (typeof this._clearQueues === 'function') {
            this._clearQueues();
        }
    }
    onError(clearQueues) {
        this._clearQueues = clearQueues;
    }
    parseResponse(data) {
        const returnValues = [];
        // DE-CHUNKER
        const dechunkedData = data.replace(/\}[\n\r]?\{/g, '}|--|{') // }{
        .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
        .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
        .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
        .split('|--|');
        dechunkedData.forEach((_chunkData)=>{
            // prepend the last chunk
            let chunkData = _chunkData;
            if (this.lastChunk) {
                chunkData = this.lastChunk + chunkData;
            }
            let result;
            try {
                result = JSON.parse(chunkData);
            } catch (e) {
                this.lastChunk = chunkData;
                // start timeout to cancel all requests
                if (this.lastChunkTimeout) {
                    clearTimeout(this.lastChunkTimeout);
                }
                this.lastChunkTimeout = setTimeout(()=>{
                    if (this.autoReconnect) return;
                    this.clearQueues();
                    this.eventEmitter.emit('error', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidResponseError"]({
                        id: 1,
                        jsonrpc: '2.0',
                        error: {
                            code: 2,
                            message: 'Chunk timeout'
                        }
                    }));
                }, this.chunkTimeout);
                return;
            }
            // cancel timeout and set chunk to null
            clearTimeout(this.lastChunkTimeout);
            this.lastChunk = undefined;
            if (result) returnValues.push(result);
        });
        return returnValues;
    }
} //# sourceMappingURL=chunk_response_parser.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_eip1193_provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Eip1193Provider": (()=>Eip1193Provider)
});
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-client] (ecmascript) <export default as EventEmitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$web3_base_provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/web3_base_provider.js [app-client] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
class Eip1193Provider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$web3_base_provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3BaseProvider"] {
    constructor(){
        super(...arguments);
        this._eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]();
        this._chainId = '';
        this._accounts = [];
    }
    _getChainId() {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            const data = yield this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPayload"])({
                method: 'eth_chainId',
                params: []
            }));
            return (_a = data === null || data === void 0 ? void 0 : data.result) !== null && _a !== void 0 ? _a : '';
        });
    }
    _getAccounts() {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            const data = yield this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPayload"])({
                method: 'eth_accounts',
                params: []
            }));
            return (_a = data === null || data === void 0 ? void 0 : data.result) !== null && _a !== void 0 ? _a : [];
        });
    }
    _onConnect() {
        Promise.all([
            this._getChainId().then((chainId)=>{
                if (chainId !== this._chainId) {
                    this._chainId = chainId;
                    this._eventEmitter.emit('chainChanged', this._chainId);
                }
            }).catch((err)=>{
                // todo: add error handler
                console.error(err);
            }),
            this._getAccounts().then((accounts)=>{
                if (!(this._accounts.length === accounts.length && accounts.every((v)=>accounts.includes(v)))) {
                    this._accounts = accounts;
                    this._onAccountsChanged();
                }
            }).catch((err)=>{
                // todo: add error handler
                // eslint-disable-next-line no-console
                console.error(err);
            })
        ]).then(()=>this._eventEmitter.emit('connect', {
                chainId: this._chainId
            })).catch((err)=>{
            // todo: add error handler
            // eslint-disable-next-line no-console
            console.error(err);
        });
    }
    // todo this must be ProvideRpcError with a message too
    _onDisconnect(code, data) {
        this._eventEmitter.emit('disconnect', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIP1193ProviderRpcError"](code, data));
    }
    _onAccountsChanged() {
        // get chainId and safe to local
        this._eventEmitter.emit('accountsChanged', this._accounts);
    }
} //# sourceMappingURL=web3_eip1193_provider.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/socket_provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SocketProvider": (()=>SocketProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_eip1193_provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_eip1193_provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$chunk_response_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/chunk_response_parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_deferred_promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_deferred_promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/provider_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/connection_errors.js [app-client] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
;
;
const DEFAULT_RECONNECTION_OPTIONS = {
    autoReconnect: true,
    delay: 5000,
    maxAttempts: 5
};
const NORMAL_CLOSE_CODE = 1000; // https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close
class SocketProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_eip1193_provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1193Provider"] {
    get SocketConnection() {
        return this._socketConnection;
    }
    /**
     * This is an abstract class for implementing a socket provider (e.g. WebSocket, IPC). It extends the EIP-1193 provider {@link EIP1193Provider}.
     * @param socketPath - The path to the socket (e.g. /ipc/path or ws://localhost:8546)
     * @param socketOptions - The options for the socket connection. Its type is supposed to be specified in the inherited classes.
     * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
     */ constructor(socketPath, socketOptions, reconnectOptions){
        super();
        this._connectionStatus = 'connecting';
        // Message handlers. Due to bounding of `this` and removing the listeners we have to keep it's reference.
        this._onMessageHandler = this._onMessage.bind(this);
        this._onOpenHandler = this._onConnect.bind(this);
        this._onCloseHandler = this._onCloseEvent.bind(this);
        this._onErrorHandler = this._onError.bind(this);
        if (!this._validateProviderPath(socketPath)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidClientError"](socketPath);
        this._socketPath = socketPath;
        this._socketOptions = socketOptions;
        this._reconnectOptions = Object.assign(Object.assign({}, DEFAULT_RECONNECTION_OPTIONS), reconnectOptions !== null && reconnectOptions !== void 0 ? reconnectOptions : {});
        this._pendingRequestsQueue = new Map();
        this._sentRequestsQueue = new Map();
        this._init();
        this.connect();
        this.chunkResponseParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$chunk_response_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChunkResponseParser"](this._eventEmitter, this._reconnectOptions.autoReconnect);
        this.chunkResponseParser.onError(()=>{
            this._clearQueues();
        });
        this.isReconnecting = false;
    }
    _init() {
        this._reconnectAttempts = 0;
    }
    /**
     * Try to establish a connection to the socket
     */ connect() {
        try {
            this._openSocketConnection();
            this._connectionStatus = 'connecting';
            this._addSocketListeners();
        } catch (e) {
            if (!this.isReconnecting) {
                this._connectionStatus = 'disconnected';
                if (e && e.message) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionError"](`Error while connecting to ${this._socketPath}. Reason: ${e.message}`);
                } else {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidClientError"](this._socketPath);
                }
            } else {
                setImmediate(()=>{
                    this._reconnect();
                });
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    _validateProviderPath(path) {
        return !!path;
    }
    /**
     *
     * @returns the pendingRequestQueue size
     */ // eslint-disable-next-line class-methods-use-this
    getPendingRequestQueueSize() {
        return this._pendingRequestsQueue.size;
    }
    /**
     *
     * @returns the sendPendingRequests size
     */ // eslint-disable-next-line class-methods-use-this
    getSentRequestsQueueSize() {
        return this._sentRequestsQueue.size;
    }
    /**
     *
     * @returns `true` if the socket supports subscriptions
     */ // eslint-disable-next-line class-methods-use-this
    supportsSubscriptions() {
        return true;
    }
    on(type, listener) {
        this._eventEmitter.on(type, listener);
    }
    once(type, listener) {
        this._eventEmitter.once(type, listener);
    }
    removeListener(type, listener) {
        this._eventEmitter.removeListener(type, listener);
    }
    _onDisconnect(code, data) {
        this._connectionStatus = 'disconnected';
        super._onDisconnect(code, data);
    }
    /**
     * Disconnects the socket
     * @param code - The code to be sent to the server
     * @param data - The data to be sent to the server
     */ disconnect(code, data) {
        const disconnectCode = code !== null && code !== void 0 ? code : NORMAL_CLOSE_CODE;
        this._removeSocketListeners();
        if (this.getStatus() !== 'disconnected') {
            this._closeSocketConnection(disconnectCode, data);
        }
        this._onDisconnect(disconnectCode, data);
    }
    /**
     * Safely disconnects the socket, async and waits for request size to be 0 before disconnecting
     * @param forceDisconnect - If true, will clear queue after 5 attempts of waiting for both pending and sent queue to be 0
     * @param ms - Determines the ms of setInterval
     * @param code - The code to be sent to the server
     * @param data - The data to be sent to the server
     */ safeDisconnect(code_1, data_1) {
        return __awaiter(this, arguments, void 0, function*(code, data, forceDisconnect = false, ms = 1000) {
            let retryAttempt = 0;
            const checkQueue = ()=>__awaiter(this, void 0, void 0, function*() {
                    return new Promise((resolve)=>{
                        const interval = setInterval(()=>{
                            if (forceDisconnect && retryAttempt >= 5) {
                                this.clearQueues();
                            }
                            if (this.getPendingRequestQueueSize() === 0 && this.getSentRequestsQueueSize() === 0) {
                                clearInterval(interval);
                                resolve(true);
                            }
                            retryAttempt += 1;
                        }, ms);
                    });
                });
            yield checkQueue();
            this.disconnect(code, data);
        });
    }
    /**
     * Removes all listeners for the specified event type.
     * @param type - The event type to remove the listeners for
     */ removeAllListeners(type) {
        this._eventEmitter.removeAllListeners(type);
    }
    _onError(event) {
        // do not emit error while trying to reconnect
        if (this.isReconnecting) {
            this._reconnect();
        } else {
            this._eventEmitter.emit('error', event);
        }
    }
    /**
     * Resets the socket, removing all listeners and pending requests
     */ reset() {
        this._sentRequestsQueue.clear();
        this._pendingRequestsQueue.clear();
        this._init();
        this._removeSocketListeners();
        this._addSocketListeners();
    }
    _reconnect() {
        if (this.isReconnecting) {
            return;
        }
        this.isReconnecting = true;
        if (this._sentRequestsQueue.size > 0) {
            this._sentRequestsQueue.forEach((request, key)=>{
                request.deferredPromise.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PendingRequestsOnReconnectingError"]());
                this._sentRequestsQueue.delete(key);
            });
        }
        if (this._reconnectAttempts < this._reconnectOptions.maxAttempts) {
            this._reconnectAttempts += 1;
            setTimeout(()=>{
                this._removeSocketListeners();
                this.connect(); // this can error out
                this.isReconnecting = false;
            }, this._reconnectOptions.delay);
        } else {
            this.isReconnecting = false;
            this._clearQueues();
            this._removeSocketListeners();
            this._eventEmitter.emit('error', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxAttemptsReachedOnReconnectingError"](this._reconnectOptions.maxAttempts));
        }
    }
    /**
     *  Creates a request object to be sent to the server
     */ request(request) {
        return __awaiter(this, void 0, void 0, function*() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(this._socketConnection)) {
                throw new Error('Connection is undefined');
            }
            // if socket disconnected - open connection
            if (this.getStatus() === 'disconnected') {
                this.connect();
            }
            const requestId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isBatchRequest(request) ? request[0].id : request.id;
            if (!requestId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3WSProviderError"]('Request Id not defined');
            }
            if (this._sentRequestsQueue.has(requestId)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequestAlreadySentError"](requestId);
            }
            const deferredPromise = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_deferred_promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3DeferredPromise"]();
            deferredPromise.catch((error)=>{
                this._eventEmitter.emit('error', error);
            });
            const reqItem = {
                payload: request,
                deferredPromise
            };
            if (this.getStatus() === 'connecting') {
                this._pendingRequestsQueue.set(requestId, reqItem);
                return reqItem.deferredPromise;
            }
            this._sentRequestsQueue.set(requestId, reqItem);
            try {
                this._sendToSocket(reqItem.payload);
            } catch (error) {
                this._sentRequestsQueue.delete(requestId);
                this._eventEmitter.emit('error', error);
            }
            return deferredPromise;
        });
    }
    _onConnect() {
        this._connectionStatus = 'connected';
        this._reconnectAttempts = 0;
        super._onConnect();
        this._sendPendingRequests();
    }
    _sendPendingRequests() {
        for (const [id, value] of this._pendingRequestsQueue.entries()){
            try {
                this._sendToSocket(value.payload);
                this._pendingRequestsQueue.delete(id);
                this._sentRequestsQueue.set(id, value);
            } catch (error) {
                // catches if sendTosocket fails
                this._pendingRequestsQueue.delete(id);
                this._eventEmitter.emit('error', error);
            }
        }
    }
    _onMessage(event) {
        const responses = this._parseResponses(event);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(responses) || responses.length === 0) {
            return;
        }
        for (const response of responses){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isResponseWithNotification(response) && response.method.endsWith('_subscription')) {
                this._eventEmitter.emit('message', response);
                return;
            }
            const requestId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isBatchResponse(response) ? response[0].id : response.id;
            const requestItem = this._sentRequestsQueue.get(requestId);
            if (!requestItem) {
                return;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isBatchResponse(response) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isResponseWithResult(response) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isResponseWithError(response)) {
                this._eventEmitter.emit('message', response);
                requestItem.deferredPromise.resolve(response);
            }
            this._sentRequestsQueue.delete(requestId);
        }
    }
    clearQueues(event) {
        this._clearQueues(event);
    }
    _clearQueues(event) {
        if (this._pendingRequestsQueue.size > 0) {
            this._pendingRequestsQueue.forEach((request, key)=>{
                request.deferredPromise.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionNotOpenError"](event));
                this._pendingRequestsQueue.delete(key);
            });
        }
        if (this._sentRequestsQueue.size > 0) {
            this._sentRequestsQueue.forEach((request, key)=>{
                request.deferredPromise.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionNotOpenError"](event));
                this._sentRequestsQueue.delete(key);
            });
        }
        this._removeSocketListeners();
    }
} //# sourceMappingURL=socket_provider.js.map
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
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
;
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
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$event_emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/event_emitter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$string_manipulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/string_manipulation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/promise_helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_deferred_promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_deferred_promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$chunk_response_parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/chunk_response_parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uuid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_eip1193_provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_eip1193_provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$socket_provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/socket_provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-client] (ecmascript) <export * as jsonRpc>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "jsonRpc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=bb04d_web3-utils_lib_esm_589818._.js.map