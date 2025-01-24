"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { useWallet } from "../providers/WalletProvider";
import Image from "next/image";


export default function Onboard() {  
  const pathname = usePathname();
  const { address, chainId, isConnected, walletProvider } = useWallet();
  
  return (
    <header>
      <nav className="flex h-[10vh] justify-between lg:justify-around items-center fixed top-0 right-0 min-w-[100vw] bg-[#ffffff] border-b-2">
        <div className="flex items-center gap-2 md-gap-3 lg:hidden">
          <div className="border flex items-center border-[#5773fb] text-[#5773fb] rounded-lg p-0.5 ml-2 ">
            <MobileNav />
          </div>
          <div className="logo mr-[-10px]">
            <Link href="/">
              <Image 
              width={100}
              height={100}
              src="/assets/Logo.png"
              alt="logo" />
            </Link>
          </div>
        </div>

        <div className="ml-20 flex-1 hidden lg:flex">
          <ul className="flex gap-16">
            <li
              className={`px-2 text-[#8F96A1] font-medium transform duration-200 hover:-translate-y-0.5  hover:border-[#5773fb] hover:text-[#5773fb] nav-links ${pathname === "/" ? "active" : ""}`}
              id="dashboard"
            >
              <Link className="" href="/">
                Dashboard
              </Link>
            </li>
            <li
              className={`px-2 text-[#8F96A1] font-medium transform duration-200 hover:-translate-y-0.5 hover:border-[#5773fb] hover:text-[#5773fb] nav-links ${pathname === "/elections" ? "active" : ""}`}
              id="elections"
            >
              <Link className="" href="/elections">
                Vote
              </Link>
            </li>
            {/* <li className="px-8  nav-linksfont-medium">
                    <Link hre className=""f="/kyc">KYC</Link>
                </li> */}
            <li
              className={`px-2 text-[#8F96A1] font-medium transform duration-200 hover:-translate-y-0.5 hover:border-[#5773fb] hover:text-[#5773fb] nav-links ${pathname === "/addElection" ? "active" : ""}`}
              id="addElection"
            >
              <Link className="" href="/addElection">
                Create Election
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <w3m-button />
          {/* </div> */}
          {/* <button onClick={handleConnect} className="space-x-4 bg-[#9747FF] text-white rounded-lg w-[9rem] h-[2.5rem] ml-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 z-50">
                {/* <w3m-button /> 
                </button> */}
          </div>
      </nav>
    </header>
  );
}
