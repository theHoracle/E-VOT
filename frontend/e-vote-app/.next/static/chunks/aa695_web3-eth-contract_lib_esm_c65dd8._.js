(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/aa695_web3-eth-contract_lib_esm_c65dd8._.js", {

"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
    "decodeMethodParams": (()=>decodeMethodParams),
    "decodeMethodReturn": (()=>decodeMethodReturn),
    "encodeEventABI": (()=>encodeEventABI),
    "encodeMethodABI": (()=>encodeMethodABI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$events_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/events_api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/parameters_api.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/coders/encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/functions_api.js [app-client] (ecmascript)");
;
;
;
;
;
;
const encodeEventABI = ({ address }, event, options)=>{
    var _a, _b;
    const topics = options === null || options === void 0 ? void 0 : options.topics;
    const filter = (_a = options === null || options === void 0 ? void 0 : options.filter) !== null && _a !== void 0 ? _a : {};
    const opts = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options === null || options === void 0 ? void 0 : options.fromBlock)) {
        opts.fromBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockSchema"].properties.number, options === null || options === void 0 ? void 0 : options.fromBlock, {
            number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_NUMBER"].HEX,
            bytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_BYTES"].HEX
        });
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options === null || options === void 0 ? void 0 : options.toBlock)) {
        opts.toBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockSchema"].properties.number, options === null || options === void 0 ? void 0 : options.toBlock, {
            number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_NUMBER"].HEX,
            bytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMT_BYTES"].HEX
        });
    }
    if (topics && Array.isArray(topics)) {
        opts.topics = [
            ...topics
        ];
    } else {
        opts.topics = [];
        // add event signature
        if (event && !event.anonymous && ![
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_EVENTS"],
            'allEvents'
        ].includes(event.name)) {
            opts.topics.push((_b = event.signature) !== null && _b !== void 0 ? _b : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$events_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventSignature"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(event)));
        }
        // add event topics (indexed arguments)
        if (![
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_EVENTS"],
            'allEvents'
        ].includes(event.name) && event.inputs) {
            for (const input of event.inputs){
                if (!input.indexed) {
                    continue;
                }
                const value = filter[input.name];
                if (!value) {
                    // eslint-disable-next-line no-null/no-null
                    opts.topics.push(null);
                    continue;
                }
                // TODO: https://github.com/ethereum/web3.js/issues/344
                // TODO: deal properly with components
                if (Array.isArray(value)) {
                    opts.topics.push(value.map((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeParameter"])(input.type, v)));
                } else if (input.type === 'string') {
                    opts.topics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(value));
                } else {
                    opts.topics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$parameters_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeParameter"])(input.type, value));
                }
            }
        }
    }
    if (!opts.topics.length) delete opts.topics;
    if (address) {
        opts.address = address.toLowerCase();
    }
    return opts;
};
const encodeMethodABI = (abi, args, deployData)=>{
    const inputLength = Array.isArray(abi.inputs) ? abi.inputs.length : 0;
    if (abi.inputs && inputLength !== args.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"](`The number of arguments is not matching the methods required number. You need to pass ${inputLength} arguments.`);
    }
    let params;
    if (abi.inputs) {
        params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeParameters"])(Array.isArray(abi.inputs) ? abi.inputs : [], args).replace('0x', '');
    } else {
        params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$coders$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferTypesAndEncodeParameters"])(args).replace('0x', '');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAbiConstructorFragment"])(abi)) {
        if (!deployData) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('The contract has no contract data option set. This is necessary to append the constructor parameters.');
        if (!deployData.startsWith('0x')) {
            return `0x${deployData}${params}`;
        }
        return `${deployData}${params}`;
    }
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionSignature"])(abi)}${params}`;
};
const decodeMethodParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionCall"];
const decodeMethodReturn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionReturn"]; //# sourceMappingURL=encoding.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract_log_subscription.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "ContractLogsSubscription": (()=>ContractLogsSubscription),
    "LogsSubscription": (()=>LogsSubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscriptions.js [app-client] (ecmascript)");
;
;
class ContractLogsSubscription extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Subscription"] {
    constructor(args, options){
        super(args, options);
        this.address = args.address;
        this.topics = args.topics;
        this.abi = args.abi;
        this.jsonInterface = args.jsonInterface;
    }
    _buildSubscriptionParams() {
        return [
            'logs',
            {
                address: this.address,
                topics: this.topics
            }
        ];
    }
    formatSubscriptionResult(data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventABI"])(this.abi, data, this.jsonInterface, super.returnFormat);
    }
}
const LogsSubscription = ContractLogsSubscription; //# sourceMappingURL=contract_log_subscription.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "create2ContractAddress": (()=>create2ContractAddress),
    "createContractAddress": (()=>createContractAddress),
    "getCreateAccessListParams": (()=>getCreateAccessListParams),
    "getEstimateGasParams": (()=>getEstimateGasParams),
    "getEthTxCallParams": (()=>getEthTxCallParams),
    "getSendTxParams": (()=>getSendTxParams),
    "isWeb3ContractContext": (()=>isWeb3ContractContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$5$2e$0$2e$2$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ethereumjs+rlp@5.0.2/node_modules/@ethereumjs/rlp/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-client] (ecmascript)");
