(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/e6c9d_@web3modal_wallet_dist_esm_90073e._.js", {

"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SECURE_SITE_SDK": (()=>SECURE_SITE_SDK),
    "W3mFrameConstants": (()=>W3mFrameConstants),
    "W3mFrameRpcConstants": (()=>W3mFrameRpcConstants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const SECURE_SITE_SDK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_SDK_URL'] || 'https://secure.walletconnect.com/sdk';
const W3mFrameConstants = {
    APP_EVENT_KEY: '@w3m-app/',
    FRAME_EVENT_KEY: '@w3m-frame/',
    RPC_METHOD_KEY: 'RPC_',
    STORAGE_KEY: '@w3m-storage/',
    SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
    EMAIL_LOGIN_USED_KEY: 'EMAIL_LOGIN_USED_KEY',
    LAST_USED_CHAIN_KEY: 'LAST_USED_CHAIN_KEY',
    LAST_EMAIL_LOGIN_TIME: 'LAST_EMAIL_LOGIN_TIME',
    EMAIL: 'EMAIL',
    PREFERRED_ACCOUNT_TYPE: 'PREFERRED_ACCOUNT_TYPE',
    SMART_ACCOUNT_ENABLED: 'SMART_ACCOUNT_ENABLED',
    SMART_ACCOUNT_ENABLED_NETWORKS: 'SMART_ACCOUNT_ENABLED_NETWORKS',
    APP_SWITCH_NETWORK: '@w3m-app/SWITCH_NETWORK',
    APP_CONNECT_EMAIL: '@w3m-app/CONNECT_EMAIL',
    APP_CONNECT_DEVICE: '@w3m-app/CONNECT_DEVICE',
    APP_CONNECT_OTP: '@w3m-app/CONNECT_OTP',
    APP_GET_USER: '@w3m-app/GET_USER',
    APP_SIGN_OUT: '@w3m-app/SIGN_OUT',
    APP_IS_CONNECTED: '@w3m-app/IS_CONNECTED',
    APP_GET_CHAIN_ID: '@w3m-app/GET_CHAIN_ID',
    APP_RPC_REQUEST: '@w3m-app/RPC_REQUEST',
    APP_UPDATE_EMAIL: '@w3m-app/UPDATE_EMAIL',
    APP_UPDATE_EMAIL_PRIMARY_OTP: '@w3m-app/UPDATE_EMAIL_PRIMARY_OTP',
    APP_UPDATE_EMAIL_SECONDARY_OTP: '@w3m-app/UPDATE_EMAIL_SECONDARY_OTP',
    APP_AWAIT_UPDATE_EMAIL: '@w3m-app/AWAIT_UPDATE_EMAIL',
    APP_SYNC_THEME: '@w3m-app/SYNC_THEME',
    APP_SYNC_DAPP_DATA: '@w3m-app/SYNC_DAPP_DATA',
    APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: '@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS',
    APP_INIT_SMART_ACCOUNT: '@w3m-app/INIT_SMART_ACCOUNT',
    APP_SET_PREFERRED_ACCOUNT: '@w3m-app/SET_PREFERRED_ACCOUNT',
    FRAME_SWITCH_NETWORK_ERROR: '@w3m-frame/SWITCH_NETWORK_ERROR',
    FRAME_SWITCH_NETWORK_SUCCESS: '@w3m-frame/SWITCH_NETWORK_SUCCESS',
    FRAME_CONNECT_EMAIL_ERROR: '@w3m-frame/CONNECT_EMAIL_ERROR',
    FRAME_CONNECT_EMAIL_SUCCESS: '@w3m-frame/CONNECT_EMAIL_SUCCESS',
    FRAME_CONNECT_DEVICE_ERROR: '@w3m-frame/CONNECT_DEVICE_ERROR',
    FRAME_CONNECT_DEVICE_SUCCESS: '@w3m-frame/CONNECT_DEVICE_SUCCESS',
    FRAME_CONNECT_OTP_SUCCESS: '@w3m-frame/CONNECT_OTP_SUCCESS',
    FRAME_CONNECT_OTP_ERROR: '@w3m-frame/CONNECT_OTP_ERROR',
    FRAME_GET_USER_SUCCESS: '@w3m-frame/GET_USER_SUCCESS',
    FRAME_GET_USER_ERROR: '@w3m-frame/GET_USER_ERROR',
    FRAME_SIGN_OUT_SUCCESS: '@w3m-frame/SIGN_OUT_SUCCESS',
    FRAME_SIGN_OUT_ERROR: '@w3m-frame/SIGN_OUT_ERROR',
    FRAME_IS_CONNECTED_SUCCESS: '@w3m-frame/IS_CONNECTED_SUCCESS',
    FRAME_IS_CONNECTED_ERROR: '@w3m-frame/IS_CONNECTED_ERROR',
    FRAME_GET_CHAIN_ID_SUCCESS: '@w3m-frame/GET_CHAIN_ID_SUCCESS',
    FRAME_GET_CHAIN_ID_ERROR: '@w3m-frame/GET_CHAIN_ID_ERROR',
    FRAME_RPC_REQUEST_SUCCESS: '@w3m-frame/RPC_REQUEST_SUCCESS',
    FRAME_RPC_REQUEST_ERROR: '@w3m-frame/RPC_REQUEST_ERROR',
    FRAME_SESSION_UPDATE: '@w3m-frame/SESSION_UPDATE',
    FRAME_UPDATE_EMAIL_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SUCCESS',
    FRAME_UPDATE_EMAIL_ERROR: '@w3m-frame/UPDATE_EMAIL_ERROR',
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS',
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR',
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS',
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: '@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR',
    FRAME_SYNC_THEME_SUCCESS: '@w3m-frame/SYNC_THEME_SUCCESS',
    FRAME_SYNC_THEME_ERROR: '@w3m-frame/SYNC_THEME_ERROR',
    FRAME_SYNC_DAPP_DATA_SUCCESS: '@w3m-frame/SYNC_DAPP_DATA_SUCCESS',
    FRAME_SYNC_DAPP_DATA_ERROR: '@w3m-frame/SYNC_DAPP_DATA_ERROR',
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS',
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: '@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR',
    FRAME_INIT_SMART_ACCOUNT_SUCCESS: '@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS',
    FRAME_INIT_SMART_ACCOUNT_ERROR: '@w3m-frame/INIT_SMART_ACCOUNT_ERROR',
    FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: '@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS',
    FRAME_SET_PREFERRED_ACCOUNT_ERROR: '@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR',
    RPC_RESPONSE_TYPE_ERROR: 'RPC_RESPONSE_ERROR',
    RPC_RESPONSE_TYPE_TX: 'RPC_RESPONSE_TRANSACTION_HASH',
    RPC_RESPONSE_TYPE_OBJECT: 'RPC_RESPONSE_OBJECT'
};
const W3mFrameRpcConstants = {
    SAFE_RPC_METHODS: [
        'eth_accounts',
        'eth_blockNumber',
        'eth_call',
        'eth_chainId',
        'eth_estimateGas',
        'eth_feeHistory',
        'eth_gasPrice',
        'eth_getAccount',
        'eth_getBalance',
        'eth_getBlockByHash',
        'eth_getBlockByNumber',
        'eth_getBlockReceipts',
        'eth_getBlockTransactionCountByHash',
        'eth_getBlockTransactionCountByNumber',
        'eth_getCode',
        'eth_getFilterChanges',
        'eth_getFilterLogs',
        'eth_getLogs',
        'eth_getProof',
        'eth_getStorageAt',
        'eth_getTransactionByBlockHashAndIndex',
        'eth_getTransactionByBlockNumberAndIndex',
        'eth_getTransactionByHash',
        'eth_getTransactionCount',
        'eth_getTransactionReceipt',
        'eth_getUncleCountByBlockHash',
        'eth_getUncleCountByBlockNumber',
        'eth_maxPriorityFeePerGas',
        'eth_newBlockFilter',
        'eth_newFilter',
        'eth_newPendingTransactionFilter',
        'eth_sendRawTransaction',
        'eth_syncing',
        'eth_uninstallFilter'
    ],
    NOT_SAFE_RPC_METHODS: [
        'personal_sign',
        'eth_signTypedData_v4',
        'eth_sendTransaction'
    ],
    GET_CHAIN_ID: 'eth_chainId',
    RPC_METHOD_NOT_ALLOWED_MESSAGE: 'Requested RPC call is not allowed',
    RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: 'Action not allowed',
    ACCOUNT_TYPES: {
        EOA: 'eoa',
        SMART_ACCOUNT: 'smartAccount'
    }
}; //# sourceMappingURL=W3mFrameConstants.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameSchema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AppConnectEmailRequest": (()=>AppConnectEmailRequest),
    "AppConnectOtpRequest": (()=>AppConnectOtpRequest),
    "AppGetUserRequest": (()=>AppGetUserRequest),
    "AppSetPreferredAccountRequest": (()=>AppSetPreferredAccountRequest),
    "AppSwitchNetworkRequest": (()=>AppSwitchNetworkRequest),
    "AppSyncDappDataRequest": (()=>AppSyncDappDataRequest),
    "AppSyncThemeRequest": (()=>AppSyncThemeRequest),
    "AppUpdateEmailPrimaryOtpRequest": (()=>AppUpdateEmailPrimaryOtpRequest),
    "AppUpdateEmailRequest": (()=>AppUpdateEmailRequest),
    "AppUpdateEmailSecondaryOtpRequest": (()=>AppUpdateEmailSecondaryOtpRequest),
    "FrameConnectEmailResponse": (()=>FrameConnectEmailResponse),
    "FrameGetChainIdResponse": (()=>FrameGetChainIdResponse),
    "FrameGetSmartAccountEnabledNetworksResponse": (()=>FrameGetSmartAccountEnabledNetworksResponse),
    "FrameGetUserResponse": (()=>FrameGetUserResponse),
    "FrameInitSmartAccountResponse": (()=>FrameInitSmartAccountResponse),
    "FrameIsConnectedResponse": (()=>FrameIsConnectedResponse),
    "FrameSession": (()=>FrameSession),
    "FrameSetPreferredAccountResponse": (()=>FrameSetPreferredAccountResponse),
    "FrameSwitchNetworkResponse": (()=>FrameSwitchNetworkResponse),
    "FrameUpdateEmailResponse": (()=>FrameUpdateEmailResponse),
    "FrameUpdateEmailSecondaryOtpResolver": (()=>FrameUpdateEmailSecondaryOtpResolver),
    "GetTransactionByHashResponse": (()=>GetTransactionByHashResponse),
    "RcpEthGetBlockTransactionCountByHash": (()=>RcpEthGetBlockTransactionCountByHash),
    "RcpEthGetBlockTransactionCountByNumber": (()=>RcpEthGetBlockTransactionCountByNumber),
    "RpcEthAccountsRequest": (()=>RpcEthAccountsRequest),
    "RpcEthBlockNumber": (()=>RpcEthBlockNumber),
    "RpcEthCall": (()=>RpcEthCall),
    "RpcEthChainId": (()=>RpcEthChainId),
    "RpcEthEstimateGas": (()=>RpcEthEstimateGas),
    "RpcEthFeeHistory": (()=>RpcEthFeeHistory),
    "RpcEthGasPrice": (()=>RpcEthGasPrice),
    "RpcEthGetAccount": (()=>RpcEthGetAccount),
    "RpcEthGetBalance": (()=>RpcEthGetBalance),
    "RpcEthGetBlockByNumber": (()=>RpcEthGetBlockByNumber),
    "RpcEthGetBlockReceipts": (()=>RpcEthGetBlockReceipts),
    "RpcEthGetBlockyByHash": (()=>RpcEthGetBlockyByHash),
    "RpcEthGetCode": (()=>RpcEthGetCode),
    "RpcEthGetFilter": (()=>RpcEthGetFilter),
    "RpcEthGetFilterLogs": (()=>RpcEthGetFilterLogs),
    "RpcEthGetLogs": (()=>RpcEthGetLogs),
    "RpcEthGetProof": (()=>RpcEthGetProof),
    "RpcEthGetStorageAt": (()=>RpcEthGetStorageAt),
    "RpcEthGetTransactionByBlockHashAndIndex": (()=>RpcEthGetTransactionByBlockHashAndIndex),
    "RpcEthGetTransactionByBlockNumberAndIndex": (()=>RpcEthGetTransactionByBlockNumberAndIndex),
    "RpcEthGetTransactionByHash": (()=>RpcEthGetTransactionByHash),
    "RpcEthGetTransactionCount": (()=>RpcEthGetTransactionCount),
    "RpcEthGetTransactionReceipt": (()=>RpcEthGetTransactionReceipt),
    "RpcEthGetUncleCountByBlockHash": (()=>RpcEthGetUncleCountByBlockHash),
    "RpcEthGetUncleCountByBlockNumber": (()=>RpcEthGetUncleCountByBlockNumber),
    "RpcEthMaxPriorityFeePerGas": (()=>RpcEthMaxPriorityFeePerGas),
    "RpcEthNewBlockFilter": (()=>RpcEthNewBlockFilter),
    "RpcEthNewFilter": (()=>RpcEthNewFilter),
    "RpcEthNewPendingTransactionFilter": (()=>RpcEthNewPendingTransactionFilter),
    "RpcEthSendRawTransaction": (()=>RpcEthSendRawTransaction),
    "RpcEthSendTransactionRequest": (()=>RpcEthSendTransactionRequest),
    "RpcEthSignTypedDataV4": (()=>RpcEthSignTypedDataV4),
    "RpcEthSyncing": (()=>RpcEthSyncing),
    "RpcPersonalSignRequest": (()=>RpcPersonalSignRequest),
    "RpcResponse": (()=>RpcResponse),
    "RpcUnistallFilter": (()=>RpcUnistallFilter),
    "W3mFrameSchema": (()=>W3mFrameSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
;
const zError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
function zType(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"][key]);
}
const GetTransactionByHashResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    accessList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()),
    blockHash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    blockNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    gas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    maxFeePerGas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    maxPriorityFeePerGas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    r: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    s: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    transactionIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    v: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const AppSwitchNetworkRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number()
});
const AppConnectEmailRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email()
});
const AppConnectOtpRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    otp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const AppGetUserRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number()),
    preferredAccountType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string())
});
const AppUpdateEmailRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email()
});
const AppUpdateEmailPrimaryOtpRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    otp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const AppUpdateEmailSecondaryOtpRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    otp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const AppSyncThemeRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    themeMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].enum([
        'light',
        'dark'
    ])),
    themeVariables: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number()))),
    w3mThemeVariables: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string())
});
const AppSyncDappDataRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
        icons: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string())
    }).optional(),
    sdkVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const AppSetPreferredAccountRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const FrameConnectEmailResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].enum([
        'VERIFY_DEVICE',
        'VERIFY_OTP'
    ])
});
const FrameUpdateEmailResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].enum([
        'VERIFY_PRIMARY_OTP',
        'VERIFY_SECONDARY_OTP'
    ])
});
const FrameGetUserResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number(),
    smartAccountDeployed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].boolean()),
    preferredAccountType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string())
});
const FrameIsConnectedResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    isConnected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].boolean()
});
const FrameGetChainIdResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number()
});
const FrameSwitchNetworkResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number()
});
const FrameUpdateEmailSecondaryOtpResolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    newEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email()
});
const FrameGetSmartAccountEnabledNetworksResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    smartAccountEnabledNetworks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number())
});
const FrameInitSmartAccountResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    isDeployed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].boolean()
});
const FrameSetPreferredAccountResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const RpcResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any();
const RpcEthAccountsRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_accounts')
});
const RpcEthBlockNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_blockNumber')
});
const RpcEthCall = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_call'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthChainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_chainId')
});
const RpcEthEstimateGas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_estimateGas'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthFeeHistory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_feeHistory'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGasPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_gasPrice')
});
const RpcEthGetAccount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getAccount'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetBalance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getBalance'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetBlockyByHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getBlockByHash'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetBlockByNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getBlockByNumber'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetBlockReceipts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getBlockReceipts'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RcpEthGetBlockTransactionCountByHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getBlockTransactionCountByHash'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RcpEthGetBlockTransactionCountByNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getBlockTransactionCountByNumber'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getCode'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getFilterChanges'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetFilterLogs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getFilterLogs'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetLogs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getLogs'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetProof = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getProof'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetStorageAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getStorageAt'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetTransactionByBlockHashAndIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getTransactionByBlockHashAndIndex'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetTransactionByBlockNumberAndIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getTransactionByBlockNumberAndIndex'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetTransactionByHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getTransactionByHash'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetTransactionCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getTransactionCount'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetTransactionReceipt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getTransactionReceipt'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetUncleCountByBlockHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getUncleCountByBlockHash'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthGetUncleCountByBlockNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_getUncleCountByBlockNumber'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthMaxPriorityFeePerGas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_maxPriorityFeePerGas')
});
const RpcEthNewBlockFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_newBlockFilter')
});
const RpcEthNewFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_newFilter'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthNewPendingTransactionFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_newPendingTransactionFilter')
});
const RpcEthSendRawTransaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_sendRawTransaction'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthSyncing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_syncing'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcUnistallFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_uninstallFilter'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcPersonalSignRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('personal_sign'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthSignTypedDataV4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_signTypedData_v4'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const RpcEthSendTransactionRequest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('eth_sendTransaction'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].any())
});
const FrameSession = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const W3mFrameSchema = {
    appEvent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_SWITCH_NETWORK'),
        payload: AppSwitchNetworkRequest
    }).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_CONNECT_EMAIL'),
        payload: AppConnectEmailRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_CONNECT_DEVICE')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_CONNECT_OTP'),
        payload: AppConnectOtpRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_GET_USER'),
        payload: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(AppGetUserRequest)
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_SIGN_OUT')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_IS_CONNECTED'),
        payload: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].optional(FrameSession)
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_GET_CHAIN_ID')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_INIT_SMART_ACCOUNT')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_SET_PREFERRED_ACCOUNT'),
        payload: AppSetPreferredAccountRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_RPC_REQUEST'),
        payload: RpcPersonalSignRequest.or(RpcEthSendTransactionRequest).or(RpcEthAccountsRequest).or(RpcEthBlockNumber).or(RpcEthCall).or(RpcEthChainId).or(RpcEthEstimateGas).or(RpcEthFeeHistory).or(RpcEthGasPrice).or(RpcEthGetAccount).or(RpcEthGetBalance).or(RpcEthGetBlockyByHash).or(RpcEthGetBlockByNumber).or(RpcEthGetBlockReceipts).or(RcpEthGetBlockTransactionCountByHash).or(RcpEthGetBlockTransactionCountByNumber).or(RpcEthGetCode).or(RpcEthGetFilter).or(RpcEthGetFilterLogs).or(RpcEthGetLogs).or(RpcEthGetProof).or(RpcEthGetStorageAt).or(RpcEthGetTransactionByBlockHashAndIndex).or(RpcEthGetTransactionByBlockNumberAndIndex).or(RpcEthGetTransactionByHash).or(RpcEthGetTransactionCount).or(RpcEthGetTransactionReceipt).or(RpcEthGetUncleCountByBlockHash).or(RpcEthGetUncleCountByBlockNumber).or(RpcEthMaxPriorityFeePerGas).or(RpcEthNewBlockFilter).or(RpcEthNewFilter).or(RpcEthNewPendingTransactionFilter).or(RpcEthSendRawTransaction).or(RpcEthSyncing).or(RpcUnistallFilter).or(RpcPersonalSignRequest).or(RpcEthSignTypedDataV4).or(RpcEthSendTransactionRequest)
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_UPDATE_EMAIL'),
        payload: AppUpdateEmailRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_UPDATE_EMAIL_PRIMARY_OTP'),
        payload: AppUpdateEmailPrimaryOtpRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_UPDATE_EMAIL_SECONDARY_OTP'),
        payload: AppUpdateEmailSecondaryOtpRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_SYNC_THEME'),
        payload: AppSyncThemeRequest
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('APP_SYNC_DAPP_DATA'),
        payload: AppSyncDappDataRequest
    })),
    frameEvent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SWITCH_NETWORK_ERROR'),
        payload: zError
    }).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SWITCH_NETWORK_SUCCESS'),
        payload: FrameSwitchNetworkResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_CONNECT_EMAIL_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_CONNECT_EMAIL_SUCCESS'),
        payload: FrameConnectEmailResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_CONNECT_OTP_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_CONNECT_OTP_SUCCESS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_CONNECT_DEVICE_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_CONNECT_DEVICE_SUCCESS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_GET_USER_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_GET_USER_SUCCESS'),
        payload: FrameGetUserResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SIGN_OUT_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SIGN_OUT_SUCCESS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_IS_CONNECTED_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_IS_CONNECTED_SUCCESS'),
        payload: FrameIsConnectedResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_GET_CHAIN_ID_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_GET_CHAIN_ID_SUCCESS'),
        payload: FrameGetChainIdResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_RPC_REQUEST_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_RPC_REQUEST_SUCCESS'),
        payload: RpcResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SESSION_UPDATE'),
        payload: FrameSession
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_UPDATE_EMAIL_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_UPDATE_EMAIL_SUCCESS'),
        payload: FrameUpdateEmailResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS'),
        payload: FrameUpdateEmailSecondaryOtpResolver
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SYNC_THEME_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SYNC_THEME_SUCCESS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SYNC_DAPP_DATA_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SYNC_DAPP_DATA_SUCCESS')
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS'),
        payload: FrameGetSmartAccountEnabledNetworksResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_INIT_SMART_ACCOUNT_ERROR'),
        payload: zError
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SET_PREFERRED_ACCOUNT_SUCCESS'),
        payload: FrameSetPreferredAccountResponse
    })).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        type: zType('FRAME_SET_PREFERRED_ACCOUNT_ERROR'),
        payload: zError
    }))
}; //# sourceMappingURL=W3mFrameSchema.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "W3mFrameStorage": (()=>W3mFrameStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)");
;
;
const W3mFrameStorage = {
    set (key, value) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
            localStorage.setItem(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].STORAGE_KEY}${key}`, value);
        }
    },
    get (key) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
            return localStorage.getItem(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].STORAGE_KEY}${key}`);
        }
        return null;
    },
    delete (key) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
            localStorage.removeItem(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].STORAGE_KEY}${key}`);
        }
    }
}; //# sourceMappingURL=W3mFrameStorage.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/RegexUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RegexUtil": (()=>RegexUtil)
});
const RegexUtil = {
    address: /^0x(?:[A-Fa-f0-9]{40})$/u,
    transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
    signedMessage: /^0x(?:[a-fA-F0-9]{6,})$/u
}; //# sourceMappingURL=RegexUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "W3mFrameHelpers": (()=>W3mFrameHelpers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$RegexUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/RegexUtil.js [app-client] (ecmascript)");
;
;
;
const RESTRICTED_TIMEZONES = [
    'ASIA/SHANGHAI',
    'ASIA/URUMQI',
    'ASIA/CHONGQING',
    'ASIA/HARBIN',
    'ASIA/KASHGAR',
    'ASIA/MACAU',
    'ASIA/HONG_KONG',
    'ASIA/MACAO',
    'ASIA/BEIJING',
    'ASIA/HARBIN'
];
const EMAIL_MINIMUM_TIMEOUT = 30 * 1000;
const W3mFrameHelpers = {
    getBlockchainApiUrl () {
        try {
            const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();
            const capTimeZone = timeZone.toUpperCase();
            return RESTRICTED_TIMEZONES.includes(capTimeZone) ? 'https://rpc.walletconnect.org' : 'https://rpc.walletconnect.com';
        } catch  {
            return false;
        }
    },
    checkIfAllowedToTriggerEmail () {
        const lastEmailLoginTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_EMAIL_LOGIN_TIME);
        if (lastEmailLoginTime) {
            const difference = Date.now() - Number(lastEmailLoginTime);
            if (difference < EMAIL_MINIMUM_TIMEOUT) {
                const cooldownSec = Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1000);
                throw new Error(`Please try again after ${cooldownSec} seconds`);
            }
        }
    },
    getTimeToNextEmailLogin () {
        const lastEmailLoginTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_EMAIL_LOGIN_TIME);
        if (lastEmailLoginTime) {
            const difference = Date.now() - Number(lastEmailLoginTime);
            if (difference < EMAIL_MINIMUM_TIMEOUT) {
                return Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1000);
            }
        }
        return 0;
    },
    checkIfRequestExists (request) {
        const method = this.getRequestMethod(request);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].NOT_SAFE_RPC_METHODS.includes(method) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].SAFE_RPC_METHODS.includes(method);
    },
    getRequestMethod (request) {
        return request?.payload?.method;
    },
    getResponseType (response) {
        const { type, payload } = response;
        const isError = type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_RPC_REQUEST_ERROR;
        if (isError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_RESPONSE_TYPE_ERROR;
        }
        const isPayloadString = typeof payload === 'string';
        const isTransactionHash = isPayloadString && (payload.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$RegexUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegexUtil"].transactionHash) || payload.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$RegexUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegexUtil"].signedMessage));
        if (isTransactionHash) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_RESPONSE_TYPE_TX;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_RESPONSE_TYPE_OBJECT;
    },
    checkIfRequestIsAllowed (request) {
        const method = this.getRequestMethod(request);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].SAFE_RPC_METHODS.includes(method);
    },
    isClient: typeof window !== 'undefined'
}; //# sourceMappingURL=W3mFrameHelpers.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrame.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "W3mFrame": (()=>W3mFrame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)");
;
;
;
class W3mFrame {
    constructor(projectId, isAppClient = false){
        this.iframe = null;
        this.rpcUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].getBlockchainApiUrl();
        this.events = {
            onFrameEvent: (callback)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
                    window.addEventListener('message', ({ data })=>{
                        if (!data.type?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_EVENT_KEY)) {
                            return;
                        }
                        const frameEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameSchema"].frameEvent.parse(data);
                        callback(frameEvent);
                    });
                }
            },
            onAppEvent: (callback)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
                    window.addEventListener('message', ({ data })=>{
                        if (!data.type?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_EVENT_KEY)) {
                            return;
                        }
                        const appEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameSchema"].appEvent.parse(data);
                        callback(appEvent);
                    });
                }
            },
            postAppEvent: (event)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
                    if (!this.iframe?.contentWindow) {
                        throw new Error('W3mFrame: iframe is not set');
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameSchema"].appEvent.parse(event);
                    window.postMessage(event);
                    this.iframe.contentWindow.postMessage(event, '*');
                }
            },
            postFrameEvent: (event)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
                    if (!parent) {
                        throw new Error('W3mFrame: parent is not set');
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameSchema"].frameEvent.parse(event);
                    parent.postMessage(event, '*');
                }
            }
        };
        this.projectId = projectId;
        this.frameLoadPromise = new Promise((resolve, reject)=>{
            this.frameLoadPromiseResolver = {
                resolve,
                reject
            };
        });
        if (isAppClient) {
            this.frameLoadPromise = new Promise((resolve, reject)=>{
                this.frameLoadPromiseResolver = {
                    resolve,
                    reject
                };
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].isClient) {
                const iframe = document.createElement('iframe');
                iframe.id = 'w3m-iframe';
                iframe.src = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECURE_SITE_SDK"]}?projectId=${projectId}`;
                iframe.style.position = 'fixed';
                iframe.style.zIndex = '999999';
                iframe.style.display = 'none';
                iframe.style.borderBottomLeftRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
                iframe.style.borderBottomRightRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
                iframe.style.opacity = '0';
                iframe.style.borderBottomLeftRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
                iframe.style.borderBottomRightRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
                document.body.appendChild(iframe);
                this.iframe = iframe;
                this.iframe.onload = ()=>{
                    this.frameLoadPromiseResolver?.resolve(undefined);
                };
                this.iframe.onerror = ()=>{
                    this.frameLoadPromiseResolver?.reject('Unable to load email login dependency');
                };
            }
        }
    }
    get networks() {
        const data = [
            1,
            5,
            11155111,
            10,
            420,
            42161,
            421613,
            137,
            80001,
            42220,
            1313161554,
            1313161555,
            56,
            97,
            43114,
            43113,
            324,
            280,
            100,
            8453,
            84531,
            7777777,
            999
        ].map((id)=>({
                [id]: {
                    rpcUrl: `${this.rpcUrl}/v1/?chainId=eip155:${id}&projectId=${this.projectId}`,
                    chainId: id
                }
            }));
        return Object.assign({}, ...data);
    }
} //# sourceMappingURL=W3mFrame.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "W3mFrameProvider": (()=>W3mFrameProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)");
;
;
;
;
class W3mFrameProvider {
    constructor(projectId){
        this.connectEmailResolver = undefined;
        this.connectDeviceResolver = undefined;
        this.connectOtpResolver = undefined;
        this.connectResolver = undefined;
        this.disconnectResolver = undefined;
        this.isConnectedResolver = undefined;
        this.getChainIdResolver = undefined;
        this.switchChainResolver = undefined;
        this.rpcRequestResolver = undefined;
        this.updateEmailResolver = undefined;
        this.updateEmailPrimaryOtpResolver = undefined;
        this.updateEmailSecondaryOtpResolver = undefined;
        this.syncThemeResolver = undefined;
        this.syncDappDataResolver = undefined;
        this.smartAccountEnabledNetworksResolver = undefined;
        this.setPreferredAccountResolver = undefined;
        this.w3mFrame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrame"](projectId, true);
        this.w3mFrame.events.onFrameEvent((event)=>{
            console.log('💻 received', event);
            switch(event.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_CONNECT_EMAIL_SUCCESS:
                    return this.onConnectEmailSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_CONNECT_EMAIL_ERROR:
                    return this.onConnectEmailError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_CONNECT_DEVICE_SUCCESS:
                    return this.onConnectDeviceSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_CONNECT_DEVICE_ERROR:
                    return this.onConnectDeviceError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_CONNECT_OTP_SUCCESS:
                    return this.onConnectOtpSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_CONNECT_OTP_ERROR:
                    return this.onConnectOtpError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_USER_SUCCESS:
                    return this.onConnectSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_USER_ERROR:
                    return this.onConnectError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_IS_CONNECTED_SUCCESS:
                    return this.onIsConnectedSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_IS_CONNECTED_ERROR:
                    return this.onIsConnectedError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_CHAIN_ID_SUCCESS:
                    return this.onGetChainIdSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_CHAIN_ID_ERROR:
                    return this.onGetChainIdError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SIGN_OUT_SUCCESS:
                    return this.onSignOutSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SIGN_OUT_ERROR:
                    return this.onSignOutError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SWITCH_NETWORK_SUCCESS:
                    return this.onSwitchChainSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SWITCH_NETWORK_ERROR:
                    return this.onSwitchChainError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_RPC_REQUEST_SUCCESS:
                    return this.onRpcRequestSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_RPC_REQUEST_ERROR:
                    return this.onRpcRequestError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SESSION_UPDATE:
                    return this.onSessionUpdate(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_UPDATE_EMAIL_SUCCESS:
                    return this.onUpdateEmailSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_UPDATE_EMAIL_ERROR:
                    return this.onUpdateEmailError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
                    return this.onUpdateEmailPrimaryOtpSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
                    return this.onUpdateEmailPrimaryOtpError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
                    return this.onUpdateEmailSecondaryOtpSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
                    return this.onUpdateEmailSecondaryOtpError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SYNC_THEME_SUCCESS:
                    return this.onSyncThemeSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SYNC_THEME_ERROR:
                    return this.onSyncThemeError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SYNC_DAPP_DATA_SUCCESS:
                    return this.onSyncDappDataSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SYNC_DAPP_DATA_ERROR:
                    return this.onSyncDappDataError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
                    return this.onSmartAccountEnabledNetworksSuccess(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
                    return this.onSmartAccountEnabledNetworksError(event);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
                    return this.onSetPreferredAccountSuccess();
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SET_PREFERRED_ACCOUNT_ERROR:
                    return this.onSetPreferredAccountError();
                default:
                    return null;
            }
        });
    }
    getLoginEmailUsed() {
        return Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].EMAIL_LOGIN_USED_KEY));
    }
    getEmail() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].EMAIL);
    }
    rejectRpcRequest() {
        this.rpcRequestResolver?.reject();
    }
    async connectEmail(payload) {
        await this.w3mFrame.frameLoadPromise;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].checkIfAllowedToTriggerEmail();
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_CONNECT_EMAIL,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.connectEmailResolver = {
                resolve,
                reject
            };
        });
    }
    async connectDevice() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_CONNECT_DEVICE
        });
        return new Promise((resolve, reject)=>{
            this.connectDeviceResolver = {
                resolve,
                reject
            };
        });
    }
    async connectOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_CONNECT_OTP,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.connectOtpResolver = {
                resolve,
                reject
            };
        });
    }
    async isConnected() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_IS_CONNECTED,
            payload: undefined
        });
        return new Promise((resolve, reject)=>{
            this.isConnectedResolver = {
                resolve,
                reject
            };
        });
    }
    async getChainId() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_GET_CHAIN_ID
        });
        return new Promise((resolve, reject)=>{
            this.getChainIdResolver = {
                resolve,
                reject
            };
        });
    }
    async updateEmail(payload) {
        await this.w3mFrame.frameLoadPromise;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].checkIfAllowedToTriggerEmail();
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_UPDATE_EMAIL,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.updateEmailResolver = {
                resolve,
                reject
            };
        });
    }
    async updateEmailPrimaryOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_UPDATE_EMAIL_PRIMARY_OTP,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.updateEmailPrimaryOtpResolver = {
                resolve,
                reject
            };
        });
    }
    async updateEmailSecondaryOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_UPDATE_EMAIL_SECONDARY_OTP,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.updateEmailSecondaryOtpResolver = {
                resolve,
                reject
            };
        });
    }
    async syncTheme(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_SYNC_THEME,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.syncThemeResolver = {
                resolve,
                reject
            };
        });
    }
    async syncDappData(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_SYNC_DAPP_DATA,
            payload
        });
        return new Promise((resolve, reject)=>{
            this.syncDappDataResolver = {
                resolve,
                reject
            };
        });
    }
    async getSmartAccountEnabledNetworks() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS
        });
        return new Promise((resolve, reject)=>{
            this.smartAccountEnabledNetworksResolver = {
                resolve,
                reject
            };
        });
    }
    async setPreferredAccount(type) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_SET_PREFERRED_ACCOUNT,
            payload: {
                type
            }
        });
        return new Promise((resolve, reject)=>{
            this.setPreferredAccountResolver = {
                resolve,
                reject
            };
        });
    }
    async connect(payload) {
        const chainId = payload?.chainId ?? this.getLastUsedChainId() ?? 1;
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_GET_USER,
            payload: {
                chainId
            }
        });
        return new Promise((resolve, reject)=>{
            this.connectResolver = {
                resolve,
                reject
            };
        });
    }
    async switchNetwork(chainId) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_SWITCH_NETWORK,
            payload: {
                chainId
            }
        });
        return new Promise((resolve, reject)=>{
            this.switchChainResolver = {
                resolve,
                reject
            };
        });
    }
    async disconnect() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_SIGN_OUT
        });
        return new Promise((resolve, reject)=>{
            this.disconnectResolver = {
                resolve,
                reject
            };
        });
    }
    async request(req) {
        await this.w3mFrame.frameLoadPromise;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].GET_CHAIN_ID === req.method) {
            return this.getLastUsedChainId();
        }
        this.w3mFrame.events.postAppEvent({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].APP_RPC_REQUEST,
            payload: req
        });
        return new Promise((resolve, reject)=>{
            this.rpcRequestResolver = {
                resolve,
                reject
            };
        });
    }
    onRpcRequest(callback) {
        this.w3mFrame.events.onAppEvent((event)=>{
            if (event.type.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_METHOD_KEY)) {
                callback(event);
            }
        });
    }
    onRpcResponse(callback) {
        this.w3mFrame.events.onFrameEvent((event)=>{
            if (event.type.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_METHOD_KEY)) {
                callback(event);
            }
        });
    }
    onIsConnected(callback) {
        this.w3mFrame.events.onFrameEvent((event)=>{
            if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_USER_SUCCESS) {
                callback(event.payload);
            }
        });
    }
    onNotConnected(callback) {
        this.w3mFrame.events.onFrameEvent((event)=>{
            if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_IS_CONNECTED_ERROR) {
                callback();
            }
            if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_IS_CONNECTED_SUCCESS && !event.payload.isConnected) {
                callback();
            }
        });
    }
    onSetPreferredAccount(callback) {
        this.w3mFrame.events.onFrameEvent((event)=>{
            if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SET_PREFERRED_ACCOUNT_SUCCESS) {
                callback(event.payload);
            } else if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_SET_PREFERRED_ACCOUNT_ERROR) {
                callback({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].ACCOUNT_TYPES.EOA
                });
            }
        });
    }
    onGetSmartAccountEnabledNetworks(callback) {
        this.w3mFrame.events.onFrameEvent((event)=>{
            if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS) {
                callback(event.payload.smartAccountEnabledNetworks);
            } else if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR) {
                callback([]);
            }
        });
    }
    onConnectEmailSuccess(event) {
        this.connectEmailResolver?.resolve(event.payload);
        this.setNewLastEmailLoginTime();
    }
    onConnectEmailError(event) {
        this.connectEmailResolver?.reject(event.payload.message);
    }
    onConnectDeviceSuccess() {
        this.connectDeviceResolver?.resolve(undefined);
    }
    onConnectDeviceError(event) {
        this.connectDeviceResolver?.reject(event.payload.message);
    }
    onConnectOtpSuccess() {
        this.connectOtpResolver?.resolve(undefined);
    }
    onConnectOtpError(event) {
        this.connectOtpResolver?.reject(event.payload.message);
    }
    onConnectSuccess(event) {
        this.setEmailLoginSuccess(event.payload.email);
        this.setLastUsedChainId(event.payload.chainId);
        this.connectResolver?.resolve(event.payload);
    }
    onConnectError(event) {
        this.connectResolver?.reject(event.payload.message);
    }
    onIsConnectedSuccess(event) {
        if (!event.payload.isConnected) {
            this.deleteEmailLoginCache();
        }
        this.isConnectedResolver?.resolve(event.payload);
    }
    onIsConnectedError(event) {
        this.isConnectedResolver?.reject(event.payload.message);
    }
    onGetChainIdSuccess(event) {
        this.setLastUsedChainId(event.payload.chainId);
        this.getChainIdResolver?.resolve(event.payload);
    }
    onGetChainIdError(event) {
        this.getChainIdResolver?.reject(event.payload.message);
    }
    onSignOutSuccess() {
        this.disconnectResolver?.resolve(undefined);
        this.deleteEmailLoginCache();
    }
    onSignOutError(event) {
        this.disconnectResolver?.reject(event.payload.message);
    }
    onSwitchChainSuccess(event) {
        this.setLastUsedChainId(event.payload.chainId);
        this.switchChainResolver?.resolve(event.payload);
    }
    onSwitchChainError(event) {
        this.switchChainResolver?.reject(event.payload.message);
    }
    onRpcRequestSuccess(event) {
        this.rpcRequestResolver?.resolve(event.payload);
    }
    onRpcRequestError(event) {
        this.rpcRequestResolver?.reject(event.payload.message);
    }
    onSessionUpdate(event) {
        const { payload } = event;
        if (payload) {}
    }
    onUpdateEmailSuccess(event) {
        this.updateEmailResolver?.resolve(event.payload);
        this.setNewLastEmailLoginTime();
    }
    onUpdateEmailError(event) {
        this.updateEmailResolver?.reject(event.payload.message);
    }
    onUpdateEmailPrimaryOtpSuccess() {
        this.updateEmailPrimaryOtpResolver?.resolve(undefined);
    }
    onUpdateEmailPrimaryOtpError(event) {
        this.updateEmailPrimaryOtpResolver?.reject(event.payload.message);
    }
    onUpdateEmailSecondaryOtpSuccess(event) {
        const { newEmail } = event.payload;
        this.setEmailLoginSuccess(newEmail);
        this.updateEmailSecondaryOtpResolver?.resolve({
            newEmail
        });
    }
    onUpdateEmailSecondaryOtpError(event) {
        this.updateEmailSecondaryOtpResolver?.reject(event.payload.message);
    }
    onSyncThemeSuccess() {
        this.syncThemeResolver?.resolve(undefined);
    }
    onSyncThemeError(event) {
        this.syncThemeResolver?.reject(event.payload.message);
    }
    onSyncDappDataSuccess() {
        this.syncDappDataResolver?.resolve(undefined);
    }
    onSyncDappDataError(event) {
        this.syncDappDataResolver?.reject(event.payload.message);
    }
    onSmartAccountEnabledNetworksSuccess(event) {
        this.persistSmartAccountEnabledNetworks(event.payload.smartAccountEnabledNetworks);
        this.smartAccountEnabledNetworksResolver?.resolve(event.payload);
    }
    onSmartAccountEnabledNetworksError(event) {
        this.persistSmartAccountEnabledNetworks([]);
        this.smartAccountEnabledNetworksResolver?.reject(event.payload.message);
    }
    onSetPreferredAccountSuccess() {
        this.setPreferredAccountResolver?.resolve(undefined);
    }
    onSetPreferredAccountError() {
        this.setPreferredAccountResolver?.reject();
    }
    setNewLastEmailLoginTime() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_EMAIL_LOGIN_TIME, Date.now().toString());
    }
    setEmailLoginSuccess(email) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].EMAIL, email);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].EMAIL_LOGIN_USED_KEY, 'true');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_EMAIL_LOGIN_TIME);
    }
    deleteEmailLoginCache() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].EMAIL_LOGIN_USED_KEY);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].EMAIL);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_USED_CHAIN_KEY);
    }
    setLastUsedChainId(chainId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_USED_CHAIN_KEY, String(chainId));
    }
    getLastUsedChainId() {
        return Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].LAST_USED_CHAIN_KEY));
    }
    persistSmartAccountEnabledNetworks(networks) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameStorage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].SMART_ACCOUNT_ENABLED_NETWORKS, networks.join(','));
    }
} //# sourceMappingURL=W3mFrameProvider.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$polyfills$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$polyfills$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+polyfills@4.1.12-910a844.0/node_modules/@web3modal/polyfills/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=e6c9d_%40web3modal_wallet_dist_esm_90073e._.js.map