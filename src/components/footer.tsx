"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <footer>
      <section className="flex flex-col items-center sm:flex-row gap-10 pb-10 sm:gap-56 justify-center dark:text-slate-700">
        <div>
          <ul className="flex flex-col gap-2 text-center sm:text-start">
            <p className="text-lg text-center sm:text-start">Sociala medier</p>
            <li>
              <a
                href="https://www.instagram.com/jamesadolfsson"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/james-adolfsson"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 text-center sm:text-start">
            <p className="text-lg text-center sm:text-start">Kontakt</p>
            <li>
              <a href="mailto:james@adolfssondigital.com">
                james@adolfssondigital.com
              </a>
            </li>
            <li>
              <a href="tel:+4673-703-18-95">tel: +46 73-703 18 95</a>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <small> &copy; 2024 Adolfsson Digital </small>{" "}
          <small> James Adolfsson, Kryssvägen 5, 13953, Stockholm </small>{" "}
          <small> Godkänd för F-skatt </small>{" "}
          <button
            className="text-blue-500 w-10 underline text-xs "
            onClick={openModal}
          >
            Integritetspolicy
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-6 rounded shadow-lg w-2/3 mt-10 text-black max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl mb-4">Integritetspolicy</h2>
            <div>
              <h3 className="font-bold text-lg">1. Introduktion</h3>
              <p>
                Välkommen till adolfssondigital.com. På Adolfsson Digital
                respekterar vi din integritet och är engagerade i att skydda den
                personliga information du delar med oss. Denna integritetspolicy
                beskriver hur vi samlar in, använder och skyddar din data när du
                besöker vår Webbplats och använder vårt kontaktformulär.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg pt-2">
                2. Information Vi Samlar In
              </h3>
              <p className="font-bold">
                {" "}
                a. Data som Samlas In Genom Vercel Web Analytics
              </p>
              <p>
                Vi använder Vercel Web Analytics för att hjälpa oss förstå hur
                vår Webbplats används och för att förbättra din upplevelse.
                Vercel Web Analytics är utformat för att följa ledande
                riktlinjer från dataskyddsmyndigheter och kan användas globalt.
                De typer av data vi samlar in inkluderar:
              </p>
              <ul className="py-1 list-disc ml-8">
                <li className="pt-1">
                  Antal Webbplatsbesökare: Vi spårar antalet besökare på vår
                  Webbplats.
                </li>
                <li className="pt-1">
                  Sidvisningar: Vi övervakar antalet visningar på varje sida.
                </li>
                <li className="pt-1">
                  Referrerinformation: Vi samlar in information om hur du kom
                  till vår Webbplats, till exempel via Google, LinkedIn eller
                  annan källa.
                </li>
                <li className="pt-1">
                  Geografisk Plats: Vi samlar in data om det land från vilket
                  din enhet får åtkomst till vår Webbplats.
                </li>
                <li className="pt-1">
                  Enhetsinformation: Vi samlar in information om det
                  operativsystem och webbläsare du använder.
                </li>
              </ul>
              <p className="pt-3 pb-1">
                Integritet genom Design: När vi använder Vercel Web Analytics
                samlas inga personliga identifierare in som kan spåra eller
                korsreferera användardata över olika applikationer eller
                webbplatser. Som standard tillåter Vercel Web Analytics endast
                användning av aggregerad data som inte kan identifiera eller
                återidentifiera kunder.
                <p className="py-1">
                  Användaridentifiering: Istället för att använda
                  tredjepartskakor identifieras slutanvändare med en hash skapad
                  från den inkommande begäran. Denna hash innehåller ingen
                  personlig information och används enbart för sessionshantering
                  och analysändamål.{" "}
                </p>
                <p className="py-1">
                  Sessionslivslängd: Livslängden på en besökares session lagras
                  inte permanent. Den raderas automatiskt efter 24 timmar,
                  vilket säkerställer att ingen långsiktig spårning av
                  individuella användare sker.
                </p>
              </p>
              <p className="font-bold">
                b. Data som Samlas In Genom Kontaktformuläret
              </p>
              <p>
                När du använder vårt kontaktformulär samlar vi in följande
                personuppgifter:
              </p>
              <ul className="list-disc ml-8">
                <li>Förnamn</li>
                <li>Efternamn</li>
                <li>E-postadress</li>
              </ul>
              <p>
                Denna information ges av dig frivilligt och används enbart för
                att svara på dina förfrågningar eller för att tillhandahålla de
                tjänster eller den information du begär.
              </p>
              <p>
                Begäran om Radering eller Ändring: Om du önskar att den
                personliga information du lämnat genom vårt kontaktformulär
                raderas eller ändras kan du skicka en begäran till oss på
                james@adolfssondigital.com. Vi kommer att behandla din begäran
                snarast, med förbehåll för eventuella juridiska skyldigheter att
                behålla viss data.
              </p>
              <div>
                <h3 className="font-bold text-lg pt-2">
                  3. Hur Vi Använder Din Data
                </h3>
                <p className="font-bold">a. Data från Vercel Web Analytics</p>
                <p>
                  Den data vi samlar in genom Vercel Web Analytics används för
                  att:
                </p>
                <ul className="list-disc ml-8">
                  <li>Analysera besökares beteende och webbplatstrafik.</li>
                  <li>
                    Förbättra vår Webbplats innehåll, layout och
                    användarupplevelse.
                  </li>
                  <li>
                    Identifiera trender och samla insikter för att förbättra
                    våra tjänster.
                  </li>
                </ul>
                <p className="font-bold">
                  b. Personuppgifter från Kontaktformuläret
                </p>
                <p>
                  De personuppgifter du lämnar genom kontaktformuläret används
                  för att:
                </p>
                <ul className="list-disc ml-8">
                  <li>Svara på dina förfrågningar.</li>
                  <li>
                    Kommunicera med dig angående de tjänster eller den
                    information du har begärt.
                  </li>
                  <li>Tillhandahålla kundsupport.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg pt-2">
                  4. Datadelning och Säkerhet
                </h3>
                <p>Din data hanteras med största omsorg:</p>
                <ul className="list-disc ml-8"></ul>
                <li className=" ml-4">
                  Datadelning: Den data vi samlar in genom Vercel Web Analytics
                  förblir säker inom Adolfsson Digital och delas inte med tredje
                  part. Den är endast tillgänglig för webbplatsägaren på
                  begäran.
                </li>
                <li className=" ml-4">
                  Personuppgifter: Personuppgifter som samlas in genom
                  kontaktformuläret delas inte med tredje part, utom när det är
                  nödvändigt för att tillhandahålla våra tjänster eller för att
                  uppfylla lagliga förpliktelser.
                </li>
              </div>
              <div>
                <h3 className="font-bold text-lg pt-2">5. Dina Rättigheter</h3>
                <p>
                  Beroende på din plats kan du ha följande rättigheter angående
                  dina personuppgifter:
                </p>
                <ul className="list-disc"></ul>
                <li className="ml-4">
                  Tillgång: Du har rätt att begära tillgång till de
                  personuppgifter vi har om dig.
                </li>
                <li className=" ml-4">
                  Korrigering: Du kan begära att vi korrigerar eventuella
                  felaktigheter i din data.
                </li>
                <li className=" ml-4">
                  Radering: Du kan begära att vi raderar dina personuppgifter,
                  med förbehåll för vissa undantag.
                </li>
                <p>
                  För att utöva några av dessa rättigheter, vänligen kontakta
                  oss på james@adolfssondigital.com.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg pt-2">
                  6. Kakor (cookies) och Spårningsteknologier
                </h3>
                <p>
                  Vi använder inte traditionella tredjepartskakor. Istället
                  använder vi andra spårningsteknologier som följer de högsta
                  integritetsstandarderna och som enbart tillåter oss att
                  använda aggregerad, icke-identifierbar data. Du kan
                  kontrollera användningen av dessa teknologier genom dina
                  webbläsarinställningar.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg pt-2">
                  7. Ändringar av Denna Policy
                </h3>
                <p>
                  Vi kan uppdatera denna integritetspolicy från tid till annan
                  för att återspegla förändringar i våra rutiner eller av andra
                  operativa, juridiska eller regleringsskäl. Eventuella
                  ändringar kommer att publiceras på denna sida med ett
                  uppdaterat giltighetsdatum.
                </p>
              </div>
              <div className="mb-2">
                <h3 className="font-bold text-lg pt-2">8. Kontakta Oss</h3>
                <p>
                  Om du har några frågor eller funderingar kring denna
                  integritetspolicy eller våra datapraxis, vänligen kontakta oss
                  på:
                </p>
              </div>
              E-post:{" "}
              <a href="mailto:james@adolfssondigital.com">
                james@adolfssondigital.com
              </a>
              <small className=" flex flex-col pt-4">
                Org.nr: 19950902XXXX - fullständig lämnas på begäran
              </small>
            </div>
            <div className="flex justify-center sticky bottom-0">
              <button
                className=" mt-4 px-4 py-2 bg-slate-600 text-white rounded-full sm:px-20"
                onClick={closeModal}
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
