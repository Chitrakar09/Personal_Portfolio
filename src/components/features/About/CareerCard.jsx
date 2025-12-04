import React from "react";
import { motion } from "motion/react";

function CareerCard({
  use = "",
  val = Number,
  title = "",
  date = "",
  details = "",
  tech = [],
}) {
  //initial values
  const border =
    use === "experience"
      ? 'border-l-8'
      : "border-b-4";

  //animation
  const animationDirection = val % 2 === 0 ? -70 : 70;
  const containerVariants = {
    initial: {
      opacity: 0,
      x: use==='experience'&&animationDirection,
    },
    visible: {
      opacity: 1,
      x: use==='experience'&&0,
      transition: {
        duration: use==='experience'?0.7:0.5,
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
      className={`px-8 py-1 lgLaptop:pb-8 ${border} flex flex-col gap-2 ${use==='experience'?'text-left':'text-center'}`}
    >
      <div id="title">
        <h1 className={`font-[1000] text-center text-[6vw] tablet:text-[5vw] smLaptop:text-[2.5vw] laptop:text-[2.5vw] 4k:text-[3.5vw] laptop:underline-offset-8 font-title underline underline-offset-3 ${use==='experience'?'text-primary-golden text-left':null}`}>
          {title}
        </h1>
      </div>
      <div id="timeline">
        <h3 className={`font-extrabold underline text-center text-lg tablet:text-xl smLaptop:text-xl laptop:text-xl lgLaptop:text-[1.2vw] 4k:text-[1.7vw] ${use==='experience'?'text-left':null}`}>
          {date}
        </h3>
      </div>

      <div
        id="about"
        className="w-full flex flex-col"
      >
        {details && (
          <motion.ul
          className="font-medium text-text-muted tablet:text-xl smLaptop:text-lg laptop:text-lg lgLaptop:text-[1.3vw] 4k:text-[1.57vw] flex flex-col gap-1">
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
