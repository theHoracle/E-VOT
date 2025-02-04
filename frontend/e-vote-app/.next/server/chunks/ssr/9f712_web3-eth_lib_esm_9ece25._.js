module.exports = {

"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/detect_transaction_type.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "defaultTransactionTypeParser": (()=>defaultTransactionTypeParser),
    "detectRawTransactionType": (()=>detectRawTransactionType),
    "detectTransactionType": (()=>detectTransactionType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/default_validator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/eth_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
;
;
;
;
// undefined is treated as null for JSON schema validator
const transactionType0x0Schema = {
    type: 'object',
    properties: {
        accessList: {
            type: 'null'
        },
        maxFeePerGas: {
            type: 'null'
        },
        maxPriorityFeePerGas: {
            type: 'null'
        }
    }
};
const transactionType0x1Schema = {
    type: 'object',
    properties: {
        maxFeePerGas: {
            type: 'null'
        },
        maxPriorityFeePerGas: {
            type: 'null'
        }
    }
};
const transactionType0x2Schema = {
    type: 'object',
    properties: {
        gasPrice: {
            type: 'null'
        }
    }
};
const validateTxTypeAndHandleErrors = (txSchema, tx, txType)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validator"].validateJSONSchema(txSchema, tx);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3ValidatorError"]) // Erroneously reported error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidPropertiesForTransactionTypeError"](error.errors, txType);
        throw error;
    }
};
const defaultTransactionTypeParser = (transaction)=>{
    var _a, _b;
    const tx = transaction;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.type)) {
        let txSchema;
        switch(tx.type){
            case '0x0':
                txSchema = transactionType0x0Schema;
                break;
            case '0x1':
                txSchema = transactionType0x1Schema;
                break;
            case '0x2':
                txSchema = transactionType0x2Schema;
                break;
            default:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                    format: 'uint'
                }, tx.type, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        }
        validateTxTypeAndHandleErrors(txSchema, tx, tx.type);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, tx.type, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.maxFeePerGas) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.maxPriorityFeePerGas)) {
        validateTxTypeAndHandleErrors(transactionType0x2Schema, tx, '0x2');
        return '0x2';
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.accessList)) {
        validateTxTypeAndHandleErrors(transactionType0x1Schema, tx, '0x1');
        return '0x1';
    }
    const givenHardfork = (_a = tx.hardfork) !== null && _a !== void 0 ? _a : (_b = tx.common) === null || _b === void 0 ? void 0 : _b.hardfork;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(givenHardfork)) {
        const hardforkIndex = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HardforksOrdered"]).indexOf(givenHardfork);
        // givenHardfork is London or later, so EIP-2718 is supported
        if (hardforkIndex >= Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HardforksOrdered"]).indexOf('london')) return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.gasPrice) ? '0x0' : '0x2';
        // givenHardfork is Berlin, tx.accessList is undefined, assume type is 0x0
        if (hardforkIndex === Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HardforksOrdered"]).indexOf('berlin')) return '0x0';
    }
    // gasprice is defined
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.gasPrice)) {
        validateTxTypeAndHandleErrors(transactionType0x0Schema, tx, '0x0');
        return '0x0';
    }
    // no transaction type can be inferred from properties, use default transaction type
    return undefined;
};
const detectTransactionType = (transaction, web3Context)=>{
    var _a;
    return ((_a = web3Context === null || web3Context === void 0 ? void 0 : web3Context.transactionTypeParser) !== null && _a !== void 0 ? _a : defaultTransactionTypeParser)(transaction);
};
const detectRawTransactionType = (transaction)=>transaction[0] > 0x7f ? '0x0' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(transaction[0]); //# sourceMappingURL=detect_transaction_type.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "SignatureObjectSchema": (()=>SignatureObjectSchema),
    "accessListItemSchema": (()=>accessListItemSchema),
    "accessListResultSchema": (()=>accessListResultSchema),
    "accessListSchema": (()=>accessListSchema),
    "accountSchema": (()=>accountSchema),
    "blockHeaderSchema": (()=>blockHeaderSchema),
    "blockSchema": (()=>blockSchema),
    "chainSchema": (()=>chainSchema),
    "customChainSchema": (()=>customChainSchema),
    "feeHistorySchema": (()=>feeHistorySchema),
    "hardforkSchema": (()=>hardforkSchema),
    "logSchema": (()=>logSchema),
    "storageProofSchema": (()=>storageProofSchema),
    "syncSchema": (()=>syncSchema),
    "transactionInfoSchema": (()=>transactionInfoSchema),
    "transactionReceiptSchema": (()=>transactionReceiptSchema),
    "transactionSchema": (()=>transactionSchema),
    "withdrawalsSchema": (()=>withdrawalsSchema)
});
const accessListItemSchema = {
    type: 'object',
    properties: {
        address: {
            format: 'address'
        },
        storageKeys: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        }
    }
};
const accessListSchema = {
    type: 'array',
    items: Object.assign({}, accessListItemSchema)
};
const accessListResultSchema = {
    type: 'object',
    properties: {
        accessList: Object.assign({}, accessListSchema),
        gasUsed: {
            type: 'string'
        }
    }
};
const chainSchema = {
    type: 'string',
    enum: [
        'goerli',
        'kovan',
        'mainnet',
        'rinkeby',
        'ropsten',
        'sepolia'
    ]
};
const hardforkSchema = {
    type: 'string',
    enum: [
        'arrowGlacier',
        'berlin',
        'byzantium',
        'chainstart',
        'constantinople',
        'dao',
        'homestead',
        'istanbul',
        'london',
        'merge',
        'muirGlacier',
        'petersburg',
        'shanghai',
        'spuriousDragon',
        'tangerineWhistle'
    ]
};
const customChainSchema = {
    type: 'object',
    properties: {
        name: {
            format: 'string'
        },
        networkId: {
            format: 'uint'
        },
        chainId: {
            format: 'uint'
        }
    }
};
const transactionSchema = {
    type: 'object',
    properties: {
        from: {
            format: 'address'
        },
        to: {
            oneOf: [
                {
                    format: 'address'
                },
                {
                    type: 'null'
                }
            ]
        },
        value: {
            format: 'uint'
        },
        gas: {
            format: 'uint'
        },
        gasPrice: {
            format: 'uint'
        },
        effectiveGasPrice: {
            format: 'uint'
        },
        type: {
            format: 'uint'
        },
        maxFeePerGas: {
            format: 'uint'
        },
        maxPriorityFeePerGas: {
            format: 'uint'
        },
        accessList: Object.assign({}, accessListSchema),
        data: {
            format: 'bytes'
        },
        input: {
            format: 'bytes'
        },
        nonce: {
            format: 'uint'
        },
        chain: Object.assign({}, chainSchema),
        hardfork: Object.assign({}, hardforkSchema),
        chainId: {
            format: 'uint'
        },
        networkId: {
            format: 'uint'
        },
        common: {
            type: 'object',
            properties: {
                customChain: Object.assign({}, customChainSchema),
                baseChain: Object.assign({}, chainSchema),
                hardfork: Object.assign({}, hardforkSchema)
            }
        },
        gasLimit: {
            format: 'uint'
        },
        v: {
            format: 'uint'
        },
        r: {
            format: 'bytes32'
        },
        s: {
            format: 'bytes32'
        }
    }
};
const transactionInfoSchema = {
    type: 'object',
    properties: Object.assign(Object.assign({}, transactionSchema.properties), {
        blockHash: {
            format: 'bytes32'
        },
        blockNumber: {
            format: 'uint'
        },
        hash: {
            format: 'bytes32'
        },
        transactionIndex: {
            format: 'uint'
        },
        from: {
            format: 'address'
        },
        to: {
            oneOf: [
                {
                    format: 'address'
                },
                {
                    type: 'null'
                }
            ]
        },
        value: {
            format: 'uint'
        },
        gas: {
            format: 'uint'
        },
        gasPrice: {
            format: 'uint'
        },
        effectiveGasPrice: {
            format: 'uint'
        },
        type: {
            format: 'uint'
        },
        maxFeePerGas: {
            format: 'uint'
        },
        maxPriorityFeePerGas: {
            format: 'uint'
        },
        accessList: Object.assign({}, accessListSchema),
        data: {
            format: 'bytes'
        },
        input: {
            format: 'bytes'
        },
        nonce: {
            format: 'uint'
        },
        gasLimit: {
            format: 'uint'
        },
        v: {
            format: 'uint'
        },
        r: {
            format: 'bytes32'
        },
        s: {
            format: 'bytes32'
        }
    })
};
const withdrawalsSchema = {
    type: 'object',
    properties: {
        index: {
            format: 'uint'
        },
        validatorIndex: {
            format: 'uint'
        },
        address: {
            format: 'address'
        },
        amount: {
            format: 'uint'
        }
    }
};
const blockSchema = {
    type: 'object',
    properties: {
        baseFeePerGas: {
            format: 'uint'
        },
        blobGasUsed: {
            format: 'uint'
        },
        difficulty: {
            format: 'uint'
        },
        excessBlobGas: {
            format: 'uint'
        },
        extraData: {
            format: 'bytes'
        },
        gasLimit: {
            format: 'uint'
        },
        gasUsed: {
            format: 'uint'
        },
        hash: {
            format: 'bytes32'
        },
        logsBloom: {
            format: 'bytes256'
        },
        miner: {
            format: 'bytes'
        },
        mixHash: {
            format: 'bytes32'
        },
        nonce: {
            format: 'uint'
        },
        number: {
            format: 'uint'
        },
        parentBeaconBlockRoot: {
            format: 'bytes32'
        },
        parentHash: {
            format: 'bytes32'
        },
        receiptsRoot: {
            format: 'bytes32'
        },
        sha3Uncles: {
            format: 'bytes32'
        },
        size: {
            format: 'uint'
        },
        stateRoot: {
            format: 'bytes32'
        },
        timestamp: {
            format: 'uint'
        },
        totalDifficulty: {
            format: 'uint'
        },
        transactions: {
            oneOf: [
                {
                    type: 'array',
                    items: Object.assign({}, transactionInfoSchema)
                },
                {
                    type: 'array',
                    items: {
                        format: 'bytes32'
                    }
                }
            ]
        },
        transactionsRoot: {
            format: 'bytes32'
        },
        uncles: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        },
        withdrawals: {
            type: 'array',
            items: Object.assign({}, withdrawalsSchema)
        },
        withdrawalsRoot: {
            format: 'bytes32'
        }
    }
};
const blockHeaderSchema = {
    type: 'object',
    properties: {
        author: {
            format: 'bytes32'
        },
        excessDataGas: {
            format: 'uint'
        },
        baseFeePerGas: {
            format: 'uint'
        },
        blobGasUsed: {
            format: 'uint'
        },
        difficulty: {
            format: 'uint'
        },
        excessBlobGas: {
            format: 'uint'
        },
        extraData: {
            format: 'bytes'
        },
        gasLimit: {
            format: 'uint'
        },
        gasUsed: {
            format: 'uint'
        },
        hash: {
            format: 'bytes32'
        },
        logsBloom: {
            format: 'bytes256'
        },
        miner: {
            format: 'bytes'
        },
        mixHash: {
            format: 'bytes32'
        },
        nonce: {
            format: 'uint'
        },
        number: {
            format: 'uint'
        },
        parentBeaconBlockRoot: {
            format: 'bytes32'
        },
        parentHash: {
            format: 'bytes32'
        },
        receiptsRoot: {
            format: 'bytes32'
        },
        sha3Uncles: {
            format: 'bytes32'
        },
        size: {
            format: 'uint'
        },
        stateRoot: {
            format: 'bytes32'
        },
        timestamp: {
            format: 'uint'
        },
        totalDifficulty: {
            format: 'uint'
        },
        transactions: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        },
        transactionsRoot: {
            format: 'bytes32'
        },
        uncles: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        },
        withdrawals: {
            type: 'array',
            items: Object.assign({}, withdrawalsSchema)
        },
        withdrawalsRoot: {
            format: 'bytes32'
        }
    }
};
const logSchema = {
    type: 'object',
    properties: {
        removed: {
            format: 'bool'
        },
        logIndex: {
            format: 'uint'
        },
        transactionIndex: {
            format: 'uint'
        },
        transactionHash: {
            format: 'bytes32'
        },
        blockHash: {
            format: 'bytes32'
        },
        blockNumber: {
            format: 'uint'
        },
        address: {
            format: 'address'
        },
        data: {
            format: 'bytes'
        },
        topics: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        }
    }
};
const syncSchema = {
    type: 'object',
    properties: {
        startingBlock: {
            format: 'string'
        },
        currentBlock: {
            format: 'string'
        },
        highestBlock: {
            format: 'string'
        },
        knownStates: {
            format: 'string'
        },
        pulledStates: {
            format: 'string'
        }
    }
};
const transactionReceiptSchema = {
    type: 'object',
    properties: {
        transactionHash: {
            format: 'bytes32'
        },
        transactionIndex: {
            format: 'uint'
        },
        blockHash: {
            format: 'bytes32'
        },
        blockNumber: {
            format: 'uint'
        },
        from: {
            format: 'address'
        },
        to: {
            format: 'address'
        },
        cumulativeGasUsed: {
            format: 'uint'
        },
        gasUsed: {
            format: 'uint'
        },
        effectiveGasPrice: {
            format: 'uint'
        },
        contractAddress: {
            format: 'address'
        },
        logs: {
            type: 'array',
            items: Object.assign({}, logSchema)
        },
        logsBloom: {
            format: 'bytes'
        },
        root: {
            format: 'bytes'
        },
        status: {
            format: 'uint'
        },
        type: {
            format: 'uint'
        }
    }
};
const SignatureObjectSchema = {
    type: 'object',
    properties: {
        messageHash: {
            format: 'bytes'
        },
        r: {
            format: 'bytes32'
        },
        s: {
            format: 'bytes32'
        },
        v: {
            format: 'bytes'
        },
        message: {
            format: 'bytes'
        },
        signature: {
            format: 'bytes'
        }
    }
};
const feeHistorySchema = {
    type: 'object',
    properties: {
        oldestBlock: {
            format: 'uint'
        },
        baseFeePerGas: {
            type: 'array',
            items: {
                format: 'uint'
            }
        },
        reward: {
            type: 'array',
            items: {
                type: 'array',
                items: {
                    format: 'uint'
                }
            }
        },
        gasUsedRatio: {
            type: 'array',
            items: {
                type: 'number'
            }
        }
    }
};
const storageProofSchema = {
    type: 'object',
    properties: {
        key: {
            format: 'bytes32'
        },
        value: {
            format: 'uint'
        },
        proof: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        }
    }
};
const accountSchema = {
    type: 'object',
    properties: {
        balance: {
            format: 'uint'
        },
        codeHash: {
            format: 'bytes32'
        },
        nonce: {
            format: 'uint'
        },
        storageHash: {
            format: 'bytes32'
        },
        accountProof: {
            type: 'array',
            items: {
                format: 'bytes32'
            }
        },
        storageProof: {
            type: 'array',
            items: Object.assign({}, storageProofSchema)
        }
    }
}; //# sourceMappingURL=schemas.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/format_transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "formatTransaction": (()=>formatTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/objects.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
;
;
;
;
;
function formatTransaction(transaction, returnFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"], options = {
    transactionSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionInfoSchema"],
    fillInputAndData: false
}) {
    var _a, _b;
    let formattedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDeep"])({}, transaction);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction === null || transaction === void 0 ? void 0 : transaction.common)) {
        formattedTransaction.common = Object.assign({}, transaction.common);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])((_a = transaction.common) === null || _a === void 0 ? void 0 : _a.customChain)) formattedTransaction.common.customChain = Object.assign({}, transaction.common.customChain);
    }
    formattedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])((_b = options.transactionSchema) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionInfoSchema"], formattedTransaction, returnFormat);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.data) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.input) && // Converting toHex is accounting for data and input being Uint8Arrays
    // since comparing Uint8Array is not as straightforward as comparing strings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(formattedTransaction.data) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(formattedTransaction.input)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionDataAndInputError"]({
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(formattedTransaction.data),
        input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(formattedTransaction.input)
    });
    if (options.fillInputAndData) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.data)) {
            formattedTransaction.input = formattedTransaction.data;
        } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.input)) {
            formattedTransaction.data = formattedTransaction.input;
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.gasLimit)) {
        formattedTransaction.gas = formattedTransaction.gasLimit;
        delete formattedTransaction.gasLimit;
    }
    return formattedTransaction;
} //# sourceMappingURL=format_transaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decode_signed_transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeSignedTransaction": (()=>decodeSignedTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$detect_transaction_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/detect_transaction_type.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/format_transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-ssr] (ecmascript)");
;
;
;
;
function decodeSignedTransaction(encodedSignedTransaction, returnFormat, options = {
    fillInputAndData: false
}) {
    return {
        raw: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, encodedSignedTransaction, returnFormat),
        tx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionFactory"].fromSerializedData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(encodedSignedTransaction)).toJSON()), {
            hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(encodedSignedTransaction))),
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$detect_transaction_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectRawTransactionType"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(encodedSignedTransaction))
        }), returnFormat, {
            fillInputAndData: options.fillInputAndData,
            transactionSchema: options.transactionSchema
        })
    };
} //# sourceMappingURL=decode_signed_transaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ALL_EVENTS": (()=>ALL_EVENTS),
    "ALL_EVENTS_ABI": (()=>ALL_EVENTS_ABI),
    "NUMBER_DATA_FORMAT": (()=>NUMBER_DATA_FORMAT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
;
const ALL_EVENTS = 'ALLEVENTS';
const ALL_EVENTS_ABI = {
    name: ALL_EVENTS,
    signature: '',
    type: 'event',
    inputs: []
};
const NUMBER_DATA_FORMAT = {
    bytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FMT_BYTES"].HEX,
    number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FMT_NUMBER"].NUMBER
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_transaction_gas_pricing.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "getTransactionGasPricing": (()=>getTransactionGasPricing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/transaction_builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
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
function getEip1559GasPricing(transaction, web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a, _b, _c, _d;
        const block = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlock"])(web3Context, web3Context.defaultBlock, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(block.baseFeePerGas)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip1559NotSupportedError"]();
        let gasPrice;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasPrice) && BigInt(block.baseFeePerGas) === BigInt(0)) {
            gasPrice = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGasPrice"])(web3Context, returnFormat);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasPrice) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(gasPrice)) {
            const convertedTransactionGasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, (_a = transaction.gasPrice) !== null && _a !== void 0 ? _a : gasPrice, returnFormat);
            return {
                maxPriorityFeePerGas: convertedTransactionGasPrice,
                maxFeePerGas: convertedTransactionGasPrice
            };
        }
        return {
            maxPriorityFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, (_b = transaction.maxPriorityFeePerGas) !== null && _b !== void 0 ? _b : web3Context.defaultMaxPriorityFeePerGas, returnFormat),
            maxFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, (_c = transaction.maxFeePerGas) !== null && _c !== void 0 ? _c : BigInt(block.baseFeePerGas) * BigInt(2) + BigInt((_d = transaction.maxPriorityFeePerGas) !== null && _d !== void 0 ? _d : web3Context.defaultMaxPriorityFeePerGas), returnFormat)
        };
    });
}
function getTransactionGasPricing(transaction, web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const transactionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionType"])(transaction, web3Context);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transactionType)) {
            if (transactionType.startsWith('-')) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedTransactionTypeError"](transactionType);
            // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2718.md#transactions
            if (Number(transactionType) < 0 || Number(transactionType) > 127) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedTransactionTypeError"](transactionType);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasPrice) && (transactionType === '0x0' || transactionType === '0x1')) return {
                gasPrice: yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGasPrice"])(web3Context, returnFormat),
                maxPriorityFeePerGas: undefined,
                maxFeePerGas: undefined
            };
            if (transactionType === '0x2') {
                return Object.assign({
                    gasPrice: undefined
                }, (yield getEip1559GasPricing(transaction, web3Context, returnFormat)));
            }
        }
        return undefined;
    });
} //# sourceMappingURL=get_transaction_gas_pricing.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/transaction_builder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "defaultTransactionBuilder": (()=>defaultTransactionBuilder),
    "getTransactionFromOrToAttr": (()=>getTransactionFromOrToAttr),
    "getTransactionNonce": (()=>getTransactionNonce),
    "getTransactionType": (()=>getTransactionType),
    "transactionBuilder": (()=>transactionBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$net$40$4$2e$1$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$net$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-net@4.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-net/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$detect_transaction_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/detect_transaction_type.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_gas_pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_transaction_gas_pricing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/numbers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$net$40$4$2e$1$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$net$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-net@4.1.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-net/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
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
const getTransactionFromOrToAttr = (attr, web3Context, transaction, privateKey)=>{
    if (transaction !== undefined && attr in transaction && transaction[attr] !== undefined) {
        if (typeof transaction[attr] === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(transaction[attr])) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            return transaction[attr];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(transaction[attr]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(transaction[attr])) {
            if (web3Context.wallet) {
                const account = web3Context.wallet.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                    format: 'uint'
                }, transaction[attr], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUMBER_DATA_FORMAT"]));
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(account)) {
                    return account.address;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalWalletNotAvailableError"]();
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalWalletNotAvailableError"]();
        } else {
            throw attr === 'from' ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTransactionWithSender"](transaction.from) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTransactionWithReceiver"](transaction.to);
        }
    }
    if (attr === 'from') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(privateKey)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateKeyToAddress"])(privateKey);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(web3Context.defaultAccount)) return web3Context.defaultAccount;
    }
    return undefined;
};
const getTransactionNonce = (web3Context_1, address_1, ...args_1)=>__awaiter(void 0, [
        web3Context_1,
        address_1,
        ...args_1
    ], void 0, function*(web3Context, address, returnFormat = web3Context.defaultReturnFormat) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(address)) {
            // TODO if (web3.eth.accounts.wallet) use address from local wallet
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnableToPopulateNonceError"]();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionCount"])(web3Context, address, web3Context.defaultBlock, returnFormat);
    });
