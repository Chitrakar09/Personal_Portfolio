import React from "react";
import ProfilePic from "../../ui/ProfilePic";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";
import { motion, scale } from "motion/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isAnimated as checkForAnimated } from "@/features/checkAnimated/checkAnimatedSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
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
  const hasAnimated = useSelector(
    (state) => state.checkForAnimated.hasAnimated
  );
  const dispatch = useDispatch();
  //Variants
  const avatarVariants = {
    hiddenDesktop: {
      opacity: 0,
      x: -150,
    },
    visibleDesktop: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const headingVariants = {
    hidden: {
      opacity: 0,
      x: isDesktop ? 150 : 0,
      y: isDesktop ? 0 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0,
        duration: isDesktop ? 1 : 0.5,
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
        delay: 1,
        duration: 1,
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
        delayChildren: 1,
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
        delayChildren: isDesktop ? 1 : 0.2,
        staggerChildren: 0.2,
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
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  

  return (
    // Main container
    <motion.div
      id="AboutContainer"
      className="w-full h-full px-5 md:px-10 pt-[5vh] smLaptop:pt-[10vh] pb-[5vh] tablet:pb-[5vh] smLaptop:pb-[10vh] laptop:pb-[10vh] lgLaptop:pb-[10vh]  bg-black flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-start gap-15 lg:gap-10 xl:gap-0"
    >
      {/* profile container */}
      <div
        id="profile"
        className="w-full hidden smLaptop:flex flex-col justify-center items-center px-2.5 lg:pl-5 rounded-2xl lg:order-2 scale-110"
      >
        {/* Profile Pic */}
        <motion.div
          variants={avatarVariants}
          initial={!hasAnimated && "hiddenDesktop"}
          animate={!hasAnimated && "visibleDesktop"}
          id="profilePic"
        >
          <ProfilePic
            url="/avatar.png"
            classname="smLaptop:w-[25dvw] smLaptop:h-[25dvw] laptop:w-[20dvw] laptop:h-[20dvw] lgLaptop:w-[19dvw] lgLaptop:h-[19dvw] 4k:w-[23dvw] lg:mb-2 4k:h-[23dvw] rounded-full bg-[rgba(255,213,74,0.52)] bg-center smLaptop:shadow-[0_0_131px_120px_rgba(255,213,74,0.56)]"
          />
        </motion.div>

        {/* Profile About */}
        <motion.div
          variants={profileParentVariants}
          initial={!hasAnimated && "hidden"}
          animate={!hasAnimated && "visible"}
          id="profileAbout"
          className="flex flex-col justify-center items-center"
        >
          {/* Name */}
          <motion.span
            variants={profileIdVariants}
            className="text-text-light font-extrabold smLaptop:text-[3.2vw] laptop:text-[2.5vw] text-center"
          >
            Pratyush Chitrakar
          </motion.span>

          {/* title */}
          <motion.span
            variants={profileChildVariants}
            className="text-text-light/60 smLaptop:text-[2dvw] laptop:text-[1.5dvw] lgLaptop:text-[1.5dvw] text-center mb-4 flex flex-col"
          >
            <span>chitrakarpratyush@gmail.com</span>
            <span className="smLaptop:text-[1.5dvw] laptop:text-[1dvw] lgLaptop:text-[1dvw]"><FontAwesomeIcon icon={faLocationDot}/>Nepal</span>
          </motion.span>

          {/* tech stack */}
          <motion.div
            variants={profileChildVariants}
            id="tech_stack"
            className="w-full flex justify-center gap-3 items-center text-amber-50"
          >
            <motion.a
              whileInView={hasAnimated&&{
                y:[0,-10,0],
                transition:{
                  repeat:Infinity,
                  repeatType:"loop",
                  duration:2
                }
              }}
              href="https://github.com/Chitrakar09"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="smLaptop:text-[2.5dvw] laptop:text-[1.7dvw] lgLaptop:text-[2dvw] 4k:text-[2dvw] hover:text-accent-amber hover:-translate-y-1 transition-all duration-200"
              />
            </motion.a>
            <motion.a
              whileInView={hasAnimated&&{
                y:[0,-10,0],
                transition:{
                  delay:0.25,
                  repeat:Infinity,
                  repeatType:'loop',
                  duration:2
                }
              }}
              href="https://www.instagram.com/chitrakar_09/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="smLaptop:text-[2.5dvw] laptop:text-[1.7dvw] lgLaptop:text-[2dvw] 4k:text-[2dvw] hover:text-accent-amber hover:-translate-y-1 transition-all duration-200"
              />
            </motion.a>
            <motion.a
              whileInView={hasAnimated&&{
                y:[0,-10,0],
                transition:{
                  delay:0.5,
                  repeat:Infinity,
                  repeatType:'loop',
                  duration:2
                }
              }}
              href="https://www.facebook.com/chitrakar09/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="smLaptop:text-[2.5dvw] laptop:text-[1.7dvw] lgLaptop:text-[2dvw] 4k:text-[2dvw] hover:text-accent-amber hover:-translate-y-1 transition-all duration-200"
              />
            </motion.a>
            <motion.a
            whileInView={hasAnimated&&{
                y:[0,-10,0],
                transition:{
                  delay:0.75,
                  repeat:Infinity,
                  repeatType:'loop',
                  duration:2
                }
              }}
              href="https://www.linkedin.com/in/pratyush-chitrakar/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="smLaptop:text-[2.5dvw] laptop:text-[1.7dvw] lgLaptop:text-[2dvw] 4k:text-[2dvw] hover:text-accent-amber hover:-translate-y-1 transition-all duration-200"
              />
            </motion.a>
          </motion.div>
          {/* buttons */}
        </motion.div>
      </div>

      {/* About container */}
      <motion.div
        variants={AboutParentVariants}
        initial={"hidden"}
        animate={"visible"}
        onAnimationComplete={() => dispatch(checkForAnimated())}
        id="about"
        className="w-full text-text-light flex flex-col justify-center items-center gap-1 lg:order-1"
      >
        {/* heading */}
        <motion.h1
          variants={headingVariants}
          initial={ "hidden"}
          animate={  "visible"}
          whileInView={(hasAnimated&&!isDesktop)&&{
                y:[0,-10,0],
                transition:{
                  repeat:Infinity,
                  repeatType:'loop',
                  duration:3
                }
              }}
          className="text-center lg:text-left font-bold text-[5vh]/15 tablet:text-[4.5rem] smLaptop:text-[7.5dvw]/20 laptop:text-[6dvw]/20 lgLaptop:text-[6rem] 4k:text-[13rem]/[12rem] mb-6"
        >
          Frontend Developer & Performance Specialist
        </motion.h1>

        {/* Description */}
        <motion.div
          variants={AboutChildVariants}
          id="description"
          className="flex flex-col gap-2 4k:mb-3"
        >
          <p className="text-text-muted text-center text-[3.5dvw] tablet:text-[2.3dvw] smLaptop:text-[1.6dvw] laptop:text-[1.3dvw] lgLaptop:text-[1.25dvw] 4k:text-[1.3dvw] lg:text-left">
            I translate complex design specifications into high-performance user
            experiences. I specialize in building pixel-perfect, accessible
            interfaces using React and Tailwind.
          </p>
        </motion.div>
        {/* buttons */}
        <motion.div
          variants={AboutChildVariants}
          id="buttons"
          className="w-full mt-5 3xl:mt-10 flex justify-center smLaptop:justify-start items-center gap-5"
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
    </motion.div>
  );
}

export default AboutSection;
