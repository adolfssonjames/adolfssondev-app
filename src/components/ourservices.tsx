"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import { servicesData } from "../../lib/data";

import Service from "./service";

export default function Ourservices() {
  const { ref } = useSectionInView("Tjänster"); // använder default threshold 0.75 från hook

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[70rem] text-center leading-8 sm:mb-40 scroll-mt-28 dark:text-slate-700 flex flex-row "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      id="services"
    >
      <div>
        <SectionHeading>Tjänster</SectionHeading>
        <div className="flex flex-row ">
          {servicesData.map((service, index) => (
            <React.Fragment key={index}>
              <div className="w-1/3">
                <Service {...service} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