const getTransactionType = (transaction, web3Context)=>{
    const inferredType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$detect_transaction_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectTransactionType"])(transaction, web3Context);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(inferredType)) return inferredType;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(web3Context.defaultTransactionType)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
        format: 'uint'
    }, web3Context.defaultTransactionType, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
    return undefined;
};
function defaultTransactionBuilder(options) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a, _b;
        let populatedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionSchema"], options.transaction, options.web3Context.defaultReturnFormat);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.from)) {
            populatedTransaction.from = getTransactionFromOrToAttr('from', options.web3Context, undefined, options.privateKey);
        }
        // TODO: Debug why need to typecase getTransactionNonce
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.nonce)) {
            populatedTransaction.nonce = yield getTransactionNonce(options.web3Context, populatedTransaction.from, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.value)) {
            populatedTransaction.value = '0x0';
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.data)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.input) && populatedTransaction.data !== populatedTransaction.input) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionDataAndInputError"]({
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(populatedTransaction.data),
                input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(populatedTransaction.input)
            });
            if (!populatedTransaction.data.startsWith('0x')) populatedTransaction.data = `0x${populatedTransaction.data}`;
        } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.input)) {
            if (!populatedTransaction.input.startsWith('0x')) populatedTransaction.input = `0x${populatedTransaction.input}`;
        } else {
            populatedTransaction.input = '0x';
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.common)) {
            if (options.web3Context.defaultCommon) {
                const common = options.web3Context.defaultCommon;
                const chainId = common.customChain.chainId;
                const networkId = common.customChain.networkId;
                const name = common.customChain.name;
                populatedTransaction.common = Object.assign(Object.assign({}, common), {
                    customChain: {
                        chainId,
                        networkId,
                        name
                    }
                });
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.chain)) {
                populatedTransaction.chain = options.web3Context.defaultChain;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.hardfork)) {
                populatedTransaction.hardfork = options.web3Context.defaultHardfork;
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.chainId) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])((_a = populatedTransaction.common) === null || _a === void 0 ? void 0 : _a.customChain.chainId)) {
            populatedTransaction.chainId = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(options.web3Context, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.networkId)) {
            populatedTransaction.networkId = (_b = options.web3Context.defaultNetworkId) !== null && _b !== void 0 ? _b : yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$net$40$4$2e$1$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$net$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getId"])(options.web3Context, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.gasLimit) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.gas)) {
            populatedTransaction.gasLimit = populatedTransaction.gas;
        }
        populatedTransaction.type = getTransactionType(populatedTransaction, options.web3Context);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.accessList) && (populatedTransaction.type === '0x1' || populatedTransaction.type === '0x2')) {
            populatedTransaction.accessList = [];
        }
        if (options.fillGasPrice) populatedTransaction = Object.assign(Object.assign({}, populatedTransaction), (yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_gas_pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionGasPricing"])(populatedTransaction, options.web3Context, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"])));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.gas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(populatedTransaction.gasLimit) && options.fillGasLimit) {
            const fillGasLimit = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateGas"])(options.web3Context, populatedTransaction, 'latest', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            populatedTransaction = Object.assign(Object.assign({}, populatedTransaction), {
                gas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                    format: 'uint'
                }, fillGasLimit, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"])
            });
        }
        return populatedTransaction;
    });
}
const transactionBuilder = (options)=>__awaiter(void 0, void 0, void 0, function*() {
        var _a;
        return ((_a = options.web3Context.transactionBuilder) !== null && _a !== void 0 ? _a : defaultTransactionBuilder)(Object.assign(Object.assign({}, options), {
            transaction: options.transaction
        }));
    }); //# sourceMappingURL=transaction_builder.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/reject_if_block_timeout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "rejectIfBlockTimeout": (()=>rejectIfBlockTimeout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/promise_helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
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
function resolveByPolling(web3Context, starterBlockNumber, transactionHash) {
    const pollingInterval = web3Context.transactionPollingInterval;
    const [intervalId, promiseToError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectIfConditionAtInterval"])(()=>__awaiter(this, void 0, void 0, function*() {
            let lastBlockNumber;
            try {
                lastBlockNumber = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockNumber"])(web3Context, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUMBER_DATA_FORMAT"]);
            } catch (error) {
                console.warn('An error happen while trying to get the block number', error);
                return undefined;
            }
            const numberOfBlocks = lastBlockNumber - starterBlockNumber;
            if (numberOfBlocks >= web3Context.transactionBlockTimeout) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionBlockTimeoutError"]({
                    starterBlockNumber,
                    numberOfBlocks,
                    transactionHash
                });
            }
            return undefined;
        }), pollingInterval);
    const clean = ()=>{
        clearInterval(intervalId);
    };
    return [
        promiseToError,
        {
            clean
        }
    ];
}
function resolveBySubscription(web3Context, starterBlockNumber, transactionHash) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a;
        // The following variable will stay true except if the data arrived,
        //	or if watching started after an error had occurred.
        let needToWatchLater = true;
        let subscription;
        let resourceCleaner;
        // internal helper function
        function revertToPolling(reject, previousError) {
            if (previousError) {
                console.warn('error happened at subscription. So revert to polling...', previousError);
            }
            resourceCleaner.clean();
            needToWatchLater = false;
            const [promiseToError, newResourceCleaner] = resolveByPolling(web3Context, starterBlockNumber, transactionHash);
            resourceCleaner.clean = newResourceCleaner.clean;
            promiseToError.catch((error)=>reject(error));
        }
        try {
            subscription = yield (_a = web3Context.subscriptionManager) === null || _a === void 0 ? void 0 : _a.subscribe('newHeads');
            resourceCleaner = {
                clean: ()=>{
                    var _a;
                    // Remove the subscription, if it was not removed somewhere
                    // 	else by calling, for example, subscriptionManager.clear()
                    if (subscription.id) {
                        (_a = web3Context.subscriptionManager) === null || _a === void 0 ? void 0 : _a.removeSubscription(subscription).then(()=>{
                        // Subscription ended successfully
                        }).catch(()=>{
                        // An error happened while ending subscription. But no need to take any action.
                        });
                    }
                }
            };
        } catch (error) {
            return resolveByPolling(web3Context, starterBlockNumber, transactionHash);
        }
        const promiseToError = new Promise((_, reject)=>{
            try {
                subscription.on('data', (lastBlockHeader)=>{
                    needToWatchLater = false;
                    if (!(lastBlockHeader === null || lastBlockHeader === void 0 ? void 0 : lastBlockHeader.number)) {
                        return;
                    }
                    const numberOfBlocks = Number(BigInt(lastBlockHeader.number) - BigInt(starterBlockNumber));
                    if (numberOfBlocks >= web3Context.transactionBlockTimeout) {
                        // Transaction Block Timeout is known to be reached by subscribing to new heads
                        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionBlockTimeoutError"]({
                            starterBlockNumber,
                            numberOfBlocks,
                            transactionHash
                        }));
                    }
                });
                subscription.on('error', (error)=>{
                    revertToPolling(reject, error);
                });
            } catch (error) {
                revertToPolling(reject, error);
            }
            // Fallback to polling if tx receipt didn't arrived in "blockHeaderTimeout" [10 seconds]
            setTimeout(()=>{
                if (needToWatchLater) {
                    revertToPolling(reject);
                }
            }, web3Context.blockHeaderTimeout * 1000);
        });
        return [
            promiseToError,
            resourceCleaner
        ];
    });
}
function rejectIfBlockTimeout(web3Context, transactionHash) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a, _b;
        const { provider } = web3Context.requestManager;
        let callingRes;
        const starterBlockNumber = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockNumber"])(web3Context, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUMBER_DATA_FORMAT"]);
        // TODO: once https://github.com/web3/web3.js/issues/5521 is implemented, remove checking for `enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout`
        if (((_b = (_a = provider).supportsSubscriptions) === null || _b === void 0 ? void 0 : _b.call(_a)) && web3Context.enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            callingRes = yield resolveBySubscription(web3Context, starterBlockNumber, transactionHash);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            callingRes = resolveByPolling(web3Context, starterBlockNumber, transactionHash);
        }
        return callingRes;
    });
} //# sourceMappingURL=reject_if_block_timeout.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/try_send_transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "trySendTransaction": (()=>trySendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$reject_if_block_timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/reject_if_block_timeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/promise_helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
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
function trySendTransaction(web3Context, sendTransactionFunc, transactionHash) {
    return __awaiter(this, void 0, void 0, function*() {
        const [timeoutId, rejectOnTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectIfTimeout"])(web3Context.transactionSendTimeout, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionSendTimeoutError"]({
            numberOfSeconds: web3Context.transactionSendTimeout / 1000,
            transactionHash
        }));
        const [rejectOnBlockTimeout, blockTimeoutResourceCleaner] = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$reject_if_block_timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectIfBlockTimeout"])(web3Context, transactionHash);
        try {
            // If an error happened here, do not catch it, just clear the resources before raising it to the caller function.
            return yield Promise.race([
                sendTransactionFunc(),
                rejectOnTimeout,
                rejectOnBlockTimeout
            ]);
        } finally{
            clearTimeout(timeoutId);
            blockTimeoutResourceCleaner.clean();
        }
    });
} //# sourceMappingURL=try_send_transaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/wait_for_transaction_receipt.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "waitForTransactionReceipt": (()=>waitForTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$reject_if_block_timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/reject_if_block_timeout.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/promise_helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
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
function waitForTransactionReceipt(web3Context, transactionHash, returnFormat, customGetTransactionReceipt) {
    return __awaiter(this, void 0, void 0, function*() {
        var _a;
        const pollingInterval = (_a = web3Context.transactionReceiptPollingInterval) !== null && _a !== void 0 ? _a : web3Context.transactionPollingInterval;
        const [awaitableTransactionReceipt, IntervalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pollTillDefinedAndReturnIntervalId"])(()=>__awaiter(this, void 0, void 0, function*() {
                try {
                    return (customGetTransactionReceipt !== null && customGetTransactionReceipt !== void 0 ? customGetTransactionReceipt : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionReceipt"])(web3Context, transactionHash, returnFormat);
                } catch (error) {
                    console.warn('An error happen while trying to get the transaction receipt', error);
                    return undefined;
                }
            }), pollingInterval);
        const [timeoutId, rejectOnTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectIfTimeout"])(web3Context.transactionPollingTimeout, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionPollingTimeoutError"]({
            numberOfSeconds: web3Context.transactionPollingTimeout / 1000,
            transactionHash
        }));
        const [rejectOnBlockTimeout, blockTimeoutResourceCleaner] = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$reject_if_block_timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectIfBlockTimeout"])(web3Context, transactionHash);
        try {
            // If an error happened here, do not catch it, just clear the resources before raising it to the caller function.
            return yield Promise.race([
                awaitableTransactionReceipt,
                rejectOnTimeout,
                rejectOnBlockTimeout
            ]);
        } finally{
            if (timeoutId) clearTimeout(timeoutId);
            if (IntervalId) clearInterval(IntervalId);
            blockTimeoutResourceCleaner.clean();
        }
    });
} //# sourceMappingURL=wait_for_transaction_receipt.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_by_polling.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchTransactionByPolling": (()=>watchTransactionByPolling)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/eth_rpc_methods.js [app-ssr] (ecmascript) <export * as ethRpcMethods>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
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
const watchTransactionByPolling = ({ web3Context, transactionReceipt, transactionPromiEvent, customTransactionReceiptSchema, returnFormat })=>{
    var _a;
    // Having a transactionReceipt means that the transaction has already been included
    // in at least one block, so we start with 1
    let confirmations = 1;
    const intervalId = setInterval(()=>{
        (()=>__awaiter(void 0, void 0, void 0, function*() {
                if (confirmations >= web3Context.transactionConfirmationBlocks) {
                    clearInterval(intervalId);
                    return;
                }
                const nextBlock = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBlockByNumber(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(BigInt(transactionReceipt.blockNumber) + BigInt(confirmations)), false);
                if (nextBlock === null || nextBlock === void 0 ? void 0 : nextBlock.hash) {
                    confirmations += 1;
                    transactionPromiEvent.emit('confirmation', {
                        confirmations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                            format: 'uint'
                        }, confirmations, returnFormat),
                        receipt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(customTransactionReceiptSchema !== null && customTransactionReceiptSchema !== void 0 ? customTransactionReceiptSchema : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionReceiptSchema"], transactionReceipt, returnFormat),
                        latestBlockHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                            format: 'bytes32'
                        }, nextBlock.hash, returnFormat)
                    });
                }
            }))();
    }, (_a = web3Context.transactionReceiptPollingInterval) !== null && _a !== void 0 ? _a : web3Context.transactionPollingInterval);
}; //# sourceMappingURL=watch_transaction_by_polling.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_by_subscription.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchTransactionBySubscription": (()=>watchTransactionBySubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_polling$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_by_polling.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
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
const watchTransactionBySubscription = ({ web3Context, transactionReceipt, transactionPromiEvent, customTransactionReceiptSchema, returnFormat })=>{
    // The following variable will stay true except if the data arrived,
    //	or if watching started after an error had occurred.
    let needToWatchLater = true;
    let lastCaughtBlockHash;
    setImmediate(()=>{
        var _a;
        (_a = web3Context.subscriptionManager) === null || _a === void 0 ? void 0 : _a.subscribe('newHeads').then((subscription)=>{
            subscription.on('data', (newBlockHeader)=>__awaiter(void 0, void 0, void 0, function*() {
                    var _a;
                    needToWatchLater = false;
                    if (!(newBlockHeader === null || newBlockHeader === void 0 ? void 0 : newBlockHeader.number) || // For some cases, the on-data event is fired couple times for the same block!
                    // This needs investigation but seems to be because of multiple `subscription.on('data'...)` even this should not cause that.
                    lastCaughtBlockHash === (newBlockHeader === null || newBlockHeader === void 0 ? void 0 : newBlockHeader.parentHash)) {
                        return;
                    }
                    lastCaughtBlockHash = newBlockHeader === null || newBlockHeader === void 0 ? void 0 : newBlockHeader.parentHash;
                    const confirmations = BigInt(newBlockHeader.number) - BigInt(transactionReceipt.blockNumber) + BigInt(1);
                    transactionPromiEvent.emit('confirmation', {
                        confirmations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                            format: 'uint'
                        }, confirmations, returnFormat),
                        receipt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(customTransactionReceiptSchema !== null && customTransactionReceiptSchema !== void 0 ? customTransactionReceiptSchema : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionReceiptSchema"], transactionReceipt, returnFormat),
                        latestBlockHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                            format: 'bytes32'
                        }, newBlockHeader.parentHash, returnFormat)
                    });
                    if (confirmations >= web3Context.transactionConfirmationBlocks) {
                        yield (_a = web3Context.subscriptionManager) === null || _a === void 0 ? void 0 : _a.removeSubscription(subscription);
                    }
                }));
            subscription.on('error', ()=>__awaiter(void 0, void 0, void 0, function*() {
                    var _a;
                    yield (_a = web3Context.subscriptionManager) === null || _a === void 0 ? void 0 : _a.removeSubscription(subscription);
                    needToWatchLater = false;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_polling$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchTransactionByPolling"])({
                        web3Context,
                        transactionReceipt,
                        transactionPromiEvent,
                        customTransactionReceiptSchema,
                        returnFormat
                    });
                }));
        }).catch(()=>{
            needToWatchLater = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_polling$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchTransactionByPolling"])({
                web3Context,
                transactionReceipt,
                customTransactionReceiptSchema,
                transactionPromiEvent,
                returnFormat
            });
        });
    });
    // Fallback to polling if tx receipt didn't arrived in "blockHeaderTimeout" [10 seconds]
    setTimeout(()=>{
        if (needToWatchLater) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_polling$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchTransactionByPolling"])({
                web3Context,
                transactionReceipt,
                transactionPromiEvent,
                returnFormat
            });
        }
    }, web3Context.blockHeaderTimeout * 1000);
}; //# sourceMappingURL=watch_transaction_by_subscription.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_for_confirmations.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchTransactionForConfirmations": (()=>watchTransactionForConfirmations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_polling$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_by_polling.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_subscription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_by_subscription.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function watchTransactionForConfirmations(web3Context, transactionPromiEvent, transactionReceipt, transactionHash, returnFormat, customTransactionReceiptSchema) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transactionReceipt) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transactionReceipt.blockHash)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionMissingReceiptOrBlockHashError"]({
        receipt: transactionReceipt,
        blockHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes32'
        }, transactionReceipt === null || transactionReceipt === void 0 ? void 0 : transactionReceipt.blockHash, returnFormat),
        transactionHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes32'
        }, transactionHash, returnFormat)
    });
    if (!transactionReceipt.blockNumber) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionReceiptMissingBlockNumberError"]({
        receipt: transactionReceipt
    });
    // As we have the receipt, it's the first confirmation that tx is accepted.
    transactionPromiEvent.emit('confirmation', {
        confirmations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, 1, returnFormat),
        receipt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(customTransactionReceiptSchema !== null && customTransactionReceiptSchema !== void 0 ? customTransactionReceiptSchema : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionReceiptSchema"], transactionReceipt, returnFormat),
        latestBlockHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes32'
        }, transactionReceipt.blockHash, returnFormat)
    });
    // so a subscription for newBlockHeaders can be made instead of polling
    const provider = web3Context.requestManager.provider;
    if (provider && 'supportsSubscriptions' in provider && provider.supportsSubscriptions()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_subscription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchTransactionBySubscription"])({
            web3Context,
            transactionReceipt,
            transactionPromiEvent,
            customTransactionReceiptSchema,
            returnFormat
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_by_polling$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchTransactionByPolling"])({
            web3Context,
            transactionReceipt,
            transactionPromiEvent,
            customTransactionReceiptSchema,
            returnFormat
        });
    }
} //# sourceMappingURL=watch_transaction_for_confirmations.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_revert_reason.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "getRevertReason": (()=>getRevertReason),
    "parseTransactionError": (()=>parseTransactionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/decode_contract_error_data.js [app-ssr] (ecmascript)");
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
const parseTransactionError = (error, contractAbi)=>{
    var _a, _b, _c, _d, _e;
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractExecutionError"] && error.cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip838ExecutionError"]) {
        if (contractAbi !== undefined) {
            const errorsAbi = contractAbi.filter((abi)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbiErrorFragment"])(abi));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$decode_contract_error_data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeContractErrorData"])(errorsAbi, error.cause);
            return {
                reason: error.cause.message,
                signature: (_a = error.cause.data) === null || _a === void 0 ? void 0 : _a.slice(0, 10),
                data: (_b = error.cause.data) === null || _b === void 0 ? void 0 : _b.substring(10),
                customErrorName: error.cause.errorName,
                customErrorDecodedSignature: error.cause.errorSignature,
                customErrorArguments: error.cause.errorArgs
            };
        }
        return {
            reason: error.cause.message,
            signature: (_c = error.cause.data) === null || _c === void 0 ? void 0 : _c.slice(0, 10),
            data: (_d = error.cause.data) === null || _d === void 0 ? void 0 : _d.substring(10)
        };
    }
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidResponseError"] && !Array.isArray((_e = error.cause) === null || _e === void 0 ? void 0 : _e.errors) && error.cause !== undefined) {
        return error.cause.message;
    }
    throw error;
};
function getRevertReason(web3Context_1, transaction_1, contractAbi_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, transaction, contractAbi, returnFormat = web3Context.defaultReturnFormat) {
        try {
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["call"])(web3Context, transaction, web3Context.defaultBlock, returnFormat);
            return undefined;
        } catch (error) {
            return parseTransactionError(error, contractAbi);
        }
    });
} //# sourceMappingURL=get_revert_reason.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_transaction_error.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "getTransactionError": (()=>getTransactionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_revert_reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_revert_reason.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
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
function getTransactionError(web3Context, transactionFormatted, transactionReceiptFormatted, receivedError, contractAbi, knownReason) {
    return __awaiter(this, void 0, void 0, function*() {
        let _reason = knownReason;
        if (_reason === undefined) {
            if (receivedError !== undefined) {
                _reason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_revert_reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTransactionError"])(receivedError);
            } else if (web3Context.handleRevert && transactionFormatted !== undefined) {
                _reason = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_revert_reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRevertReason"])(web3Context, transactionFormatted, contractAbi);
            }
        }
        let error;
        if (_reason === undefined) {
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertedWithoutReasonError"](transactionReceiptFormatted);
        } else if (typeof _reason === 'string') {
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertInstructionError"](_reason, undefined, transactionReceiptFormatted);
        } else if (_reason.customErrorName !== undefined && _reason.customErrorDecodedSignature !== undefined && _reason.customErrorArguments !== undefined) {
            const reasonWithCustomError = _reason;
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertWithCustomError"](reasonWithCustomError.reason, reasonWithCustomError.customErrorName, reasonWithCustomError.customErrorDecodedSignature, reasonWithCustomError.customErrorArguments, reasonWithCustomError.signature, transactionReceiptFormatted, reasonWithCustomError.data);
        } else {
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertInstructionError"](_reason.reason, _reason.signature, transactionReceiptFormatted, _reason.data);
        }
        return error;
    });
} //# sourceMappingURL=get_transaction_error.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decoding.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "decodeEventABI": (()=>decodeEventABI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$logs_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-abi@4.4.1_typescript@5.7.3_zod@3.24.1/node_modules/web3-eth-abi/lib/esm/api/logs_api.js [app-ssr] (ecmascript)");
;
;
;
;
;
const decodeEventABI = (event, data, jsonInterface, returnFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"])=>{
    var _a, _b, _c, _d, _e, _f;
    let modifiedEvent = Object.assign({}, event);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSchema"], data, returnFormat);
    // if allEvents get the right event
    if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_EVENTS"],
        'allEvents'
    ].includes(modifiedEvent.name)) {
        const matchedEvent = jsonInterface.find((j)=>j.signature === data.topics[0]);
        if (matchedEvent) {
            modifiedEvent = matchedEvent;
        } else {
            modifiedEvent = {
                anonymous: true
            };
        }
    }
    // create empty inputs if none are present (e.g. anonymous events on allEvents)
    modifiedEvent.inputs = (_b = (_a = modifiedEvent.inputs) !== null && _a !== void 0 ? _a : event.inputs) !== null && _b !== void 0 ? _b : [];
    // Handle case where an event signature shadows the current ABI with non-identical
    // arg indexing. If # of topics doesn't match, event is anon.
    if (!modifiedEvent.anonymous) {
        let indexedInputs = 0;
        ((_c = modifiedEvent.inputs) !== null && _c !== void 0 ? _c : []).forEach((input)=>{
            if (input.indexed) {
                indexedInputs += 1;
            }
        });
        if (indexedInputs > 0 && (data === null || data === void 0 ? void 0 : data.topics) && (data === null || data === void 0 ? void 0 : data.topics.length) !== indexedInputs + 1) {
            // checks if event is anonymous
            modifiedEvent = Object.assign(Object.assign({}, modifiedEvent), {
                anonymous: true,
                inputs: []
            });
        }
    }
    const argTopics = modifiedEvent.anonymous ? data.topics : ((_d = data.topics) !== null && _d !== void 0 ? _d : []).slice(1);
    return Object.assign(Object.assign({}, result), {
        returnValues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$abi$40$4$2e$4$2e$1_typescript$40$5$2e$7$2e$3_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$abi$2f$lib$2f$esm$2f$api$2f$logs_api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeLog"])([
            ...(_e = modifiedEvent.inputs) !== null && _e !== void 0 ? _e : []
        ], data.data, argTopics),
        event: modifiedEvent.name,
        signature: !modifiedEvent.anonymous && ((_f = data.topics) === null || _f === void 0 ? void 0 : _f.length) > 0 && data.topics[0] ? data.topics[0] : undefined,
        raw: {
            data: data.data,
            topics: data.topics
        }
    });
}; //# sourceMappingURL=decoding.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/send_tx_helper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SendTxHelper": (()=>SendTxHelper)
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
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_gas_pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_transaction_gas_pricing.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$try_send_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/try_send_transaction.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_for_confirmations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/watch_transaction_for_confirmations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_transaction_error.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_revert_reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/get_revert_reason.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decoding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/eth_rpc_methods.js [app-ssr] (ecmascript) <export * as ethRpcMethods>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
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
class SendTxHelper {
    constructor({ options, web3Context, promiEvent, returnFormat }){
        this.options = {
            checkRevertBeforeSending: true
        };
        this.options = options;
        this.web3Context = web3Context;
        this.promiEvent = promiEvent;
        this.returnFormat = returnFormat;
    }
    getReceiptWithEvents(data) {
        var _a, _b;
        const result = Object.assign({}, data !== null && data !== void 0 ? data : {});
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.contractAbi) && result.logs && result.logs.length > 0) {
            result.events = {};
            for (const log of result.logs){
                const event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEventABI"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_EVENTS_ABI"], log, (_b = this.options) === null || _b === void 0 ? void 0 : _b.contractAbi, this.returnFormat);
                if (event.event) {
                    result.events[event.event] = event;
                }
            }
        }
        return result;
    }
    checkRevertBeforeSending(tx) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.options.checkRevertBeforeSending !== false) {
                let formatTx = tx;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.data) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(tx.gas)) {
                    // eth.call runs into error if data isnt filled and gas is not defined, its a simple transaction so we fill it with 21000
                    formatTx = Object.assign(Object.assign({}, tx), {
                        gas: 21000
                    });
                }
                const reason = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_revert_reason$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRevertReason"])(this.web3Context, formatTx, this.options.contractAbi);
                if (reason !== undefined) {
                    throw yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(this.web3Context, tx, undefined, undefined, this.options.contractAbi, reason);
                }
            }
        });
    }
    emitSending(tx) {
        if (this.promiEvent.listenerCount('sending') > 0) {
            this.promiEvent.emit('sending', tx);
        }
    }
    populateGasPrice(_a) {
        return __awaiter(this, arguments, void 0, function*({ transactionFormatted, transaction }) {
            var _b;
            let result = transactionFormatted;
            if (!this.web3Context.config.ignoreGasPricing && !((_b = this.options) === null || _b === void 0 ? void 0 : _b.ignoreGasPricing) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transactionFormatted.gasPrice) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxPriorityFeePerGas) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxFeePerGas))) {
                result = Object.assign(Object.assign({}, transactionFormatted), (yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_gas_pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionGasPricing"])(transactionFormatted, this.web3Context, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"])));
            }
            return result;
        });
    }
    signAndSend(_a) {
        return __awaiter(this, arguments, void 0, function*({ wallet, tx }) {
            if (wallet) {
                const signedTransaction = yield wallet.signTransaction(tx);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$try_send_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trySendTransaction"])(this.web3Context, ()=>__awaiter(this, void 0, void 0, function*() {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].sendRawTransaction(this.web3Context.requestManager, signedTransaction.rawTransaction);
                    }), signedTransaction.transactionHash);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$try_send_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trySendTransaction"])(this.web3Context, ()=>__awaiter(this, void 0, void 0, function*() {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].sendTransaction(this.web3Context.requestManager, tx);
                }));
        });
    }
    emitSent(tx) {
        if (this.promiEvent.listenerCount('sent') > 0) {
            this.promiEvent.emit('sent', tx);
        }
    }
    emitTransactionHash(hash) {
        if (this.promiEvent.listenerCount('transactionHash') > 0) {
            this.promiEvent.emit('transactionHash', hash);
        }
    }
    emitReceipt(receipt) {
        if (this.promiEvent.listenerCount('receipt') > 0) {
            this.promiEvent.emit('receipt', // @ts-expect-error unknown type fix
            receipt);
        }
    }
    handleError(_a) {
        return __awaiter(this, arguments, void 0, function*({ error, tx }) {
            var _b;
            let _error = error;
            if (_error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractExecutionError"] && this.web3Context.handleRevert) {
                _error = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(this.web3Context, tx, undefined, undefined, (_b = this.options) === null || _b === void 0 ? void 0 : _b.contractAbi);
            }
            if ((_error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidResponseError"] || _error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractExecutionError"] || _error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertWithCustomError"] || _error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertedWithoutReasonError"] || _error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRevertInstructionError"] || _error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionPollingTimeoutError"]) && this.promiEvent.listenerCount('error') > 0) {
                this.promiEvent.emit('error', _error);
            }
            return _error;
        });
    }
    emitConfirmation({ receipt, transactionHash, customTransactionReceiptSchema }) {
        if (this.promiEvent.listenerCount('confirmation') > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$watch_transaction_for_confirmations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchTransactionForConfirmations"])(this.web3Context, this.promiEvent, receipt, transactionHash, this.returnFormat, customTransactionReceiptSchema);
        }
    }
    handleResolve(_a) {
        return __awaiter(this, arguments, void 0, function*({ receipt, tx }) {
            var _b, _c, _d;
            if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.transactionResolver) {
                return (_c = this.options) === null || _c === void 0 ? void 0 : _c.transactionResolver(receipt);
            }
            if (receipt.status === BigInt(0)) {
                const error = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$get_transaction_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(this.web3Context, tx, // @ts-expect-error unknown type fix
                receipt, undefined, (_d = this.options) === null || _d === void 0 ? void 0 : _d.contractAbi);
                if (this.promiEvent.listenerCount('error') > 0) {
                    this.promiEvent.emit('error', error);
                }
                throw error;
            } else {
                return receipt;
            }
        });
    }
} //# sourceMappingURL=send_tx_helper.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "call": (()=>call),
    "createAccessList": (()=>createAccessList),
    "estimateGas": (()=>estimateGas),
    "getBalance": (()=>getBalance),
    "getBlock": (()=>getBlock),
    "getBlockNumber": (()=>getBlockNumber),
    "getBlockTransactionCount": (()=>getBlockTransactionCount),
    "getBlockUncleCount": (()=>getBlockUncleCount),
    "getChainId": (()=>getChainId),
    "getCode": (()=>getCode),
    "getCoinbase": (()=>getCoinbase),
    "getFeeHistory": (()=>getFeeHistory),
    "getGasPrice": (()=>getGasPrice),
    "getHashRate": (()=>getHashRate),
    "getLogs": (()=>getLogs),
    "getMaxPriorityFeePerGas": (()=>getMaxPriorityFeePerGas),
    "getPendingTransactions": (()=>getPendingTransactions),
    "getProof": (()=>getProof),
    "getProtocolVersion": (()=>getProtocolVersion),
    "getStorageAt": (()=>getStorageAt),
    "getTransaction": (()=>getTransaction),
    "getTransactionCount": (()=>getTransactionCount),
    "getTransactionFromBlock": (()=>getTransactionFromBlock),
    "getTransactionReceipt": (()=>getTransactionReceipt),
    "getUncle": (()=>getUncle),
    "isMining": (()=>isMining),
    "isSyncing": (()=>isSyncing),
    "sendSignedTransaction": (()=>sendSignedTransaction),
    "sendTransaction": (()=>sendTransaction),
    "sign": (()=>sign),
    "signTransaction": (()=>signTransaction),
    "signTypedData": (()=>signTypedData)
});
// Disabling because returnTypes must be last param to match 1.x params
/* eslint-disable default-param-last */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decode_signed_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decode_signed_transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/transaction_builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/format_transaction.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$try_send_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/try_send_transaction.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$wait_for_transaction_receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/wait_for_transaction_receipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$send_tx_helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/send_tx_helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/eth_rpc_methods.js [app-ssr] (ecmascript) <export * as ethRpcMethods>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_promi_event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_promi_event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$signature_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/signature_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-ssr] (ecmascript)");
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
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
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
;
;
;
const getProtocolVersion = (web3Context)=>__awaiter(void 0, void 0, void 0, function*() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getProtocolVersion(web3Context.requestManager);
    });
