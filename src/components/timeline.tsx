"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data";
import { useSectionInView } from "../../lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Timeline() {
  const { ref } = useSectionInView("Tidslinje");
  const { theme } = useTheme();

  return (
    <section
      id="project-timeline"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 dark:text-slate-700"
    >
      <SectionHeading>Projekt-tidslinje</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba (255,255,255,0.05)"
                    : "(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: theme === "light" ? "#fff" : "#002646",
              }}
              contentArrowStyle={{}}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                fontSize: "1.5rem",
                background: "#f3f4f6",
                color: theme === "light" ? "#3A5A71" : "#3A5A71",
              }}
            >
              <h3 className="font-semibold capitalize text-slate-700 dark:text-slate-700">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-slate-700 dark:text-slate-700">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 dark:text-slate-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
