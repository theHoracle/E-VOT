
import { createContext, ReactNode, useContext, useMemo } from "react";
import Web3, { EIP1193Provider } from "web3";
// import { arbitrumSepolia, celo, celoAlfajores, liskSepolia } from "wagmi/chains";
// import { connectWallet } from './web3modal';
import {
  useWeb3ModalTheme,
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "web3modal-web3js/react";


const PROJECT_ID = process.env.PROJECT_ID || "YOUR_PROJECT_ID";
const CHAINS = [
    {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  {
    chainId: 42161,
    name: "Arbitrum",
    currency: "ETH",
    explorerUrl: "https://arbiscan.io",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
  },
  {
    chainId: 421_614,
    name: "Arbitrum Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.arbiscan.io",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
},
{
    chainId: 4202,
    name: "Lisk Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia-blockscout.lisk.com",
    rpcUrl: "https://rpc.sepolia-api.lisk.com",
},
];
type WalletContextType = {
    address?: `0x${string}`;
    chainId?: number;
    isConnected?: boolean;
    walletProvider?: EIP1193Provider<any> | Web3;
}
const WalletContext = createContext<WalletContextType | undefined>(undefined)

const WalletProvider = ({children}: {children: ReactNode}) => {
const web3Config = defaultConfig({
    metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});

// 3. Create modal
createWeb3Modal({
  web3Config,
  // chains: [celo, celoAlfajores, arbitrumSepolia, liskSepolia],
  chains: CHAINS,
  projectId: PROJECT_ID,
  enableAnalytics: true,
  themeMode: "light",
  themeVariables: {
    "--w3m-color-mix": "#00DCFF",
    "--w3m-color-mix-strength": 20,
  },
});

const { address, chainId, isConnected } = useWeb3ModalAccount();
const { walletProvider } = useWeb3ModalProvider();
console.log(address);

const value = useMemo(() => ({
    address,
    chainId,
    isConnected,
    walletProvider,
}), [address, chainId, isConnected, walletProvider]) 
    
    return (
        <WalletContext.Provider value={value} >
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider;

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;   
}