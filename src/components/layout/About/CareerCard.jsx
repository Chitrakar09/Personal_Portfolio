import React from "react";
import { useMediaQuery } from "@mui/material";
import { motion } from "motion/react";

function CareerCard({
  use = "",
  val = Number,
  title = "",
  date = "",
  details = "",
  tech = [],
}) {

  const isDesktop = useMediaQuery("(min-width:1024px)");


  //initial values
  const border =
    use === "experience"
      ? 'border-l-4 smLaptop:border-l-6 border-accent-tealGlow'
      : "border-b-4";

  //animation
  const animationDirection = -50
  const containerVariants = {
    initial: {
      opacity: 0,
      x:animationDirection,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration:0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
      className={`${use==='experience'?'px-5 smLaptop:px-8':null} lgLaptop:pb-5 ${border} flex flex-col gap-2 4k:gap-6 items-start`}
    >
      <div id="title">
        <h1 className={`font-[1000] text-start ${use==='experience'?'smLaptop:text-start text-[6vw] tablet:text-[5vw] smLaptop:text-3xl laptop:text-3xl 4k:text-7xl':'text-[4vw] tablet:text-[2.5vw] smLaptop:text-[1.7vw] laptop:text-[1.5vw] 4k:text-5xl/normal '} laptop:underline-offset-8 font-title underline underline-offset-3`}>
          {title}
        </h1>
      </div>
      <div id="timeline">
        <h3 className={`font-extrabold text-center ${use==='experience'?'text-base tablet:text-xl smLaptop:text-xl laptop:text-xl lgLaptop:text-[1.2vw] 4k:text-4xl':'text-base tablet:text-lg smLaptop:text-lg laptop:text-lg lgLaptop:text-[1.1vw] 4k:text-3xl/normal text-text-muted'}`}>
          {date}
        </h3>
      </div>

      <div
        id="about"
        className="w-full flex flex-col"
      >
        {(details&&isDesktop) && (
          <motion.ul
          className="font-medium text-text-muted tablet:text-xl smLaptop:text-base laptop:text-base lgLaptop:text-[1.2vw] 4k:text-4xl/normal flex flex-col gap-1">
            {details}
          </motion.ul>
        )}
        {tech && (
          <div id="tech" className="w-full flex gap-3 flex-wrap justify-start">
            {tech.map((tools, i) => (
              <button
                key={i}
                id="bubble"
                className={`py-0.5 px-1.5 rounded-md font-bold tablet:text-xl smLaptop:text-lg laptop:text-base lgLaptop:text-xl 4k:text-[1.6vw] bg-primary-golden text-background-dark`}
              >
                {tools}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CareerCard;
