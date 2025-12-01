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
      className="w-full bg-background-dark text-white px-5 md:px-10 py-5 flex flex-col gap-2 tablet:gap-2"
    >
      <div id="cardContainer" className="w-full flex flex-col gap-5">
        {experiences.map((experience, i) => (
          <div key={i} className="w-full">
            <CareerCard
              use="experience"
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
