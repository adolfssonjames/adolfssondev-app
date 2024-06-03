import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context"; //paket som håller koll på vilken section som är aktiv
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adolfsson Digital",
  description:
    "Vi utvecklar webbsidor och erbjuder konsulttjänster. Professionellt och Prisvärt",
  icons: "/favicon.jpg",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-800 text-slate-50 relative pt-28 sm:pt-36`}
      >
        <div className="bg-slate-950 absolute top-[-6rem] -z-10 right-[1rem] h-[22.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        {/* <div className="bg-indigo-950 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