const isSyncing = (web3Context)=>__awaiter(void 0, void 0, void 0, function*() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getSyncing(web3Context.requestManager);
    });
const getCoinbase = (web3Context)=>__awaiter(void 0, void 0, void 0, function*() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getCoinbase(web3Context.requestManager);
    });
const isMining = (web3Context)=>__awaiter(void 0, void 0, void 0, function*() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getMining(web3Context.requestManager);
    });
function getHashRate(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getHashRate(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getGasPrice(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getGasPrice(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getMaxPriorityFeePerGas(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getMaxPriorityFeePerGas(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getBlockNumber(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBlockNumber(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getBalance(web3Context_1, address_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, address, blockNumber = web3Context.defaultBlock, returnFormat) {
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBalance(web3Context.requestManager, address, blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getStorageAt(web3Context_1, address_1, storageSlot_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, address, storageSlot, blockNumber = web3Context.defaultBlock, returnFormat) {
        const storageSlotFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, storageSlot, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getStorageAt(web3Context.requestManager, address, storageSlotFormatted, blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getCode(web3Context_1, address_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, address, blockNumber = web3Context.defaultBlock, returnFormat) {
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getCode(web3Context.requestManager, address, blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getBlock(web3Context_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, block = web3Context.defaultBlock, hydrated = false, returnFormat) {
        var _a;
        let response;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(block)) {
            const blockHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes32'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBlockByHash(web3Context.requestManager, blockHashFormatted, hydrated);
        } else {
            const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(block) ? block : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBlockByNumber(web3Context.requestManager, blockNumberFormatted, hydrated);
        }
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockSchema"], response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(res)) {
            const result = Object.assign(Object.assign({}, res), {
                transactions: (_a = res.transactions) !== null && _a !== void 0 ? _a : []
            });
            return result;
        }
        return res;
    });
}
function getBlockTransactionCount(web3Context_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, block = web3Context.defaultBlock, returnFormat) {
        let response;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(block)) {
            const blockHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes32'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBlockTransactionCountByHash(web3Context.requestManager, blockHashFormatted);
        } else {
            const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(block) ? block : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getBlockTransactionCountByNumber(web3Context.requestManager, blockNumberFormatted);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getBlockUncleCount(web3Context_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, block = web3Context.defaultBlock, returnFormat) {
        let response;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(block)) {
            const blockHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes32'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getUncleCountByBlockHash(web3Context.requestManager, blockHashFormatted);
        } else {
            const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(block) ? block : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getUncleCountByBlockNumber(web3Context.requestManager, blockNumberFormatted);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getUncle(web3Context_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, block = web3Context.defaultBlock, uncleIndex, returnFormat) {
        const uncleIndexFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, uncleIndex, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        let response;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(block)) {
            const blockHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes32'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getUncleByBlockHashAndIndex(web3Context.requestManager, blockHashFormatted, uncleIndexFormatted);
        } else {
            const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(block) ? block : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getUncleByBlockNumberAndIndex(web3Context.requestManager, blockNumberFormatted, uncleIndexFormatted);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockSchema"], response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getTransaction(web3Context_1, transactionHash_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, transactionHash, returnFormat = web3Context.defaultReturnFormat) {
        const transactionHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes32'
        }, transactionHash, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getTransactionByHash(web3Context.requestManager, transactionHashFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(response) ? response : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(response, returnFormat, {
            transactionSchema: web3Context.config.customTransactionSchema,
            fillInputAndData: true
        });
    });
}
function getPendingTransactions(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getPendingTransactions(web3Context.requestManager);
        return response.map((transaction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat, {
                transactionSchema: web3Context.config.customTransactionSchema,
                fillInputAndData: true
            }));
    });
}
function getTransactionFromBlock(web3Context_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, block = web3Context.defaultBlock, transactionIndex, returnFormat) {
        const transactionIndexFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, transactionIndex, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        let response;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(block)) {
            const blockHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes32'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getTransactionByBlockHashAndIndex(web3Context.requestManager, blockHashFormatted, transactionIndexFormatted);
        } else {
            const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(block) ? block : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'uint'
            }, block, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getTransactionByBlockNumberAndIndex(web3Context.requestManager, blockNumberFormatted, transactionIndexFormatted);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(response) ? response : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat, {
            transactionSchema: web3Context.config.customTransactionSchema,
            fillInputAndData: true
        });
    });
}
function getTransactionReceipt(web3Context, transactionHash, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const transactionHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes32'
        }, transactionHash, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]);
        let response;
        try {
            response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getTransactionReceipt(web3Context.requestManager, transactionHashFormatted);
        } catch (error) {
            // geth indexing error, we poll until transactions stopped indexing
            if (typeof error === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(error) && 'message' in error && error.message === 'transaction indexing is in progress') {
                console.warn('Transaction indexing is in progress.');
            } else {
                throw error;
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(response) ? response : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionReceiptSchema"], response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getTransactionCount(web3Context_1, address_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, address, blockNumber = web3Context.defaultBlock, returnFormat) {
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getTransactionCount(web3Context.requestManager, address, blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function sendTransaction(web3Context, transactionObj, returnFormat, options = {
    checkRevertBeforeSending: true
}, transactionMiddleware) {
    const promiEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_promi_event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3PromiEvent"]((resolve, reject)=>{
        setImmediate(()=>{
            (()=>__awaiter(this, void 0, void 0, function*() {
                    const sendTxHelper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$send_tx_helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SendTxHelper"]({
                        web3Context,
                        promiEvent,
                        options,
                        returnFormat
                    });
                    let transaction = Object.assign({}, transactionObj);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transactionMiddleware)) {
                        transaction = yield transactionMiddleware.processTransaction(transaction);
                    }
                    let transactionFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(Object.assign(Object.assign({}, transaction), {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionFromOrToAttr"])('from', web3Context, transaction),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionFromOrToAttr"])('to', web3Context, transaction)
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
                        transactionSchema: web3Context.config.customTransactionSchema
                    });
                    try {
                        transactionFormatted = yield sendTxHelper.populateGasPrice({
                            transaction,
                            transactionFormatted
                        });
                        yield sendTxHelper.checkRevertBeforeSending(transactionFormatted);
                        sendTxHelper.emitSending(transactionFormatted);
                        let wallet;
                        if (web3Context.wallet && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transactionFormatted.from)) {
                            wallet = web3Context.wallet.get(transactionFormatted.from);
                        }
                        const transactionHash = yield sendTxHelper.signAndSend({
                            wallet,
                            tx: transactionFormatted
                        });
                        const transactionHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                            format: 'bytes32'
                        }, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
                        sendTxHelper.emitSent(transactionFormatted);
                        sendTxHelper.emitTransactionHash(transactionHashFormatted);
                        const transactionReceipt = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$wait_for_transaction_receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(web3Context, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
                        const transactionReceiptFormatted = sendTxHelper.getReceiptWithEvents((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionReceiptSchema"], transactionReceipt, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat));
                        sendTxHelper.emitReceipt(transactionReceiptFormatted);
                        resolve((yield sendTxHelper.handleResolve({
                            receipt: transactionReceiptFormatted,
                            tx: transactionFormatted
                        })));
                        sendTxHelper.emitConfirmation({
                            receipt: transactionReceiptFormatted,
                            transactionHash
                        });
                    } catch (error) {
                        reject((yield sendTxHelper.handleError({
                            error,
                            tx: transactionFormatted
                        })));
                    }
                }))();
        });
    });
    return promiEvent;
}
function sendSignedTransaction(web3Context, signedTransaction, returnFormat, options = {
    checkRevertBeforeSending: true
}) {
    // TODO - Promise returned in function argument where a void return was expected
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const promiEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_promi_event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3PromiEvent"]((resolve, reject)=>{
        setImmediate(()=>{
            (()=>__awaiter(this, void 0, void 0, function*() {
                    const sendTxHelper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$send_tx_helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SendTxHelper"]({
                        web3Context,
                        promiEvent,
                        options,
                        returnFormat
                    });
                    // Formatting signedTransaction to be send to RPC endpoint
                    const signedTransactionFormattedHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                        format: 'bytes'
                    }, signedTransaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
                    const unSerializedTransaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionFactory"].fromSerializedData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToUint8Array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(signedTransactionFormattedHex)));
                    const unSerializedTransactionWithFrom = Object.assign(Object.assign({}, unSerializedTransaction.toJSON()), {
                        // Some providers will default `from` to address(0) causing the error
                        // reported from `eth_call` to not be the reason the user's tx failed
                        // e.g. `eth_call` will return an Out of Gas error for a failed
                        // smart contract execution contract, because the sender, address(0),
                        // has no balance to pay for the gas of the transaction execution
                        from: unSerializedTransaction.getSenderAddress().toString()
                    });
                    try {
                        const { v, r, s } = unSerializedTransactionWithFrom, txWithoutSigParams = __rest(unSerializedTransactionWithFrom, [
                            "v",
                            "r",
                            "s"
                        ]);
                        yield sendTxHelper.checkRevertBeforeSending(txWithoutSigParams);
                        sendTxHelper.emitSending(signedTransactionFormattedHex);
                        const transactionHash = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$try_send_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trySendTransaction"])(web3Context, ()=>__awaiter(this, void 0, void 0, function*() {
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].sendRawTransaction(web3Context.requestManager, signedTransactionFormattedHex);
                            }));
                        sendTxHelper.emitSent(signedTransactionFormattedHex);
                        const transactionHashFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                            format: 'bytes32'
                        }, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
                        sendTxHelper.emitTransactionHash(transactionHashFormatted);
                        const transactionReceipt = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$wait_for_transaction_receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(web3Context, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
                        const transactionReceiptFormatted = sendTxHelper.getReceiptWithEvents((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionReceiptSchema"], transactionReceipt, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat));
                        sendTxHelper.emitReceipt(transactionReceiptFormatted);
                        resolve((yield sendTxHelper.handleResolve({
                            receipt: transactionReceiptFormatted,
                            tx: unSerializedTransactionWithFrom
                        })));
                        sendTxHelper.emitConfirmation({
                            receipt: transactionReceiptFormatted,
                            transactionHash
                        });
                    } catch (error) {
                        reject((yield sendTxHelper.handleError({
                            error,
                            tx: unSerializedTransactionWithFrom
                        })));
                    }
                }))();
        });
    });
    return promiEvent;
}
function sign(web3Context_1, message_1, addressOrIndex_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, message, addressOrIndex, returnFormat = web3Context.defaultReturnFormat) {
        var _a;
        const messageFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]);
        if ((_a = web3Context.wallet) === null || _a === void 0 ? void 0 : _a.get(addressOrIndex)) {
            const wallet = web3Context.wallet.get(addressOrIndex);
            const signed = wallet.sign(messageFormatted);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignatureObjectSchema"], signed, returnFormat);
        }
        if (typeof addressOrIndex === 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$signature_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignatureError"](message, 'RPC method "eth_sign" does not support index signatures');
        }
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].sign(web3Context.requestManager, addressOrIndex, messageFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, response, returnFormat);
    });
}
function signTransaction(web3Context_1, transaction_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, transaction, returnFormat = web3Context.defaultReturnFormat) {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].signTransaction(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
            transactionSchema: web3Context.config.customTransactionSchema
        }));
        // Some clients only return the encoded signed transaction (e.g. Ganache)
        // while clients such as Geth return the desired SignedTransactionInfoAPI object
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(response) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decode_signed_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeSignedTransaction"])(response, returnFormat, {
            fillInputAndData: true
        }) : {
            raw: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes'
            }, response.raw, returnFormat),
            tx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(response.tx, returnFormat, {
                transactionSchema: web3Context.config.customTransactionSchema,
                fillInputAndData: true
            })
        };
    });
}
function call(web3Context_1, transaction_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, transaction, blockNumber = web3Context.defaultBlock, returnFormat = web3Context.defaultReturnFormat) {
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].call(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
            transactionSchema: web3Context.config.customTransactionSchema
        }), blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, response, returnFormat);
    });
}
function estimateGas(web3Context_1, transaction_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, transaction, blockNumber = web3Context.defaultBlock, returnFormat) {
        const transactionFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
            transactionSchema: web3Context.config.customTransactionSchema
        });
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].estimateGas(web3Context.requestManager, transactionFormatted, blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getLogs(web3Context, filter, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        // format type bigint or number toBlock and fromBlock to hexstring.
        let { toBlock, fromBlock } = filter;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(toBlock)) {
            if (typeof toBlock === 'number' || typeof toBlock === 'bigint') {
                toBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock);
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(fromBlock)) {
            if (typeof fromBlock === 'number' || typeof fromBlock === 'bigint') {
                fromBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock);
            }
        }
        const formattedFilter = Object.assign(Object.assign({}, filter), {
            fromBlock,
            toBlock
        });
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getLogs(web3Context.requestManager, formattedFilter);
        const result = response.map((res)=>{
            if (typeof res === 'string') {
                return res;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSchema"], res, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
        });
        return result;
    });
}
function getChainId(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getChainId(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, // Response is number in hex formatted string
        response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getProof(web3Context_1, address_1, storageKeys_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, address, storageKeys, blockNumber = web3Context.defaultBlock, returnFormat) {
        const storageKeysFormatted = storageKeys.map((storageKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
                format: 'bytes'
            }, storageKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]));
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getProof(web3Context.requestManager, address, storageKeysFormatted, blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accountSchema"], response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function getFeeHistory(web3Context_1, blockCount_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, blockCount, newestBlock = web3Context.defaultBlock, rewardPercentiles, returnFormat) {
        const blockCountFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockCount, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const newestBlockFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(newestBlock) ? newestBlock : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, newestBlock, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const rewardPercentilesFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            type: 'array',
            items: {
                format: 'uint'
            }
        }, rewardPercentiles, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUMBER_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getFeeHistory(web3Context.requestManager, blockCountFormatted, newestBlockFormatted, rewardPercentilesFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["feeHistorySchema"], response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function createAccessList(web3Context_1, transaction_1) {
    return __awaiter(this, arguments, void 0, function*(web3Context, transaction, blockNumber = web3Context.defaultBlock, returnFormat) {
        const blockNumberFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber) ? blockNumber : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"]);
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].createAccessList(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
            transactionSchema: web3Context.config.customTransactionSchema
        }), blockNumberFormatted);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accessListResultSchema"], response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function signTypedData(web3Context, address, typedData, useLegacy, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].signTypedData(web3Context.requestManager, address, typedData, useLegacy);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'bytes'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
} //# sourceMappingURL=rpc_method_wrappers.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/filtering_rpc_method_wrappers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "createNewBlockFilter": (()=>createNewBlockFilter),
    "createNewFilter": (()=>createNewFilter),
    "createNewPendingTransactionFilter": (()=>createNewPendingTransactionFilter),
    "getFilterChanges": (()=>getFilterChanges),
    "getFilterLogs": (()=>getFilterLogs),
    "uninstallFilter": (()=>uninstallFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/eth_rpc_methods.js [app-ssr] (ecmascript) <export * as ethRpcMethods>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
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
function createNewPendingTransactionFilter(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].newPendingTransactionFilter(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function createNewFilter(web3Context, filter, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        // format type bigint or number toBlock and fromBlock to hexstring.
        let { toBlock, fromBlock } = filter;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(toBlock)) {
            if (typeof toBlock === 'number' || typeof toBlock === 'bigint') {
                toBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock);
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(fromBlock)) {
            if (typeof fromBlock === 'number' || typeof fromBlock === 'bigint') {
                fromBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock);
            }
        }
        const formattedFilter = Object.assign(Object.assign({}, filter), {
            fromBlock,
            toBlock
        });
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].newFilter(web3Context.requestManager, formattedFilter);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function createNewBlockFilter(web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].newBlockFilter(web3Context.requestManager);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'uint'
        }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
}
function uninstallFilter(web3Context, filterIdentifier) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].uninstallFilter(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(filterIdentifier));
        return response;
    });
}
function getFilterChanges(web3Context, filterIdentifier, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getFilterChanges(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(filterIdentifier));
        const result = response.map((res)=>{
            if (typeof res === 'string') {
                return res;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSchema"], res, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
        });
        return result;
    });
}
function getFilterLogs(web3Context, filterIdentifier, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getFilterLogs(web3Context.requestManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(filterIdentifier));
        const result = response.map((res)=>{
            if (typeof res === 'string') {
                return res;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSchema"], res, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
        });
        return result;
    });
} //# sourceMappingURL=filtering_rpc_method_wrappers.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_subscriptions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable-next-line max-classes-per-file */ __turbopack_esm__({
    "LogsSubscription": (()=>LogsSubscription),
    "NewHeadsSubscription": (()=>NewHeadsSubscription),
    "NewPendingTransactionsSubscription": (()=>NewPendingTransactionsSubscription),
    "SyncingSubscription": (()=>SyncingSubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/formatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscriptions.js [app-ssr] (ecmascript)");
;
;
;
class LogsSubscription extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Subscription"] {
    _buildSubscriptionParams() {
        return [
            'logs',
            this.args
        ];
    }
    formatSubscriptionResult(data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSchema"], data, super.returnFormat);
    }
}
class NewPendingTransactionsSubscription extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Subscription"] {
    // eslint-disable-next-line
    _buildSubscriptionParams() {
        return [
            'newPendingTransactions'
        ];
    }
    formatSubscriptionResult(data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])({
            format: 'string'
        }, data, super.returnFormat);
    }
}
class NewHeadsSubscription extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Subscription"] {
    // eslint-disable-next-line
    _buildSubscriptionParams() {
        return [
            'newHeads'
        ];
    }
    formatSubscriptionResult(data) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockHeaderSchema"], data, super.returnFormat);
    }
}
class SyncingSubscription extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Subscription"] {
    // eslint-disable-next-line
    _buildSubscriptionParams() {
        return [
            'syncing'
        ];
    }
    _processSubscriptionResult(data) {
        if (typeof data === 'boolean') {
            this.emit('changed', data);
        } else {
            const mappedData = Object.fromEntries(Object.entries((data === null || data === void 0 ? void 0 : data.status) || data).map(([key, value])=>[
                    key.charAt(0).toLowerCase() + key.substring(1),
                    value
                ]));
            this.emit('changed', data.syncing);
            this.emit('data', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncSchema"], mappedData, super.returnFormat));
        }
    }
} //# sourceMappingURL=web3_subscriptions.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_eth.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3Eth": (()=>Web3Eth),
    "registeredSubscriptions": (()=>registeredSubscriptions)
});
// Disabling because returnTypes must be last param to match 1.x params
/* eslint-disable default-param-last */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/filtering_rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_subscriptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-rpc-methods@1.3.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-rpc-methods/lib/esm/eth_rpc_methods.js [app-ssr] (ecmascript) <export * as ethRpcMethods>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_context.js [app-ssr] (ecmascript)");
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
const registeredSubscriptions = {
    logs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsSubscription"],
    newPendingTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewPendingTransactionsSubscription"],
    newHeads: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewHeadsSubscription"],
    syncing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SyncingSubscription"],
    pendingTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewPendingTransactionsSubscription"],
    newBlockHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewHeadsSubscription"]
};
class Web3Eth extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Context"] {
    constructor(// eslint-disable-next-line  @typescript-eslint/no-explicit-any
    providerOrContext){
        if (typeof providerOrContext === 'string' || // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSupportedProvider"])(providerOrContext)) {
            // @ts-expect-error disable the error: "A 'super' call must be a root-level statement within a constructor of a derived class that contains initialized properties, parameter properties, or private identifiers."
            super({
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                provider: providerOrContext,
                registeredSubscriptions
            });
            return;
        }
        if (providerOrContext.registeredSubscriptions) {
            super(providerOrContext);
            return;
        }
        super(Object.assign(Object.assign({}, providerOrContext), {
            registeredSubscriptions
        }));
        // an alias for calculateFeeData
        // eslint-disable-next-line
        this.getFeeData = this.calculateFeeData;
    }
    setTransactionMiddleware(transactionMiddleware) {
        this.transactionMiddleware = transactionMiddleware;
    }
    getTransactionMiddleware() {
        return this.transactionMiddleware;
    }
    /**
     * @returns Returns the ethereum protocol version of the node.
     *
     * ```ts
     * web3.eth.getProtocolVersion().then(console.log);
     * > "63"
     * ```
     */ getProtocolVersion() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getProtocolVersion(this.requestManager);
        });
    }
    // TODO Add returnFormat parameter
    /**
     * Checks if the node is currently syncing.
     *
     * @returns Either a {@link SyncingStatusAPI}, or `false`.
     *
     * ```ts
     * web3.eth.isSyncing().then(console.log);
     * > {
     *     startingBlock: 100,
     *     currentBlock: 312,
     *     highestBlock: 512,
     *     knownStates: 234566,
     *     pulledStates: 123455
     * }
     * ```
     */ isSyncing() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getSyncing(this.requestManager);
        });
    }
    // TODO consider adding returnFormat parameter (to format address as bytes)
    /**
     * @returns Returns the coinbase address to which mining rewards will go.
     *
     * ```ts
     * web3.eth.getCoinbase().then(console.log);
     * > "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
     * ```
     */ getCoinbase() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getCoinbase(this.requestManager);
        });
    }
    /**
     * Checks whether the node is mining or not.
     *
     * @returns `true` if the node is mining, otherwise `false`.
     *
     * ```ts
     * web3.eth.isMining().then(console.log);
     * > true
     * ```
     */ isMining() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getMining(this.requestManager);
        });
    }
    /**
     * @deprecated Will be removed in the future, please use {@link Web3Eth.getHashRate} method instead.
     *
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The number of hashes per second that the node is mining with.
     *
     * ```ts
     * web3.eth.getHashrate().then(console.log);
     * > 493736n
     *
     * web3.eth.getHashrate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x788a8"
     * ```
     */ getHashrate(returnFormat) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            if (returnFormat === void 0) {
                returnFormat = (_a = this.defaultReturnFormat) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"];
            }
            return this.getHashRate(returnFormat);
        });
    }
    /**
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The number of hashes per second that the node is mining with.
     *
     * ```ts
     * web3.eth.getHashRate().then(console.log);
     * > 493736n
     *
     * web3.eth.getHashRate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x788a8"
     * ```
     */ getHashRate() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getHashRate(this, returnFormat);
        });
    }
    /**
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The gas price determined by the last few blocks median gas price.
     *
     * ```ts
     * web3.eth.getGasPrice().then(console.log);
     * > 20000000000n
     *
     * web3.eth.getGasPrice({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x4a817c800"
     * ```
     */ getGasPrice() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getGasPrice(this, returnFormat);
        });
    }
    /**
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns the current maxPriorityFeePerGas per gas in wei.
     *
     * ```ts
     * web3.eth.getMaxPriorityFeePerGas().then(console.log);
     * > 20000000000n
     *
     * web3.eth.getMaxPriorityFeePerGas({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x4a817c800"
     * ```
     */ getMaxPriorityFeePerGas() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getMaxPriorityFeePerGas(this, returnFormat);
        });
    }
    /**
     * Calculates the current Fee Data.
     * If the node supports EIP-1559, then `baseFeePerGas` and `maxPriorityFeePerGas` will be returned along with the calculated `maxFeePerGas` value.
     * `maxFeePerGas` is calculated as `baseFeePerGas` * `baseFeePerGasFactor` + `maxPriorityFeePerGas`.
     * If the node does not support EIP-1559, then the `gasPrice` will be returned and the other values will be undefined.
     *
     * @param baseFeePerGasFactor (optional) The factor to multiply the `baseFeePerGas` with when calculating `maxFeePerGas`, if the node supports EIP-1559. This can be a `bigint` for precise calculation or a `number` to support decimals. The default value is 2 (BigInt).
     * If a `number` is provided, it will be converted to `bigint` with three decimal precision.
     * @param alternativeMaxPriorityFeePerGas (optional) The alternative `maxPriorityFeePerGas` to use when calculating `maxFeePerGas`, if the node supports EIP-1559 but does not support the method `eth_maxPriorityFeePerGas`. The default value is 1 gwei.
     * @returns The current fee data.
     *
     * @example
     * web3.eth.calculateFeeData().then(console.log);
     * > {
     *     gasPrice: 20000000000n,
     *     maxFeePerGas: 60000000000n,
     *     maxPriorityFeePerGas: 20000000000n,
     *     baseFeePerGas: 20000000000n
     * }
     *
     * @example
     * // Using a `bigint` for baseFeePerGasFactor
     * web3.eth.calculateFeeData(1n).then(console.log);
     * > {
     *     gasPrice: 20000000000n,
     *     maxFeePerGas: 40000000000n,
     *     maxPriorityFeePerGas: 20000000000n,
     *     baseFeePerGas: 20000000000n
     * }
     *
     * @example
     * // Using a `number` for baseFeePerGasFactor (with decimals)
     * web3.eth.calculateFeeData(1.5).then(console.log);
     * > {
     *     gasPrice: 20000000000n,
     *     maxFeePerGas: 50000000000n,  // baseFeePerGasFactor is converted to BigInt(1.500)
     *     maxPriorityFeePerGas: 20000000000n,
     *     baseFeePerGas: 20000000000n
     * }
     *
     * @example
     * web3.eth.calculateFeeData(3n).then(console.log);
     * > {
     *     gasPrice: 20000000000n,
     *     maxFeePerGas: 80000000000n,
     *     maxPriorityFeePerGas: 20000000000n,
     *     baseFeePerGas: 20000000000n
     * }
     */ calculateFeeData() {
        return __awaiter(this, arguments, void 0, function*(baseFeePerGasFactor = BigInt(2), alternativeMaxPriorityFeePerGas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ethUnitMap"].Gwei) {
            var _a;
            const block = yield this.getBlock(undefined, false);
            const baseFeePerGas = (_a = block === null || block === void 0 ? void 0 : block.baseFeePerGas) !== null && _a !== void 0 ? _a : undefined; // use undefined if it was null
            let gasPrice;
            try {
                gasPrice = yield this.getGasPrice();
            } catch (error) {
            // do nothing
            }
            let maxPriorityFeePerGas;
            try {
                maxPriorityFeePerGas = yield this.getMaxPriorityFeePerGas();
            } catch (error) {
            // do nothing
            }
            let maxFeePerGas;
            // if the `block.baseFeePerGas` is available, then EIP-1559 is supported
            // and we can calculate the `maxFeePerGas` from the `block.baseFeePerGas`
            if (baseFeePerGas) {
                // tip the miner with alternativeMaxPriorityFeePerGas, if no value available from getMaxPriorityFeePerGas
                maxPriorityFeePerGas = maxPriorityFeePerGas !== null && maxPriorityFeePerGas !== void 0 ? maxPriorityFeePerGas : alternativeMaxPriorityFeePerGas;
                // basically maxFeePerGas = (baseFeePerGas +- 12.5%) + maxPriorityFeePerGas
                // and we multiply the `baseFeePerGas` by `baseFeePerGasFactor`, to allow
                // trying to include the transaction in the next few blocks even if the
                // baseFeePerGas is increasing fast
                let baseFeeMultiplier;
                if (typeof baseFeePerGasFactor === 'number') {
                    // Convert number to bigint with three decimal places
                    baseFeeMultiplier = BigInt(Math.floor(baseFeePerGasFactor * 1000)) / BigInt(1000);
                } else {
                    // It's already a BigInt, so just use it as-is
                    baseFeeMultiplier = baseFeePerGasFactor;
                }
                maxFeePerGas = baseFeePerGas * baseFeeMultiplier + maxPriorityFeePerGas;
            }
            return {
                gasPrice,
                maxFeePerGas,
                maxPriorityFeePerGas,
                baseFeePerGas
            };
        });
    }
    /**
     * @returns A list of accounts the node controls (addresses are checksummed).
     *
     * ```ts
     * web3.eth.getAccounts().then(console.log);
     * > ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
     * ```
     */ getAccounts() {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            const hexAddresses = (_a = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getAccounts(this.requestManager)) !== null && _a !== void 0 ? _a : [];
            return hexAddresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(address));
        });
    }
    /**
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The current block number.
     *
     * ```ts
     * web3.eth.getBlockNumber().then(console.log);
     * > 2744n
     *
     * web3.eth.getBlockNumber({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0xab8"
     * ```
     */ getBlockNumber() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getBlockNumber(this, returnFormat);
        });
    }
    /**
     * Get the balance of an address at a given block.
     *
     * @param address The address to get the balance of.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the balance query.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The current balance for the given address in `wei`.
     *
     * ```ts
     * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
     * > 1000000000000n
     *
     * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
     * > "0xe8d4a51000"
     * ```
     */ getBalance(address_1) {
        return __awaiter(this, arguments, void 0, function*(address, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getBalance(this, address, blockNumber, returnFormat);
        });
    }
    /**
     * Get the storage at a specific position of an address.
     *
     * @param address The address to get the storage from.
     * @param storageSlot The index position of the storage.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the storage query.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The value in storage at the given position.
     *
     * ```ts
     * web3.eth.getStorageAt("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234", 0).then(console.log);
     * > "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
     *
     * web3.eth.getStorageAt(
     *      "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234",
     *      0,
     *      undefined,
     *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
     * ).then(console.log);
     * > Uint8Array(31) [
     *       3, 52,  86, 115,  33,  35, 255, 255,
     *       35, 66,  52,  45, 209,  35,  66,  67,
     *       67, 36,  35,  66,  52, 253,  35,  79,
     *       210, 63, 212, 242,  61,  66,  52
     *    ]
     * ```
     */ getStorageAt(address_1, storageSlot_1) {
        return __awaiter(this, arguments, void 0, function*(address, storageSlot, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getStorageAt(this, address, storageSlot, blockNumber, returnFormat);
        });
    }
    /**
     * Get the code at a specific address.
     *
     * @param address The address to get the code from.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the code query.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The [data](https://ethereum.org/en/developers/docs/transactions/#the-data-field) at the provided `address`.
     *
     * ```ts
     * web3.eth.getCode("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234").then(console.log);
     * > "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
     *
     * web3.eth.getCode(
     *      "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
     *      undefined,
     *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
     * ).then(console.log);
     * > Uint8Array(50) [
     *   96,  1,  96,   0, 128, 53, 129, 26, 129, 129, 129,
     *   20, 96,  18,  87, 131,  1,   0, 91,  96,  27,  96,
     *   1, 53,  96,  37,  86, 91, 128, 96,   0,  82,  96,
     *   32, 96,   0, 242,  91, 96,   0, 96,   7, 130,   2,
     *   144, 80, 145, 144,  80, 86
     * ]
     * ```
     */ getCode(address_1) {
        return __awaiter(this, arguments, void 0, function*(address, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getCode(this, address, blockNumber, returnFormat);
        });
    }
    /**
     * Retrieves a {@link Block} matching the provided block number, block hash or block tag.
     *
     * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
     * @param hydrated If specified `true`, the returned block will contain all transactions as objects. If `false` it will only contain transaction hashes.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted (does not format transaction objects or hashes).
     * @returns A {@link Block} object matching the provided block number or block hash.
     *
     * ```ts
     * web3.eth.getBlock(0).then(console.log);
     * > {
     *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
     *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
     *    miner: '0x0000000000000000000000000000000000000000',
     *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
     *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *    difficulty: 1n,
     *    number: 0n,
     *    gasLimit: 30000000n,
     *    gasUsed: 0n,
     *    timestamp: 1658281638n,
     *    extraData: '0x',
     *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    nonce: 0n,
     *    totalDifficulty: 1n,
     *    baseFeePerGas: 1000000000n,
     *    size: 514n,
     *    transactions: [],
     *    uncles: []
     *  }
     *
     * web3.eth.getBlock(
     *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
     *      false,
     *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > {
     *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
     *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
     *    miner: '0x0000000000000000000000000000000000000000',
     *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
     *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *    difficulty: 1,
     *    number: 0,
     *    gasLimit: 30000000,
     *    gasUsed: 0,
     *    timestamp: 1658281638,
     *    extraData: '0x',
     *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    nonce: 0,
     *    totalDifficulty: 1,
     *    baseFeePerGas: 1000000000,
     *    size: 514,
     *    transactions: [],
     *    uncles: []
     *  }
     * ```
     */ getBlock() {
        return __awaiter(this, arguments, void 0, function*(block = this.defaultBlock, hydrated = false, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getBlock(this, block, hydrated, returnFormat);
        });
    }
    /**
     * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The number of transactions in the provided block.
     *
     * ```ts
     * web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
     * > 1n
     *
     * web3.eth.getBlockTransactionCount(
     *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > 1
     * ```
     */ getBlockTransactionCount() {
        return __awaiter(this, arguments, void 0, function*(block = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getBlockTransactionCount(this, block, returnFormat);
        });
    }
    /**
     * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The number of [uncles](https://ethereum.org/en/glossary/#ommer) in the provided block.
     *
     * ```ts
     * web3.eth.getBlockUncleCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
     * > 1n
     *
     * web3.eth.getBlockUncleCount(
     *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > 1
     * ```
     */ getBlockUncleCount() {
        return __awaiter(this, arguments, void 0, function*(block = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getBlockUncleCount(this, block, returnFormat);
        });
    }
    /**
     *
     * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
     * @param uncleIndex The index position of the uncle.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns A blocks [uncle](https://ethereum.org/en/glossary/#ommer) by a given uncle index position.
     *
     * ```ts
     * web3.eth.getUncle(0, 1).then(console.log);
     * > {
     *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
     *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
     *    miner: '0x0000000000000000000000000000000000000000',
     *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
     *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *    difficulty: 1n,
     *    number: 0n,
     *    gasLimit: 30000000n,
     *    gasUsed: 0n,
     *    timestamp: 1658281638n,
     *    extraData: '0x',
     *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    nonce: 0n,
     *    totalDifficulty: 1n,
     *    baseFeePerGas: 1000000000n,
     *    size: 514n,
     *    transactions: [],
     *    uncles: []
     *  }
     *
     * web3.eth.getUncle(
     *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
     *      1,
     *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > {
     *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
     *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
     *    miner: '0x0000000000000000000000000000000000000000',
     *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
     *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
     *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *    difficulty: 1,
     *    number: 0,
     *    gasLimit: 30000000,
     *    gasUsed: 0,
     *    timestamp: 1658281638,
     *    extraData: '0x',
     *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *    nonce: 0,
     *    totalDifficulty: 1,
     *    baseFeePerGas: 1000000000,
     *    size: 514,
     *    transactions: [],
     *    uncles: []
     *  }
     * ```
     */ getUncle() {
        return __awaiter(this, arguments, void 0, function*(block = this.defaultBlock, uncleIndex, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getUncle(this, block, uncleIndex, returnFormat);
        });
    }
    /**
     * @param transactionHash The hash of the desired transaction.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The desired transaction object.
     *
     * ```ts
     * web3.eth.getTransaction('0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc').then(console.log);
     * {
     *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
     *    type: 0n,
     *    nonce: 0n,
     *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
     *    blockNumber: 1n,
     *    transactionIndex: 0n,
     *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *    value: 1n,
     *    gas: 90000n,
     *    gasPrice: 2000000000n,
     *    input: '0x',
     *    v: 2709n,
     *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
     *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     *  }
     *
     * web3.eth.getTransaction(
     *     web3.utils.hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * {
     *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
     *    type: 0,
     *    nonce: 0,
     *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
     *    blockNumber: 1,
     *    transactionIndex: 0,
     *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *    value: 1,
     *    gas: 90000,
     *    gasPrice: 2000000000,
     *    input: '0x',
     *    v: 2709,
     *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
     *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     *  }
     * ```
     */ getTransaction(transactionHash_1) {
        return __awaiter(this, arguments, void 0, function*(transactionHash, returnFormat = this.defaultReturnFormat) {
            const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getTransaction(this, transactionHash, returnFormat);
            if (!response) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionNotFound"]();
            return response;
        });
    }
    /**
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns A list of pending transactions.
     *
     * ```ts
     * web3.eth.getPendingTransactions().then(console.log);
     * > [
     *      {
     *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
     *          type: 0n,
     *          nonce: 0n,
     *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *          blockNumber: null,
     *          transactionIndex: 0n,
     *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *          value: 1n,
     *          gas: 90000n,
     *          gasPrice: 2000000000n,
     *          input: '0x',
     *          v: 2709n,
     *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
     *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     *      },
     *      {
     *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     *          type: 0n,
     *          nonce: 1n,
     *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *          blockNumber: null,
     *          transactionIndex: 0n,
     *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *          value: 1n,
     *          gas: 90000n,
     *          gasPrice: 2000000000n,
     *          input: '0x',
     *          v: 2710n,
     *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
     *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
     *      }
     *   ]
     *
     * * web3.eth.getPendingTransactions({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
     * > [
     *      {
     *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
     *          type: 0,
     *          nonce: 0,
     *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *          blockNumber: null,
     *          transactionIndex: 0,
     *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *          value: 1,
     *          gas: 90000,
     *          gasPrice: 2000000000,
     *          input: '0x',
     *          v: 2709,
     *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
     *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     *      },
     *      {
     *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     *          type: 0,
     *          nonce: 1,
     *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
     *          blockNumber: null,
     *          transactionIndex: 0,
     *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *          value: 1,
     *          gas: 90000,
     *          gasPrice: 2000000000,
     *          input: '0x',
     *          v: 2710,
     *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
     *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
     *      }
     *   ]
     * ```
     */ getPendingTransactions() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getPendingTransactions(this, returnFormat);
        });
    }
    /**
     * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
     * @param transactionIndex The index position of the transaction.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The desired transaction object.
     *
     * ```ts
     * web3.eth.getTransactionFromBlock('0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00', 0).then(console.log);
     * {
     *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
     *    type: 0n,
     *    nonce: 0n,
     *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
     *    blockNumber: 1n,
     *    transactionIndex: 0n,
     *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *    value: 1n,
     *    gas: 90000n,
     *    gasPrice: 2000000000n,
     *    input: '0x',
     *    v: 2709n,
     *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
     *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     *  }
     *
     * web3.eth.getTransactionFromBlock(
     *     hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
     *     0,
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * {
     *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
     *    type: 0,
     *    nonce: 0,
     *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
     *    blockNumber: 1,
     *    transactionIndex: 0,
     *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *    value: 1,
     *    gas: 90000,
     *    gasPrice: 2000000000,
     *    input: '0x',
     *    v: 2709,
     *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
     *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
     *  }
     * ```
     */ getTransactionFromBlock() {
        return __awaiter(this, arguments, void 0, function*(block = this.defaultBlock, transactionIndex, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getTransactionFromBlock(this, block, transactionIndex, returnFormat);
        });
    }
    /**
     * @param transactionHash Hash of the transaction to retrieve the receipt for.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The desired {@link TransactionReceipt} object.
     *
     * ```ts
     * web3.eth.getTransactionReceipt("0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f").then(console.log);
     * > {
     *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     *      transactionIndex: 0n,
     *      blockNumber: 2n,
     *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
     *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *      cumulativeGasUsed: 21000n,
     *      gasUsed: 21000n,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1n,
     *      effectiveGasPrice: 2000000000n,
     *      type: 0n
     *  }
     *
     * web3.eth.getTransactionReceipt(
     *      "0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f",
     *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > {
     *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     *      transactionIndex: 0,
     *      blockNumber: 2,
     *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
     *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *      cumulativeGasUsed: 21000,
     *      gasUsed: 21000,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1,
     *      effectiveGasPrice: 2000000000,
     *      type: 0n
     *  }
     * ```
     */ getTransactionReceipt(transactionHash_1) {
        return __awaiter(this, arguments, void 0, function*(transactionHash, returnFormat = this.defaultReturnFormat) {
            const response = yield __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getTransactionReceipt(this, transactionHash, returnFormat);
            if (!response) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionNotFound"]();
            return response;
        });
    }
    /**
     * @param address The address to get the number of transactions for.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the query.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The number of transactions sent from the provided address.
     *
     * ```ts
     * web3.eth.getTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
     * > 1n
     *
     * web3.eth.getTransactionCount(
     *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
     *     undefined,
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > 1
     * ```
     */ getTransactionCount(address_1) {
        return __awaiter(this, arguments, void 0, function*(address, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getTransactionCount(this, address, blockNumber, returnFormat);
        });
    }
    /**
     * @param transaction The {@link Transaction}, {@link TransactionWithFromLocalWalletIndex}, {@link TransactionWithToLocalWalletIndex} or {@link TransactionWithFromAndToLocalWalletIndex} to send. __Note:__ In the `to` and `from` fields when hex strings are used, it is assumed they are addresses, for any other form (number, string number, etc.) it is assumed they are wallet indexes.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @param options A configuration object used to change the behavior of the `sendTransaction` method.
     * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
     * ```ts
     * const transaction = {
     *   from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
     *   to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
     *   value: '0x1'
     * }
     *
     * const transactionReceipt = await web3.eth.sendTransaction(transaction);
     * console.log(transactionReceipt);
     * > {
     *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
     *      blockNumber: 6659547n,
     *      cumulativeGasUsed: 1029036n,
     *      effectiveGasPrice: 6765796845n,
     *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
     *      gasUsed: 21000n,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1n,
     *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
     *      transactionIndex: 16n,
     *      type: 2n
     *}
     *
     * web3.eth.sendTransaction(transaction).then(console.log);
     * > {
     *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
     *      blockNumber: 6659547n,
     *      cumulativeGasUsed: 1029036n,
     *      effectiveGasPrice: 6765796845n,
     *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
     *      gasUsed: 21000n,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1n,
     *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
     *      transactionIndex: 16n,
     *      type: 2n
     *}
     *
     * web3.eth.sendTransaction(transaction).catch(console.log);
     * > <Some TransactionError>
     *
     * // Example using options.ignoreGasPricing = true
     * web3.eth.sendTransaction(transaction, undefined, { ignoreGasPricing: true }).then(console.log);
     * > {
     *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
     *      blockNumber: 6659547n,
     *      cumulativeGasUsed: 1029036n,
     *      effectiveGasPrice: 6765796845n,
     *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
     *      gasUsed: 21000n,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1n,
     *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
     *      transactionIndex: 16n,
     *      type: 2n
     *}
     * ```
     *
     *
     * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
     * - `sending`
     * ```ts
     * web3.eth.sendTransaction(transaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
     * > {
     *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
     *      to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
     *      value: '0x1',
     *      gasPrice: '0x77359400',
     *      maxPriorityFeePerGas: undefined,
     *      maxFeePerGas: undefined
     * }
     * ```
     * - `sent`
     * ```ts
     * web3.eth.sendTransaction(transaction).on('sent', sentTransaction => console.log(sentTransaction));
     * > {
     *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
     *      to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
     *      value: '0x1',
     *      gasPrice: '0x77359400',
     *      maxPriorityFeePerGas: undefined,
     *      maxFeePerGas: undefined
     * }
     * ```
     * - `transactionHash`
     * ```ts
     * web3.eth.sendTransaction(transaction).on('transactionHash', transactionHash => console.log(transactionHash));
     * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
     * ```
     * - `receipt`
     * ```ts
     * web3.eth.sendTransaction(transaction).on('receipt', receipt => console.log(receipt));
     * > {
     *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
     *      transactionIndex: 0n,
     *      blockNumber: 2n,
     *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
     *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *      cumulativeGasUsed: 21000n,
     *      gasUsed: 21000n,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1n,
     *      effectiveGasPrice: 2000000000n,
     *      type: 0n
     * }
     * ```
     * - `confirmation`
     * ```ts
     * web3.eth.sendTransaction(transaction).on('confirmation', confirmation => console.log(confirmation));
     * > {
     *      confirmations: 1n,
     *      receipt: {
     *         transactionHash: '0xb4a3a35ae0f3e77ef0ff7be42010d948d011b21a4e341072ee18717b67e99ab8',
     *         transactionIndex: 0n,
     *         blockNumber: 5n,
     *         blockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548',
     *         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
     *         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
     *         cumulativeGasUsed: 21000n,
     *         gasUsed: 21000n,
     *         logs: [],
     *         logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *         status: 1n,
     *         effectiveGasPrice: 2000000000n,
     *         type: 0n
     *      },
     *      latestBlockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548'
     * }
     * ```
     * - `error`
     * ```ts
     * web3.eth.sendTransaction(transaction).on('error', error => console.log);
     * > <Some TransactionError>
     * ```
     */ sendTransaction(transaction, returnFormat = this.defaultReturnFormat, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sendTransaction(this, transaction, returnFormat, options, this.transactionMiddleware);
    }
    /**
     * @param transaction Signed transaction in one of the valid {@link Bytes} format.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @param options A configuration object used to change the behavior of the method
     * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
     * ```ts
     * const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
     *
     * const transactionHash = await web3.eth.sendSignedTransaction(signedTransaction);
     * console.log(transactionHash);
     * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
     *
     * web3.eth.sendSignedTransaction(signedTransaction).then(console.log);
     * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
     *
     * web3.eth.sendSignedTransaction(signedTransaction).catch(console.log);
     * > <Some TransactionError>
     * ```
     *
     *
     * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
     * - `sending`
     * ```ts
     * web3.eth.sendSignedTransaction(signedTransaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
     * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
     * ```
     * - `sent`
     * ```ts
     * web3.eth.sendSignedTransaction(signedTransaction).on('sent', sentTransaction => console.log(sentTransaction));
     * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
     * ```
     * - `transactionHash`
     * ```ts
     * web3.eth.sendSignedTransaction(signedTransaction).on('transactionHash', transactionHash => console.log(transactionHash));
     * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
     * ```
     * - `receipt`
     * ```ts
     * web3.eth.sendSignedTransaction(signedTransaction).on('receipt', receipt => console.log(receipt));
     * > {
     *      blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
     *      blockNumber: 1n,
     *      cumulativeGasUsed: 21000n,
     *      effectiveGasPrice: 1000000001n,
     *      from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     *      gasUsed: 21000n,
     *      logs: [],
     *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *      status: 1n,
     *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     *      transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
     *      transactionIndex: 0n,
     *      type: 0n
     * }
     * ```
     * - `confirmation`
     * ```ts
     * web3.eth.sendSignedTransaction(signedTransaction).on('confirmation', confirmation => console.log(confirmation));
     * > {
     *     confirmations: 1n,
     *     receipt: {
     *          blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
     *          blockNumber: 1n,
     *          cumulativeGasUsed: 21000n,
     *          effectiveGasPrice: 1000000001n,
     *          from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     *          gasUsed: 21000n,
     *          logs: [],
     *          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     *          status: 1n,
     *          to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     *          transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
     *          transactionIndex: 0n,
     *          type: 0n
     *     },
     *     latestBlockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081'
     * }
     * ```
     * - `error`
     * ```ts
     * web3.eth.sendSignedTransaction(signedTransaction).on('error', error => console.log(error));
     * > <Some TransactionError>
     * ```
     */ sendSignedTransaction(transaction, returnFormat = this.defaultReturnFormat, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sendSignedTransaction(this, transaction, returnFormat, options);
    }
    /**
     * @param message Data to sign in one of the valid {@link Bytes} format.
     * @param address Address to sign data with, can be an address or the index of a local wallet.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns The signed `message`.
     *
     * ```ts
     * // Using an unlocked account managed by connected RPC client
     * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
     * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
     *
     * // Using an unlocked account managed by connected RPC client
     * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.UINT8ARRAY }).then(console.log);
     * > Uint8Array(65) [
     *    48, 117,  94, 214,  83, 150, 250, 207, 134, 197,  62,
     *    98,  23, 197,  43,  77, 174, 190, 114, 170,  73,  65,
     *   216, 150,  53,  64, 157, 228, 201, 199, 249,  70, 109,
     *    78, 154, 174, 199, 151, 127,   5, 233,  35, 136, 155,
     *    51, 192, 208, 221,  39, 215,  34, 107, 110, 111,  86,
     *   206, 115, 116, 101, 197, 207, 208,  75, 228,   0
     * ]
     * ```
     *
     * // Using an indexed account managed by local Web3 wallet
     * web3.eth.sign("0x48656c6c6f20776f726c64", 0).then(console.log);
     * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
     */ sign(message_1, addressOrIndex_1) {
        return __awaiter(this, arguments, void 0, function*(message, addressOrIndex, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sign(this, message, addressOrIndex, returnFormat);
        });
    }
    /**
     * @param transaction The transaction object to sign.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns {@link SignedTransactionInfoAPI}, an object containing the [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/#top) encoded signed transaction (accessed via the `raw` property) and the signed transaction object (accessed via the `tx` property).
     *
     * ```ts
     * const transaction = {
     *      from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
     *      to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
     *      value: '0x1',
     *      gas: '21000',
     *      gasPrice: await web3Eth.getGasPrice(),
     *      nonce: '0x1',
     *      type: '0x0'
     * }
     *
     * web3.eth.signTransaction(transaction).then(console.log);
     * > {
     *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
     *   tx: {
     *      type: 0n,
     *      nonce: 1n,
     *      gasPrice: 1000000001n,
     *      gas: 21000n,
     *      value: 1n,
     *      v: 2710n,
     *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
     *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
     *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     *      data: '0x'
     *   }
     * }
     *
     * web3.eth.signTransaction(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
     * > {
     *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
     *   tx: {
     *      type: 0,
     *      nonce: 1,
     *      gasPrice: 1000000001,
     *      gas: 21000,
     *      value: 1,
     *      v: 2710,
     *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
     *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
     *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
     *      data: '0x'
     *   }
     * }
     * ```
     */ signTransaction(transaction_1) {
        return __awaiter(this, arguments, void 0, function*(transaction, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.signTransaction(this, transaction, returnFormat);
        });
    }
    // TODO Decide what to do with transaction.to
    // https://github.com/ChainSafe/web3.js/pull/4525#issuecomment-982330076
    /**
     * Executes a message call within the EVM without creating a transaction.
     * It does not publish anything to the blockchain and does not consume any gas.
     *
     * @param transaction - A transaction object where all properties are optional except `to`, however it's recommended to include the `from` property or it may default to `0x0000000000000000000000000000000000000000` depending on your node or provider.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns The returned data of the call, e.g. a smart contract function's return value.
     */ call(transaction_1) {
        return __awaiter(this, arguments, void 0, function*(transaction, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.call(this, transaction, blockNumber, returnFormat);
        });
    }
    /**
     * Simulates the transaction within the EVM to estimate the amount of gas to be used by the transaction.
     * The transaction will not be added to the blockchain, and actual gas usage can vary when interacting
     * with a contract as a result of updating the contract's state.
     *
     * @param transaction The {@link Transaction} object to estimate the gas for.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns The used gas for the simulated transaction execution.
     *
     * ```ts
     * const transaction = {
     *       from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
     *       to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
     *       value: '0x1',
     *       nonce: '0x1',
     *       type: '0x0'
     * }
     *
     * web3.eth.estimateGas(transaction).then(console.log);
     * > 21000n
     *
     * web3.eth.estimateGas(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
     * > 21000
     * ```
     */ estimateGas(transaction_1) {
        return __awaiter(this, arguments, void 0, function*(transaction, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.estimateGas(this, transaction, blockNumber, returnFormat);
        });
    }
    /**
     * Gets past logs, matching the provided `filter`.
     *
     * @param filter A {@link Filter} object containing the properties for the desired logs.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
     *
     * ```ts
     * web3.eth.getPastLogs({
     *      address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
     *      topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
     *  }).then(console.log);
     * > [{
     *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
     *       logIndex: 0n,
     *       transactionIndex: 0n,
     *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
     *       blockNumber: 1234n,
     *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
     *   },
     *   {...}]
     *
     * web3.eth.getPastLogs(
     *     {
     *       address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
     *       topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
     *     },
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > [{
     *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
     *       logIndex: 0,
     *       transactionIndex: 0,
     *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
     *       blockNumber: 1234,
     *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
     *   },
     *   {...}]
     * ```
     */ getPastLogs(filter_1) {
        return __awaiter(this, arguments, void 0, function*(filter, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getLogs(this, filter, returnFormat);
        });
    }
    /**
     * Gets work for miners to mine on. Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
     *
     * @returns The mining work as an array of strings with the following structure:
     *
     * String 32 Bytes - at index 0: current block header pow-hash
     * String 32 Bytes - at index 1: the seed hash used for the DAG.
     * String 32 Bytes - at index 2: the boundary condition ('target'), 2^256 / difficulty.
     *
     * ```ts
     * web3.eth.getWork().then(console.log);
     * > [
     *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
     *     "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
     *     "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
     * ]
     * ```
     */ getWork() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getWork(this.requestManager);
        });
    }
    /**
     * Used for submitting a proof-of-work solution.
     *
     * @param nonce The nonce found (8 bytes).
     * @param hash  The header’s pow-hash (32 bytes).
     * @param digest The mix digest (32 bytes).
     * @returns Returns `true` if the provided solution is valid, otherwise `false`.
     *
     * ```ts
     * web3.eth.submitWork([
     *     "0x0000000000000001",
     *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
     *     "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
     * ]).then(console.log);
     * > true
     * ```
     */ submitWork(nonce, hash, digest) {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].submitWork(this.requestManager, nonce, hash, digest);
        });
    }
    // TODO - Format addresses
    /**
     * This method will request/enable the accounts from the current environment and for supporting [EIP 1102](https://eips.ethereum.org/EIPS/eip-1102)
     * This method will only work if you’re using the injected provider from a application like Metamask, Status or TrustWallet.
     * It doesn’t work if you’re connected to a node with a default Web3.js provider (WebsocketProvider, HttpProvider and IpcProvider).
     * For more information about the behavior of this method please read [EIP-1102](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md): Opt-in account exposure.
     *
     * @returns An array of enabled accounts.
     *
     * ```ts
     * web3.eth.requestAccounts().then(console.log);
     * > ['0aae0B295369a9FD31d5F28D9Ec85E40f4cb692BAf', '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe']
     * ```
     */ requestAccounts() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].requestAccounts(this.requestManager);
        });
    }
    /**
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns The chain ID of the current connected node as described in the [EIP-695](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-695.md).
     *
     * ```ts
     * web3.eth.getChainId().then(console.log);
     * > 61n
     *
     * web3.eth.getChainId({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
     * > 61
     * ```
     */ getChainId() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getChainId(this, returnFormat);
        });
    }
    /**
     * @returns The current client version.
     *
     * ```ts
     * web3.eth.getNodeInfo().then(console.log);
     * > "Mist/v0.9.3/darwin/go1.4.1"
     * ```
     */ getNodeInfo() {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$rpc$2d$methods$40$1$2e$3$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$rpc$2d$methods$2f$lib$2f$esm$2f$eth_rpc_methods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethRpcMethods$3e$__["ethRpcMethods"].getNodeInfo(this.requestManager);
        });
    }
    /**
     * @param address The Address of the account or contract.
     * @param storageKeys Array of storage-keys which should be proofed and included. See {@link web3.getStorageAt}.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns The account and storage-values of the specified account including the Merkle-proof as described in [EIP-1186](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1186.md).
     *
     * ```ts
     * web3.eth.getProof(
     *     "0x1234567890123456789012345678901234567890",
     *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
     *     "latest"
     * ).then(console.log);
     * > {
     *     "address": "0x1234567890123456789012345678901234567890",
     *     "accountProof": [
     *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
     *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
     *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
     *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
     *     ],
     *     "balance": 0n,
     *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
     *     "nonce": 0n,
     *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
     *     "storageProof": [
     *         {
     *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
     *             "value": 0n,
     *             "proof": []
     *         },
     *         {
     *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
     *             "value": 0n,
     *             "proof": []
     *         }
     *     ]
     * }
     *
     * web3.eth.getProof(
     *     "0x1234567890123456789012345678901234567890",
     *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
     *     undefined,
     *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
     * ).then(console.log);
     * > {
     *     "address": "0x1234567890123456789012345678901234567890",
     *     "accountProof": [
     *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
     *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
     *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
     *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
     *     ],
     *     "balance": 0,
     *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
     *     "nonce": 0,
     *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
     *     "storageProof": [
     *         {
     *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
     *             "value": 0,
     *             "proof": []
     *         },
     *         {
     *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
     *             "value": 0,
     *             "proof": []
     *         }
     *     ]
     * }
     * ```
     */ getProof(address_1, storageKeys_1) {
        return __awaiter(this, arguments, void 0, function*(address, storageKeys, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getProof(this, address, storageKeys, blockNumber, returnFormat);
        });
    }
    // TODO Throwing an error with Geth, but not Infura
    // TODO gasUsedRatio and reward not formatting
    /**
     * @param blockCount Number of blocks in the requested range. Between `1` and `1024` blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.
     * @param newestBlock Highest number block of the requested range.
     * @param rewardPercentiles A monotonically increasing list of percentile values to sample from each block’s effective priority fees per gas in ascending order, weighted by gas used. Example: `['0', '25', '50', '75', '100']` or `['0', '0.5', '1', '1.5', '3', '80']`
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns `baseFeePerGas` and transaction effective `priorityFeePerGas` history for the requested block range if available.
     * The range between `headBlock - 4` and `headBlock` is guaranteed to be available while retrieving data from the `pending` block and older history are optional to support.
     * For pre-EIP-1559 blocks the `gasPrice`s are returned as `rewards` and zeroes are returned for the `baseFeePerGas`.
     *
     * ```ts
     * web3.eth.getFeeHistory(4, 'pending', [0, 25, 75, 100]).then(console.log);
     * > {
     *     baseFeePerGas: [
     *         22983878621n,
     *         21417903463n,
     *         19989260230n,
     *         17770954829n,
     *         18850641304n
     *     ],
     *     gasUsedRatio: [
     *         0.22746546666666667,
     *         0.2331871,
     *         0.05610054885262125,
     *         0.7430227268212117
     *     ],
     *     oldestBlock: 15216343n,
     *     reward: [
     *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
     *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
     *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
     *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
     *     ]
     * }
     *
     * web3.eth.getFeeHistory(4, BlockTags.LATEST, [0, 25, 75, 100], { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
     * > {
     *     baseFeePerGas: [
     *         22983878621,
     *         21417903463,
     *         19989260230,
     *         17770954829,
     *         18850641304
     *     ],
     *     gasUsedRatio: [
     *         0.22746546666666667,
     *         0.2331871,
     *         0.05610054885262125,
     *         0.7430227268212117
     *     ],
     *     oldestBlock: 15216343,
     *     reward: [
     *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
     *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
     *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
     *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
     *     ]
     * }
     * ```
     */ getFeeHistory(blockCount_1) {
        return __awaiter(this, arguments, void 0, function*(blockCount, newestBlock = this.defaultBlock, rewardPercentiles, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getFeeHistory(this, blockCount, newestBlock, rewardPercentiles, returnFormat);
        });
    }
    /**
     * This method generates an access list for a transaction.
     *
     * @param transaction - A transaction object where all properties are optional except `from`, however it's recommended to include the `to` property.
     * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the createAccessList should be formatted.
     * @returns The returned data of the createAccessList,  e.g. The generated access list for transaction.
     * @example
     * ```ts
     * web3.eth.createAccessList({
     * from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
     * data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
     * gasPrice: '0x3b9aca00',
     * gas: '0x3d0900',
     * to: '0x940b25304947ae863568B3804434EC77E2160b87'
     * })
     * .then(console.log);
     *
     * > {
     *  "accessList": [
     *     {
     *       "address": "0x15859bdf5aff2080a9968f6a410361e9598df62f",
     *       "storageKeys": [
     *         "0x0000000000000000000000000000000000000000000000000000000000000000"
     *       ]
     *     }
     *   ],
     *   "gasUsed": "0x7671"
     * }
     * ```
     */ createAccessList(transaction_1) {
        return __awaiter(this, arguments, void 0, function*(transaction, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createAccessList(this, transaction, blockNumber, returnFormat);
        });
    }
    /**
     * This method sends EIP-712 typed data to the RPC provider to be signed.
     *
     * @param address The address that corresponds with the private key used to sign the typed data.
     * @param typedData The EIP-712 typed data object.
     * @param useLegacy A boolean flag determining whether the RPC call uses the legacy method `eth_signTypedData` or the newer method `eth_signTypedData_v4`
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the signed typed data should be formatted.
     * @returns The signed typed data.
     */ signTypedData(address, typedData, useLegacy, returnFormat) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            if (useLegacy === void 0) {
                useLegacy = false;
            }
            if (returnFormat === void 0) {
                returnFormat = (_a = this.defaultReturnFormat) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"];
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.signTypedData(this, address, typedData, useLegacy, returnFormat);
        });
    }
    /**
     * Lets you subscribe to specific events in the blockchain.
     *
     * @param name - The subscription you want to subscribe to.
     * @param args - Optional additional parameters, depending on the subscription type.
     * @returns A subscription object of type {@link RegisteredSubscription}. The object contains:
     *  - subscription.id: The subscription id, used to identify and unsubscribing the subscription.
     *  - subscription.subscribe(): Can be used to re-subscribe with the same parameters.
     *  - subscription.unsubscribe(): Unsubscribes the subscription and returns TRUE in the callback if successful.
     *  - subscription.args: The subscription arguments, used when re-subscribing.
     *
     *
     * You can use the subscription object to listen on:
     *
     * - on("data") - Fires on each incoming log with the log object as argument.
     * - on("changed") - Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
     * - on("error") - Fires when an error in the subscription occurs.
     * - on("connected") - Fires once after the subscription successfully connected. Returns the subscription id.
     *
     * @example **Subscribe to Smart Contract events**
     * ```ts
     * // Subscribe to `logs`
     * const logSubscription = web3.eth.subscribe('logs', {
     *     address: '0x1234567890123456789012345678901234567890',
     *     topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
     * });
     * logSubscription.on('data', (data: any) => console.log(data));
     * logSubscription.on('error', (error: any) => console.log(error));
     *
     * ```
     *
     * @example **Subscribe to new block headers**
     * ```ts
     * // Subscribe to `newBlockHeaders`
     * const newBlocksSubscription = await web3.eth.subscribe('newBlockHeaders');
     *
     * newBlocksSubscription.on('data', async blockhead => {
     * 	console.log('New block header: ', blockhead);
     *
     * 	// You do not need the next line, if you like to keep notified for every new block
     * 	await newBlocksSubscription.unsubscribe();
     * 	console.log('Unsubscribed from new block headers.');
     * });
     * newBlocksSubscription.on('error', error =>
     * 	console.log('Error when subscribing to New block header: ', error),
     * );
     * ```
     *
     * 	### subscribe('pendingTransactions')
     *
     * Subscribes to incoming pending transactions.
     * You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').
     *
     * ```ts
     * (await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
     * ```
     *
     * ### subscribe('newHeads')
     * ( same as subscribe('newBlockHeaders'))
     * Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.
     *
     * The structure of a returned block header is {@link BlockHeaderOutput}:
     *
     * ```ts
     * (await web3.eth.subscribe('newHeads')).on( // 'newBlockHeaders' would work as well
     *  'data',
     * console.log
     * );
     * >{
     * parentHash: '0x9e746a1d906b299def98c75b06f714d62dacadd567c7515d76eeaa8c8074c738',
     * sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
     * miner: '0x0000000000000000000000000000000000000000',
     * stateRoot: '0xe0f04b04861ecfa95e82a9310d6a7ef7aef8d7417f5209c182582bfb98a8e307',
     * transactionsRoot: '0x31ab4ea571a9e10d3a19aaed07d190595b1dfa34e03960c04293fec565dea536',
     * logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     * difficulty: 2n,
     * number: 21n,
     * gasLimit: 11738125n,
     * gasUsed: 830006n,
     * timestamp: 1678797237n,
     * extraData: '0xd883010b02846765746888676f312e32302e31856c696e757800000000000000e0a6e93cf40e2e71a72e493272210c3f43738ccc7e7d7b14ffd51833797d896c09117e8dc4fbcbc969bd21b42e5af3e276a911524038c001b2109b63b8e0352601',
     * nonce: 0n
     * }
     * ```
     *
     * ### subscribe('syncing')
     * Subscribe to syncing events. This will return `true` when the node is syncing and when it’s finished syncing will return `false`, for the `changed` event.
     *
     * ```ts
     * (await web3.eth.subscribe('syncing')).on('changed', console.log);
     * > `true` // when syncing
     *
     * (await web3.eth.subscribe('syncing')).on('data', console.log);
     * > {
     *      startingBlock: 0,
     *      currentBlock: 0,
     *      highestBlock: 0,
     *      pulledStates: 0,
     *      knownStates: 0
     *   }
     * ```
     *
     * ### subscribe('logs', options)
     * Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, web3.js will retrieve logs beginning from this point, backfilling the response as necessary.
     *
     * options: You can subscribe to logs matching a given filter object, which can take the following parameters:
     * - `fromBlock`: (optional, default: 'latest') Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.
     * - `address`: (optional) Contract address or a list of addresses from which logs should originate.
     * - `topics`: (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with `or` options.
     *
     * ```ts
     *  (await web3.eth.subscribe('logs', {
     *    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
     *   })).on('data', console.log);
     *
     * > {
     * removed: false,
     * logIndex: 119n,
     * transactionIndex: 58n,
     * transactionHash: '0x61533efa77937360215069d5d6cb0be09a22af9721e6dc3df59d957833ed8870',
     * blockHash: '0xe32bb97084479d32247f66f8b46d00af2fbc3c2db2bc6e5843fe2e4d1ca9b099',
     * blockNumber: 18771966n,
     * address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
     * data: '0x00000000000000000000000000000000000000000000000000000000d88b2e40',
     * topics: [
     * '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
     * '0x0000000000000000000000002fb2457f6ec1865dc0d4e7300c696b69c2a1b989',
     * '0x00000000000000000000000027fd43babfbe83a81d14665b1a6fb8030a60c9b4'
     * ]
     * }
     *```
     */ subscribe(name, args, returnFormat) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a, _b;
            if (returnFormat === void 0) {
                returnFormat = (_a = this.defaultReturnFormat) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"];
            }
            const subscription = yield (_b = this.subscriptionManager) === null || _b === void 0 ? void 0 : _b.subscribe(name, args, returnFormat);
            if (subscription instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogsSubscription"] && name === 'logs' && typeof args === 'object' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(args.fromBlock) && Number.isFinite(Number(args.fromBlock))) {
                setImmediate(()=>{
                    this.getPastLogs(args).then((logs)=>{
                        for (const log of logs){
                            subscription._processSubscriptionResult(log);
                        }
                    }).catch((e)=>{
                        subscription._processSubscriptionError(e);
                    });
                });
            }
            return subscription;
        });
    }
    static shouldClearSubscription({ sub }) {
        return !(sub instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SyncingSubscription"]);
    }
    /**
     * Resets subscriptions.
     *
     * @param notClearSyncing If `true` it keeps the `syncing` subscription.
     * @returns A promise to an array of subscription ids that were cleared.
     *
     * ```ts
     * web3.eth.clearSubscriptions().then(console.log);
     * > [...] An array of subscription ids that were cleared
     * ```
     */ clearSubscriptions(notClearSyncing = false) {
        var _a;
        return (_a = this.subscriptionManager) === null || _a === void 0 ? void 0 : _a.unsubscribe(// eslint-disable-next-line
        notClearSyncing ? Web3Eth.shouldClearSubscription : undefined);
    }
    /**
     * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed.
     *
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns A filter id.
     *
     * ```ts
     * web3.eth.createNewPendingTransactionFilter().then(console.log);
     * > 1n
     *
     * web3.eth.createNewPendingTransactionFilter({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x1"
     * ```
     */ createNewPendingTransactionFilter() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createNewPendingTransactionFilter(this, returnFormat);
        });
    }
    /**
     * Creates a filter object, based on filter options, to notify when the state changes (logs)
     *
     * @param filter A {@link FilterParams} object containing the filter properties.
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns A filter id.
     *
     * ```ts
     * web3.eth.createNewFilter(filterParams).then(console.log);
     * > 1n
     *
     * web3.eth.createNewFilter(filterParams, { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x1"
     * ```
     */ createNewFilter(filter_1) {
        return __awaiter(this, arguments, void 0, function*(filter, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createNewFilter(this, filter, returnFormat);
        });
    }
    /**
     * Creates a filter in the node, to notify when a new block arrives.
     *
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
     * @returns A filter id.
     *
     * ```ts
     * web3.eth.createNewBlockFilter().then(console.log);
     * > 1n
     *
     * web3.eth.createNewBlockFilter({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
     * > "0x1"
     * ```
     */ createNewBlockFilter() {
        return __awaiter(this, arguments, void 0, function*(returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createNewBlockFilter(this, returnFormat);
        });
    }
    /**
     * Uninstalls a filter with given id. Should always be called when watch is no longer needed.
     *
     * @param filterIdentifier ({@link Numbers} filter id
     * @returns true if the filter was successfully uninstalled, otherwise false.
     *
     * ```ts
     * web3.eth.uninstallFilter(123).then(console.log);
     * > true
     *
     * web3.eth.uninstallFilter('0x123').then(console.log);
     * > true
     *
     * web3.eth.uninstallFilter(12n).then(console.log);
     * > true
     * ```
     */ uninstallFilter(filterIdentifier) {
        return __awaiter(this, void 0, void 0, function*() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.uninstallFilter(this, filterIdentifier);
        });
    }
    /**
     *  Polling method for a filter, which returns an array of logs which occurred since last poll.
     *
     * @param filterIdentifier ({@link Numbers} filter id
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
     *
     * ```ts
     * web3.eth.getFilterChanges(123).then(console.log);
     * > [{
     *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
     *       logIndex: 0n,
     *       transactionIndex: 0n,
     *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
     *       blockNumber: 1234n,
     *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
     *   },
     *   {...}]
     */ getFilterChanges(filterIdentifier_1) {
        return __awaiter(this, arguments, void 0, function*(filterIdentifier, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getFilterChanges(this, filterIdentifier, returnFormat);
        });
    }
    /**
     *  Returns an array of all logs matching filter with given id.
     *
     * @param filterIdentifier ({@link Numbers} filter id
     * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
     * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
     *
     * ```ts
     * web3.eth.getFilterLogs(123).then(console.log);
     * > [{
     *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
     *       logIndex: 0n,
     *       transactionIndex: 0n,
     *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
     *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
     *       blockNumber: 1234n,
     *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
     *   },
     *   {...}]
     */ getFilterLogs(filterIdentifier_1) {
        return __awaiter(this, arguments, void 0, function*(filterIdentifier, returnFormat = this.defaultReturnFormat) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$filtering_rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getFilterLogs(this, filterIdentifier, returnFormat);
        });
    }
} //# sourceMappingURL=web3_eth.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/validation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "isAccessList": (()=>isAccessList),
    "isAccessListEntry": (()=>isAccessListEntry),
    "isBaseTransaction": (()=>isBaseTransaction),
    "isTransaction1559Unsigned": (()=>isTransaction1559Unsigned),
    "isTransaction2930Unsigned": (()=>isTransaction2930Unsigned),
    "isTransactionCall": (()=>isTransactionCall),
    "isTransactionLegacyUnsigned": (()=>isTransactionLegacyUnsigned),
    "isTransactionWithSender": (()=>isTransactionWithSender),
    "validateBaseChain": (()=>validateBaseChain),
    "validateChainInfo": (()=>validateChainInfo),
    "validateCustomChainInfo": (()=>validateCustomChainInfo),
    "validateFeeMarketGas": (()=>validateFeeMarketGas),
    "validateGas": (()=>validateGas),
    "validateHardfork": (()=>validateHardfork),
    "validateLegacyGas": (()=>validateLegacyGas),
    "validateTransactionCall": (()=>validateTransactionCall),
    "validateTransactionForSigning": (()=>validateTransactionForSigning),
    "validateTransactionWithSender": (()=>validateTransactionWithSender)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/format_transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/numbers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-ssr] (ecmascript)");
