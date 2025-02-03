"use client"

import { PropsWithChildren } from "react";
import WalletProvider from "./WalletProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function ClientProvider({ children }: PropsWithChildren) {
    return <>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <WalletProvider>
                {children}
            </WalletProvider>
          </ThemeProvider>
        </>;
}

