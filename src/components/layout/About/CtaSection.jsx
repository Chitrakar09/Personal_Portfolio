import React from "react";
import { Button } from "@/components";
import {motion} from 'motion/react';
function CtaSection() {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="w-full px-5 md:px-10 py-10 bg-black text-center">
      <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView={"visible"}
      className="w-full flex flex-col gap-3 4k:gap-7 px-5 md:px-10 py-5 md:py-10 border-2 border-white rounded-2xl">
        <h1 className="font-heading font-extrabold font-lobster text-white text-2xl tablet:text-5xl 4k:text-8xl">
          Let's Transform Ideas into Code
        </h1>
        <p className="text-text-muted font-bold text-sm tablet:text-lg smLaptop:text-[1.19rem] 4k:text-4xl">Whether you have a complex UI challenge, a startup idea, or an opening for an ambitious developer, I am ready to commit 100%.</p>
        <a href='mailto:chitrakarpratyush@gmail.com' target="_blank" className="mt-0.5">
        <Button
            text="Send an Email"
            className="px-3 py-2 text-[3.7dvw] tablet:text-[2.5dvw] smLaptop:text-[2dvw] laptop:text-[1.4dvw] 4k:text-[1.9dvw] animate-ease-linear hover:bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] hover:-translate-y-1 transition-transform delay-100 ease-linear"
          />
          </a>
      </motion.div>
    </div>
  );
}

export default CtaSection;
