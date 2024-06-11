"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import Image from "next/image";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default function About() {
  const { ref } = useSectionInView("Om"); // använder default threshold 0.75 från hook
  const [showMore, setShowMore] = React.useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-52 scroll-mt-28 dark:text-slate-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading> Om oss</SectionHeading>
      <div className="flex items-center justify-center mb-4 relative group">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <Image
            src={"/jamesprofile3.png"}
            alt="portrait"
            width={500}
            height={500}
            quality={99}
            priority={true}
            className="h-60 w-60 rounded-full object-cover  shadow-xl shadow-cyan-950 dark:shadow-blue-100 "
          />
        </motion.div>
        <div className="absolute flex items-center justify-center flex-col  text-white h-60 w-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-700 bg-opacity-45 rounded-full">
          <p className="">James Adolfsson</p>
          <p>Webbutvecklare & Webbdesigner</p>
        </div>
      </div>
      <p className="mb-3  text-start">
        <span className="font-bold"> Välkommen till Adolfsson Digital</span>,
        din pålitliga partner för professionella och prisvärda tjänster inom
        webbutveckling och webbdesign. Mitt namn är James och är baserad i
        Stockholm. Med två års arbetserfarenhet och två års högskoleutbildning i
        bagaget, är jag stolt över att presentera Adolfsson Digital och erbjuda
        tjänster över hela Sverige och även utomlands.
      </p>
      <p className="mb-3  text-start">
        Vi är dedikerade till att skapa skräddarsydda webbplatser som inte bara
        ser fantastiska ut, utan också är säljande och engagerande för besökare.
        Vi lägger stort fokus på copywriting och förstår vikten av att varje ord
        på din webbplats ska väcka intresse och driva försäljning. Vi arbetar
        nära våra kunder för att säkerställa att deras unika budskap och
        varumärke kommer fram på bästa möjliga sätt.
      </p>
      <p className="mb-3  text-start">
        Låt oss hjälpa dig att skapa en webbplats som inte bara representerar
        ditt företag, utan också förvandlar besökare till kunder. Kontakta oss
        idag för att ta din online närvaro till nästa nivå, oavsett var du
        befinner dig.
      </p>
      <div className="flex justify-center">
        {" "}
        <button
          className="group bg-white text-black px-3 py-1 flex items-center justify-self-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={handleToggle}
        >
          {showMore ? "Visa mindre" : "Varför välja oss?"}
          {showMore ? <BsArrowUp /> : <BsArrowDown />}
        </button>
      </div>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -400 }}
            transition={{ duration: 0.3 }}
            className="text-start"
          >
            <p className="text-center pt-4">
              Att välja rätt partner för webbutveckling och web design är
              avgörande för ditt företags onlineframgång. Här är varför du ska
              välja oss:
            </p>
            <ul className="mt-8">
              <li className="mb-4">
                <span className="font-bold underline underline-offset-2 text-lg">
                  Prisvärda Tjänster
                </span>{" "}
                Vi erbjuder professionella lösningar till{" "}
                <span className="font-medium">konkurrenskraftiga priser</span>,
                vilket gör oss till ett kostnadseffektivt val för både små och
                stora företag.
              </li>
              <li className="mb-4">
                <span className="font-bold underline underline-offset-2 text-lg">
                  Enkel Att Arbeta Med
                </span>{" "}
                Vårt kundfokuserade arbetssätt gör processen smidig och enkel.
                Vi kommunicerar tydligt och arbetar nära dig för att förstå och
                uppfylla dina specifika behov.
              </li>
              <li className="mb-4">
                <span className="font-bold underline underline-offset-2 text-lg">
                  Erfarenhet och Utbildning
                </span>{" "}
                Med två års arbetserfarenhet och två års högskoleutbildning inom
                webbutveckling och design, kombinerar vi praktisk kunskap med
                akademisk expertis för att leverera högkvalitativa resultat med
                senaste tekniken.
              </li>
              <li className="mb-4">
                <span className="font-bold underline underline-offset-2 text-lg">
                  Skräddarsydda Lösningar
                </span>{" "}
                Vi lägger stort fokus på copywriting och anpassar varje
                webbplats efter klientens behov och krav för att maximera dess
                säljande potential och engagera besökare.
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