;
;
;
;
function isBaseTransaction(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.to) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.to)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.type) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.type) && value.type.length !== 2) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.nonce)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.gas)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.value)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.input)) return false;
    if (value.chainId && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.chainId)) return false;
    return true;
}
function isAccessListEntry(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.address) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.address)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.storageKeys) && !value.storageKeys.every((storageKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexString32Bytes"])(storageKey))) return false;
    return true;
}
function isAccessList(value) {
    if (!Array.isArray(value) || !value.every((accessListEntry)=>isAccessListEntry(accessListEntry))) return false;
    return true;
}
function isTransaction1559Unsigned(value) {
    if (!isBaseTransaction(value)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.maxFeePerGas)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.maxPriorityFeePerGas)) return false;
    if (!isAccessList(value.accessList)) return false;
    return true;
}
function isTransaction2930Unsigned(value) {
    if (!isBaseTransaction(value)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.gasPrice)) return false;
    if (!isAccessList(value.accessList)) return false;
    return true;
}
function isTransactionLegacyUnsigned(value) {
    if (!isBaseTransaction(value)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.gasPrice)) return false;
    return true;
}
function isTransactionWithSender(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.from)) return false;
    if (!isBaseTransaction(value)) return false;
    if (!isTransaction1559Unsigned(value) && !isTransaction2930Unsigned(value) && !isTransactionLegacyUnsigned(value)) return false;
    return true;
}
function validateTransactionWithSender(value) {
    if (!isTransactionWithSender(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTransactionWithSender"](value);
}
function isTransactionCall(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.from) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.from)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.to)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.gas) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.gas)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.gasPrice) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.gasPrice)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.value)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.data) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.data)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.input) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(value.input)) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(value.type)) return false;
    if (isTransaction1559Unsigned(value)) return false;
    if (isTransaction2930Unsigned(value)) return false;
    return true;
}
function validateTransactionCall(value) {
    if (!isTransactionCall(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTransactionCall"](value);
}
const validateCustomChainInfo = (transaction)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common.customChain)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingCustomChainError"]();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common.customChain.chainId)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingCustomChainIdError"]();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.chainId) && transaction.chainId !== transaction.common.customChain.chainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainIdMismatchError"]({
            txChainId: transaction.chainId,
            customChainId: transaction.common.customChain.chainId
        });
    }
};
const validateChainInfo = (transaction)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.chain) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.hardfork)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonOrChainAndHardforkError"]();
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.chain) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.hardfork) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.hardfork) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.chain)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingChainOrHardforkError"]({
        chain: transaction.chain,
        hardfork: transaction.hardfork
    });
};
const validateBaseChain = (transaction)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common)) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common.baseChain)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.chain) && transaction.chain !== transaction.common.baseChain) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainMismatchError"]({
                    txChain: transaction.chain,
                    baseChain: transaction.common.baseChain
                });
            }
        }
    }
};
const validateHardfork = (transaction)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common)) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common.hardfork)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.hardfork) && transaction.hardfork !== transaction.common.hardfork) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HardforkMismatchError"]({
                    txHardfork: transaction.hardfork,
                    commonHardfork: transaction.common.hardfork
                });
            }
        }
    }
};
const validateLegacyGas = (transaction)=>{
    if (// This check is verifying gas and gasPrice aren't less than 0.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gas) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUInt"])(transaction.gas) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasPrice) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUInt"])(transaction.gasPrice)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidGasOrGasPrice"]({
        gas: transaction.gas,
        gasPrice: transaction.gasPrice
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxFeePerGas) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxPriorityFeePerGas)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedFeeMarketError"]({
        maxFeePerGas: transaction.maxFeePerGas,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
    });
};
const validateFeeMarketGas = (transaction)=>{
    // These errors come from 1.x, so they must be checked before
    // InvalidMaxPriorityFeePerGasOrMaxFeePerGas to throw the same error
    // for the same code executing in 1.x
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasPrice) && transaction.type === '0x2') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Eip1559GasPriceError"](transaction.gasPrice);
    if (transaction.type === '0x0' || transaction.type === '0x1') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedFeeMarketError"]({
        maxFeePerGas: transaction.maxFeePerGas,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxFeePerGas) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUInt"])(transaction.maxFeePerGas) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxPriorityFeePerGas) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$numbers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUInt"])(transaction.maxPriorityFeePerGas)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidMaxPriorityFeePerGasOrMaxFeePerGas"]({
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
        maxFeePerGas: transaction.maxFeePerGas
    });
};
const validateGas = (transaction)=>{
    const gasPresent = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gas) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasLimit);
    const legacyGasPresent = gasPresent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.gasPrice);
    const feeMarketGasPresent = gasPresent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxPriorityFeePerGas) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.maxFeePerGas);
    if (!legacyGasPresent && !feeMarketGasPresent) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingGasError"]({
        gas: transaction.gas,
        gasPrice: transaction.gasPrice,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
        maxFeePerGas: transaction.maxFeePerGas
    });
    if (legacyGasPresent && feeMarketGasPresent) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionGasMismatchError"]({
        gas: transaction.gas,
        gasPrice: transaction.gasPrice,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
        maxFeePerGas: transaction.maxFeePerGas
    });
    (legacyGasPresent ? validateLegacyGas : validateFeeMarketGas)(transaction);
    (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.type) && transaction.type > '0x1' ? validateFeeMarketGas : validateLegacyGas)(transaction);
};
const validateTransactionForSigning = (transaction, overrideMethod, options = {
    transactionSchema: undefined
})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(overrideMethod)) {
        overrideMethod(transaction);
        return;
    }
    if (typeof transaction !== 'object' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTransactionObjectError"](transaction);
    validateCustomChainInfo(transaction);
    validateChainInfo(transaction);
    validateBaseChain(transaction);
    validateHardfork(transaction);
    const formattedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
        transactionSchema: options.transactionSchema
    });
    validateGas(formattedTransaction);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.nonce) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(formattedTransaction.chainId) || formattedTransaction.nonce.startsWith('-') || formattedTransaction.chainId.startsWith('-')) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidNonceOrChainIdError"]({
        nonce: transaction.nonce,
        chainId: transaction.chainId
    });
}; //# sourceMappingURL=validation.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/prepare_transaction_for_signing.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "prepareTransactionForSigning": (()=>prepareTransactionForSigning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/format_transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/transaction_builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js [app-ssr] (ecmascript)");
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
const getEthereumjsTxDataFromTransaction = (transaction)=>{
    var _a, _b;
    return Object.assign(Object.assign({}, transaction), {
        nonce: transaction.nonce,
        gasPrice: transaction.gasPrice,
        gasLimit: (_a = transaction.gasLimit) !== null && _a !== void 0 ? _a : transaction.gas,
        to: transaction.to,
        value: transaction.value,
        data: (_b = transaction.data) !== null && _b !== void 0 ? _b : transaction.input,
        type: transaction.type,
        chainId: transaction.chainId,
        accessList: transaction.accessList,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
        maxFeePerGas: transaction.maxFeePerGas
    });
};
const getEthereumjsTransactionOptions = (transaction, web3Context)=>{
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const hasTransactionSigningOptions = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.chain) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.hardfork) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.common);
    let common;
    if (!hasTransactionSigningOptions) {
        // if defaultcommon is specified, use that.
        if (web3Context.defaultCommon) {
            common = Object.assign({}, web3Context.defaultCommon);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(common.hardfork)) common.hardfork = (_a = transaction.hardfork) !== null && _a !== void 0 ? _a : web3Context.defaultHardfork;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(common.baseChain)) common.baseChain = web3Context.defaultChain;
        } else {
            common = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Common"].custom({
                name: 'custom-network',
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(transaction.chainId),
                networkId: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(transaction.networkId) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(transaction.networkId) : undefined,
                defaultHardfork: (_b = transaction.hardfork) !== null && _b !== void 0 ? _b : web3Context.defaultHardfork
            }, {
                baseChain: web3Context.defaultChain
            });
        }
    } else {
        const name = (_f = (_e = (_d = (_c = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _c === void 0 ? void 0 : _c.customChain) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : transaction.chain) !== null && _f !== void 0 ? _f : 'custom-network';
        const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])((_j = (_h = (_g = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _g === void 0 ? void 0 : _g.customChain) === null || _h === void 0 ? void 0 : _h.chainId) !== null && _j !== void 0 ? _j : transaction === null || transaction === void 0 ? void 0 : transaction.chainId);
        const networkId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])((_m = (_l = (_k = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _k === void 0 ? void 0 : _k.customChain) === null || _l === void 0 ? void 0 : _l.networkId) !== null && _m !== void 0 ? _m : transaction === null || transaction === void 0 ? void 0 : transaction.networkId);
        const defaultHardfork = (_q = (_p = (_o = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _o === void 0 ? void 0 : _o.hardfork) !== null && _p !== void 0 ? _p : transaction === null || transaction === void 0 ? void 0 : transaction.hardfork) !== null && _q !== void 0 ? _q : web3Context.defaultHardfork;
        const baseChain = (_t = (_s = (_r = transaction.common) === null || _r === void 0 ? void 0 : _r.baseChain) !== null && _s !== void 0 ? _s : transaction.chain) !== null && _t !== void 0 ? _t : web3Context.defaultChain;
        if (chainId && networkId && name) {
            common = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Common"].custom({
                name,
                chainId,
                networkId,
                defaultHardfork
            }, {
                baseChain
            });
        }
    }
    return {
        common
    };
};
const prepareTransactionForSigning = (transaction_1, web3Context_1, privateKey_1, ...args_1)=>__awaiter(void 0, [
        transaction_1,
        web3Context_1,
        privateKey_1,
        ...args_1
    ], void 0, function*(transaction, web3Context, privateKey, fillGasPrice = false, fillGasLimit = true) {
        const populatedTransaction = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionBuilder"])({
            transaction,
            web3Context,
            privateKey,
            fillGasPrice,
            fillGasLimit
        });
        const formattedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(populatedTransaction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETH_DATA_FORMAT"], {
            transactionSchema: web3Context.config.customTransactionSchema
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTransactionForSigning"])(formattedTransaction, undefined, {
            transactionSchema: web3Context.config.customTransactionSchema
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionFactory"].fromTxData(getEthereumjsTxDataFromTransaction(formattedTransaction), getEthereumjsTransactionOptions(formattedTransaction, web3Context));
    }); //# sourceMappingURL=prepare_transaction_for_signing.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
 * The `web3-eth` package allows you to interact with an Ethereum blockchain and Ethereum smart contracts.
 *
 * To use this package standalone and use its methods use:
 * ```ts
 * import { Web3Context } from 'web3-core';
 * import { BlockTags } from 'web3-types';
 * import { DEFAULT_RETURN_FORMAT } from 'web3-types';
 * import { getBalance} from 'web3-eth';
 *
 * getBalance(
 *      new Web3Context('http://127.0.0.1:8545'),
 *      '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
 *      BlockTags.LATEST,
 *      DEFAULT_RETURN_FORMAT
 * ).then(console.log);
 * > 1000000000000n
 * ```
 *
 * To use this package within the `web3` object use:
 * ```ts
 * import Web3 from 'web3';
 *
 * const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
 * web3.eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1').then(console.log);
 * > 1000000000000n
 *```
 *
 * With `web3-eth` you can also subscribe (if supported by provider) to events in the Ethereum Blockchain, using the `subscribe` function. See more at the {@link Web3Eth.subscribe} function.
 */ /**
 *
 */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_eth.js [app-ssr] (ecmascript)");
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
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Eth"];
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$setimmediate$2f$setImmediate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/setimmediate/setImmediate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_eth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$decoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/decoding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/schemas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$rpc_method_wrappers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/rpc_method_wrappers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$format_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/format_transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$prepare_transaction_for_signing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/prepare_transaction_for_signing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_subscriptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$detect_transaction_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/detect_transaction_type.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$transaction_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/transaction_builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$wait_for_transaction_receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/wait_for_transaction_receipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$try_send_transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/try_send_transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$utils$2f$send_tx_helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/utils/send_tx_helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=9f712_web3-eth_lib_esm_9ece25._.js.map