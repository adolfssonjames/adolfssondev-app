"use client";
import { useRef } from "react";
import { servicesData } from "../../lib/data";

import { motion, useScroll, useTransform } from "framer-motion";
type ServiceProps = (typeof servicesData)[number];
export default function Service({
  title,
  description,
  tags,
  price,
  price2,
}: ServiceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProggress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProggress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0 dark:text-slate-700"
    >
      <section className=" group text-center bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[33rem] hover:bg-slate-200 transition ml-4 sm:group-even:pl-10 cursor-default  ">
        <motion.div className=" pt-4 pb-16 px-5 sm:px-4 sm:pl-6 sm:pr-0 sm:pt-8 sm:max-w-[100%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
          <p className="mt-4 mb-1 ml-3 leading-relaxed text-gray-700 text-left">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto sm:mb-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-slate-950/[0.7] px-2 py-0 text-[0.7rem] uppercase  text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="group:hover:scale-110 pt-2 sm:pt-4 text-slate-600 font-medium text-lg ">
            {price} {price2}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
