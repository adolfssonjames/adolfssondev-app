"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import { sendEmail } from "../../actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Kontakt", 0.5);

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
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
          // console.log("running on client");
          // console.log(FormData.get("senderEmail"));
          // console.log(FormData.get("message"));

          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Meddelandet har skickats");
          setSenderEmail("");
          setMessage("");
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
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className=" bg-slate-100 text-black h-52 my-3 rounded-lg borderBlack p-4 outline-slate-400 "
          placeholder="Ditt meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
