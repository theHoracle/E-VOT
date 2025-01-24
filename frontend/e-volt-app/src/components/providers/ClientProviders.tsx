"use client"

import { PropsWithChildren } from "react";
import WalletProvider from "./WalletProvider";

export default function ClientProvider({ children }: PropsWithChildren) {
    return <>
        <WalletProvider>
            {children}
        </WalletProvider>
        </>;
}

