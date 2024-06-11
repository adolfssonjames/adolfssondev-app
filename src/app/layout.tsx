import Header from "@/components/header";
import "./globals.css";
import { Figtree } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context"; //paket som håller koll på vilken section som är aktiv
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adolfsson Digital",
  description:
    "Adolfsson Digital utvecklar webbplatser, webbdesign och erbjuder konsulttjänster. Professionellt och Prisvärt",
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
        className={`${font.className} bg-slate-800 text-slate-50 relative pt-28 sm:pt-36 dark:bg-slate-100`}
      >
        <div className="bg-blue-800 absolute top-[-1rem] -z-10 right-[1rem] h-[22.25rem] w-[50rem] rounded-full blur-[11rem] sm:w-[68.75rem] dark:bg-cyan-50"></div>
        <div className="bg-indigo-900 absolute top-[-1rem] -z-10 left-[-35rem] h-[22.25rem] w-[50rem] rounded-full blur-[9rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-green-50"></div>
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
