"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
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
      </div>
      <p className="flex flex-col items-center justify-center ">
        <span>
          <strong>Adolfsson Digital</strong>
        </span>
        <span>
          Vi utvecklar webbsidor och erbjuder konsulttjänster. Professionellt
          och Prisvärt
        </span>
      </p>
    </section>
  );
}
