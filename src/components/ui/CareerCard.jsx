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
      x: animationDirection,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
      whileHover={
        use === "experience" && {
          scale: 1.04,
          transition: { duration: 0.3, ease: "easeInOut" },
        }
      }
      className={`px-8 py-1 lgLaptop:pb-8 ${border} flex flex-col gap-2 bg-background-dark text-base`}
    >
      <div id="title">
        <h1 className={`font-[1000] text-[6vw] tablet:text-[5vw] smLaptop:text-[2.5vw] laptop:text-[2.5vw] 4k:text-[3.5vw] laptop:underline-offset-8 font-title underline underline-offset-3 ${use==='experience'?'text-primary-golden':null}`}>
          {title}
        </h1>
      </div>
      <div id="timeline">
        <span className="font-extrabold underline text-lg tablet:text-xl smLaptop:text-xl laptop:text-xl lgLaptop:text-[1.2vw] 4k:text-[1.7vw]">
          {date}
        </span>
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
