(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f9b412._.js", {

"[project]/src/components/ui/buttons.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CheckIsConnectedButton": (()=>CheckIsConnectedButton),
    "PrimaryButton": (()=>PrimaryButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$10$2e$0$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-toastify@10.0.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/exports/react.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3modal-web3js@0.1.0-alpha.1_@types+react@19.0.8_bufferutil@4.0.9_react-dom@19.0.0_react@19_m7iqi72uier2zc5balzkiz4lb4/node_modules/web3modal-web3js/dist/esm/exports/react.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const CheckIsConnectedButton = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWeb3ModalAccount"])();
    // check if Metamask is installed
    // if installed, initialize Web3JS
    // request user to connect to Metamask
    const handleCheckConnect = ()=>{
        if (isConnected) {
            router.push("/kyc");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$10$2e$0$2e$6_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please connect your wallet");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleCheckConnect,
        className: "space-x-4 bg-[#5773fb] text-white rounded-lg w-auto py-4 px-6 my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
        children: "Complete KYC To Get Started"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/buttons.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_s(CheckIsConnectedButton, "pTCIUIyBRyB9K/cuTgTSvvcW3/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3modal$2d$web3js$40$0$2e$1$2e$0$2d$alpha$2e$1_$40$types$2b$react$40$19$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19_m7iqi72uier2zc5balzkiz4lb4$2f$node_modules$2f$web3modal$2d$web3js$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWeb3ModalAccount"]
    ];
});
_c = CheckIsConnectedButton;
const PrimaryButton = (props)=>{
    const { children, onClick } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "bg-primary dark:bg-secondary text-slate-100 rounded-3xl",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/buttons.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_c1 = PrimaryButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "CheckIsConnectedButton");
__turbopack_refresh__.register(_c1, "PrimaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/elections/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_f9b412._.js.map