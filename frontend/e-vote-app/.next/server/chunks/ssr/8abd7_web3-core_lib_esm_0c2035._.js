module.exports = {

"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_event_emitter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3EventEmitter": (()=>Web3EventEmitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/event_emitter.js [app-ssr] (ecmascript)");
;
class Web3EventEmitter {
    constructor(){
        this._emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventEmitter"]();
    }
    on(eventName, fn) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        this._emitter.on(eventName, fn);
    }
    once(eventName, fn) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        this._emitter.once(eventName, fn);
    }
    off(eventName, fn) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        this._emitter.off(eventName, fn);
    }
    emit(eventName, params) {
        this._emitter.emit(eventName, params);
    }
    listenerCount(eventName) {
        return this._emitter.listenerCount(eventName);
    }
    listeners(eventName) {
        return this._emitter.listeners(eventName);
    }
    eventNames() {
        return this._emitter.eventNames();
    }
    removeAllListeners() {
        return this._emitter.removeAllListeners();
    }
    setMaxListenerWarningThreshold(maxListenersWarningThreshold) {
        this._emitter.setMaxListeners(maxListenersWarningThreshold);
    }
    getMaxListeners() {
        return this._emitter.getMaxListeners();
    }
} //# sourceMappingURL=web3_event_emitter.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_config.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3Config": (()=>Web3Config),
    "Web3ConfigEvent": (()=>Web3ConfigEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_event_emitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$core_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/core_errors.js [app-ssr] (ecmascript)");
;
;
;
;
var Web3ConfigEvent;
(function(Web3ConfigEvent) {
    Web3ConfigEvent["CONFIG_CHANGE"] = "CONFIG_CHANGE";
})(Web3ConfigEvent || (Web3ConfigEvent = {}));
class Web3Config extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3EventEmitter"] {
    constructor(options){
        super();
        this.config = {
            handleRevert: false,
            defaultAccount: undefined,
            defaultBlock: 'latest',
            transactionBlockTimeout: 50,
            transactionConfirmationBlocks: 24,
            transactionPollingInterval: 1000,
            transactionPollingTimeout: 750 * 1000,
            transactionReceiptPollingInterval: undefined,
            transactionSendTimeout: 750 * 1000,
            transactionConfirmationPollingInterval: undefined,
            blockHeaderTimeout: 10,
            maxListenersWarningThreshold: 100,
            contractDataInputFill: 'data',
            defaultNetworkId: undefined,
            defaultChain: 'mainnet',
            defaultHardfork: 'london',
            // TODO - Check if there is a default Common
            defaultCommon: undefined,
            defaultTransactionType: '0x2',
            defaultMaxPriorityFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(2500000000),
            enableExperimentalFeatures: {
                useSubscriptionWhenCheckingBlockTimeout: false,
                useRpcCallSpecification: false
            },
            transactionBuilder: undefined,
            transactionTypeParser: undefined,
            customTransactionSchema: undefined,
            defaultReturnFormat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"],
            ignoreGasPricing: false
        };
        this.setConfig(options !== null && options !== void 0 ? options : {});
    }
    setConfig(options) {
        // TODO: Improve and add key check
        const keys = Object.keys(options);
        for (const key of keys){
            this._triggerConfigChange(key, options[key]);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(options[key]) && typeof options[key] === 'number' && key === 'maxListenersWarningThreshold') {
                // additionally set in event emitter
                this.setMaxListenerWarningThreshold(Number(options[key]));
            }
        }
        Object.assign(this.config, options);
    }
    /**
     * The `handleRevert` options property returns the revert reason string if enabled for the following methods:
     * - web3.eth.sendTransaction()
     * - web3.eth.call()
     * - myContract.methods.myMethod().call()
     * - myContract.methods.myMethod().send()
     * Default is `false`.
     *
     * `Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`
     */ get handleRevert() {
        return this.config.handleRevert;
    }
    /**
     * Will set the handleRevert
     */ set handleRevert(val) {
        this._triggerConfigChange('handleRevert', val);
        this.config.handleRevert = val;
    }
    /**
     * The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
     * either `data`, `input` or both within your contract.
     * This will affect the contracts send, call and estimateGas methods
     * Default is `data`.
     */ get contractDataInputFill() {
        return this.config.contractDataInputFill;
    }
    /**
     * Will set the contractDataInputFill
     */ set contractDataInputFill(val) {
        this._triggerConfigChange('contractDataInputFill', val);
        this.config.contractDataInputFill = val;
    }
    /**
     * This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
     * - web3.eth.sendTransaction()
     * - web3.eth.call()
     * - myContract.methods.myMethod().call()
     * - myContract.methods.myMethod().send()
     */ get defaultAccount() {
        return this.config.defaultAccount;
    }
    /**
     * Will set the default account.
     */ set defaultAccount(val) {
        this._triggerConfigChange('defaultAccount', val);
        this.config.defaultAccount = val;
    }
    /**
     * The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
     * - web3.eth.getBalance()
     * - web3.eth.getCode()
     * - web3.eth.getTransactionCount()
     * - web3.eth.getStorageAt()
     * - web3.eth.call()
     * - myContract.methods.myMethod().call()
     */ get defaultBlock() {
        return this.config.defaultBlock;
    }
    /**
     * Will set the default block.
     *
     * - A block number
     * - `"earliest"` - String: The genesis block
     * - `"latest"` - String: The latest block (current head of the blockchain)
     * - `"pending"` - String: The currently mined block (including pending transactions)
     * - `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
     * - `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.
     */ set defaultBlock(val) {
        this._triggerConfigChange('defaultBlock', val);
        this.config.defaultBlock = val;
    }
    /**
     * The time used to wait for Ethereum Node to return the sent transaction result.
     * Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
     * Default is `750` seconds (12.5 minutes).
     */ get transactionSendTimeout() {
        return this.config.transactionSendTimeout;
    }
    /**
     * Will set the transactionSendTimeout.
     */ set transactionSendTimeout(val) {
        this._triggerConfigChange('transactionSendTimeout', val);
        this.config.transactionSendTimeout = val;
    }
    /**
     * The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
     * Default is `50`.
     */ get transactionBlockTimeout() {
        return this.config.transactionBlockTimeout;
    }
    /**
     * Will set the transactionBlockTimeout.
     */ set transactionBlockTimeout(val) {
        this._triggerConfigChange('transactionBlockTimeout', val);
        this.config.transactionBlockTimeout = val;
    }
    /**
     * This defines the number of blocks it requires until a transaction is considered confirmed.
     * Default is `24`.
     */ get transactionConfirmationBlocks() {
        return this.config.transactionConfirmationBlocks;
    }
    /**
     * Will set the transactionConfirmationBlocks.
     */ set transactionConfirmationBlocks(val) {
        this._triggerConfigChange('transactionConfirmationBlocks', val);
        this.config.transactionConfirmationBlocks = val;
    }
    /**
     * Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
     * Default is `1000` ms.
     */ get transactionPollingInterval() {
        return this.config.transactionPollingInterval;
    }
    /**
     * Will set the transactionPollingInterval.
     */ set transactionPollingInterval(val) {
        this._triggerConfigChange('transactionPollingInterval', val);
        this.config.transactionPollingInterval = val;
        this.transactionReceiptPollingInterval = val;
        this.transactionConfirmationPollingInterval = val;
    }
    /**
     * Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
     * Default is `750` seconds (12.5 minutes).
     */ get transactionPollingTimeout() {
        return this.config.transactionPollingTimeout;
    }
    /**
     * Will set the transactionPollingTimeout.
     */ set transactionPollingTimeout(val) {
        this._triggerConfigChange('transactionPollingTimeout', val);
        this.config.transactionPollingTimeout = val;
    }
    /**
     * The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
     * Default is `undefined`
     */ get transactionReceiptPollingInterval() {
        return this.config.transactionReceiptPollingInterval;
    }
    /**
     * Will set the transactionReceiptPollingInterval
     */ set transactionReceiptPollingInterval(val) {
        this._triggerConfigChange('transactionReceiptPollingInterval', val);
        this.config.transactionReceiptPollingInterval = val;
    }
    get transactionConfirmationPollingInterval() {
        return this.config.transactionConfirmationPollingInterval;
    }
    set transactionConfirmationPollingInterval(val) {
        this._triggerConfigChange('transactionConfirmationPollingInterval', val);
        this.config.transactionConfirmationPollingInterval = val;
    }
    /**
     * The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
     * Default is `10` seconds.
     */ get blockHeaderTimeout() {
        return this.config.blockHeaderTimeout;
    }
    /**
     * Will set the blockHeaderTimeout
     */ set blockHeaderTimeout(val) {
        this._triggerConfigChange('blockHeaderTimeout', val);
        this.config.blockHeaderTimeout = val;
    }
    /**
     * The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
     * Default is `false` for every feature.
     */ get enableExperimentalFeatures() {
        return this.config.enableExperimentalFeatures;
    }
    /**
     * Will set the enableExperimentalFeatures
     */ set enableExperimentalFeatures(val) {
        this._triggerConfigChange('enableExperimentalFeatures', val);
        this.config.enableExperimentalFeatures = val;
    }
    get maxListenersWarningThreshold() {
        return this.config.maxListenersWarningThreshold;
    }
    set maxListenersWarningThreshold(val) {
        this._triggerConfigChange('maxListenersWarningThreshold', val);
        this.setMaxListenerWarningThreshold(val);
        this.config.maxListenersWarningThreshold = val;
    }
    get defaultReturnFormat() {
        return this.config.defaultReturnFormat;
    }
    set defaultReturnFormat(val) {
        this._triggerConfigChange('defaultReturnFormat', val);
        this.config.defaultReturnFormat = val;
    }
    get defaultNetworkId() {
        return this.config.defaultNetworkId;
    }
    set defaultNetworkId(val) {
        this._triggerConfigChange('defaultNetworkId', val);
        this.config.defaultNetworkId = val;
    }
    get defaultChain() {
        return this.config.defaultChain;
    }
    set defaultChain(val) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.config.defaultCommon) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.config.defaultCommon.baseChain) && val !== this.config.defaultCommon.baseChain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$core_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigChainMismatchError"](this.config.defaultChain, val);
        this._triggerConfigChange('defaultChain', val);
        this.config.defaultChain = val;
    }
    /**
     * Will return the default hardfork. Default is `london`
     * The default hardfork property can be one of the following:
     * - `chainstart`
     * - `homestead`
     * - `dao`
     * - `tangerineWhistle`
     * - `spuriousDragon`
     * - `byzantium`
     * - `constantinople`
     * - `petersburg`
     * - `istanbul`
     * - `berlin`
     * - `london`
     * - 'arrowGlacier',
     * - 'tangerineWhistle',
     * - 'muirGlacier'
     *
     */ get defaultHardfork() {
        return this.config.defaultHardfork;
    }
    /**
     * Will set the default hardfork.
     *
     */ set defaultHardfork(val) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.config.defaultCommon) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.config.defaultCommon.hardfork) && val !== this.config.defaultCommon.hardfork) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$core_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigHardforkMismatchError"](this.config.defaultCommon.hardfork, val);
        this._triggerConfigChange('defaultHardfork', val);
        this.config.defaultHardfork = val;
    }
    /**
     *
     * Will get the default common property
     * The default common property does contain the following Common object:
     * - `customChain` - `Object`: The custom chain properties
     * 	- `name` - `string`: (optional) The name of the chain
     * 	- `networkId` - `number`: Network ID of the custom chain
     * 	- `chainId` - `number`: Chain ID of the custom chain
     * - `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
     * - `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
     * Default is `undefined`.
     *
     */ get defaultCommon() {
        return this.config.defaultCommon;
    }
    /**
     * Will set the default common property
     *
     */ set defaultCommon(val) {
        // validation check if default hardfork is set and matches defaultCommon hardfork
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.config.defaultHardfork) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(val) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(val.hardfork) && this.config.defaultHardfork !== val.hardfork) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$core_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigHardforkMismatchError"](this.config.defaultHardfork, val.hardfork);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.config.defaultChain) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(val) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(val.baseChain) && this.config.defaultChain !== val.baseChain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$core_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigChainMismatchError"](this.config.defaultChain, val.baseChain);
        this._triggerConfigChange('defaultCommon', val);
        this.config.defaultCommon = val;
    }
    /**
     *  Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
     *  Useful when you want wallets to handle gas pricing.
     */ get ignoreGasPricing() {
        return this.config.ignoreGasPricing;
    }
    set ignoreGasPricing(val) {
        this._triggerConfigChange('ignoreGasPricing', val);
        this.config.ignoreGasPricing = val;
    }
    get defaultTransactionType() {
        return this.config.defaultTransactionType;
    }
    set defaultTransactionType(val) {
        this._triggerConfigChange('defaultTransactionType', val);
        this.config.defaultTransactionType = val;
    }
    get defaultMaxPriorityFeePerGas() {
        return this.config.defaultMaxPriorityFeePerGas;
    }
    set defaultMaxPriorityFeePerGas(val) {
        this._triggerConfigChange('defaultMaxPriorityFeePerGas', val);
        this.config.defaultMaxPriorityFeePerGas = val;
    }
    get transactionBuilder() {
        return this.config.transactionBuilder;
    }
    set transactionBuilder(val) {
        this._triggerConfigChange('transactionBuilder', val);
        this.config.transactionBuilder = val;
    }
    get transactionTypeParser() {
        return this.config.transactionTypeParser;
    }
    set transactionTypeParser(val) {
        this._triggerConfigChange('transactionTypeParser', val);
        this.config.transactionTypeParser = val;
    }
    get customTransactionSchema() {
        return this.config.customTransactionSchema;
    }
    set customTransactionSchema(schema) {
        this._triggerConfigChange('customTransactionSchema', schema);
        this.config.customTransactionSchema = schema;
    }
    _triggerConfigChange(config, newValue) {
        this.emit(Web3ConfigEvent.CONFIG_CHANGE, {
            name: config,
            oldValue: this.config[config],
            newValue
        });
    }
} //# sourceMappingURL=web3_config.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "isEIP1193Provider": (()=>isEIP1193Provider),
    "isLegacyRequestProvider": (()=>isLegacyRequestProvider),
    "isLegacySendAsyncProvider": (()=>isLegacySendAsyncProvider),
    "isLegacySendProvider": (()=>isLegacySendProvider),
    "isMetaMaskProvider": (()=>isMetaMaskProvider),
    "isSupportSubscriptions": (()=>isSupportSubscriptions),
    "isSupportedProvider": (()=>isSupportedProvider),
    "isWeb3Provider": (()=>isWeb3Provider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$web3_base_provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/web3_base_provider.js [app-ssr] (ecmascript)");
;
const isWeb3Provider = (provider)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$web3_base_provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3BaseProvider"].isWeb3Provider(provider);
const isMetaMaskProvider = (provider)=>typeof provider !== 'string' && 'request' in provider && provider.request.constructor.name === 'AsyncFunction' && 'isMetaMask' in provider && provider.isMetaMask;
const isLegacyRequestProvider = (provider)=>typeof provider !== 'string' && 'request' in provider && provider.request.constructor.name === 'Function';
const isEIP1193Provider = (provider)=>typeof provider !== 'string' && 'request' in provider && provider.request.constructor.name === 'AsyncFunction';
const isLegacySendProvider = (provider)=>typeof provider !== 'string' && 'send' in provider;
const isLegacySendAsyncProvider = (provider)=>typeof provider !== 'string' && 'sendAsync' in provider;
const isSupportedProvider = (provider)=>provider && (isWeb3Provider(provider) || isEIP1193Provider(provider) || isLegacyRequestProvider(provider) || isLegacySendAsyncProvider(provider) || isLegacySendProvider(provider));
const isSupportSubscriptions = (provider)=>{
    if (provider && 'supportsSubscriptions' in provider) {
        return provider.supportsSubscriptions();
    }
    if (provider && typeof provider !== 'string' && 'on' in provider) {
        return true;
    }
    return false;
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_request_manager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3RequestManager": (()=>Web3RequestManager),
    "Web3RequestManagerEvent": (()=>Web3RequestManagerEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$providers$2d$http$40$4$2e$2$2e$0$2f$node_modules$2f$web3$2d$providers$2d$http$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-providers-http@4.2.0/node_modules/web3-providers-http/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$providers$2d$ws$40$4$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$providers$2d$ws$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-providers-ws@4.0.8_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-providers-ws/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_event_emitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/provider_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-ssr] (ecmascript) <export * as jsonRpc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/promise_helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/rpc_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/contract_errors.js [app-ssr] (ecmascript)");
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
var Web3RequestManagerEvent;
(function(Web3RequestManagerEvent) {
    Web3RequestManagerEvent["PROVIDER_CHANGED"] = "PROVIDER_CHANGED";
    Web3RequestManagerEvent["BEFORE_PROVIDER_CHANGE"] = "BEFORE_PROVIDER_CHANGE";
})(Web3RequestManagerEvent || (Web3RequestManagerEvent = {}));
const availableProviders = {
    HttpProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$providers$2d$http$40$4$2e$2$2e$0$2f$node_modules$2f$web3$2d$providers$2d$http$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    WebsocketProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$providers$2d$ws$40$4$2e$0$2e$8_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$providers$2d$ws$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
class Web3RequestManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3EventEmitter"] {
    constructor(provider, useRpcCallSpecification, requestManagerMiddleware){
        super();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(provider)) {
            this.setProvider(provider);
        }
        this.useRpcCallSpecification = useRpcCallSpecification;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(requestManagerMiddleware)) this.middleware = requestManagerMiddleware;
    }
    /**
     * Will return all available providers
     */ static get providers() {
        return availableProviders;
    }
    /**
     * Will return the current provider.
     *
     * @returns Returns the current provider
     */ get provider() {
        return this._provider;
    }
    /**
     * Will return all available providers
     */ // eslint-disable-next-line class-methods-use-this
    get providers() {
        return availableProviders;
    }
    /**
     * Use to set provider. Provider can be a provider instance or a string.
     *
     * @param provider - The provider to set
     */ setProvider(provider) {
        let newProvider;
        // autodetect provider
        if (provider && typeof provider === 'string' && this.providers) {
            // HTTP
            if (/^http(s)?:\/\//i.test(provider)) {
                newProvider = new this.providers.HttpProvider(provider);
            // WS
            } else if (/^ws(s)?:\/\//i.test(provider)) {
                newProvider = new this.providers.WebsocketProvider(provider);
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderError"](`Can't autodetect provider for "${provider}"`);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(provider)) {
            // In case want to unset the provider
            newProvider = undefined;
        } else {
            newProvider = provider;
        }
        this.emit(Web3RequestManagerEvent.BEFORE_PROVIDER_CHANGE, this._provider);
        this._provider = newProvider;
        this.emit(Web3RequestManagerEvent.PROVIDER_CHANGED, this._provider);
        return true;
    }
    setMiddleware(requestManagerMiddleware) {
        this.middleware = requestManagerMiddleware;
    }
    /**
     *
     * Will execute a request
     *
     * @param request - {@link Web3APIRequest} The request to send
     *
     * @returns The response of the request {@link ResponseType}. If there is error
     * in the response, will throw an error
     */ send(request) {
        return __awaiter(this, void 0, void 0, function*() {
            const requestObj = Object.assign({}, request);
            let response = yield this._sendRequest(requestObj);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.middleware)) response = yield this.middleware.processResponse(response);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithResult(response)) {
                return response.result;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"](response);
        });
    }
    /**
     * Same as send, but, will execute a batch of requests
     *
     * @param request {@link JsonRpcBatchRequest} The batch request to send
     */ sendBatch(request) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield this._sendRequest(request);
            return response;
        });
    }
    _sendRequest(request) {
        return __awaiter(this, void 0, void 0, function*() {
            const { provider } = this;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(provider)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderError"]('Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.');
            }
            let payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(request) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].toBatchPayload(request) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].toPayload(request);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.middleware)) {
                payload = yield this.middleware.processRequest(payload);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeb3Provider"])(provider)) {
                let response;
                try {
                    response = yield provider.request(payload);
                } catch (error) {
                    // Check if the provider throw an error instead of reject with error
                    response = error;
                }
                return this._processJsonRpcResponse(payload, response, {
                    legacy: false,
                    error: false
                });
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEIP1193Provider"])(provider)) {
                return provider.request(payload).then((res)=>this._processJsonRpcResponse(payload, res, {
                        legacy: true,
                        error: false
                    })).catch((error)=>this._processJsonRpcResponse(payload, error, {
                        legacy: true,
                        error: true
                    }));
            }
            // TODO: This could be deprecated and removed.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLegacyRequestProvider"])(provider)) {
                return new Promise((resolve, reject)=>{
                    const rejectWithError = (err)=>{
                        reject(this._processJsonRpcResponse(payload, err, {
                            legacy: true,
                            error: true
                        }));
                    };
                    const resolveWithResponse = (response)=>resolve(this._processJsonRpcResponse(payload, response, {
                            legacy: true,
                            error: false
                        }));
                    const result = provider.request(payload, // a callback that is expected to be called after getting the response:
                    (err, response)=>{
                        if (err) {
                            return rejectWithError(err);
                        }
                        return resolveWithResponse(response);
                    });
                    // Some providers, that follow a previous drafted version of EIP1193, has a `request` function
                    //	that is not defined as `async`, but it returns a promise.
                    // Such providers would not be picked with if(isEIP1193Provider(provider)) above
                    //	because the `request` function was not defined with `async` and so the function definition is not `AsyncFunction`.
                    // Like this provider: https://github.dev/NomicFoundation/hardhat/blob/62bea2600785595ba36f2105564076cf5cdf0fd8/packages/hardhat-core/src/internal/core/providers/backwards-compatibility.ts#L19
                    // So check if the returned result is a Promise, and resolve with it accordingly.
                    // Note: in this case we expect the callback provided above to never be called.
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$promise_helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromise"])(result)) {
                        const responsePromise = result;
                        responsePromise.then(resolveWithResponse).catch((error)=>{
                            try {
                                // Attempt to process the error response
                                const processedError = this._processJsonRpcResponse(payload, error, {
                                    legacy: true,
                                    error: true
                                });
                                reject(processedError);
                            } catch (processingError) {
                                // Catch any errors that occur during the error processing
                                reject(processingError);
                            }
                        });
                    }
                });
            }
            // TODO: This could be deprecated and removed.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLegacySendProvider"])(provider)) {
                return new Promise((resolve, reject)=>{
                    provider.send(payload, (err, response)=>{
                        if (err) {
                            return reject(this._processJsonRpcResponse(payload, err, {
                                legacy: true,
                                error: true
                            }));
                        }
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(response)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"]({}, 'Got a "nullish" response from provider.');
                        }
                        return resolve(this._processJsonRpcResponse(payload, response, {
                            legacy: true,
                            error: false
                        }));
                    });
                });
            }
            // TODO: This could be deprecated and removed.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLegacySendAsyncProvider"])(provider)) {
                return provider.sendAsync(payload).then((response)=>this._processJsonRpcResponse(payload, response, {
                        legacy: true,
                        error: false
                    })).catch((error)=>this._processJsonRpcResponse(payload, error, {
                        legacy: true,
                        error: true
                    }));
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderError"]('Provider does not have a request or send method to use.');
        });
    }
    // eslint-disable-next-line class-methods-use-this
    _processJsonRpcResponse(payload, response, { legacy, error }) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(response)) {
            return this._buildResponse(payload, // Some providers uses "null" as valid empty response
            // eslint-disable-next-line no-null/no-null
            null, error);
        }
        // This is the majority of the cases so check these first
        // A valid JSON-RPC response with error object
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithError(response)) {
            // check if its an rpc error
            if (this.useRpcCallSpecification && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponseRpcError"])(response)) {
                const rpcErrorResponse = response;
                // check if rpc error flag is on and response error code match an EIP-1474 or a standard rpc error code
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rpcErrorsMap"].get(rpcErrorResponse.error.code)) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const Err = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rpcErrorsMap"].get(rpcErrorResponse.error.code).error;
                    throw new Err(rpcErrorResponse);
                } else {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$rpc_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcError"](rpcErrorResponse);
                }
            } else if (!Web3RequestManager._isReverted(response)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidResponseError"](response, payload);
            }
        }
        // This is the majority of the cases so check these first
        // A valid JSON-RPC response with result object
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithResult(response)) {
            return response;
        }
        if (response instanceof Error) {
            Web3RequestManager._isReverted(response);
            throw response;
        }
        if (!legacy && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(payload) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchResponse(response)) {
            return response;
        }
        if (legacy && !error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(payload)) {
            return response;
        }
        if (legacy && error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(payload)) {
            // In case of error batch response we don't want to throw Invalid response
            throw response;
        }
        if (legacy && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithError(response) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithResult(response)) {
            return this._buildResponse(payload, response, error);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(payload) && !Array.isArray(response)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"](response, 'Got normal response for a batch request.');
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(payload) && Array.isArray(response)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"](response, 'Got batch response for a normal request.');
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"](response, 'Invalid response');
    }
    static _isReverted(response) {
        let error;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithError(response)) {
            error = response.error;
        } else if (response instanceof Error) {
            error = response;
        }
        // This message means that there was an error while executing the code of the smart contract
        // However, more processing will happen at a higher level to decode the error data,
        //	according to the Error ABI, if it was available as of EIP-838.
        if (error === null || error === void 0 ? void 0 : error.message.includes('revert')) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$contract_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractExecutionError"](error);
        return false;
    }
    // Need to use same types as _processJsonRpcResponse so have to declare as instance method
    // eslint-disable-next-line class-methods-use-this
    _buildResponse(payload, response, error) {
        const res = {
            jsonrpc: '2.0',
            // eslint-disable-next-line no-nested-ternary
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isBatchRequest(payload) ? payload[0].id : 'id' in payload ? payload.id : // eslint-disable-next-line no-null/no-null
            null
        };
        if (error) {
            return Object.assign(Object.assign({}, res), {
                error: response
            });
        }
        return Object.assign(Object.assign({}, res), {
            result: response
        });
    }
} //# sourceMappingURL=web3_request_manager.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscription_manager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3SubscriptionManager": (()=>Web3SubscriptionManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_request_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/provider_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
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
class Web3SubscriptionManager {
    constructor(requestManager, registeredSubscriptions, tolerateUnlinkedSubscription = false){
        this.requestManager = requestManager;
        this.registeredSubscriptions = registeredSubscriptions;
        this.tolerateUnlinkedSubscription = tolerateUnlinkedSubscription;
        this._subscriptions = new Map();
        this.requestManager.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3RequestManagerEvent"].BEFORE_PROVIDER_CHANGE, ()=>__awaiter(this, void 0, void 0, function*() {
                yield this.unsubscribe();
            }));
        this.requestManager.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3RequestManagerEvent"].PROVIDER_CHANGED, ()=>{
            this.clear();
            this.listenToProviderEvents();
        });
        this.listenToProviderEvents();
    }
    listenToProviderEvents() {
        const providerAsWebProvider = this.requestManager.provider;
        if (!this.requestManager.provider || typeof (providerAsWebProvider === null || providerAsWebProvider === void 0 ? void 0 : providerAsWebProvider.supportsSubscriptions) === 'function' && !(providerAsWebProvider === null || providerAsWebProvider === void 0 ? void 0 : providerAsWebProvider.supportsSubscriptions())) {
            return;
        }
        if (typeof this.requestManager.provider.on === 'function') {
            if (typeof this.requestManager.provider.request === 'function') {
                // Listen to provider messages and data
                this.requestManager.provider.on('message', // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
                (message)=>this.messageListener(message));
            } else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
                providerAsWebProvider.on('data', (data)=>this.messageListener(data));
            }
        }
    }
    messageListener(data) {
        var _a, _b, _c;
        if (!data) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"]('Should not call messageListener with no data. Type was');
        }
        const subscriptionId = ((_a = data.params) === null || _a === void 0 ? void 0 : _a.subscription) || ((_b = data.data) === null || _b === void 0 ? void 0 : _b.subscription) || ((_c = data.id) === null || _c === void 0 ? void 0 : _c.toString(16));
        // Process if the received data is related to a subscription
        if (subscriptionId) {
            const sub = this._subscriptions.get(subscriptionId);
            sub === null || sub === void 0 ? void 0 : sub.processSubscriptionData(data);
        }
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
        return __awaiter(this, arguments, void 0, function*(name, args, returnFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"]) {
            const Klass = this.registeredSubscriptions[name];
            if (!Klass) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"]('Invalid subscription type');
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const subscription = new Klass(args !== null && args !== void 0 ? args : undefined, {
                subscriptionManager: this,
                returnFormat
            });
            yield this.addSubscription(subscription);
            return subscription;
        });
    }
    /**
     * Will returns all subscriptions.
     */ get subscriptions() {
        return this._subscriptions;
    }
    /**
     *
     * Adds an instance of {@link Web3Subscription} and subscribes to it
     *
     * @param sub - A {@link Web3Subscription} object
     */ addSubscription(sub) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.requestManager.provider) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderError"]('Provider not available');
            }
            if (!this.supportsSubscriptions()) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"]('The current provider does not support subscriptions');
            }
            if (sub.id && this._subscriptions.has(sub.id)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"](`Subscription with id "${sub.id}" already exists`);
            }
            yield sub.sendSubscriptionRequest();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(sub.id)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"]('Subscription is not subscribed yet.');
            }
            this._subscriptions.set(sub.id, sub);
            return sub.id;
        });
    }
    /**
     * Will clear a subscription
     *
     * @param id - The subscription of type {@link Web3Subscription}  to remove
     */ removeSubscription(sub) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = sub;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(id)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"]('Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.');
            }
            if (!this._subscriptions.has(id) && !this.tolerateUnlinkedSubscription) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$provider_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionError"](`Subscription with id "${id.toString()}" does not exists`);
            }
            yield sub.sendUnsubscribeRequest();
            this._subscriptions.delete(id);
            return id;
        });
    }
    /**
     * Will unsubscribe all subscriptions that fulfill the condition
     *
     * @param condition - A function that access and `id` and a `subscription` and return `true` or `false`
     * @returns An array of all the un-subscribed subscriptions
     */ unsubscribe(condition) {
        return __awaiter(this, void 0, void 0, function*() {
            const result = [];
            for (const [id, sub] of this.subscriptions.entries()){
                if (!condition || typeof condition === 'function' && condition({
                    id,
                    sub
                })) {
                    result.push(this.removeSubscription(sub));
                }
            }
            return Promise.all(result);
        });
    }
    /**
     * Clears all subscriptions
     */ clear() {
        this._subscriptions.clear();
    }
    /**
     * Check whether the current provider supports subscriptions.
     *
     * @returns `true` or `false` depending on if the current provider supports subscriptions
     */ supportsSubscriptions() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(this.requestManager.provider) ? false : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSupportSubscriptions"])(this.requestManager.provider);
    }
} //# sourceMappingURL=web3_subscription_manager.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscriptions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3Subscription": (()=>Web3Subscription)
});
// eslint-disable-next-line max-classes-per-file
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscription_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_event_emitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/data_format_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-ssr] (ecmascript) <export * as jsonRpc>");
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
class Web3Subscription extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3EventEmitter"] {
    constructor(args, options){
        var _a;
        super();
        this.args = args;
        const { requestManager } = options;
        const { subscriptionManager } = options;
        if (requestManager) {
            // eslint-disable-next-line deprecation/deprecation
            this._subscriptionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3SubscriptionManager"](requestManager, {}, true);
        } else {
            this._subscriptionManager = subscriptionManager;
        }
        this._returnFormat = (_a = options === null || options === void 0 ? void 0 : options.returnFormat) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$data_format_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RETURN_FORMAT"];
    }
    get id() {
        return this._id;
    }
    get lastBlock() {
        return this._lastBlock;
    }
    subscribe() {
        return __awaiter(this, void 0, void 0, function*() {
            return this._subscriptionManager.addSubscription(this);
        });
    }
    processSubscriptionData(data) {
        var _a, _b;
        if (data === null || data === void 0 ? void 0 : data.data) {
            // for EIP-1193 provider
            this._processSubscriptionResult((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.result) !== null && _b !== void 0 ? _b : data === null || data === void 0 ? void 0 : data.data);
        } else if (data && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithNotification(data)) {
            this._processSubscriptionResult(data === null || data === void 0 ? void 0 : data.params.result);
        }
    }
    sendSubscriptionRequest() {
        return __awaiter(this, void 0, void 0, function*() {
            this._id = yield this._subscriptionManager.requestManager.send({
                method: 'eth_subscribe',
                params: this._buildSubscriptionParams()
            });
            this.emit('connected', this._id);
            return this._id;
        });
    }
    get returnFormat() {
        return this._returnFormat;
    }
    get subscriptionManager() {
        return this._subscriptionManager;
    }
    resubscribe() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.unsubscribe();
            yield this.subscribe();
        });
    }
    unsubscribe() {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.id) {
                return;
            }
            yield this._subscriptionManager.removeSubscription(this);
        });
    }
    sendUnsubscribeRequest() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this._subscriptionManager.requestManager.send({
                method: 'eth_unsubscribe',
                params: [
                    this.id
                ]
            });
            this._id = undefined;
        });
    }
    // eslint-disable-next-line class-methods-use-this
    formatSubscriptionResult(data) {
        return data;
    }
    _processSubscriptionResult(data) {
        this.emit('data', this.formatSubscriptionResult(data));
    }
    _processSubscriptionError(error) {
        this.emit('error', error);
    }
    // eslint-disable-next-line class-methods-use-this
    _buildSubscriptionParams() {
        // This should be overridden in the subclass
        throw new Error('Implement in the child class');
    }
} //# sourceMappingURL=web3_subscriptions.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_batch_request.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "DEFAULT_BATCH_REQUEST_TIMEOUT": (()=>DEFAULT_BATCH_REQUEST_TIMEOUT),
    "Web3BatchRequest": (()=>Web3BatchRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/json_rpc.js [app-ssr] (ecmascript) <export * as jsonRpc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_deferred_promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/web3_deferred_promise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/response_errors.js [app-ssr] (ecmascript)");
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
const DEFAULT_BATCH_REQUEST_TIMEOUT = 1000;
class Web3BatchRequest {
    constructor(requestManager){
        this._requestManager = requestManager;
        this._requests = new Map();
    }
    get requests() {
        return [
            ...this._requests.values()
        ].map((r)=>r.payload);
    }
    add(request) {
        const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].toPayload(request);
        const promise = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_deferred_promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3DeferredPromise"]();
        this._requests.set(payload.id, {
            payload,
            promise
        });
        return promise;
    }
    // eslint-disable-next-line class-methods-use-this
    execute(options) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            if (this.requests.length === 0) {
                return Promise.resolve([]);
            }
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$web3_deferred_promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3DeferredPromise"]({
                timeout: (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : DEFAULT_BATCH_REQUEST_TIMEOUT,
                eagerStart: true,
                timeoutMessage: 'Batch request timeout'
            });
            this._processBatchRequest(request).catch((err)=>request.reject(err));
            request.catch((err)=>{
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTimeoutError"]) {
                    this._abortAllRequests('Batch request timeout');
                }
                request.reject(err);
            });
            return request;
        });
    }
    _processBatchRequest(promise) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a, _b;
            const response = yield this._requestManager.sendBatch([
                ...this._requests.values()
            ].map((r)=>r.payload));
            if (response.length !== this._requests.size) {
                this._abortAllRequests('Invalid batch response');
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"](response, `Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${response.length}`);
            }
            const requestIds = this.requests.map((r)=>r.id).map(Number).sort((a, b)=>a - b);
            const responseIds = response.map((r)=>r.id).map(Number).sort((a, b)=>a - b);
            if (JSON.stringify(requestIds) !== JSON.stringify(responseIds)) {
                this._abortAllRequests('Invalid batch response');
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$response_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponseError"](response, `Batch request mismatch the results. Requests: [${requestIds.join()}], Responses: [${responseIds.join()}]`);
            }
            for (const res of response){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithResult(res)) {
                    (_a = this._requests.get(res.id)) === null || _a === void 0 ? void 0 : _a.promise.resolve(res.result);
                } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$json_rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__jsonRpc$3e$__["jsonRpc"].isResponseWithError(res)) {
                    (_b = this._requests.get(res.id)) === null || _b === void 0 ? void 0 : _b.promise.reject(res.error);
                }
            }
            promise.resolve(response);
        });
    }
    _abortAllRequests(msg) {
        for (const { promise } of this._requests.values()){
            promise.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationAbortError"](msg));
        }
    }
} //# sourceMappingURL=web3_batch_request.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_context.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Web3Context": (()=>Web3Context),
    "Web3EthPluginBase": (()=>Web3EthPluginBase),
    "Web3PluginBase": (()=>Web3PluginBase)
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
*/ // eslint-disable-next-line max-classes-per-file
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_batch_request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_batch_request.js [app-ssr] (ecmascript)");
// eslint-disable-next-line import/no-cycle
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_request_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscription_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
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
;
class Web3Context extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3Config"] {
    constructor(providerOrContext){
        var _a;
        super();
        this.providers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3RequestManager"].providers;
        // If "providerOrContext" is provided as "string" or an objects matching "SupportedProviders" interface
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(providerOrContext) || typeof providerOrContext === 'string' && providerOrContext.trim() !== '' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSupportedProvider"])(providerOrContext)) {
            this._requestManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3RequestManager"](providerOrContext);
            this._subscriptionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3SubscriptionManager"](this._requestManager, {});
            return;
        }
        const { config, provider, requestManager, subscriptionManager, registeredSubscriptions, accountProvider, wallet, requestManagerMiddleware } = providerOrContext;
        this.setConfig(config !== null && config !== void 0 ? config : {});
        this._requestManager = requestManager !== null && requestManager !== void 0 ? requestManager : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3RequestManager"](provider, (_a = config === null || config === void 0 ? void 0 : config.enableExperimentalFeatures) === null || _a === void 0 ? void 0 : _a.useSubscriptionWhenCheckingBlockTimeout, requestManagerMiddleware);
        if (subscriptionManager) {
            this._subscriptionManager = subscriptionManager;
        } else {
            this._subscriptionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3SubscriptionManager"](this.requestManager, registeredSubscriptions !== null && registeredSubscriptions !== void 0 ? registeredSubscriptions : {});
        }
        if (accountProvider) {
            this._accountProvider = accountProvider;
        }
        if (wallet) {
            this._wallet = wallet;
        }
    }
    get requestManager() {
        return this._requestManager;
    }
    /**
     * Will return the current subscriptionManager ({@link Web3SubscriptionManager})
     */ get subscriptionManager() {
        return this._subscriptionManager;
    }
    get wallet() {
        return this._wallet;
    }
    get accountProvider() {
        return this._accountProvider;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromContextObject(...args) {
        return new this(...args.reverse());
    }
    getContextObject() {
        var _a;
        return {
            config: this.config,
            provider: this.provider,
            requestManager: this.requestManager,
            subscriptionManager: this.subscriptionManager,
            registeredSubscriptions: (_a = this.subscriptionManager) === null || _a === void 0 ? void 0 : _a.registeredSubscriptions,
            providers: this.providers,
            wallet: this.wallet,
            accountProvider: this.accountProvider
        };
    }
    /**
     * Use to create new object of any type extended by `Web3Context`
     * and link it to current context. This can be used to initiate a global context object
     * and then use it to create new objects of any type extended by `Web3Context`.
     */ use(ContextRef, ...args) {
        const newContextChild = new ContextRef(...[
            ...args,
            this.getContextObject()
        ]);
        this.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3ConfigEvent"].CONFIG_CHANGE, (event)=>{
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            newContextChild.setConfig({
                [event.name]: event.newValue
            });
        });
        // @ts-expect-error No index signature with a parameter of type 'string' was found on type 'Web3Context<API, RegisteredSubs>'
        this[ContextRef.name] = newContextChild;
        return newContextChild;
    }
    /**
     * Link current context to another context.
     */ link(parentContext) {
        this.setConfig(parentContext.config);
        this._requestManager = parentContext.requestManager;
        this.provider = parentContext.provider;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this._subscriptionManager = parentContext.subscriptionManager;
        this._wallet = parentContext.wallet;
        this._accountProvider = parentContext._accountProvider;
        parentContext.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3ConfigEvent"].CONFIG_CHANGE, (event)=>{
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            this.setConfig({
                [event.name]: event.newValue
            });
        });
    }
    // eslint-disable-next-line no-use-before-define
    registerPlugin(plugin) {
        // @ts-expect-error No index signature with a parameter of type 'string' was found on type 'Web3Context<API, RegisteredSubs>'
        if (this[plugin.pluginNamespace] !== undefined) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExistingPluginNamespaceError"](plugin.pluginNamespace);
        const _pluginObject = {
            [plugin.pluginNamespace]: plugin
        };
        _pluginObject[plugin.pluginNamespace].link(this);
        Object.assign(this, _pluginObject);
    }
    /**
     * Will return the current provider.
     *
     * @returns Returns the current provider
     * @example
     * ```ts
     * const web3 = new Web3Context("http://localhost:8545");
     * console.log(web3.provider);
     * > HttpProvider {
     * 	clientUrl: 'http://localhost:8545',
     * 	httpProviderOptions: undefined
     *  }
     * ```
     */ get provider() {
        return this.currentProvider;
    }
    /**
     * Will set the current provider.
     *
     * @param provider - The provider to set
     *
     * Accepted providers are of type {@link SupportedProviders}
     * @example
     * ```ts
     *  const web3Context = new web3ContextContext("http://localhost:8545");
     * web3Context.provider = "ws://localhost:8545";
     * console.log(web3Context.provider);
     * > WebSocketProvider {
     * _eventEmitter: EventEmitter {
     * _events: [Object: null prototype] {},
     * _eventsCount: 0,
     * ...
     * }
     * ```
     */ set provider(provider) {
        this.requestManager.setProvider(provider);
    }
    /**
     * Will return the current provider. (The same as `provider`)
     *
     * @returns Returns the current provider
     * @example
     * ```ts
     * const web3Context = new Web3Context("http://localhost:8545");
     * console.log(web3Context.provider);
     * > HttpProvider {
     * 	clientUrl: 'http://localhost:8545',
     * 	httpProviderOptions: undefined
     *  }
     * ```
     */ get currentProvider() {
        return this.requestManager.provider;
    }
    /**
     * Will set the current provider. (The same as `provider`)
     *
     * @param provider - {@link SupportedProviders} The provider to set
     *
     * @example
     * ```ts
     *  const web3Context = new Web3Context("http://localhost:8545");
     * web3Context.currentProvider = "ws://localhost:8545";
     * console.log(web3Context.provider);
     * > WebSocketProvider {
     * _eventEmitter: EventEmitter {
     * _events: [Object: null prototype] {},
     * _eventsCount: 0,
     * ...
     * }
     * ```
     */ set currentProvider(provider) {
        this.requestManager.setProvider(provider);
    }
    /**
     * Will return the givenProvider if available.
     *
     * When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.
     */ // eslint-disable-next-line class-methods-use-this
    get givenProvider() {
        return Web3Context.givenProvider;
    }
    /**
     * Will set the provider.
     *
     * @param provider - {@link SupportedProviders} The provider to set
     * @returns Returns true if the provider was set
     */ setProvider(provider) {
        this.provider = provider;
        return true;
    }
    setRequestManagerMiddleware(requestManagerMiddleware) {
        this.requestManager.setMiddleware(requestManagerMiddleware);
    }
    /**
     * Will return the {@link Web3BatchRequest} constructor.
     */ get BatchRequest() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_batch_request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3BatchRequest"].bind(undefined, this._requestManager);
    }
    /**
     * This method allows extending the web3 modules.
     * Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.
     */ extend(extendObj) {
        var _a;
        // @ts-expect-error No index signature with a parameter of type 'string' was found on type 'Web3Context<API, RegisteredSubs>'
        if (extendObj.property && !this[extendObj.property]) // @ts-expect-error No index signature with a parameter of type 'string' was found on type 'Web3Context<API, RegisteredSubs>'
        this[extendObj.property] = {};
        (_a = extendObj.methods) === null || _a === void 0 ? void 0 : _a.forEach((element)=>{
            const method = (...givenParams)=>__awaiter(this, void 0, void 0, function*() {
                    return this.requestManager.send({
                        method: element.call,
                        params: givenParams
                    });
                });
            if (extendObj.property) // @ts-expect-error No index signature with a parameter of type 'string' was found on type 'Web3Context<API, RegisteredSubs>'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this[extendObj.property][element.name] = method;
            else this[element.name] = method;
        });
        return this;
    }
}
Web3Context.providers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3RequestManager"].providers;
class Web3PluginBase extends Web3Context {
    // eslint-disable-next-line class-methods-use-this
    registerNewTransactionType(type, txClass) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionFactory"].registerTransactionType(type, txClass);
    }
}
class Web3EthPluginBase extends Web3PluginBase {
} //# sourceMappingURL=web3_context.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/formatters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "inputAddressFormatter": (()=>inputAddressFormatter),
    "inputBlockNumberFormatter": (()=>inputBlockNumberFormatter),
    "inputCallFormatter": (()=>inputCallFormatter),
    "inputDefaultBlockNumberFormatter": (()=>inputDefaultBlockNumberFormatter),
    "inputLogFormatter": (()=>inputLogFormatter),
    "inputPostFormatter": (()=>inputPostFormatter),
    "inputSignFormatter": (()=>inputSignFormatter),
    "inputStorageKeysFormatter": (()=>inputStorageKeysFormatter),
    "inputTopicFormatter": (()=>inputTopicFormatter),
    "inputTransactionFormatter": (()=>inputTransactionFormatter),
    "outputBigIntegerFormatter": (()=>outputBigIntegerFormatter),
    "outputBlockFormatter": (()=>outputBlockFormatter),
    "outputLogFormatter": (()=>outputLogFormatter),
    "outputPostFormatter": (()=>outputPostFormatter),
    "outputProofFormatter": (()=>outputProofFormatter),
    "outputSyncingFormatter": (()=>outputSyncingFormatter),
    "outputTransactionFormatter": (()=>outputTransactionFormatter),
    "outputTransactionReceiptFormatter": (()=>outputTransactionReceiptFormatter),
    "txInputOptionsFormatter": (()=>txInputOptionsFormatter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$iban$40$4$2e$0$2e$7$2f$node_modules$2f$web3$2d$eth$2d$iban$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-iban@4.0.7/node_modules/web3-eth-iban/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$iban$40$4$2e$0$2e$7$2f$node_modules$2f$web3$2d$eth$2d$iban$2f$lib$2f$esm$2f$iban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-iban@4.0.7/node_modules/web3-eth-iban/lib/esm/iban.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/generic_errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/objects.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/eth_types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-ssr] (ecmascript)");
