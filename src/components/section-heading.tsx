import React from "react";
type SectionHeadingProps = { children: React.ReactNode };
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold text-center mb-8 capitalize">
      {children}
    </h2>
  );
}
