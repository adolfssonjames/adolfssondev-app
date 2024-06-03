import React from "react";

export default function Footer() {
  return (
    <footer>
      <section className="flex gap-10 pb-10 sm:gap-56 justify-center">
        <div>
          <small> &copy; 2024 Adolfsson Digital </small>{" "}
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <p className="text-lg">Sociala medier</p>
            <li>
              Instagram <a></a>
            </li>
            <li>
              LinkedIn <a></a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <p className="text-lg">Kontakt</p>
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
      </section>
    </footer>
  );
}
