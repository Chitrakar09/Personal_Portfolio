import React from "react";
import { motion } from "motion/react";

function Footer() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 5.5,
          type: "spring",
          damping: 16,
          stiffness: 120,
        },
      }}
      id="footer"
      className="w-full rounded-[1.25rem] flex justify-between items-center text-text-light mb-2"
    >
      <div
        id="copyright"
        className="flex flex-col items-start justify-evenly w-full"
      >
        <span className="font-bold text-sm lg:text-lg 3xl:text-3xl">
          Pratyush Chitrakar
        </span>
        <span className="text-[0.625rem] lg:text-[0.7rem] flex flex-wrap 3xl:text-lg">
          © 2025 • Designed & Developed by Pratyush Chitrakar
        </span>
      </div>
      <div
        id="follow"
        className="flex flex-col md:flex-row md:justify-end md:items-end items-end justify-center w-full md:gap-2"
      >
        <span className="text-[0.625rem] md:text-sm lg:text-lg 3xl:text-2xl font-bold">
          Follow
        </span>
        <span className="text-[0.625rem] md:text-sm lg:text-lg 3xl:text-2xl hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a href="https://github.com/Chitrakar09" target="_blank">
            Github
          </a>
        </span>
        <span className="text-[0.625rem] md:text-sm lg:text-lg 3xl:text-2xl hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a
            href="https://www.linkedin.com/in/pratyush-chitrakar/"
            target="_blank"
          >
            Linkedin
          </a>
        </span>
        <span className="text-[0.625rem] md:text-sm lg:text-lg 3xl:text-2xl hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a href="https://www.instagram.com/chitrakar_09/" target="_blank">
            Instagram
          </a>
        </span>
      </div>
    </motion.div>
  );
}

export default Footer;
