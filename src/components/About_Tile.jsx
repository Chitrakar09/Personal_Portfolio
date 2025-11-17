import React from "react";
import { useState } from "react";
import ProfilePic from "./ProfilePic";
import Button from "./Button";
import { useNavigate } from "react-router";
import {
  css,
  tailwind,
  html,
  react,
  javascript,
  git,
  figma,
} from "@/assets/icon_index";
import { useMediaQuery } from "@mui/material";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isAnimated as checkForAnimated } from "@/features/checkAnimated/checkAnimatedSlice";

function About_Tile() {
  //icons
  const icons = [
    { icon: react },
    { icon: javascript },
    { icon: tailwind },
    { icon: html },
    { icon: css },
    { icon: figma },
    { icon: git },
  ];

  //useNavigate
  const navigate = useNavigate();

  //resume download function
  const downloadFile = (filePath, fileName) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  //laptop/desktop breakpoint
  const isDesktop = useMediaQuery("(min-width:1024px)");

  //Animation
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated)
  const dispatch= useDispatch();
  //Variants
  const avatarVariants = {
    hiddenMobile: {
      y: 1000,
      scale: 0.05,
    },
    visibleMobile: {
      y: 0,
      scale: 1,
      transition: {
        y: {
          type: "spring",
          damping: 16,
          stiffness: 50,
          mass: 2,
        },
        scale: {
          delay: 1.9,
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    hiddenDesktop: {
      scale: 0.05,
      x: -10000,
    },
    visibleDesktop: {
      x: 0,
      scale: 1,
      transition: {
        x: {
          type: "spring",
          damping: 16,
          stiffness: 50,
          mass: 2,
        },
        scale: {
          delay: 1.9,
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
  };
  const headingVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 3.5,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  const profileIdVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 3.5,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  const profileParentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 4.5,
      },
    },
  };
  const profileChildVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const AboutParentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 4.7,
        staggerChildren: 0.5,
      },
    },
  };
  const AboutChildVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    // Main container
    <div
      id="container"
      className="min-w-full min-h-full p-5 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-10 xl:gap-0"
    >
      {/* profile container */}
      <div
        id="profile"
        className="w-full flex flex-col justify-center items-center px-2.5 lg:pl-5 gap-1 rounded-2xl lg:order-2"
      >
        {/* Profile Pic */}
        <motion.div
          variants={avatarVariants}
          initial={!hasAnimated&&(isDesktop ? "hiddenDesktop" : "hiddenMobile")}
          animate={!hasAnimated&&(isDesktop ? "visibleDesktop" : "visibleMobile")}
          id="profilePic"
        >
          <ProfilePic
            url="/profile.png"
            classname="min-h-40 min-w-40 md:min-h-50 md:min-w-50 lg:min-h-90 lg:min-w-90 xl:min-w-115 xl:min-h-115 2xl:min-w-80 2xl:min-h-80 3xl:min-w-150 3xl:min-h-150 lg:mb-5 rounded-full bg-center md:shadow-[0_30px_131px_120px_rgba(255,213,74,0.56)] xl:shadow-[0_0_131px_150px_rgba(255,213,74,0.56)]"
          />
        </motion.div>

        {/* Profile About */}
        <motion.div
          variants={profileParentVariants}
          initial={!hasAnimated&&("hidden")}
          animate={!hasAnimated&&("visible")}
          id="profileAbout"
          className="flex flex-col justify-center items-center gap-1"
        >
          {/* Name */}
          <motion.span
            variants={profileIdVariants}
            className="text-text-light font-extrabold text-xl lg:text-3xl xl:text-5xl 2xl:text-[2.5rem] 3xl:text-7xl text-center"
          >
            Pratyush Chitrakar
          </motion.span>

          {/* title */}
          <motion.span
            variants={profileChildVariants}
            className="text-text-light/60 text-[0.8rem] ms:text-xs ls:text-[0.8rem] md:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl text-center mb-1"
          >
            Web Developer | UI/UX Enthusiast | CSIT Student
          </motion.span>

          {/* tech stack */}
          <motion.div
            variants={profileChildVariants}
            id="tech_stack"
            className="w-full flex justify-center gap-3 items-center"
          >
            {icons.map((item) => (
              <img
                src={item.icon}
                alt={`${item.icon}`}
                key={`${item.icon}`}
                className="w-3 ms:w-5 lg:w-8 3xl:w-12 h-auto"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* About container */}
      <motion.div
        variants={AboutParentVariants}
        initial={!hasAnimated&&("hidden")}
          animate={!hasAnimated&&("visible")}
          onAnimationComplete={() => dispatch(checkForAnimated())
      }
        id="about"
        className="w-full text-text-light flex flex-col justify-center items-center gap-3 lg:order-1"
      >
        {/* heading */}
        <motion.h1
          variants={headingVariants}
           initial={!hasAnimated&&("hidden")}
          animate={!hasAnimated&&("visible")}
          className="text-center font-bold text-[1.11rem] ms:text-[1.5rem] ls:text-2xl md:text-4xl lg:text-left lg:text-7xl lg:mb-2 xl:text-[7rem] 2xl:text-[5.5rem] 3xl:text-[11rem]"
        >
          Solving, creating, exploring with purpose.
        </motion.h1>

        {/* Description */}
        <motion.div
          variants={AboutChildVariants}
          id="description"
          className="flex flex-col gap-2"
        >
          <p className="text-text-muted text-center 3xl:mb-3 text-[0.8rem] ms:text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl lg:text-left">
            I’m a CSIT student and web developer passionate about building
            modern, responsive websites.{" "}
          </p>
          <p className="text-text-muted text-center text-[0.8rem] ms:text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl lg:text-left">
            Currently, I’m sharpening my skills in React, Tailwind, and
            problem-solving while working on personal projects to learn and
            grow.
          </p>
        </motion.div>

        {/* buttons */}
        <motion.div
          variants={AboutChildVariants}
          id="buttons"
          className="w-full mt-5 3xl:mt-10 flex justify-center lg:justify-start items-center gap-5"
        >
          <Button
            text="View Projects"
            className="py-2 px-3 md:py-4 md:px-5 md:text-2xl 3xl:py-10 3xl:px-12 3xl:text-5xl animate-ease-linear hover:bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] hover:-translate-y-1 transition-transform delay-100 ease-linear"
            onClick={() => navigate("/realm/projects")}
          />
          <Button
            className="py-2 px-3 md:py-4 md:px-5 md:text-2xl 3xl:py-10 3xl:px-12 3xl:text-5xl animate-ease-linear hover:bg-accent-tealGlow hover:-translate-y-1 transition-transform delay-100 ease-linear"
            ring={true}
            text="Download Resume"
            text_Color="text-text-light"
            background="bg-background-dark"
            shadow={false}
            onClick={() => downloadFile("/resume.pdf", "resume.pdf")}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About_Tile;
