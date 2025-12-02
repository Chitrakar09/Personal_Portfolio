import React from "react";
import ProfilePic from "../components/ui/ProfilePic";
import { Button } from "../components";
import { Link } from "react-router";
import { motion } from "motion/react";

function LandingPage() {
  const avatarHolderVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  const infoParentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.6,
      },
    },
  };
  const infoChildVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      id="container"
      className="w-full h-full flex justify-center items-center gap-10 lg:gap-35 px-10 flex-col lg:flex-row"
    >
      <motion.div
        id="avatar"
        variants={avatarHolderVariant}
        initial="hidden"
        animate="visible"
      >
        <ProfilePic
          url="/profile_Landing.jpg"
          classname="min-w-52 min-h-52 lg:w-70 lg:h-70 rounded-full bg-top shadow-[0_0_131px_100px_rgba(255,213,74,0.56)]"
        />
      </motion.div>
      <motion.div
        variants={infoParentVariants}
        initial="hidden"
        animate="visible"
        id="info"
        className="text-text-light text-center flex flex-col items-center justify-center gap-1 "
      >
        <motion.p
          variants={infoChildVariants}
          id="intro"
          className="font-extrabold text-3xl ls:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-0"
        >
          Hi, I am{" "}
          <span className="bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] bg-clip-text text-transparent">
            Pratyush
          </span>
        </motion.p>

        <motion.p
          variants={infoChildVariants}
          id="title"
          className="font-bold text-[16px] ls:text-lg md:text-sm lg:text-xl text-text-light mt-3"
        >
          Web Developer | UI/UX Enthusiast
        </motion.p>
        <motion.div variants={infoChildVariants} id="button">
          <Link to="/realm/about">
            <Button
              text="Discover Me"
              className="p-4 text-lg md:text-2xl mt-5 hover:bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] hover:-translate-y-1 transition-transform delay-100 ease-linear"
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
