(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/7efa4_@web3modal_scaffold_dist_esm_src_4a65ab._.js", {

"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
 //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "W3mConnectingWidget": (()=>W3mConnectingWidget)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/decorators.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$1$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit-element@4.1.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
class W3mConnectingWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$1$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LitElement"] {
    constructor(){
        super();
        this.wallet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.wallet;
        this.connector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.connector;
        this.timeout = undefined;
        this.secondaryBtnLabel = 'Try again';
        this.secondaryBtnIcon = 'refresh';
        this.secondaryLabel = 'Accept connection request in the wallet';
        this.onConnect = undefined;
        this.onRender = undefined;
        this.onAutoConnect = undefined;
        this.isWalletConnect = true;
        this.unsubscribe = [];
        this.imageSrc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet) ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(this.connector);
        this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet';
        this.isRetrying = false;
        this.uri = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
        this.error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcError;
        this.ready = false;
        this.showRetry = false;
        this.buffering = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>{
                this.uri = val;
                if (this.isRetrying && this.onRetry) {
                    this.isRetrying = false;
                    this.onConnect?.();
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcError', (val)=>this.error = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('buffering', (val)=>this.buffering = val)
        ]);
    }
    firstUpdated() {
        this.onAutoConnect?.();
        this.showRetry = !this.onAutoConnect;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
        clearTimeout(this.timeout);
    }
    render() {
        this.onRender?.();
        this.onShowRetry();
        const subLabel = this.error ? 'Connection can be declined if a previous request is still active' : this.secondaryLabel;
        let label = `Continue in ${this.name}`;
        if (this.buffering) {
            label = 'Connecting...';
        }
        if (this.error) {
            label = 'Connection declined';
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        data-error=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[
            '3xl',
            'xl',
            'xl',
            'xl'
        ]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? 'error-100' : 'fg-100'}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error && this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
            <wui-flex .padding=${[
            '0',
            'xl',
            'xl',
            'xl'
        ]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onTryAgain() {
        if (!this.buffering) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
            if (this.onRetry) {
                this.isRetrying = true;
                this.onRetry?.();
            } else {
                this.onConnect?.();
            }
        }
    }
    loaderTemplate() {
        const borderRadiusMaster = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
        try {
            if (this.uri) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].copyToClopboard(this.uri);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Link copied');
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to copy');
        }
    }
}
W3mConnectingWidget.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "buffering", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Boolean
    })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectingWidget.prototype, "onRetry", void 0); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/styles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;
 //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "W3mEmailOtpWidget": (()=>W3mEmailOtpWidget)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+ui@4.1.12-910a844.0/node_modules/@web3modal/ui/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$1$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit@3.1.0/node_modules/lit/decorators.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$email$2d$otp$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+wallet@4.1.12-910a844.0/node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$1$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lit-element@4.1.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+ui@4.1.12-910a844.0/node_modules/@web3modal/ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
