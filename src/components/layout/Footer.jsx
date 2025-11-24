import React from "react";
import { useMediaQuery } from "@mui/material";
function Footer() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div
      id="footer"
      className="w-full rounded-t-[1.25rem] py-2 px-5 md:px-10 mt-5 flex justify-between items-center bg-background-dark border-t-4 border-amber-50 text-amber-50"
    >
      <div
        id="copyright"
        className="flex flex-col items-start justify-center w-full"
      >
        <span className="font-[1000] text-[4.9vw] md:text-[3vw] laptop:text-[1.3vw]/6">
          Pratyush Chitrakar
        </span>
        <span className="text-[3vw] md:text-[1.5vw] laptop:text-[0.8vw] font-bold flex flex-wrap">
          © 2025 • Designed & Developed by Pratyush Chitrakar
        </span>
      </div>
      <div
        id="follow"
        className="hidden md:flex justify-end items-center w-full gap-2"
      >
        <span className="text-[2.5vw] laptop:text-[1.3vw] font-bold">
          Follow
        </span>
        <div className="flex gap-2">
        <span className="text-[2.5vw] laptop:text-[1.3vw] hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a href="https://github.com/Chitrakar09" target="_blank">
            Github
          </a>
        </span>
        <span className="text-[2.5vw] laptop:text-[1.3vw] hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a
            href="https://www.linkedin.com/in/pratyush-chitrakar/"
            target="_blank"
          >
            Linkedin
          </a>
        </span>
        <span className="text-[2.5vw] laptop:text-[1.3vw] hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a href="https://www.instagram.com/chitrakar_09/" target="_blank">
            Instagram
          </a>
        </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
