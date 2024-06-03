"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import { sendEmail } from "../../actions/sendEmail";
export default function Contact() {
  const { ref } = useSectionInView("Kontakt", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Kontakt</SectionHeading>
      <p className=" -mt-5">
        kontakta mig här nedan eller här{" "}
        <a className="underline" href="mailto:adolfssonjames@gmail.com">
          adolfssonjames@gmail.com
        </a>
      </p>

      <form
        action={async (FormData) => {
          console.log("running on client");
          console.log(FormData.get("senderEmail"));
          console.log(FormData.get("message"));

          await sendEmail(FormData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="bg-slate-100 text-black px-4 h-14 rounded-lg borderBlack
           outline-slate-400"
          placeholder="Din email"
        />
        <textarea
          name="message"
          required
          maxLength={500}
          className=" bg-slate-100 text-black h-52 my-3 rounded-lg borderBlack p-4 outline-slate-400 "
          placeholder="Ditt meddelande"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-white text-black rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-slate-200  active:scale-105"
        >
          Skicka{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
