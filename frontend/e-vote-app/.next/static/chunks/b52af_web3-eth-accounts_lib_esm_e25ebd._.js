(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/b52af_web3-eth-accounts_lib_esm_e25ebd._.js", {

"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/wallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "Wallet": (()=>Wallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$web3_base_wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-types@1.10.0/node_modules/web3-types/lib/esm/web3_base_wallet.js [app-client] (ecmascript)");
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
class Wallet extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$types$40$1$2e$10$2e$0$2f$node_modules$2f$web3$2d$types$2f$lib$2f$esm$2f$web3_base_wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Web3BaseWallet"] {
    constructor(){
        super(...arguments);
        this._addressMap = new Map();
        this._defaultKeyName = 'web3js_wallet';
    }
    /**
     * Get the storage object of the browser
     *
     * @returns the storage
     */ static getStorage() {
        let storage;
        try {
            storage = window.localStorage;
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return storage;
        } catch (e) {
            return e && // everything except Firefox
            (e.code === 22 || // Firefox
            e.code === 1014 || // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' || // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(storage) && storage.length !== 0 ? storage : undefined;
        }
    }
    /**
     * Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.
     *
     * @param numberOfAccounts - Number of accounts to create. Leave empty to create an empty wallet.
     * @returns The wallet
     * ```ts
     * web3.eth.accounts.wallet.create(2)
     * > Wallet(2) [
     *   {
     *     address: '0xde38310a42B751AE57d30cFFF4a0A3c52A442fCE',
     *     privateKey: '0x6422c9d28efdcbee93c1d32a5fc6fd6fa081b985487885296cf8c9bbb5872600',
     *     signTransaction: [Function: signTransaction],
     *     sign: [Function: sign],
     *     encrypt: [Function: encrypt]
     *   },
     *   {
     *     address: '0x766BF755246d924B1d017Fdb5390f38a60166691',
     *     privateKey: '0x756530f13c0eb636ebdda655335f5dea9921e3362e2e588b0ad59e556f7751f0',
     *     signTransaction: [Function: signTransaction],
     *     sign: [Function: sign],
     *     encrypt: [Function: encrypt]
     *   },
     *   _accountProvider: {
     *     create: [Function: create],
     *     privateKeyToAccount: [Function: privateKeyToAccount],
     *     decrypt: [Function: decrypt]
     *   },
     *   _addressMap: Map(2) {
     *     '0xde38310a42b751ae57d30cfff4a0a3c52a442fce' => 0,
     *     '0x766bf755246d924b1d017fdb5390f38a60166691' => 1
     *   },
     *   _defaultKeyName: 'web3js_wallet'
     * ]
     *
     * ```
     */ create(numberOfAccounts) {
        for(let i = 0; i < numberOfAccounts; i += 1){
            this.add(this._accountProvider.create());
        }
        return this;
    }
    /**
     * Adds an account using a private key or account object to the wallet.
     *
     * @param account - A private key or account object
     * @returns The wallet
     *
     * ```ts
     * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
     * > Wallet(1) [
     *   {
     *     address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
     *     privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
     *     signTransaction: [Function: signTransaction],
     *     sign: [Function: sign],
     *     encrypt: [Function: encrypt]
     *   },
     *   _accountProvider: {
     *     create: [Function: create],
     *     privateKeyToAccount: [Function: privateKeyToAccount],
     *     decrypt: [Function: decrypt]
     *   },
     *   _addressMap: Map(1) { '0x85d70633b90e03e0276b98880286d0d055685ed7' => 0 },
     *   _defaultKeyName: 'web3js_wallet'
     * ]
     * ```
     */ add(account) {
        var _a;
        if (typeof account === 'string') {
            return this.add(this._accountProvider.privateKeyToAccount(account));
        }
        let index = this.length;
        const existAccount = this.get(account.address);
        if (existAccount) {
            console.warn(`Account ${account.address.toLowerCase()} already exists.`);
            index = (_a = this._addressMap.get(account.address.toLowerCase())) !== null && _a !== void 0 ? _a : index;
        }
        this._addressMap.set(account.address.toLowerCase(), index);
        this[index] = account;
        return this;
    }
    /**
     * Get the account of the wallet with either the index or public address.
     *
     * @param addressOrIndex - A string of the address or number index within the wallet.
     * @returns The account object or undefined if the account doesn't exist
     */ get(addressOrIndex) {
        if (typeof addressOrIndex === 'string') {
            const index = this._addressMap.get(addressOrIndex.toLowerCase());
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(index)) {
                return this[index];
            }
            return undefined;
        }
        return this[addressOrIndex];
    }
    /**
     * Removes an account from the wallet.
     *
     * @param addressOrIndex - The account address, or index in the wallet.
     * @returns true if the wallet was removed. false if it couldn't be found.
     * ```ts
     * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
     *
     * web3.eth.accounts.wallet.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
     * > true
     * web3.eth.accounts.wallet
     * > Wallet(0) [
     * _accountProvider: {
     *   create: [Function: create],
     *   privateKeyToAccount: [Function: privateKeyToAccount],
     *   decrypt: [Function: decrypt]
     * },
     * _addressMap: Map(0) {},
     * _defaultKeyName: 'web3js_wallet'
     * ]
     * ```
     */ remove(addressOrIndex) {
        if (typeof addressOrIndex === 'string') {
            const index = this._addressMap.get(addressOrIndex.toLowerCase());
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(index)) {
                return false;
            }
            this._addressMap.delete(addressOrIndex.toLowerCase());
            this.splice(index, 1);
            return true;
        }
        if (this[addressOrIndex]) {
            this.splice(addressOrIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Securely empties the wallet and removes all its accounts.
     * Use this with *caution as it will remove all accounts stored in local wallet.
     *
     * @returns The wallet object
     * ```ts
     *
     * web3.eth.accounts.wallet.clear();
     * > Wallet(0) [
     * _accountProvider: {
     *   create: [Function: create],
     *   privateKeyToAccount: [Function: privateKeyToAccount],
     *   decrypt: [Function: decrypt]
     * },
     * _addressMap: Map(0) {},
     * _defaultKeyName: 'web3js_wallet'
     * ]
     * ```
     */ clear() {
        this._addressMap.clear();
        // Setting length clears the Array in JS.
        this.length = 0;
        return this;
    }
    /**
     * Encrypts all wallet accounts to an array of encrypted keystore v3 objects.
     *
     * @param password - The password which will be used for encryption
     * @param options - encryption options
     * @returns An array of the encrypted keystore v3.
     *
     * ```ts
     * web3.eth.accounts.wallet.create(1)
     * web3.eth.accounts.wallet.encrypt("abc").then(console.log);
     * > [
     * '{"version":3,"id":"fa46e213-a7c3-4844-b903-dd14d39cc7db",
     * "address":"fa3e41a401609103c241431cbdee8623ae2a321a","crypto":
     * {"ciphertext":"8d179a911d6146ad2924e86bf493ed89b8ff3596ffec0816e761c542016ab13c",
     * "cipherparams":{"iv":"acc888c6cf4a19b86846cef0185a7164"},"cipher":"aes-128-ctr",
     * "kdf":"scrypt","kdfparams":{"n":8192,"r":8,"p":1,"dklen":32,"salt":"6a743c9b367d15f4758e4f3f3378ff0fd443708d1c64854e07588ea5331823ae"},
     * "mac":"410544c8307e3691fda305eb3722d82c3431f212a87daa119a21587d96698b57"}}'
     * ]
     * ```
     */ encrypt(password, options) {
        return __awaiter(this, void 0, void 0, function*() {
            return Promise.all(this.map((account)=>__awaiter(this, void 0, void 0, function*() {
                    return account.encrypt(password, options);
                })));
        });
    }
    /**
     * Decrypts keystore v3 objects.
     *
     * @param encryptedWallets - An array of encrypted keystore v3 objects to decrypt
     * @param password - The password to encrypt with
     * @param options - decrypt options for the wallets
     * @returns The decrypted wallet object
     *
     * ```ts
     * web3.eth.accounts.wallet.decrypt([
     * { version: 3,
     * id: '83191a81-aaca-451f-b63d-0c5f3b849289',
     * address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
     * crypto:
     * { ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
     *   cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
     *   cipher: 'aes-128-ctr',
     *   kdf: 'scrypt',
     *   kdfparams:
     *    { dklen: 32,
     *      salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
     *      n: 262144,
     *      r: 8,
     *      p: 1 },
     *   mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' } },
     * { version: 3,
     * id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
     * address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
     * crypto:
     * { ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
     *   cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
     *   cipher: 'aes-128-ctr',
     *   kdf: 'scrypt',
     *   kdfparams:
     *    { dklen: 32,
     *      salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
     *      n: 262144,
     *      r: 8,
     *      p: 1 },
     *   mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0' } }
     * ], 'test').then(console.log)
     * > Wallet {
     *   _accountProvider: {
     *     create: [Function: create],
     *     privateKeyToAccount: [Function: privateKeyToAccount],
     *     decrypt: [Function: decrypt]
     *   },
     *   _defaultKeyName: 'web3js_wallet',
     *   _accounts: {
     *     '0x85d70633b90e03e0276b98880286d0d055685ed7': {
     *       address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
     *       privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
     *       signTransaction: [Function: signTransaction],
     *       sign: [Function: sign],
     *       encrypt: [Function: encrypt]
     *     },
     *     '0x06f702337909c06c82b09b7a22f0a2f0855d1f68': {
     *       address: '0x06F702337909C06C82B09B7A22F0a2f0855d1F68',
     *       privateKey: '87a51da18900da7398b3bab03996833138f269f8f66dd1237b98df6b9ce14573',
     *       signTransaction: [Function: signTransaction],
     *       sign: [Function: sign],
     *       encrypt: [Function: encrypt]
     *     },
     *     '0xb5d89661b59a9af0b34f58d19138baa2de48baaf': {
     *       address: '0xB5d89661B59a9aF0b34f58D19138bAa2de48BAaf',
     *       privateKey: '7ee61c5282979aae9dd795bb6a54e8bdc2bfe009acb64eb9a67322eec3b3da6e',
     *       signTransaction: [Function: signTransaction],
     *       sign: [Function: sign],
     *       encrypt: [Function: encrypt]
     *     }
     *   }
     * }
     * ```
     */ decrypt(encryptedWallets, password, options) {
        return __awaiter(this, void 0, void 0, function*() {
            const results = yield Promise.all(encryptedWallets.map((wallet)=>__awaiter(this, void 0, void 0, function*() {
                    return this._accountProvider.decrypt(wallet, password, options);
                })));
            for (const res of results){
                this.add(res);
            }
            return this;
        });
    }
    /**
     * Stores the wallet encrypted and as string in local storage.
     * **__NOTE:__** Browser only
     *
     * @param password - The password to encrypt the wallet
     * @param keyName - (optional) The key used for the local storage position, defaults to `"web3js_wallet"`.
     * @returns Will return boolean value true if saved properly
     * ```ts
     * web3.eth.accounts.wallet.save('test#!$');
     * >true
     * ```
     */ save(password, keyName) {
        return __awaiter(this, void 0, void 0, function*() {
            const storage = Wallet.getStorage();
            if (!storage) {
                throw new Error('Local storage not available.');
            }
            storage.setItem(keyName !== null && keyName !== void 0 ? keyName : this._defaultKeyName, JSON.stringify((yield this.encrypt(password))));
            return true;
        });
    }
    /**
     * Loads a wallet from local storage and decrypts it.
     * **__NOTE:__** Browser only
     *
     * @param password - The password to decrypt the wallet.
     * @param keyName - (optional)The key used for local storage position, defaults to `web3js_wallet"`
     * @returns Returns the wallet object
     *
     * ```ts
     * web3.eth.accounts.wallet.save('test#!$');
     * > true
     * web3.eth.accounts.wallet.load('test#!$');
     * { defaultKeyName: "web3js_wallet",
     *   length: 0,
     *   _accounts: Accounts {_requestManager: RequestManager, givenProvider: Proxy, providers: {…}, _provider: WebsocketProvider, …},
     *   [[Prototype]]: Object
     * }
     * ```
     */ load(password, keyName) {
        return __awaiter(this, void 0, void 0, function*() {
            const storage = Wallet.getStorage();
            if (!storage) {
                throw new Error('Local storage not available.');
            }
            const keystore = storage.getItem(keyName !== null && keyName !== void 0 ? keyName : this._defaultKeyName);
            if (keystore) {
                yield this.decrypt(JSON.parse(keystore) || [], password);
            }
            return this;
        });
    }
} //# sourceMappingURL=wallet.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MAX_INTEGER": (()=>MAX_INTEGER),
    "MAX_UINT64": (()=>MAX_UINT64),
    "SECP256K1_ORDER": (()=>SECP256K1_ORDER),
    "SECP256K1_ORDER_DIV_2": (()=>SECP256K1_ORDER_DIV_2),
    "secp256k1": (()=>secp256k1)
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
*/ // eslint-disable-next-line import/extensions
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/secp256k1.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/secp256k1.js [app-client] (ecmascript)");
var _a;
;
const secp256k1 = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.secp256k1) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
const MAX_UINT64 = BigInt('0xffffffffffffffff');
const MAX_INTEGER = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
const SECP256K1_ORDER = secp256k1.CURVE.n;
const SECP256K1_ORDER_DIV_2 = SECP256K1_ORDER / BigInt(2); //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/schemas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "keyStoreSchema": (()=>keyStoreSchema)
});
const keyStoreSchema = {
    type: 'object',
    required: [
        'crypto',
        'id',
        'version',
        'address'
    ],
    properties: {
        crypto: {
            type: 'object',
            required: [
                'cipher',
                'ciphertext',
                'cipherparams',
                'kdf',
                'kdfparams',
                'mac'
            ],
            properties: {
                cipher: {
                    type: 'string'
                },
                ciphertext: {
                    type: 'string'
                },
                cipherparams: {
                    type: 'object'
                },
                kdf: {
                    type: 'string'
                },
                kdfparams: {
                    type: 'object'
                },
                salt: {
                    type: 'string'
                },
                mac: {
                    type: 'string'
                }
            }
        },
        id: {
            type: 'string'
        },
        version: {
            type: 'number'
        },
        address: {
            type: 'string'
        }
    }
}; //# sourceMappingURL=schemas.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/enums.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "Chain": (()=>Chain),
    "ConsensusAlgorithm": (()=>ConsensusAlgorithm),
    "ConsensusType": (()=>ConsensusType),
    "CustomChain": (()=>CustomChain),
    "Hardfork": (()=>Hardfork)
});
var Chain;
(function(Chain) {
    Chain[Chain["Mainnet"] = 1] = "Mainnet";
    Chain[Chain["Goerli"] = 5] = "Goerli";
    Chain[Chain["Sepolia"] = 11155111] = "Sepolia";
})(Chain || (Chain = {}));
var Hardfork;
(function(Hardfork) {
    Hardfork["Chainstart"] = "chainstart";
    Hardfork["Homestead"] = "homestead";
    Hardfork["Dao"] = "dao";
    Hardfork["TangerineWhistle"] = "tangerineWhistle";
    Hardfork["SpuriousDragon"] = "spuriousDragon";
    Hardfork["Byzantium"] = "byzantium";
    Hardfork["Constantinople"] = "constantinople";
    Hardfork["Petersburg"] = "petersburg";
    Hardfork["Istanbul"] = "istanbul";
    Hardfork["MuirGlacier"] = "muirGlacier";
    Hardfork["Berlin"] = "berlin";
    Hardfork["London"] = "london";
    Hardfork["ArrowGlacier"] = "arrowGlacier";
    Hardfork["GrayGlacier"] = "grayGlacier";
    Hardfork["MergeForkIdTransition"] = "mergeForkIdTransition";
    Hardfork["Merge"] = "merge";
    Hardfork["Shanghai"] = "shanghai";
    Hardfork["ShardingForkDev"] = "shardingFork";
})(Hardfork || (Hardfork = {}));
var ConsensusType;
(function(ConsensusType) {
    ConsensusType["ProofOfStake"] = "pos";
    ConsensusType["ProofOfWork"] = "pow";
    ConsensusType["ProofOfAuthority"] = "poa";
})(ConsensusType || (ConsensusType = {}));
var ConsensusAlgorithm;
(function(ConsensusAlgorithm) {
    ConsensusAlgorithm["Ethash"] = "ethash";
    ConsensusAlgorithm["Clique"] = "clique";
    ConsensusAlgorithm["Casper"] = "casper";
})(ConsensusAlgorithm || (ConsensusAlgorithm = {}));
var CustomChain;
(function(CustomChain) {
    /**
     * Polygon (Matic) Mainnet
     *
     * - [Documentation](https://docs.matic.network/docs/develop/network-details/network)
     */ CustomChain["PolygonMainnet"] = "polygon-mainnet";
    /**
     * Polygon (Matic) Mumbai Testnet
     *
     * - [Documentation](https://docs.matic.network/docs/develop/network-details/network)
     */ CustomChain["PolygonMumbai"] = "polygon-mumbai";
    /**
     * Arbitrum Rinkeby Testnet
     *
     * - [Documentation](https://developer.offchainlabs.com/docs/public_testnet)
     */ CustomChain["ArbitrumRinkebyTestnet"] = "arbitrum-rinkeby-testnet";
    /**
     * Arbitrum One - mainnet for Arbitrum roll-up
     *
     * - [Documentation](https://developer.offchainlabs.com/public-chains)
     */ CustomChain["ArbitrumOne"] = "arbitrum-one";
    /**
     * xDai EVM sidechain with a native stable token
     *
     * - [Documentation](https://www.xdaichain.com/)
     */ CustomChain["xDaiChain"] = "x-dai-chain";
    /**
     * Optimistic Kovan - testnet for Optimism roll-up
     *
     * - [Documentation](https://community.optimism.io/docs/developers/tutorials.html)
     */ CustomChain["OptimisticKovan"] = "optimistic-kovan";
    /**
     * Optimistic Ethereum - mainnet for Optimism roll-up
     *
     * - [Documentation](https://community.optimism.io/docs/developers/tutorials.html)
     */ CustomChain["OptimisticEthereum"] = "optimistic-ethereum";
})(CustomChain || (CustomChain = {})); //# sourceMappingURL=enums.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Type output options
 */ __turbopack_esm__({
    "TypeOutput": (()=>TypeOutput)
});
var TypeOutput;
(function(TypeOutput) {
    TypeOutput[TypeOutput["Number"] = 0] = "Number";
    TypeOutput[TypeOutput["BigInt"] = 1] = "BigInt";
    TypeOutput[TypeOutput["Uint8Array"] = 2] = "Uint8Array";
    TypeOutput[TypeOutput["PrefixedHexString"] = 3] = "PrefixedHexString";
})(TypeOutput || (TypeOutput = {})); //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "assertIsUint8Array": (()=>assertIsUint8Array),
    "bigIntToHex": (()=>bigIntToHex),
    "bigIntToUint8Array": (()=>bigIntToUint8Array),
    "bigIntToUnpaddedUint8Array": (()=>bigIntToUnpaddedUint8Array),
    "ecrecover": (()=>ecrecover),
    "intToUint8Array": (()=>intToUint8Array),
    "padToEven": (()=>padToEven),
    "parseGethGenesis": (()=>parseGethGenesis),
    "setLengthLeft": (()=>setLengthLeft),
    "stripHexPrefix": (()=>stripHexPrefix),
    "stripZeros": (()=>stripZeros),
    "toType": (()=>toType),
    "toUint8Array": (()=>toUint8Array),
    "uint8ArrayToBigInt": (()=>uint8ArrayToBigInt),
    "unpadUint8Array": (()=>unpadUint8Array),
    "zeros": (()=>zeros)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
