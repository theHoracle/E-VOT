(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/df744_@web3modal_core_dist_esm_ff6eba._.js", {

"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConstantsUtil": (()=>ConstantsUtil),
    "ONRAMP_PROVIDERS": (()=>ONRAMP_PROVIDERS)
});
const SECURE_SITE = 'https://secure.walletconnect.com';
const ONRAMP_PROVIDERS = [
    {
        label: 'Coinbase',
        name: 'coinbase',
        feeRange: '1-2%',
        url: ''
    }
];
const ConstantsUtil = {
    FOUR_MINUTES_MS: 240000,
    TEN_SEC_MS: 10000,
    ONE_SEC_MS: 1000,
    SECURE_SITE,
    SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
    SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
    RESTRICTED_TIMEZONES: [
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
    ],
    WC_COINBASE_PAY_SDK_CHAINS: [
        'ethereum',
        'arbitrum',
        'polygon',
        'avalanche-c-chain',
        'optimism',
        'celo',
        'base'
    ],
    WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: 'ethereum',
    WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
        Ethereum: 'ethereum',
        'Arbitrum One': 'arbitrum',
        Polygon: 'polygon',
        Avalanche: 'avalanche-c-chain',
        'OP Mainnet': 'optimism',
        Celo: 'celo',
        Base: 'base'
    },
    WC_COINBASE_ONRAMP_APP_ID: 'bf18c88d-495a-463b-b249-0b9d3656cf5e',
    SUGGESTED_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP'
    ],
    POPULAR_TOKENS: [
        'ETH',
        'UNI',
        '1INCH',
        'AAVE',
        'SOL',
        'ADA',
        'AVAX',
        'DOT',
        'LINK',
        'NITRO',
        'GAIA',
        'MILK',
        'TRX',
        'NEAR',
        'GNO',
        'WBTC',
        'DAI',
        'WETH',
        'USDC',
        'USDT',
        'ARB',
        'BAL',
        'BICO',
        'CRV',
        'ENS',
        'MATIC',
        'OP',
        'DAI',
        'CHAMP',
        'WOLF',
        'SALE',
        'BAL',
        'BUSD',
        'MUST',
        'BTCpx',
        'ROUTE',
        'HEX',
        'WELT',
        'amDAI',
        'VSQ',
        'VISION',
        'AURUM',
        'pSP',
        'SNX',
        'VC',
        'LINK',
        'CHP',
        'amUSDT',
        'SPHERE',
        'FOX',
        'GIDDY',
        'GFC',
        'OMEN',
        'OX_OLD',
        'DE',
        'WNT'
    ],
    NATIVE_TOKEN_ADDRESS: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    CONVERT_SLIPPAGE_TOLERANCE: 1
}; //# sourceMappingURL=ConstantsUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CoreHelperUtil": (()=>CoreHelperUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const CoreHelperUtil = {
    isMobile () {
        if (typeof window !== 'undefined') {
            return Boolean(window.matchMedia('(pointer:coarse)').matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
        }
        return false;
    },
    checkCaipNetwork (network, networkName = '') {
        return network?.id.toLocaleLowerCase().includes(networkName.toLowerCase());
    },
    isAndroid () {
        const ua = window.navigator.userAgent.toLowerCase();
        return CoreHelperUtil.isMobile() && ua.includes('android');
    },
    isIos () {
        const ua = window.navigator.userAgent.toLowerCase();
        return CoreHelperUtil.isMobile() && (ua.includes('iphone') || ua.includes('ipad'));
    },
    isClient () {
        return typeof window !== 'undefined';
    },
    isPairingExpired (expiry) {
        return expiry ? expiry - Date.now() <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].TEN_SEC_MS : true;
    },
    isAllowedRetry (lastRetry) {
        return Date.now() - lastRetry >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].ONE_SEC_MS;
    },
    copyToClopboard (text) {
        navigator.clipboard.writeText(text);
    },
    getPairingExpiry () {
        return Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].FOUR_MINUTES_MS;
    },
    getPlainAddress (caipAddress) {
        return caipAddress.split(':')[2];
    },
    async wait (milliseconds) {
        return new Promise((resolve)=>{
            setTimeout(resolve, milliseconds);
        });
    },
    debounce (func, timeout = 500) {
        let timer = undefined;
        return (...args)=>{
            function next() {
                func(...args);
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(next, timeout);
        };
    },
    isHttpUrl (url) {
        return url.startsWith('http://') || url.startsWith('https://');
    },
    formatNativeUrl (appUrl, wcUri) {
        if (CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatUniversalUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.includes('://')) {
            safeAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
            safeAppUrl = `${safeAppUrl}://`;
        }
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    formatUniversalUrl (appUrl, wcUri) {
        if (!CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatNativeUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    openHref (href, target, features) {
        window.open(href, target, features || 'noreferrer noopener');
    },
    async preloadImage (src) {
        const imagePromise = new Promise((resolve, reject)=>{
            const image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.crossOrigin = 'anonymous';
            image.src = src;
        });
        return Promise.race([
            imagePromise,
            CoreHelperUtil.wait(2000)
        ]);
    },
    formatBalance (balance, symbol) {
        let formattedBalance = undefined;
        if (balance === '0') {
            formattedBalance = '0.000';
        } else if (typeof balance === 'string') {
            const number = Number(balance);
            if (number) {
                formattedBalance = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0];
            }
        }
        return formattedBalance ? `${formattedBalance} ${symbol ?? ''}` : `0.000 ${symbol ?? ''}`;
    },
    formatBalance2 (balance, symbol) {
        let formattedBalance = undefined;
        if (balance === '0') {
            formattedBalance = '0';
        } else if (typeof balance === 'string') {
            const number = Number(balance);
            if (number) {
                formattedBalance = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0];
            }
        }
        return {
            value: formattedBalance ?? '0',
            rest: formattedBalance === '0' ? '000' : '',
            symbol
        };
    },
    isRestrictedRegion () {
        try {
            const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();
            const capTimeZone = timeZone.toUpperCase();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].RESTRICTED_TIMEZONES.includes(capTimeZone);
        } catch  {
            return false;
        }
    },
    getApiUrl () {
        return CoreHelperUtil.isRestrictedRegion() ? 'https://api.web3modal.org' : 'https://api.web3modal.com';
    },
    getBlockchainApiUrl () {
        return CoreHelperUtil.isRestrictedRegion() ? 'https://rpc.walletconnect.org' : 'https://rpc.walletconnect.com';
    },
    getAnalyticsUrl () {
        return CoreHelperUtil.isRestrictedRegion() ? 'https://pulse.walletconnect.org' : 'https://pulse.walletconnect.com';
    },
    getUUID () {
        if (crypto?.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (c)=>{
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    },
    parseError (error) {
        if (typeof error === 'string') {
            return error;
        } else if (typeof error?.issues?.[0]?.message === 'string') {
            return error.issues[0].message;
        } else if (error instanceof Error) {
            return error.message;
        }
        return 'Unknown error';
    },
    sortRequestedNetworks (approvedIds, requestedNetworks = []) {
        const approvedIndexMap = {};
        if (requestedNetworks && approvedIds) {
            approvedIds.forEach((id, index)=>{
                approvedIndexMap[id] = index;
            });
            requestedNetworks.sort((a, b)=>{
                const indexA = approvedIndexMap[a.id];
                const indexB = approvedIndexMap[b.id];
                if (indexA !== undefined && indexB !== undefined) {
                    return indexA - indexB;
                } else if (indexA !== undefined) {
                    return -1;
                } else if (indexB !== undefined) {
                    return 1;
                }
                return 0;
            });
        }
        return requestedNetworks;
    },
    calculateBalance (array) {
        let sum = 0;
        for (const item of array){
            sum += item.value ?? 0;
        }
        return sum;
    },
    formatTokenBalance (number) {
        const roundedNumber = number.toFixed(2);
        const [dollars, pennies] = roundedNumber.split('.');
        return {
            dollars,
            pennies
        };
    },
    isAddress (address) {
        if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
            return false;
        } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
            return true;
        }
        return false;
    }
}; //# sourceMappingURL=CoreHelperUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FetchUtil": (()=>FetchUtil)
});
class FetchUtil {
    constructor({ baseUrl }){
        this.baseUrl = baseUrl;
    }
    async get({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'GET',
            headers,
            signal,
            cache: 'no-cache'
        });
        return response.json();
    }
    async getBlob({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'GET',
            headers,
            signal
        });
        return response.blob();
    }
    async post({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async put({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'PUT',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async delete({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetch(url, {
            method: 'DELETE',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    createUrl({ path, params }) {
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value])=>{
                if (value) {
                    url.searchParams.append(key, value);
                }
            });
        }
        return url;
    }
} //# sourceMappingURL=FetchUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OptionsController": (()=>OptionsController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    projectId: '',
    sdkType: 'w3m',
    sdkVersion: 'html-wagmi-undefined'
});
const OptionsController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    setProjectId (projectId) {
        state.projectId = projectId;
    },
    setAllWallets (allWallets) {
        state.allWallets = allWallets;
    },
    setIncludeWalletIds (includeWalletIds) {
        state.includeWalletIds = includeWalletIds;
    },
    setExcludeWalletIds (excludeWalletIds) {
        state.excludeWalletIds = excludeWalletIds;
    },
    setFeaturedWalletIds (featuredWalletIds) {
        state.featuredWalletIds = featuredWalletIds;
    },
    setTokens (tokens) {
        state.tokens = tokens;
    },
    setTermsConditionsUrl (termsConditionsUrl) {
        state.termsConditionsUrl = termsConditionsUrl;
    },
    setPrivacyPolicyUrl (privacyPolicyUrl) {
        state.privacyPolicyUrl = privacyPolicyUrl;
    },
    setCustomWallets (customWallets) {
        state.customWallets = customWallets;
    },
    setIsSiweEnabled (isSiweEnabled) {
        state.isSiweEnabled = isSiweEnabled;
    },
    setEnableAnalytics (enableAnalytics) {
        state.enableAnalytics = enableAnalytics;
    },
    setSdkVersion (sdkVersion) {
        state.sdkVersion = sdkVersion;
    },
    setMetadata (metadata) {
        state.metadata = metadata;
    },
    setOnrampEnabled (enableOnramp) {
        state.enableOnramp = enableOnramp;
    },
    setWalletFeaturesEnabled (enableWalletFeatures) {
        state.enableWalletFeatures = enableWalletFeatures;
    }
}; //# sourceMappingURL=OptionsController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BlockchainApiController": (()=>BlockchainApiController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
;
;
const DEFAULT_OPTIONS = {
    purchaseCurrencies: [
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'USD Coin',
            symbol: 'USDC',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        },
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'Ether',
            symbol: 'ETH',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        }
    ],
    paymentCurrencies: [
        {
            id: 'USD',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        },
        {
            id: 'EUR',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        }
    ]
};
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getBlockchainApiUrl();
const api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
    baseUrl
});
const BlockchainApiController = {
    fetchIdentity ({ address }) {
        return api.get({
            path: `/v1/identity/${address}`,
            params: {
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId
            }
        });
    },
    fetchTransactions ({ account, projectId, cursor, onramp, signal }) {
        const queryParams = cursor ? {
            cursor
        } : {};
        return api.get({
            path: `/v1/account/${account}/history?projectId=${projectId}${onramp ? `&onramp=${onramp}` : ''}`,
            params: queryParams,
            signal
        });
    },
    fetchConvertTokens ({ projectId, chainId }) {
        return api.get({
            path: `/v1/convert/tokens?projectId=${projectId}&chainId=${chainId}`
        });
    },
    fetchTokenPrice ({ projectId, addresses }) {
        return api.post({
            path: '/v1/fungible/price',
            body: {
                projectId,
                currency: 'usd',
                addresses
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    fetchConvertAllowance ({ projectId, tokenAddress, userAddress }) {
        const { sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return api.get({
            path: `/v1/convert/allowance?projectId=${projectId}&tokenAddress=${tokenAddress}&userAddress=${userAddress}`,
            headers: {
                'Content-Type': 'application/json',
                'x-sdk-type': sdkType,
                'x-sdk-version': sdkVersion
            }
        });
    },
    fetchGasPrice ({ projectId, chainId }) {
        const { sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return api.get({
            path: `/v1/convert/gas-price?projectId=${projectId}&chainId=${chainId}`,
            headers: {
                'Content-Type': 'application/json',
                'x-sdk-type': sdkType,
                'x-sdk-version': sdkVersion
            }
        });
    },
    generateConvertCalldata ({ amount, from, projectId, to, userAddress }) {
        return api.post({
            path: '/v1/convert/build-transaction',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                amount,
                eip155: {
                    slippage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONVERT_SLIPPAGE_TOLERANCE
                },
                from,
                projectId,
                to,
                userAddress
            }
        });
    },
    generateApproveCalldata ({ from, projectId, to, userAddress }) {
        const { sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return api.get({
            path: `/v1/convert/build-approve?projectId=${projectId}&userAddress=${userAddress}&from=${from}&to=${to}`,
            headers: {
                'Content-Type': 'application/json',
                'x-sdk-type': sdkType,
                'x-sdk-version': sdkVersion
            }
        });
    },
    async getBalance (address, chainId) {
        const { sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return api.get({
            path: `/v1/account/${address}/balance`,
            headers: {
                'x-sdk-type': sdkType,
                'x-sdk-version': sdkVersion
            },
            params: {
                currency: 'usd',
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
                chainId
            }
        });
    },
    async generateOnRampURL ({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
        const response = await api.post({
            path: `/v1/generators/onrampurl?projectId=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId}`,
            body: {
                destinationWallets,
                defaultNetwork,
                partnerUserId,
                defaultExperience: 'buy',
                presetCryptoAmount: purchaseAmount,
                presetFiatAmount: paymentAmount
            }
        });
        return response.url;
    },
    async getOnrampOptions () {
        try {
            const response = await api.get({
                path: `/v1/onramp/options?projectId=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId}`
            });
            return response;
        } catch (e) {
            return DEFAULT_OPTIONS;
        }
    },
    async getOnrampQuote ({ purchaseCurrency, paymentCurrency, amount, network }) {
        try {
            const response = await api.post({
                path: `/v1/onramp/quote?projectId=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId}`,
                body: {
                    purchaseCurrency,
                    paymentCurrency,
                    amount,
                    network
                }
            });
            return response;
        } catch (e) {
            return {
                coinbaseFee: {
                    amount,
                    currency: paymentCurrency.id
                },
                networkFee: {
                    amount,
                    currency: paymentCurrency.id
                },
                paymentSubtotal: {
                    amount,
                    currency: paymentCurrency.id
                },
                paymentTotal: {
                    amount,
                    currency: paymentCurrency.id
                },
                purchaseAmount: {
                    amount,
                    currency: paymentCurrency.id
                },
                quoteId: 'mocked-quote-id'
            };
        }
    }
}; //# sourceMappingURL=BlockchainApiController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SnackController": (()=>SnackController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    message: '',
    variant: 'success',
    open: false
});
const SnackController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    showSuccess (message) {
        state.message = message;
        state.variant = 'success';
        state.open = true;
    },
    showError (message) {
        const errorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].parseError(message);
        state.message = errorMessage;
        state.variant = 'error';
        state.open = true;
    },
    hide () {
        state.open = false;
    }
}; //# sourceMappingURL=SnackController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StorageUtil": (()=>StorageUtil)
});
const WC_DEEPLINK = 'WALLETCONNECT_DEEPLINK_CHOICE';
const W3M_RECENT = '@w3m/recent';
const W3M_CONNECTED_WALLET_IMAGE_URL = '@w3m/connected_wallet_image_url';
const W3M_CONNECTED_CONNECTOR = '@w3m/connected_connector';
const StorageUtil = {
    setWalletConnectDeepLink ({ href, name }) {
        try {
            localStorage.setItem(WC_DEEPLINK, JSON.stringify({
                href,
                name
            }));
        } catch  {
            console.info('Unable to set WalletConnect deep link');
        }
    },
    getWalletConnectDeepLink () {
        try {
            const deepLink = localStorage.getItem(WC_DEEPLINK);
            if (deepLink) {
                return JSON.parse(deepLink);
            }
        } catch  {
            console.info('Unable to get WalletConnect deep link');
        }
        return undefined;
    },
    deleteWalletConnectDeepLink () {
        try {
            localStorage.removeItem(WC_DEEPLINK);
        } catch  {
            console.info('Unable to delete WalletConnect deep link');
        }
    },
    setWeb3ModalRecent (wallet) {
        try {
            const recentWallets = StorageUtil.getRecentWallets();
            const exists = recentWallets.find((w)=>w.id === wallet.id);
            if (!exists) {
                recentWallets.unshift(wallet);
                if (recentWallets.length > 2) {
                    recentWallets.pop();
                }
                localStorage.setItem(W3M_RECENT, JSON.stringify(recentWallets));
            }
        } catch  {
            console.info('Unable to set Web3Modal recent');
        }
    },
    getRecentWallets () {
        try {
            const recent = localStorage.getItem(W3M_RECENT);
            return recent ? JSON.parse(recent) : [];
        } catch  {
            console.info('Unable to get Web3Modal recent');
        }
        return [];
    },
    setConnectedWalletImageUrl (imageUrl) {
        try {
            localStorage.setItem(W3M_CONNECTED_WALLET_IMAGE_URL, imageUrl);
        } catch  {
            console.info('Unable to set Connected Wallet Image Url');
        }
    },
    getConnectedWalletImageUrl () {
        try {
            return localStorage.getItem(W3M_CONNECTED_WALLET_IMAGE_URL);
        } catch  {
            console.info('Unable to set Connected Wallet Image Url');
        }
        return undefined;
    },
    setConnectedConnector (connectorType) {
        try {
            localStorage.setItem(W3M_CONNECTED_CONNECTOR, connectorType);
        } catch  {
            console.info('Unable to set Connected Connector');
        }
    },
    getConnectedConnector () {
        try {
            return localStorage.getItem(W3M_CONNECTED_CONNECTOR);
        } catch  {
            console.info('Unable to get Connected Connector');
        }
        return undefined;
    }
}; //# sourceMappingURL=StorageUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EventsController": (()=>EventsController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
;
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getAnalyticsUrl();
const api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
    baseUrl
});
const excluded = [
    'MODAL_CREATED'
];
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    timestamp: Date.now(),
    data: {
        type: 'track',
        event: 'MODAL_CREATED'
    }
});
const EventsController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    _getApiHeaders () {
        const { projectId, sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return {
            'x-project-id': projectId,
            'x-sdk-type': sdkType,
            'x-sdk-version': sdkVersion
        };
    },
    async _sendAnalyticsEvent (payload) {
        try {
            if (excluded.includes(payload.data.event) || typeof window === 'undefined') {
                return;
            }
            await api.post({
                path: '/e',
                headers: EventsController._getApiHeaders(),
                body: {
                    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: payload.timestamp,
                    props: payload.data
                }
            });
        } catch  {}
    },
    sendEvent (data) {
        state.timestamp = Date.now();
        state.data = data;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableAnalytics) {
            EventsController._sendAnalyticsEvent(state);
        }
    }
}; //# sourceMappingURL=EventsController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/TransactionsController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TransactionsController": (()=>TransactionsController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    transactions: [],
    coinbaseTransactions: {},
    transactionsByYear: {},
    loading: false,
    empty: false,
    next: undefined
});
const TransactionsController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    async fetchTransactions (accountAddress, onramp) {
        const { projectId } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        if (!projectId || !accountAddress) {
            throw new Error("Transactions can't be fetched without a projectId and an accountAddress");
        }
        state.loading = true;
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchTransactions({
                account: accountAddress,
                projectId,
                cursor: state.next,
                onramp
            });
            const nonSpamTransactions = this.filterSpamTransactions(response.data);
            const filteredTransactions = [
                ...state.transactions,
                ...nonSpamTransactions
            ];
            state.loading = false;
            if (onramp === 'coinbase') {
                state.coinbaseTransactions = this.groupTransactionsByYearAndMonth(state.coinbaseTransactions, response.data);
            } else {
                state.transactions = filteredTransactions;
                state.transactionsByYear = this.groupTransactionsByYearAndMonth(state.transactionsByYear, nonSpamTransactions);
            }
            state.empty = filteredTransactions.length === 0;
            state.next = response.next ? response.next : undefined;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'ERROR_FETCH_TRANSACTIONS',
                properties: {
                    address: accountAddress,
                    projectId,
                    cursor: state.next
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to fetch transactions');
            state.loading = false;
            state.empty = true;
            state.next = undefined;
        }
    },
    groupTransactionsByYearAndMonth (transactionsMap = {}, transactions = []) {
        const grouped = transactionsMap;
        transactions.forEach((transaction)=>{
            const year = new Date(transaction.metadata.minedAt).getFullYear();
            const month = new Date(transaction.metadata.minedAt).getMonth();
            const yearTransactions = grouped[year] ?? {};
            const monthTransactions = yearTransactions[month] ?? [];
            const newMonthTransactions = monthTransactions.filter((tx)=>tx.id !== transaction.id);
            grouped[year] = {
                ...yearTransactions,
                [month]: [
                    ...newMonthTransactions,
                    transaction
                ].sort((a, b)=>new Date(b.metadata.minedAt).getTime() - new Date(a.metadata.minedAt).getTime())
            };
        });
        return grouped;
    },
    filterSpamTransactions (transactions) {
        return transactions.filter((transaction)=>{
            const isAllSpam = transaction.transfers.every((transfer)=>transfer.nft_info?.flags.is_spam === true);
            return !isAllSpam;
        });
    },
    clearCursor () {
        state.next = undefined;
    },
    resetTransactions () {
        state.transactions = [];
        state.transactionsByYear = {};
        state.loading = false;
        state.empty = false;
        state.next = undefined;
    }
}; //# sourceMappingURL=TransactionsController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConnectionController": (()=>ConnectionController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$TransactionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/TransactionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    wcError: false,
    buffering: false
});
const ConnectionController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    _getClient () {
        if (!state._client) {
            throw new Error('ConnectionController client not set');
        }
        return state._client;
    },
    setClient (client) {
        state._client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(client);
    },
    connectWalletConnect () {
        state.wcPromise = this._getClient().connectWalletConnect((uri)=>{
            state.wcUri = uri;
            state.wcPairingExpiry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPairingExpiry();
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setConnectedConnector('WALLET_CONNECT');
    },
    async connectExternal (options) {
        await this._getClient().connectExternal?.(options);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].setConnectedConnector(options.type);
    },
    async signMessage (message) {
        return this._getClient().signMessage(message);
    },
    parseUnits (value, decimals) {
        return this._getClient().parseUnits(value, decimals);
    },
    formatUnits (value, decimals) {
        return this._getClient().formatUnits(value, decimals);
    },
    async sendTransaction (args) {
        return this._getClient().sendTransaction(args);
    },
    async estimateGas (args) {
        return this._getClient().estimateGas(args);
    },
    checkInstalled (ids) {
        return this._getClient().checkInstalled?.(ids);
    },
    resetWcConnection () {
        state.wcUri = undefined;
        state.wcPairingExpiry = undefined;
        state.wcPromise = undefined;
        state.wcLinking = undefined;
        state.recentWallet = undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$TransactionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsController"].resetTransactions();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].deleteWalletConnectDeepLink();
    },
    setWcLinking (wcLinking) {
        state.wcLinking = wcLinking;
    },
    setWcError (wcError) {
        state.wcError = wcError;
        state.buffering = false;
    },
    setRecentWallet (wallet) {
        state.recentWallet = wallet;
    },
    setBuffering (buffering) {
        state.buffering = buffering;
    },
    async disconnect () {
        await this._getClient().disconnect();
        this.resetWcConnection();
    }
}; //# sourceMappingURL=ConnectionController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PublicStateController": (()=>PublicStateController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    loading: false,
    open: false,
    selectedNetworkId: undefined
});
const PublicStateController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    set (newState) {
        Object.assign(state, {
            ...state,
            ...newState
        });
    }
}; //# sourceMappingURL=PublicStateController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NetworkController": (()=>NetworkController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    supportsAllNetworks: true,
    isDefaultCaipNetwork: false,
    smartAccountEnabledNetworks: []
});
const NetworkController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    _getClient () {
        if (!state._client) {
            throw new Error('NetworkController client not set');
        }
        return state._client;
    },
    setClient (client) {
        state._client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(client);
    },
    setCaipNetwork (caipNetwork) {
        state.caipNetwork = caipNetwork;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            selectedNetworkId: caipNetwork?.id
        });
        if (!this.state.allowUnsupportedChain) {
            this.checkIfSupportedNetwork();
        }
    },
    setDefaultCaipNetwork (caipNetwork) {
        state.caipNetwork = caipNetwork;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            selectedNetworkId: caipNetwork?.id
        });
        state.isDefaultCaipNetwork = true;
    },
    setRequestedCaipNetworks (requestedNetworks) {
        state.requestedCaipNetworks = requestedNetworks;
    },
    setAllowUnsupportedChain (allowUnsupportedChain) {
        state.allowUnsupportedChain = allowUnsupportedChain;
    },
    setSmartAccountEnabledNetworks (smartAccountEnabledNetworks) {
        state.smartAccountEnabledNetworks = smartAccountEnabledNetworks;
    },
    getRequestedCaipNetworks () {
        const { approvedCaipNetworkIds, requestedCaipNetworks } = state;
        const approvedIds = approvedCaipNetworkIds;
        const requestedNetworks = requestedCaipNetworks;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].sortRequestedNetworks(approvedIds, requestedNetworks);
    },
    async getApprovedCaipNetworksData () {
        const data = await this._getClient().getApprovedCaipNetworksData();
        state.supportsAllNetworks = data.supportsAllNetworks;
        state.approvedCaipNetworkIds = data.approvedCaipNetworkIds;
    },
    async switchActiveNetwork (network) {
        await this._getClient().switchCaipNetwork(network);
        state.caipNetwork = network;
        if (network) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'SWITCH_NETWORK',
                properties: {
                    network: network.id
                }
            });
        }
    },
    checkIfSupportedNetwork () {
        state.isUnsupportedChain = !state.requestedCaipNetworks?.some((network)=>network.id === state.caipNetwork?.id);
        if (state.isUnsupportedChain) {
            this.showUnsupportedChainUI();
        }
    },
    checkIfSmartAccountEnabled () {
        const networkId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NetworkUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkUtil"].caipNetworkIdToNumber(state.caipNetwork?.id);
        if (!networkId) {
            return false;
        }
        return Boolean(state.smartAccountEnabledNetworks?.includes(networkId));
    },
    resetNetwork () {
        if (!state.isDefaultCaipNetwork) {
            state.caipNetwork = undefined;
        }
        state.approvedCaipNetworkIds = undefined;
        state.supportsAllNetworks = true;
        state.smartAccountEnabledNetworks = [];
    },
    showUnsupportedChainUI () {
        setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open({
                view: 'UnsupportedChain'
            });
        }, 300);
    }
}; //# sourceMappingURL=NetworkController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConvertApiUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvertApiUtil": (()=>ConvertApiUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
;
;
;
;
const ConvertApiUtil = {
    async getTokenList () {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchConvertTokens({
            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork?.id,
            projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId
        });
        const tokens = response.tokens.map((token)=>{
            return {
                ...token,
                eip2612: false,
                quantity: {
                    decimals: '0',
                    numeric: '0'
                },
                price: 0,
                value: 0
            };
        });
        return tokens;
    },
    async fetchGasPrice () {
        const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId;
        const caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork;
        if (!caipNetwork) {
            return null;
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchGasPrice({
            projectId,
            chainId: caipNetwork.id
        });
    },
    async fetchConvertAllowance ({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
        const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchConvertAllowance({
            projectId,
            tokenAddress,
            userAddress
        });
        if (response?.allowance && sourceTokenAmount && sourceTokenDecimals) {
            const parsedValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].parseUnits(sourceTokenAmount, sourceTokenDecimals);
            const hasAllowance = BigInt(response.allowance) >= parsedValue;
            return hasAllowance;
        }
        return false;
    },
    async getMyTokensWithBalance () {
        const address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.address;
        const caipNetwork = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork;
        if (!address || !caipNetwork) {
            return [];
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getBalance(address, caipNetwork.id);
        const balances = response.balances;
        return this.mapBalancesToConvertTokens(balances);
    },
    mapBalancesToConvertTokens (balances) {
        return balances.map((token)=>{
            return {
                symbol: token.symbol,
                name: token.name,
                address: token?.address ? token.address : `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork?.id}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].NATIVE_TOKEN_ADDRESS}`,
                decimals: parseInt(token.quantity.decimals, 10),
                logoUri: token.iconUrl,
                eip2612: false,
                quantity: token.quantity,
                price: token.price,
                value: token.value
            };
        });
    }
}; //# sourceMappingURL=ConvertApiUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RouterController": (()=>RouterController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    view: 'Connect',
    history: [
        'Connect'
    ],
    transactionStack: []
});
const RouterController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    pushTransactionStack (action) {
        state.transactionStack.push(action);
    },
    popTransactionStack (cancel) {
        const action = state.transactionStack.pop();
        if (!action) {
            return;
        }
        if (cancel) {
            this.goBack();
            action?.onCancel?.();
        } else {
            if (action.goBack) {
                this.goBack();
            } else if (action.view) {
                this.reset(action.view);
            }
            action?.onSuccess?.();
        }
    },
    push (view, data) {
        if (view !== state.view) {
            state.view = view;
            state.history.push(view);
            state.data = data;
        }
    },
    reset (view) {
        state.view = view;
        state.history = [
            view
        ];
    },
    replace (view, data) {
        if (state.history.length > 1 && state.history.at(-1) !== view) {
            state.view = view;
            state.history[state.history.length - 1] = view;
            state.data = data;
        }
    },
    goBack () {
        if (state.history.length > 1) {
            state.history.pop();
            const [last] = state.history.slice(-1);
            if (last) {
                state.view = last;
            }
        }
    },
    goBackToIndex (historyIndex) {
        if (state.history.length > 1) {
            state.history = state.history.slice(0, historyIndex + 1);
            const [last] = state.history.slice(-1);
            if (last) {
                state.view = last;
            }
        }
    }
}; //# sourceMappingURL=RouterController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConvertController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvertController": (()=>ConvertController),
    "INITIAL_GAS_LIMIT": (()=>INITIAL_GAS_LIMIT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConvertApiUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/src/utils/NumberUtil.js [app-client] (ecmascript)");
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
const INITIAL_GAS_LIMIT = 150000;
class TransactionError extends Error {
    constructor(message, shortMessage){
        super(message);
        this.name = 'TransactionError';
        this.shortMessage = shortMessage;
    }
}
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    initialized: false,
    loading: false,
    loadingPrices: false,
    approvalTransaction: undefined,
    convertTransaction: undefined,
    transactionError: undefined,
    transactionLoading: false,
    sourceToken: undefined,
    sourceTokenAmount: '',
    sourceTokenPriceInUSD: 0,
    toToken: undefined,
    toTokenAmount: '',
    toTokenPriceInUSD: 0,
    networkPrice: '0',
    networkBalanceInUSD: '0',
    inputError: undefined,
    slippage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONVERT_SLIPPAGE_TOLERANCE,
    tokens: undefined,
    popularTokens: undefined,
    suggestedTokens: undefined,
    foundTokens: undefined,
    myTokensWithBalance: undefined,
    tokensPriceMap: {},
    gasFee: BigInt(0),
    gasPriceInUSD: 0,
    priceImpact: undefined,
    maxSlippage: undefined
});
const ConvertController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    getParams () {
        const { address } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state;
        const networkAddress = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork?.id}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].NATIVE_TOKEN_ADDRESS}`;
        if (!address) {
            throw new Error('No address found to swap the tokens from.');
        }
        return {
            networkAddress,
            fromAddress: address,
            fromCaipAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.caipAddress,
            sourceTokenAddress: state.sourceToken?.address,
            toTokenAddress: state.toToken?.address,
            toTokenAmount: state.toTokenAmount,
            toTokenDecimals: state.toToken?.decimals,
            sourceTokenAmount: state.sourceTokenAmount,
            sourceTokenDecimals: state.sourceToken?.decimals
        };
    },
    setLoading (loading) {
        state.loading = loading;
    },
    setSourceToken (sourceToken) {
        if (!sourceToken) {
            return;
        }
        state.sourceToken = sourceToken;
        this.setTokenValues(sourceToken.address, 'sourceToken');
    },
    setSourceTokenAmount (amount) {
        const { sourceTokenAddress } = this.getParams();
        state.sourceTokenAmount = amount;
        if (sourceTokenAddress) {
            this.setTokenValues(sourceTokenAddress, 'sourceToken');
        }
    },
    setToToken (toToken) {
        const { sourceTokenAddress, sourceTokenAmount } = this.getParams();
        if (!toToken) {
            state.toTokenAmount = '0';
            state.toTokenPriceInUSD = 0;
            return;
        }
        state.toToken = toToken;
        this.setTokenValues(toToken.address, 'toToken');
        if (sourceTokenAddress && sourceTokenAmount) {
            this.makeChecks();
        }
    },
    setToTokenAmount (amount) {
        const { toTokenAddress } = this.getParams();
        state.toTokenAmount = amount;
        if (toTokenAddress) {
            this.setTokenValues(toTokenAddress, 'toToken');
        }
    },
    async setTokenValues (address, target) {
        let price = state.tokensPriceMap[address] || 0;
        if (!price) {
            price = await this.getAddressPrice(address);
        }
        if (target === 'sourceToken') {
            state.sourceTokenPriceInUSD = price;
        } else if (target === 'toToken') {
            state.toTokenPriceInUSD = price;
        }
    },
    switchTokens () {
        const newSourceToken = state.toToken ? {
            ...state.toToken
        } : undefined;
        const newToToken = state.sourceToken ? {
            ...state.sourceToken
        } : undefined;
        this.setSourceToken(newSourceToken);
        this.setToToken(newToToken);
        this.setSourceTokenAmount(state.toTokenAmount || '0');
        ConvertController.convertTokens();
    },
    resetTokens () {
        state.tokens = undefined;
        state.popularTokens = undefined;
        state.myTokensWithBalance = undefined;
        state.initialized = false;
    },
    resetValues () {
        const { networkAddress } = this.getParams();
        const networkToken = state.tokens?.find((token)=>token.address === networkAddress);
        this.setSourceToken(networkToken);
        state.sourceTokenPriceInUSD = state.tokensPriceMap[networkAddress] || 0;
        state.sourceTokenAmount = '0';
        this.setToToken(undefined);
        state.gasPriceInUSD = 0;
    },
    clearError () {
        state.transactionError = undefined;
    },
    async initializeState () {
        if (!state.initialized) {
            await this.fetchTokens();
            state.initialized = true;
        }
    },
    async fetchTokens () {
        const { networkAddress } = this.getParams();
        await this.getTokenList();
        await this.getNetworkTokenPrice();
        await this.getMyTokensWithBalance();
        const networkToken = state.tokens?.find((token)=>token.address === networkAddress);
        if (networkToken) {
            this.setSourceToken(networkToken);
        }
    },
    async getTokenList () {
        const tokens = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvertApiUtil"].getTokenList();
        state.tokens = tokens;
        state.popularTokens = tokens.sort((aTokenInfo, bTokenInfo)=>{
            if (aTokenInfo.symbol < bTokenInfo.symbol) {
                return -1;
            }
            if (aTokenInfo.symbol > bTokenInfo.symbol) {
                return 1;
            }
            return 0;
        }).filter((token)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].POPULAR_TOKENS.includes(token.symbol)) {
                return true;
            }
            return false;
        }, {});
        state.suggestedTokens = tokens.filter((token)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SUGGESTED_TOKENS.includes(token.symbol)) {
                return true;
            }
            return false;
        }, {});
    },
    async getAddressPrice (address) {
        const existPrice = state.tokensPriceMap[address];
        if (existPrice) {
            return existPrice;
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchTokenPrice({
            projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
            addresses: [
                address
            ]
        });
        const fungibles = response.fungibles || [];
        const allTokens = [
            ...state.tokens || [],
            ...state.myTokensWithBalance || []
        ];
        const symbol = allTokens?.find((token)=>token.address === address)?.symbol;
        const price = fungibles.find((p)=>p.symbol === symbol)?.price || '0';
        const priceAsFloat = parseFloat(price);
        state.tokensPriceMap[address] = priceAsFloat;
        return priceAsFloat;
    },
    async getNetworkTokenPrice () {
        const { networkAddress } = this.getParams();
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchTokenPrice({
            projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
            addresses: [
                networkAddress
            ]
        });
        const token = response.fungibles?.[0];
        const price = token?.price || '0';
        state.tokensPriceMap[networkAddress] = parseFloat(price);
        state.networkPrice = price;
    },
    async getMyTokensWithBalance () {
        const balances = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvertApiUtil"].getMyTokensWithBalance();
        if (!balances) {
            return;
        }
        await this.getInitialGasPrice();
        this.setBalances(balances);
    },
    setBalances (balances) {
        const { networkAddress } = this.getParams();
        const networkToken = balances.find((token)=>token.address === networkAddress);
        balances.forEach((token)=>{
            state.tokensPriceMap[token.address] = token.price || 0;
        });
        state.myTokensWithBalance = balances;
        state.networkBalanceInUSD = networkToken ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].multiply(networkToken.quantity.numeric, networkToken.price).toString() : '0';
    },
    async getInitialGasPrice () {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvertApiUtil"].fetchGasPrice();
        if (!res) {
            return;
        }
        const value = res.instant;
        const gasFee = BigInt(value);
        const gasLimit = BigInt(INITIAL_GAS_LIMIT);
        const gasPrice = this.calculateGasPriceInUSD(gasLimit, gasFee);
        state.gasPriceInUSD = gasPrice;
    },
    async refreshConvertValues () {
        const { fromAddress, toTokenDecimals, toTokenAddress } = this.getParams();
        if (fromAddress && toTokenAddress && toTokenDecimals && !state.loading) {
            const transaction = await this.getTransaction();
            this.setTransactionDetails(transaction);
        }
    },
    calculateGasPriceInEther (gas, gasPrice) {
        const totalGasCostInWei = gasPrice * gas;
        const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
        return totalGasCostInEther;
    },
    calculateGasPriceInUSD (gas, gasPrice) {
        const totalGasCostInEther = this.calculateGasPriceInEther(gas, gasPrice);
        const networkPriceInUSD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(state.networkPrice);
        const gasCostInUSD = networkPriceInUSD.multipliedBy(totalGasCostInEther);
        return gasCostInUSD.toNumber();
    },
    calculatePriceImpact (toTokenAmount, gasPriceInUSD) {
        const sourceTokenAmount = state.sourceTokenAmount;
        const sourceTokenPrice = state.sourceTokenPriceInUSD;
        const toTokenPrice = state.toTokenPriceInUSD;
        const totalCostInUSD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(sourceTokenAmount).multipliedBy(sourceTokenPrice).plus(gasPriceInUSD);
        const effectivePricePerToToken = totalCostInUSD.dividedBy(toTokenAmount);
        const priceImpact = effectivePricePerToToken.minus(toTokenPrice).dividedBy(toTokenPrice).multipliedBy(100);
        return priceImpact.toNumber();
    },
    calculateMaxSlippage () {
        const slippageToleranceDecimal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(state.slippage).dividedBy(100);
        const maxSlippageAmount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].multiply(state.sourceTokenAmount, slippageToleranceDecimal);
        return maxSlippageAmount.toNumber();
    },
    async convertTokens () {
        const { sourceTokenAddress, toTokenAddress } = this.getParams();
        if (!sourceTokenAddress || !toTokenAddress) {
            return;
        }
        await this.makeChecks();
    },
    async makeChecks () {
        const { toTokenDecimals, toTokenAddress } = this.getParams();
        if (!toTokenDecimals || !toTokenAddress) {
            return;
        }
        state.loading = true;
        const transaction = await this.getTransaction();
        this.setTransactionDetails(transaction);
        state.loading = false;
    },
    async getTransaction () {
        const { fromCaipAddress, sourceTokenAddress, sourceTokenAmount, sourceTokenDecimals } = this.getParams();
        if (!fromCaipAddress || !sourceTokenAddress || !sourceTokenAmount || parseFloat(sourceTokenAmount) === 0 || !sourceTokenDecimals) {
            return undefined;
        }
        const hasAllowance = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvertApiUtil"].fetchConvertAllowance({
            userAddress: fromCaipAddress,
            tokenAddress: sourceTokenAddress,
            sourceTokenAmount,
            sourceTokenDecimals
        });
        let transaction = undefined;
        if (hasAllowance) {
            state.approvalTransaction = undefined;
            transaction = await this.createConvert();
            state.convertTransaction = transaction;
        } else {
            state.convertTransaction = undefined;
            transaction = await this.createTokenAllowance();
            state.approvalTransaction = transaction;
        }
        return transaction;
    },
    getToAmount () {
        const { sourceTokenDecimals } = this.getParams();
        const decimals = sourceTokenDecimals || 18;
        const multiplier = 10 ** decimals;
        const toTokenConvertedAmount = state.sourceTokenPriceInUSD && state.toTokenPriceInUSD && state.sourceTokenAmount ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(state.sourceTokenAmount).multipliedBy(state.sourceTokenPriceInUSD).dividedBy(state.toTokenPriceInUSD) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(0);
        return toTokenConvertedAmount.multipliedBy(multiplier).toString();
    },
    async createTokenAllowance () {
        const { fromCaipAddress, fromAddress, sourceTokenAddress, toTokenAddress } = this.getParams();
        if (!fromCaipAddress || !toTokenAddress) {
            return undefined;
        }
        if (!sourceTokenAddress) {
            throw new Error('>>> createTokenAllowance - No source token address found.');
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].generateApproveCalldata({
            projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
            from: sourceTokenAddress,
            to: toTokenAddress,
            userAddress: fromCaipAddress
        });
        const gasLimit = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].estimateGas({
            address: fromAddress,
            to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(response.tx.to),
            data: response.tx.data
        });
        const toAmount = this.getToAmount();
        const transaction = {
            data: response.tx.data,
            to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(response.tx.from),
            gas: gasLimit,
            gasPrice: BigInt(response.tx.eip155.gasPrice),
            value: BigInt(response.tx.value),
            toAmount
        };
        return transaction;
    },
    async sendTransactionForApproval (data) {
        const { fromAddress } = this.getParams();
        state.transactionLoading = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({
            view: null,
            goBack: true
        });
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].sendTransaction({
                address: fromAddress,
                to: data.to,
                data: data.data,
                value: BigInt(data.value),
                gasPrice: BigInt(data.gasPrice)
            });
            state.approvalTransaction = undefined;
            state.transactionLoading = false;
            this.makeChecks();
        } catch (err) {
            const error = err;
            state.transactionError = error?.shortMessage;
            state.transactionLoading = false;
        }
    },
    async createConvert () {
        const { networkAddress, fromCaipAddress, sourceTokenAddress, sourceTokenDecimals, sourceTokenAmount, toTokenAddress } = this.getParams();
        if (!fromCaipAddress || !sourceTokenAmount || !sourceTokenAddress || !toTokenAddress || !sourceTokenDecimals) {
            return undefined;
        }
        try {
            const amount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].parseUnits(sourceTokenAmount, sourceTokenDecimals).toString();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].generateConvertCalldata({
                projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId,
                userAddress: fromCaipAddress,
                from: sourceTokenAddress,
                to: toTokenAddress,
                amount
            });
            const isSourceTokenIsNetworkToken = sourceTokenAddress === networkAddress;
            const toAmount = this.getToAmount();
            const gas = BigInt(response.tx.eip155.gas);
            const gasPrice = BigInt(response.tx.eip155.gasPrice);
            const transaction = {
                data: response.tx.data,
                to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(response.tx.to),
                gas,
                gasPrice,
                value: isSourceTokenIsNetworkToken ? BigInt(amount) : BigInt('0'),
                toAmount
            };
            state.gasPriceInUSD = this.calculateGasPriceInUSD(gas, gasPrice);
            return transaction;
        } catch (error) {
            return undefined;
        }
    },
    async sendTransactionForConvert (data) {
        if (!data) {
            return undefined;
        }
        const { fromAddress } = this.getParams();
        state.transactionLoading = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].pushTransactionStack({
            view: 'Account',
            goBack: false,
            onSuccess () {
                ConvertController.resetValues();
            }
        });
        try {
            const transactionHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].sendTransaction({
                address: fromAddress,
                to: data.to,
                data: data.data,
                gas: data.gas,
                gasPrice: BigInt(data.gasPrice),
                value: data.value
            });
            state.transactionLoading = false;
            setTimeout(()=>{
                this.resetValues();
                this.getMyTokensWithBalance();
            }, 1000);
            return transactionHash;
        } catch (err) {
            const error = err;
            state.transactionError = error?.shortMessage;
            state.transactionLoading = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError(error?.shortMessage || 'Transaction error');
            return undefined;
        }
    },
    getToTokenValues (amountBigInt, decimals) {
        const { toTokenAddress } = this.getParams();
        if (!toTokenAddress) {
            return {
                toTokenAmount: '0',
                toTokenPriceInUSD: 0
            };
        }
        const toTokenAmount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(amountBigInt).dividedBy(10 ** decimals).toFixed(20);
        const toTokenPrice = state.tokensPriceMap[toTokenAddress] || '0';
        const toTokenPriceInUSD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(toTokenPrice).toNumber();
        return {
            toTokenAmount,
            toTokenPriceInUSD
        };
    },
    isInsufficientNetworkTokenForGas () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$NumberUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberUtil"].bigNumber(state.gasPriceInUSD || '0')).isGreaterThan(state.networkBalanceInUSD);
    },
    setTransactionDetails (transaction) {
        const { toTokenAddress, toTokenDecimals } = this.getParams();
        if (!transaction || !toTokenAddress || !toTokenDecimals) {
            return;
        }
        const insufficientNetworkToken = this.isInsufficientNetworkTokenForGas();
        if (insufficientNetworkToken) {
            state.inputError = 'Insufficient balance';
        } else {
            state.inputError = undefined;
        }
        const { toTokenAmount, toTokenPriceInUSD } = this.getToTokenValues(transaction.toAmount, toTokenDecimals);
        state.toTokenAmount = toTokenAmount;
        state.toTokenPriceInUSD = toTokenPriceInUSD;
        state.gasPriceInUSD = this.calculateGasPriceInUSD(transaction.gas, transaction.gasPrice);
        state.priceImpact = this.calculatePriceImpact(state.toTokenAmount, state.gasPriceInUSD);
        state.maxSlippage = this.calculateMaxSlippage();
    }
}; //# sourceMappingURL=ConvertController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AccountController": (()=>AccountController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConvertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConvertController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConvertApiUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    isConnected: false,
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false
});
const AccountController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    setIsConnected (isConnected) {
        state.isConnected = isConnected;
    },
    setCaipAddress (caipAddress) {
        state.caipAddress = caipAddress;
        state.address = caipAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getPlainAddress(caipAddress) : undefined;
    },
    setBalance (balance, balanceSymbol) {
        state.balance = balance;
        state.balanceSymbol = balanceSymbol;
    },
    setProfileName (profileName) {
        state.profileName = profileName;
    },
    setProfileImage (profileImage) {
        state.profileImage = profileImage;
    },
    setAddressExplorerUrl (explorerUrl) {
        state.addressExplorerUrl = explorerUrl;
    },
    setSmartAccountDeployed (isDeployed) {
        state.smartAccountDeployed = isDeployed;
    },
    setCurrentTab (currentTab) {
        state.currentTab = currentTab;
    },
    setTokenBalance (tokenBalance) {
        if (tokenBalance) {
            state.tokenBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(tokenBalance);
        }
    },
    setConnectedWalletInfo (connectedWalletInfo) {
        state.connectedWalletInfo = connectedWalletInfo;
    },
    setPreferredAccountType (preferredAccountType) {
        state.preferredAccountType = preferredAccountType;
    },
    async fetchTokenBalance () {
        try {
            if (state.address) {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getBalance(state.address);
                this.setTokenBalance(response.balances);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConvertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvertController"].setBalances(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConvertApiUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvertApiUtil"].mapBalancesToConvertTokens(response.balances));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to fetch token balance');
        }
    },
    resetAccount () {
        state.isConnected = false;
        state.smartAccountDeployed = false;
        state.currentTab = 0;
        state.caipAddress = undefined;
        state.address = undefined;
        state.balance = undefined;
        state.balanceSymbol = undefined;
        state.profileName = undefined;
        state.profileImage = undefined;
        state.addressExplorerUrl = undefined;
        state.tokenBalance = [];
        state.connectedWalletInfo = undefined;
        state.preferredAccountType = undefined;
    }
}; //# sourceMappingURL=AccountController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AssetController": (()=>AssetController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    walletImages: {},
    networkImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
});
const AssetController = {
    state,
    subscribeNetworkImages (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state.networkImages, ()=>callback(state.networkImages));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    setWalletImage (key, value) {
        state.walletImages[key] = value;
    },
    setNetworkImage (key, value) {
        state.networkImages[key] = value;
    },
    setConnectorImage (key, value) {
        state.connectorImages[key] = value;
    },
    setTokenImage (key, value) {
        state.tokenImages[key] = value;
    },
    setCurrencyImage (key, value) {
        state.currencyImages[key] = value;
    }
}; //# sourceMappingURL=AssetController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeController": (()=>ThemeController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    themeMode: 'dark',
    themeVariables: {},
    w3mThemeVariables: undefined
});
const ThemeController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    setThemeMode (themeMode) {
        state.themeMode = themeMode;
        try {
            const emailConnector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getEmailConnector();
            if (emailConnector) {
                const themeVariables = ThemeController.getSnapshot().themeVariables;
                emailConnector.provider.syncTheme({
                    themeMode,
                    themeVariables,
                    w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, themeMode)
                });
            }
        } catch  {
            console.info('Unable to sync theme to email connector');
        }
    },
    setThemeVariables (themeVariables) {
        state.themeVariables = {
            ...state.themeVariables,
            ...themeVariables
        };
        try {
            const emailConnector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getEmailConnector();
            if (emailConnector) {
                const themeVariablesSnapshot = ThemeController.getSnapshot().themeVariables;
                emailConnector.provider.syncTheme({
                    themeVariables: themeVariablesSnapshot,
                    w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(state.themeVariables, state.themeMode)
                });
            }
        } catch  {
            console.info('Unable to sync theme to email connector');
        }
    },
    getSnapshot () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(state);
    }
}; //# sourceMappingURL=ThemeController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConnectorController": (()=>ConnectorController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+common@4.1.12-910a844.0/node_modules/@web3modal/common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
;
;
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    connectors: []
});
const ConnectorController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    setConnectors (connectors) {
        state.connectors = connectors.map((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(c));
    },
    addConnector (connector) {
        state.connectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(connector));
        if (connector.id === 'w3mEmail') {
            const emailConnector = connector;
            const optionsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapshot"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state);
            const themeMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].getSnapshot().themeMode;
            const themeVariables = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].getSnapshot().themeVariables;
            emailConnector?.provider?.syncDappData?.({
                metadata: optionsState.metadata,
                sdkVersion: optionsState.sdkVersion,
                projectId: optionsState.projectId
            });
            emailConnector.provider.syncTheme({
                themeMode,
                themeVariables,
                w3mThemeVariables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$common$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getW3mThemeVariables"])(themeVariables, themeMode)
            });
        }
    },
    getEmailConnector () {
        return state.connectors.find((c)=>c.type === 'EMAIL');
    },
    getAnnouncedConnectorRdns () {
        return state.connectors.filter((c)=>c.type === 'ANNOUNCED').map((c)=>c.info?.rdns);
    },
    getConnectors () {
        return state.connectors;
    },
    getConnector (id, rdns) {
        return state.connectors.find((c)=>c.explorerId === id || c.info?.rdns === rdns);
    }
}; //# sourceMappingURL=ConnectorController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ApiController": (()=>ApiController),
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/FetchUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].getApiUrl();
const api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$FetchUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUtil"]({
    baseUrl
});
const entries = '40';
const recommendedEntries = '4';
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    page: 1,
    count: 0,
    featured: [],
    recommended: [],
    wallets: [],
    search: [],
    isAnalyticsEnabled: false
});
const ApiController = {
    state,
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    _getApiHeaders () {
        const { projectId, sdkType, sdkVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        return {
            'x-project-id': projectId,
            'x-sdk-type': sdkType,
            'x-sdk-version': sdkVersion
        };
    },
    async _fetchWalletImage (imageId) {
        const imageUrl = `${api.baseUrl}/getWalletImage/${imageId}`;
        const blob = await api.getBlob({
            path: imageUrl,
            headers: ApiController._getApiHeaders()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setWalletImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchNetworkImage (imageId) {
        const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
        const blob = await api.getBlob({
            path: imageUrl,
            headers: ApiController._getApiHeaders()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setNetworkImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchConnectorImage (imageId) {
        const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
        const blob = await api.getBlob({
            path: imageUrl,
            headers: ApiController._getApiHeaders()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setConnectorImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchCurrencyImage (countryCode) {
        const imageUrl = `${api.baseUrl}/public/getCurrencyImage/${countryCode}`;
        const blob = await api.getBlob({
            path: imageUrl,
            headers: ApiController._getApiHeaders()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setCurrencyImage(countryCode, URL.createObjectURL(blob));
    },
    async _fetchTokenImage (symbol) {
        const imageUrl = `${api.baseUrl}/public/getTokenImage/${symbol}`;
        const blob = await api.getBlob({
            path: imageUrl,
            headers: ApiController._getApiHeaders()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].setTokenImage(symbol, URL.createObjectURL(blob));
    },
    async fetchNetworkImages () {
        const { requestedCaipNetworks } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state;
        const ids = requestedCaipNetworks?.map(({ imageId })=>imageId).filter(Boolean);
        if (ids) {
            await Promise.allSettled(ids.map((id)=>ApiController._fetchNetworkImage(id)));
        }
    },
    async fetchConnectorImages () {
        const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
        const ids = connectors.map(({ imageId })=>imageId).filter(Boolean);
        await Promise.allSettled(ids.map((id)=>ApiController._fetchConnectorImage(id)));
    },
    async fetchCurrencyImages (currencies = []) {
        await Promise.allSettled(currencies.map((currency)=>ApiController._fetchCurrencyImage(currency)));
    },
    async fetchTokenImages (tokens = []) {
        await Promise.allSettled(tokens.map((token)=>ApiController._fetchTokenImage(token)));
    },
    async fetchFeaturedWallets () {
        const { featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        if (featuredWalletIds?.length) {
            const { data } = await api.get({
                path: '/getWallets',
                headers: ApiController._getApiHeaders(),
                params: {
                    page: '1',
                    entries: featuredWalletIds?.length ? String(featuredWalletIds.length) : recommendedEntries,
                    include: featuredWalletIds?.join(',')
                }
            });
            data.sort((a, b)=>featuredWalletIds.indexOf(a.id) - featuredWalletIds.indexOf(b.id));
            const images = data.map((d)=>d.image_id).filter(Boolean);
            await Promise.allSettled(images.map((id)=>ApiController._fetchWalletImage(id)));
            state.featured = data;
        }
    },
    async fetchRecommendedWallets () {
        const { includeWalletIds, excludeWalletIds, featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const exclude = [
            ...excludeWalletIds ?? [],
            ...featuredWalletIds ?? []
        ].filter(Boolean);
        const { data, count } = await api.get({
            path: '/getWallets',
            headers: ApiController._getApiHeaders(),
            params: {
                page: '1',
                chains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork?.id,
                entries: recommendedEntries,
                include: includeWalletIds?.join(','),
                exclude: exclude?.join(',')
            }
        });
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const recommendedImages = data.map((d)=>d.image_id).filter(Boolean);
        const recentImages = recent.map((r)=>r.image_id).filter(Boolean);
        await Promise.allSettled([
            ...recommendedImages,
            ...recentImages
        ].map((id)=>ApiController._fetchWalletImage(id)));
        state.recommended = data;
        state.count = count ?? 0;
    },
    async fetchWallets ({ page }) {
        const { includeWalletIds, excludeWalletIds, featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const exclude = [
            ...state.recommended.map(({ id })=>id),
            ...excludeWalletIds ?? [],
            ...featuredWalletIds ?? []
        ].filter(Boolean);
        const { data, count } = await api.get({
            path: '/getWallets',
            headers: ApiController._getApiHeaders(),
            params: {
                page: String(page),
                entries,
                chains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork?.id,
                include: includeWalletIds?.join(','),
                exclude: exclude.join(',')
            }
        });
        const images = data.map((w)=>w.image_id).filter(Boolean);
        await Promise.allSettled([
            ...images.map((id)=>ApiController._fetchWalletImage(id)),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].wait(300)
        ]);
        state.wallets = [
            ...state.wallets,
            ...data
        ];
        state.count = count > state.count ? count : state.count;
        state.page = page;
    },
    async searchWallet ({ search }) {
        const { includeWalletIds, excludeWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        state.search = [];
        const { data } = await api.get({
            path: '/getWallets',
            headers: ApiController._getApiHeaders(),
            params: {
                page: '1',
                entries: '100',
                search: search?.trim(),
                chains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork?.id,
                include: includeWalletIds?.join(','),
                exclude: excludeWalletIds?.join(',')
            }
        });
        const images = data.map((w)=>w.image_id).filter(Boolean);
        await Promise.allSettled([
            ...images.map((id)=>ApiController._fetchWalletImage(id)),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].wait(300)
        ]);
        state.search = data;
    },
    async reFetchWallets () {
        state.page = 1;
        state.wallets = [];
        await ApiController.fetchFeaturedWallets();
        await ApiController.fetchRecommendedWallets();
    },
    prefetch () {
        const promises = [
            ApiController.fetchFeaturedWallets(),
            ApiController.fetchRecommendedWallets(),
            ApiController.fetchNetworkImages(),
            ApiController.fetchConnectorImages()
        ];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableAnalytics === undefined) {
            promises.push(ApiController.fetchAnalyticsConfig());
        }
        state.prefetchPromise = Promise.race([
            Promise.allSettled(promises),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].wait(3000)
        ]);
    },
    async fetchAnalyticsConfig () {
        const { isAnalyticsEnabled } = await api.get({
            path: '/getAnalyticsConfig',
            headers: ApiController._getApiHeaders()
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableAnalytics(isAnalyticsEnabled);
    }
}; //# sourceMappingURL=ApiController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ModalController": (()=>ModalController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({
    loading: false,
    open: false
});
const ModalController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    async open (options) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.prefetchPromise;
        const connected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.isConnected;
        if (options?.view) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset(options.view);
        } else if (connected) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Account');
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].reset('Connect');
        }
        state.open = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            open: true
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'MODAL_OPEN',
            properties: {
                connected
            }
        });
    },
    close () {
        const connected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.isConnected;
        state.open = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            open: false
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'MODAL_CLOSE',
            properties: {
                connected
            }
        });
    },
    setLoading (loading) {
        state.loading = loading;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].set({
            loading
        });
    }
}; //# sourceMappingURL=ModalController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OnRampController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OnRampController": (()=>OnRampController),
    "USDC_CURRENCY_DEFAULT": (()=>USDC_CURRENCY_DEFAULT),
    "USD_CURRENCY_DEFAULT": (()=>USD_CURRENCY_DEFAULT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
const USDC_CURRENCY_DEFAULT = {
    id: '2b92315d-eab7-5bef-84fa-089a131333f5',
    name: 'USD Coin',
    symbol: 'USDC',
    networks: [
        {
            name: 'ethereum-mainnet',
            display_name: 'Ethereum',
            chain_id: '1',
            contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
        },
        {
            name: 'polygon-mainnet',
            display_name: 'Polygon',
            chain_id: '137',
            contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
        }
    ]
};
const USD_CURRENCY_DEFAULT = {
    id: 'USD',
    payment_method_limits: [
        {
            id: 'card',
            min: '10.00',
            max: '7500.00'
        },
        {
            id: 'ach_bank_account',
            min: '10.00',
            max: '25000.00'
        }
    ]
};
const defaultState = {
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONRAMP_PROVIDERS"],
    selectedProvider: null,
    error: null,
    purchaseCurrency: USDC_CURRENCY_DEFAULT,
    paymentCurrency: USD_CURRENCY_DEFAULT,
    purchaseCurrencies: [
        USDC_CURRENCY_DEFAULT
    ],
    paymentCurrencies: [],
    quotesLoading: false
};
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])(defaultState);
const OnRampController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    setSelectedProvider (provider) {
        state.selectedProvider = provider;
    },
    setPurchaseCurrency (currency) {
        state.purchaseCurrency = currency;
    },
    setPaymentCurrency (currency) {
        state.paymentCurrency = currency;
    },
    setPurchaseAmount (amount) {
        this.state.purchaseAmount = amount;
    },
    setPaymentAmount (amount) {
        this.state.paymentAmount = amount;
    },
    async getAvailableCurrencies () {
        const options = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getOnrampOptions();
        state.purchaseCurrencies = options.purchaseCurrencies;
        state.paymentCurrencies = options.paymentCurrencies;
        state.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
        state.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchCurrencyImages(options.paymentCurrencies.map((currency)=>currency.id));
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchTokenImages(options.purchaseCurrencies.map((currency)=>currency.symbol));
    },
    async getQuote () {
        state.quotesLoading = true;
        try {
            const quote = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].getOnrampQuote({
                purchaseCurrency: state.purchaseCurrency,
                paymentCurrency: state.paymentCurrency,
                amount: state.paymentAmount?.toString() || '0',
                network: state.purchaseCurrency?.symbol
            });
            state.quotesLoading = false;
            state.purchaseAmount = Number(quote.purchaseAmount.amount);
            return quote;
        } catch (error) {
            state.error = error.message;
            state.quotesLoading = false;
            return null;
        } finally{
            state.quotesLoading = false;
        }
    },
    resetState () {
        state.providers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONRAMP_PROVIDERS"];
        state.selectedProvider = null;
        state.error = null;
        state.purchaseCurrency = USDC_CURRENCY_DEFAULT;
        state.paymentCurrency = USD_CURRENCY_DEFAULT;
        state.purchaseCurrencies = [
            USDC_CURRENCY_DEFAULT
        ];
        state.paymentCurrencies = [];
        state.paymentAmount = undefined;
        state.purchaseAmount = undefined;
        state.quotesLoading = false;
    }
}; //# sourceMappingURL=OnRampController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SendController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SendController": (()=>SendController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/valtio@1.11.2_@types+react@19.0.8_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs [app-client] (ecmascript)");
;
;
const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxy"])({});
const SendController = {
    state,
    subscribe (callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"])(state, ()=>callback(state));
    },
    subscribeKey (key, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeKey"])(state, key, callback);
    },
    setToken (token) {
        if (token) {
            state.token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$valtio$40$1$2e$11$2e$2_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(token);
        }
    },
    setTokenAmount (sendTokenAmount) {
        state.sendTokenAmount = sendTokenAmount;
    },
    setReceiverAddress (receiverAddress) {
        state.receiverAddress = receiverAddress;
    },
    setReceiverProfileImageUrl (receiverProfileImageUrl) {
        state.receiverProfileImageUrl = receiverProfileImageUrl;
    },
    setReceiverProfileName (receiverProfileName) {
        state.receiverProfileName = receiverProfileName;
    },
    resetSend () {
        state.token = undefined;
        state.sendTokenAmount = undefined;
        state.receiverAddress = undefined;
        state.receiverProfileImageUrl = undefined;
        state.receiverProfileName = undefined;
    }
}; //# sourceMappingURL=SendController.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AssetUtil": (()=>AssetUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
;
const AssetUtil = {
    getWalletImage (wallet) {
        if (wallet?.image_url) {
            return wallet?.image_url;
        }
        if (wallet?.image_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.walletImages[wallet.image_id];
        }
        return undefined;
    },
    getNetworkImage (network) {
        if (network?.imageUrl) {
            return network?.imageUrl;
        }
        if (network?.imageId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.networkImages[network.imageId];
        }
        return undefined;
    },
    getConnectorImage (connector) {
        if (connector?.imageUrl) {
            return connector.imageUrl;
        }
        if (connector?.imageId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.connectorImages[connector.imageId];
        }
        return undefined;
    }
}; //# sourceMappingURL=AssetUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/RouterUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RouterUtil": (()=>RouterUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
;
;
const RouterUtil = {
    goBackOrCloseModal () {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.history.length > 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].goBack();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
        }
    },
    navigateAfterNetworkSwitch () {
        const { history } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state;
        const networkSelectIndex = history.findIndex((name)=>name === 'Networks');
        if (networkSelectIndex >= 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].goBackToIndex(networkSelectIndex - 1);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
        }
    }
}; //# sourceMappingURL=RouterUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OnRampController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OnRampController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$TransactionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/TransactionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConvertController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConvertController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SendController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SendController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$RouterUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/RouterUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=df744_%40web3modal_core_dist_esm_ff6eba._.js.map