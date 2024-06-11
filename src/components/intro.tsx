"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../../lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  //custom  hook (useSectionInView)
  const { ref } = useSectionInView("Hem", 0.5); // 0.5 är threshold för när sectionen ska trigga
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="max-w-[60rem] text-center scroll-mt-[100rem] dark:text-slate-800"
      id="home"
      ref={ref}
    >
      {/* <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <Image
            src={"/jamesprofile2.jpg"}
            alt="portrait"
            width={500}
            height={500}
            quality={100}
            priority={true}
            className="h-96 w-96 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
          />
        </motion.div>
      </div> */}
      <motion.h1
        className="flex flex-col items-center justify-center mb-10 mt-2 sm:mt-10 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="w-full ">
          <strong className="text-5xl sm:text-7xl">
            Det moderna och prisvärda
          </strong>
        </span>
        <span className="w-full mt-2 ">
          <strong className="text-4xl sm:text-6xl">
            alternativet vid digitalisering
          </strong>
        </span>
        <span className="text-xl sm:text-2xl mt-8 sm:mt-6 text-center">
          Vi utvecklar webbplatser och hjälper dig digitaliseras
        </span>
        <span className="text-xl sm:text-2xl text-center">
          {" "}
          Professionellt och Prisvärt
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#services"
          className=" group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none borderBlack focus:scale-110 hover:scale-110 hover:bg-gray-600 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Tjänster");
            setTimeOfLastClick(Date.now());
          }}
        >
          Våra Tjänster{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="#contact"
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none borderBlack focus:scale-110 hover:scale-110 hover:bg-slate-200 active:scale-105 transition "
          onClick={() => {
            setActiveSection("Kontakt");
            setTimeOfLastClick(Date.now());
          }}
        >
          Kontakta oss
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/james-adolfsson/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] active:scale-105  hover:text-gray-950 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/adolfssonjames"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.22rem] rounded-full outline-none focus:scale-110 hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition"
        >
          <FaGithubSquare />
        </a> */}
      </motion.div>
    </section>
  );
}
