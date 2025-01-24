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
    <html lang="en">
      <body className={`${inter.className} bg-background`} >
        <ClientProvider>
        <div className="mb-[10vh]">
          <Navbar />
        </div>
        <ToastContainer />
        </ClientProvider>
        <div className="overflow-scroll pt-[1vh] max-h-[90vh]">{children}</div>
      </body>
    </html>
  );
}