;
;
;
;
;
const inputStorageKeysFormatter = (keys)=>keys.map((num)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(num));
const outputProofFormatter = (proof)=>({
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(proof.address),
        nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumberString"])(proof.nonce),
        balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumberString"])(proof.balance)
    });
const outputBigIntegerFormatter = (number)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(number);
const inputBlockNumberFormatter = (blockNumber)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(blockNumber)) {
        return undefined;
    }
    if (typeof blockNumber === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockTag"])(blockNumber)) {
        return blockNumber;
    }
    if (blockNumber === 'genesis') {
        return '0x0';
    }
    if (typeof blockNumber === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(blockNumber)) {
        return blockNumber.toLowerCase();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber);
};
const inputDefaultBlockNumberFormatter = (blockNumber, defaultBlock)=>{
    if (!blockNumber) {
        return inputBlockNumberFormatter(defaultBlock);
    }
    return inputBlockNumberFormatter(blockNumber);
};
const inputAddressFormatter = (address)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$iban$40$4$2e$0$2e$7$2f$node_modules$2f$web3$2d$eth$2d$iban$2f$lib$2f$esm$2f$iban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iban"].isValid(address) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$iban$40$4$2e$0$2e$7$2f$node_modules$2f$web3$2d$eth$2d$iban$2f$lib$2f$esm$2f$iban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iban"].isDirect(address)) {
        const iban = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$iban$40$4$2e$0$2e$7$2f$node_modules$2f$web3$2d$eth$2d$iban$2f$lib$2f$esm$2f$iban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iban"](address);
        return iban.toAddress().toLowerCase();
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address)) {
        return `0x${address.toLowerCase().replace('0x', '')}`;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatterError"](`Provided address ${address} is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted.`);
};
const txInputOptionsFormatter = (options)=>{
    var _a;
    const modifiedOptions = Object.assign({}, options);
    if (options.to) {
        // it might be contract creation
        modifiedOptions.to = inputAddressFormatter(options.to);
    }
    if (options.data && options.input) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatterError"]('You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');
    }
    if (!options.input && options.data) {
        modifiedOptions.input = options.data;
        delete modifiedOptions.data;
    }
    if (options.input && !options.input.startsWith('0x')) {
        modifiedOptions.input = `0x${options.input}`;
    }
    if (modifiedOptions.input && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(modifiedOptions.input)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatterError"]('The input field must be HEX encoded data.');
    }
    // allow both
    if (options.gas || options.gasLimit) {
        modifiedOptions.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])((_a = options.gas) !== null && _a !== void 0 ? _a : options.gasLimit);
    }
    if (options.maxPriorityFeePerGas || options.maxFeePerGas) {
        delete modifiedOptions.gasPrice;
    }
    [
        'gasPrice',
        'gas',
        'value',
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'nonce',
        'chainId'
    ].filter((key)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(modifiedOptions[key])).forEach((key)=>{
        modifiedOptions[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(modifiedOptions[key]);
    });
    return modifiedOptions;
};
const inputCallFormatter = (options, defaultAccount)=>{
    var _a;
    const opts = txInputOptionsFormatter(options);
    const from = (_a = opts.from) !== null && _a !== void 0 ? _a : defaultAccount;
    if (from) {
        opts.from = inputAddressFormatter(from);
    }
    return opts;
};
const inputTransactionFormatter = (options, defaultAccount)=>{
    var _a;
    const opts = txInputOptionsFormatter(options);
    // check from, only if not number, or object
    if (!(typeof opts.from === 'number') && !(!!opts.from && typeof opts.from === 'object')) {
        opts.from = (_a = opts.from) !== null && _a !== void 0 ? _a : defaultAccount;
        if (!options.from && !(typeof options.from === 'number')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatterError"]('The send transactions "from" field must be defined!');
        }
        opts.from = inputAddressFormatter(options.from);
    }
    return opts;
};
const inputSignFormatter = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(data) ? data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utf8ToHex"])(data);
const outputTransactionFormatter = (tx)=>{
    const modifiedTx = Object.assign({}, tx);
    if (tx.blockNumber) {
        modifiedTx.blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(tx.blockNumber);
    }
    if (tx.transactionIndex) {
        modifiedTx.transactionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(tx.transactionIndex);
    }
    modifiedTx.nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(tx.nonce);
    modifiedTx.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(tx.gas);
    if (tx.gasPrice) {
        modifiedTx.gasPrice = outputBigIntegerFormatter(tx.gasPrice);
    }
    if (tx.maxFeePerGas) {
        modifiedTx.maxFeePerGas = outputBigIntegerFormatter(tx.maxFeePerGas);
    }
    if (tx.maxPriorityFeePerGas) {
        modifiedTx.maxPriorityFeePerGas = outputBigIntegerFormatter(tx.maxPriorityFeePerGas);
    }
    if (tx.type) {
        modifiedTx.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(tx.type);
    }
    modifiedTx.value = outputBigIntegerFormatter(tx.value);
    if (tx.to && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(tx.to)) {
        // tx.to could be `0x0` or `null` while contract creation
        modifiedTx.to = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(tx.to);
    } else {
        modifiedTx.to = undefined; // set to `null` if invalid address
    }
    if (tx.from) {
        modifiedTx.from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(tx.from);
    }
    return modifiedTx;
};
const inputTopicFormatter = (topic)=>{
    // Using "null" value intentionally for validation
    // eslint-disable-next-line no-null/no-null
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(topic)) return null;
    const value = String(topic);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromUtf8"])(value);
};
const inputLogFormatter = (filter)=>{
    var _a;
    const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(filter) ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$objects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDeep"])({}, filter);
    // If options !== undefined, don't blow out existing data
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(val.fromBlock)) {
        val.fromBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$eth_types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlockTags"].LATEST;
    }
    val.fromBlock = inputBlockNumberFormatter(val.fromBlock);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(val.toBlock)) {
        val.toBlock = inputBlockNumberFormatter(val.toBlock);
    }
    // make sure topics, get converted to hex
    val.topics = (_a = val.topics) !== null && _a !== void 0 ? _a : [];
    val.topics = val.topics.map((topic)=>Array.isArray(topic) ? topic.map(inputTopicFormatter) : inputTopicFormatter(topic));
    if (val.address) {
        val.address = Array.isArray(val.address) ? val.address.map((addr)=>inputAddressFormatter(addr)) : inputAddressFormatter(val.address);
    }
    return val;
};
const outputLogFormatter = (log)=>{
    const modifiedLog = Object.assign({}, log);
    const logIndex = typeof log.logIndex === 'string' ? log.logIndex : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(log.logIndex);
    // generate a custom log id
    if (typeof log.blockHash === 'string' && typeof log.transactionHash === 'string') {
        const shaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha3Raw"])(`${log.blockHash.replace('0x', '')}${log.transactionHash.replace('0x', '')}${logIndex.replace('0x', '')}`);
        modifiedLog.id = `log_${shaId.replace('0x', '').slice(0, 8)}`;
    } else if (!log.id) {
        modifiedLog.id = undefined;
    }
    if (log.blockNumber && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(log.blockNumber)) {
        modifiedLog.blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(log.blockNumber);
    }
    if (log.transactionIndex && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(log.transactionIndex)) {
        modifiedLog.transactionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(log.transactionIndex);
    }
    if (log.logIndex && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHexStrict"])(log.logIndex)) {
        modifiedLog.logIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(log.logIndex);
    }
    if (log.address) {
        modifiedLog.address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(log.address);
    }
    return modifiedLog;
};
const outputTransactionReceiptFormatter = (receipt)=>{
    if (typeof receipt !== 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$generic_errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatterError"](`Received receipt is invalid: ${String(receipt)}`);
    }
    const modifiedReceipt = Object.assign({}, receipt);
    if (receipt.blockNumber) {
        modifiedReceipt.blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(receipt.blockNumber);
    }
    if (receipt.transactionIndex) {
        modifiedReceipt.transactionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(receipt.transactionIndex);
    }
    modifiedReceipt.cumulativeGasUsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(receipt.cumulativeGasUsed);
    modifiedReceipt.gasUsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(receipt.gasUsed);
    if (receipt.logs && Array.isArray(receipt.logs)) {
        modifiedReceipt.logs = receipt.logs.map(outputLogFormatter);
    }
    if (receipt.effectiveGasPrice) {
        modifiedReceipt.effectiveGasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(receipt.effectiveGasPrice);
    }
    if (receipt.contractAddress) {
        modifiedReceipt.contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(receipt.contractAddress);
    }
    if (receipt.status) {
        modifiedReceipt.status = Boolean(parseInt(receipt.status, 10));
    }
    return modifiedReceipt;
};
const outputBlockFormatter = (block)=>{
    const modifiedBlock = Object.assign({}, block);
    // transform to number
    modifiedBlock.gasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(block.gasLimit);
    modifiedBlock.gasUsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(block.gasUsed);
    modifiedBlock.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(block.size);
    modifiedBlock.timestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(block.timestamp);
    if (block.number) {
        modifiedBlock.number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(block.number);
    }
    if (block.difficulty) {
        modifiedBlock.difficulty = outputBigIntegerFormatter(block.difficulty);
    }
    if (block.totalDifficulty) {
        modifiedBlock.totalDifficulty = outputBigIntegerFormatter(block.totalDifficulty);
    }
    if (block.transactions && Array.isArray(block.transactions)) {
        modifiedBlock.transactions = block.transactions.map(outputTransactionFormatter);
    }
    if (block.miner) {
        modifiedBlock.miner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toChecksumAddress"])(block.miner);
    }
    if (block.baseFeePerGas) {
        modifiedBlock.baseFeePerGas = outputBigIntegerFormatter(block.baseFeePerGas);
    }
    return modifiedBlock;
};
const inputPostFormatter = (post)=>{
    var _a;
    const modifiedPost = Object.assign({}, post);
    if (post.ttl) {
        modifiedPost.ttl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(post.ttl);
    }
    if (post.workToProve) {
        modifiedPost.workToProve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(post.workToProve);
    }
    if (post.priority) {
        modifiedPost.priority = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(post.priority);
    }
    // fallback
    if (post.topics && !Array.isArray(post.topics)) {
        modifiedPost.topics = post.topics ? [
            post.topics
        ] : [];
    }
    // format the following options
    modifiedPost.topics = (_a = modifiedPost.topics) === null || _a === void 0 ? void 0 : _a.map((topic)=>topic.startsWith('0x') ? topic : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromUtf8"])(topic));
    return modifiedPost;
};
const outputPostFormatter = (post)=>{
    var _a;
    const modifiedPost = Object.assign({}, post);
    if (post.expiry) {
        modifiedPost.expiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(post.expiry);
    }
    if (post.sent) {
        modifiedPost.sent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(post.sent);
    }
    if (post.ttl) {
        modifiedPost.ttl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(post.ttl);
    }
    if (post.workProved) {
        modifiedPost.workProved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(post.workProved);
    }
    // post.payloadRaw = post.payload;
    // post.payload = utils.hexToAscii(post.payload);
    // if (utils.isJson(post.payload)) {
    //     post.payload = JSON.parse(post.payload);
    // }
    // format the following options
    if (!post.topics) {
        modifiedPost.topics = [];
    }
    modifiedPost.topics = (_a = modifiedPost.topics) === null || _a === void 0 ? void 0 : _a.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUtf8"]);
    return modifiedPost;
};
const outputSyncingFormatter = (result)=>{
    const modifiedResult = Object.assign({}, result);
    modifiedResult.startingBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(result.startingBlock);
    modifiedResult.currentBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(result.currentBlock);
    modifiedResult.highestBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(result.highestBlock);
    if (result.knownStates) {
        modifiedResult.knownStates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(result.knownStates);
    }
    if (result.pulledStates) {
        modifiedResult.pulledStates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(result.pulledStates);
    }
    return modifiedResult;
}; //# sourceMappingURL=formatters.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_promi_event.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "Web3PromiEvent": (()=>Web3PromiEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_event_emitter.js [app-ssr] (ecmascript)");
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
class Web3PromiEvent extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Web3EventEmitter"] {
    constructor(executor){
        super();
        // public tag to treat object as promise by different libs
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        this[_a] = 'Promise';
        this._promise = new Promise(executor);
    }
    then(onfulfilled, onrejected) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._promise.then(onfulfilled, onrejected);
        });
    }
    catch(onrejected) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._promise.catch(onrejected);
        });
    }
    finally(onfinally) {
        return __awaiter(this, void 0, void 0, function*() {
            return this._promise.finally(onfinally);
        });
    }
    on(eventName, fn) {
        super.on(eventName, fn);
        return this;
    }
    once(eventName, fn) {
        super.once(eventName, fn);
        return this;
    }
}
_a = Symbol.toStringTag; //# sourceMappingURL=web3_promi_event.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_request_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_request_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscription_manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscription_manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_subscriptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_subscriptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_batch_request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_batch_request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_promi_event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_promi_event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$web3_event_emitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/web3_event_emitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$core$40$4$2e$7$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$web3$2d$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-core@4.7.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/web3-core/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=8abd7_web3-core_lib_esm_0c2035._.js.map