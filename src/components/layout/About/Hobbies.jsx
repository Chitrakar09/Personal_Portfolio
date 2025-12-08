import React from "react";
import { BounceCards } from "@/components";
import { useMediaQuery } from "@mui/material";
import { motion } from "motion/react";

function Hobbies() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const is4k = useMediaQuery("(min-width:2560px)");
  const photography = [
    "/hobbies/photographs/photo1.jpg",
    "/hobbies/photographs/photo6.jpg",
    "/hobbies/photographs/photo4.jpg",
    "/hobbies/photographs/photo5.jpg",
  ];
  const transformStyles = [
    "rotate(-3deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  //   animation
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const headingVariants = {
    initial: {
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
    <div
      id="hobbiesSectionContainer"
      className="w-full mt-10 px-5 md:px-10 flex flex-col items-center justify-center text-text-light gap-8 smLaptop:gap-15 4k:gap-10 bg-black"
    >
      <motion.h1
        variants={headingVariants}
        initial="initial"
        whileInView={"visible"}
        className="text-4xl 4k:text-8xl font-extrabold text-center font-limelight"
      >
        <span className="text-primary-golden">Interests & Life</span> Outside
        Code
      </motion.h1>
      <div
        id="hobbiesContainer"
        className="w-full flex flex-col gap-5 smLaptop:gap-10 4k:gap-10"
      >
        {/* strategist */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView={"visible"}
          id="strategist"
          className="w-full flex flex-col smLaptop:flex-row gap-10 justify-center bg-background-dark p-15 rounded-2xl"
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView={"visible"}
            id="imgContainer"
            className="w-full smLaptop:w-1/3"
          >
            <img
              src="/hobbies/strategist.jpg"
              className="w-full h-auto rounded-2xl -rotate-3 hover:rotate-3 transition-all duration-200 ease-in-out border-8 border-white"
            />
          </motion.div>
          <div
            id="contentContainer"
            className="w-full smLaptop:w-1/2 flex flex-col justify-start items-center smLaptop:items-start gap-4 4k:gap-7"
          >
            <motion.h3
              variants={headingVariants}
              initial="initial"
              whileInView={"visible"}
              className="font-bold text-3xl 4k:text-7xl"
            >
              ♟
              <span className="ml-3 underline underline-offset-7">
                Strategist
              </span>
            </motion.h3>
            <motion.p
              variants={headingVariants}
              initial="initial"
              whileInView={"visible"}
              className="text-lg tablet:text-xl 4k:text-4xl text-text-muted text-left"
            >
              I love diving deep into a game of Chess. It's my favorite way to
              practice looking multiple steps ahead, anticipating consequences,
              and creating a solid, long-term strategic plan, a mindset I bring
              into architecting my code.
            </motion.p>
          </div>
        </motion.div>
        {/* Visual Composer */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView={"visible"}
          id="visual composer"
          className="w-full flex flex-col smLaptop:flex-row gap-10 justify-center p-15 rounded-2xl"
        >
          <div
            id="contentContainer"
            className="w-full smLaptop:w-1/2 flex flex-col justify-start items-center smLaptop:items-start gap-4 4k:gap-7 order-2 smLaptop:-order-1"
          >
            <motion.h3
              variants={headingVariants}
              initial="initial"
              whileInView={"visible"}
              className="font-bold text-3xl 4k:text-7xl"
            >
              🎨
              <span className="ml-3 underline underline-offset-7">
                The Visual Composer
              </span>
            </motion.h3>
            <motion.p
              variants={headingVariants}
              initial="initial"
              whileInView={"visible"}
              className="text-lg tablet:text-xl 4k:text-4xl text-text-muted text-left"
            >
              When I draw or paint, I focus heavily on visual balance,
              composition, and color theory. This is where I train my eye for
              the aesthetic detail that helps me build highly functional, aesthetically polished and
              intuitive user interfaces.
            </motion.p>
          </div>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView={"visible"}
            id="imgContainer"
            className="w-full smLaptop:w-2/9"
          >
            <img
              src="/hobbies/drawings/drawing1.jpg"
              className="w-full h-auto rounded-2xl rotate-3 hover:-rotate-3 transition-all duration-200 ease-in-out border-8 border-white"
            />
          </motion.div>
        </motion.div>
        {/* Image Crafter */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView={"visible"}
          id="imageCrafter"
          className="w-full flex flex-col smLaptop:flex-row gap-10 justify-center p-15 smLaptop:px-5 laptop:p-15 rounded-2xl bg-background-dark"
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView={"visible"}
            id="imgContainer"
            className="w-full smLaptop:w-2/5 flex flex-row justify-center items-center"
          >
            {(isDesktop&&!is4k) && (
              <BounceCards
                className="custom-bounceCards"
                images={photography}
                containerWidth={500}
                containerHeight={250}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            )}
            {(!isDesktop||is4k) && (
              <img
                src="/hobbies/photographs/photo1.jpg"
                className="w-full h-auto rounded-2xl -rotate-3 hover:rotate-3 transition-all duration-200 ease-in-out border-4 border-white"
              />
            )}
          </motion.div>
          <div
            id="contentContainer"
            className="w-full smLaptop:w-3/5 flex flex-col justify-start items-center smLaptop:items-start gap-4 4k:gap-7"
          >
            <motion.h3
              variants={headingVariants}
              initial="initial"
              whileInView={"visible"}
              className="font-bold text-3xl 4k:text-7xl"
            >
              📸
              <span className="ml-3 underline underline-offset-7">
                The Image Crafter
              </span>
            </motion.h3>
            <motion.p
              variants={headingVariants}
              initial="initial"
              whileInView={"visible"}
              className="text-lg tablet:text-xl 4k:text-4xl text-text-muted text-left"
            >
              As a Photographer, I value the technical process and precision
              needed to realize a vision. This drive for meticulously crafted
              outcomes, combined with my love of reading, fuels my dedication to
              being a proactive learner.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hobbies;
