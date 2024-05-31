"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../../lib/data";
import { useSectionInView } from "../../lib/hooks";
import { animate, delay, motion } from "framer-motion";

const fadeInAnimationvariants = {
  initial: { opacity: 0, y: 200 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }), //index finns för att varje element ska ha en egen delay
};

export default function Testimonials() {
  const { ref } = useSectionInView("Referenser", 0.5);

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>testimonials</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((testimonial, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationvariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {testimonial}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
