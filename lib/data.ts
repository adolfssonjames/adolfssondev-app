import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { RiPresentationFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import wordanalyticsImg from "../public/wordanalytics.png";
import soulsistersImg from "../public/soulsisters.png";
import soulsistersImg2 from "../public/soulsisters2.png";
import adolfssondigitalImg from "../public/adolfssondigital.png";
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
      "Första steget är att ha ett initialt möte om förväntingar, krav och önskemål och mål. Detta är ett viktigt då det blir till underlag och en kravspecifikation. Detta görs för att kunna slutföra ett lyckat projekt.",
    icon: React.createElement(IoMdContacts),
    date: "Första kontakt och kravspecifikation",
  },
  {
    title: "Förslag & Vision",
    location: "Offert",
    description:
      "Andra steget är att efter vi samlat era krav och mål med mera så skapar vi en design och vision om hur er webbplats kan tänka sig se ut och verka. Detta görs med bland annat en designskiss. Detta görs i samband med en kostnadsfri offert. Som skickas till er.",
    icon: React.createElement(RiPresentationFill),
    date: "Förslag och offert",
  },
  {
    title: "Uppföljning, avtal & fakturering",
    location: "Avtal",
    description:
      "Tredje steget är att efter ni godkänt offerten och känner er nöjda med den. Då skickas ett avtal från oss som ska godkännas av både dig och av oss på Adolfsson Digital. I samband med detta avtal så skickas även en faktura som ska betalas.",
    icon: React.createElement(FaFileInvoice),
    date: "Uppföljning och avtal",
  },
  {
    title: "Utveckling, lansering & presentation av webbplats",
    location: "Utveckling & Lansering",
    description:
      "I det fjärde och sista steget så utvecklar vi er webbplats efter önskad design och krav. Vårt mål är att överträffa samtliga krav och presentera ett färdigt projekt som lämnar klienten över förväntan",
    icon: React.createElement(FaLaptopCode),
    date: "Adolfsson Digital utför utveckling av webbplats, och presenterar färdigt projekt för client",
  },
] as const;

export const projectsData = [
  {
    title: "Soul Sisters",
    description:
      "Jag fick i uppdrag att skapa webbplatsen för Soul Sisters (Mode ochklädbutik i Bollnäs). Med målet att ha ett showroom och nyheter samt kunna kontakta och boka tjejkvällar.",
    tags: [
      "React",
      "Next.js",
      "analytics",
      "perfomance-statistics",
      "Tailwind",
      "TypeScript",
      "EmailJS",
    ],
    imageUrl: soulsistersImg2,
    projectUrl: "https://soulsistershop.se",
  },
  {
    title: "Adolfsson Digital",
    description:
      "Detta är vår företagswebbplats. Webbplatsen du för närvarande befinner dig på är byggd med React, Next.js och TypeScript.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer-motion",
      "Resend",
    ],
    imageUrl: adolfssondigitalImg,
    projectUrl: "https://adolfssondigital.com",
  },
  {
    title: "Elvira Cornelia - Interior Designer",
    description:
      "För närvarande under utveckling. Detta är en portföljwebbplats för en inredningsarkitekt och designer.",
    tags: [""],
    imageUrl: wordanalyticsImg,
    projectUrl: "https://www.adolfssondigital.com/#projects",
  },
] as const;

export const skillsData = [
  {
    name: "Ulrika",
    role: "Grundare och säljare på Soul Sisters",
    testimonial:
      '"Jag kan varmt rekommendera James på Adolfsson Digital. Han har hjälpt mig att skapa en webbplats åt min butik Soul Sisters. Jag är mycket nöjd med resultatet. James är lyhörd. Jag är mycket nöjd med samarbetet och jag kommer att anlita honom igen för framtida projekt"',
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
    title: "En Webbplats på en dag",
    description:
      "Vi skapar en Webbplats på en dag. Detta paket inkluderar en Landingsida (Hem) och 3 ytterligare sidor som exempelvis Om oss, Kontakt, Tjänster",
    tags: ["4 Sidor", "Copywriting", "SEO", "Lansering", "Responsiv design"],
    price: "10 000 sek",

    price2: "",
  },
  {
    title: "Skärddarsydd Webbplats",
    description:
      "Vi skapar en skräddarsydd webbplats. Detta paket inkluderar det mesta. Vi bygger efter era krav och önskemål. Skapas i källkod med React.js/Next.js eller i platformen Webflow",
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
    ],
    price: "Från 10 000 sek",
    price2: "",
  },
  {
    title: "Konsult eller Serviceavtal",
    description:
      "Anlita mig som konsult. Jag hjälper er med ert befintliga projekt eller med att starta upp ett nytt projekt. Behöver du hjälp med driften av din webbplats? Vi erbjuder serviceavtal för att hålla din webbplats uppdaterad, övervakad och säker.",
    tags: [
      "React",
      "Next.js",
      "Webbdesign",
      "Content",
      "Uppdateringar",
      "anyltics rapportering",
      "performance rapportering",
    ],
    price: "Konsult: 300 sek/timme",
    price2: "Serviceavtal: 500 sek/månad",
  },
] as const;
