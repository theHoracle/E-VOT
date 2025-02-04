module.exports = {

"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ // Response error
__turbopack_esm__({
    "ERR_ABI_ENCODING": (()=>ERR_ABI_ENCODING),
    "ERR_CONN": (()=>ERR_CONN),
    "ERR_CONN_CLOSE": (()=>ERR_CONN_CLOSE),
    "ERR_CONN_INVALID": (()=>ERR_CONN_INVALID),
    "ERR_CONN_MAX_ATTEMPTS": (()=>ERR_CONN_MAX_ATTEMPTS),
    "ERR_CONN_NOT_OPEN": (()=>ERR_CONN_NOT_OPEN),
    "ERR_CONN_PENDING_REQUESTS": (()=>ERR_CONN_PENDING_REQUESTS),
    "ERR_CONN_TIMEOUT": (()=>ERR_CONN_TIMEOUT),
    "ERR_CONTRACT": (()=>ERR_CONTRACT),
    "ERR_CONTRACT_ABI_MISSING": (()=>ERR_CONTRACT_ABI_MISSING),
    "ERR_CONTRACT_EVENT_NOT_EXISTS": (()=>ERR_CONTRACT_EVENT_NOT_EXISTS),
    "ERR_CONTRACT_EXECUTION_REVERTED": (()=>ERR_CONTRACT_EXECUTION_REVERTED),
    "ERR_CONTRACT_INSTANTIATION": (()=>ERR_CONTRACT_INSTANTIATION),
    "ERR_CONTRACT_MISSING_ADDRESS": (()=>ERR_CONTRACT_MISSING_ADDRESS),
    "ERR_CONTRACT_MISSING_DEPLOY_DATA": (()=>ERR_CONTRACT_MISSING_DEPLOY_DATA),
    "ERR_CONTRACT_MISSING_FROM_ADDRESS": (()=>ERR_CONTRACT_MISSING_FROM_ADDRESS),
    "ERR_CONTRACT_REQUIRED_CALLBACK": (()=>ERR_CONTRACT_REQUIRED_CALLBACK),
    "ERR_CONTRACT_RESERVED_EVENT": (()=>ERR_CONTRACT_RESERVED_EVENT),
    "ERR_CONTRACT_RESOLVER_MISSING": (()=>ERR_CONTRACT_RESOLVER_MISSING),
    "ERR_CONTRACT_TX_DATA_AND_INPUT": (()=>ERR_CONTRACT_TX_DATA_AND_INPUT),
    "ERR_CORE_CHAIN_MISMATCH": (()=>ERR_CORE_CHAIN_MISMATCH),
    "ERR_CORE_HARDFORK_MISMATCH": (()=>ERR_CORE_HARDFORK_MISMATCH),
    "ERR_ENS_CHECK_INTERFACE_SUPPORT": (()=>ERR_ENS_CHECK_INTERFACE_SUPPORT),
    "ERR_ENS_NETWORK_NOT_SYNCED": (()=>ERR_ENS_NETWORK_NOT_SYNCED),
    "ERR_ENS_UNSUPPORTED_NETWORK": (()=>ERR_ENS_UNSUPPORTED_NETWORK),
    "ERR_EXISTING_PLUGIN_NAMESPACE": (()=>ERR_EXISTING_PLUGIN_NAMESPACE),
    "ERR_FORMATTERS": (()=>ERR_FORMATTERS),
    "ERR_INVALID_ADDRESS": (()=>ERR_INVALID_ADDRESS),
    "ERR_INVALID_BLOCK": (()=>ERR_INVALID_BLOCK),
    "ERR_INVALID_BOOLEAN": (()=>ERR_INVALID_BOOLEAN),
    "ERR_INVALID_BYTES": (()=>ERR_INVALID_BYTES),
    "ERR_INVALID_CLIENT": (()=>ERR_INVALID_CLIENT),
    "ERR_INVALID_HEX": (()=>ERR_INVALID_HEX),
    "ERR_INVALID_INTEGER": (()=>ERR_INVALID_INTEGER),
    "ERR_INVALID_KEYSTORE": (()=>ERR_INVALID_KEYSTORE),
    "ERR_INVALID_LARGE_VALUE": (()=>ERR_INVALID_LARGE_VALUE),
    "ERR_INVALID_METHOD_PARAMS": (()=>ERR_INVALID_METHOD_PARAMS),
    "ERR_INVALID_NIBBLE_WIDTH": (()=>ERR_INVALID_NIBBLE_WIDTH),
    "ERR_INVALID_NUMBER": (()=>ERR_INVALID_NUMBER),
    "ERR_INVALID_PASSWORD": (()=>ERR_INVALID_PASSWORD),
    "ERR_INVALID_PRIVATE_KEY": (()=>ERR_INVALID_PRIVATE_KEY),
    "ERR_INVALID_PROVIDER": (()=>ERR_INVALID_PROVIDER),
    "ERR_INVALID_RESPONSE": (()=>ERR_INVALID_RESPONSE),
    "ERR_INVALID_SIGNATURE": (()=>ERR_INVALID_SIGNATURE),
    "ERR_INVALID_SIZE": (()=>ERR_INVALID_SIZE),
    "ERR_INVALID_STRING": (()=>ERR_INVALID_STRING),
    "ERR_INVALID_TYPE": (()=>ERR_INVALID_TYPE),
    "ERR_INVALID_TYPE_ABI": (()=>ERR_INVALID_TYPE_ABI),
    "ERR_INVALID_UNIT": (()=>ERR_INVALID_UNIT),
    "ERR_INVALID_UNSIGNED_INTEGER": (()=>ERR_INVALID_UNSIGNED_INTEGER),
    "ERR_IV_LENGTH": (()=>ERR_IV_LENGTH),
    "ERR_KEY_DERIVATION_FAIL": (()=>ERR_KEY_DERIVATION_FAIL),
    "ERR_KEY_VERSION_UNSUPPORTED": (()=>ERR_KEY_VERSION_UNSUPPORTED),
    "ERR_METHOD_NOT_IMPLEMENTED": (()=>ERR_METHOD_NOT_IMPLEMENTED),
    "ERR_MULTIPLE_ERRORS": (()=>ERR_MULTIPLE_ERRORS),
    "ERR_OPERATION_ABORT": (()=>ERR_OPERATION_ABORT),
    "ERR_OPERATION_TIMEOUT": (()=>ERR_OPERATION_TIMEOUT),
    "ERR_PARAM": (()=>ERR_PARAM),
    "ERR_PBKDF2_ITERATIONS": (()=>ERR_PBKDF2_ITERATIONS),
    "ERR_PRIVATE_KEY_LENGTH": (()=>ERR_PRIVATE_KEY_LENGTH),
    "ERR_PROVIDER": (()=>ERR_PROVIDER),
    "ERR_RAW_TX_UNDEFINED": (()=>ERR_RAW_TX_UNDEFINED),
    "ERR_REQ_ALREADY_SENT": (()=>ERR_REQ_ALREADY_SENT),
    "ERR_RESPONSE": (()=>ERR_RESPONSE),
    "ERR_RPC_INTERNAL_ERROR": (()=>ERR_RPC_INTERNAL_ERROR),
    "ERR_RPC_INVALID_INPUT": (()=>ERR_RPC_INVALID_INPUT),
    "ERR_RPC_INVALID_JSON": (()=>ERR_RPC_INVALID_JSON),
    "ERR_RPC_INVALID_METHOD": (()=>ERR_RPC_INVALID_METHOD),
    "ERR_RPC_INVALID_PARAMS": (()=>ERR_RPC_INVALID_PARAMS),
    "ERR_RPC_INVALID_REQUEST": (()=>ERR_RPC_INVALID_REQUEST),
    "ERR_RPC_LIMIT_EXCEEDED": (()=>ERR_RPC_LIMIT_EXCEEDED),
    "ERR_RPC_MISSING_RESOURCE": (()=>ERR_RPC_MISSING_RESOURCE),
    "ERR_RPC_NOT_SUPPORTED": (()=>ERR_RPC_NOT_SUPPORTED),
    "ERR_RPC_TRANSACTION_REJECTED": (()=>ERR_RPC_TRANSACTION_REJECTED),
    "ERR_RPC_UNAVAILABLE_RESOURCE": (()=>ERR_RPC_UNAVAILABLE_RESOURCE),
    "ERR_RPC_UNSUPPORTED_METHOD": (()=>ERR_RPC_UNSUPPORTED_METHOD),
    "ERR_SCHEMA_FORMAT": (()=>ERR_SCHEMA_FORMAT),
    "ERR_SIGNATURE_FAILED": (()=>ERR_SIGNATURE_FAILED),
    "ERR_SUBSCRIPTION": (()=>ERR_SUBSCRIPTION),
    "ERR_TX": (()=>ERR_TX),
    "ERR_TX_BLOCK_TIMEOUT": (()=>ERR_TX_BLOCK_TIMEOUT),
    "ERR_TX_CHAIN_ID_MISMATCH": (()=>ERR_TX_CHAIN_ID_MISMATCH),
    "ERR_TX_CHAIN_MISMATCH": (()=>ERR_TX_CHAIN_MISMATCH),
    "ERR_TX_CONTRACT_NOT_STORED": (()=>ERR_TX_CONTRACT_NOT_STORED),
    "ERR_TX_DATA_AND_INPUT": (()=>ERR_TX_DATA_AND_INPUT),
    "ERR_TX_GAS_MISMATCH": (()=>ERR_TX_GAS_MISMATCH),
    "ERR_TX_GAS_MISMATCH_INNER_ERROR": (()=>ERR_TX_GAS_MISMATCH_INNER_ERROR),
    "ERR_TX_HARDFORK_MISMATCH": (()=>ERR_TX_HARDFORK_MISMATCH),
    "ERR_TX_INVALID_CALL": (()=>ERR_TX_INVALID_CALL),
    "ERR_TX_INVALID_CHAIN_INFO": (()=>ERR_TX_INVALID_CHAIN_INFO),
    "ERR_TX_INVALID_FEE_MARKET_GAS": (()=>ERR_TX_INVALID_FEE_MARKET_GAS),
    "ERR_TX_INVALID_FEE_MARKET_GAS_PRICE": (()=>ERR_TX_INVALID_FEE_MARKET_GAS_PRICE),
    "ERR_TX_INVALID_LEGACY_FEE_MARKET": (()=>ERR_TX_INVALID_LEGACY_FEE_MARKET),
    "ERR_TX_INVALID_LEGACY_GAS": (()=>ERR_TX_INVALID_LEGACY_GAS),
    "ERR_TX_INVALID_NONCE_OR_CHAIN_ID": (()=>ERR_TX_INVALID_NONCE_OR_CHAIN_ID),
    "ERR_TX_INVALID_OBJECT": (()=>ERR_TX_INVALID_OBJECT),
    "ERR_TX_INVALID_PROPERTIES_FOR_TYPE": (()=>ERR_TX_INVALID_PROPERTIES_FOR_TYPE),
    "ERR_TX_INVALID_RECEIVER": (()=>ERR_TX_INVALID_RECEIVER),
    "ERR_TX_INVALID_SENDER": (()=>ERR_TX_INVALID_SENDER),
    "ERR_TX_LOCAL_WALLET_NOT_AVAILABLE": (()=>ERR_TX_LOCAL_WALLET_NOT_AVAILABLE),
    "ERR_TX_MISSING_CHAIN_INFO": (()=>ERR_TX_MISSING_CHAIN_INFO),
    "ERR_TX_MISSING_CUSTOM_CHAIN": (()=>ERR_TX_MISSING_CUSTOM_CHAIN),
    "ERR_TX_MISSING_CUSTOM_CHAIN_ID": (()=>ERR_TX_MISSING_CUSTOM_CHAIN_ID),
    "ERR_TX_MISSING_GAS": (()=>ERR_TX_MISSING_GAS),
    "ERR_TX_MISSING_GAS_INNER_ERROR": (()=>ERR_TX_MISSING_GAS_INNER_ERROR),
    "ERR_TX_NOT_FOUND": (()=>ERR_TX_NOT_FOUND),
    "ERR_TX_NO_CONTRACT_ADDRESS": (()=>ERR_TX_NO_CONTRACT_ADDRESS),
    "ERR_TX_OUT_OF_GAS": (()=>ERR_TX_OUT_OF_GAS),
    "ERR_TX_POLLING_TIMEOUT": (()=>ERR_TX_POLLING_TIMEOUT),
    "ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER": (()=>ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER),
    "ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL": (()=>ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL),
    "ERR_TX_REVERT_INSTRUCTION": (()=>ERR_TX_REVERT_INSTRUCTION),
    "ERR_TX_REVERT_TRANSACTION": (()=>ERR_TX_REVERT_TRANSACTION),
    "ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR": (()=>ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR),
    "ERR_TX_REVERT_WITHOUT_REASON": (()=>ERR_TX_REVERT_WITHOUT_REASON),
    "ERR_TX_SEND_TIMEOUT": (()=>ERR_TX_SEND_TIMEOUT),
    "ERR_TX_SIGNING": (()=>ERR_TX_SIGNING),
    "ERR_TX_UNABLE_TO_POPULATE_NONCE": (()=>ERR_TX_UNABLE_TO_POPULATE_NONCE),
    "ERR_TX_UNSUPPORTED_EIP_1559": (()=>ERR_TX_UNSUPPORTED_EIP_1559),
    "ERR_TX_UNSUPPORTED_TYPE": (()=>ERR_TX_UNSUPPORTED_TYPE),
    "ERR_UNSUPPORTED_KDF": (()=>ERR_UNSUPPORTED_KDF),
    "ERR_VALIDATION": (()=>ERR_VALIDATION),
    "ERR_WS_PROVIDER": (()=>ERR_WS_PROVIDER),
    "GENESIS_BLOCK_NUMBER": (()=>GENESIS_BLOCK_NUMBER),
    "JSONRPC_ERR_CHAIN_DISCONNECTED": (()=>JSONRPC_ERR_CHAIN_DISCONNECTED),
    "JSONRPC_ERR_DISCONNECTED": (()=>JSONRPC_ERR_DISCONNECTED),
    "JSONRPC_ERR_REJECTED_REQUEST": (()=>JSONRPC_ERR_REJECTED_REQUEST),
    "JSONRPC_ERR_UNAUTHORIZED": (()=>JSONRPC_ERR_UNAUTHORIZED),
    "JSONRPC_ERR_UNSUPPORTED_METHOD": (()=>JSONRPC_ERR_UNSUPPORTED_METHOD)
});
const ERR_RESPONSE = 100;
const ERR_INVALID_RESPONSE = 101;
const ERR_PARAM = 200;
const ERR_FORMATTERS = 201;
const ERR_METHOD_NOT_IMPLEMENTED = 202;
const ERR_OPERATION_TIMEOUT = 203;
const ERR_OPERATION_ABORT = 204;
const ERR_ABI_ENCODING = 205;
const ERR_EXISTING_PLUGIN_NAMESPACE = 206;
const ERR_INVALID_METHOD_PARAMS = 207;
const ERR_MULTIPLE_ERRORS = 208;
const ERR_CONTRACT = 300;
const ERR_CONTRACT_RESOLVER_MISSING = 301;
const ERR_CONTRACT_ABI_MISSING = 302;
const ERR_CONTRACT_REQUIRED_CALLBACK = 303;
const ERR_CONTRACT_EVENT_NOT_EXISTS = 304;
const ERR_CONTRACT_RESERVED_EVENT = 305;
const ERR_CONTRACT_MISSING_DEPLOY_DATA = 306;
const ERR_CONTRACT_MISSING_ADDRESS = 307;
const ERR_CONTRACT_MISSING_FROM_ADDRESS = 308;
const ERR_CONTRACT_INSTANTIATION = 309;
const ERR_CONTRACT_EXECUTION_REVERTED = 310;
const ERR_CONTRACT_TX_DATA_AND_INPUT = 311;
const ERR_TX = 400;
const ERR_TX_REVERT_INSTRUCTION = 401;
const ERR_TX_REVERT_TRANSACTION = 402;
const ERR_TX_NO_CONTRACT_ADDRESS = 403;
const ERR_TX_CONTRACT_NOT_STORED = 404;
const ERR_TX_REVERT_WITHOUT_REASON = 405;
const ERR_TX_OUT_OF_GAS = 406;
const ERR_RAW_TX_UNDEFINED = 407;
const ERR_TX_INVALID_SENDER = 408;
const ERR_TX_INVALID_CALL = 409;
const ERR_TX_MISSING_CUSTOM_CHAIN = 410;
const ERR_TX_MISSING_CUSTOM_CHAIN_ID = 411;
const ERR_TX_CHAIN_ID_MISMATCH = 412;
const ERR_TX_INVALID_CHAIN_INFO = 413;
const ERR_TX_MISSING_CHAIN_INFO = 414;
const ERR_TX_MISSING_GAS = 415;
const ERR_TX_INVALID_LEGACY_GAS = 416;
const ERR_TX_INVALID_FEE_MARKET_GAS = 417;
const ERR_TX_INVALID_FEE_MARKET_GAS_PRICE = 418;
const ERR_TX_INVALID_LEGACY_FEE_MARKET = 419;
const ERR_TX_INVALID_OBJECT = 420;
const ERR_TX_INVALID_NONCE_OR_CHAIN_ID = 421;
const ERR_TX_UNABLE_TO_POPULATE_NONCE = 422;
const ERR_TX_UNSUPPORTED_EIP_1559 = 423;
const ERR_TX_UNSUPPORTED_TYPE = 424;
const ERR_TX_DATA_AND_INPUT = 425;
const ERR_TX_POLLING_TIMEOUT = 426;
const ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL = 427;
const ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER = 428;
const ERR_TX_LOCAL_WALLET_NOT_AVAILABLE = 429;
const ERR_TX_NOT_FOUND = 430;
const ERR_TX_SEND_TIMEOUT = 431;
const ERR_TX_BLOCK_TIMEOUT = 432;
const ERR_TX_SIGNING = 433;
const ERR_TX_GAS_MISMATCH = 434;
const ERR_TX_CHAIN_MISMATCH = 435;
const ERR_TX_HARDFORK_MISMATCH = 436;
const ERR_TX_INVALID_RECEIVER = 437;
const ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR = 438;
const ERR_TX_INVALID_PROPERTIES_FOR_TYPE = 439;
const ERR_TX_MISSING_GAS_INNER_ERROR = 440;
const ERR_TX_GAS_MISMATCH_INNER_ERROR = 441;
const ERR_CONN = 500;
const ERR_CONN_INVALID = 501;
const ERR_CONN_TIMEOUT = 502;
const ERR_CONN_NOT_OPEN = 503;
const ERR_CONN_CLOSE = 504;
const ERR_CONN_MAX_ATTEMPTS = 505;
const ERR_CONN_PENDING_REQUESTS = 506;
const ERR_REQ_ALREADY_SENT = 507;
const ERR_PROVIDER = 600;
const ERR_INVALID_PROVIDER = 601;
const ERR_INVALID_CLIENT = 602;
const ERR_SUBSCRIPTION = 603;
const ERR_WS_PROVIDER = 604;
const ERR_PRIVATE_KEY_LENGTH = 701;
const ERR_INVALID_PRIVATE_KEY = 702;
const ERR_UNSUPPORTED_KDF = 703;
const ERR_KEY_DERIVATION_FAIL = 704;
const ERR_KEY_VERSION_UNSUPPORTED = 705;
const ERR_INVALID_PASSWORD = 706;
const ERR_IV_LENGTH = 707;
const ERR_INVALID_KEYSTORE = 708;
const ERR_PBKDF2_ITERATIONS = 709;
const ERR_SIGNATURE_FAILED = 801;
const ERR_INVALID_SIGNATURE = 802;
const GENESIS_BLOCK_NUMBER = '0x0';
const JSONRPC_ERR_REJECTED_REQUEST = 4001;
const JSONRPC_ERR_UNAUTHORIZED = 4100;
const JSONRPC_ERR_UNSUPPORTED_METHOD = 4200;
const JSONRPC_ERR_DISCONNECTED = 4900;
const JSONRPC_ERR_CHAIN_DISCONNECTED = 4901;
const ERR_ENS_CHECK_INTERFACE_SUPPORT = 901;
const ERR_ENS_UNSUPPORTED_NETWORK = 902;
const ERR_ENS_NETWORK_NOT_SYNCED = 903;
const ERR_INVALID_STRING = 1001;
const ERR_INVALID_BYTES = 1002;
const ERR_INVALID_NUMBER = 1003;
const ERR_INVALID_UNIT = 1004;
const ERR_INVALID_ADDRESS = 1005;
const ERR_INVALID_HEX = 1006;
const ERR_INVALID_TYPE = 1007;
const ERR_INVALID_BOOLEAN = 1008;
const ERR_INVALID_UNSIGNED_INTEGER = 1009;
const ERR_INVALID_SIZE = 1010;
const ERR_INVALID_LARGE_VALUE = 1011;
const ERR_INVALID_BLOCK = 1012;
const ERR_INVALID_TYPE_ABI = 1013;
const ERR_INVALID_NIBBLE_WIDTH = 1014;
const ERR_INVALID_INTEGER = 1015;
const ERR_VALIDATION = 1100;
const ERR_CORE_HARDFORK_MISMATCH = 1101;
const ERR_CORE_CHAIN_MISMATCH = 1102;
const ERR_SCHEMA_FORMAT = 1200;
const ERR_RPC_INVALID_JSON = -32700;
const ERR_RPC_INVALID_REQUEST = -32600;
const ERR_RPC_INVALID_METHOD = -32601;
const ERR_RPC_INVALID_PARAMS = -32602;
const ERR_RPC_INTERNAL_ERROR = -32603;
const ERR_RPC_INVALID_INPUT = -32000;
const ERR_RPC_MISSING_RESOURCE = -32001;
const ERR_RPC_UNAVAILABLE_RESOURCE = -32002;
const ERR_RPC_TRANSACTION_REJECTED = -32003;
const ERR_RPC_UNSUPPORTED_METHOD = -32004;
const ERR_RPC_LIMIT_EXCEEDED = -32005;
const ERR_RPC_NOT_SUPPORTED = -32006; //# sourceMappingURL=error_codes.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "BaseWeb3Error": (()=>BaseWeb3Error),
    "InvalidValueError": (()=>InvalidValueError),
    "MultipleErrors": (()=>MultipleErrors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
;
class BaseWeb3Error extends Error {
    /**
     * @deprecated Use the `cause` property instead.
     */ get innerError() {
        // eslint-disable-next-line no-use-before-define
        if (this.cause instanceof MultipleErrors) {
            return this.cause.errors;
        }
        return this.cause;
    }
    /**
     * @deprecated Use the `cause` property instead.
     */ set innerError(cause) {
        if (Array.isArray(cause)) {
            // eslint-disable-next-line no-use-before-define
            this.cause = new MultipleErrors(cause);
        } else {
            this.cause = cause;
        }
    }
    constructor(msg, cause){
        super(msg);
        if (Array.isArray(cause)) {
            // eslint-disable-next-line no-use-before-define
            this.cause = new MultipleErrors(cause);
        } else {
            this.cause = cause;
        }
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(new.target.constructor);
        } else {
            this.stack = new Error().stack;
        }
    }
    static convertToString(value, unquotValue = false) {
        // Using "null" value intentionally for validation
        // eslint-disable-next-line no-null/no-null
        if (value === null || value === undefined) return 'undefined';
        const result = JSON.stringify(value, (_, v)=>typeof v === 'bigint' ? v.toString() : v);
        return unquotValue && [
            'bigint',
            'string'
        ].includes(typeof value) ? result.replace(/['\\"]+/g, '') : result;
    }
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            message: this.message,
            cause: this.cause,
            // deprecated
            innerError: this.cause
        };
    }
}
class MultipleErrors extends BaseWeb3Error {
    constructor(errors){
        super(`Multiple errors occurred: [${errors.map((e)=>e.message).join('], [')}]`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_MULTIPLE_ERRORS"];
        this.errors = errors;
    }
}
class InvalidValueError extends BaseWeb3Error {
    constructor(value, msg){
        super(`Invalid value given "${BaseWeb3Error.convertToString(value, true)}". Error: ${msg}.`);
        this.name = this.constructor.name;
    }
} //# sourceMappingURL=web3_error_base.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/account_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "IVLengthError": (()=>IVLengthError),
    "InvalidKdfError": (()=>InvalidKdfError),
    "InvalidPasswordError": (()=>InvalidPasswordError),
    "InvalidPrivateKeyError": (()=>InvalidPrivateKeyError),
    "InvalidSignatureError": (()=>InvalidSignatureError),
    "KeyDerivationError": (()=>KeyDerivationError),
    "KeyStoreVersionError": (()=>KeyStoreVersionError),
    "PBKDF2IterationsError": (()=>PBKDF2IterationsError),
    "PrivateKeyLengthError": (()=>PrivateKeyLengthError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class PrivateKeyLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(`Private key must be 32 bytes.`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_PRIVATE_KEY_LENGTH"];
    }
}
class InvalidPrivateKeyError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(`Invalid Private Key, Not a valid string or uint8Array`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_PRIVATE_KEY"];
    }
}
class InvalidSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(errorDetails){
        super(`"${errorDetails}"`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_SIGNATURE"];
    }
}
class InvalidKdfError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(`Invalid key derivation function`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_UNSUPPORTED_KDF"];
    }
}
class KeyDerivationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(`Key derivation failed - possibly wrong password`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_KEY_DERIVATION_FAIL"];
    }
}
class KeyStoreVersionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('Unsupported key store version');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_KEY_VERSION_UNSUPPORTED"];
    }
}
class InvalidPasswordError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('Password cannot be empty');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_PASSWORD"];
    }
}
class IVLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('Initialization vector must be 16 bytes');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_IV_LENGTH"];
    }
}
class PBKDF2IterationsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('c > 1000, pbkdf2 is less secure with less iterations');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_PBKDF2_ITERATIONS"];
    }
} //# sourceMappingURL=account_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/connection_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ConnectionCloseError": (()=>ConnectionCloseError),
    "ConnectionError": (()=>ConnectionError),
    "ConnectionNotOpenError": (()=>ConnectionNotOpenError),
    "ConnectionTimeoutError": (()=>ConnectionTimeoutError),
    "InvalidConnectionError": (()=>InvalidConnectionError),
    "MaxAttemptsReachedOnReconnectingError": (()=>MaxAttemptsReachedOnReconnectingError),
    "PendingRequestsOnReconnectingError": (()=>PendingRequestsOnReconnectingError),
    "RequestAlreadySentError": (()=>RequestAlreadySentError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class ConnectionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(message, event){
        super(message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN"];
        if (event) {
            this.errorCode = event.code;
            this.errorReason = event.reason;
        }
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            errorCode: this.errorCode,
            errorReason: this.errorReason
        });
    }
}
class InvalidConnectionError extends ConnectionError {
    constructor(host, event){
        super(`CONNECTION ERROR: Couldn't connect to node ${host}.`, event);
        this.host = host;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN_INVALID"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            host: this.host
        });
    }
}
class ConnectionTimeoutError extends ConnectionError {
    constructor(duration){
        super(`CONNECTION TIMEOUT: timeout of ${duration}ms achieved`);
        this.duration = duration;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN_TIMEOUT"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            duration: this.duration
        });
    }
}
class ConnectionNotOpenError extends ConnectionError {
    constructor(event){
        super('Connection not open', event);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN_NOT_OPEN"];
    }
}
class ConnectionCloseError extends ConnectionError {
    constructor(event){
        var _a, _b;
        super(`CONNECTION ERROR: The connection got closed with the close code ${(_a = event === null || event === void 0 ? void 0 : event.code) !== null && _a !== void 0 ? _a : ''} and the following reason string ${(_b = event === null || event === void 0 ? void 0 : event.reason) !== null && _b !== void 0 ? _b : ''}`, event);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN_CLOSE"];
    }
}
class MaxAttemptsReachedOnReconnectingError extends ConnectionError {
    constructor(numberOfAttempts){
        super(`Maximum number of reconnect attempts reached! (${numberOfAttempts})`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN_MAX_ATTEMPTS"];
    }
}
class PendingRequestsOnReconnectingError extends ConnectionError {
    constructor(){
        super('CONNECTION ERROR: Provider started to reconnect before the response got received!');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONN_PENDING_REQUESTS"];
    }
}
class RequestAlreadySentError extends ConnectionError {
    constructor(id){
        super(`Request already sent with following id: ${id}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_REQ_ALREADY_SENT"];
    }
} //# sourceMappingURL=connection_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ContractEventDoesNotExistError": (()=>ContractEventDoesNotExistError),
    "ContractExecutionError": (()=>ContractExecutionError),
    "ContractInstantiationError": (()=>ContractInstantiationError),
    "ContractMissingABIError": (()=>ContractMissingABIError),
    "ContractMissingDeployDataError": (()=>ContractMissingDeployDataError),
    "ContractNoAddressDefinedError": (()=>ContractNoAddressDefinedError),
    "ContractNoFromAddressDefinedError": (()=>ContractNoFromAddressDefinedError),
    "ContractOnceRequiresCallbackError": (()=>ContractOnceRequiresCallbackError),
    "ContractReservedEventError": (()=>ContractReservedEventError),
    "ContractTransactionDataAndInputError": (()=>ContractTransactionDataAndInputError),
    "Eip838ExecutionError": (()=>Eip838ExecutionError),
    "ResolverMethodMissingError": (()=>ResolverMethodMissingError),
    "Web3ContractError": (()=>Web3ContractError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class Web3ContractError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(message, receipt){
        super(message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT"];
        this.receipt = receipt;
    }
}
class ResolverMethodMissingError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(address, name){
        super(`The resolver at ${address} does not implement requested method: "${name}".`);
        this.address = address;
        this.name = name;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_RESOLVER_MISSING"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            address: this.address,
            name: this.name
        });
    }
}
class ContractMissingABIError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('You must provide the json interface of the contract when instantiating a contract object.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_ABI_MISSING"];
    }
}
class ContractOnceRequiresCallbackError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('Once requires a callback as the second parameter.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_REQUIRED_CALLBACK"];
    }
}
class ContractEventDoesNotExistError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(eventName){
        super(`Event "${eventName}" doesn't exist in this contract.`);
        this.eventName = eventName;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_EVENT_NOT_EXISTS"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            eventName: this.eventName
        });
    }
}
class ContractReservedEventError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(type){
        super(`Event "${type}" doesn't exist in this contract.`);
        this.type = type;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_RESERVED_EVENT"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            type: this.type
        });
    }
}
class ContractMissingDeployDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(`No "data" specified in neither the given options, nor the default options.`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_MISSING_DEPLOY_DATA"];
    }
}
class ContractNoAddressDefinedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super("This contract object doesn't have address set yet, please set an address first.");
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_MISSING_ADDRESS"];
    }
}
class ContractNoFromAddressDefinedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('No "from" address specified in neither the given options, nor the default options.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_MISSING_FROM_ADDRESS"];
    }
}
class ContractInstantiationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_INSTANTIATION"];
    }
}
class Eip838ExecutionError extends Web3ContractError {
    constructor(error){
        super(error.message || 'Error');
        this.name = 'name' in error && error.name || this.constructor.name;
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        this.stack = 'stack' in error && error.stack || undefined;
        this.code = error.code;
        // get embedded error details got from some providers like MetaMask
        // and set this.data from the inner error data for easier read.
        // note: the data is a hex string inside either:
        //	 error.data, error.data.data or error.data.originalError.data (https://github.com/web3/web3.js/issues/4454#issuecomment-1485953455)
        if (typeof error.data === 'object') {
            let originalError;
            if (error.data && 'originalError' in error.data) {
                originalError = error.data.originalError;
            } else {
                // Ganache has no `originalError` sub-object unlike others
                originalError = error.data;
            }
            this.data = originalError.data;
            this.cause = new Eip838ExecutionError(originalError);
        } else {
            this.data = error.data;
        }
    }
    setDecodedProperties(errorName, errorSignature, errorArgs) {
        this.errorName = errorName;
        this.errorSignature = errorSignature;
        this.errorArgs = errorArgs;
    }
    toJSON() {
        let json = Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data
        });
        if (this.errorName) {
            json = Object.assign(Object.assign({}, json), {
                errorName: this.errorName,
                errorSignature: this.errorSignature,
                errorArgs: this.errorArgs
            });
        }
        return json;
    }
}
class ContractExecutionError extends Web3ContractError {
    constructor(rpcError){
        super('Error happened while trying to execute a function inside a smart contract');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_EXECUTION_REVERTED"];
        this.cause = new Eip838ExecutionError(rpcError);
    }
}
class ContractTransactionDataAndInputError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`data: ${(_a = value.data) !== null && _a !== void 0 ? _a : 'undefined'}, input: ${(_b = value.input) !== null && _b !== void 0 ? _b : 'undefined'}`, 'You can\'t have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CONTRACT_TX_DATA_AND_INPUT"];
    }
} //# sourceMappingURL=contract_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/ens_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "ENSCheckInterfaceSupportError": (()=>ENSCheckInterfaceSupportError),
    "ENSNetworkNotSyncedError": (()=>ENSNetworkNotSyncedError),
    "ENSUnsupportedNetworkError": (()=>ENSUnsupportedNetworkError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class ENSCheckInterfaceSupportError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(errorDetails){
        super(`ENS resolver check interface support error. "${errorDetails}"`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_ENS_CHECK_INTERFACE_SUPPORT"];
    }
}
class ENSUnsupportedNetworkError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(networkType){
        super(`ENS is not supported on network ${networkType}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_ENS_UNSUPPORTED_NETWORK"];
    }
}
class ENSNetworkNotSyncedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(`Network not synced`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_ENS_NETWORK_NOT_SYNCED"];
    }
} //# sourceMappingURL=ens_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "AbiError": (()=>AbiError),
    "ExistingPluginNamespaceError": (()=>ExistingPluginNamespaceError),
    "FormatterError": (()=>FormatterError),
    "InvalidMethodParamsError": (()=>InvalidMethodParamsError),
    "InvalidNumberOfParamsError": (()=>InvalidNumberOfParamsError),
    "MethodNotImplementedError": (()=>MethodNotImplementedError),
    "OperationAbortError": (()=>OperationAbortError),
    "OperationTimeoutError": (()=>OperationTimeoutError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class InvalidNumberOfParamsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(got, expected, method){
        super(`Invalid number of parameters for "${method}". Got "${got}" expected "${expected}"!`);
        this.got = got;
        this.expected = expected;
        this.method = method;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_PARAM"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            got: this.got,
            expected: this.expected,
            method: this.method
        });
    }
}
class InvalidMethodParamsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(hint){
        super(`Invalid parameters passed. "${typeof hint !== 'undefined' ? hint : ''}"`);
        this.hint = hint;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_METHOD_PARAMS"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            hint: this.hint
        });
    }
}
class FormatterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_FORMATTERS"];
    }
}
class MethodNotImplementedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super("The method you're trying to call is not implemented.");
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_METHOD_NOT_IMPLEMENTED"];
    }
}
class OperationTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_OPERATION_TIMEOUT"];
    }
}
class OperationAbortError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_OPERATION_ABORT"];
    }
}
class AbiError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(message, props){
        super(message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_ABI_ENCODING"];
        this.props = props !== null && props !== void 0 ? props : {};
    }
}
class ExistingPluginNamespaceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(pluginNamespace){
        super(`A plugin with the namespace: ${pluginNamespace} has already been registered.`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_EXISTING_PLUGIN_NAMESPACE"];
    }
} //# sourceMappingURL=generic_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/provider_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "InvalidClientError": (()=>InvalidClientError),
    "InvalidProviderError": (()=>InvalidProviderError),
    "ProviderError": (()=>ProviderError),
    "SubscriptionError": (()=>SubscriptionError),
    "Web3WSProviderError": (()=>Web3WSProviderError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class ProviderError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_PROVIDER"];
    }
}
class InvalidProviderError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(clientUrl){
        super(`Provider with url "${clientUrl}" is not set or invalid`);
        this.clientUrl = clientUrl;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_PROVIDER"];
    }
}
class InvalidClientError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(clientUrl){
        super(`Client URL "${clientUrl}" is invalid.`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_CLIENT"];
    }
}
class SubscriptionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_SUBSCRIPTION"];
    }
}
class Web3WSProviderError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_WS_PROVIDER"]; // this had duplicate code with generic provider
    }
} //# sourceMappingURL=provider_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/signature_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "SignatureError": (()=>SignatureError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class SignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super(...arguments);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_SIGNATURE_FAILED"];
    }
} //# sourceMappingURL=signature_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "ChainIdMismatchError": (()=>ChainIdMismatchError),
    "ChainMismatchError": (()=>ChainMismatchError),
    "CommonOrChainAndHardforkError": (()=>CommonOrChainAndHardforkError),
    "ContractCodeNotStoredError": (()=>ContractCodeNotStoredError),
    "Eip1559GasPriceError": (()=>Eip1559GasPriceError),
    "Eip1559NotSupportedError": (()=>Eip1559NotSupportedError),
    "HardforkMismatchError": (()=>HardforkMismatchError),
    "InvalidGasOrGasPrice": (()=>InvalidGasOrGasPrice),
    "InvalidMaxPriorityFeePerGasOrMaxFeePerGas": (()=>InvalidMaxPriorityFeePerGasOrMaxFeePerGas),
    "InvalidNonceOrChainIdError": (()=>InvalidNonceOrChainIdError),
    "InvalidPropertiesForTransactionTypeError": (()=>InvalidPropertiesForTransactionTypeError),
    "InvalidTransactionCall": (()=>InvalidTransactionCall),
    "InvalidTransactionObjectError": (()=>InvalidTransactionObjectError),
    "InvalidTransactionWithReceiver": (()=>InvalidTransactionWithReceiver),
    "InvalidTransactionWithSender": (()=>InvalidTransactionWithSender),
    "LocalWalletNotAvailableError": (()=>LocalWalletNotAvailableError),
    "MissingChainOrHardforkError": (()=>MissingChainOrHardforkError),
    "MissingCustomChainError": (()=>MissingCustomChainError),
    "MissingCustomChainIdError": (()=>MissingCustomChainIdError),
    "MissingGasError": (()=>MissingGasError),
    "MissingGasInnerError": (()=>MissingGasInnerError),
    "NoContractAddressFoundError": (()=>NoContractAddressFoundError),
    "RevertInstructionError": (()=>RevertInstructionError),
    "TransactionBlockTimeoutError": (()=>TransactionBlockTimeoutError),
    "TransactionDataAndInputError": (()=>TransactionDataAndInputError),
    "TransactionError": (()=>TransactionError),
    "TransactionGasMismatchError": (()=>TransactionGasMismatchError),
    "TransactionGasMismatchInnerError": (()=>TransactionGasMismatchInnerError),
    "TransactionMissingReceiptOrBlockHashError": (()=>TransactionMissingReceiptOrBlockHashError),
    "TransactionNotFound": (()=>TransactionNotFound),
    "TransactionOutOfGasError": (()=>TransactionOutOfGasError),
    "TransactionPollingTimeoutError": (()=>TransactionPollingTimeoutError),
    "TransactionReceiptMissingBlockNumberError": (()=>TransactionReceiptMissingBlockNumberError),
    "TransactionRevertInstructionError": (()=>TransactionRevertInstructionError),
    "TransactionRevertWithCustomError": (()=>TransactionRevertWithCustomError),
    "TransactionRevertedWithoutReasonError": (()=>TransactionRevertedWithoutReasonError),
    "TransactionSendTimeoutError": (()=>TransactionSendTimeoutError),
    "TransactionSigningError": (()=>TransactionSigningError),
    "UnableToPopulateNonceError": (()=>UnableToPopulateNonceError),
    "UndefinedRawTransactionError": (()=>UndefinedRawTransactionError),
    "UnsupportedFeeMarketError": (()=>UnsupportedFeeMarketError),
    "UnsupportedTransactionTypeError": (()=>UnsupportedTransactionTypeError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class TransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(message, receipt){
        super(message);
        this.receipt = receipt;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            receipt: this.receipt
        });
    }
}
class RevertInstructionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(reason, signature){
        super(`Your request got reverted with the following reason string: ${reason}`);
        this.reason = reason;
        this.signature = signature;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_REVERT_INSTRUCTION"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            signature: this.signature
        });
    }
}
class TransactionRevertInstructionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(reason, signature, receipt, data){
        super(`Transaction has been reverted by the EVM${receipt === undefined ? '' : `:\n ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"].convertToString(receipt)}`}`);
        this.reason = reason;
        this.signature = signature;
        this.receipt = receipt;
        this.data = data;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_REVERT_TRANSACTION"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data
        });
    }
}
class TransactionRevertWithCustomError extends TransactionRevertInstructionError {
    constructor(reason, customErrorName, customErrorDecodedSignature, customErrorArguments, signature, receipt, data){
        super(reason);
        this.reason = reason;
        this.customErrorName = customErrorName;
        this.customErrorDecodedSignature = customErrorDecodedSignature;
        this.customErrorArguments = customErrorArguments;
        this.signature = signature;
        this.receipt = receipt;
        this.data = data;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            customErrorName: this.customErrorName,
            customErrorDecodedSignature: this.customErrorDecodedSignature,
            customErrorArguments: this.customErrorArguments,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data
        });
    }
}
class NoContractAddressFoundError extends TransactionError {
    constructor(receipt){
        super("The transaction receipt didn't contain a contract address.", receipt);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_NO_CONTRACT_ADDRESS"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            receipt: this.receipt
        });
    }
}
class ContractCodeNotStoredError extends TransactionError {
    constructor(receipt){
        super("The contract code couldn't be stored, please check your gas limit.", receipt);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_CONTRACT_NOT_STORED"];
    }
}
class TransactionRevertedWithoutReasonError extends TransactionError {
    constructor(receipt){
        super(`Transaction has been reverted by the EVM${receipt === undefined ? '' : `:\n ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"].convertToString(receipt)}`}`, receipt);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_REVERT_WITHOUT_REASON"];
    }
}
class TransactionOutOfGasError extends TransactionError {
    constructor(receipt){
        super(`Transaction ran out of gas. Please provide more gas:\n ${JSON.stringify(receipt, undefined, 2)}`, receipt);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_OUT_OF_GAS"];
    }
}
class UndefinedRawTransactionError extends TransactionError {
    constructor(){
        super(`Raw transaction undefined`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RAW_TX_UNDEFINED"];
    }
}
class TransactionNotFound extends TransactionError {
    constructor(){
        super('Transaction not found');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_NOT_FOUND"];
    }
}
class InvalidTransactionWithSender extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid transaction with invalid sender');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_SENDER"];
    }
}
class InvalidTransactionWithReceiver extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid transaction with invalid receiver');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_RECEIVER"];
    }
}
class InvalidTransactionCall extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid transaction call');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_CALL"];
    }
}
class MissingCustomChainError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super('MissingCustomChainError', 'If tx.common is provided it must have tx.common.customChain');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_MISSING_CUSTOM_CHAIN"];
    }
}
class MissingCustomChainIdError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super('MissingCustomChainIdError', 'If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_MISSING_CUSTOM_CHAIN_ID"];
    }
}
class ChainIdMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(JSON.stringify(value), // https://github.com/ChainSafe/web3.js/blob/8783f4d64e424456bdc53b34ef1142d0a7cee4d7/packages/web3-eth-accounts/src/index.js#L176
        'Chain Id doesnt match in tx.chainId tx.common.customChain.chainId');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_CHAIN_ID_MISMATCH"];
    }
}
class ChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(JSON.stringify(value), 'Chain doesnt match in tx.chain tx.common.basechain');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_CHAIN_MISMATCH"];
    }
}
class HardforkMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(JSON.stringify(value), 'hardfork doesnt match in tx.hardfork tx.common.hardfork');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_HARDFORK_MISMATCH"];
    }
}
class CommonOrChainAndHardforkError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super('CommonOrChainAndHardforkError', 'Please provide the common object or the chain and hardfork property but not all together.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_CHAIN_INFO"];
    }
}
class MissingChainOrHardforkError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super('MissingChainOrHardforkError', `When specifying chain and hardfork, both values must be defined. Received "chain": ${(_a = value.chain) !== null && _a !== void 0 ? _a : 'undefined'}, "hardfork": ${(_b = value.hardfork) !== null && _b !== void 0 ? _b : 'undefined'}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_MISSING_CHAIN_INFO"];
    }
}
class MissingGasInnerError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_MISSING_GAS_INNER_ERROR"];
    }
}
class MissingGasError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b, _c, _d;
        super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : 'undefined'}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : 'undefined'}, maxPriorityFeePerGas: ${(_c = value.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : 'undefined'}, maxFeePerGas: ${(_d = value.maxFeePerGas) !== null && _d !== void 0 ? _d : 'undefined'}`, '"gas" is missing');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_MISSING_GAS"];
        this.cause = new MissingGasInnerError();
    }
}
class TransactionGasMismatchInnerError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(){
        super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_GAS_MISMATCH_INNER_ERROR"];
    }
}
class TransactionGasMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b, _c, _d;
        super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : 'undefined'}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : 'undefined'}, maxPriorityFeePerGas: ${(_c = value.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : 'undefined'}, maxFeePerGas: ${(_d = value.maxFeePerGas) !== null && _d !== void 0 ? _d : 'undefined'}`, 'transaction must specify legacy or fee market gas properties, not both');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_GAS_MISMATCH"];
        this.cause = new TransactionGasMismatchInnerError();
    }
}
class InvalidGasOrGasPrice extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : 'undefined'}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : 'undefined'}`, 'Gas or gasPrice is lower than 0');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_LEGACY_GAS"];
    }
}
class InvalidMaxPriorityFeePerGasOrMaxFeePerGas extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`maxPriorityFeePerGas: ${(_a = value.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : 'undefined'}, maxFeePerGas: ${(_b = value.maxFeePerGas) !== null && _b !== void 0 ? _b : 'undefined'}`, 'maxPriorityFeePerGas or maxFeePerGas is lower than 0');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_FEE_MARKET_GAS"];
    }
}
class Eip1559GasPriceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, "eip-1559 transactions don't support gasPrice");
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_FEE_MARKET_GAS_PRICE"];
    }
}
class UnsupportedFeeMarketError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`maxPriorityFeePerGas: ${(_a = value.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : 'undefined'}, maxFeePerGas: ${(_b = value.maxFeePerGas) !== null && _b !== void 0 ? _b : 'undefined'}`, "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas");
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_LEGACY_FEE_MARKET"];
    }
}
class InvalidTransactionObjectError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid transaction object');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_OBJECT"];
    }
}
class InvalidNonceOrChainIdError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`nonce: ${(_a = value.nonce) !== null && _a !== void 0 ? _a : 'undefined'}, chainId: ${(_b = value.chainId) !== null && _b !== void 0 ? _b : 'undefined'}`, 'Nonce or chainId is lower than 0');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_NONCE_OR_CHAIN_ID"];
    }
}
class UnableToPopulateNonceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super('UnableToPopulateNonceError', 'unable to populate nonce, no from address available');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_UNABLE_TO_POPULATE_NONCE"];
    }
}
class Eip1559NotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super('Eip1559NotSupportedError', "Network doesn't support eip-1559");
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_UNSUPPORTED_EIP_1559"];
    }
}
class UnsupportedTransactionTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'unsupported transaction type');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_UNSUPPORTED_TYPE"];
    }
}
class TransactionDataAndInputError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`data: ${(_a = value.data) !== null && _a !== void 0 ? _a : 'undefined'}, input: ${(_b = value.input) !== null && _b !== void 0 ? _b : 'undefined'}`, 'You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_DATA_AND_INPUT"];
    }
}
class TransactionSendTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(value){
        super(`The connected Ethereum Node did not respond within ${value.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!\n\tTransaction Hash: ${value.transactionHash ? value.transactionHash.toString() : 'not available'}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_SEND_TIMEOUT"];
    }
}
function transactionTimeoutHint(transactionHash) {
    return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!\n\tTransaction Hash: ${transactionHash ? transactionHash.toString() : 'not available'}`;
}
class TransactionPollingTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(value){
        super(`Transaction was not mined within ${value.numberOfSeconds} seconds. ${transactionTimeoutHint(value.transactionHash)}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_POLLING_TIMEOUT"];
    }
}
class TransactionBlockTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(value){
        super(`Transaction started at ${value.starterBlockNumber} but was not mined within ${value.numberOfBlocks} blocks. ${transactionTimeoutHint(value.transactionHash)}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_BLOCK_TIMEOUT"];
    }
}
class TransactionMissingReceiptOrBlockHashError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        var _a, _b;
        super(`receipt: ${JSON.stringify(value.receipt)}, blockHash: ${(_a = value.blockHash) === null || _a === void 0 ? void 0 : _a.toString()}, transactionHash: ${(_b = value.transactionHash) === null || _b === void 0 ? void 0 : _b.toString()}`, `Receipt missing or blockHash null`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL"];
    }
}
class TransactionReceiptMissingBlockNumberError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(`receipt: ${JSON.stringify(value.receipt)}`, `Receipt missing block number`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER"];
    }
}
class TransactionSigningError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(errorDetails){
        super(`Invalid signature. "${errorDetails}"`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_SIGNING"];
    }
}
class LocalWalletNotAvailableError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(){
        super('LocalWalletNotAvailableError', `Attempted to index account in local wallet, but no wallet is available`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_LOCAL_WALLET_NOT_AVAILABLE"];
    }
}
class InvalidPropertiesForTransactionTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(validationError, txType){
        const invalidPropertyNames = [];
        validationError.forEach((error)=>invalidPropertyNames.push(error.keyword));
        super(`The following properties are invalid for the transaction type ${txType}: ${invalidPropertyNames.join(', ')}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_TX_INVALID_PROPERTIES_FOR_TYPE"];
    }
} //# sourceMappingURL=transaction_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "HexProcessingError": (()=>HexProcessingError),
    "InvalidAddressError": (()=>InvalidAddressError),
    "InvalidBlockError": (()=>InvalidBlockError),
    "InvalidBooleanError": (()=>InvalidBooleanError),
    "InvalidBytesError": (()=>InvalidBytesError),
    "InvalidIntegerError": (()=>InvalidIntegerError),
    "InvalidLargeValueError": (()=>InvalidLargeValueError),
    "InvalidNumberError": (()=>InvalidNumberError),
    "InvalidSizeError": (()=>InvalidSizeError),
    "InvalidStringError": (()=>InvalidStringError),
    "InvalidTypeAbiInputError": (()=>InvalidTypeAbiInputError),
    "InvalidTypeError": (()=>InvalidTypeError),
    "InvalidUnitError": (()=>InvalidUnitError),
    "InvalidUnsignedIntegerError": (()=>InvalidUnsignedIntegerError),
    "NibbleWidthError": (()=>NibbleWidthError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class InvalidBytesError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'can not parse as byte data');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_BYTES"];
    }
}
class InvalidNumberError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'can not parse as number data');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_NUMBER"];
    }
}
class InvalidAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid ethereum address');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_ADDRESS"];
    }
}
class InvalidStringError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'not a valid string');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_STRING"];
    }
}
class InvalidUnitError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid unit');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_UNIT"];
    }
}
class InvalidIntegerError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'not a valid unit. Must be a positive integer');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_INTEGER"];
    }
}
class HexProcessingError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'can not be converted to hex');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_HEX"];
    }
}
class NibbleWidthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'value greater than the nibble width');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_NIBBLE_WIDTH"];
    }
}
class InvalidTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid type, type not supported');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_TYPE"];
    }
}
class InvalidBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'not a valid boolean.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_BOOLEAN"];
    }
}
class InvalidUnsignedIntegerError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'not a valid unsigned integer.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_UNSIGNED_INTEGER"];
    }
}
class InvalidSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid size given.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_SIZE"];
    }
}
class InvalidLargeValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'value is larger than size.');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_LARGE_VALUE"];
    }
}
class InvalidBlockError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'invalid string given');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_BLOCK"];
    }
}
class InvalidTypeAbiInputError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidValueError"] {
    constructor(value){
        super(value, 'components found but type is not tuple');
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_TYPE_ABI"];
    }
} //# sourceMappingURL=utils_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "InvalidResponseError": (()=>InvalidResponseError),
    "ResponseError": (()=>ResponseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
;
;
// To avoid circular package dependency, copied to code here. If you update this please update same function in `json_rpc.ts`
const isResponseWithError = (response)=>!Array.isArray(response) && response.jsonrpc === '2.0' && !!response && // eslint-disable-next-line no-null/no-null
    (response.result === undefined || response.result === null) && // JSON RPC consider "null" as valid response
    'error' in response && (typeof response.id === 'number' || typeof response.id === 'string');
const buildErrorMessage = (response)=>isResponseWithError(response) ? response.error.message : '';
class ResponseError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(response, message, request, statusCode){
        var _a;
        super(message !== null && message !== void 0 ? message : `Returned error: ${Array.isArray(response) ? response.map((r)=>buildErrorMessage(r)).join(',') : buildErrorMessage(response)}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RESPONSE"];
        if (!message) {
            this.data = Array.isArray(response) ? response.map((r)=>{
                var _a;
                return (_a = r.error) === null || _a === void 0 ? void 0 : _a.data;
            }) : (_a = response === null || response === void 0 ? void 0 : response.error) === null || _a === void 0 ? void 0 : _a.data;
        }
        this.statusCode = statusCode;
        this.request = request;
        let errorOrErrors;
        if (`error` in response) {
            errorOrErrors = response.error;
        } else if (response instanceof Array) {
            errorOrErrors = response.filter((r)=>r.error).map((r)=>r.error);
        }
        if (Array.isArray(errorOrErrors) && errorOrErrors.length > 0) {
            this.cause = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultipleErrors"](errorOrErrors);
        } else {
            this.cause = errorOrErrors;
        }
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data,
            request: this.request,
            statusCode: this.statusCode
        });
    }
}
class InvalidResponseError extends ResponseError {
    constructor(result, request){
        super(result, undefined, request);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_INVALID_RESPONSE"];
        let errorOrErrors;
        if (`error` in result) {
            errorOrErrors = result.error;
        } else if (result instanceof Array) {
            errorOrErrors = result.map((r)=>r.error);
        }
        if (Array.isArray(errorOrErrors)) {
            this.cause = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultipleErrors"](errorOrErrors);
        } else {
            this.cause = errorOrErrors;
        }
    }
} //# sourceMappingURL=response_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/core_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
*/ /* eslint-disable max-classes-per-file */ __turbopack_esm__({
    "ConfigChainMismatchError": (()=>ConfigChainMismatchError),
    "ConfigHardforkMismatchError": (()=>ConfigHardforkMismatchError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
;
;
class ConfigHardforkMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(defaultHardfork, commonHardFork){
        super(`Web3Config hardfork doesnt match in defaultHardfork ${defaultHardfork} and common.hardfork ${commonHardFork}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CORE_HARDFORK_MISMATCH"];
    }
}
class ConfigChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(defaultHardfork, commonHardFork){
        super(`Web3Config chain doesnt match in defaultHardfork ${defaultHardfork} and common.hardfork ${commonHardFork}`);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_CORE_HARDFORK_MISMATCH"];
    }
} //# sourceMappingURL=core_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_error_messages.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "RpcErrorMessages": (()=>RpcErrorMessages),
    "genericRpcErrorMessageTemplate": (()=>genericRpcErrorMessageTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
;
const genericRpcErrorMessageTemplate = 'An Rpc error has occured with a code of *code*';
const RpcErrorMessages = {
    //  EIP-1474 & JSON RPC 2.0
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_JSON"]]: {
        message: 'Parse error',
        description: 'Invalid JSON'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_REQUEST"]]: {
        message: 'Invalid request',
        description: 'JSON is not a valid request object	'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_METHOD"]]: {
        message: 'Method not found',
        description: 'Method does not exist	'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_PARAMS"]]: {
        message: 'Invalid params',
        description: 'Invalid method parameters'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INTERNAL_ERROR"]]: {
        message: 'Internal error',
        description: 'Internal JSON-RPC error'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_INPUT"]]: {
        message: 'Invalid input',
        description: 'Missing or invalid parameters'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_MISSING_RESOURCE"]]: {
        message: 'Resource not found',
        description: 'Requested resource not found'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNAVAILABLE_RESOURCE"]]: {
        message: 'Resource unavailable',
        description: 'Requested resource not available'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_TRANSACTION_REJECTED"]]: {
        message: 'Transaction rejected',
        description: 'Transaction creation failed'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNSUPPORTED_METHOD"]]: {
        message: 'Method not supported',
        description: 'Method is not implemented'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_LIMIT_EXCEEDED"]]: {
        message: 'Limit exceeded',
        description: 'Request exceeds defined limit'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_NOT_SUPPORTED"]]: {
        message: 'JSON-RPC version not supported',
        description: 'Version of JSON-RPC protocol is not supported'
    },
    // EIP-1193
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONRPC_ERR_REJECTED_REQUEST"]]: {
        name: 'User Rejected Request',
        message: 'The user rejected the request.'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONRPC_ERR_UNAUTHORIZED"]]: {
        name: 'Unauthorized',
        message: 'The requested method and/or account has not been authorized by the user.'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONRPC_ERR_UNSUPPORTED_METHOD"]]: {
        name: 'Unsupported Method',
        message: 'The Provider does not support the requested method.'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONRPC_ERR_DISCONNECTED"]]: {
        name: 'Disconnected',
        message: 'The Provider is disconnected from all chains.'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONRPC_ERR_CHAIN_DISCONNECTED"]]: {
        name: 'Chain Disconnected',
        message: 'The Provider is not connected to the requested chain.'
    },
    // EIP-1193 - CloseEvent
    // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
    '0-999': {
        name: '',
        message: 'Not used.'
    },
    1000: {
        name: 'Normal Closure',
        message: 'The connection successfully completed the purpose for which it was created.'
    },
    1001: {
        name: 'Going Away',
        message: 'The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.'
    },
    1002: {
        name: 'Protocol error',
        message: 'The endpoint is terminating the connection due to a protocol error.'
    },
    1003: {
        name: 'Unsupported Data',
        message: 'The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)'
    },
    1004: {
        name: 'Reserved',
        message: 'Reserved. A meaning might be defined in the future.'
    },
    1005: {
        name: 'No Status Rcvd',
        message: 'Reserved. Indicates that no status code was provided even though one was expected.'
    },
    1006: {
        name: 'Abnormal Closure',
        message: 'Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.'
    },
    1007: {
        name: 'Invalid frame payload data',
        message: 'The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).'
    },
    1008: {
        name: 'Policy Violation',
        message: 'The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.'
    },
    1009: {
        name: 'Message Too Big',
        message: 'The endpoint is terminating the connection because a data frame was received that is too large.'
    },
    1010: {
        name: 'Mandatory Ext.',
        message: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
    },
    1011: {
        name: 'Internal Error',
        message: 'The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.'
    },
    1012: {
        name: 'Service Restart',
        message: 'The server is terminating the connection because it is restarting.'
    },
    1013: {
        name: 'Try Again Later',
        message: 'The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.'
    },
    1014: {
        name: 'Bad Gateway',
        message: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.'
    },
    1015: {
        name: 'TLS handshake',
        message: "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
    },
    '1016-2999': {
        name: '',
        message: 'For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications.'
    },
    '3000-3999': {
        name: '',
        message: 'For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol.'
    },
    '4000-4999': {
        name: '',
        message: "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."
    }
}; //# sourceMappingURL=rpc_error_messages.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "EIP1193ProviderRpcError": (()=>EIP1193ProviderRpcError),
    "InternalError": (()=>InternalError),
    "InvalidInputError": (()=>InvalidInputError),
    "InvalidParamsError": (()=>InvalidParamsError),
    "InvalidRequestError": (()=>InvalidRequestError),
    "LimitExceededError": (()=>LimitExceededError),
    "MethodNotFoundError": (()=>MethodNotFoundError),
    "MethodNotSupported": (()=>MethodNotSupported),
    "ParseError": (()=>ParseError),
    "ResourceUnavailableError": (()=>ResourceUnavailableError),
    "ResourcesNotFoundError": (()=>ResourcesNotFoundError),
    "RpcError": (()=>RpcError),
    "TransactionRejectedError": (()=>TransactionRejectedError),
    "VersionNotSupportedError": (()=>VersionNotSupportedError),
    "rpcErrorsMap": (()=>rpcErrorsMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_error_messages.js [app-ssr] (ecmascript)");
;
;
;
class RpcError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(rpcError, message){
        super(message !== null && message !== void 0 ? message : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genericRpcErrorMessageTemplate"].replace('*code*', rpcError.error.code.toString()));
        this.code = rpcError.error.code;
        this.id = rpcError.id;
        this.jsonrpc = rpcError.jsonrpc;
        this.jsonRpcError = rpcError.error;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            error: this.jsonRpcError,
            id: this.id,
            jsonRpc: this.jsonrpc
        });
    }
}
class EIP1193ProviderRpcError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(code, data){
        var _a, _b, _c, _d;
        if (!code) {
            // this case should ideally not happen
            super();
        } else if ((_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][code]) === null || _a === void 0 ? void 0 : _a.message) {
            super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][code].message);
        } else {
            // Retrieve the status code object for the given code from the table, by searching through the appropriate range
            const statusCodeRange = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"]).find((statusCode)=>typeof statusCode === 'string' && code >= parseInt(statusCode.split('-')[0], 10) && code <= parseInt(statusCode.split('-')[1], 10));
            super((_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][statusCodeRange !== null && statusCodeRange !== void 0 ? statusCodeRange : '']) === null || _b === void 0 ? void 0 : _b.message) !== null && _c !== void 0 ? _c : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genericRpcErrorMessageTemplate"].replace('*code*', (_d = code === null || code === void 0 ? void 0 : code.toString()) !== null && _d !== void 0 ? _d : '""'));
        }
        this.code = code;
        this.data = data;
    }
}
class ParseError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_JSON"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_JSON"];
    }
}
class InvalidRequestError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_REQUEST"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_REQUEST"];
    }
}
class MethodNotFoundError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_METHOD"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_METHOD"];
    }
}
class InvalidParamsError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_PARAMS"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_PARAMS"];
    }
}
class InternalError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INTERNAL_ERROR"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INTERNAL_ERROR"];
    }
}
class InvalidInputError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_INPUT"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_INPUT"];
    }
}
class MethodNotSupported extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNSUPPORTED_METHOD"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNSUPPORTED_METHOD"];
    }
}
class ResourceUnavailableError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNAVAILABLE_RESOURCE"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNAVAILABLE_RESOURCE"];
    }
}
class ResourcesNotFoundError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_MISSING_RESOURCE"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_MISSING_RESOURCE"];
    }
}
class VersionNotSupportedError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_NOT_SUPPORTED"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_NOT_SUPPORTED"];
    }
}
class TransactionRejectedError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_TRANSACTION_REJECTED"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_TRANSACTION_REJECTED"];
    }
}
class LimitExceededError extends RpcError {
    constructor(rpcError){
        super(rpcError, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcErrorMessages"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_LIMIT_EXCEEDED"]].message);
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_LIMIT_EXCEEDED"];
    }
}
const rpcErrorsMap = new Map();
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_JSON"], {
    error: ParseError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_REQUEST"], {
    error: InvalidRequestError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_METHOD"], {
    error: MethodNotFoundError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_PARAMS"], {
    error: InvalidParamsError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INTERNAL_ERROR"], {
    error: InternalError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_INVALID_INPUT"], {
    error: InvalidInputError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNSUPPORTED_METHOD"], {
    error: MethodNotSupported
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_UNAVAILABLE_RESOURCE"], {
    error: ResourceUnavailableError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_TRANSACTION_REJECTED"], {
    error: TransactionRejectedError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_MISSING_RESOURCE"], {
    error: ResourcesNotFoundError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_NOT_SUPPORTED"], {
    error: VersionNotSupportedError
});
rpcErrorsMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_RPC_LIMIT_EXCEEDED"], {
    error: LimitExceededError
}); //# sourceMappingURL=rpc_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/schema_errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "SchemaFormatError": (()=>SchemaFormatError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
;
;
class SchemaFormatError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseWeb3Error"] {
    constructor(type){
        super(`Format for the type ${type} is unsupported`);
        this.type = type;
        this.code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERR_SCHEMA_FORMAT"];
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            type: this.type
        });
    }
} //# sourceMappingURL=schema_errors.js.map
}}),
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$error_codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/error_codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$web3_error_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/web3_error_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/account_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$connection_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/connection_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$ens_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/ens_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/provider_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$signature_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/signature_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$utils_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/utils_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$core_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/core_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_error_messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_error_messages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$schema_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/schema_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=acaa1_web3-errors_lib_esm_4d76bf._.js.map