import React from "react";
function Footer() {
  const dateObj= new Date();
  const year= dateObj.getFullYear();
  return (
    <div
      id="footer"
      className="w-full py-2 px-5 md:px-10 flex justify-between items-center bg-background-dark text-amber-50"
    >
      <div
        id="copyright"
        className="flex flex-col items-center smLaptop:items-start justify-center w-full"
      >
        <span className="text-[3vw] md:text-[1.5vw] laptop:text-[0.8vw] font-bold flex flex-wrap">
          © {`${year}`} • Designed & Developed by Pratyush Chitrakar
        </span>
      </div>
      <div
        id="follow"
        className="hidden md:flex justify-end items-center w-full gap-2"
      >
        <span className="text-[2vw] laptop:text-[1vw] font-bold">
          Follow
        </span>
        <div className="flex gap-2">
        <span className="text-[2vw] laptop:text-[1vw] hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a href="https://github.com/Chitrakar09" target="_blank">
            Github
          </a>
        </span>
        <span className="text-[2vw] laptop:text-[1vw] hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
          <a
            href="https://www.linkedin.com/in/pratyush-chitrakar/"
            target="_blank"
          >
            Linkedin
          </a>
        </span>
        <span className="text-[2vw] laptop:text-[1vw] hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out">
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