;
;
;
;
;
const stripHexPrefix = (str)=>{
    if (typeof str !== 'string') throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexPrefixed"])(str) ? str.slice(2) : str;
};
/**
 * Transforms Geth formatted nonce (i.e. hex string) to 8 byte 0x-prefixed string used internally
 * @param nonce string parsed from the Geth genesis file
 * @returns nonce as a 0x-prefixed 8 byte string
 */ function formatNonce(nonce) {
    if (!nonce || nonce === '0x0') {
        return '0x0000000000000000';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexPrefixed"])(nonce)) {
        return `0x${stripHexPrefix(nonce).padStart(16, '0')}`;
    }
    return `0x${nonce.padStart(16, '0')}`;
}
/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */ const intToHex = function(i) {
    if (!Number.isSafeInteger(i) || i < 0) {
        throw new Error(`Received an invalid integer type: ${i}`);
    }
    return `0x${i.toString(16)}`;
};
/**
 * Converts Geth genesis parameters to an EthereumJS compatible `CommonOpts` object
 * @param json object representing the Geth genesis file
 * @param optional mergeForkIdPostMerge which clarifies the placement of MergeForkIdTransition
 * hardfork, which by default is post merge as with the merged eth networks but could also come
 * before merge like in kiln genesis
 * @returns genesis parameters in a `CommonOpts` compliant object
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseGethParams(json, mergeForkIdPostMerge = true) {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, config, difficulty, mixHash, gasLimit, coinbase, baseFeePerGas } = json;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let { extraData, timestamp, nonce } = json;
    const genesisTimestamp = Number(timestamp);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { chainId } = config;
    // geth is not strictly putting empty fields with a 0x prefix
    if (extraData === '') {
        extraData = '0x';
    }
    // geth may use number for timestamp
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexPrefixed"])(timestamp)) {
        // eslint-disable-next-line radix
        timestamp = intToHex(parseInt(timestamp));
    }
    // geth may not give us a nonce strictly formatted to an 8 byte hex string
    if (nonce.length !== 18) {
        nonce = formatNonce(nonce);
    }
    // EIP155 and EIP158 are both part of Spurious Dragon hardfork and must occur at the same time
    // but have different configuration parameters in geth genesis parameters
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (config.eip155Block !== config.eip158Block) {
        throw new Error('EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork');
    }
    const params = {
        name,
        chainId,
        networkId: chainId,
        genesis: {
            timestamp,
            // eslint-disable-next-line radix
            gasLimit: parseInt(gasLimit),
            // eslint-disable-next-line radix
            difficulty: parseInt(difficulty),
            nonce,
            extraData,
            mixHash,
            coinbase,
            baseFeePerGas
        },
        hardfork: undefined,
        hardforks: [],
        bootstrapNodes: [],
        consensus: // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        config.clique !== undefined ? {
            type: 'poa',
            algorithm: 'clique',
            clique: {
                // The recent geth genesis seems to be using blockperiodseconds
                // and epochlength for clique specification
                // see: https://hackmd.io/PqZgMpnkSWCWv5joJoFymQ
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                period: (_a = config.clique.period) !== null && _a !== void 0 ? _a : config.clique.blockperiodseconds,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-assignment
                epoch: (_b = config.clique.epoch) !== null && _b !== void 0 ? _b : config.clique.epochlength
            }
        } : {
            type: 'pow',
            algorithm: 'ethash',
            ethash: {}
        }
    };
    const forkMap = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Homestead]: {
            name: 'homesteadBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Dao]: {
            name: 'daoForkBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].TangerineWhistle]: {
            name: 'eip150Block'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].SpuriousDragon]: {
            name: 'eip155Block'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Byzantium]: {
            name: 'byzantiumBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Constantinople]: {
            name: 'constantinopleBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Petersburg]: {
            name: 'petersburgBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Istanbul]: {
            name: 'istanbulBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].MuirGlacier]: {
            name: 'muirGlacierBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Berlin]: {
            name: 'berlinBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].London]: {
            name: 'londonBlock'
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].MergeForkIdTransition]: {
            name: 'mergeForkBlock',
            postMerge: mergeForkIdPostMerge
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Shanghai]: {
            name: 'shanghaiTime',
            postMerge: true,
            isTimestamp: true
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].ShardingForkDev]: {
            name: 'shardingForkTime',
            postMerge: true,
            isTimestamp: true
        }
    };
    // forkMapRev is the map from config field name to Hardfork
    const forkMapRev = Object.keys(forkMap).reduce((acc, elem)=>{
        acc[forkMap[elem].name] = elem;
        return acc;
    }, {});
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const configHardforkNames = Object.keys(config).filter(// eslint-disable-next-line no-null/no-null, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/prefer-optional-chain
    (key)=>forkMapRev[key] !== undefined && config[key] !== undefined && config[key] !== null);
    params.hardforks = configHardforkNames.map((nameBlock)=>({
            name: forkMapRev[nameBlock],
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            block: // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            forkMap[forkMapRev[nameBlock]].isTimestamp === true || // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof config[nameBlock] !== 'number' ? null : config[nameBlock],
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            timestamp: // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            forkMap[forkMapRev[nameBlock]].isTimestamp === true && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof config[nameBlock] === 'number' ? config[nameBlock] : undefined
        }))// eslint-disable-next-line no-null/no-null
    .filter((fork)=>fork.block !== null || fork.timestamp !== undefined);
    params.hardforks.sort((a, b)=>{
        var _a, _b;
        return ((_a = a.block) !== null && _a !== void 0 ? _a : Infinity) - ((_b = b.block) !== null && _b !== void 0 ? _b : Infinity);
    });
    params.hardforks.sort((a, b)=>{
        var _a, _b;
        return ((_a = a.timestamp) !== null && _a !== void 0 ? _a : genesisTimestamp) - ((_b = b.timestamp) !== null && _b !== void 0 ? _b : genesisTimestamp);
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (config.terminalTotalDifficulty !== undefined) {
        // Following points need to be considered for placement of merge hf
        // - Merge hardfork can't be placed at genesis
        // - Place merge hf before any hardforks that require CL participation for e.g. withdrawals
        // - Merge hardfork has to be placed just after genesis if any of the genesis hardforks make CL
        //   necessary for e.g. withdrawals
        const mergeConfig = {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            ttd: config.terminalTotalDifficulty,
            // eslint-disable-next-line no-null/no-null
            block: null
        };
        // Merge hardfork has to be placed before first hardfork that is dependent on merge
        const postMergeIndex = params.hardforks.findIndex(// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (hf)=>{
            var _a;
            return ((_a = forkMap[hf.name]) === null || _a === void 0 ? void 0 : _a.postMerge) === true;
        });
        if (postMergeIndex !== -1) {
            params.hardforks.splice(postMergeIndex, 0, mergeConfig);
        } else {
            params.hardforks.push(mergeConfig);
        }
    }
    const latestHardfork = params.hardforks.length > 0 ? params.hardforks.slice(-1)[0] : undefined;
    params.hardfork = latestHardfork === null || latestHardfork === void 0 ? void 0 : latestHardfork.name;
    params.hardforks.unshift({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Chainstart,
        block: 0
    });
    return params;
}
function parseGethGenesis(json, name, mergeForkIdPostMerge) {
    try {
        if ([
            'config',
            'difficulty',
            'gasLimit',
            'alloc'
        ].some((field)=>!(field in json))) {
            throw new Error('Invalid format, expected geth genesis fields missing');
        }
        if (name !== undefined) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-param-reassign
            json.name = name;
        }
        return parseGethParams(json, mergeForkIdPostMerge);
    } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
        throw new Error(`Error parsing parameters file: ${e.message}`);
    }
}
function padToEven(value) {
    let a = value;
    if (typeof a !== 'string') {
        throw new Error(`[padToEven] value must be type 'string', received ${typeof a}`);
    }
    if (a.length % 2) a = `0${a}`;
    return a;
}
const intToUint8Array = function(i) {
    const hex = intToHex(i);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(`0x${padToEven(hex.slice(2))}`);
};
const toUint8Array = function(v) {
    var _a;
    // eslint-disable-next-line no-null/no-null
    if (v === null || v === undefined) {
        return new Uint8Array();
    }
    if (v instanceof Uint8Array) {
        return v;
    }
    if (((_a = v === null || v === void 0 ? void 0 : v.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Uint8Array') {
        return Uint8Array.from(v);
    }
    if (Array.isArray(v)) {
        return Uint8Array.from(v);
    }
    if (typeof v === 'string') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(v)) {
            throw new Error(`Cannot convert string to Uint8Array. only supports 0x-prefixed hex strings and this string was given: ${v}`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(padToEven(stripHexPrefix(v)));
    }
    if (typeof v === 'number') {
        return toUint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(v));
    }
    if (typeof v === 'bigint') {
        if (v < BigInt(0)) {
            throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${v}`);
        }
        let n = v.toString(16);
        if (n.length % 2) n = `0${n}`;
        return toUint8Array(`0x${n}`);
    }
    if (v.toArray) {
        // converts a BN to a Uint8Array
        return Uint8Array.from(v.toArray());
    }
    throw new Error('invalid type');
};
function uint8ArrayToBigInt(buf) {
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(buf);
    if (hex === '0x') {
        return BigInt(0);
    }
    return BigInt(hex);
}
function bigIntToUint8Array(num) {
    return toUint8Array(`0x${num.toString(16)}`);
}
const zeros = function(bytes) {
    return new Uint8Array(bytes).fill(0);
};
/**
 * Pads a `Uint8Array` with zeros till it has `length` bytes.
 * Truncates the beginning or end of input if its length exceeds `length`.
 * @param msg the value to pad (Uint8Array)
 * @param length the number of bytes the output should be
 * @param right whether to start padding form the left or right
 * @return (Uint8Array)
 */ const setLength = function(msg, length, right) {
    const buf = zeros(length);
    if (right) {
        if (msg.length < length) {
            buf.set(msg);
            return buf;
        }
        return msg.subarray(0, length);
    }
    if (msg.length < length) {
        buf.set(msg, length - msg.length);
        return buf;
    }
    return msg.subarray(-length);
};
function assertIsUint8Array(input) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(input)) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const msg = `This method only supports Uint8Array but input was: ${input}`;
        throw new Error(msg);
    }
}
const setLengthLeft = function(msg, length) {
    assertIsUint8Array(msg);
    return setLength(msg, length, false);
};
function stripZeros(a) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    let first = a[0];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    while(a.length > 0 && first.toString() === '0'){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, prefer-destructuring, @typescript-eslint/no-unsafe-call, no-param-reassign
        a = a.slice(1);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, prefer-destructuring, @typescript-eslint/no-unsafe-member-access
        first = a[0];
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return a;
}
const unpadUint8Array = function(a) {
    assertIsUint8Array(a);
    return stripZeros(a);
};
const bigIntToHex = (num)=>`0x${num.toString(16)}`;
function bigIntToUnpaddedUint8Array(value) {
    return unpadUint8Array(bigIntToUint8Array(value));
}
function calculateSigRecovery(v, chainId) {
    if (v === BigInt(0) || v === BigInt(1)) return v;
    if (chainId === undefined) {
        return v - BigInt(27);
    }
    return v - (chainId * BigInt(2) + BigInt(35));
}
function isValidSigRecovery(recovery) {
    return recovery === BigInt(0) || recovery === BigInt(1);
}
const ecrecover = function(msgHash, v, r, s, chainId) {
    const recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    const senderPubKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature(uint8ArrayToBigInt(r), uint8ArrayToBigInt(s)).addRecoveryBit(Number(recovery)).recoverPublicKey(msgHash).toRawBytes(false);
    return senderPubKey.slice(1);
};
function toType(input, outputType) {
    // eslint-disable-next-line no-null/no-null
    if (input === null) {
        // eslint-disable-next-line no-null/no-null
        return null;
    }
    if (input === undefined) {
        return undefined;
    }
    if (typeof input === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(input)) {
        throw new Error(`A string must be provided with a 0x-prefix, given: ${input}`);
    } else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
        throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }
    const output = toUint8Array(input);
    switch(outputType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Uint8Array:
            return output;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt:
            return uint8ArrayToBigInt(output);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Number:
            {
                const bigInt = uint8ArrayToBigInt(output);
                if (bigInt > BigInt(Number.MAX_SAFE_INTEGER)) {
                    throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
                }
                return Number(bigInt);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].PrefixedHexString:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(output);
        default:
            throw new Error('unknown outputType');
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/chains/goerli.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'goerli',
    chainId: 5,
    networkId: 5,
    defaultHardfork: 'merge',
    consensus: {
        type: 'poa',
        algorithm: 'clique',
        clique: {
            period: 15,
            epoch: 30000
        }
    },
    comment: 'Cross-client PoA test network',
    url: 'https://github.com/goerli/testnet',
    genesis: {
        timestamp: '0x5c51a607',
        gasLimit: 10485760,
        difficulty: 1,
        nonce: '0x0000000000000000',
        extraData: '0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    },
    hardforks: [
        {
            name: 'chainstart',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'homestead',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'tangerineWhistle',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'spuriousDragon',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'byzantium',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'constantinople',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'petersburg',
            block: 0,
            forkHash: '0xa3f5ab08'
        },
        {
            name: 'istanbul',
            block: 1561651,
            forkHash: '0xc25efa5c'
        },
        {
            name: 'berlin',
            block: 4460644,
            forkHash: '0x757a1c47'
        },
        {
            name: 'london',
            block: 5062605,
            forkHash: '0xb8c6299d'
        },
        {
            '//_comment': 'The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818',
            name: 'merge',
            ttd: '10790000',
            block: 7382819,
            forkHash: '0xb8c6299d'
        },
        {
            name: 'mergeForkIdTransition',
            block: null,
            forkHash: null
        },
        {
            name: 'shanghai',
            block: null,
            forkHash: null
        }
    ],
    bootstrapNodes: [],
    dnsNetworks: [
        'enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net'
    ]
};
 //# sourceMappingURL=goerli.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/chains/mainnet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'mainnet',
    chainId: 1,
    networkId: 1,
    defaultHardfork: 'merge',
    consensus: {
        type: 'pow',
        algorithm: 'ethash',
        ethash: {}
    },
    comment: 'The Ethereum main chain',
    url: 'https://ethstats.net/',
    genesis: {
        gasLimit: 5000,
        difficulty: 17179869184,
        nonce: '0x0000000000000042',
        extraData: '0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa'
    },
    hardforks: [
        {
            name: 'chainstart',
            block: 0,
            forkHash: '0xfc64ec04'
        },
        {
            name: 'homestead',
            block: 1150000,
            forkHash: '0x97c2c34c'
        },
        {
            name: 'dao',
            block: 1920000,
            forkHash: '0x91d1f948'
        },
        {
            name: 'tangerineWhistle',
            block: 2463000,
            forkHash: '0x7a64da13'
        },
        {
            name: 'spuriousDragon',
            block: 2675000,
            forkHash: '0x3edd5b10'
        },
        {
            name: 'byzantium',
            block: 4370000,
            forkHash: '0xa00bc324'
        },
        {
            name: 'constantinople',
            block: 7280000,
            forkHash: '0x668db0af'
        },
        {
            name: 'petersburg',
            block: 7280000,
            forkHash: '0x668db0af'
        },
        {
            name: 'istanbul',
            block: 9069000,
            forkHash: '0x879d6e30'
        },
        {
            name: 'muirGlacier',
            block: 9200000,
            forkHash: '0xe029e991'
        },
        {
            name: 'berlin',
            block: 12244000,
            forkHash: '0x0eb440f6'
        },
        {
            name: 'london',
            block: 12965000,
            forkHash: '0xb715077d'
        },
        {
            name: 'arrowGlacier',
            block: 13773000,
            forkHash: '0x20c327fc'
        },
        {
            name: 'grayGlacier',
            block: 15050000,
            forkHash: '0xf0afd0e3'
        },
        {
            '//_comment': 'The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393',
            name: 'merge',
            ttd: '58750000000000000000000',
            block: 15537394,
            forkHash: '0xf0afd0e3'
        },
        {
            name: 'mergeForkIdTransition',
            block: null,
            forkHash: null
        },
        {
            name: 'shanghai',
            block: null,
            forkHash: null
        }
    ],
    bootstrapNodes: [],
    dnsNetworks: [
        'enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net'
    ]
};
 //# sourceMappingURL=mainnet.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/chains/sepolia.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'sepolia',
    chainId: 11155111,
    networkId: 11155111,
    defaultHardfork: 'merge',
    consensus: {
        type: 'pow',
        algorithm: 'ethash',
        ethash: {}
    },
    comment: 'PoW test network to replace Ropsten',
    url: 'https://github.com/ethereum/go-ethereum/pull/23730',
    genesis: {
        timestamp: '0x6159af19',
        gasLimit: 30000000,
        difficulty: 131072,
        nonce: '0x0000000000000000',
        extraData: '0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521'
    },
    hardforks: [
        {
            name: 'chainstart',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'homestead',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'tangerineWhistle',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'spuriousDragon',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'byzantium',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'constantinople',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'petersburg',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'istanbul',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'muirGlacier',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'berlin',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'london',
            block: 0,
            forkHash: '0xfe3366e7'
        },
        {
            '//_comment': 'The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408',
            name: 'merge',
            ttd: '17000000000000000',
            block: 1450409,
            forkHash: '0xfe3366e7'
        },
        {
            name: 'mergeForkIdTransition',
            block: 1735371,
            forkHash: '0xb96cbd13'
        },
        {
            name: 'shanghai',
            block: null,
            timestamp: '1677557088',
            forkHash: '0xf7f9bc08'
        }
    ],
    bootstrapNodes: [],
    dnsNetworks: [
        'enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net'
    ]
};
 //# sourceMappingURL=sepolia.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/1153.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-1153',
    number: 1153,
    comment: 'Transient Storage',
    url: 'https://eips.ethereum.org/EIPS/eip-1153',
    status: 'Review',
    minimumHardfork: 'chainstart',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {
        tstore: {
            v: 100,
            d: 'Base fee of the TSTORE opcode'
        },
        tload: {
            v: 100,
            d: 'Base fee of the TLOAD opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=1153.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/1559.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-1559',
    number: 1559,
    comment: 'Fee market change for ETH 1.0 chain',
    url: 'https://eips.ethereum.org/EIPS/eip-1559',
    status: 'Final',
    minimumHardfork: 'berlin',
    requiredEIPs: [
        2930
    ],
    gasConfig: {
        baseFeeMaxChangeDenominator: {
            v: 8,
            d: 'Maximum base fee change denominator'
        },
        elasticityMultiplier: {
            v: 2,
            d: 'Maximum block gas target elasticity'
        },
        initialBaseFee: {
            v: 1000000000,
            d: 'Initial base fee on first EIP1559 block'
        }
    },
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=1559.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2315.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-2315',
    number: 2315,
    comment: 'Simple subroutines for the EVM',
    url: 'https://eips.ethereum.org/EIPS/eip-2315',
    status: 'Draft',
    minimumHardfork: 'istanbul',
    gasConfig: {},
    gasPrices: {
        beginsub: {
            v: 2,
            d: 'Base fee of the BEGINSUB opcode'
        },
        returnsub: {
            v: 5,
            d: 'Base fee of the RETURNSUB opcode'
        },
        jumpsub: {
            v: 10,
            d: 'Base fee of the JUMPSUB opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=2315.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2537.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-2537',
    number: 2537,
    comment: 'BLS12-381 precompiles',
    url: 'https://eips.ethereum.org/EIPS/eip-2537',
    status: 'Draft',
    minimumHardfork: 'chainstart',
    gasConfig: {},
    gasPrices: {
        Bls12381G1AddGas: {
            v: 600,
            d: 'Gas cost of a single BLS12-381 G1 addition precompile-call'
        },
        Bls12381G1MulGas: {
            v: 12000,
            d: 'Gas cost of a single BLS12-381 G1 multiplication precompile-call'
        },
        Bls12381G2AddGas: {
            v: 4500,
            d: 'Gas cost of a single BLS12-381 G2 addition precompile-call'
        },
        Bls12381G2MulGas: {
            v: 55000,
            d: 'Gas cost of a single BLS12-381 G2 multiplication precompile-call'
        },
        Bls12381PairingBaseGas: {
            v: 115000,
            d: 'Base gas cost of BLS12-381 pairing check'
        },
        Bls12381PairingPerPairGas: {
            v: 23000,
            d: 'Per-pair gas cost of BLS12-381 pairing check'
        },
        Bls12381MapG1Gas: {
            v: 5500,
            d: 'Gas cost of BLS12-381 map field element to G1'
        },
        Bls12381MapG2Gas: {
            v: 110000,
            d: 'Gas cost of BLS12-381 map field element to G2'
        },
        Bls12381MultiExpGasDiscount: {
            v: [
                [
                    1,
                    1200
                ],
                [
                    2,
                    888
                ],
                [
                    3,
                    764
                ],
                [
                    4,
                    641
                ],
                [
                    5,
                    594
                ],
                [
                    6,
                    547
                ],
                [
                    7,
                    500
                ],
                [
                    8,
                    453
                ],
                [
                    9,
                    438
                ],
                [
                    10,
                    423
                ],
                [
                    11,
                    408
                ],
                [
                    12,
                    394
                ],
                [
                    13,
                    379
                ],
                [
                    14,
                    364
                ],
                [
                    15,
                    349
                ],
                [
                    16,
                    334
                ],
                [
                    17,
                    330
                ],
                [
                    18,
                    326
                ],
                [
                    19,
                    322
                ],
                [
                    20,
                    318
                ],
                [
                    21,
                    314
                ],
                [
                    22,
                    310
                ],
                [
                    23,
                    306
                ],
                [
                    24,
                    302
                ],
                [
                    25,
                    298
                ],
                [
                    26,
                    294
                ],
                [
                    27,
                    289
                ],
                [
                    28,
                    285
                ],
                [
                    29,
                    281
                ],
                [
                    30,
                    277
                ],
                [
                    31,
                    273
                ],
                [
                    32,
                    269
                ],
                [
                    33,
                    268
                ],
                [
                    34,
                    266
                ],
                [
                    35,
                    265
                ],
                [
                    36,
                    263
                ],
                [
                    37,
                    262
                ],
                [
                    38,
                    260
                ],
                [
                    39,
                    259
                ],
                [
                    40,
                    257
                ],
                [
                    41,
                    256
                ],
                [
                    42,
                    254
                ],
                [
                    43,
                    253
                ],
                [
                    44,
                    251
                ],
                [
                    45,
                    250
                ],
                [
                    46,
                    248
                ],
                [
                    47,
                    247
                ],
                [
                    48,
                    245
                ],
                [
                    49,
                    244
                ],
                [
                    50,
                    242
                ],
                [
                    51,
                    241
                ],
                [
                    52,
                    239
                ],
                [
                    53,
                    238
                ],
                [
                    54,
                    236
                ],
                [
                    55,
                    235
                ],
                [
                    56,
                    233
                ],
                [
                    57,
                    232
                ],
                [
                    58,
                    231
                ],
                [
                    59,
                    229
                ],
                [
                    60,
                    228
                ],
                [
                    61,
                    226
                ],
                [
                    62,
                    225
                ],
                [
                    63,
                    223
                ],
                [
                    64,
                    222
                ],
                [
                    65,
                    221
                ],
                [
                    66,
                    220
                ],
                [
                    67,
                    219
                ],
                [
                    68,
                    219
                ],
                [
                    69,
                    218
                ],
                [
                    70,
                    217
                ],
                [
                    71,
                    216
                ],
                [
                    72,
                    216
                ],
                [
                    73,
                    215
                ],
                [
                    74,
                    214
                ],
                [
                    75,
                    213
                ],
                [
                    76,
                    213
                ],
                [
                    77,
                    212
                ],
                [
                    78,
                    211
                ],
                [
                    79,
                    211
                ],
                [
                    80,
                    210
                ],
                [
                    81,
                    209
                ],
                [
                    82,
                    208
                ],
                [
                    83,
                    208
                ],
                [
                    84,
                    207
                ],
                [
                    85,
                    206
                ],
                [
                    86,
                    205
                ],
                [
                    87,
                    205
                ],
                [
                    88,
                    204
                ],
                [
                    89,
                    203
                ],
                [
                    90,
                    202
                ],
                [
                    91,
                    202
                ],
                [
                    92,
                    201
                ],
                [
                    93,
                    200
                ],
                [
                    94,
                    199
                ],
                [
                    95,
                    199
                ],
                [
                    96,
                    198
                ],
                [
                    97,
                    197
                ],
                [
                    98,
                    196
                ],
                [
                    99,
                    196
                ],
                [
                    100,
                    195
                ],
                [
                    101,
                    194
                ],
                [
                    102,
                    193
                ],
                [
                    103,
                    193
                ],
                [
                    104,
                    192
                ],
                [
                    105,
                    191
                ],
                [
                    106,
                    191
                ],
                [
                    107,
                    190
                ],
                [
                    108,
                    189
                ],
                [
                    109,
                    188
                ],
                [
                    110,
                    188
                ],
                [
                    111,
                    187
                ],
                [
                    112,
                    186
                ],
                [
                    113,
                    185
                ],
                [
                    114,
                    185
                ],
                [
                    115,
                    184
                ],
                [
                    116,
                    183
                ],
                [
                    117,
                    182
                ],
                [
                    118,
                    182
                ],
                [
                    119,
                    181
                ],
                [
                    120,
                    180
                ],
                [
                    121,
                    179
                ],
                [
                    122,
                    179
                ],
                [
                    123,
                    178
                ],
                [
                    124,
                    177
                ],
                [
                    125,
                    176
                ],
                [
                    126,
                    176
                ],
                [
                    127,
                    175
                ],
                [
                    128,
                    174
                ]
            ],
            d: 'Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=2537.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2565.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-2565',
    number: 2565,
    comment: 'ModExp gas cost',
    url: 'https://eips.ethereum.org/EIPS/eip-2565',
    status: 'Final',
    minimumHardfork: 'byzantium',
    gasConfig: {},
    gasPrices: {
        modexpGquaddivisor: {
            v: 3,
            d: 'Gquaddivisor from modexp precompile for gas calculation'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=2565.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2718.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-2718',
    comment: 'Typed Transaction Envelope',
    url: 'https://eips.ethereum.org/EIPS/eip-2718',
    status: 'Final',
    minimumHardfork: 'chainstart',
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=2718.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2929.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-2929',
    comment: 'Gas cost increases for state access opcodes',
    url: 'https://eips.ethereum.org/EIPS/eip-2929',
    status: 'Final',
    minimumHardfork: 'chainstart',
    gasConfig: {},
    gasPrices: {
        coldsload: {
            v: 2100,
            d: 'Gas cost of the first read of storage from a given location (per transaction)'
        },
        coldaccountaccess: {
            v: 2600,
            d: 'Gas cost of the first read of a given address (per transaction)'
        },
        warmstorageread: {
            v: 100,
            d: "Gas cost of reading storage locations which have already loaded 'cold'"
        },
        sstoreCleanGasEIP2200: {
            v: 2900,
            d: 'Once per SSTORE operation from clean non-zero to something else'
        },
        sstoreNoopGasEIP2200: {
            v: 100,
            d: "Once per SSTORE operation if the value doesn't change"
        },
        sstoreDirtyGasEIP2200: {
            v: 100,
            d: 'Once per SSTORE operation if a dirty value is changed'
        },
        sstoreInitRefundEIP2200: {
            v: 19900,
            d: 'Once per SSTORE operation for resetting to the original zero value'
        },
        sstoreCleanRefundEIP2200: {
            v: 4900,
            d: 'Once per SSTORE operation for resetting to the original non-zero value'
        },
        call: {
            v: 0,
            d: 'Base fee of the CALL opcode'
        },
        callcode: {
            v: 0,
            d: 'Base fee of the CALLCODE opcode'
        },
        delegatecall: {
            v: 0,
            d: 'Base fee of the DELEGATECALL opcode'
        },
        staticcall: {
            v: 0,
            d: 'Base fee of the STATICCALL opcode'
        },
        balance: {
            v: 0,
            d: 'Base fee of the BALANCE opcode'
        },
        extcodesize: {
            v: 0,
            d: 'Base fee of the EXTCODESIZE opcode'
        },
        extcodecopy: {
            v: 0,
            d: 'Base fee of the EXTCODECOPY opcode'
        },
        extcodehash: {
            v: 0,
            d: 'Base fee of the EXTCODEHASH opcode'
        },
        sload: {
            v: 0,
            d: 'Base fee of the SLOAD opcode'
        },
        sstore: {
            v: 0,
            d: 'Base fee of the SSTORE opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=2929.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2930.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-2930',
    comment: 'Optional access lists',
    url: 'https://eips.ethereum.org/EIPS/eip-2930',
    status: 'Final',
    minimumHardfork: 'istanbul',
    requiredEIPs: [
        2718,
        2929
    ],
    gasConfig: {},
    gasPrices: {
        accessListStorageKeyCost: {
            v: 1900,
            d: 'Gas cost per storage key in an Access List transaction'
        },
        accessListAddressCost: {
            v: 2400,
            d: 'Gas cost per storage key in an Access List transaction'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=2930.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3198.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3198',
    number: 3198,
    comment: 'BASEFEE opcode',
    url: 'https://eips.ethereum.org/EIPS/eip-3198',
    status: 'Final',
    minimumHardfork: 'london',
    gasConfig: {},
    gasPrices: {
        basefee: {
            v: 2,
            d: 'Gas cost of the BASEFEE opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3198.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3529.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3529',
    comment: 'Reduction in refunds',
    url: 'https://eips.ethereum.org/EIPS/eip-3529',
    status: 'Final',
    minimumHardfork: 'berlin',
    requiredEIPs: [
        2929
    ],
    gasConfig: {
        maxRefundQuotient: {
            v: 5,
            d: 'Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)'
        }
    },
    gasPrices: {
        selfdestructRefund: {
            v: 0,
            d: 'Refunded following a selfdestruct operation'
        },
        sstoreClearRefundEIP2200: {
            v: 4800,
            d: 'Once per SSTORE operation for clearing an originally existing storage slot'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3529.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3540.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3540',
    number: 3540,
    comment: 'EVM Object Format (EOF) v1',
    url: 'https://eips.ethereum.org/EIPS/eip-3540',
    status: 'Review',
    minimumHardfork: 'london',
    requiredEIPs: [
        3541
    ],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3540.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3541.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3541',
    comment: 'Reject new contracts starting with the 0xEF byte',
    url: 'https://eips.ethereum.org/EIPS/eip-3541',
    status: 'Final',
    minimumHardfork: 'berlin',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3541.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3554.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3554',
    comment: 'Reduction in refunds',
    url: 'Difficulty Bomb Delay to December 1st 2021',
    status: 'Final',
    minimumHardfork: 'muirGlacier',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 9500000,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=3554.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3607.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3607',
    number: 3607,
    comment: 'Reject transactions from senders with deployed code',
    url: 'https://eips.ethereum.org/EIPS/eip-3607',
    status: 'Final',
    minimumHardfork: 'chainstart',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3607.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3651.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3651',
    number: 3198,
    comment: 'Warm COINBASE',
    url: 'https://eips.ethereum.org/EIPS/eip-3651',
    status: 'Review',
    minimumHardfork: 'london',
    requiredEIPs: [
        2929
    ],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3651.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3670.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3670',
    number: 3670,
    comment: 'EOF - Code Validation',
    url: 'https://eips.ethereum.org/EIPS/eip-3670',
    status: 'Review',
    minimumHardfork: 'london',
    requiredEIPs: [
        3540
    ],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3670.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3675.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3675',
    number: 3675,
    comment: 'Upgrade consensus to Proof-of-Stake',
    url: 'https://eips.ethereum.org/EIPS/eip-3675',
    status: 'Final',
    minimumHardfork: 'london',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3675.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3855.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3855',
    number: 3855,
    comment: 'PUSH0 instruction',
    url: 'https://eips.ethereum.org/EIPS/eip-3855',
    status: 'Review',
    minimumHardfork: 'chainstart',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {
        push0: {
            v: 2,
            d: 'Base fee of the PUSH0 opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=3855.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3860.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-3860',
    number: 3860,
    comment: 'Limit and meter initcode',
    url: 'https://eips.ethereum.org/EIPS/eip-3860',
    status: 'Review',
    minimumHardfork: 'spuriousDragon',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {
        initCodeWordCost: {
            v: 2,
            d: 'Gas to pay for each word (32 bytes) of initcode when creating a contract'
        }
    },
    vm: {
        maxInitCodeSize: {
            v: 49152,
            d: 'Maximum length of initialization code when creating a contract'
        }
    },
    pow: {}
};
 //# sourceMappingURL=3860.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/4345.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-4345',
    number: 4345,
    comment: 'Difficulty Bomb Delay to June 2022',
    url: 'https://eips.ethereum.org/EIPS/eip-4345',
    status: 'Final',
    minimumHardfork: 'london',
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 10700000,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=4345.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/4399.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-4399',
    number: 4399,
    comment: 'Supplant DIFFICULTY opcode with PREVRANDAO',
    url: 'https://eips.ethereum.org/EIPS/eip-4399',
    status: 'Review',
    minimumHardfork: 'london',
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=4399.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/5133.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'EIP-5133',
    number: 5133,
    comment: 'Delaying Difficulty Bomb to mid-September 2022',
    url: 'https://eips.ethereum.org/EIPS/eip-5133',
    status: 'Draft',
    minimumHardfork: 'grayGlacier',
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 11400000,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=5133.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "EIPs": (()=>EIPs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$1153$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/1153.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$1559$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/1559.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2315$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2315.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2537$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2537.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2565$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2565.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2718.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2929$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2929.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2930$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/2930.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3198$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3198.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3529$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3529.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3540$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3540.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3541$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3541.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3554$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3554.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3607$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3607.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3651$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3651.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3670$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3670.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3675$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3675.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3855$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3855.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3860$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/3860.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$4345$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/4345.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$4399$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/4399.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$5133$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/5133.js [app-client] (ecmascript)");
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
const EIPs = {
    1153: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$1153$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    1559: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$1559$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    2315: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2315$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    2537: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2537$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    2565: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2565$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    2718: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    2929: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2929$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    2930: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$2930$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3198: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3198$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3529: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3529$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3540: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3540$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3541: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3541$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3554: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3554$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3607: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3607$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3651: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3651$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3670: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3670$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3675: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3675$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3855: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3855$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    3860: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$3860$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    4345: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$4345$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    4399: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$4399$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    5133: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$5133$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/chainstart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'chainstart',
    comment: 'Start of the Ethereum main chain',
    url: '',
    status: '',
    gasConfig: {
        minGasLimit: {
            v: 5000,
            d: 'Minimum the gas limit may ever be'
        },
        gasLimitBoundDivisor: {
            v: 1024,
            d: 'The bound divisor of the gas limit, used in update calculations'
        },
        maxRefundQuotient: {
            v: 2,
            d: 'Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)'
        }
    },
    gasPrices: {
        base: {
            v: 2,
            d: 'Gas base cost, used e.g. for ChainID opcode (Istanbul)'
        },
        tierStep: {
            v: [
                0,
                2,
                3,
                5,
                8,
                10,
                20
            ],
            d: 'Once per operation, for a selection of them'
        },
        exp: {
            v: 10,
            d: 'Base fee of the EXP opcode'
        },
        expByte: {
            v: 10,
            d: 'Times ceil(log256(exponent)) for the EXP instruction'
        },
        sha3: {
            v: 30,
            d: 'Base fee of the SHA3 opcode'
        },
        sha3Word: {
            v: 6,
            d: "Once per word of the SHA3 operation's data"
        },
        sload: {
            v: 50,
            d: 'Base fee of the SLOAD opcode'
        },
        sstoreSet: {
            v: 20000,
            d: 'Once per SSTORE operation if the zeroness changes from zero'
        },
        sstoreReset: {
            v: 5000,
            d: 'Once per SSTORE operation if the zeroness does not change from zero'
        },
        sstoreRefund: {
            v: 15000,
            d: 'Once per SSTORE operation if the zeroness changes to zero'
        },
        jumpdest: {
            v: 1,
            d: 'Base fee of the JUMPDEST opcode'
        },
        log: {
            v: 375,
            d: 'Base fee of the LOG opcode'
        },
        logData: {
            v: 8,
            d: "Per byte in a LOG* operation's data"
        },
        logTopic: {
            v: 375,
            d: 'Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas'
        },
        create: {
            v: 32000,
            d: 'Base fee of the CREATE opcode'
        },
        call: {
            v: 40,
            d: 'Base fee of the CALL opcode'
        },
        callStipend: {
            v: 2300,
            d: 'Free gas given at beginning of call'
        },
        callValueTransfer: {
            v: 9000,
            d: 'Paid for CALL when the value transfor is non-zero'
        },
        callNewAccount: {
            v: 25000,
            d: "Paid for CALL when the destination address didn't exist prior"
        },
        selfdestructRefund: {
            v: 24000,
            d: 'Refunded following a selfdestruct operation'
        },
        memory: {
            v: 3,
            d: 'Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL'
        },
        quadCoeffDiv: {
            v: 512,
            d: 'Divisor for the quadratic particle of the memory cost equation'
        },
        createData: {
            v: 200,
            d: ''
        },
        tx: {
            v: 21000,
            d: 'Per transaction. NOTE: Not payable on data of calls between transactions'
        },
        txCreation: {
            v: 32000,
            d: 'The cost of creating a contract via tx'
        },
        txDataZero: {
            v: 4,
            d: 'Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions'
        },
        txDataNonZero: {
            v: 68,
            d: 'Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions'
        },
        copy: {
            v: 3,
            d: 'Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added'
        },
        ecRecover: {
            v: 3000,
            d: ''
        },
        sha256: {
            v: 60,
            d: ''
        },
        sha256Word: {
            v: 12,
            d: ''
        },
        ripemd160: {
            v: 600,
            d: ''
        },
        ripemd160Word: {
            v: 120,
            d: ''
        },
        identity: {
            v: 15,
            d: ''
        },
        identityWord: {
            v: 3,
            d: ''
        },
        stop: {
            v: 0,
            d: 'Base fee of the STOP opcode'
        },
        add: {
            v: 3,
            d: 'Base fee of the ADD opcode'
        },
        mul: {
            v: 5,
            d: 'Base fee of the MUL opcode'
        },
        sub: {
            v: 3,
            d: 'Base fee of the SUB opcode'
        },
        div: {
            v: 5,
            d: 'Base fee of the DIV opcode'
        },
        sdiv: {
            v: 5,
            d: 'Base fee of the SDIV opcode'
        },
        mod: {
            v: 5,
            d: 'Base fee of the MOD opcode'
        },
        smod: {
            v: 5,
            d: 'Base fee of the SMOD opcode'
        },
        addmod: {
            v: 8,
            d: 'Base fee of the ADDMOD opcode'
        },
        mulmod: {
            v: 8,
            d: 'Base fee of the MULMOD opcode'
        },
        signextend: {
            v: 5,
            d: 'Base fee of the SIGNEXTEND opcode'
        },
        lt: {
            v: 3,
            d: 'Base fee of the LT opcode'
        },
        gt: {
            v: 3,
            d: 'Base fee of the GT opcode'
        },
        slt: {
            v: 3,
            d: 'Base fee of the SLT opcode'
        },
        sgt: {
            v: 3,
            d: 'Base fee of the SGT opcode'
        },
        eq: {
            v: 3,
            d: 'Base fee of the EQ opcode'
        },
        iszero: {
            v: 3,
            d: 'Base fee of the ISZERO opcode'
        },
        and: {
            v: 3,
            d: 'Base fee of the AND opcode'
        },
        or: {
            v: 3,
            d: 'Base fee of the OR opcode'
        },
        xor: {
            v: 3,
            d: 'Base fee of the XOR opcode'
        },
        not: {
            v: 3,
            d: 'Base fee of the NOT opcode'
        },
        byte: {
            v: 3,
            d: 'Base fee of the BYTE opcode'
        },
        address: {
            v: 2,
            d: 'Base fee of the ADDRESS opcode'
        },
        balance: {
            v: 20,
            d: 'Base fee of the BALANCE opcode'
        },
        origin: {
            v: 2,
            d: 'Base fee of the ORIGIN opcode'
        },
        caller: {
            v: 2,
            d: 'Base fee of the CALLER opcode'
        },
        callvalue: {
            v: 2,
            d: 'Base fee of the CALLVALUE opcode'
        },
        calldataload: {
            v: 3,
            d: 'Base fee of the CALLDATALOAD opcode'
        },
        calldatasize: {
            v: 2,
            d: 'Base fee of the CALLDATASIZE opcode'
        },
        calldatacopy: {
            v: 3,
            d: 'Base fee of the CALLDATACOPY opcode'
        },
        codesize: {
            v: 2,
            d: 'Base fee of the CODESIZE opcode'
        },
        codecopy: {
            v: 3,
            d: 'Base fee of the CODECOPY opcode'
        },
        gasprice: {
            v: 2,
            d: 'Base fee of the GASPRICE opcode'
        },
        extcodesize: {
            v: 20,
            d: 'Base fee of the EXTCODESIZE opcode'
        },
        extcodecopy: {
            v: 20,
            d: 'Base fee of the EXTCODECOPY opcode'
        },
        blockhash: {
            v: 20,
            d: 'Base fee of the BLOCKHASH opcode'
        },
        coinbase: {
            v: 2,
            d: 'Base fee of the COINBASE opcode'
        },
        timestamp: {
            v: 2,
            d: 'Base fee of the TIMESTAMP opcode'
        },
        number: {
            v: 2,
            d: 'Base fee of the NUMBER opcode'
        },
        difficulty: {
            v: 2,
            d: 'Base fee of the DIFFICULTY opcode'
        },
        gaslimit: {
            v: 2,
            d: 'Base fee of the GASLIMIT opcode'
        },
        pop: {
            v: 2,
            d: 'Base fee of the POP opcode'
        },
        mload: {
            v: 3,
            d: 'Base fee of the MLOAD opcode'
        },
        mstore: {
            v: 3,
            d: 'Base fee of the MSTORE opcode'
        },
        mstore8: {
            v: 3,
            d: 'Base fee of the MSTORE8 opcode'
        },
        sstore: {
            v: 0,
            d: 'Base fee of the SSTORE opcode'
        },
        jump: {
            v: 8,
            d: 'Base fee of the JUMP opcode'
        },
        jumpi: {
            v: 10,
            d: 'Base fee of the JUMPI opcode'
        },
        pc: {
            v: 2,
            d: 'Base fee of the PC opcode'
        },
        msize: {
            v: 2,
            d: 'Base fee of the MSIZE opcode'
        },
        gas: {
            v: 2,
            d: 'Base fee of the GAS opcode'
        },
        push: {
            v: 3,
            d: 'Base fee of the PUSH opcode'
        },
        dup: {
            v: 3,
            d: 'Base fee of the DUP opcode'
        },
        swap: {
            v: 3,
            d: 'Base fee of the SWAP opcode'
        },
        callcode: {
            v: 40,
            d: 'Base fee of the CALLCODE opcode'
        },
        return: {
            v: 0,
            d: 'Base fee of the RETURN opcode'
        },
        invalid: {
            v: 0,
            d: 'Base fee of the INVALID opcode'
        },
        selfdestruct: {
            v: 0,
            d: 'Base fee of the SELFDESTRUCT opcode'
        }
    },
    vm: {
        stackLimit: {
            v: 1024,
            d: 'Maximum size of VM stack allowed'
        },
        callCreateDepth: {
            v: 1024,
            d: 'Maximum depth of call/create stack'
        },
        maxExtraDataSize: {
            v: 32,
            d: 'Maximum size extra data may be after Genesis'
        }
    },
    pow: {
        minimumDifficulty: {
            v: 131072,
            d: 'The minimum that the difficulty may ever be'
        },
        difficultyBoundDivisor: {
            v: 2048,
            d: 'The bound divisor of the difficulty, used in the update calculations'
        },
        durationLimit: {
            v: 13,
            d: 'The decision boundary on the blocktime duration used to determine whether difficulty should go up or not'
        },
        epochDuration: {
            v: 30000,
            d: 'Duration between proof-of-work epochs'
        },
        timebombPeriod: {
            v: 100000,
            d: 'Exponential difficulty timebomb period'
        },
        minerReward: {
            v: '5000000000000000000',
            d: 'the amount a miner get rewarded for mining a block'
        },
        difficultyBombDelay: {
            v: 0,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=chainstart.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/dao.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'dao',
    comment: 'DAO rescue hardfork',
    url: 'https://eips.ethereum.org/EIPS/eip-779',
    status: 'Final',
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=dao.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/homestead.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'homestead',
    comment: 'Homestead hardfork with protocol and network changes',
    url: 'https://eips.ethereum.org/EIPS/eip-606',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        delegatecall: {
            v: 40,
            d: 'Base fee of the DELEGATECALL opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=homestead.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/tangerineWhistle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'tangerineWhistle',
    comment: 'Hardfork with gas cost changes for IO-heavy operations',
    url: 'https://eips.ethereum.org/EIPS/eip-608',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        sload: {
            v: 200,
            d: 'Once per SLOAD operation'
        },
        call: {
            v: 700,
            d: 'Once per CALL operation & message call transaction'
        },
        extcodesize: {
            v: 700,
            d: 'Base fee of the EXTCODESIZE opcode'
        },
        extcodecopy: {
            v: 700,
            d: 'Base fee of the EXTCODECOPY opcode'
        },
        balance: {
            v: 400,
            d: 'Base fee of the BALANCE opcode'
        },
        delegatecall: {
            v: 700,
            d: 'Base fee of the DELEGATECALL opcode'
        },
        callcode: {
            v: 700,
            d: 'Base fee of the CALLCODE opcode'
        },
        selfdestruct: {
            v: 5000,
            d: 'Base fee of the SELFDESTRUCT opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=tangerineWhistle.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/spuriousDragon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'spuriousDragon',
    comment: 'HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit',
    url: 'https://eips.ethereum.org/EIPS/eip-607',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        expByte: {
            v: 50,
            d: 'Times ceil(log256(exponent)) for the EXP instruction'
        }
    },
    vm: {
        maxCodeSize: {
            v: 24576,
            d: 'Maximum length of contract code'
        }
    },
    pow: {}
};
 //# sourceMappingURL=spuriousDragon.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/byzantium.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'byzantium',
    comment: 'Hardfork with new precompiles, instructions and other protocol changes',
    url: 'https://eips.ethereum.org/EIPS/eip-609',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        modexpGquaddivisor: {
            v: 20,
            d: 'Gquaddivisor from modexp precompile for gas calculation'
        },
        ecAdd: {
            v: 500,
            d: 'Gas costs for curve addition precompile'
        },
        ecMul: {
            v: 40000,
            d: 'Gas costs for curve multiplication precompile'
        },
        ecPairing: {
            v: 100000,
            d: 'Base gas costs for curve pairing precompile'
        },
        ecPairingWord: {
            v: 80000,
            d: 'Gas costs regarding curve pairing precompile input length'
        },
        revert: {
            v: 0,
            d: 'Base fee of the REVERT opcode'
        },
        staticcall: {
            v: 700,
            d: 'Base fee of the STATICCALL opcode'
        },
        returndatasize: {
            v: 2,
            d: 'Base fee of the RETURNDATASIZE opcode'
        },
        returndatacopy: {
            v: 3,
            d: 'Base fee of the RETURNDATACOPY opcode'
        }
    },
    vm: {},
    pow: {
        minerReward: {
            v: '3000000000000000000',
            d: 'the amount a miner get rewarded for mining a block'
        },
        difficultyBombDelay: {
            v: 3000000,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=byzantium.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/constantinople.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'constantinople',
    comment: 'Postponed hardfork including EIP-1283 (SSTORE gas metering changes)',
    url: 'https://eips.ethereum.org/EIPS/eip-1013',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        netSstoreNoopGas: {
            v: 200,
            d: "Once per SSTORE operation if the value doesn't change"
        },
        netSstoreInitGas: {
            v: 20000,
            d: 'Once per SSTORE operation from clean zero'
        },
        netSstoreCleanGas: {
            v: 5000,
            d: 'Once per SSTORE operation from clean non-zero'
        },
        netSstoreDirtyGas: {
            v: 200,
            d: 'Once per SSTORE operation from dirty'
        },
        netSstoreClearRefund: {
            v: 15000,
            d: 'Once per SSTORE operation for clearing an originally existing storage slot'
        },
        netSstoreResetRefund: {
            v: 4800,
            d: 'Once per SSTORE operation for resetting to the original non-zero value'
        },
        netSstoreResetClearRefund: {
            v: 19800,
            d: 'Once per SSTORE operation for resetting to the original zero value'
        },
        shl: {
            v: 3,
            d: 'Base fee of the SHL opcode'
        },
        shr: {
            v: 3,
            d: 'Base fee of the SHR opcode'
        },
        sar: {
            v: 3,
            d: 'Base fee of the SAR opcode'
        },
        extcodehash: {
            v: 400,
            d: 'Base fee of the EXTCODEHASH opcode'
        },
        create2: {
            v: 32000,
            d: 'Base fee of the CREATE2 opcode'
        }
    },
    vm: {},
    pow: {
        minerReward: {
            v: '2000000000000000000',
            d: 'The amount a miner gets rewarded for mining a block'
        },
        difficultyBombDelay: {
            v: 5000000,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=constantinople.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/petersburg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'petersburg',
    comment: 'Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople',
    url: 'https://eips.ethereum.org/EIPS/eip-1716',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        netSstoreNoopGas: {
            v: null,
            d: 'Removed along EIP-1283'
        },
        netSstoreInitGas: {
            v: null,
            d: 'Removed along EIP-1283'
        },
        netSstoreCleanGas: {
            v: null,
            d: 'Removed along EIP-1283'
        },
        netSstoreDirtyGas: {
            v: null,
            d: 'Removed along EIP-1283'
        },
        netSstoreClearRefund: {
            v: null,
            d: 'Removed along EIP-1283'
        },
        netSstoreResetRefund: {
            v: null,
            d: 'Removed along EIP-1283'
        },
        netSstoreResetClearRefund: {
            v: null,
            d: 'Removed along EIP-1283'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=petersburg.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/istanbul.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'istanbul',
    comment: 'HF targeted for December 2019 following the Constantinople/Petersburg HF',
    url: 'https://eips.ethereum.org/EIPS/eip-1679',
    status: 'Final',
    gasConfig: {},
    gasPrices: {
        blake2Round: {
            v: 1,
            d: 'Gas cost per round for the Blake2 F precompile'
        },
        ecAdd: {
            v: 150,
            d: 'Gas costs for curve addition precompile'
        },
        ecMul: {
            v: 6000,
            d: 'Gas costs for curve multiplication precompile'
        },
        ecPairing: {
            v: 45000,
            d: 'Base gas costs for curve pairing precompile'
        },
        ecPairingWord: {
            v: 34000,
            d: 'Gas costs regarding curve pairing precompile input length'
        },
        txDataNonZero: {
            v: 16,
            d: 'Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions'
        },
        sstoreSentryGasEIP2200: {
            v: 2300,
            d: 'Minimum gas required to be present for an SSTORE call, not consumed'
        },
        sstoreNoopGasEIP2200: {
            v: 800,
            d: "Once per SSTORE operation if the value doesn't change"
        },
        sstoreDirtyGasEIP2200: {
            v: 800,
            d: 'Once per SSTORE operation if a dirty value is changed'
        },
        sstoreInitGasEIP2200: {
            v: 20000,
            d: 'Once per SSTORE operation from clean zero to non-zero'
        },
        sstoreInitRefundEIP2200: {
            v: 19200,
            d: 'Once per SSTORE operation for resetting to the original zero value'
        },
        sstoreCleanGasEIP2200: {
            v: 5000,
            d: 'Once per SSTORE operation from clean non-zero to something else'
        },
        sstoreCleanRefundEIP2200: {
            v: 4200,
            d: 'Once per SSTORE operation for resetting to the original non-zero value'
        },
        sstoreClearRefundEIP2200: {
            v: 15000,
            d: 'Once per SSTORE operation for clearing an originally existing storage slot'
        },
        balance: {
            v: 700,
            d: 'Base fee of the BALANCE opcode'
        },
        extcodehash: {
            v: 700,
            d: 'Base fee of the EXTCODEHASH opcode'
        },
        chainid: {
            v: 2,
            d: 'Base fee of the CHAINID opcode'
        },
        selfbalance: {
            v: 5,
            d: 'Base fee of the SELFBALANCE opcode'
        },
        sload: {
            v: 800,
            d: 'Base fee of the SLOAD opcode'
        }
    },
    vm: {},
    pow: {}
};
 //# sourceMappingURL=istanbul.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/muirGlacier.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'muirGlacier',
    comment: 'HF to delay the difficulty bomb',
    url: 'https://eips.ethereum.org/EIPS/eip-2384',
    status: 'Final',
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 9000000,
            d: 'the amount of blocks to delay the difficulty bomb with'
        }
    }
};
 //# sourceMappingURL=muirGlacier.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/berlin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'berlin',
    comment: 'HF targeted for July 2020 following the Muir Glacier HF',
    url: 'https://eips.ethereum.org/EIPS/eip-2070',
    status: 'Final',
    eips: [
        2565,
        2929,
        2718,
        2930
    ]
};
 //# sourceMappingURL=berlin.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/london.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'london',
    comment: 'HF targeted for July 2021 following the Berlin fork',
    url: 'https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md',
    status: 'Final',
    eips: [
        1559,
        3198,
        3529,
        3541
    ]
};
 //# sourceMappingURL=london.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/shanghai.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'shanghai',
    comment: 'Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode',
    url: 'https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md',
    status: 'Final',
    eips: [
        3651,
        3855,
        3860,
        4895
    ]
};
 //# sourceMappingURL=shanghai.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/arrowGlacier.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'arrowGlacier',
    comment: 'HF to delay the difficulty bomb',
    url: 'https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md',
    status: 'Final',
    eips: [
        4345
    ],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=arrowGlacier.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/grayGlacier.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'grayGlacier',
    comment: 'Delaying the difficulty bomb to Mid September 2022',
    url: 'https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md',
    status: 'Draft',
    eips: [
        5133
    ],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
};
 //# sourceMappingURL=grayGlacier.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/mergeForkIdTransition.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'mergeForkIdTransition',
    comment: 'Pre-merge hardfork to fork off non-upgraded clients',
    url: 'https://eips.ethereum.org/EIPS/eip-3675',
    status: 'Draft',
    eips: []
};
 //# sourceMappingURL=mergeForkIdTransition.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/merge.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: 'merge',
    comment: 'Hardfork to upgrade the consensus mechanism to Proof-of-Stake',
    url: 'https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md',
    status: 'Final',
    consensus: {
        type: 'pos',
        algorithm: 'casper',
        casper: {}
    },
    eips: [
        3675,
        4399
    ]
};
 //# sourceMappingURL=merge.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "hardforks": (()=>hardforks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$chainstart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/chainstart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$dao$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/dao.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$homestead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/homestead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$tangerineWhistle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/tangerineWhistle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$spuriousDragon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/spuriousDragon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$byzantium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/byzantium.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$constantinople$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/constantinople.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$petersburg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/petersburg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$istanbul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/istanbul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$muirGlacier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/muirGlacier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$berlin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/berlin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$london$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/london.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$shanghai$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/shanghai.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$arrowGlacier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/arrowGlacier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$grayGlacier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/grayGlacier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$mergeForkIdTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/mergeForkIdTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/merge.js [app-client] (ecmascript)");
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
const hardforks = {
    chainstart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$chainstart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    homestead: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$homestead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    dao: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$dao$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    tangerineWhistle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$tangerineWhistle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    spuriousDragon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$spuriousDragon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    byzantium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$byzantium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    constantinople: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$constantinople$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    petersburg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$petersburg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    istanbul: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$istanbul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    muirGlacier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$muirGlacier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    berlin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$berlin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    london: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$london$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    shanghai: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$shanghai$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    arrowGlacier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$arrowGlacier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    grayGlacier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$grayGlacier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    mergeForkIdTransition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$mergeForkIdTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/common.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "Common": (()=>Common)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crc$2d$32$40$1$2e$2$2e$2$2f$node_modules$2f$crc$2d$32$2f$crc32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/crc-32@1.2.2/node_modules/crc-32/crc32.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$chains$2f$goerli$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/chains/goerli.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$chains$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/chains/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$chains$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/chains/sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/eips/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/hardforks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$event_emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/event_emitter.js [app-client] (ecmascript)");
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
const { buf: crc32Uint8Array } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crc$2d$32$40$1$2e$2$2e$2$2f$node_modules$2f$crc$2d$32$2f$crc32$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
class Common extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$event_emitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    /**
     * Creates a {@link Common} object for a custom chain, based on a standard one.
     *
     * It uses all the {@link Chain} parameters from the {@link baseChain} option except the ones overridden
     * in a provided {@link chainParamsOrName} dictionary. Some usage example:
     *
     * ```javascript
     * Common.custom({chainId: 123})
     * ```
     *
     * There are also selected supported custom chains which can be initialized by using one of the
     * {@link CustomChains} for {@link chainParamsOrName}, e.g.:
     *
     * ```javascript
     * Common.custom(CustomChains.MaticMumbai)
     * ```
     *
     * Note that these supported custom chains only provide some base parameters (usually the chain and
     * network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
     * the `web3-utils/tx` library to a Layer-2 chain).
     *
     * @param chainParamsOrName Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain
     * @param opts Custom chain options to set the {@link CustomCommonOpts.baseChain}, selected {@link CustomCommonOpts.hardfork} and others
     */ static custom(chainParamsOrName, opts = {}) {
        var _a;
        const baseChain = (_a = opts.baseChain) !== null && _a !== void 0 ? _a : 'mainnet';
        const standardChainParams = Object.assign({}, Common._getChainParams(baseChain));
        standardChainParams.name = 'custom-chain';
        if (typeof chainParamsOrName !== 'string') {
            return new Common(Object.assign({
                chain: Object.assign(Object.assign({}, standardChainParams), chainParamsOrName)
            }, opts));
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].PolygonMainnet) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].PolygonMainnet,
                chainId: 137,
                networkId: 137
            }, opts);
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].PolygonMumbai) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].PolygonMumbai,
                chainId: 80001,
                networkId: 80001
            }, opts);
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].ArbitrumRinkebyTestnet) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].ArbitrumRinkebyTestnet,
                chainId: 421611,
                networkId: 421611
            }, opts);
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].ArbitrumOne) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].ArbitrumOne,
                chainId: 42161,
                networkId: 42161
            }, opts);
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].xDaiChain) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].xDaiChain,
                chainId: 100,
                networkId: 100
            }, opts);
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].OptimisticKovan) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].OptimisticKovan,
                chainId: 69,
                networkId: 69
            }, Object.assign({
                hardfork: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Berlin
            }, opts));
        }
        if (chainParamsOrName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].OptimisticEthereum) {
            return Common.custom({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomChain"].OptimisticEthereum,
                chainId: 10,
                networkId: 10
            }, Object.assign({
                hardfork: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Berlin
            }, opts));
        }
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Custom chain ${chainParamsOrName} not supported`);
    }
    /**
     * Static method to load and set common from a geth genesis json
     * @param genesisJson json of geth configuration
     * @param { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge } to further configure the common instance
     * @returns Common
     */ static fromGethGenesis(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    genesisJson, { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge }) {
        var _a;
        const genesisParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseGethGenesis"])(genesisJson, chain, mergeForkIdPostMerge);
        const common = new Common({
            chain: (_a = genesisParams.name) !== null && _a !== void 0 ? _a : 'custom',
            customChains: [
                genesisParams
            ],
            eips,
            hardfork: hardfork !== null && hardfork !== void 0 ? hardfork : genesisParams.hardfork
        });
        if (genesisHash !== undefined) {
            common.setForkHashes(genesisHash);
        }
        return common;
    }
    /**
     * Static method to determine if a {@link chainId} is supported as a standard chain
     * @param chainId bigint id (`1`) of a standard chain
     * @returns boolean
     */ static isSupportedChainId(chainId) {
        const initializedChains = this._getInitializedChains();
        return Boolean(initializedChains.names[chainId.toString()]);
    }
    static _getChainParams(_chain, customChains) {
        let chain = _chain;
        const initializedChains = this._getInitializedChains(customChains);
        if (typeof chain === 'number' || typeof chain === 'bigint') {
            chain = chain.toString();
            if (initializedChains.names[chain]) {
                const name = initializedChains.names[chain];
                return initializedChains[name];
            }
            throw new Error(`Chain with ID ${chain} not supported`);
        }
        if (initializedChains[chain] !== undefined) {
            return initializedChains[chain];
        }
        throw new Error(`Chain with name ${chain} not supported`);
    }
    constructor(opts){
        var _a, _b;
        super();
        this._eips = [];
        this._customChains = (_a = opts.customChains) !== null && _a !== void 0 ? _a : [];
        this._chainParams = this.setChain(opts.chain);
        this.DEFAULT_HARDFORK = (_b = this._chainParams.defaultHardfork) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge;
        // Assign hardfork changes in the sequence of the applied hardforks
        this.HARDFORK_CHANGES = this.hardforks().map((hf)=>[
                hf.name,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$hardforks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardforks"][hf.name]
            ]);
        this._hardfork = this.DEFAULT_HARDFORK;
        if (opts.hardfork !== undefined) {
            this.setHardfork(opts.hardfork);
        }
        if (opts.eips) {
            this.setEIPs(opts.eips);
        }
    }
    /**
     * Sets the chain
     * @param chain String ('mainnet') or Number (1) chain representation.
     *              Or, a Dictionary of chain parameters for a private network.
     * @returns The dictionary with parameters set as chain
     */ setChain(chain) {
        if (typeof chain === 'number' || typeof chain === 'bigint' || typeof chain === 'string') {
            this._chainParams = Common._getChainParams(chain, this._customChains);
        } else if (typeof chain === 'object') {
            if (this._customChains.length > 0) {
                throw new Error('Chain must be a string, number, or bigint when initialized with customChains passed in');
            }
            const required = [
                'networkId',
                'genesis',
                'hardforks',
                'bootstrapNodes'
            ];
            for (const param of required){
                if (!(param in chain)) {
                    throw new Error(`Missing required chain parameter: ${param}`);
                }
            }
            this._chainParams = chain;
        } else {
            throw new Error('Wrong input format');
        }
        for (const hf of this.hardforks()){
            if (hf.block === undefined) {
                throw new Error(`Hardfork cannot have undefined block number`);
            }
        }
        return this._chainParams;
    }
    /**
     * Sets the hardfork to get params for
     * @param hardfork String identifier (e.g. 'byzantium') or {@link Hardfork} enum
     */ setHardfork(hardfork) {
        let existing = false;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if (hfChanges[0] === hardfork) {
                if (this._hardfork !== hardfork) {
                    this._hardfork = hardfork;
                    this.emit('hardforkChanged', hardfork);
                }
                existing = true;
            }
        }
        if (!existing) {
            throw new Error(`Hardfork with name ${hardfork} not supported`);
        }
    }
    /**
     * Returns the hardfork based on the block number or an optional
     * total difficulty (Merge HF) provided.
     *
     * An optional TD takes precedence in case the corresponding HF block
     * is set to `null` or otherwise needs to match (if not an error
     * will be thrown).
     *
     * @param blockNumber
     * @param td : total difficulty of the parent block (for block hf) OR of the chain latest (for chain hf)
     * @param timestamp: timestamp in seconds at which block was/is to be minted
     * @returns The name of the HF
     */ getHardforkByBlockNumber(_blockNumber, _td, _timestamp) {
        const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(_blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
        const td = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(_td, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
        const timestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(_timestamp, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].Number);
        // Filter out hardforks with no block number, no ttd or no timestamp (i.e. unapplied hardforks)
        const hfs = this.hardforks().filter((hf)=>// eslint-disable-next-line no-null/no-null
            hf.block !== null || hf.ttd !== null && hf.ttd !== undefined || hf.timestamp !== undefined);
        // eslint-disable-next-line no-null/no-null
        const mergeIndex = hfs.findIndex((hf)=>hf.ttd !== null && hf.ttd !== undefined);
        const doubleTTDHF = hfs.slice(mergeIndex + 1)// eslint-disable-next-line no-null/no-null
        .findIndex((hf)=>hf.ttd !== null && hf.ttd !== undefined);
        if (doubleTTDHF >= 0) {
            throw Error(`More than one merge hardforks found with ttd specified`);
        }
        // Find the first hardfork that has a block number greater than `blockNumber`
        // (skips the merge hardfork since it cannot have a block number specified).
        // If timestamp is not provided, it also skips timestamps hardforks to continue
        // discovering/checking number hardforks.
        let hfIndex = hfs.findIndex((hf)=>// eslint-disable-next-line no-null/no-null
            hf.block !== null && hf.block > blockNumber || timestamp !== undefined && Number(hf.timestamp) > timestamp);
        if (hfIndex === -1) {
            // all hardforks apply, set hfIndex to the last one as that's the candidate
            hfIndex = hfs.length;
        } else if (hfIndex === 0) {
            // cannot have a case where a block number is before all applied hardforks
            // since the chain has to start with a hardfork
            throw Error('Must have at least one hardfork at block 0');
        }
        // If timestamp is not provided, we need to rollback to the last hf with block or ttd
        if (timestamp === undefined) {
            const stepBack = hfs.slice(0, hfIndex).reverse()// eslint-disable-next-line no-null/no-null
            .findIndex((hf)=>hf.block !== null || hf.ttd !== undefined);
            hfIndex -= stepBack;
        }
        // Move hfIndex one back to arrive at candidate hardfork
        hfIndex -= 1;
        // If the timestamp was not provided, we could have skipped timestamp hardforks to look for number
        // hardforks. so it will now be needed to rollback
        // eslint-disable-next-line no-null/no-null
        if (hfs[hfIndex].block === null && hfs[hfIndex].timestamp === undefined) {
            // We're on the merge hardfork.  Let's check the TTD
            // eslint-disable-next-line no-null/no-null
            if (td === undefined || td === null || BigInt(hfs[hfIndex].ttd) > td) {
                // Merge ttd greater than current td so we're on hardfork before merge
                hfIndex -= 1;
            }
        // eslint-disable-next-line no-null/no-null
        } else if (mergeIndex >= 0 && td !== undefined && td !== null) {
            if (hfIndex >= mergeIndex && BigInt(hfs[mergeIndex].ttd) > td) {
                throw Error('Maximum HF determined by total difficulty is lower than the block number HF');
            } else if (hfIndex < mergeIndex && BigInt(hfs[mergeIndex].ttd) <= td) {
                throw Error('HF determined by block number is lower than the minimum total difficulty HF');
            }
        }
        const hfStartIndex = hfIndex;
        // Move the hfIndex to the end of the hardforks that might be scheduled on the same block/timestamp
        // This won't anyway be the case with Merge hfs
        for(; hfIndex < hfs.length - 1; hfIndex += 1){
            // break out if hfIndex + 1 is not scheduled at hfIndex
            if (hfs[hfIndex].block !== hfs[hfIndex + 1].block || hfs[hfIndex].timestamp !== hfs[hfIndex + 1].timestamp) {
                break;
            }
        }
        if (timestamp) {
            const minTimeStamp = hfs.slice(0, hfStartIndex).reduce((acc, hf)=>{
                var _a;
                return Math.max(Number((_a = hf.timestamp) !== null && _a !== void 0 ? _a : '0'), acc);
            }, 0);
            if (minTimeStamp > timestamp) {
                throw Error(`Maximum HF determined by timestamp is lower than the block number/ttd HF`);
            }
            const maxTimeStamp = hfs.slice(hfIndex + 1).reduce((acc, hf)=>{
                var _a;
                return Math.min(Number((_a = hf.timestamp) !== null && _a !== void 0 ? _a : timestamp), acc);
            }, timestamp);
            if (maxTimeStamp < timestamp) {
                throw Error(`Maximum HF determined by block number/ttd is lower than timestamp HF`);
            }
        }
        const hardfork = hfs[hfIndex];
        return hardfork.name;
    }
    /**
     * Sets a new hardfork based on the block number or an optional
     * total difficulty (Merge HF) provided.
     *
     * An optional TD takes precedence in case the corresponding HF block
     * is set to `null` or otherwise needs to match (if not an error
     * will be thrown).
     *
     * @param blockNumber
     * @param td
     * @param timestamp
     * @returns The name of the HF set
     */ setHardforkByBlockNumber(blockNumber, td, timestamp) {
        const hardfork = this.getHardforkByBlockNumber(blockNumber, td, timestamp);
        this.setHardfork(hardfork);
        return hardfork;
    }
    /**
     * Internal helper function, returns the params for the given hardfork for the chain set
     * @param hardfork Hardfork name
     * @returns Dictionary with hardfork params or null if hardfork not on chain
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    _getHardfork(hardfork) {
        const hfs = this.hardforks();
        for (const hf of hfs){
            if (hf.name === hardfork) return hf;
        }
        // eslint-disable-next-line no-null/no-null
        return null;
    }
    /**
     * Sets the active EIPs
     * @param eips
     */ setEIPs(eips = []) {
        for (const eip of eips){
            if (!(eip in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIPs"])) {
                throw new Error(`${eip} not supported`);
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
            const minHF = this.gteHardfork(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIPs"][eip].minimumHardfork);
            if (!minHF) {
                throw new Error(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `${eip} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${minHF}`);
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIPs"][eip].requiredEIPs !== undefined) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                for (const elem of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIPs"][eip].requiredEIPs){
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    if (!(eips.includes(elem) || this.isActivatedEIP(elem))) {
                        throw new Error(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        `${eip} requires EIP ${elem}, but is not included in the EIP list`);
                    }
                }
            }
        }
        this._eips = eips;
    }
    /**
     * Returns a parameter for the current chain setup
     *
     * If the parameter is present in an EIP, the EIP always takes precedence.
     * Otherwise the parameter if taken from the latest applied HF with
     * a change on the respective parameter.
     *
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @returns The value requested or `BigInt(0)` if not found
     */ param(topic, name) {
        // TODO: consider the case that different active EIPs
        // can change the same parameter
        let value;
        for (const eip of this._eips){
            value = this.paramByEIP(topic, name, eip);
            if (value !== undefined) return value;
        }
        return this.paramByHardfork(topic, name, this._hardfork);
    }
    /**
     * Returns the parameter corresponding to a hardfork
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param hardfork Hardfork name
     * @returns The value requested or `BigInt(0)` if not found
     */ paramByHardfork(topic, name, hardfork) {
        // eslint-disable-next-line no-null/no-null
        let value = null;
        for (const hfChanges of this.HARDFORK_CHANGES){
            // EIP-referencing HF file (e.g. berlin.json)
            if ('eips' in hfChanges[1]) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                const hfEIPs = hfChanges[1].eips;
                for (const eip of hfEIPs){
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    const valueEIP = this.paramByEIP(topic, name, eip);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    value = typeof valueEIP === 'bigint' ? valueEIP : value;
                }
            // Parameter-inlining HF file (e.g. istanbul.json)
            } else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (hfChanges[1][topic] === undefined) {
                    throw new Error(`Topic ${topic} not defined`);
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (hfChanges[1][topic][name] !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                    value = hfChanges[1][topic][name].v;
                }
            }
            if (hfChanges[0] === hardfork) break;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return BigInt(value !== null && value !== void 0 ? value : 0);
    }
    /**
     * Returns a parameter corresponding to an EIP
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param eip Number of the EIP
     * @returns The value requested or `undefined` if not found
     */ // eslint-disable-next-line class-methods-use-this
    paramByEIP(topic, name, eip) {
        if (!(eip in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIPs"])) {
            throw new Error(`${eip} not supported`);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const eipParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$eips$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EIPs"][eip];
        if (!(topic in eipParams)) {
            throw new Error(`Topic ${topic} not defined`);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (eipParams[topic][name] === undefined) {
            return undefined;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        const value = eipParams[topic][name].v;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return BigInt(value);
    }
    /**
     * Returns a parameter for the hardfork active on block number or
     * optional provided total difficulty (Merge HF)
     * @param topic Parameter topic
     * @param name Parameter name
     * @param blockNumber Block number
     * @param td Total difficulty
     *    * @returns The value requested or `BigInt(0)` if not found
     */ paramByBlock(topic, name, blockNumber, td, timestamp) {
        const hardfork = this.getHardforkByBlockNumber(blockNumber, td, timestamp);
        return this.paramByHardfork(topic, name, hardfork);
    }
    /**
     * Checks if an EIP is activated by either being included in the EIPs
     * manually passed in with the {@link CommonOpts.eips} or in a
     * hardfork currently being active
     *
     * Note: this method only works for EIPs being supported
     * by the {@link CommonOpts.eips} constructor option
     * @param eip
     */ isActivatedEIP(eip) {
        if (this.eips().includes(eip)) {
            return true;
        }
        for (const hfChanges of this.HARDFORK_CHANGES){
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const hf = hfChanges[1];
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
            if (this.gteHardfork(hf.name) && 'eips' in hf) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (hf.eips.includes(eip)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Checks if set or provided hardfork is active on block number
     * @param hardfork Hardfork name or null (for HF set)
     * @param blockNumber
     * @returns True if HF is active on block number
     */ hardforkIsActiveOnBlock(// eslint-disable-next-line @typescript-eslint/ban-types
    _hardfork, _blockNumber) {
        const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(_blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        const hfBlock = this.hardforkBlock(hardfork);
        if (typeof hfBlock === 'bigint' && hfBlock !== BigInt(0) && blockNumber >= hfBlock) {
            return true;
        }
        return false;
    }
    /**
     * Alias to hardforkIsActiveOnBlock when hardfork is set
     * @param blockNumber
     * @returns True if HF is active on block number
     */ activeOnBlock(blockNumber) {
        // eslint-disable-next-line no-null/no-null
        return this.hardforkIsActiveOnBlock(null, blockNumber);
    }
    /**
     * Sequence based check if given or set HF1 is greater than or equal HF2
     * @param hardfork1 Hardfork name or null (if set)
     * @param hardfork2 Hardfork name
     * @param opts Hardfork options
     * @returns True if HF1 gte HF2
     */ hardforkGteHardfork(// eslint-disable-next-line @typescript-eslint/ban-types
    _hardfork1, hardfork2) {
        const hardfork1 = _hardfork1 !== null && _hardfork1 !== void 0 ? _hardfork1 : this._hardfork;
        const hardforks = this.hardforks();
        let posHf1 = -1;
        let posHf2 = -1;
        let index = 0;
        for (const hf of hardforks){
            if (hf.name === hardfork1) posHf1 = index;
            if (hf.name === hardfork2) posHf2 = index;
            index += 1;
        }
        return posHf1 >= posHf2 && posHf2 !== -1;
    }
    /**
     * Alias to hardforkGteHardfork when hardfork is set
     * @param hardfork Hardfork name
     * @returns True if hardfork set is greater than hardfork provided
     */ gteHardfork(hardfork) {
        // eslint-disable-next-line no-null/no-null
        return this.hardforkGteHardfork(null, hardfork);
    }
    /**
     * Returns the hardfork change block for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if unscheduled
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkBlock(_hardfork) {
        var _a;
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        const block = (_a = this._getHardfork(hardfork)) === null || _a === void 0 ? void 0 : _a.block;
        // eslint-disable-next-line no-null/no-null
        if (block === undefined || block === null) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return BigInt(block);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkTimestamp(_hardfork) {
        var _a;
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        const timestamp = (_a = this._getHardfork(hardfork)) === null || _a === void 0 ? void 0 : _a.timestamp;
        // eslint-disable-next-line no-null/no-null
        if (timestamp === undefined || timestamp === null) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return BigInt(timestamp);
    }
    /**
     * Returns the hardfork change block for eip
     * @param eip EIP number
     * @returns Block number or null if unscheduled
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    eipBlock(eip) {
        for (const hfChanges of this.HARDFORK_CHANGES){
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const hf = hfChanges[1];
            if ('eips' in hf) {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                if (hf.eips.includes(eip)) {
                    return this.hardforkBlock(typeof hfChanges[0] === 'number' ? String(hfChanges[0]) : hfChanges[0]);
                }
            }
        }
        // eslint-disable-next-line no-null/no-null
        return null;
    }
    /**
     * Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Total difficulty or null if no set
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkTTD(_hardfork) {
        var _a;
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        const ttd = (_a = this._getHardfork(hardfork)) === null || _a === void 0 ? void 0 : _a.ttd;
        // eslint-disable-next-line no-null/no-null
        if (ttd === undefined || ttd === null) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return BigInt(ttd);
    }
    /**
     * True if block number provided is the hardfork (given or set) change block
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     * @deprecated
     */ isHardforkBlock(_blockNumber, _hardfork) {
        const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(_blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        const block = this.hardforkBlock(hardfork);
        return typeof block === 'bigint' && block !== BigInt(0) ? block === blockNumber : false;
    }
    /**
     * Returns the change block for the next hardfork after the hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block timestamp, number or null if not available
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    nextHardforkBlockOrTimestamp(_hardfork) {
        var _a, _b, _c;
        const hardfork = (_a = _hardfork) !== null && _a !== void 0 ? _a : this._hardfork;
        const hfs = this.hardforks();
        let hfIndex = hfs.findIndex((hf)=>hf.name === hardfork);
        // If the current hardfork is merge, go one behind as merge hf is not part of these
        // calcs even if the merge hf block is set
        if (hardfork === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge) {
            hfIndex -= 1;
        }
        // Hardfork not found
        if (hfIndex < 0) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        let currHfTimeOrBlock = (_b = hfs[hfIndex].timestamp) !== null && _b !== void 0 ? _b : hfs[hfIndex].block;
        currHfTimeOrBlock = // eslint-disable-next-line no-null/no-null
        currHfTimeOrBlock !== null && currHfTimeOrBlock !== undefined ? Number(currHfTimeOrBlock) : null;
        const nextHf = hfs.slice(hfIndex + 1).find((hf)=>{
            var _a;
            let hfTimeOrBlock = (_a = hf.timestamp) !== null && _a !== void 0 ? _a : hf.block;
            hfTimeOrBlock = // eslint-disable-next-line no-null/no-null
            hfTimeOrBlock !== null && hfTimeOrBlock !== undefined ? Number(hfTimeOrBlock) : null;
            return hf.name !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge && // eslint-disable-next-line no-null/no-null
            hfTimeOrBlock !== null && hfTimeOrBlock !== undefined && hfTimeOrBlock !== currHfTimeOrBlock;
        });
        // If no next hf found with valid block or timestamp return null
        if (nextHf === undefined) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        const nextHfBlock = (_c = nextHf.timestamp) !== null && _c !== void 0 ? _c : nextHf.block;
        // eslint-disable-next-line no-null/no-null
        if (nextHfBlock === null || nextHfBlock === undefined) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return BigInt(nextHfBlock);
    }
    /**
     * Returns the change block for the next hardfork after the hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if not available
     * @deprecated
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    nextHardforkBlock(_hardfork) {
        var _a;
        const hardfork = (_a = _hardfork) !== null && _a !== void 0 ? _a : this._hardfork;
        let hfBlock = this.hardforkBlock(hardfork);
        // If this is a merge hardfork with block not set, then we fallback to previous hardfork
        // to find the nextHardforkBlock
        // eslint-disable-next-line no-null/no-null
        if (hfBlock === null && hardfork === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge) {
            const hfs = this.hardforks();
            // eslint-disable-next-line no-null/no-null
            const mergeIndex = hfs.findIndex((hf)=>hf.ttd !== null && hf.ttd !== undefined);
            if (mergeIndex < 0) {
                throw Error(`Merge hardfork should have been found`);
            }
            hfBlock = this.hardforkBlock(hfs[mergeIndex - 1].name);
        }
        // eslint-disable-next-line no-null/no-null
        if (hfBlock === null) {
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        // Next fork block number or null if none available
        // Logic: if accumulator is still null and on the first occurrence of
        // a block greater than the current hfBlock set the accumulator,
        // pass on the accumulator as the final result from this time on
        // eslint-disable-next-line no-null/no-null, @typescript-eslint/ban-types
        const nextHfBlock = this.hardforks().reduce((acc, hf)=>{
            // We need to ignore the merge block in our next hardfork calc
            const block = BigInt(// eslint-disable-next-line no-null/no-null
            hf.block === null || hf.ttd !== undefined && hf.ttd !== null ? 0 : hf.block);
            // TypeScript can't seem to follow that the hfBlock is not null at this point
            // eslint-disable-next-line no-null/no-null
            return block > hfBlock && acc === null ? block : acc;
        // eslint-disable-next-line no-null/no-null
        }, null);
        return nextHfBlock;
    }
    /**
     * True if block number provided is the hardfork change block following the hardfork given or set
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     * @deprecated
     */ isNextHardforkBlock(_blockNumber, _hardfork) {
        const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toType"])(_blockNumber, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOutput"].BigInt);
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        // eslint-disable-next-line deprecation/deprecation
        const nextHardforkBlock = this.nextHardforkBlock(hardfork);
        // eslint-disable-next-line no-null/no-null
        return nextHardforkBlock === null ? false : nextHardforkBlock === blockNumber;
    }
    /**
     * Internal helper function to calculate a fork hash
     * @param hardfork Hardfork name
     * @param genesisHash Genesis block hash of the chain
     * @returns Fork hash as hex string
     */ _calcForkHash(hardfork, genesisHash) {
        let hfUint8Array = new Uint8Array();
        let prevBlockOrTime = 0;
        for (const hf of this.hardforks()){
            const { block, timestamp, name } = hf;
            // Timestamp to be used for timestamp based hfs even if we may bundle
            // block number with them retrospectively
            let blockOrTime = timestamp !== null && timestamp !== void 0 ? timestamp : block;
            // eslint-disable-next-line no-null/no-null
            blockOrTime = blockOrTime !== null ? Number(blockOrTime) : null;
            // Skip for chainstart (0), not applied HFs (null) and
            // when already applied on same blockOrTime HFs
            // and on the merge since forkhash doesn't change on merge hf
            if (typeof blockOrTime === 'number' && blockOrTime !== 0 && blockOrTime !== prevBlockOrTime && name !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge) {
                const hfBlockUint8Array = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(blockOrTime.toString(16).padStart(16, '0'));
                hfUint8Array = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(hfUint8Array, hfBlockUint8Array);
                prevBlockOrTime = blockOrTime;
            }
            if (hf.name === hardfork) break;
        }
        const inputUint8Array = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(genesisHash, hfUint8Array);
        // CRC32 delivers result as signed (negative) 32-bit integer,
        // convert to hex string
        // eslint-disable-next-line no-bitwise
        const forkhash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intToUint8Array"])(crc32Uint8Array(inputUint8Array) >>> 0));
        return forkhash;
    }
    /**
     * Returns an eth/64 compliant fork hash (EIP-2124)
     * @param hardfork Hardfork name, optional if HF set
     * @param genesisHash Genesis block hash of the chain, optional if already defined and not needed to be calculated
     */ forkHash(_hardfork, genesisHash) {
        const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
        const data = this._getHardfork(hardfork);
        if (// eslint-disable-next-line no-null/no-null
        data === null || (data === null || data === void 0 ? void 0 : data.block) === null && (data === null || data === void 0 ? void 0 : data.timestamp) === undefined && (data === null || data === void 0 ? void 0 : data.ttd) === undefined) {
            const msg = 'No fork hash calculation possible for future hardfork';
            throw new Error(msg);
        }
        // eslint-disable-next-line no-null/no-null
        if ((data === null || data === void 0 ? void 0 : data.forkHash) !== null && (data === null || data === void 0 ? void 0 : data.forkHash) !== undefined) {
            return data.forkHash;
        }
        if (!genesisHash) throw new Error('genesisHash required for forkHash calculation');
        return this._calcForkHash(hardfork, genesisHash);
    }
    /**
     *
     * @param forkHash Fork hash as a hex string
     * @returns Array with hardfork data (name, block, forkHash)
     */ // eslint-disable-next-line @typescript-eslint/ban-types
    hardforkForForkHash(forkHash) {
        const resArray = this.hardforks().filter((hf)=>hf.forkHash === forkHash);
        // eslint-disable-next-line no-null/no-null
        return resArray.length >= 1 ? resArray[resArray.length - 1] : null;
    }
    /**
     * Sets any missing forkHashes on the passed-in {@link Common} instance
     * @param common The {@link Common} to set the forkHashes for
     * @param genesisHash The genesis block hash
     */ setForkHashes(genesisHash) {
        var _a;
        for (const hf of this.hardforks()){
            const blockOrTime = (_a = hf.timestamp) !== null && _a !== void 0 ? _a : hf.block;
            if (// eslint-disable-next-line no-null/no-null
            (hf.forkHash === null || hf.forkHash === undefined) && // eslint-disable-next-line no-null/no-null
            (blockOrTime !== null && blockOrTime !== undefined || typeof hf.ttd !== 'undefined')) {
                hf.forkHash = this.forkHash(hf.name, genesisHash);
            }
        }
    }
    /**
     * Returns the Genesis parameters of the current chain
     * @returns Genesis dictionary
     */ genesis() {
        return this._chainParams.genesis;
    }
    /**
     * Returns the hardforks for current chain
     * @returns {Array} Array with arrays of hardforks
     */ hardforks() {
        return this._chainParams.hardforks;
    }
    /**
     * Returns bootstrap nodes for the current chain
     * @returns {Dictionary} Dict with bootstrap nodes
     */ bootstrapNodes() {
        return this._chainParams.bootstrapNodes;
    }
    /**
     * Returns DNS networks for the current chain
     * @returns {String[]} Array of DNS ENR urls
     */ dnsNetworks() {
        return this._chainParams.dnsNetworks;
    }
    /**
     * Returns the hardfork set
     * @returns Hardfork name
     */ hardfork() {
        return this._hardfork;
    }
    /**
     * Returns the Id of current chain
     * @returns chain Id
     */ chainId() {
        return BigInt(this._chainParams.chainId);
    }
    /**
     * Returns the name of current chain
     * @returns chain name (lower case)
     */ chainName() {
        return this._chainParams.name;
    }
    /**
     * Returns the Id of current network
     * @returns network Id
     */ networkId() {
        return BigInt(this._chainParams.networkId);
    }
    /**
     * Returns the active EIPs
     * @returns List of EIPs
     */ eips() {
        return this._eips;
    }
    /**
     * Returns the consensus type of the network
     * Possible values: "pow"|"poa"|"pos"
     *
     * Note: This value can update along a Hardfork.
     */ consensusType() {
        const hardfork = this.hardfork();
        let value;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if ('consensus' in hfChanges[1]) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                value = hfChanges[1].consensus.type;
            }
            if (hfChanges[0] === hardfork) break;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value !== null && value !== void 0 ? value : this._chainParams.consensus.type;
    }
    /**
     * Returns the concrete consensus implementation
     * algorithm or protocol for the network
     * e.g. "ethash" for "pow" consensus type,
     * "clique" for "poa" consensus type or
     * "casper" for "pos" consensus type.
     *
     * Note: This value can update along a Hardfork.
     */ consensusAlgorithm() {
        const hardfork = this.hardfork();
        let value;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if ('consensus' in hfChanges[1]) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                value = hfChanges[1].consensus.algorithm;
            }
            if (hfChanges[0] === hardfork) break;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value !== null && value !== void 0 ? value : this._chainParams.consensus.algorithm;
    }
    /**
     * Returns a dictionary with consensus configuration
     * parameters based on the consensus algorithm
     *
     * Expected returns (parameters must be present in
     * the respective chain json files):
     *
     * ethash: empty object
     * clique: period, epoch
     * casper: empty object
     *
     * Note: This value can update along a Hardfork.
     */ consensusConfig() {
        var _a;
        const hardfork = this.hardfork();
        let value;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if ('consensus' in hfChanges[1]) {
                // The config parameter is named after the respective consensus algorithm
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                value = hfChanges[1].consensus[hfChanges[1].consensus.algorithm];
            }
            if (hfChanges[0] === hardfork) break;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (_a = value !== null && value !== void 0 ? value : this._chainParams.consensus[this.consensusAlgorithm()]) !== null && _a !== void 0 ? _a : {};
    }
    /**
     * Returns a deep copy of this {@link Common} instance.
     */ copy() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment
        const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        copy.removeAllListeners();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return copy;
    }
    static _getInitializedChains(customChains) {
        const names = {};
        for (const [name, id] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chain"])){
            names[id] = name.toLowerCase();
        }
        const chains = {
            mainnet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$chains$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            goerli: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$chains$2f$goerli$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            sepolia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$chains$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        };
        if (customChains) {
            for (const chain of customChains){
                const { name } = chain;
                names[chain.chainId.toString()] = name;
                chains[name] = chain;
            }
        }
        chains.names = names;
        return chains;
    }
} //# sourceMappingURL=common.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Can be used in conjunction with {@link Transaction.supports}
 * to query on tx capabilities
 */ __turbopack_esm__({
    "Capability": (()=>Capability),
    "isAccessList": (()=>isAccessList),
    "isAccessListUint8Array": (()=>isAccessListUint8Array)
});
var Capability;
(function(Capability) {
    /**
     * Tx supports EIP-155 replay protection
     * See: [155](https://eips.ethereum.org/EIPS/eip-155) Replay Attack Protection EIP
     */ Capability[Capability["EIP155ReplayProtection"] = 155] = "EIP155ReplayProtection";
    /**
     * Tx supports EIP-1559 gas fee market mechanism
     * See: [1559](https://eips.ethereum.org/EIPS/eip-1559) Fee Market EIP
     */ Capability[Capability["EIP1559FeeMarket"] = 1559] = "EIP1559FeeMarket";
    /**
     * Tx is a typed transaction as defined in EIP-2718
     * See: [2718](https://eips.ethereum.org/EIPS/eip-2718) Transaction Type EIP
     */ Capability[Capability["EIP2718TypedTransaction"] = 2718] = "EIP2718TypedTransaction";
    /**
     * Tx supports access list generation as defined in EIP-2930
     * See: [2930](https://eips.ethereum.org/EIPS/eip-2930) Access Lists EIP
     */ Capability[Capability["EIP2930AccessLists"] = 2930] = "EIP2930AccessLists";
})(Capability || (Capability = {}));
function isAccessListUint8Array(input) {
    if (input.length === 0) {
        return true;
    }
    const firstItem = input[0];
    if (Array.isArray(firstItem)) {
        return true;
    }
    return false;
}
function isAccessList(input) {
    return !isAccessListUint8Array(input); // This is exactly the same method, except the output is negated.
} //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/address.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "Address": (()=>Address)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
;
;
;
;
class Address {
    constructor(buf){
        if (buf.length !== 20) {
            throw new Error('Invalid address length');
        }
        this.buf = buf;
    }
    /**
     * Returns the zero address.
     */ static zero() {
        return new Address((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"])(20));
    }
    /**
     * Is address equal to another.
     */ equals(address) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayEquals"])(this.buf, address.buf);
    }
    /**
     * Is address zero.
     */ isZero() {
        return this.equals(Address.zero());
    }
    /**
     * Returns hex encoding of address.
     */ toString() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.buf);
    }
    /**
     * Returns Uint8Array representation of address.
     */ toArray() {
        return this.buf;
    }
    /**
     * Returns the ethereum address of a given public key.
     * Accepts "Ethereum public keys" and SEC1 encoded keys.
     * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
     * @param sanitize Accept public keys in other formats
     */ static publicToAddress(_pubKey, sanitize = false) {
        let pubKey = _pubKey;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsUint8Array"])(pubKey);
        if (sanitize && pubKey.length !== 64) {
            pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex(pubKey).toRawBytes(false).slice(1);
        }
        if (pubKey.length !== 64) {
            throw new Error('Expected pubKey to be of length 64');
        }
        // Only take the lower 160bits of the hash
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(pubKey).slice(-20);
    }
} //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkMaxInitCodeSize": (()=>checkMaxInitCodeSize),
    "getAccessListData": (()=>getAccessListData),
    "getAccessListJSON": (()=>getAccessListJSON),
    "getDataFeeEIP2930": (()=>getDataFeeEIP2930),
    "verifyAccessList": (()=>verifyAccessList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
;
;
;
const checkMaxInitCodeSize = (common, length)=>{
    const maxInitCodeSize = common.param('vm', 'maxInitCodeSize');
    if (maxInitCodeSize && BigInt(length) > maxInitCodeSize) {
        throw new Error(`the initcode size of this transaction is too large: it is ${length} while the max is ${common.param('vm', 'maxInitCodeSize')}`);
    }
};
const getAccessListData = (accessList)=>{
    let AccessListJSON;
    let uint8arrayAccessList;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAccessList"])(accessList)) {
        AccessListJSON = accessList;
        const newAccessList = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let i = 0; i < accessList.length; i += 1){
            const item = accessList[i];
            const addressBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(item.address);
            const storageItems = [];
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for(let index = 0; index < item.storageKeys.length; index += 1){
                storageItems.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(item.storageKeys[index]));
            }
            newAccessList.push([
                addressBytes,
                storageItems
            ]);
        }
        uint8arrayAccessList = newAccessList;
    } else {
        uint8arrayAccessList = accessList !== null && accessList !== void 0 ? accessList : [];
        // build the JSON
        const json = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let i = 0; i < uint8arrayAccessList.length; i += 1){
            const data = uint8arrayAccessList[i];
            const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(data[0]);
            const storageKeys = [];
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for(let item = 0; item < data[1].length; item += 1){
                storageKeys.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(data[1][item]));
            }
            const jsonItem = {
                address,
                storageKeys
            };
            json.push(jsonItem);
        }
        AccessListJSON = json;
    }
    return {
        AccessListJSON,
        accessList: uint8arrayAccessList
    };
};
const verifyAccessList = (accessList)=>{
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let key = 0; key < accessList.length; key += 1){
        const accessListItem = accessList[key];
        const address = accessListItem[0];
        const storageSlots = accessListItem[1];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/consistent-type-assertions
        if (accessListItem[2] !== undefined) {
            throw new Error('Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.');
        }
        if (address.length !== 20) {
            throw new Error('Invalid EIP-2930 transaction: address length should be 20 bytes');
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let storageSlot = 0; storageSlot < storageSlots.length; storageSlot += 1){
            if (storageSlots[storageSlot].length !== 32) {
                throw new Error('Invalid EIP-2930 transaction: storage slot length should be 32 bytes');
            }
        }
    }
};
const getAccessListJSON = (accessList)=>{
    const accessListJSON = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let index = 0; index < accessList.length; index += 1){
        const item = accessList[index];
        const JSONItem = {
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLengthLeft"])(item[0], 20)),
            storageKeys: []
        };
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        const storageSlots = item && item[1];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let slot = 0; slot < storageSlots.length; slot += 1){
            const storageSlot = storageSlots[slot];
            JSONItem.storageKeys.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLengthLeft"])(storageSlot, 32)));
        }
        accessListJSON.push(JSONItem);
    }
    return accessListJSON;
};
const getDataFeeEIP2930 = (accessList, common)=>{
    const accessListStorageKeyCost = common.param('gasPrices', 'accessListStorageKeyCost');
    const accessListAddressCost = common.param('gasPrices', 'accessListAddressCost');
    let slots = 0;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let index = 0; index < accessList.length; index += 1){
        const item = accessList[index];
        const storageSlots = item[1];
        slots += storageSlots.length;
    }
    const addresses = accessList.length;
    return addresses * Number(accessListAddressCost) + slots * Number(accessListStorageKeyCost);
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/baseTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "BaseTransaction": (()=>BaseTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class BaseTransaction {
    constructor(txData, opts){
        var _a, _b;
        this.cache = {
            hash: undefined,
            dataFee: undefined
        };
        /**
         * List of tx type defining EIPs,
         * e.g. 1559 (fee market) and 2930 (access lists)
         * for FeeMarketEIP1559Transaction objects
         */ this.activeCapabilities = [];
        /**
         * The default chain the tx falls back to if no Common
         * is provided and if the chain can't be derived from
         * a passed in chainId (only EIP-2718 typed txs) or
         * EIP-155 signature (legacy txs).
         *
         * @hidden
         */ this.DEFAULT_CHAIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chain"].Mainnet;
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */ this.DEFAULT_HARDFORK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hardfork"].Merge;
        const { nonce, gasLimit, to, value, data, v, r, s, type } = txData;
        this._type = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(type)));
        this.txOptions = opts;
        const toB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(to === '' ? '0x' : to);
        const vB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(v === '' ? '0x' : v);
        const rB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(r === '' ? '0x' : r);
        const sB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(s === '' ? '0x' : s);
        this.nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(nonce === '' ? '0x' : nonce));
        this.gasLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(gasLimit === '' ? '0x' : gasLimit));
        this.to = toB.length > 0 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](toB) : undefined;
        this.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(value === '' ? '0x' : value));
        this.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(data === '' ? '0x' : data);
        this.v = vB.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(vB) : undefined;
        this.r = rB.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(rB) : undefined;
        this.s = sB.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(sB) : undefined;
        this._validateCannotExceedMaxInteger({
            value: this.value,
            r: this.r,
            s: this.s
        });
        // geth limits gasLimit to 2^64-1
        this._validateCannotExceedMaxInteger({
            gasLimit: this.gasLimit
        }, 64);
        // EIP-2681 limits nonce to 2^64-1 (cannot equal 2^64-1)
        this._validateCannotExceedMaxInteger({
            nonce: this.nonce
        }, 64, true);
        // eslint-disable-next-line no-null/no-null
        const createContract = this.to === undefined || this.to === null;
        const allowUnlimitedInitCodeSize = (_a = opts.allowUnlimitedInitCodeSize) !== null && _a !== void 0 ? _a : false;
        const common = (_b = opts.common) !== null && _b !== void 0 ? _b : this._getCommon();
        if (createContract && common.isActivatedEIP(3860) && !allowUnlimitedInitCodeSize) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMaxInitCodeSize"])(common, this.data.length);
        }
    }
    /**
     * Returns the transaction type.
     *
     * Note: legacy txs will return tx type `0`.
     */ get type() {
        return this._type;
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilites` in the `types` module for a reference
     * on all supported capabilities.
     */ supports(capability) {
        return this.activeCapabilities.includes(capability);
    }
    validate(stringError = false) {
        const errors = [];
        if (this.getBaseFee() > this.gasLimit) {
            errors.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`);
        }
        if (this.isSigned() && !this.verifySignature()) {
            errors.push('Invalid Signature');
        }
        return stringError ? errors : errors.length === 0;
    }
    _validateYParity() {
        const { v } = this;
        if (v !== undefined && v !== BigInt(0) && v !== BigInt(1)) {
            const msg = this._errorMsg('The y-parity of the transaction should either be 0 or 1');
            throw new Error(msg);
        }
    }
    /**
     * EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
     * Reasoning: https://ethereum.stackexchange.com/a/55728
     */ _validateHighS() {
        const { s } = this;
        if (this.common.gteHardfork('homestead') && s !== undefined && s > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECP256K1_ORDER_DIV_2"]) {
            const msg = this._errorMsg('Invalid Signature: s-values greater than secp256k1n/2 are considered invalid');
            throw new Error(msg);
        }
    }
    /**
     * The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
     */ getBaseFee() {
        const txFee = this.common.param('gasPrices', 'tx');
        let fee = this.getDataFee();
        if (txFee) fee += txFee;
        if (this.common.gteHardfork('homestead') && this.toCreationAddress()) {
            const txCreationFee = this.common.param('gasPrices', 'txCreation');
            if (txCreationFee) fee += txCreationFee;
        }
        return fee;
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        const txDataZero = this.common.param('gasPrices', 'txDataZero');
        const txDataNonZero = this.common.param('gasPrices', 'txDataNonZero');
        let cost = BigInt(0);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let i = 0; i < this.data.length; i += 1){
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-unused-expressions
            this.data[i] === 0 ? cost += txDataZero : cost += txDataNonZero;
        }
        // eslint-disable-next-line no-null/no-null
        if ((this.to === undefined || this.to === null) && this.common.isActivatedEIP(3860)) {
            const dataLength = BigInt(Math.ceil(this.data.length / 32));
            const initCodeCost = this.common.param('gasPrices', 'initCodeWordCost') * dataLength;
            cost += initCodeCost;
        }
        return cost;
    }
    /**
     * If the tx's `to` is to the creation address
     */ toCreationAddress() {
        return this.to === undefined || this.to.buf.length === 0;
    }
    isSigned() {
        const { v, r, s } = this;
        if (v === undefined || r === undefined || s === undefined) {
            return false;
        }
        return true;
    }
    /**
     * Determines if the signature is valid
     */ verifySignature() {
        try {
            // Main signature verification is done in `getSenderPublicKey()`
            const publicKey = this.getSenderPublicKey();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpadUint8Array"])(publicKey).length !== 0;
        } catch (e) {
            return false;
        }
    }
    /**
     * Returns the sender's address
     */ getSenderAddress() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"].publicToAddress(this.getSenderPublicKey()));
    }
    /**
     * Signs a transaction.
     *
     * Note that the signed tx is returned as a new object,
     * use as follows:
     * ```javascript
     * const signedTx = tx.sign(privateKey)
     * ```
     */ sign(privateKey) {
        if (privateKey.length !== 32) {
            const msg = this._errorMsg('Private key must be 32 bytes in length.');
            throw new Error(msg);
        }
        // Hack for the constellation that we have got a legacy tx after spuriousDragon with a non-EIP155 conforming signature
        // and want to recreate a signature (where EIP155 should be applied)
        // Leaving this hack lets the legacy.spec.ts -> sign(), verifySignature() test fail
        // 2021-06-23
        let hackApplied = false;
        if (this.type === 0 && this.common.gteHardfork('spuriousDragon') && !this.supports(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection)) {
            this.activeCapabilities.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection);
            hackApplied = true;
        }
        const msgHash = this.getMessageToSign(true);
        const { v, r, s } = this._ecsign(msgHash, privateKey);
        const tx = this._processSignature(v, r, s);
        // Hack part 2
        if (hackApplied) {
            const index = this.activeCapabilities.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection);
            if (index > -1) {
                this.activeCapabilities.splice(index, 1);
            }
        }
        return tx;
    }
    /**
     * Does chain ID checks on common and returns a common
     * to be used on instantiation
     * @hidden
     *
     * @param common - {@link Common} instance from tx options
     * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
     */ _getCommon(common, chainId) {
        var _a, _b, _c, _d;
        // TODO: this function needs to be reviewed and the code to be more clean
        // check issue https://github.com/web3/web3.js/issues/6666
        // Chain ID provided
        if (chainId !== undefined) {
            const chainIdBigInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(chainId));
            if (common) {
                if (common.chainId() !== chainIdBigInt) {
                    const msg = this._errorMsg('The chain ID does not match the chain ID of Common');
                    throw new Error(msg);
                }
                // Common provided, chain ID does match
                // -> Return provided Common
                return common.copy();
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Common"].isSupportedChainId(chainIdBigInt)) {
                // No Common, chain ID supported by Common
                // -> Instantiate Common with chain ID
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Common"]({
                    chain: chainIdBigInt,
                    hardfork: this.DEFAULT_HARDFORK
                });
            }
            // No Common, chain ID not supported by Common
            // -> Instantiate custom Common derived from DEFAULT_CHAIN
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Common"].custom({
                name: 'custom-chain',
                networkId: chainIdBigInt,
                chainId: chainIdBigInt
            }, {
                baseChain: this.DEFAULT_CHAIN,
                hardfork: this.DEFAULT_HARDFORK
            });
        }
        // No chain ID provided
        // -> return Common provided or create new default Common
        if ((common === null || common === void 0 ? void 0 : common.copy) && typeof (common === null || common === void 0 ? void 0 : common.copy) === 'function') {
            return common.copy();
        }
        // TODO: Recheck this next block when working on https://github.com/web3/web3.js/issues/6666
        // This block is to handle when `chainId` was not passed and the `common` object does not have `copy()`
        // If it was meant to be unsupported to process `common` in this case, an exception should be thrown instead of the following block
        if (common) {
            const hardfork = typeof common.hardfork === 'function' ? common.hardfork() : common.hardfork;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Common"].custom({
                name: 'custom-chain',
                networkId: common.networkId ? common.networkId() : (_b = BigInt((_a = common.customChain) === null || _a === void 0 ? void 0 : _a.networkId)) !== null && _b !== void 0 ? _b : undefined,
                chainId: common.chainId ? common.chainId() : (_d = BigInt((_c = common.customChain) === null || _c === void 0 ? void 0 : _c.chainId)) !== null && _d !== void 0 ? _d : undefined
            }, {
                baseChain: this.DEFAULT_CHAIN,
                hardfork: hardfork || this.DEFAULT_HARDFORK
            });
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Common"]({
            chain: this.DEFAULT_CHAIN,
            hardfork: this.DEFAULT_HARDFORK
        });
    }
    /**
     * Validates that an object with BigInt values cannot exceed the specified bit limit.
     * @param values Object containing string keys and BigInt values
     * @param bits Number of bits to check (64 or 256)
     * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
     */ _validateCannotExceedMaxInteger(values, bits = 256, cannotEqual = false) {
        for (const [key, value] of Object.entries(values)){
            switch(bits){
                case 64:
                    if (cannotEqual) {
                        if (value !== undefined && value >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_UINT64"]) {
                            const msg = this._errorMsg(`${key} cannot equal or exceed MAX_UINT64 (2^64-1), given ${value}`);
                            throw new Error(msg);
                        }
                    } else if (value !== undefined && value > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_UINT64"]) {
                        const msg = this._errorMsg(`${key} cannot exceed MAX_UINT64 (2^64-1), given ${value}`);
                        throw new Error(msg);
                    }
                    break;
                case 256:
                    if (cannotEqual) {
                        if (value !== undefined && value >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_INTEGER"]) {
                            const msg = this._errorMsg(`${key} cannot equal or exceed MAX_INTEGER (2^256-1), given ${value}`);
                            throw new Error(msg);
                        }
                    } else if (value !== undefined && value > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_INTEGER"]) {
                        const msg = this._errorMsg(`${key} cannot exceed MAX_INTEGER (2^256-1), given ${value}`);
                        throw new Error(msg);
                    }
                    break;
                default:
                    {
                        const msg = this._errorMsg('unimplemented bits value');
                        throw new Error(msg);
                    }
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static _validateNotArray(values) {
        const txDataKeys = [
            'nonce',
            'gasPrice',
            'gasLimit',
            'to',
            'value',
            'data',
            'v',
            'r',
            's',
            'type',
            'baseFee',
            'maxFeePerGas',
            'chainId'
        ];
        for (const [key, value] of Object.entries(values)){
            if (txDataKeys.includes(key)) {
                if (Array.isArray(value)) {
                    throw new Error(`${key} cannot be an array`);
                }
            }
        }
    }
    /**
     * Returns the shared error postfix part for _error() method
     * tx type implementations.
     */ _getSharedErrorPostfix() {
        let hash = '';
        try {
            hash = this.isSigned() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.hash()) : 'not available (unsigned)';
        } catch (e) {
            hash = 'error';
        }
        let isSigned = '';
        try {
            isSigned = this.isSigned().toString();
        } catch (e) {
            hash = 'error';
        }
        let hf = '';
        try {
            hf = this.common.hardfork();
        } catch (e) {
            hf = 'error';
        }
        let postfix = `tx type=${this.type} hash=${hash} nonce=${this.nonce} value=${this.value} `;
        postfix += `signed=${isSigned} hf=${hf}`;
        return postfix;
    }
    // eslint-disable-next-line class-methods-use-this
    _ecsign(msgHash, privateKey, chainId) {
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].sign(msgHash, privateKey);
        const signatureBytes = signature.toCompactRawBytes();
        const r = signatureBytes.subarray(0, 32);
        const s = signatureBytes.subarray(32, 64);
        const v = chainId === undefined ? BigInt(signature.recovery + 27) : BigInt(signature.recovery + 35) + BigInt(chainId) * BigInt(2);
        return {
            r,
            s,
            v
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromSerializedTx(// @ts-expect-error unused variable
    serialized, // @ts-expect-error unused variable
    opts = {}) {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromTxData(// @ts-expect-error unused variable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    txData, // @ts-expect-error unused variable
    opts = {}) {}
} //# sourceMappingURL=baseTransaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/eip1559Transaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "FeeMarketEIP1559Transaction": (()=>FeeMarketEIP1559Transaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ethereumjs+rlp@4.0.1/node_modules/@ethereumjs/rlp/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/baseTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const TRANSACTION_TYPE = 2;
const TRANSACTION_TYPE_UINT8ARRAY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(TRANSACTION_TYPE.toString(16).padStart(2, '0'));
class FeeMarketEIP1559Transaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransaction"] {
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, v, r, s }
     *
     * Notes:
     * - `chainId` will be set automatically if not provided
     * - All parameters are optional and have some basic default values
     */ static fromTxData(txData, opts = {}) {
        return new FeeMarketEIP1559Transaction(txData, opts);
    }
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     */ static fromSerializedTx(serialized, opts = {}) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayEquals"])(serialized.subarray(0, 1), TRANSACTION_TYPE_UINT8ARRAY)) {
            throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ${TRANSACTION_TYPE}, received: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(serialized.subarray(0, 1))}`);
        }
        const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].decode(serialized.subarray(1));
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized tx input: must be array');
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return FeeMarketEIP1559Transaction.fromValuesArray(values, opts);
    }
    /**
     * Create a transaction from a values array.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     */ static fromValuesArray(values, opts = {}) {
        if (values.length !== 9 && values.length !== 12) {
            throw new Error('Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).');
        }
        const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, v, r, s] = values;
        this._validateNotArray({
            chainId,
            v
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNoLeadingZeroes"])({
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gasLimit,
            value,
            v,
            r,
            s
        });
        return new FeeMarketEIP1559Transaction({
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(chainId),
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gasLimit,
            to,
            value,
            data,
            accessList: accessList !== null && accessList !== void 0 ? accessList : [],
            v: v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(v) : undefined,
            r,
            s
        }, opts);
    }
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        var _a;
        super(Object.assign(Object.assign({}, txData), {
            type: TRANSACTION_TYPE
        }), opts);
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */ this.DEFAULT_HARDFORK = 'london';
        const { chainId, accessList, maxFeePerGas, maxPriorityFeePerGas } = txData;
        this.common = this._getCommon(opts.common, chainId);
        this.chainId = this.common.chainId();
        if (!this.common.isActivatedEIP(1559)) {
            throw new Error('EIP-1559 not enabled on Common');
        }
        this.activeCapabilities = this.activeCapabilities.concat([
            1559,
            2718,
            2930
        ]);
        // Populate the access list fields
        const accessListData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessListData"])(accessList !== null && accessList !== void 0 ? accessList : []);
        this.accessList = accessListData.accessList;
        this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAccessList"])(this.accessList);
        this.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(maxFeePerGas === '' ? '0x' : maxFeePerGas));
        this.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(maxPriorityFeePerGas === '' ? '0x' : maxPriorityFeePerGas));
        this._validateCannotExceedMaxInteger({
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransaction"]._validateNotArray(txData);
        if (this.gasLimit * this.maxFeePerGas > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_INTEGER"]) {
            const msg = this._errorMsg('gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)');
            throw new Error(msg);
        }
        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
            const msg = this._errorMsg('maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)');
            throw new Error(msg);
        }
        this._validateYParity();
        this._validateHighS();
        const freeze = (_a = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a !== void 0 ? _a : true;
        if (freeze) {
            Object.freeze(this);
        }
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
            return this.cache.dataFee.value;
        }
        let cost = super.getDataFee();
        cost += BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFeeEIP2930"])(this.accessList, this.common));
        if (Object.isFrozen(this)) {
            this.cache.dataFee = {
                value: cost,
                hardfork: this.common.hardfork()
            };
        }
        return cost;
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */ getUpfrontCost(baseFee = BigInt(0)) {
        const prio = this.maxPriorityFeePerGas;
        const maxBase = this.maxFeePerGas - baseFee;
        const inclusionFeePerGas = prio < maxBase ? prio : maxBase;
        const gasPrice = inclusionFeePerGas + baseFee;
        return this.gasLimit * gasPrice + this.value;
    }
    /**
     * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-1559 transaction, in order.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     *
     * Use {@link FeeMarketEIP1559Transaction.serialize} to add a transaction to a block
     * with {@link Block.fromValuesArray}.
     *
     * For an unsigned tx this method uses the empty Uint8Array values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link FeeMarketEIP1559Transaction.getMessageToSign}.
     */ raw() {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.chainId),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.nonce),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.maxPriorityFeePerGas),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.maxFeePerGas),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasLimit),
            this.to !== undefined ? this.to.buf : Uint8Array.from([]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.value),
            this.data,
            this.accessList,
            this.v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.v) : Uint8Array.from([]),
            this.r !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.r) : Uint8Array.from([]),
            this.s !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.s) : Uint8Array.from([])
        ];
    }
    /**
     * Returns the serialized encoding of the EIP-1559 transaction.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */ serialize() {
        const base = this.raw();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(TRANSACTION_TYPE_UINT8ARRAY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(base));
    }
    /**
     * Returns the serialized unsigned tx (hashed or raw), which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
     * ```
     *
     * @param hashMessage - Return hashed message if set to true (default: true)
     */ getMessageToSign(hashMessage = true) {
        const base = this.raw().slice(0, 9);
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(TRANSACTION_TYPE_UINT8ARRAY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(base));
        if (hashMessage) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(message);
        }
        return message;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */ hash() {
        if (!this.isSigned()) {
            const msg = this._errorMsg('Cannot call hash method if transaction is not signed');
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) {
                this.cache.hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(this.serialize());
            }
            return this.cache.hash;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(this.serialize());
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */ getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        if (!this.isSigned()) {
            const msg = this._errorMsg('Cannot call this method if transaction is not signed');
            throw new Error(msg);
        }
        const msgHash = this.getMessageToVerifySignature();
        const { v, r, s } = this;
        this._validateHighS();
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ecrecover"])(msgHash, v + BigInt(27), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(s));
        } catch (e) {
            const msg = this._errorMsg('Invalid Signature');
            throw new Error(msg);
        }
    }
    _processSignature(v, r, s) {
        const opts = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return FeeMarketEIP1559Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            maxFeePerGas: this.maxFeePerGas,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: v - BigInt(27),
            r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(r),
            s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(s)
        }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     */ toJSON() {
        const accessListJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessListJSON"])(this.accessList);
        return {
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.chainId),
            nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.nonce),
            maxPriorityFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.maxPriorityFeePerGas),
            maxFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.maxFeePerGas),
            gasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.value),
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.v) : undefined,
            r: this.r !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.r) : undefined,
            s: this.s !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.s) : undefined
        };
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        let errorStr = this._getSharedErrorPostfix();
        errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
} //# sourceMappingURL=eip1559Transaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/eip2930Transaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "AccessListEIP2930Transaction": (()=>AccessListEIP2930Transaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ethereumjs+rlp@4.0.1/node_modules/@ethereumjs/rlp/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/baseTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const TRANSACTION_TYPE = 1;
const TRANSACTION_TYPE_UINT8ARRAY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(TRANSACTION_TYPE.toString(16).padStart(2, '0'));
class AccessListEIP2930Transaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransaction"] {
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * v, r, s }
     *
     * Notes:
     * - `chainId` will be set automatically if not provided
     * - All parameters are optional and have some basic default values
     */ static fromTxData(txData, opts = {}) {
        return new AccessListEIP2930Transaction(txData, opts);
    }
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     */ static fromSerializedTx(serialized, opts = {}) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayEquals"])(serialized.subarray(0, 1), TRANSACTION_TYPE_UINT8ARRAY)) {
            throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ${TRANSACTION_TYPE}, received: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(serialized.subarray(0, 1))}`);
        }
        const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].decode(Uint8Array.from(serialized.subarray(1)));
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized tx input: must be array');
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return AccessListEIP2930Transaction.fromValuesArray(values, opts);
    }
    /**
     * Create a transaction from a values array.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     */ static fromValuesArray(values, opts = {}) {
        if (values.length !== 8 && values.length !== 11) {
            throw new Error('Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).');
        }
        const [chainId, nonce, gasPrice, gasLimit, to, value, data, accessList, v, r, s] = values;
        this._validateNotArray({
            chainId,
            v
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNoLeadingZeroes"])({
            nonce,
            gasPrice,
            gasLimit,
            value,
            v,
            r,
            s
        });
        const emptyAccessList = [];
        return new AccessListEIP2930Transaction({
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(chainId),
            nonce,
            gasPrice,
            gasLimit,
            to,
            value,
            data,
            accessList: accessList !== null && accessList !== void 0 ? accessList : emptyAccessList,
            v: v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(v) : undefined,
            r,
            s
        }, opts);
    }
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        var _a;
        super(Object.assign(Object.assign({}, txData), {
            type: TRANSACTION_TYPE
        }), opts);
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */ this.DEFAULT_HARDFORK = 'berlin';
        const { chainId, accessList, gasPrice } = txData;
        this.common = this._getCommon(opts.common, chainId);
        this.chainId = this.common.chainId();
        // EIP-2718 check is done in Common
        if (!this.common.isActivatedEIP(2930)) {
            throw new Error('EIP-2930 not enabled on Common');
        }
        this.activeCapabilities = this.activeCapabilities.concat([
            2718,
            2930
        ]);
        // Populate the access list fields
        const accessListData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessListData"])(accessList !== null && accessList !== void 0 ? accessList : []);
        this.accessList = accessListData.accessList;
        this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAccessList"])(this.accessList);
        this.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(gasPrice === '' ? '0x' : gasPrice));
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransaction"]._validateNotArray(txData);
        if (this.gasPrice * this.gasLimit > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_INTEGER"]) {
            const msg = this._errorMsg('gasLimit * gasPrice cannot exceed MAX_INTEGER');
            throw new Error(msg);
        }
        this._validateYParity();
        this._validateHighS();
        const freeze = (_a = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a !== void 0 ? _a : true;
        if (freeze) {
            Object.freeze(this);
        }
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
            return this.cache.dataFee.value;
        }
        let cost = super.getDataFee();
        cost += BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataFeeEIP2930"])(this.accessList, this.common));
        if (Object.isFrozen(this)) {
            this.cache.dataFee = {
                value: cost,
                hardfork: this.common.hardfork()
            };
        }
        return cost;
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     */ getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value;
    }
    /**
     * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-2930 transaction, in order.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     *
     * Use {@link AccessListEIP2930Transaction.serialize} to add a transaction to a block
     * with {@link Block.fromValuesArray}.
     *
     * For an unsigned tx this method uses the empty UINT8ARRAY values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link AccessListEIP2930Transaction.getMessageToSign}.
     */ raw() {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.chainId),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.nonce),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasPrice),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasLimit),
            this.to !== undefined ? this.to.buf : Uint8Array.from([]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.value),
            this.data,
            this.accessList,
            this.v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.v) : Uint8Array.from([]),
            this.r !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.r) : Uint8Array.from([]),
            this.s !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.s) : Uint8Array.from([])
        ];
    }
    /**
     * Returns the serialized encoding of the EIP-2930 transaction.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */ serialize() {
        const base = this.raw();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(TRANSACTION_TYPE_UINT8ARRAY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(base));
    }
    /**
     * Returns the serialized unsigned tx (hashed or raw), which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
     * ```
     *
     * @param hashMessage - Return hashed message if set to true (default: true)
     */ getMessageToSign(hashMessage = true) {
        const base = this.raw().slice(0, 8);
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(TRANSACTION_TYPE_UINT8ARRAY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(base));
        if (hashMessage) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(message);
        }
        return message;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */ hash() {
        if (!this.isSigned()) {
            const msg = this._errorMsg('Cannot call hash method if transaction is not signed');
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) {
                this.cache.hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(this.serialize());
            }
            return this.cache.hash;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(this.serialize());
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */ getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        if (!this.isSigned()) {
            const msg = this._errorMsg('Cannot call this method if transaction is not signed');
            throw new Error(msg);
        }
        const msgHash = this.getMessageToVerifySignature();
        const { v, r, s } = this;
        this._validateHighS();
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ecrecover"])(msgHash, v + BigInt(27), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(s));
        } catch (e) {
            const msg = this._errorMsg('Invalid Signature');
            throw new Error(msg);
        }
    }
    _processSignature(v, r, s) {
        const opts = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return AccessListEIP2930Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: v - BigInt(27),
            r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(r),
            s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(s)
        }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     */ toJSON() {
        const accessListJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessListJSON"])(this.accessList);
        return {
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.chainId),
            nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.nonce),
            gasPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.gasPrice),
            gasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.value),
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.v) : undefined,
            r: this.r !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.r) : undefined,
            s: this.s !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.s) : undefined
        };
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        var _a, _b;
        let errorStr = this._getSharedErrorPostfix();
        // Keep ? for this.accessList since this otherwise causes Hardhat E2E tests to fail
        errorStr += ` gasPrice=${this.gasPrice} accessListCount=${(_b = (_a = this.accessList) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
} //# sourceMappingURL=eip2930Transaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/legacyTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "Transaction": (()=>Transaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ethereumjs+rlp@4.0.1/node_modules/@ethereumjs/rlp/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/keccak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/baseTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const TRANSACTION_TYPE = 0;
function meetsEIP155(_v, chainId) {
    const v = Number(_v);
    const chainIdDoubled = Number(chainId) * 2;
    return v === chainIdDoubled + 35 || v === chainIdDoubled + 36;
}
class Transaction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransaction"] {
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
     *
     * Notes:
     * - All parameters are optional and have some basic default values
     */ static fromTxData(txData, opts = {}) {
        return new Transaction(txData, opts);
    }
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     */ static fromSerializedTx(serialized, opts = {}) {
        const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].decode(serialized);
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized tx input. Must be array');
        }
        return this.fromValuesArray(values, opts);
    }
    /**
     * Create a transaction from a values array.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     */ static fromValuesArray(values, opts = {}) {
        // If length is not 6, it has length 9. If v/r/s are empty Uint8Array, it is still an unsigned transaction
        // This happens if you get the RLP data from `raw()`
        if (values.length !== 6 && values.length !== 9) {
            throw new Error('Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).');
        }
        const [nonce, gasPrice, gasLimit, to, value, data, v, r, s] = values;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateNoLeadingZeroes"])({
            nonce,
            gasPrice,
            gasLimit,
            value,
            v,
            r,
            s
        });
        return new Transaction({
            nonce,
            gasPrice,
            gasLimit,
            to,
            value,
            data,
            v,
            r,
            s
        }, opts);
    }
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        var _a;
        super(Object.assign(Object.assign({}, txData), {
            type: TRANSACTION_TYPE
        }), opts);
        this.common = this._validateTxV(this.v, opts.common);
        this.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(txData.gasPrice === '' ? '0x' : txData.gasPrice));
        if (this.gasPrice * this.gasLimit > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_INTEGER"]) {
            const msg = this._errorMsg('gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)');
            throw new Error(msg);
        }
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransaction"]._validateNotArray(txData);
        if (this.common.gteHardfork('spuriousDragon')) {
            if (!this.isSigned()) {
                this.activeCapabilities.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection);
            } else {
                // EIP155 spec:
                // If block.number >= 2,675,000 and v = CHAIN_ID * 2 + 35 or v = CHAIN_ID * 2 + 36
                // then when computing the hash of a transaction for purposes of signing or recovering
                // instead of hashing only the first six elements (i.e. nonce, gasprice, startgas, to, value, data)
                // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0.
                // v and chain ID meet EIP-155 conditions
                // eslint-disable-next-line no-lonely-if
                if (meetsEIP155(this.v, this.common.chainId())) {
                    this.activeCapabilities.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection);
                }
            }
        }
        const freeze = (_a = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a !== void 0 ? _a : true;
        if (freeze) {
            Object.freeze(this);
        }
    }
    /**
     * Returns a Uint8Array Array of the raw Uint8Arrays of the legacy transaction, in order.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     *
     * For legacy txs this is also the correct format to add transactions
     * to a block with {@link Block.fromValuesArray} (use the `serialize()` method
     * for typed txs).
     *
     * For an unsigned tx this method returns the empty Uint8Array values
     * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
     * representation have a look at {@link Transaction.getMessageToSign}.
     */ raw() {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.nonce),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasPrice),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasLimit),
            this.to !== undefined ? this.to.buf : Uint8Array.from([]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.value),
            this.data,
            this.v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.v) : Uint8Array.from([]),
            this.r !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.r) : Uint8Array.from([]),
            this.s !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.s) : Uint8Array.from([])
        ];
    }
    /**
     * Returns the serialized encoding of the legacy transaction.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     *
     * For an unsigned tx this method uses the empty Uint8Array values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link Transaction.getMessageToSign}.
     */ serialize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(this.raw());
    }
    _getMessageToSign() {
        const values = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.nonce),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasPrice),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.gasLimit),
            this.to !== undefined ? this.to.buf : Uint8Array.from([]),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(this.value),
            this.data
        ];
        if (this.supports(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection)) {
            values.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(this.common.chainId()));
            values.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpadUint8Array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(0)));
            values.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpadUint8Array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(0)));
        }
        return values;
    }
    getMessageToSign(hashMessage = true) {
        const message = this._getMessageToSign();
        if (hashMessage) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(message));
        }
        return message;
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
            return this.cache.dataFee.value;
        }
        if (Object.isFrozen(this)) {
            this.cache.dataFee = {
                value: super.getDataFee(),
                hardfork: this.common.hardfork()
            };
        }
        return super.getDataFee();
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     */ getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */ hash() {
        if (!this.isSigned()) {
            const msg = this._errorMsg('Cannot call hash method if transaction is not signed');
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) {
                this.cache.hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(this.raw()));
            }
            return this.cache.hash;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(this.raw()));
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */ getMessageToVerifySignature() {
        if (!this.isSigned()) {
            const msg = this._errorMsg('This transaction is not signed');
            throw new Error(msg);
        }
        const message = this._getMessageToSign();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$keccak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ethereumjs$2b$rlp$40$4$2e$0$2e$1$2f$node_modules$2f40$ethereumjs$2f$rlp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RLP"].encode(message));
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        const msgHash = this.getMessageToVerifySignature();
        const { v, r, s } = this;
        this._validateHighS();
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ecrecover"])(msgHash, v, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToUnpaddedUint8Array"])(s), this.supports(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection) ? this.common.chainId() : undefined);
        } catch (e) {
            const msg = this._errorMsg('Invalid Signature');
            throw new Error(msg);
        }
    }
    /**
     * Process the v, r, s values from the `sign` method of the base transaction.
     */ _processSignature(_v, r, s) {
        let v = _v;
        if (this.supports(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capability"].EIP155ReplayProtection)) {
            v += this.common.chainId() * BigInt(2) + BigInt(8);
        }
        const opts = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return Transaction.fromTxData({
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            v,
            r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(r),
            s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])(s)
        }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction.
     */ toJSON() {
        return {
            nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.nonce),
            gasPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.gasPrice),
            gasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.value),
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data),
            v: this.v !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.v) : undefined,
            r: this.r !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.r) : undefined,
            s: this.s !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigIntToHex"])(this.s) : undefined
        };
    }
    /**
     * Validates tx's `v` value
     */ _validateTxV(_v, common) {
        let chainIdBigInt;
        const v = _v !== undefined ? Number(_v) : undefined;
        // Check for valid v values in the scope of a signed legacy tx
        if (v !== undefined) {
            // v is 1. not matching the EIP-155 chainId included case and...
            // v is 2. not matching the classic v=27 or v=28 case
            if (v < 37 && v !== 27 && v !== 28) {
                throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${v}`);
            }
        }
        // No unsigned tx and EIP-155 activated and chain ID included
        if (v !== undefined && v !== 0 && (!common || common.gteHardfork('spuriousDragon')) && v !== 27 && v !== 28) {
            if (common) {
                if (!meetsEIP155(BigInt(v), common.chainId())) {
                    throw new Error(`Incompatible EIP155-based V ${v} and chain id ${common.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`);
                }
            } else {
                // Derive the original chain ID
                let numSub;
                if ((v - 35) % 2 === 0) {
                    numSub = 35;
                } else {
                    numSub = 36;
                }
                // Use derived chain ID to create a proper Common
                chainIdBigInt = BigInt(v - numSub) / BigInt(2);
            }
        }
        return this._getCommon(common, chainIdBigInt);
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        let errorStr = this._getSharedErrorPostfix();
        errorStr += ` gasPrice=${this.gasPrice}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
} //# sourceMappingURL=legacyTransaction.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "TransactionFactory": (()=>TransactionFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip1559Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/eip1559Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip2930Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/eip2930Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$legacyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/legacyTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
;
;
;
;
;
const extraTxTypes = new Map();
class TransactionFactory {
    // It is not possible to instantiate a TransactionFactory object.
    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    constructor(){}
    static typeToInt(txType) {
        return Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(txType)));
    }
    static registerTransactionType(type, txClass) {
        const txType = TransactionFactory.typeToInt(type);
        extraTxTypes.set(txType, txClass);
    }
    /**
     * Create a transaction from a `txData` object
     *
     * @param txData - The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction)
     * @param txOptions - Options to pass on to the constructor of the transaction
     */ static fromTxData(txData, txOptions = {}) {
        if (!('type' in txData) || txData.type === undefined) {
            // Assume legacy transaction
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$legacyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].fromTxData(txData, txOptions);
        }
        const txType = TransactionFactory.typeToInt(txData.type);
        if (txType === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$legacyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].fromTxData(txData, txOptions);
        }
        if (txType === 1) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip2930Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessListEIP2930Transaction"].fromTxData(// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            txData, txOptions);
        }
        if (txType === 2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip1559Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeMarketEIP1559Transaction"].fromTxData(// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            txData, txOptions);
        }
        const ExtraTransaction = extraTxTypes.get(txType);
        if (ExtraTransaction === null || ExtraTransaction === void 0 ? void 0 : ExtraTransaction.fromTxData) {
            return ExtraTransaction.fromTxData(txData, txOptions);
        }
        throw new Error(`Tx instantiation with type ${txType} not supported`);
    }
    /**
     * This method tries to decode serialized data.
     *
     * @param data - The data Uint8Array
     * @param txOptions - The transaction options
     */ static fromSerializedData(data, txOptions = {}) {
        if (data[0] <= 0x7f) {
            // Determine the type.
            switch(data[0]){
                case 1:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip2930Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessListEIP2930Transaction"].fromSerializedTx(data, txOptions);
                case 2:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip1559Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeMarketEIP1559Transaction"].fromSerializedTx(data, txOptions);
                default:
                    {
                        const ExtraTransaction = extraTxTypes.get(Number(data[0]));
                        if (ExtraTransaction === null || ExtraTransaction === void 0 ? void 0 : ExtraTransaction.fromSerializedTx) {
                            return ExtraTransaction.fromSerializedTx(data, txOptions);
                        }
                        throw new Error(`TypedTransaction with ID ${data[0]} unknown`);
                    }
            }
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$legacyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].fromSerializedTx(data, txOptions);
        }
    }
    /**
     * When decoding a BlockBody, in the transactions field, a field is either:
     * A Uint8Array (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
     * A Uint8Array[] (Legacy Transaction)
     * This method returns the right transaction.
     *
     * @param data - A Uint8Array or Uint8Array[]
     * @param txOptions - The transaction options
     */ static fromBlockBodyData(data, txOptions = {}) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(data)) {
            return this.fromSerializedData(data, txOptions);
        }
        if (Array.isArray(data)) {
            // It is a legacy transaction
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$legacyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].fromValuesArray(data, txOptions);
        }
        throw new Error('Cannot decode transaction: unknown type input');
    }
} //# sourceMappingURL=transactionFactory.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/account.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "create": (()=>create),
    "decrypt": (()=>decrypt),
    "encrypt": (()=>encrypt),
    "hashMessage": (()=>hashMessage),
    "parseAndValidatePrivateKey": (()=>parseAndValidatePrivateKey),
    "privateKeyToAccount": (()=>privateKeyToAccount),
    "privateKeyToAddress": (()=>privateKeyToAddress),
    "privateKeyToPublicKey": (()=>privateKeyToPublicKey),
    "recover": (()=>recover),
    "recoverTransaction": (()=>recoverTransaction),
    "sign": (()=>sign),
    "signMessageWithPrivateKey": (()=>signMessageWithPrivateKey),
    "signRaw": (()=>signRaw),
    "signTransaction": (()=>signTransaction)
});
/**
 * The web3 accounts package contains functions to generate Ethereum accounts and sign transactions & data.
 *
 * For using accounts functions, first install Web3 package using `npm i web3` or `yarn add web3` based on your package manager usage.
 * After that, Accounts functions will be available as mentioned in following snippet.
 * ```ts
 * import {Web3} from 'web3';
 *
 * const web3 = new Web3();
 * const account = web3.eth.accounts.create();
 * const result = web3.eth.accounts.hashMessage("Test Message");
 *
 * ```
 *
 * For using individual package install `web3-eth-accounts` package using `npm i web3-eth-accounts` or `yarn add web3-eth-accounts` and only import required functions.
 * This is more efficient approach for building lightweight applications.
 * ```ts
 * import {create,hashMessage} from 'web3-eth-accounts';
 *
 * const account = create();
 * const result = hashMessage("Test Message");
 *
 * ```
 * @module Accounts
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/aes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/pbkdf2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ethereum-cryptography@2.2.1/node_modules/ethereum-cryptography/esm/scrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/account_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uint8array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/converters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/validation/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-errors@1.3.1/node_modules/web3-errors/lib/esm/errors/transaction_errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-utils@4.3.3/node_modules/web3-utils/lib/esm/uuid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-validator@2.0.6/node_modules/web3-validator/lib/esm/default_validator.js [app-client] (ecmascript)");
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
const parseAndValidatePrivateKey = (data, ignoreLength)=>{
    let privateKeyUint8Array;
    // To avoid the case of 1 character less in a hex string which is prefixed with '0' by using 'bytesToUint8Array'
    if (!ignoreLength && typeof data === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(data) && data.length !== 66) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateKeyLengthError"]();
    }
    try {
        privateKeyUint8Array = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(data) ? data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToUint8Array"])(data);
    } catch (_a) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidPrivateKeyError"]();
    }
    if (!ignoreLength && privateKeyUint8Array.byteLength !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateKeyLengthError"]();
    }
    return privateKeyUint8Array;
};
const hashMessage = (message, skipPrefix = false)=>{
    const messageHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexStrict"])(message) ? message : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToHex"])(message);
    const messageBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(messageHex);
    const preamble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromUtf8"])(`\x19Ethereum Signed Message:\n${messageBytes.byteLength}`));
    const ethMessage = skipPrefix ? messageBytes : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(preamble, messageBytes);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3Raw"])(ethMessage); // using keccak in web3-utils.sha3Raw instead of SHA3 (NIST Standard) as both are different
};
const signMessageWithPrivateKey = (hash, privateKey)=>{
    const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
    const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].sign(hash.substring(2), privateKeyUint8Array);
    const signatureBytes = signature.toCompactRawBytes();
    const r = signature.r.toString(16).padStart(64, '0');
    const s = signature.s.toString(16).padStart(64, '0');
    const v = signature.recovery + 27;
    return {
        messageHash: hash,
        v: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(v),
        r: `0x${r}`,
        s: `0x${s}`,
        signature: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(signatureBytes)}${v.toString(16)}`
    };
};
const sign = (data, privateKey)=>{
    const hash = hashMessage(data);
    const { messageHash, v, r, s, signature } = signMessageWithPrivateKey(hash, privateKey);
    return {
        message: data,
        messageHash,
        v,
        r,
        s,
        signature
    };
};
const signRaw = (data, privateKey)=>{
    // Hash the message without the Ethereum-specific prefix
    const hash = hashMessage(data, true);
    // Sign the hash with the private key
    const { messageHash, v, r, s, signature } = signMessageWithPrivateKey(hash, privateKey);
    return {
        message: data,
        messageHash,
        v,
        r,
        s,
        signature
    };
};
const signTransaction = (transaction, privateKey)=>__awaiter(void 0, void 0, void 0, function*() {
        const signedTx = transaction.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(privateKey));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(signedTx.v) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(signedTx.r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(signedTx.s)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionSigningError"]('Signer Error');
        const validationErrors = signedTx.validate(true);
        if (validationErrors.length > 0) {
            let errorString = 'Signer Error ';
            for (const validationError of validationErrors){
                errorString += `${errorString} ${validationError}.`;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionSigningError"](errorString);
        }
        const rawTx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(signedTx.serialize());
        const txHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3Raw"])(rawTx); // using keccak in web3-utils.sha3Raw instead of SHA3 (NIST Standard) as both are different
        return {
            messageHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(signedTx.getMessageToSign(true)),
            v: `0x${signedTx.v.toString(16)}`,
            r: `0x${signedTx.r.toString(16).padStart(64, '0')}`,
            s: `0x${signedTx.s.toString(16).padStart(64, '0')}`,
            rawTransaction: rawTx,
            transactionHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(txHash)
        };
    });
const recoverTransaction = (rawTransaction)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(rawTransaction)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndefinedRawTransactionError"]();
    const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionFactory"].fromSerializedData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(rawTransaction));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(tx.getSenderAddress().toString());
};
const recover = (data, signatureOrV, prefixedOrR, s, prefixed)=>{
    if (typeof data === 'object') {
        const signatureStr = `${data.r}${data.s.slice(2)}${data.v.slice(2)}`;
        return recover(data.messageHash, signatureStr, prefixedOrR);
    }
    if (typeof signatureOrV === 'string' && typeof prefixedOrR === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(s)) {
        const signatureStr = `${prefixedOrR}${s.slice(2)}${signatureOrV.slice(2)}`;
        return recover(data, signatureStr, prefixed);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(signatureOrV)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]('signature string undefined');
    const V_INDEX = 130; // r = first 32 bytes, s = second 32 bytes, v = last byte of signature
    const hashedMessage = prefixedOrR ? data : hashMessage(data);
    let v = parseInt(signatureOrV.substring(V_INDEX), 16); // 0x + r + s + v
    if (v > 26) {
        v -= 27;
    }
    const ecPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature.fromCompact(signatureOrV.slice(2, V_INDEX)).addRecoveryBit(v).recoverPublicKey(hashedMessage.replace('0x', '')).toRawBytes(false);
    const publicHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3Raw"])(ecPublicKey.subarray(1));
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(`0x${publicHash.slice(-40)}`);
    return address;
};
const privateKeyToAddress = (privateKey)=>{
    const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
    // Get public key from private key in compressed format
    const publicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].getPublicKey(privateKeyUint8Array, false);
    // Uncompressed ECDSA public key contains the prefix `0x04` which is not used in the Ethereum public key
    const publicKeyHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3Raw"])(publicKey.slice(1));
    // The hash is returned as 256 bits (32 bytes) or 64 hex characters
    // To get the address, take the last 20 bytes of the public hash
    const address = publicKeyHash.slice(-40);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toChecksumAddress"])(`0x${address}`);
};
const privateKeyToPublicKey = (privateKey, isCompressed)=>{
    const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
    // Get public key from private key in compressed format
    return `0x${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].getPublicKey(privateKeyUint8Array, isCompressed)).slice(4)}`; // 0x and removing compression byte
};
const encrypt = (privateKey, password, options)=>__awaiter(void 0, void 0, void 0, function*() {
        var _a, _b, _c, _d, _e, _f, _g;
        const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
        // if given salt or iv is a string, convert it to a Uint8Array
        let salt;
        if (options === null || options === void 0 ? void 0 : options.salt) {
            salt = typeof options.salt === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(options.salt) : options.salt;
        } else {
            salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(32);
        }
        if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$validation$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(password) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUint8Array"])(password))) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidPasswordError"]();
        }
        const uint8ArrayPassword = typeof password === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToHex"])(password)) : password;
        let initializationVector;
        if (options === null || options === void 0 ? void 0 : options.iv) {
            initializationVector = typeof options.iv === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(options.iv) : options.iv;
            if (initializationVector.length !== 16) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IVLengthError"]();
            }
        } else {
            initializationVector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(16);
        }
        const kdf = (_a = options === null || options === void 0 ? void 0 : options.kdf) !== null && _a !== void 0 ? _a : 'scrypt';
        let derivedKey;
        let kdfparams;
        // derive key from key derivation function
        if (kdf === 'pbkdf2') {
            kdfparams = {
                dklen: (_b = options === null || options === void 0 ? void 0 : options.dklen) !== null && _b !== void 0 ? _b : 32,
                salt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(salt).replace('0x', ''),
                c: (_c = options === null || options === void 0 ? void 0 : options.c) !== null && _c !== void 0 ? _c : 262144,
                prf: 'hmac-sha256'
            };
            if (kdfparams.c < 1000) {
                // error when c < 1000, pbkdf2 is less secure with less iterations
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBKDF2IterationsError"]();
            }
            derivedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2Sync"])(uint8ArrayPassword, salt, kdfparams.c, kdfparams.dklen, 'sha256');
        } else if (kdf === 'scrypt') {
            kdfparams = {
                n: (_d = options === null || options === void 0 ? void 0 : options.n) !== null && _d !== void 0 ? _d : 8192,
                r: (_e = options === null || options === void 0 ? void 0 : options.r) !== null && _e !== void 0 ? _e : 8,
                p: (_f = options === null || options === void 0 ? void 0 : options.p) !== null && _f !== void 0 ? _f : 1,
                dklen: (_g = options === null || options === void 0 ? void 0 : options.dklen) !== null && _g !== void 0 ? _g : 32,
                salt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(salt).replace('0x', '')
            };
            derivedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptSync"])(uint8ArrayPassword, salt, kdfparams.n, kdfparams.p, kdfparams.r, kdfparams.dklen);
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidKdfError"]();
        }
        const cipher = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encrypt"])(privateKeyUint8Array, derivedKey.slice(0, 16), initializationVector, 'aes-128-ctr');
        const ciphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(cipher).slice(2);
        const mac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3Raw"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(derivedKey.slice(16, 32), cipher)).replace('0x', '');
        return {
            version: 3,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uuid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidV4"])(),
            address: privateKeyToAddress(privateKeyUint8Array).toLowerCase().replace('0x', ''),
            crypto: {
                ciphertext,
                cipherparams: {
                    iv: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(initializationVector).replace('0x', '')
                },
                cipher: 'aes-128-ctr',
                kdf,
                kdfparams,
                mac
            }
        };
    });
