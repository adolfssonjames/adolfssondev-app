import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { RiPresentationFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import wordanalyticsImg from "../public/wordanalytics.png";
import soulsistersImg from "../public/soulsisters.png";
import placeholderImg from "../public/placeholderImg.jpg";
import soulsistersImg2 from "../public/soulsisters2.png";
import adolfssondigitalImg2 from "../public/adolfssondigital2.png";
import test from "node:test";

export const links = [
  {
    name: "Hem",
    hash: "#home",
  },
  {
    name: "Tjänster",
    hash: "#services",
  },
  {
    name: "Projekt",
    hash: "#projects",
  },
  {
    name: "Referenser",
    hash: "#testimonials",
  },
  {
    name: "Tidslinje",
    hash: "#project-timeline",
  },
  {
    name: "Om",
    hash: "#about",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Initialt möte angående mål, krav & förväntningar",
    location: "Kravspecifikation",
    description:
      "Första steget är att ha ett initialt möte om förväntingar, krav, önskemål och mål. Detta utgör sedan underlaget för projektet och en kravspecifikation bildas. Detta görs för att kunna slutföra ett lyckat projekt.",
    icon: React.createElement(IoMdContacts),
    date: "Första kontakt och kravspecifikation",
  },
  {
    title: "Förslag & Offert",
    location: "Offert",
    description:
      "Andra steget är att vi skapar en exempeldesign där det framgår hur din webbplats kan tänkas se ut och fungera. Detta görs med en sitemap och designskiss. Detta görs i samband med en kostnadsfri offert. Som skickas till dig.",
    icon: React.createElement(RiPresentationFill),
    date: "Förslag och offert",
  },
  {
    title: "Uppföljning, avtal & fakturering",
    location: "Avtal",
    description:
      "Tredje steget är att vi skickar ett projektavtal och en faktura. Avtalet ska godkännas och skrivas under av både dig och av Adolfsson Digital. I samband med betald faktura påbörjas projektet.",
    icon: React.createElement(FaFileInvoice),
    date: "Uppföljning och avtal",
  },
  {
    title: "Utveckling, lansering & presentation av webbplats",
    location: "Utveckling & Lansering",
    description:
      "I det fjärde och sista steget utvecklar vi din webbplats efter önskad design och funktionalitet. Vårt mål är att överträffa samtliga krav och presentera ett färdigt projekt som lämnar dig över förväntan",
    icon: React.createElement(FaLaptopCode),
    date: "Adolfsson Digital utför utveckling av webbplats, och presenterar färdigt projekt för klient",
  },
] as const;

export const projectsData = [
  {
    title: "Soul Sisters",
    description:
      "Webbplats för Soul Sisters (Mode och klädbutik i Bollnäs). Klientens mål var att ha ett showroom och presentera de senaste nyheterna",
    tags: [
      "Next.js",
      "analytics",
      "perfomance-statistics",
      "Tailwind",
      "TypeScript",
    ],
    imageUrl: soulsistersImg2,
    projectUrl: "https://soulsistershop.se",
  },
  {
    title: "Adolfsson Digital",
    description:
      "Detta är företagets webbplats. Webbplatsen du för närvarande befinner dig på är snabb, responsiv och SEO-vänlig. Byggd med Next.js och TypeScript.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer-motion",
      "Resend",
    ],
    imageUrl: adolfssondigitalImg2,
    projectUrl: "https://adolfssondigital.com",
  },
  {
    title: "Elvira Cornelia - Interior Designer",
    description:
      "För närvarande under utveckling. Detta är en portföljwebbplats för en inredningsarkitekt och designer.",
    tags: ["Under utveckling"],
    imageUrl: placeholderImg,
    projectUrl: "https://www.adolfssondigital.com/#projects",
  },
] as const;

export const skillsData = [
  {
    name: "Ulrika",
    role: "Grundare och säljare på Soul Sisters",
    testimonial:
      '"Jag kan varmt rekommendera James på Adolfsson Digital. Han har hjälpt mig att skapa en webbplats åt min butik. Jag är mycket nöjd med resultatet. James är lyhörd. Jag är mycket nöjd med samarbetet och jag kommer att anlita honom igen för framtida projekt"',
  },
  {
    name: "Elvira",
    role: "Frilansare & Inredningsarkitekt",
    testimonial: "  upcoming",
  },
  {
    name: "Det här kan vara du",
    role: "Företagare eller privatperson",
    testimonial: "  upcoming",
  },
] as const;

export const servicesData = [
  {
    title: "Webbplats på en dag",
    description:
      "Vi skapar en webbplats på en dag. Detta paket inkluderar en landingsida (Hem) och tre ytterligare sidor som exempelvis Om oss, Kontakt, Tjänster. Perfekt för dig som är start up-bolag eller en privatperson som vill prova på att ha en webbplats redan idag.",
    tags: ["4 Sidor", "Copywriting", "SEO", "Lansering", "Responsiv design"],
    price: "10 000 SEK",

    price2: "",
  },
  {
    title: "Skärddarsydd Webbplats",
    description:
      "Vi skapar en skräddarsydd webbplats. Detta paket inkluderar det mesta (se tags). Vi bygger efter dina krav och önskemål. Projektet skapas i källkod med React.js/Next.js eller i plattformen Webflow",
    tags: [
      "Valfritt antal sidor",
      "Copywriting",
      "SEO",
      "Lansering",
      "CMS",
      "Designskiss",
      "Analytics",
      "E-commerce",
      "Responsiv design",
      "Performance statistik",
    ],
    price: "Från 10 000 SEK",
    price2: "",
  },
  {
    title: "Konsult eller Serviceavtal",
    description:
      "Behöver ditt team eller företag förstärkning? Anlita mig som utvecklare eller webbdesignkonsult. Jag hjälper dig gärna med ditt projekt. Behöver du hjälp med driften av din webbplats? Jag erbjuder serviceavtal för att hålla din webbplats uppdaterad och övervakad.",

    tags: [
      "React",
      "Next.js",
      "Webbdesign",
      "Content",
      "Uppdateringar",
      "anyltics rapportering",
      "performance rapportering",
    ],
    price: "Konsult: 300 SEK/Timme",
    price2: "Serviceavtal: 500 SEK/Månad",
  },
] as const;