;
;
;
;
;
const dataInputEncodeMethodHelper = (txParams, abi, params, dataInputFill)=>{
    var _a, _b;
    const tx = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(txParams.data) || dataInputFill === 'both') {
        tx.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeMethodABI"])(abi, params, (_a = txParams.data) !== null && _a !== void 0 ? _a : txParams.input);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(txParams.input) || dataInputFill === 'both') {
        tx.input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeMethodABI"])(abi, params, (_b = txParams.input) !== null && _b !== void 0 ? _b : txParams.data);
    }
    // if input and data is empty, use web3config default
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(tx.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(tx.data)) {
        tx[dataInputFill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeMethodABI"])(abi, params);
    }
    return {
        data: tx.data,
        input: tx.input
    };
};
const getSendTxParams = ({ abi, params, options, contractOptions })=>{
    var _a, _b, _c;
    const deploymentCall = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.input) !== null && _a !== void 0 ? _a : options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : contractOptions.input) !== null && _c !== void 0 ? _c : contractOptions.data;
    if (!deploymentCall && !(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('Contract address not specified');
    }
    if (!(options === null || options === void 0 ? void 0 : options.from) && !contractOptions.from) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('Contract "from" address not specified');
    }
    let txParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])({
        to: contractOptions.address,
        gas: contractOptions.gas,
        gasPrice: contractOptions.gasPrice,
        from: contractOptions.from,
        input: contractOptions.input,
        maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
        maxFeePerGas: contractOptions.maxFeePerGas,
        data: contractOptions.data
    }, options);
    const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
    txParams = Object.assign(Object.assign({}, txParams), {
        data: dataInput.data,
        input: dataInput.input
    });
    return txParams;
};
const getEthTxCallParams = ({ abi, params, options, contractOptions })=>{
    if (!(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('Contract address not specified');
    }
    let txParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])({
        to: contractOptions.address,
        gas: contractOptions.gas,
        gasPrice: contractOptions.gasPrice,
        from: contractOptions.from,
        input: contractOptions.input,
        maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
        maxFeePerGas: contractOptions.maxFeePerGas,
        data: contractOptions.data
    }, options);
    const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
    txParams = Object.assign(Object.assign({}, txParams), {
        data: dataInput.data,
        input: dataInput.input
    });
    return txParams;
};
const getEstimateGasParams = ({ abi, params, options, contractOptions })=>{
    let txParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])({
        to: contractOptions.address,
        gas: contractOptions.gas,
        gasPrice: contractOptions.gasPrice,
        from: contractOptions.from,
        input: contractOptions.input,
        data: contractOptions.data
    }, options);
    const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
    txParams = Object.assign(Object.assign({}, txParams), {
        data: dataInput.data,
        input: dataInput.input
    });
    return txParams;
};
const isWeb3ContractContext = (options)=>typeof options === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options) && Object.keys(options).length !== 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContractInitOptions"])(options);
const getCreateAccessListParams = ({ abi, params, options, contractOptions })=>{
    if (!(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('Contract address not specified');
    }
    if (!(options === null || options === void 0 ? void 0 : options.from) && !contractOptions.from) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('Contract "from" address not specified');
    }
    let txParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"])({
        to: contractOptions.address,
        gas: contractOptions.gas,
        gasPrice: contractOptions.gasPrice,
        from: contractOptions.from,
        input: contractOptions.input,
        maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
        maxFeePerGas: contractOptions.maxFeePerGas,
        data: contractOptions.data
    }, options);
    const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
    txParams = Object.assign(Object.assign({}, txParams), {
        data: dataInput.data,
        input: dataInput.input
    });
    return txParams;
};
const createContractAddress = (from, nonce)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(from)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"](`Invalid address given ${from}`);
    let nonceValue = nonce;
    if (typeof nonce === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(nonce)) nonceValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    else if (typeof nonce === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(nonce)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidNumberError"]('Invalid nonce value format');
    const rlpEncoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$5$2e$0$2e$2$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode([
        from,
        nonceValue
    ]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(rlpEncoded);
    const contractAddress = '0x'.concat(result.substring(26));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(contractAddress);
};
const create2ContractAddress = (from, salt, initCode)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(from)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"](`Invalid address given ${from}`);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(salt)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidMethodParamsError"](`Invalid salt value ${salt}`);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(initCode)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidMethodParamsError"](`Invalid initCode value ${initCode}`);
    const initCodeHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(initCode);
    const initCodeHashPadded = initCodeHash.padStart(64, '0'); // Pad to 32 bytes (64 hex characters)
    const create2Params = [
        '0xff',
        from,
        salt,
        initCodeHashPadded
    ].map((x)=>x.replace(/0x/, ''));
    const create2Address = `0x${create2Params.join('')}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(`0x${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(create2Address).slice(26)}`); // Slice to get the last 20 bytes (40 hex characters) & checksum
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract-deployer-method-class.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "DeployerMethodClass": (()=>DeployerMethodClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/functions_api.js [app-client] (ecmascript)");
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
;
;
class DeployerMethodClass {
    _contractMethodDeploySend(tx) {
        // eslint-disable-next-line no-use-before-define
        const returnTxOptions = {
            transactionResolver: (receipt)=>{
                if (receipt.status === BigInt(0)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]("code couldn't be stored", receipt);
                }
                const newContract = this.parent.clone();
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                newContract.options.address = receipt.contractAddress;
                return newContract;
            },
            contractAbi: this.parent.options.jsonInterface,
            // TODO Should make this configurable by the user
            checkRevertBeforeSending: false
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(this.parent.getTransactionMiddleware()) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(this.parent, tx, this.parent.defaultReturnFormat, returnTxOptions) // not calling this with undefined Middleware because it will not break if Eth package is not updated
         : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(this.parent, tx, this.parent.defaultReturnFormat, returnTxOptions, this.parent.getTransactionMiddleware());
    }
    constructor(// eslint-disable-next-line no-use-before-define
    parent, deployOptions){
        this.parent = parent;
        this.deployOptions = deployOptions;
        const { args, abi, contractOptions, deployData } = this.calculateDeployParams();
        this.args = args;
        this.constructorAbi = abi;
        this.contractOptions = contractOptions;
        this.deployData = deployData;
    }
    send(options) {
        const modifiedOptions = Object.assign({}, options);
        const tx = this.populateTransaction(modifiedOptions);
        return this._contractMethodDeploySend(tx);
    }
    populateTransaction(txOptions) {
        var _a, _b;
        const modifiedContractOptions = Object.assign(Object.assign({}, this.contractOptions), {
            from: (_b = (_a = this.contractOptions.from) !== null && _a !== void 0 ? _a : this.parent.defaultAccount) !== null && _b !== void 0 ? _b : undefined
        });
        // args, abi, contractOptions, deployData
        const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSendTxParams"])({
            abi: this.constructorAbi,
            params: this.args,
            options: Object.assign(Object.assign({}, txOptions), {
                dataInputFill: this.parent.contractDataInputFill
            }),
            contractOptions: modifiedContractOptions
        });
        // @ts-expect-error remove unnecessary field
        if (tx.dataInputFill) {
            // @ts-expect-error remove unnecessary field
            delete tx.dataInputFill;
        }
        return tx;
    }
    calculateDeployParams() {
        var _a, _b, _c, _d, _e, _f;
        let abi = this.parent.options.jsonInterface.find((j)=>j.type === 'constructor');
        if (!abi) {
            abi = {
                type: 'constructor',
                stateMutability: ''
            };
        }
        const _input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, (_b = (_a = this.deployOptions) === null || _a === void 0 ? void 0 : _a.input) !== null && _b !== void 0 ? _b : this.parent.options.input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]);
        const _data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, (_d = (_c = this.deployOptions) === null || _c === void 0 ? void 0 : _c.data) !== null && _d !== void 0 ? _d : this.parent.options.data, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]);
        if ((!_input || _input.trim() === '0x') && (!_data || _data.trim() === '0x')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"]('contract creation without any data provided.');
        }
        const args = (_f = (_e = this.deployOptions) === null || _e === void 0 ? void 0 : _e.arguments) !== null && _f !== void 0 ? _f : [];
        const contractOptions = Object.assign(Object.assign({}, this.parent.options), {
            input: _input,
            data: _data
        });
        const deployData = _input !== null && _input !== void 0 ? _input : _data;
        return {
            args,
            abi,
            contractOptions,
            deployData
        };
    }
    estimateGas(options_1) {
        return __awaiter(this, arguments, void 0, function*(options, returnFormat = this.parent.defaultReturnFormat) {
            const modifiedOptions = Object.assign({}, options);
            return this.parent.contractMethodEstimateGas({
                abi: this.constructorAbi,
                params: this.args,
                returnFormat,
                options: modifiedOptions,
                contractOptions: this.contractOptions
            });
        });
    }
    encodeABI() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeMethodABI"])(this.constructorAbi, this.args, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, this.deployData, this.parent.defaultReturnFormat));
    }
    decodeData(data) {
        return Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionCall"])(this.constructorAbi, data.replace(this.deployData, ''), false)), {
            __method__: this.constructorAbi.type
        });
    }
} //# sourceMappingURL=contract-deployer-method-class.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract-subscription-manager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "ContractSubscriptionManager": (()=>ContractSubscriptionManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscription_manager.js [app-client] (ecmascript)");
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
class ContractSubscriptionManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3SubscriptionManager"] {
    /**
     *
     * @param - Web3SubscriptionManager
     * @param - parentContract
     *
     * @example
     * ```ts
     * const requestManager = new Web3RequestManager("ws://localhost:8545");
     * const contract = new Contract(...)
     * const subscriptionManager = new Web3SubscriptionManager(requestManager, {}, contract);
     * ```
     */ constructor(self, parentContract){
        super(self.requestManager, self.registeredSubscriptions);
        this.parentContract = parentContract;
    }
    /**
     * Will create a new subscription
     *
     * @param name - The subscription you want to subscribe to
     * @param args - Optional additional parameters, depending on the subscription type
     * @param returnFormat- ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     *
     * Will subscribe to a specific topic (note: name)
     * @returns The subscription object
     */ subscribe(name_1, args_1) {
        const _super = Object.create(null, {
            subscribe: {
                get: ()=>super.subscribe
            }
        });
        return __awaiter(this, arguments, void 0, function*(name, args, returnFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]) {
            return _super.subscribe.call(this, name, args !== null && args !== void 0 ? args : this.parentContract.options, returnFormat);
        });
    }
} //# sourceMappingURL=contract-subscription-manager.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "Contract": (()=>Contract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract_log_subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract_log_subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/utils.js [app-client] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2d$deployer$2d$method$2d$class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract-deployer-method-class.js [app-client] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2d$subscription$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract-subscription-manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_subscriptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/functions_api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$events_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/events_api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/utils.js [app-client] (ecmascript) <export * as utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/default_validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/decode_contract_error_data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/eth_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/provider_errors.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
const contractSubscriptions = {
    logs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract_log_subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractLogsSubscription"],
    newHeads: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewHeadsSubscription"],
    newBlockHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewHeadsSubscription"]
};
class Contract extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Context"] {
    get subscriptionManager() {
        return this._subscriptionManager;
    }
    constructor(jsonInterface, addressOrOptionsOrContext, optionsOrContextOrReturnFormat, contextOrReturnFormat, returnFormat){
        var _a, _b, _c;
        // eslint-disable-next-line no-nested-ternary
        const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContractInitOptions"])(addressOrOptionsOrContext) ? addressOrOptionsOrContext : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContractInitOptions"])(optionsOrContextOrReturnFormat) ? optionsOrContextOrReturnFormat : undefined;
        let contractContext;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb3ContractContext"])(addressOrOptionsOrContext)) {
            contractContext = addressOrOptionsOrContext;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb3ContractContext"])(optionsOrContextOrReturnFormat)) {
            contractContext = optionsOrContextOrReturnFormat;
        } else {
            contractContext = contextOrReturnFormat;
        }
        let provider;
        if (typeof addressOrOptionsOrContext === 'object' && 'provider' in addressOrOptionsOrContext) {
            provider = addressOrOptionsOrContext.provider;
        } else if (typeof optionsOrContextOrReturnFormat === 'object' && 'provider' in optionsOrContextOrReturnFormat) {
            provider = optionsOrContextOrReturnFormat.provider;
        } else if (typeof contextOrReturnFormat === 'object' && 'provider' in contextOrReturnFormat) {
            provider = contextOrReturnFormat.provider;
        } else {
            provider = Contract.givenProvider;
        }
        super(Object.assign(Object.assign({}, contractContext), {
            provider,
            registeredSubscriptions: contractSubscriptions
        }));
        /**
         * Set to true if you want contracts' defaults to sync with global defaults.
         */ this.syncWithContext = false;
        this._functions = {};
        this._subscriptionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2d$subscription$2d$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractSubscriptionManager"](super.subscriptionManager, this);
        // Init protected properties
        if (contractContext === null || contractContext === void 0 ? void 0 : contractContext.wallet) {
            this._wallet = contractContext.wallet;
        }
        if (contractContext === null || contractContext === void 0 ? void 0 : contractContext.accountProvider) {
            this._accountProvider = contractContext.accountProvider;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options.data) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(options.input) && this.config.contractDataInputFill !== 'both') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractTransactionDataAndInputError"]({
            data: options.data,
            input: options.input
        });
        this._overloadedMethodAbis = new Map();
        // eslint-disable-next-line no-nested-ternary
        const returnDataFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataFormat"])(contextOrReturnFormat) ? contextOrReturnFormat : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataFormat"])(optionsOrContextOrReturnFormat) ? optionsOrContextOrReturnFormat : returnFormat !== null && returnFormat !== void 0 ? returnFormat : this.defaultReturnFormat;
        const address = typeof addressOrOptionsOrContext === 'string' ? addressOrOptionsOrContext : undefined;
        this.config.contractDataInputFill = (_a = options === null || options === void 0 ? void 0 : options.dataInputFill) !== null && _a !== void 0 ? _a : this.config.contractDataInputFill;
        this._parseAndSetJsonInterface(jsonInterface, returnDataFormat);
        if (this.defaultReturnFormat !== returnDataFormat) {
            this.defaultReturnFormat = returnDataFormat;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(address)) {
            this._parseAndSetAddress(address, returnDataFormat);
        }
        this.options = {
            address,
            jsonInterface: this._jsonInterface,
            gas: (_b = options === null || options === void 0 ? void 0 : options.gas) !== null && _b !== void 0 ? _b : options === null || options === void 0 ? void 0 : options.gasLimit,
            gasPrice: options === null || options === void 0 ? void 0 : options.gasPrice,
            from: options === null || options === void 0 ? void 0 : options.from,
            input: options === null || options === void 0 ? void 0 : options.input,
            data: options === null || options === void 0 ? void 0 : options.data
        };
        this.syncWithContext = (_c = options === null || options === void 0 ? void 0 : options.syncWithContext) !== null && _c !== void 0 ? _c : false;
        if (contractContext instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Context"]) {
            this.subscribeToContextEvents(contractContext);
        }
        Object.defineProperty(this.options, 'address', {
            set: (value)=>this._parseAndSetAddress(value, returnDataFormat),
            get: ()=>this._address
        });
        Object.defineProperty(this.options, 'jsonInterface', {
            set: (value)=>this._parseAndSetJsonInterface(value, returnDataFormat),
            get: ()=>this._jsonInterface
        });
        if (contractContext instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Context"]) {
            contractContext.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConfigEvent"].CONFIG_CHANGE, (event)=>{
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                this.setConfig({
                    [event.name]: event.newValue
                });
            });
        }
    }
    setTransactionMiddleware(transactionMiddleware) {
        this.transactionMiddleware = transactionMiddleware;
    }
    getTransactionMiddleware() {
        return this.transactionMiddleware;
    }
    /**
     * Subscribe to an event.
     *
     * ```ts
     * await myContract.events.MyEvent([options])
     * ```
     *
     * There is a special event `allEvents` that can be used to subscribe all events.
     *
     * ```ts
     * await myContract.events.allEvents([options])
     * ```
     *
     * @returns - When individual event is accessed will returns {@link ContractBoundEvent} object
     */ get events() {
        return this._events;
    }
    /**
     * Creates a transaction object for that method, which then can be `called`, `send`, `estimated`, `createAccessList` , or `ABI encoded`.
     *
     * The methods of this smart contract are available through:
     *
     * The name: `myContract.methods.myMethod(123)`
     * The name with parameters: `myContract.methods['myMethod(uint256)'](123)`
     * The signature `myContract.methods['0x58cf5f10'](123)`
     *
     * This allows calling functions with same name but different parameters from the JavaScript contract object.
     *
     * \> The method signature does not provide a type safe interface, so we recommend to use method `name` instead.
     *
     * ```ts
     * // calling a method
     * const result = await myContract.methods.myMethod(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
     *
     * // or sending and using a promise
     * const receipt = await myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
     *
     * // or sending and using the events
     * const sendObject = myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
     * sendObject.on('transactionHash', function(hash){
     *   ...
     * });
     * sendObject.on('receipt', function(receipt){
     *   ...
     * });
     * sendObject.on('confirmation', function(confirmationNumber, receipt){
     *   ...
     * });
     * sendObject.on('error', function(error, receipt) {
     *   ...
     * });
     * ```
     *
     * @returns - Either returns {@link PayableMethodObject} or {@link NonPayableMethodObject} based on the definitions of the ABI of that contract.
     */ get methods() {
        return this._methods;
    }
    /**
     * Clones the current contract instance. This doesn't deploy contract on blockchain and only creates a local clone.
     *
     * @returns - The new contract instance.
     *
     * ```ts
     * const contract1 = new web3.eth.Contract(abi, address, {gasPrice: '12345678', from: fromAddress});
     *
     * const contract2 = contract1.clone();
     * contract2.options.address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
     *
     * (contract1.options.address !== contract2.options.address);
     * > true
     * ```
     */ clone() {
        let newContract;
        if (this.options.address) {
            newContract = new Contract([
                ...this._jsonInterface,
                ...this._errorsInterface
            ], this.options.address, {
                gas: this.options.gas,
                gasPrice: this.options.gasPrice,
                from: this.options.from,
                input: this.options.input,
                data: this.options.data,
                provider: this.currentProvider,
                syncWithContext: this.syncWithContext,
                dataInputFill: this.config.contractDataInputFill
            }, this.getContextObject());
        } else {
            newContract = new Contract([
                ...this._jsonInterface,
                ...this._errorsInterface
            ], {
                gas: this.options.gas,
                gasPrice: this.options.gasPrice,
                from: this.options.from,
                input: this.options.input,
                data: this.options.data,
                provider: this.currentProvider,
                syncWithContext: this.syncWithContext,
                dataInputFill: this.config.contractDataInputFill
            }, this.getContextObject());
        }
        if (this.context) newContract.subscribeToContextEvents(this.context);
        return newContract;
    }
    /**
     * Call this function to deploy the contract to the blockchain. After successful deployment the promise will resolve with a new contract instance.
     *
     * ```ts
     * myContract.deploy({
     *   input: '0x12345...', // data keyword can be used, too.
     *   arguments: [123, 'My String']
     * })
     * .send({
     *   from: '0x1234567890123456789012345678901234567891',
     *   gas: 1500000,
     *   gasPrice: '30000000000000'
     * }, function(error, transactionHash){ ... })
     * .on('error', function(error){ ... })
     * .on('transactionHash', function(transactionHash){ ... })
     * .on('receipt', function(receipt){
     *  console.log(receipt.contractAddress) // contains the new contract address
     * })
     * .on('confirmation', function(confirmationNumber, receipt){ ... })
     * .then(function(newContractInstance){
     *   console.log(newContractInstance.options.address) // instance with the new contract address
     * });
     *
     *
     * // When the data is already set as an option to the contract itself
     * myContract.options.data = '0x12345...';
     *
     * myContract.deploy({
     *   arguments: [123, 'My String']
     * })
     * .send({
     *   from: '0x1234567890123456789012345678901234567891',
     *   gas: 1500000,
     *   gasPrice: '30000000000000'
     * })
     * .then(function(newContractInstance){
     *   console.log(newContractInstance.options.address) // instance with the new contract address
     * });
     *
     *
     * // Simply encoding
     * myContract.deploy({
     *   input: '0x12345...',
     *   arguments: [123, 'My String']
     * })
     * .encodeABI();
     * > '0x12345...0000012345678765432'
     *
     *
     * // decoding
     * myContract.deploy({
     *   input: '0x12345...',
     *   // arguments: [123, 'My Greeting'] if you just need to decode the data, you can skip the arguments
     * })
     * .decodeData('0x12345...0000012345678765432');
     * > {
     *      __method__: 'constructor',
     *      __length__: 2,
     *      '0': '123',
     *      _id: '123',
     *      '1': 'My Greeting',
     *      _greeting: 'My Greeting',
     *   }
     *
     *
     * // Gas estimation
     * myContract.deploy({
     *   input: '0x12345...',
     *   arguments: [123, 'My String']
     * })
     * .estimateGas(function(err, gas){
     *   console.log(gas);
     * });
     * ```
     *
     * @returns - The transaction object
     */ deploy(deployOptions) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2d$deployer$2d$method$2d$class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeployerMethodClass"](this, deployOptions);
    }
    getPastEvents(param1, param2, param3) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            const eventName = typeof param1 === 'string' ? param1 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_EVENTS"];
            const options = // eslint-disable-next-line no-nested-ternary
            typeof param1 !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataFormat"])(param1) ? param1 : !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataFormat"])(param2) ? param2 : {};
            // eslint-disable-next-line no-nested-ternary
            const returnFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataFormat"])(param1) ? param1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataFormat"])(param2) ? param2 : param3 !== null && param3 !== void 0 ? param3 : this.defaultReturnFormat;
            const abi = eventName === 'allEvents' || eventName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_EVENTS"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_EVENTS_ABI"] : this._jsonInterface.find((j)=>'name' in j && j.name === eventName);
            if (!abi) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"](`Event ${String(eventName)} not found.`);
            }
            const { fromBlock, toBlock, topics, address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeEventABI"])(this.options, abi, options !== null && options !== void 0 ? options : {});
            const logs = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogs"])(this, {
                fromBlock,
                toBlock,
                topics,
                address
            }, returnFormat);
            const decodedLogs = logs ? logs.map((log)=>typeof log === 'string' ? log : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventABI"])(abi, log, this._jsonInterface, returnFormat)) : [];
            const filter = (_a = options === null || options === void 0 ? void 0 : options.filter) !== null && _a !== void 0 ? _a : {};
            const filterKeys = Object.keys(filter);
            if (filterKeys.length > 0) {
                return decodedLogs.filter((log)=>{
                    if (typeof log === 'string') return true;
                    return filterKeys.every((key)=>{
                        var _a;
                        if (Array.isArray(filter[key])) {
                            return filter[key].some((v)=>String(log.returnValues[key]).toUpperCase() === String(v).toUpperCase());
                        }
                        const inputAbi = (_a = abi.inputs) === null || _a === void 0 ? void 0 : _a.filter((input)=>input.name === key)[0];
                        if ((inputAbi === null || inputAbi === void 0 ? void 0 : inputAbi.indexed) && inputAbi.type === 'string') {
                            const hashedIndexedString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(filter[key]);
                            if (hashedIndexedString === String(log.returnValues[key])) return true;
                        }
                        return String(log.returnValues[key]).toUpperCase() === String(filter[key]).toUpperCase();
                    });
                });
            }
            return decodedLogs;
        });
    }
    _parseAndSetAddress(value, returnFormat = this.defaultReturnFormat) {
        this._address = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])({
            format: 'address'
        }, value, returnFormat)) : value;
    }
    decodeMethodData(data) {
        const methodSignature = data.slice(0, 10);
        const functionsAbis = this._jsonInterface.filter((j)=>j.type !== 'error');
        const abi = functionsAbis.find((a)=>methodSignature === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionSignature"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(a)));
        if (!abi) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"](`The ABI for the provided method signature ${methodSignature} was not found.`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionCall"])(abi, data);
    }
    _parseAndSetJsonInterface(abis, returnFormat = this.defaultReturnFormat) {
        var _a, _b;
        this._functions = {};
        this._methods = {};
        this._events = {};
        let result = [];
        const functionsAbi = abis.filter((abi)=>abi.type !== 'error');
        const errorsAbi = abis.filter((abi)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAbiErrorFragment"])(abi));
        for (const a of functionsAbi){
            const abi = Object.assign(Object.assign({}, a), {
                signature: ''
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAbiFunctionFragment"])(abi)) {
                const methodName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(abi);
                const methodSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionSignature"])(methodName);
                abi.methodNameWithInputs = methodName;
                abi.signature = methodSignature;
                // make constant and payable backwards compatible
                abi.constant = abi.stateMutability === 'view' || abi.stateMutability === 'pure' || abi.constant;
                abi.payable = abi.stateMutability === 'payable' || abi.payable;
                this._overloadedMethodAbis.set(abi.name, [
                    ...(_a = this._overloadedMethodAbis.get(abi.name)) !== null && _a !== void 0 ? _a : [],
                    abi
                ]);
                const abiFragment = (_b = this._overloadedMethodAbis.get(abi.name)) !== null && _b !== void 0 ? _b : [];
                const contractMethod = this._createContractMethod(abiFragment, errorsAbi);
                const exactContractMethod = this._createContractMethod(abiFragment, errorsAbi, true);
                this._functions[methodName] = {
                    signature: methodSignature,
                    method: exactContractMethod
                };
                // We don't know a particular type of the Abi method so can't type check
                this._methods[abi.name] = contractMethod;
                // We don't know a particular type of the Abi method so can't type check
                this._methods[methodName] = exactContractMethod;
                // We don't know a particular type of the Abi method so can't type check
                this._methods[methodSignature] = exactContractMethod;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAbiEventFragment"])(abi)) {
                const eventName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonInterfaceMethodToString"])(abi);
                const eventSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$events_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventSignature"])(eventName);
                const event = this._createContractEvent(abi, returnFormat);
                abi.signature = eventSignature;
                if (!(eventName in this._events) || abi.name === 'bound') {
                    // It's a private type and we don't want to expose it and no need to check
                    this._events[eventName] = event;
                }
                // It's a private type and we don't want to expose it and no need to check
                this._events[abi.name] = event;
                // It's a private type and we don't want to expose it and no need to check
                this._events[eventSignature] = event;
            }
            result = [
                ...result,
                abi
            ];
        }
        this._events.allEvents = this._createContractEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_EVENTS_ABI"], returnFormat);
        this._jsonInterface = [
            ...result
        ];
        this._errorsInterface = errorsAbi;
    }
    // eslint-disable-next-line class-methods-use-this
    _getAbiParams(abi, params) {
        var _a;
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__utils$3e$__["utils"].transformJsonDataToAbiFormat((_a = abi.inputs) !== null && _a !== void 0 ? _a : [], params);
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ContractError"](`Invalid parameters for method ${abi.name}: ${error.message}`);
        }
    }
    _createContractMethod(abiArr, errorsAbis, exact = false) {
        const abi = abiArr[abiArr.length - 1];
        return (...params)=>{
            var _a, _b, _c;
            let abiParams;
            const abis = (_b = exact ? (_a = this._overloadedMethodAbis.get(abi.name)) === null || _a === void 0 ? void 0 : _a.filter((_abi)=>_abi.signature === abi.signature) : this._overloadedMethodAbis.get(abi.name)) !== null && _b !== void 0 ? _b : [];
            let methodAbi = abis[0];
            const internalErrorsAbis = errorsAbis;
            const arrayOfAbis = abis.filter((_abi)=>{
                var _a;
                return ((_a = _abi.inputs) !== null && _a !== void 0 ? _a : []).length === params.length;
            });
            if (abis.length === 1 || arrayOfAbis.length === 0) {
                abiParams = this._getAbiParams(methodAbi, params);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate((_c = abi.inputs) !== null && _c !== void 0 ? _c : [], abiParams);
            } else {
                const errors = [];
                // all the methods that have is valid for the given inputs
                const applicableMethodAbi = [];
                for (const _abi of arrayOfAbis){
                    try {
                        abiParams = this._getAbiParams(_abi, params);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate(_abi.inputs, abiParams);
                        applicableMethodAbi.push(_abi);
                    } catch (e) {
                        errors.push(e);
                    }
                }
                if (applicableMethodAbi.length === 1) {
                    [methodAbi] = applicableMethodAbi; // take the first item that is the only item in the array
                } else if (applicableMethodAbi.length > 1) {
                    [methodAbi] = applicableMethodAbi; // take the first item in the array
                    console.warn(`Multiple methods found that is compatible with the given inputs.\n\tFound ${applicableMethodAbi.length} compatible methods: ${JSON.stringify(applicableMethodAbi.map((m)=>`${m.methodNameWithInputs} (signature: ${m.signature})`))} \n\tThe first one will be used: ${methodAbi.methodNameWithInputs}`);
                // TODO: 5.x Should throw a new error with the list of methods found.
                // Related issue: https://github.com/web3/web3.js/issues/6923
                // This is in order to provide an error message when there is more than one method found that fits the inputs.
                // To do that, replace the pervious line of code with something like the following line:
                // throw new Web3ValidatorError({ message: 'Multiple methods found',  ... list of applicable methods }));
                }
                if (errors.length === arrayOfAbis.length) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ValidatorError"](errors);
                }
            }
            const methods = {
                arguments: abiParams,
                call: (options, block)=>__awaiter(this, void 0, void 0, function*() {
                        return this._contractMethodCall(methodAbi, abiParams, internalErrorsAbis, options, block);
                    }),
                send: (options)=>this._contractMethodSend(methodAbi, abiParams, internalErrorsAbis, options),
                populateTransaction: (options, contractOptions)=>{
                    var _a, _b;
                    let modifiedContractOptions = contractOptions !== null && contractOptions !== void 0 ? contractOptions : this.options;
                    modifiedContractOptions = Object.assign(Object.assign({}, modifiedContractOptions), {
                        input: undefined,
                        from: (_b = (_a = modifiedContractOptions === null || modifiedContractOptions === void 0 ? void 0 : modifiedContractOptions.from) !== null && _a !== void 0 ? _a : this.defaultAccount) !== null && _b !== void 0 ? _b : undefined
                    });
                    const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSendTxParams"])({
                        abi,
                        params,
                        options: Object.assign(Object.assign({}, options), {
                            dataInputFill: this.config.contractDataInputFill
                        }),
                        contractOptions: modifiedContractOptions
                    });
                    // @ts-expect-error remove unnecessary field
                    if (tx.dataInputFill) {
                        // @ts-expect-error remove unnecessary field
                        delete tx.dataInputFill;
                    }
                    return tx;
                },
                estimateGas: (options_1, ...args_1)=>__awaiter(this, [
                        options_1,
                        ...args_1
                    ], void 0, function*(options, returnFormat = this.defaultReturnFormat) {
                        return this.contractMethodEstimateGas({
                            abi: methodAbi,
                            params: abiParams,
                            returnFormat,
                            options
                        });
                    }),
                encodeABI: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeMethodABI"])(methodAbi, abiParams),
                decodeData: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionCall"])(methodAbi, data),
                createAccessList: (options, block)=>__awaiter(this, void 0, void 0, function*() {
                        return this._contractMethodCreateAccessList(methodAbi, abiParams, internalErrorsAbis, options, block);
                    })
            };
            if (methodAbi.stateMutability === 'payable') {
                return methods;
            }
            return methods;
        };
    }
    _contractMethodCall(abi, params, errorsAbi, options, block) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEthTxCallParams"])({
                abi,
                params,
                options: Object.assign(Object.assign({}, options), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: Object.assign(Object.assign({}, this.options), {
                    from: (_a = this.options.from) !== null && _a !== void 0 ? _a : this.config.defaultAccount
                })
            });
            try {
                const result = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"])(this, tx, block, this.defaultReturnFormat);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$functions_api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionReturn"])(abi, result);
            } catch (error) {
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractExecutionError"]) {
                    // this will parse the error data by trying to decode the ABI error inputs according to EIP-838
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeContractErrorData"])(errorsAbi, error.cause);
                }
                throw error;
            }
        });
    }
    _contractMethodCreateAccessList(abi, params, errorsAbi, options, block) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAccessListParams"])({
                abi,
                params,
                options: Object.assign(Object.assign({}, options), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: Object.assign(Object.assign({}, this.options), {
                    from: (_a = this.options.from) !== null && _a !== void 0 ? _a : this.config.defaultAccount
                })
            });
            try {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAccessList"])(this, tx, block, this.defaultReturnFormat);
            } catch (error) {
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractExecutionError"]) {
                    // this will parse the error data by trying to decode the ABI error inputs according to EIP-838
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeContractErrorData"])(errorsAbi, error.cause);
                }
                throw error;
            }
        });
    }
    _contractMethodSend(abi, params, errorsAbi, options, contractOptions) {
        var _a, _b;
        let modifiedContractOptions = contractOptions !== null && contractOptions !== void 0 ? contractOptions : this.options;
        modifiedContractOptions = Object.assign(Object.assign({}, modifiedContractOptions), {
            input: undefined,
            from: (_b = (_a = modifiedContractOptions.from) !== null && _a !== void 0 ? _a : this.defaultAccount) !== null && _b !== void 0 ? _b : undefined
        });
        const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSendTxParams"])({
            abi,
            params,
            options: Object.assign(Object.assign({}, options), {
                dataInputFill: this.config.contractDataInputFill
            }),
            contractOptions: modifiedContractOptions
        });
        const transactionToSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(this.transactionMiddleware) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(this, tx, this.defaultReturnFormat, {
            // TODO Should make this configurable by the user
            checkRevertBeforeSending: false,
            contractAbi: this._jsonInterface
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(this, tx, this.defaultReturnFormat, {
            // TODO Should make this configurable by the user
            checkRevertBeforeSending: false,
            contractAbi: this._jsonInterface
        }, this.transactionMiddleware);
        // eslint-disable-next-line no-void
        void transactionToSend.on('error', (error)=>{
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractExecutionError"]) {
                // this will parse the error data by trying to decode the ABI error inputs according to EIP-838
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeContractErrorData"])(errorsAbi, error.cause);
            }
        });
        return transactionToSend;
    }
    contractMethodEstimateGas(_a) {
        return __awaiter(this, arguments, void 0, function*({ abi, params, returnFormat, options, contractOptions }) {
            const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEstimateGasParams"])({
                abi,
                params,
                options: Object.assign(Object.assign({}, options), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: contractOptions !== null && contractOptions !== void 0 ? contractOptions : this.options
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"])(this, tx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTags"].LATEST, returnFormat !== null && returnFormat !== void 0 ? returnFormat : this.defaultReturnFormat);
        });
    }
    // eslint-disable-next-line class-methods-use-this
    _createContractEvent(abi, returnFormat = this.defaultReturnFormat) {
        return (...params)=>{
            var _a;
            const { topics, fromBlock } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeEventABI"])(this.options, abi, params[0]);
            const sub = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract_log_subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractLogsSubscription"]({
                address: this.options.address,
                topics,
                abi,
                jsonInterface: this._jsonInterface
            }, {
                subscriptionManager: this.subscriptionManager,
                returnFormat
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(fromBlock)) {
                // emit past events when fromBlock is defined
                this.getPastEvents(abi.name, {
                    fromBlock,
                    topics
                }, returnFormat).then((logs)=>{
                    if (logs) {
                        logs.forEach((log)=>sub.emit('data', log));
                    }
                }).catch((error)=>{
                    sub.emit('error', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionError"]('Failed to get past events.', error));
                });
            }
            (_a = this.subscriptionManager) === null || _a === void 0 ? void 0 : _a.addSubscription(sub).catch((error)=>{
                sub.emit('error', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionError"]('Failed to subscribe.', error));
            });
            return sub;
        };
    }
    subscribeToContextEvents(context) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const contractThis = this;
        this.context = context;
        if (contractThis.syncWithContext) {
            context.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConfigEvent"].CONFIG_CHANGE, (event)=>{
                contractThis.setConfig({
                    [event.name]: event.newValue
                });
            });
        }
    }
} //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
 * The `web3.eth.Contract` object makes it easy to interact with smart contracts on the Ethereum blockchain.
 * When you create a new contract object you give it the JSON interface of the respective smart contract and
 * web3 will auto convert all calls into low level ABI calls over RPC for you.
 * This allows you to interact with smart contracts as if they were JavaScript objects.
 *
 * To use it standalone:
 *
 * ```ts
 * const Contract = require('web3-eth-contract');
 *
 * // set provider for all later instances to use
 * Contract.setProvider('ws://localhost:8546');
 *
 * const contract = new Contract(jsonInterface, address);
 *
 * contract.methods.somFunc().send({from: ....})
 * .on('receipt', function(){
 *    ...
 * });
 * ```
 */ /**
 * This comment _supports3_ [Markdown](https://marked.js.org/)
 */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"];
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/encoding.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract$2d$deployer$2d$method$2d$class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract-deployer-method-class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$contract_log_subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/contract_log_subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$contract$40$4$2e$7$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$contract$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-contract@4.7.2_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-contract/lib/esm/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=aa695_web3-eth-contract_lib_esm_c65dd8._.js.map