const privateKeyToAccount = (privateKey, ignoreLength)=>{
    const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey, ignoreLength);
    return {
        address: privateKeyToAddress(privateKeyUint8Array),
        privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(privateKeyUint8Array),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        signTransaction: (_tx)=>{
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$transaction_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionSigningError"]('Do not have network access to sign the transaction');
        },
        sign: (data)=>sign(typeof data === 'string' ? data : JSON.stringify(data), privateKeyUint8Array),
        encrypt: (password, options)=>__awaiter(void 0, void 0, void 0, function*() {
                return encrypt(privateKeyUint8Array, password, options);
            })
    };
};
const create = ()=>{
    const privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].utils.randomPrivateKey();
    return privateKeyToAccount(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(privateKey)}`);
};
const decrypt = (keystore, password, nonStrict)=>__awaiter(void 0, void 0, void 0, function*() {
        const json = typeof keystore === 'object' ? keystore : JSON.parse(nonStrict ? keystore.toLowerCase() : keystore);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validateJSONSchema(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyStoreSchema"], json);
        if (json.version !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyStoreVersionError"]();
        const uint8ArrayPassword = typeof password === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToHex"])(password)) : password;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$validator$40$2$2e$0$2e$6$2f$node_modules$2f$web3$2d$validator$2f$lib$2f$esm$2f$default_validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validator"].validate([
            'bytes'
        ], [
            uint8ArrayPassword
        ]);
        let derivedKey;
        if (json.crypto.kdf === 'scrypt') {
            const kdfparams = json.crypto.kdfparams;
            const uint8ArraySalt = typeof kdfparams.salt === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(kdfparams.salt) : kdfparams.salt;
            derivedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$scrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scryptSync"])(uint8ArrayPassword, uint8ArraySalt, kdfparams.n, kdfparams.p, kdfparams.r, kdfparams.dklen);
        } else if (json.crypto.kdf === 'pbkdf2') {
            const kdfparams = json.crypto.kdfparams;
            const uint8ArraySalt = typeof kdfparams.salt === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(kdfparams.salt) : kdfparams.salt;
            derivedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2Sync"])(uint8ArrayPassword, uint8ArraySalt, kdfparams.c, kdfparams.dklen, 'sha256');
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidKdfError"]();
        }
        const ciphertext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(json.crypto.ciphertext);
        const mac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3Raw"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint8ArrayConcat"])(derivedKey.slice(16, 32), ciphertext)).replace('0x', '');
        if (mac !== json.crypto.mac) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$errors$40$1$2e$3$2e$1$2f$node_modules$2f$web3$2d$errors$2f$lib$2f$esm$2f$errors$2f$account_errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyDerivationError"]();
        }
        const seed = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethereum$2d$cryptography$40$2$2e$2$2e$1$2f$node_modules$2f$ethereum$2d$cryptography$2f$esm$2f$aes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decrypt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(json.crypto.ciphertext), derivedKey.slice(0, 16), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$utils$40$4$2e$3$2e$3$2f$node_modules$2f$web3$2d$utils$2f$lib$2f$esm$2f$converters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(json.crypto.cipherparams.iv));
        return privateKeyToAccount(seed);
    }); //# sourceMappingURL=account.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ // @ethereumjs/common version 3.1.1
__turbopack_esm__({});
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
*/ // @ethereumjs/tx version 4.1.1
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
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip1559Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/eip1559Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$eip2930Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/eip2930Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$legacyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/legacyTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$transactionFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$baseTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/baseTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
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
 * The web3.eth.accounts contains functions to generate Ethereum accounts and sign transactions and data.
 *
 * **_NOTE:_** This package has NOT been audited and might potentially be unsafe. Take precautions to clear memory properly, store the private keys safely, and test transaction receiving and sending functionality properly before using in production!
 *
 *
 * To use this package standalone and use its methods use:
 * ```ts
 * import { create, decrypt } from 'web3-eth-accounts'; // ....
 * ```
 *
 * To use this package within the web3 object use:
 *
 * ```ts
 * import Web3 from 'web3';
 *
 * const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
 * // now you have access to the accounts class
 * web3.eth.accounts.create();
 * ```
 */ __turbopack_esm__({});
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/common/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$tx$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/tx/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$web3$2d$eth$2d$accounts$40$4$2e$3$2e$1$2f$node_modules$2f$web3$2d$eth$2d$accounts$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/web3-eth-accounts@4.3.1/node_modules/web3-eth-accounts/lib/esm/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=b52af_web3-eth-accounts_lib_esm_e25ebd._.js.map