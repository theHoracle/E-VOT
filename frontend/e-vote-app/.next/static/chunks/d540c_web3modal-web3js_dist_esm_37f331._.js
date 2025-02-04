(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/d540c_web3modal-web3js_dist_esm_37f331._.js", {

"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3TypesUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ensureChainType": (()=>ensureChainType)
});
function ensureChainType(chains) {
    const consolidatedChains = chains.map((ch)=>{
        const asSimpleChain = ch;
        const chain = ch;
        if (asSimpleChain.currency) {
            chain.nativeCurrency = {
                name: asSimpleChain.currency,
                decimals: 18,
                symbol: asSimpleChain.currency
            };
            delete asSimpleChain.currency;
        }
        if (asSimpleChain.explorerUrl) {
            chain.blockExplorerUrls = [
                asSimpleChain.explorerUrl
            ];
            delete asSimpleChain.explorerUrl;
        }
        if (asSimpleChain.rpcUrl) {
            chain.rpcUrls = [
                asSimpleChain.rpcUrl
            ];
            delete asSimpleChain.rpcUrl;
        }
        if (asSimpleChain.name) {
            chain.chainName = asSimpleChain.name;
            delete asSimpleChain.name;
        }
        return chain;
    });
    return consolidatedChains;
} //# sourceMappingURL=Web3TypesUtil.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3ConstantsUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Web3ConstantsUtil": (()=>Web3ConstantsUtil)
});
const Web3ConstantsUtil = {
    WALLET_ID: '@w3m/wallet_id',
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5000
}; //# sourceMappingURL=Web3ConstantsUtil.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3HelpersUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Web3HelpersUtil": (()=>Web3HelpersUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/exports/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
;
;
const Web3HelpersUtil = {
    getCaipDefaultChain (chain) {
        if (!chain) {
            return undefined;
        }
        return {
            id: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${chain.chainId}`,
            name: chain.chainName,
            imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].EIP155NetworkImageIds[chain.chainId]
        };
    },
    hexStringToNumber (value) {
        const string = value.startsWith('0x') ? value.slice(2) : value;
        const number = parseInt(string, 16);
        return number;
    },
    numberToHexString (value) {
        return `0x${value.toString(16)}`;
    },
    async getUserInfo (provider) {
        const [address, chainId] = await Promise.all([
            Web3HelpersUtil.getAddress(provider),
            Web3HelpersUtil.getChainId(provider)
        ]);
        return {
            chainId,
            address
        };
    },
    async getChainId (provider) {
        const chainId = await provider.request({
            method: 'eth_chainId'
        });
        return Number(chainId);
    },
    async getAddress (provider) {
        const [address] = await provider.request({
            method: 'eth_accounts'
        });
        return address;
    },
    async addEthereumChain (provider, chain) {
        await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: Web3HelpersUtil.numberToHexString(chain.chainId),
                    rpcUrls: chain.rpcUrls,
                    chainName: chain.chainName,
                    nativeCurrency: {
                        name: chain.nativeCurrency.name,
                        decimals: 18,
                        symbol: chain.nativeCurrency.symbol
                    },
                    blockExplorerUrls: chain.blockExplorerUrls,
                    iconUrls: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].EIP155NetworkImageIds[chain.chainId]
                    ]
                }
            ]
        });
    }
}; //# sourceMappingURL=Web3HelpersUtil.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3StoreUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Web3StoreUtil": (()=>Web3StoreUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    provider: undefined,
    providerType: undefined,
    address: undefined,
    chainId: undefined,
    isConnected: false
});
const Web3StoreUtil = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    setProvider (provider) {
        if (provider) {
            state.provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(provider);
        }
    },
    setProviderType (providerType) {
        state.providerType = providerType;
    },
    setAddress (address) {
        state.address = address;
    },
    setPreferredAccountType (preferredAccountType) {
        state.preferredAccountType = preferredAccountType;
    },
    setChainId (chainId) {
        state.chainId = chainId;
    },
    setIsConnected (isConnected) {
        state.isConnected = isConnected;
    },
    setError (error) {
        state.error = error;
    },
    reset () {
        state.provider = undefined;
        state.address = undefined;
        state.chainId = undefined;
        state.providerType = undefined;
        state.isConnected = false;
        state.error = undefined;
        state.preferredAccountType = undefined;
    }
}; //# sourceMappingURL=Web3StoreUtil.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/client.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Web3Modal": (()=>Web3Modal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/exports/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$ens$40$4$2e$4$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$ens$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-ens@4.4.0_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-ens/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3TypesUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3TypesUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3StoreUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth@4.11.1_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth/lib/esm/web3_eth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$ethereum$2d$provider$40$2$2e$11$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$0$2e$0_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$walletconnect$2f$ethereum$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+ethereum-provider@2.11.1_@types+react@19.0.8_bufferutil@4.0.9_react@19.0.0_utf-8-validate@5.0.10/node_modules/@walletconnect/ethereum-provider/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$ens$40$4$2e$4$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$ens$2f$lib$2f$esm$2f$ens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-ens@4.4.0_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.1/node_modules/web3-eth-ens/lib/esm/ens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/client.js [app-client] (ecmascript)");
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
class Web3Modal extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ModalScaffold"] {
    constructor(options){
        const { web3Config, siweConfig, chains, defaultChain, tokens, chainImages, _sdkVersion, ...w3mOptions } = options;
        if (!web3Config) {
            throw new Error('web3modal:constructor - web3Config is undefined');
        }
        if (!w3mOptions.projectId) {
            throw new Error('web3modal:constructor - projectId is undefined');
        }
        const networkControllerClient = {
            switchCaipNetwork: async (caipNetwork)=>{
                const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].caipNetworkIdToNumber(caipNetwork?.id);
                if (chainId) {
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(undefined);
                        await this.switchNetwork(chainId);
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(error);
                        throw new Error('networkControllerClient:switchCaipNetwork - unable to switch chain');
                    }
                }
            },
            getApprovedCaipNetworksData: async ()=>new Promise(async (resolve)=>{
                    const walletChoice = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
                    if (walletChoice?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID)) {
                        const provider = await this.getWalletConnectProvider();
                        if (!provider) {
                            throw new Error('networkControllerClient:getApprovedCaipNetworks - connector is undefined');
                        }
                        const ns = provider.signer?.session?.namespaces;
                        const nsMethods = ns?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155]?.methods;
                        const nsChains = ns?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155]?.chains;
                        const result = {
                            supportsAllNetworks: nsMethods?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ADD_CHAIN_METHOD) ?? false,
                            approvedCaipNetworkIds: nsChains
                        };
                        resolve(result);
                    } else {
                        const result = {
                            approvedCaipNetworkIds: undefined,
                            supportsAllNetworks: true
                        };
                        resolve(result);
                    }
                })
        };
        const connectionControllerClient = {
            connectWalletConnect: async (onUri)=>{
                const WalletConnectProvider = await this.getWalletConnectProvider();
                if (!WalletConnectProvider) {
                    throw new Error('connectionControllerClient:getWalletConnectUri - provider is undefined');
                }
                WalletConnectProvider.on('display_uri', (uri)=>{
                    onUri(uri);
                });
                await WalletConnectProvider.connect();
                await this.setWalletConnectProvider();
            },
            connectExternal: async ({ id, info, provider })=>{
                if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID) {
                    const InjectedProvider = web3Config.injected;
                    if (!InjectedProvider) {
                        throw new Error('connectionControllerClient:connectInjected - provider is undefined');
                    }
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(undefined);
                        await InjectedProvider.request({
                            method: 'eth_requestAccounts'
                        });
                        this.setInjectedProvider(web3Config);
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(error);
                    }
                } else if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_CONNECTOR_ID && info && provider) {
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(undefined);
                        await provider.request({
                            method: 'eth_requestAccounts'
                        });
                        this.setEIP6963Provider(provider, info.name);
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(error);
                    }
                } else if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID) {
                    const CoinbaseProvider = web3Config.coinbase;
                    if (!CoinbaseProvider) {
                        throw new Error('connectionControllerClient:connectCoinbase - connector is undefined');
                    }
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(undefined);
                        await CoinbaseProvider.request({
                            method: 'eth_requestAccounts'
                        });
                        this.setCoinbaseProvider(web3Config);
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(error);
                    }
                } else if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EMAIL_CONNECTOR_ID) {
                    this.setEmailProvider();
                }
            },
            checkInstalled (ids) {
                if (!ids) {
                    return Boolean(window.ethereum);
                }
                if (web3Config.injected) {
                    if (!window?.ethereum) {
                        return false;
                    }
                }
                return ids.some((id)=>Boolean(window.ethereum?.[String(id)]));
            },
            disconnect: async ()=>{
                const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
                const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.providerType;
                if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID) {
                    const WalletConnectProvider = provider;
                    await WalletConnectProvider.disconnect();
                } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EMAIL_CONNECTOR_ID) {
                    await this.emailProvider?.disconnect();
                } else {
                    provider?.emit('disconnect');
                }
                localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            },
            signMessage: async (message)=>{
                const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
                if (!provider) {
                    throw new Error('connectionControllerClient:signMessage - provider is undefined');
                }
                const signature = await provider.request({
                    method: 'personal_sign',
                    params: [
                        message,
                        this.getAddress()
                    ]
                });
                return signature;
            },
            parseUnits: (value, decimals)=>BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toWei"])(value, Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethUnitMap"]).find((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethUnitMap"][u].toString().length === decimals) ?? 'ether')),
            formatUnits: (value, decimals)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromWei"])(value, Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethUnitMap"]).find((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethUnitMap"][u].toString().length === decimals) ?? 'ether'),
            async estimateGas (data) {
                const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
                const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
                const address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.address;
                if (!provider) {
                    throw new Error('connectionControllerClient:sendTransaction - provider is undefined');
                }
                if (!address) {
                    throw new Error('connectionControllerClient:sendTransaction - address is undefined');
                }
                const txParams = {
                    from: data.address,
                    to: data.to,
                    data: data.data,
                    type: 0
                };
                const web3Eth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Eth"]({
                    provider,
                    config: {
                        defaultNetworkId: chainId,
                        defaultAccount: address
                    }
                });
                const gas = await web3Eth.estimateGas(txParams);
                return gas;
            },
            sendTransaction: async (data)=>{
                const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
                const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
                const address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.address;
                if (!provider) {
                    throw new Error('connectionControllerClient:sendTransaction - provider is undefined');
                }
                if (!address) {
                    throw new Error('connectionControllerClient:sendTransaction - address is undefined');
                }
                const txParams = {
                    to: data.to,
                    value: data.value,
                    gasLimit: data.gas,
                    gasPrice: data.gasPrice,
                    data: data.data,
                    type: 0
                };
                const web3Eth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Eth"]({
                    provider,
                    config: {
                        defaultNetworkId: chainId,
                        defaultAccount: address
                    }
                });
                const txResponse = await web3Eth.sendTransaction(txParams);
                const transactionHash = txResponse.transactionHash;
                return transactionHash || null;
            }
        };
        super({
            networkControllerClient,
            connectionControllerClient,
            siweControllerClient: siweConfig,
            defaultChain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].getCaipDefaultChain(defaultChain),
            tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpersUtil"].getCaipTokens(tokens),
            _sdkVersion: _sdkVersion ?? `html-web3-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].VERSION}`,
            ...w3mOptions
        });
        this.hasSyncedConnectedAccount = false;
        this.EIP6963Providers = [];
        this.options = undefined;
        this.options = options;
        this.metadata = web3Config.metadata;
        this.projectId = w3mOptions.projectId;
        this.chains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3TypesUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureChainType"])(chains);
        this.createProvider();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].subscribeKey('address', ()=>{
            this.syncAccount();
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].subscribeKey('chainId', ()=>{
            this.syncNetwork(chainImages);
        });
        this.syncRequestedNetworks(chains, chainImages);
        this.syncConnectors(web3Config);
        if (web3Config.EIP6963) {
            if (typeof window !== 'undefined') {
                this.listenConnectors(web3Config.EIP6963);
                this.checkActive6963Provider();
            }
        }
        if (web3Config.email) {
            this.syncEmailConnector(w3mOptions.projectId);
        }
        if (web3Config.injected) {
            this.checkActiveInjectedProvider(web3Config);
        }
        if (web3Config.coinbase) {
            this.checkActiveCoinbaseProvider(web3Config);
        }
    }
    getState() {
        const state = super.getState();
        return {
            ...state,
            selectedNetworkId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].caipNetworkIdToNumber(state.selectedNetworkId)
        };
    }
    subscribeState(callback) {
        return super.subscribeState((state)=>callback({
                ...state,
                selectedNetworkId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].caipNetworkIdToNumber(state.selectedNetworkId)
            }));
    }
    setAddress(address) {
        const originalAddress = address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(address) : undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress(originalAddress);
    }
    getAddress() {
        const { address } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state;
        return address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(address) : undefined;
    }
    getError() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.error;
    }
    getChainId() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
    }
    getIsConnected() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.isConnected;
    }
    getWalletProvider() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
    }
    getWalletProviderType() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.providerType;
    }
    subscribeProvider(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].subscribe(callback);
    }
    async disconnect() {
        const { provider, providerType } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state;
        localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
        if (providerType === 'injected' || providerType === 'eip6963') {
            provider?.emit('disconnect');
        } else {
            const walletConnectProvider = provider;
            if (walletConnectProvider) {
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(undefined);
                    await walletConnectProvider.disconnect();
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(error);
                }
            }
        }
    }
    createProvider() {
        if (!this.walletConnectProviderInitPromise && typeof window !== 'undefined') {
            this.walletConnectProviderInitPromise = this.initWalletConnectProvider();
        }
        return this.walletConnectProviderInitPromise;
    }
    async initWalletConnectProvider() {
        const walletConnectProviderOptions = {
            projectId: this.projectId,
            showQrModal: false,
            rpcMap: this.chains ? this.chains.reduce((map, chain)=>{
                map[chain.chainId] = chain.rpcUrls && chain.rpcUrls.length > 0 && chain.rpcUrls[0] ? chain.rpcUrls[0] : '';
                return map;
            }, {}) : {},
            optionalChains: [
                ...this.chains.map((chain)=>chain.chainId)
            ],
            metadata: {
                name: this.metadata ? this.metadata.name : '',
                description: this.metadata ? this.metadata.description : '',
                url: this.metadata ? this.metadata.url : '',
                icons: this.metadata ? this.metadata.icons : [
                    ''
                ]
            }
        };
        this.walletConnectProvider = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$ethereum$2d$provider$40$2$2e$11$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$0$2e$0_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$walletconnect$2f$ethereum$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(walletConnectProviderOptions);
        await this.checkActiveWalletConnectProvider();
    }
    async getWalletConnectProvider() {
        if (!this.walletConnectProvider) {
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(undefined);
                await this.createProvider();
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setError(error);
            }
        }
        return this.walletConnectProvider;
    }
    syncRequestedNetworks(chains, chainImages) {
        const requestedCaipNetworks = chains?.map((chain)=>({
                id: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${chain.chainId}`,
                name: chain.chainName || chain.name,
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].EIP155NetworkImageIds[chain.chainId],
                imageUrl: chainImages?.[chain.chainId]
            }));
        this.setRequestedCaipNetworks(requestedCaipNetworks ?? []);
    }
    async checkActiveWalletConnectProvider() {
        const WalletConnectProvider = await this.getWalletConnectProvider();
        const walletId = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        if (WalletConnectProvider) {
            if (walletId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID) {
                await this.setWalletConnectProvider();
            }
        }
    }
    checkActiveInjectedProvider(config) {
        const InjectedProvider = config.injected;
        const walletId = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        if (InjectedProvider) {
            if (walletId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID) {
                this.setInjectedProvider(config);
                this.watchInjected(config);
            }
        }
    }
    checkActiveCoinbaseProvider(config) {
        const CoinbaseProvider = config.coinbase;
        const walletId = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        if (CoinbaseProvider) {
            if (walletId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID) {
                if (CoinbaseProvider._addresses && CoinbaseProvider._addresses?.length > 0) {
                    this.setCoinbaseProvider(config);
                    this.watchCoinbase(config);
                } else {
                    localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
                }
            }
        }
    }
    checkActive6963Provider() {
        const currentActiveWallet = window?.localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        if (currentActiveWallet) {
            const currentProvider = this.EIP6963Providers.find((provider)=>provider.info.name === currentActiveWallet);
            if (currentProvider) {
                this.setEIP6963Provider(currentProvider.provider, currentProvider.info.name);
            }
        }
    }
    async setWalletConnectProvider() {
        window?.localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID);
        const WalletConnectProvider = await this.getWalletConnectProvider();
        if (WalletConnectProvider) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(WalletConnectProvider.chainId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProviderType('walletConnect');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProvider(WalletConnectProvider);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setIsConnected(true);
            this.setAddress(WalletConnectProvider.accounts?.[0]);
            this.watchWalletConnect();
        }
    }
    async setInjectedProvider(config) {
        window?.localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID);
        const InjectedProvider = config.injected;
        if (InjectedProvider) {
            const { address, chainId } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].getUserInfo(InjectedProvider);
            if (address && chainId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProviderType('injected');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProvider(config.injected);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setIsConnected(true);
                this.setAddress(address);
                this.watchCoinbase(config);
            }
        }
    }
    async setEIP6963Provider(provider, name) {
        window?.localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID, name);
        if (provider) {
            const { address, chainId } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].getUserInfo(provider);
            if (address && chainId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProviderType('eip6963');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProvider(provider);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setIsConnected(true);
                this.setAddress(address);
                this.watchEIP6963(provider);
            }
        }
    }
    async setCoinbaseProvider(config) {
        window?.localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID);
        const CoinbaseProvider = config.coinbase;
        if (CoinbaseProvider) {
            const { address, chainId } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].getUserInfo(CoinbaseProvider);
            if (address && chainId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProviderType('coinbaseWallet');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProvider(config.coinbase);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setIsConnected(true);
                this.setAddress(address);
                this.watchCoinbase(config);
            }
        }
    }
    async setEmailProvider() {
        window?.localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EMAIL_CONNECTOR_ID);
        if (this.emailProvider) {
            const { address, chainId, smartAccountDeployed, preferredAccountType } = await this.emailProvider.connect({
                chainId: this.getChainId()
            });
            const { smartAccountEnabledNetworks } = await this.emailProvider.getSmartAccountEnabledNetworks();
            this.setSmartAccountEnabledNetworks(smartAccountEnabledNetworks);
            if (address && chainId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProviderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EMAIL_CONNECTOR_ID);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setProvider(this.emailProvider);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setIsConnected(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress(address);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setPreferredAccountType(preferredAccountType);
                this.setSmartAccountDeployed(Boolean(smartAccountDeployed));
                this.watchEmail();
                this.watchModal();
            }
            super.setLoading(false);
        }
    }
    async watchWalletConnect() {
        const provider = await this.getWalletConnectProvider();
        function disconnectHandler() {
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            provider?.removeListener('disconnect', disconnectHandler);
            provider?.removeListener('accountsChanged', accountsChangedHandler);
            provider?.removeListener('chainChanged', chainChangedHandler);
        }
        function chainChangedHandler(chainId) {
            if (chainId) {
                const chain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].hexStringToNumber(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain);
            }
        }
        const accountsChangedHandler = async (accounts)=>{
            if (accounts.length > 0) {
                await this.setWalletConnectProvider();
            }
        };
        if (provider) {
            provider.on('disconnect', disconnectHandler);
            provider.on('accountsChanged', accountsChangedHandler);
            provider.on('chainChanged', chainChangedHandler);
        }
    }
    watchInjected(config) {
        const provider = config.injected;
        function disconnectHandler() {
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            provider?.removeListener('disconnect', disconnectHandler);
            provider?.removeListener('accountsChanged', accountsChangedHandler);
            provider?.removeListener('chainChanged', chainChangedHandler);
        }
        function accountsChangedHandler(accounts) {
            const currentAccount = accounts?.[0];
            if (currentAccount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(currentAccount));
            } else {
                localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            }
        }
        function chainChangedHandler(chainId) {
            if (chainId) {
                const chain = typeof chainId === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].hexStringToNumber(chainId) : Number(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain);
            }
        }
        if (provider) {
            provider.on('disconnect', disconnectHandler);
            provider.on('accountsChanged', accountsChangedHandler);
            provider.on('chainChanged', chainChangedHandler);
        }
    }
    watchEIP6963(provider) {
        function disconnectHandler() {
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            provider.removeListener('disconnect', disconnectHandler);
            provider.removeListener('accountsChanged', accountsChangedHandler);
            provider.removeListener('chainChanged', chainChangedHandler);
        }
        function accountsChangedHandler(accounts) {
            const currentAccount = accounts?.[0];
            if (currentAccount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(currentAccount));
            } else {
                localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            }
        }
        function chainChangedHandler(chainId) {
            if (chainId) {
                const chain = typeof chainId === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].hexStringToNumber(chainId) : Number(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain);
            }
        }
        if (provider) {
            provider.on('disconnect', disconnectHandler);
            provider.on('accountsChanged', accountsChangedHandler);
            provider.on('chainChanged', chainChangedHandler);
        }
    }
    watchCoinbase(config) {
        const provider = config.coinbase;
        const walletId = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        function disconnectHandler() {
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            provider?.removeListener('disconnect', disconnectHandler);
            provider?.removeListener('accountsChanged', accountsChangedHandler);
            provider?.removeListener('chainChanged', chainChangedHandler);
        }
        function accountsChangedHandler(accounts) {
            const currentAccount = accounts?.[0];
            if (currentAccount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(currentAccount));
            } else {
                localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].reset();
            }
        }
        function chainChangedHandler(chainId) {
            if (chainId && walletId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID) {
                const chain = Number(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain);
            }
        }
        if (provider) {
            provider.on('disconnect', disconnectHandler);
            provider.on('accountsChanged', accountsChangedHandler);
            provider.on('chainChanged', chainChangedHandler);
        }
    }
    watchEmail() {
        if (this.emailProvider) {
            this.emailProvider.onRpcRequest((request)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].checkIfRequestExists(request)) {
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].checkIfRequestIsAllowed(request)) {
                        if (super.isOpen()) {
                            if (!super.isTransactionStackEmpty()) {
                                super.redirect('ApproveTransaction');
                            }
                        } else {
                            super.open({
                                view: 'ApproveTransaction'
                            });
                        }
                    }
                } else {
                    super.open();
                    const method = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].getRequestMethod(request);
                    console.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].RPC_METHOD_NOT_ALLOWED_MESSAGE, {
                        method
                    });
                    setTimeout(()=>{
                        this.showErrorMessage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameRpcConstants"].RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
                    }, 300);
                }
            });
            this.emailProvider.onRpcResponse((response)=>{
                const responseType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].getResponseType(response);
                switch(responseType){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_RESPONSE_TYPE_ERROR:
                        {
                            const isModalOpen = super.isOpen();
                            if (isModalOpen) {
                                if (super.isTransactionStackEmpty()) {
                                    super.close();
                                } else {
                                    super.popTransactionStack(true);
                                }
                            }
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameConstants"].RPC_RESPONSE_TYPE_TX:
                        {
                            if (super.isTransactionStackEmpty()) {
                                super.close();
                            } else {
                                super.popTransactionStack();
                            }
                            break;
                        }
                    default:
                        break;
                }
            });
            this.emailProvider.onNotConnected(()=>{
                this.setIsConnected(false);
                super.setLoading(false);
            });
            this.emailProvider.onIsConnected(({ preferredAccountType })=>{
                this.setIsConnected(true);
                super.setLoading(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setPreferredAccountType(preferredAccountType);
            });
            this.emailProvider.onSetPreferredAccount(({ address, type })=>{
                if (!address) {
                    return;
                }
                const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].caipNetworkIdToNumber(this.getCaipNetwork()?.id);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress(address);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chainId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setIsConnected(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setPreferredAccountType(type);
                this.syncAccount();
            });
        }
    }
    watchModal() {
        if (this.emailProvider) {
            this.subscribeState((val)=>{
                if (!val.open) {
                    this.emailProvider?.rejectRpcRequest();
                }
            });
        }
    }
    async syncAccount() {
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.address;
        const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
        const isConnected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.isConnected;
        const preferredAccountType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.preferredAccountType;
        this.resetAccount();
        if (isConnected && address && chainId) {
            const caipAddress = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${chainId}:${address}`;
            this.setIsConnected(isConnected);
            this.setPreferredAccountType(preferredAccountType);
            this.setCaipAddress(caipAddress);
            this.syncConnectedWalletInfo();
            await Promise.all([
                this.syncProfile(address),
                this.syncBalance(address),
                this.getApprovedCaipNetworksData()
            ]);
            this.hasSyncedConnectedAccount = true;
        } else if (!isConnected && this.hasSyncedConnectedAccount) {
            this.resetWcConnection();
            this.resetNetwork();
        }
    }
    async syncNetwork(chainImages) {
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.address;
        const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
        const isConnected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.isConnected;
        if (this.chains) {
            const chain = this.chains.find((c)=>c.chainId === chainId);
            if (chain) {
                const caipChainId = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${chain.chainId}`;
                this.setCaipNetwork({
                    id: caipChainId,
                    name: chain.nativeCurrency.name,
                    imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].EIP155NetworkImageIds[chain.chainId],
                    imageUrl: chainImages?.[chain.chainId]
                });
                if (isConnected && address) {
                    const caipAddress = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${chainId}:${address}`;
                    this.setCaipAddress(caipAddress);
                    if (chain.blockExplorerUrls && chain.blockExplorerUrls.length > 0) {
                        const url = `${chain.blockExplorerUrls[0]}/address/${address}`;
                        this.setAddressExplorerUrl(url);
                    } else {
                        this.setAddressExplorerUrl(undefined);
                    }
                    if (this.hasSyncedConnectedAccount) {
                        await this.syncProfile(address);
                        await this.syncBalance(address);
                    }
                }
            } else if (isConnected) {
                this.setCaipNetwork({
                    id: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${chainId}`
                });
            }
        }
    }
    async syncProfile(address) {
        const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
        try {
            const { name, avatar } = await this.fetchIdentity({
                address
            });
            this.setProfileName(name);
            this.setProfileImage(avatar);
        } catch  {
            if (chainId === 1) {
                const ens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$ens$40$4$2e$4$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2d$ens$2f$lib$2f$esm$2f$ens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENS"](undefined, 'https://eth.llamarpc.com');
                try {
                    const name = await ens.getName(address);
                    if (name) {
                        this.setProfileName(name);
                    } else {
                        this.setProfileName(null);
                    }
                } catch  {
                    this.setProfileName(null);
                }
                try {
                    const avatar = await ens.getText(address, 'avatar');
                    if (avatar) {
                        this.setProfileImage(avatar);
                    } else {
                        this.setProfileImage(null);
                    }
                } catch  {
                    this.setProfileImage(null);
                }
            }
        }
    }
    async syncBalance(address) {
        const chainId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.chainId;
        if (chainId && this.chains) {
            const chain = this.chains.find((c)=>c.chainId === chainId);
            if (chain) {
                const web3Eth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$40$4$2e$11$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$1$2f$node_modules$2f$web3$2d$eth$2f$lib$2f$esm$2f$web3_eth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Eth"]({
                    provider: chain.rpcUrls && chain.rpcUrls.length > 0 && chain.rpcUrls[0] ? chain.rpcUrls[0] : '',
                    config: {
                        defaultNetworkId: chainId,
                        defaultChain: chain.chainName
                    }
                });
                try {
                    const balance = await web3Eth.getBalance(address);
                    const formattedBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromWei"])(balance, 'ether');
                    this.setBalance(formattedBalance, chain.nativeCurrency.name);
                } catch (error) {}
            }
        }
    }
    syncConnectedWalletInfo() {
        const currentActiveWallet = window?.localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].WALLET_ID);
        const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.providerType;
        if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_CONNECTOR_ID) {
            if (currentActiveWallet) {
                const currentProvider = this.EIP6963Providers.find((provider)=>provider.info.name === currentActiveWallet);
                if (currentProvider) {
                    this.setConnectedWalletInfo({
                        ...currentProvider.info
                    });
                }
            }
        } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID) {
            const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
            if (provider.session) {
                this.setConnectedWalletInfo({
                    ...provider.session.peer.metadata,
                    name: provider.session.peer.metadata.name,
                    icon: provider.session.peer.metadata.icons?.[0]
                });
            }
        } else if (currentActiveWallet) {
            this.setConnectedWalletInfo({
                name: currentActiveWallet
            });
        }
    }
    async switchNetwork(chainId) {
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.provider;
        const providerType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state.providerType;
        if (this.chains) {
            const chain = this.chains.find((c)=>c.chainId === chainId);
            if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID && chain) {
                const WalletConnectProvider = provider;
                if (WalletConnectProvider) {
                    try {
                        await WalletConnectProvider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].numberToHexString(chain.chainId)
                                }
                            ]
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chainId);
                    } catch (switchError) {
                        if (switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_DEFAULT || switchError?.data?.originalError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].addEthereumChain(WalletConnectProvider, chain);
                        } else {
                            throw new Error('Chain is not supported');
                        }
                    }
                }
            } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID && chain) {
                const InjectedProvider = provider;
                if (InjectedProvider) {
                    try {
                        await InjectedProvider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].numberToHexString(chain.chainId)
                                }
                            ]
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain.chainId);
                    } catch (switchError) {
                        if (switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_DEFAULT || switchError?.data?.originalError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].addEthereumChain(InjectedProvider, chain);
                        } else {
                            throw new Error('Chain is not supported');
                        }
                    }
                }
            } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_CONNECTOR_ID && chain) {
                const EIP6963Provider = provider;
                if (EIP6963Provider) {
                    try {
                        await EIP6963Provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].numberToHexString(chain.chainId)
                                }
                            ]
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain.chainId);
                    } catch (switchError) {
                        if (switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_DEFAULT || switchError?.data?.originalError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].addEthereumChain(EIP6963Provider, chain);
                        } else {
                            throw new Error('Chain is not supported');
                        }
                    }
                }
            } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID && chain) {
                const CoinbaseProvider = provider;
                if (CoinbaseProvider) {
                    try {
                        await CoinbaseProvider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].numberToHexString(chain.chainId)
                                }
                            ]
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain.chainId);
                    } catch (switchError) {
                        if (switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_DEFAULT || switchError?.data?.originalError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3ConstantsUtil"].ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3HelpersUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3HelpersUtil"].addEthereumChain(CoinbaseProvider, chain);
                        }
                    }
                }
            } else if (providerType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EMAIL_CONNECTOR_ID) {
                if (this.emailProvider && chain?.chainId) {
                    try {
                        await this.emailProvider.switchNetwork(chain?.chainId);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setChainId(chain.chainId);
                        const { address, preferredAccountType } = await this.emailProvider.connect({
                            chainId: chain?.chainId
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setAddress(address);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].setPreferredAccountType(preferredAccountType);
                        await this.syncAccount();
                    } catch  {
                        throw new Error('Switching chain failed');
                    }
                }
            }
        }
    }
    syncConnectors(config) {
        const w3mConnectors = [];
        const connectorType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorTypesMap[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID];
        if (connectorType) {
            w3mConnectors.push({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID,
                explorerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID],
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorImageIds[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID],
                imageUrl: this.options?.connectorImages?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID],
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorNamesMap[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].WALLET_CONNECT_CONNECTOR_ID],
                type: connectorType
            });
        }
        if (config.injected) {
            const injectedConnectorType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorTypesMap[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID];
            if (injectedConnectorType) {
                w3mConnectors.push({
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID,
                    explorerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID],
                    imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorImageIds[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID],
                    imageUrl: this.options?.connectorImages?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID],
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorNamesMap[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].INJECTED_CONNECTOR_ID],
                    type: injectedConnectorType
                });
            }
        }
        if (config.coinbase) {
            w3mConnectors.push({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID,
                explorerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorExplorerIds[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID],
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorImageIds[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID],
                imageUrl: this.options?.connectorImages?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID],
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorNamesMap[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COINBASE_CONNECTOR_ID],
                type: 'EXTERNAL'
            });
        }
        this.setConnectors(w3mConnectors);
    }
    async syncEmailConnector(projectId) {
        if (typeof window !== 'undefined') {
            this.emailProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameProvider"](projectId);
            this.addConnector({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EMAIL_CONNECTOR_ID,
                type: 'EMAIL',
                name: 'Email',
                provider: this.emailProvider
            });
            super.setLoading(true);
            const isLoginEmailUsed = this.emailProvider.getLoginEmailUsed();
            super.setLoading(isLoginEmailUsed);
            const { isConnected } = await this.emailProvider.isConnected();
            if (isConnected) {
                await this.setEmailProvider();
            } else {
                super.setLoading(false);
            }
        }
    }
    eip6963EventHandler(event) {
        if (event.detail) {
            const { info, provider } = event.detail;
            const connectors = this.getConnectors();
            const existingConnector = connectors.find((c)=>c.name === info.name);
            if (!existingConnector) {
                const type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].ConnectorTypesMap[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_CONNECTOR_ID];
                if (type) {
                    this.addConnector({
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_CONNECTOR_ID,
                        type,
                        imageUrl: info.icon ?? this.options?.connectorImages?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_CONNECTOR_ID],
                        name: info.name,
                        provider,
                        info
                    });
                    const eip6963ProviderObj = {
                        provider,
                        info
                    };
                    this.EIP6963Providers.push(eip6963ProviderObj);
                }
            }
        }
    }
    listenConnectors(enableEIP6963) {
        if (typeof window !== 'undefined' && enableEIP6963) {
            const handler = this.eip6963EventHandler.bind(this);
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_ANNOUNCE_EVENT, handler);
            window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP6963_REQUEST_EVENT));
        }
    }
} //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/utils/defaultConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultConfig": (()=>defaultConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$polyfills$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$polyfills$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+polyfills@4.1.12-910a844.0/node_modules/@web3modal/polyfills/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$wallet$2d$sdk$40$3$2e$9$2e$1$2f$node_modules$2f40$coinbase$2f$wallet$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@coinbase+wallet-sdk@3.9.1/node_modules/@coinbase/wallet-sdk/dist/index.js [app-client] (ecmascript)");
;
;
function defaultConfig(options) {
    const { enableEIP6963 = true, enableInjected = true, enableCoinbase = true, enableEmail = false, metadata, rpcUrl, defaultChainId } = options;
    let injectedProvider = undefined;
    let coinbaseProvider = undefined;
    const providers = {
        metadata
    };
    function getInjectedProvider() {
        if (injectedProvider) {
            return injectedProvider;
        }
        if (typeof window === 'undefined') {
            return undefined;
        }
        if (!window.ethereum) {
            return undefined;
        }
        injectedProvider = window.ethereum;
        return injectedProvider;
    }
    function getCoinbaseProvider() {
        if (coinbaseProvider) {
            return coinbaseProvider;
        }
        if (typeof window === 'undefined') {
            return undefined;
        }
        const coinbaseWallet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$coinbase$2b$wallet$2d$sdk$40$3$2e$9$2e$1$2f$node_modules$2f40$coinbase$2f$wallet$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinbaseWalletSDK"]({
            appName: metadata.name,
            appLogoUrl: metadata.icons[0],
            darkMode: false,
            enableMobileWalletLink: true
        });
        coinbaseProvider = coinbaseWallet.makeWeb3Provider(rpcUrl, defaultChainId);
        return coinbaseProvider;
    }
    if (enableInjected) {
        providers.injected = getInjectedProvider();
    }
    if (enableCoinbase && rpcUrl && defaultChainId) {
        providers.coinbase = getCoinbaseProvider();
    }
    if (enableEIP6963) {
        providers.EIP6963 = true;
    }
    if (enableEmail) {
        providers.email = true;
    }
    return providers;
} //# sourceMappingURL=defaultConfig.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/exports/react.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createWeb3Modal": (()=>createWeb3Modal),
    "useDisconnect": (()=>useDisconnect),
    "useSwitchNetwork": (()=>useSwitchNetwork),
    "useWeb3ModalAccount": (()=>useWeb3ModalAccount),
    "useWeb3ModalError": (()=>useWeb3ModalError),
    "useWeb3ModalProvider": (()=>useWeb3ModalProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$react$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-react@4.1.12-910a844.0_@types+react@19.0.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@web3modal/scaffold-react/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3StoreUtil.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
let modal = undefined;
function createWeb3Modal(options) {
    if (!modal) {
        modal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3Modal"]({
            ...options,
            _sdkVersion: `react-web3-${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].VERSION}`
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$react$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeb3Modal"])(modal);
    return modal;
}
function useWeb3ModalProvider() {
    const { provider, providerType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state);
    const walletProvider = provider;
    const walletProviderType = providerType;
    return {
        walletProvider,
        walletProviderType
    };
}
function useDisconnect() {
    async function disconnect() {
        await modal?.disconnect();
    }
    return {
        disconnect
    };
}
function useSwitchNetwork() {
    async function switchNetwork(chainId) {
        await modal?.switchNetwork(chainId);
    }
    return {
        switchNetwork
    };
}
function useWeb3ModalAccount() {
    const { address, isConnected, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state);
    return {
        address,
        isConnected,
        chainId
    };
}
function useWeb3ModalError() {
    const { error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3StoreUtil"].state);
    return {
        error
    };
}
;
;
 //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/exports/react.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$utils$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$utils$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-utils@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold-utils/dist/esm/exports/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$scaffold$2d$utils$2f$Web3StoreUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/scaffold-utils/Web3StoreUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$2d$react$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold-react@4.1.12-910a844.0_@types+react@19.0.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@web3modal/scaffold-react/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$src$2f$utils$2f$defaultConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/src/utils/defaultConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/exports/react.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=d540c_web3modal-web3js_dist_esm_37f331._.js.map