import React from "react";

export default function Footer() {
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
        <div>
          <small> &copy; 2024 Adolfsson Digital </small>{" "}
        </div>
      </section>
    </footer>
  );
}
