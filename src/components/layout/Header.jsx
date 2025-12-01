import React from "react";
import { NavLink,useLocation } from "react-router";
import { motion } from "motion/react";
import { useMediaQuery } from "@mui/material";

function Header() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const location= useLocation();
  return (
    <motion.div
      initial={location.pathname==="/realm/about"&&{
        y: -1000,
      }}
      animate={location.pathname==="/realm/about"&&{
        y: 0,
        transition: {
          delay: isDesktop?2.65:2.6,
          type: "spring",
          damping: isDesktop?20:18,
          stiffness: 100,
        },
      }}
      id="header"
      className="px-5 md:px-10 py-2 w-full flex flex-col md:flex-row justify-center md:justify-center items-center gap-5"
    >
      <div
        id="intro"
        className="flex gap-3 w-full justify-start items-center md:justify-start"
      >
        <div
          id="logo"
          className="bg-linear-[90deg,#FFD54A_0%,#0A2540_100%] font-bold text-4xl min-h-14 min-w-14 max-w-20 max-h-20 3xl:text-5xl 3xl:min-h-20 3xl:min-w-20 flex justify-center items-center rounded-2xl"
        >
          P
        </div>
        <div
          id="description"
          className="flex flex-col justify-center items-start"
        >
          <div
            id="name"
            className="font-bold text-primary-golden text-[1.15rem] ms:text-xl ls:text-2xl 3xl:text-4xl"
          >
            Pratyush Chitrakar
          </div>
          <div
            id="title"
            className="font-bold text-text-muted text-[0.7rem] ls:text-sm 3xl:text-xl"
          >
            Web Developer | CSIT Student
          </div>
        </div>
      </div>

      <nav className="w-full  text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] 3xl:text-[2rem] flex justify-between md:justify-end md:gap-10 items-center px-1">
        <NavLink
          to={"/realm/about"}
          className={({ isActive }) =>
            `hover:-translate-y-1 transition-all duration-200 ${
              isActive
                ? "text-text-light underline underline-offset-8 -translate-y-1"
                : "text-text-light/30"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/realm/projects"}
          className={({ isActive }) =>
            `hover:-translate-y-1 transition-all duration-200 ${
              isActive
                ? "text-text-light underline underline-offset-8 -translate-y-1"
                : "text-text-light/30"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/realm/contact"}
          className={({ isActive }) =>
            `hover:-translate-y-1 transition-all duration-200 ${
              isActive
                ? "text-text-light underline underline-offset-8 -translate-y-1"
                : "text-text-light/30"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </motion.div>
  );
}

export default Header;
