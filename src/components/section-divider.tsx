"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-slate-600 my-20 h-20 w-1 rounded-full hidden sm:block dark:bg-gray-200"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    ></motion.div>
  );
}
