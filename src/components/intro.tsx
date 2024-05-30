"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) setActiveSection("Hem");
  }, [inView, setActiveSection]);
  return (
    <section className="max-w-[60rem] text-center scroll-mt-[100rem]" id="home">
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
        className="flex flex-col items-center justify-center mb-10 mt-10 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="w-full text-center">
          <strong className="text-8xl">Adolfsson Digital</strong>
        </span>
        <span className="text-3xl mt-2 text-center">
          Vi utvecklar webbsidor och hjälper dig digitaliseras
        </span>
        <span className="text-3xl text-center">
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
          href="#Contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-700 active:scale-105 transition "
        >
          Våra lösningar{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href=""
          className="group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition "
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