const OTP_LENGTH = 6;
let W3mEmailOtpWidget = class W3mEmailOtpWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$1$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LitElement"] {
    firstUpdated() {
        this.startOTPTimeout();
    }
    disconnectedCallback() {
        clearTimeout(this.OTPTimeout);
    }
    constructor(){
        super();
        this.loading = false;
        this.timeoutTimeLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].getTimeToNextEmailLogin();
        this.error = '';
        this.otp = '';
        this.email = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data?.email;
        this.emailConnector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getEmailConnector();
    }
    render() {
        if (!this.email) {
            throw new Error('w3m-email-otp-widget: No email provided');
        }
        const isResendDisabled = Boolean(this.timeoutTimeLeft);
        const footerLabels = this.getFooterLabels(isResendDisabled);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
            'l',
            '0',
            'l',
            '0'
        ]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$2$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"]`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  ` : null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${footerLabels.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${isResendDisabled}>
            ${footerLabels.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
    }
    startOTPTimeout() {
        this.timeoutTimeLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].getTimeToNextEmailLogin();
        this.OTPTimeout = setInterval(()=>{
            if (this.timeoutTimeLeft > 0) {
                this.timeoutTimeLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$wallet$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$wallet$2f$dist$2f$esm$2f$src$2f$W3mFrameHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mFrameHelpers"].getTimeToNextEmailLogin();
            } else {
                clearInterval(this.OTPTimeout);
            }
        }, 1000);
    }
    async onOtpInputChange(event) {
        try {
            if (!this.loading) {
                this.otp = event.detail;
                if (this.emailConnector && this.otp.length === OTP_LENGTH) {
                    this.loading = true;
                    await this.onOtpSubmit?.(this.otp);
                }
            }
        } catch (error) {
            this.error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].parseError(error);
            this.loading = false;
        }
    }
    async onResendCode() {
        try {
            if (this.onOtpResend) {
                if (!this.loading && !this.timeoutTimeLeft) {
                    this.error = '';
                    this.otp = '';
                    const emailConnector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getEmailConnector();
                    if (!emailConnector || !this.email) {
                        throw new Error('w3m-email-otp-widget: Unable to resend email');
                    }
                    this.loading = true;
                    await this.onOtpResend(this.email);
                    this.startOTPTimeout();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Code email resent');
                }
            } else if (this.onStartOver) {
                this.onStartOver();
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError(error);
        } finally{
            this.loading = false;
        }
    }
    getFooterLabels(isResendDisabled) {
        if (this.onStartOver) {
            return {
                title: 'Something wrong?',
                action: `Try again ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : ''}`
            };
        }
        return {
            title: `Didn't receive it?`,
            action: `Resend ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : 'Code'}`
        };
    }
};
W3mEmailOtpWidget.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$scaffold$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$scaffold$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$email$2d$otp$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mEmailOtpWidget.prototype, "loading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mEmailOtpWidget.prototype, "timeoutTimeLeft", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$0$2e$4$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mEmailOtpWidget.prototype, "error", void 0);
W3mEmailOtpWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-email-otp-widget')
], W3mEmailOtpWidget);
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/markWalletsAsInstalled.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "markWalletsAsInstalled": (()=>markWalletsAsInstalled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
;
function markWalletsAsInstalled(wallets) {
    const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
    const installedConnectors = connectors.filter((c)=>c.type === 'ANNOUNCED').reduce((acum, val)=>{
        if (!val.info?.rdns) {
            return acum;
        }
        acum[val.info.rdns] = true;
        return acum;
    }, {});
    const walletsWithInstalled = wallets.map((wallet)=>({
            ...wallet,
            installed: Boolean(wallet.rdns) && Boolean(installedConnectors[wallet.rdns ?? ''])
        }));
    const sortedWallets = walletsWithInstalled.sort((a, b)=>Number(b.installed) - Number(a.installed));
    return sortedWallets;
} //# sourceMappingURL=markWalletsAsInstalled.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConstantsUtil": (()=>ConstantsUtil)
});
const ConstantsUtil = {
    ACCOUNT_TABS: [
        {
            label: 'Tokens'
        },
        {
            label: 'NFTs'
        },
        {
            label: 'Activity'
        }
    ]
}; //# sourceMappingURL=ConstantsUtil.js.map
}}),
"[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/client.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Web3ModalScaffold": (()=>Web3ModalScaffold)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+ui@4.1.12-910a844.0/node_modules/@web3modal/ui/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+ui@4.1.12-910a844.0/node_modules/@web3modal/ui/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@web3modal+core@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
;
;
let isInitialized = false;
class Web3ModalScaffold {
    constructor(options){
        this.initPromise = undefined;
        this.setIsConnected = (isConnected)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setIsConnected(isConnected);
        };
        this.getIsConnectedState = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.isConnected;
        this.setCaipAddress = (caipAddress)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setCaipAddress(caipAddress);
        };
        this.setBalance = (balance, balanceSymbol)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setBalance(balance, balanceSymbol);
        };
        this.setProfileName = (profileName)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setProfileName(profileName);
        };
        this.setProfileImage = (profileImage)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setProfileImage(profileImage);
        };
        this.resetAccount = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].resetAccount();
        };
        this.setCaipNetwork = (caipNetwork)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].setCaipNetwork(caipNetwork);
        };
        this.getCaipNetwork = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].state.caipNetwork;
        this.setRequestedCaipNetworks = (requestedCaipNetworks)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].setRequestedCaipNetworks(requestedCaipNetworks);
        };
        this.getApprovedCaipNetworksData = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].getApprovedCaipNetworksData();
        this.resetNetwork = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].resetNetwork();
        };
        this.setConnectors = (connectors)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setConnectors(connectors);
        };
        this.addConnector = (connector)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].addConnector(connector);
        };
        this.getConnectors = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectors();
        this.resetWcConnection = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetWcConnection();
        };
        this.fetchIdentity = (request)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$BlockchainApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockchainApiController"].fetchIdentity(request);
        this.setAddressExplorerUrl = (addressExplorerUrl)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setAddressExplorerUrl(addressExplorerUrl);
        };
        this.setSmartAccountDeployed = (isDeployed)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setSmartAccountDeployed(isDeployed);
        };
        this.setConnectedWalletInfo = (connectedWalletInfo)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setConnectedWalletInfo(connectedWalletInfo);
        };
        this.setSmartAccountEnabledNetworks = (smartAccountEnabledNetworks)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].setSmartAccountEnabledNetworks(smartAccountEnabledNetworks);
        };
        this.setPreferredAccountType = (preferredAccountType)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].setPreferredAccountType(preferredAccountType);
        };
        this.initControllers(options);
        this.initOrContinue();
    }
    async open(options) {
        await this.initOrContinue();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].open(options);
    }
    async close() {
        await this.initOrContinue();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
    }
    setLoading(loading) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].setLoading(loading);
    }
    getThemeMode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeMode;
    }
    getThemeVariables() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables;
    }
    setThemeMode(themeMode) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeMode(themeMode);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeMode);
    }
    setThemeVariables(themeVariables) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeVariables(themeVariables);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$ui$40$4$2e$1$2e$12$2d$910a844$2e$0$2f$node_modules$2f40$web3modal$2f$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ThemeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setThemeVariables"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables);
    }
    subscribeTheme(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].subscribe(callback);
    }
    getWalletInfo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].state.connectedWalletInfo;
    }
    subscribeWalletInfo(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$AccountController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountController"].subscribeKey('connectedWalletInfo', callback);
    }
    getState() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].state;
    }
    subscribeState(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$PublicStateController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicStateController"].subscribe(callback);
    }
    showErrorMessage(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError(message);
    }
    showSuccessMessage(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess(message);
    }
    getEvent() {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].state
        };
    }
    subscribeEvents(callback) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].subscribe(callback);
    }
    redirect(route) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push(route);
    }
    popTransactionStack(cancel) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].popTransactionStack(cancel);
    }
    isOpen() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].state.open;
    }
    isTransactionStackEmpty() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.transactionStack.length === 0;
    }
    async initControllers(options) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].setClient(options.networkControllerClient);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].setDefaultCaipNetwork(options.defaultChain);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setProjectId(options.projectId);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setAllWallets(options.allWallets);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setIncludeWalletIds(options.includeWalletIds);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setExcludeWalletIds(options.excludeWalletIds);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setFeaturedWalletIds(options.featuredWalletIds);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setTokens(options.tokens);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setTermsConditionsUrl(options.termsConditionsUrl);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setPrivacyPolicyUrl(options.privacyPolicyUrl);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setCustomWallets(options.customWallets);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setEnableAnalytics(options.enableAnalytics);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setSdkVersion(options._sdkVersion);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setClient(options.connectionControllerClient);
        if (options.siweControllerClient) {
            const { SIWEController } = await __turbopack_require__("[project]/node_modules/.pnpm/@web3modal+siwe@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/siwe/dist/esm/exports/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
            SIWEController.setSIWEClient(options.siweControllerClient);
        }
        if (options.metadata) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setMetadata(options.metadata);
        }
        if (options.themeMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeMode(options.themeMode);
        }
        if (options.themeVariables) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].setThemeVariables(options.themeVariables);
        }
        if (options.enableOnramp) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setOnrampEnabled(Boolean(options.enableOnramp));
        }
        if (options.enableWalletFeatures) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].setWalletFeaturesEnabled(Boolean(options.enableWalletFeatures));
        }
        if (options.allowUnsupportedChain) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$controllers$2f$NetworkController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkController"].setAllowUnsupportedChain(options.allowUnsupportedChain);
        }
    }
    async initOrContinue() {
        if (!this.initPromise && !isInitialized && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3modal$2b$core$40$4$2e$1$2e$12$2d$910a844$2e$0_$40$types$2b$react$40$19$2e$0$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$web3modal$2f$core$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isClient()) {
            isInitialized = true;
            this.initPromise = new Promise(async (resolve)=>{
                await Promise.all([
                    __turbopack_require__("[project]/node_modules/.pnpm/@web3modal+ui@4.1.12-910a844.0/node_modules/@web3modal/ui/dist/esm/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__),
                    __turbopack_require__("[project]/node_modules/.pnpm/@web3modal+scaffold@4.1.12-910a844.0_@types+react@19.0.8_react@19.0.0/node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-modal/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__)
                ]);
                const modal = document.createElement('w3m-modal');
                document.body.insertAdjacentElement('beforeend', modal);
                resolve();
            });
        }
        return this.initPromise;
    }
} //# sourceMappingURL=client.js.map
}}),
}]);

//# sourceMappingURL=7efa4_%40web3modal_scaffold_dist_esm_src_4a65ab._.js.map