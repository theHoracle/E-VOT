import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/nav/Navbar";
import ClientProvider from "@/components/providers/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-vot",
  description: "A decentralized voting platform",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} bg-[#F5F5F5] dark:bg-slate-900 dark:text-slate-100 px-4`}
      >
        <ClientProvider>
          <main className="flex flex-col">
            <Navbar />
            <div className="">{children}</div>
          </main>
          <ToastContainer />
        </ClientProvider>
      </body>
    </html>
  );
}
