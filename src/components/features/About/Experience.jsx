import React from "react";
import { CareerCard } from "@/components";
import { motion } from "motion/react";

function Experience() {
  //experience
  const experiences = [
    {
      title: "Currently in Builder Phase",
      date: "2023-Present",
      details:
        "Learning, experimenting, and building things that make me better at what I do. From small UI ideas to full web apps like OpenJournal, this phase is all about turning curiosity into code and progress into projects.",
      tech: ["React", "Javascript", "Tailwind", "Html", "Css","Figma","Git","Framer Motion"],
    },
  ];

  //animation
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren:0,
        ease: "easeInOut",
      },
    },
  };

  const childVariants={
    initial:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:1,
        ease:"easeInOut"
      }
    }
  }

  return (
    <motion.div
      id="experienceContainer"
      variants={containerVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: false }}
      className="w-full bg-background-dark text-white px-5 md:px-10 py-5 flex flex-col gap-2 tablet:gap-2 rounded-t-3xl border-t-4 border-amber-50"
    >
      <div id="headingContainer" className="w-full flex flex-col items-center">
        <motion.h1
          variants={childVariants}
          id="heading"
          className="w-fit text-[13vw] tablet:text-[10vw] smLaptop:text-[6vw] laptop:text-[4vw] font-heading font-[1000] underline underline-offset-4 hover:text-primary-golden"
        >
          Experience
        </motion.h1>
      </div>
      <div id="intro" className="w-full">
        <motion.p
          variants={childVariants}
          className=" text-[4vw]/5 tablet:text-[3.5vw]/7 smLaptop:text-[3.2vw] laptop:text-[2vw] text-center italic"
        >
          Here’s a look at the roles and places that helped me grow as a
          developer.
        </motion.p>
      </div>
      <div id="cardContainer" className="w-full flex flex-col mt-10 gap-5">
        {experiences.map((experience, i) => (
          <div key={i} className="w-full">
            <CareerCard
              title={experience.title}
              date={experience.date}
              details={experience.details}
              tech={experience.tech}
              val={i}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
