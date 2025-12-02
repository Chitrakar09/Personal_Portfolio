import React from "react";
import { CareerCard } from "@/components";
import { motion } from "motion/react";

function Experience() {
  //experience
  const experiences = [
    {
      title: "OpenJournal: Full-Stack Web App",
      date: "2024-Present",
      details:
        (<ul className="list-disc pl-5 space-y-1"><li>Engineered a dynamic user interface using React, implementing custom hooks and state management to ensure a performant and maintainable codebase.</li><li>Integrated the Appwrite BaaS (Backend-as-a-Service) for robust user authentication, data synchronization, and file storage, significantly reducing time spent on custom backend setup.</li><li>Developed a pixel-perfect, mobile-responsive layout across all major viewports using the utility-first approach of Tailwind CSS.</li></ul>),
    },
  ];

  //animation
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren:0,
        ease: "easeInOut",
      },
    },
  };
  

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
