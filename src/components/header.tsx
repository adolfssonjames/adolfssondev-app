"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../../lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";
import { useTheme } from "@/context/theme-context"; // Import the theme context

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Consume the theme context

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[3.5rem] w-full rounded-none border-opacity-40 bg-slate-700 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-white dark:border-white dark:bg-opacity-80"
        initial={{ y: 200, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {isOpen && (
        <nav className="fixed top-0 left-0 w-full h-full text-white bg-slate-950 bg-opacity-95 dark:bg-slate-100 dark:bg-opacity-95 dark:text-slate-950 text-lg z-[1000]">
          <ul className="mt-14 text-center w-full">
            {links.map((link) => (
              <li className="py-2" key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="absolute top-2 right-2 text-white z-[1001]" // Increased z-index
            onClick={() => {
              console.log("Close button clicked");
              setIsOpen(false);
            }}
          >
            <FaRegWindowClose className="text-white dark:text-slate-700 text-3xl mt-1 mr-2" />
          </button>
        </nav>
      )}
      <div className="text-lg fixed top-[0.15rem] left-0 h-11 py-2 sm:top-[1.7rem] pl-2 sm:pl-10 sm:left-0 sm:h-[initial] sm:py-0 flex justify-between items-center w-full px-4 sm:hidden">
        <Link className="" href={"/"}></Link>

        {!isOpen && (
          <button className="z-[1000]" onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu className="text-white text-2xl dark:text-slate-600 mt-2" />
          </button>
        )}
      </div>

      <div className="text-lg fixed top-[0.1rem] left-0 h-12 py-2 sm:top-[1.7rem] pl-2 sm:pl-10 sm:left-0 sm:h-[initial] sm:py-0 z-[998]">
        <Link className="" href={"/"}>
          {theme === "dark" ? (
            <img
              src="adolfsson-digital-logo.png"
              alt="Adolfsson Digital"
              className="w-32 sm:w-32 md:w-32 lg:w-36 pt-3 sm:pt-14 sm:mx-16 md:pt-14 md:mx-20 lg:pt-2 lg:mx-0 xl:pt-2 xl:mx-0"
            />
          ) : (
            <img
              src="adolfsson-digital-logo2.png"
              alt="Adolfsson Digital"
              className="w-32 sm:w-32 md:w-32 lg:w-36 pt-3 sm:pt-14 sm:mx-16 md:pt-14 md:mx-20 lg:pt-2 lg:mx-0 xl:pt-2 xl:mx-0"
            />
          )}
        </Link>
      </div>

      <nav className="hidden sm:block fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-300 dark:text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-100 transition dark:text-slate-500 dark:hover:text-slate-700",
                  {
                    "text-gray-50 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-600 rounded-full absolute inset-0 -z-10 dark:bg-slate-100"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
