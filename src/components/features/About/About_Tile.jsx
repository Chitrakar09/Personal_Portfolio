import React from "react";
import ProfilePic from "../../ui/ProfilePic";
import Button from "../../ui/Button";
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
  console.log(window.innerWidth)
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
      className="min-w-full min-h-full py-5 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 lg:gap-10 xl:gap-0"
    >
      {/* profile container */}
      <div
        id="profile"
        className="w-full flex flex-col justify-center items-center px-2.5 lg:pl-5 rounded-2xl lg:order-2"
      >
        {/* Profile Pic */}
        <motion.div
          variants={avatarVariants}
          initial={!hasAnimated&&(isDesktop ? "hiddenDesktop" : "hiddenMobile")}
          animate={!hasAnimated&&(isDesktop ? "visibleDesktop" : "visibleMobile")}
          id="profilePic"
          className="fl"
        >
          <ProfilePic
            url="/profile.png"
            classname="w-[35dvw] h-[35dvw] md:w-[25dvw] tablet:h-[25dvw] smLaptop:w-[30dvw] smLaptop:h-[30dvw] laptop:w-[20dvw] laptop:h-[20dvw] lgLaptop:w-[20dvw] lgLaptop:h-[20dvw] 4k:w-[23dvw] lg:mb-2 4k:h-[23dvw] rounded-full bg-center md:shadow-[0_30px_131px_120px_rgba(255,213,74,0.56)] xl:shadow-[0_0_131px_150px_rgba(255,213,74,0.56)]"
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
            className="text-text-light font-extrabold text-[6vw] tablet:text-[4vw] smLaptop:text-[3.2vw] laptop:text-[2.5vw] text-center"
          >
            Pratyush Chitrakar
          </motion.span>

          {/* title */}
          <motion.span
            variants={profileChildVariants}
            className="text-text-light/60 text-[3.1dvw] tablet:text-[2.3dvw] smLaptop:text-[1.7dvw] laptop:text-[1.1dvw] lgLaptop:text-[1.3dvw] text-center mb-2"
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
                className="w-[4.5dvw] tablet:w-[2.3dvw] smLaptop:w-[2.5dvw] laptop:w-[1.7dvw] lgLaptop:w-[1.5dvw] 4k:w-[1.7dvw]"
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
        className="w-full text-text-light flex flex-col justify-center items-center gap-1 lg:order-1"
      >
        {/* heading */}
        <motion.h1
          variants={headingVariants}
           initial={!hasAnimated&&("hidden")}
          animate={!hasAnimated&&("visible")}
          className="text-center lg:text-left font-bold text-[5.8dvw] smLaptop:text-[7.5dvw]/20 laptop:text-[5.8dvw]/17 lgLaptop:text-[6.5dvw]/26 4k:text-[7dvw]/45 lg:mb-5 lgLaptop:mb-10"
        >
          Solving, creating, exploring with purpose.
        </motion.h1>

        {/* Description */}
        <motion.div
          variants={AboutChildVariants}
          id="description"
          className="flex flex-col gap-2 4k:mb-3"
        >
          <p className="text-text-muted text-center text-[3.5dvw] tablet:text-[2.3dvw] smLaptop:text-[1.6dvw] laptop:text-[1.3dvw] lgLaptop:text-[1.19dvw] 4k:text-[1.3dvw] lg:text-left">
            I’m a CSIT student and web developer passionate about building
            modern, responsive websites.{" "}
          </p>
          <p className="text-text-muted text-center text-[3.5dvw] tablet:text-[2.3dvw] smLaptop:text-[1.6dvw] laptop:text-[1.3dvw] lgLaptop:text-[1.19dvw] 4k:text-[1.3dvw] lg:text-left">
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
            className="px-3 py-2 text-[3.7dvw] tablet:text-[2.5dvw] smLaptop:text-[2dvw] laptop:text-[1.4dvw] 4k:text-[1.9dvw] animate-ease-linear hover:bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] hover:-translate-y-1 transition-transform delay-100 ease-linear"
            onClick={() => navigate("/realm/projects")}
          />
          <Button
            className="px-3 py-2 text-[3.7dvw] tablet:text-[2.5dvw] smLaptop:text-[2dvw] laptop:text-[1.4dvw] 4k:text-[1.9dvw] animate-ease-linear hover:bg-accent-tealGlow hover:-translate-y-1 transition-transform delay-100 ease-linear"
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
