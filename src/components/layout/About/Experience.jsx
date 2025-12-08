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
        (<ul className="list-disc pl-5 space-y-1"><li>Architected the entire user interface using React and the Context API for global state, developing 3+ custom hooks for reusable, decoupled logic</li><li>Leveraged Appwrite BaaS for all backend functions, implementing user authentication, real-time data synchronization, and secure file storage across the platform.</li><li>Developed a pixel-perfect, mobile-responsive layout across all major viewports using the utility-first approach of Tailwind CSS.</li></ul>),
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
        ease: "easeInOut",
      },
    },
  };
  
const headingVariants={
  initial:{
    y:30,
  },
  visible:{
    y:0,
    transition:{
      duration:0.5,
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
      className="w-full text-white px-5 md:px-10 py-5 flex flex-col items-center smLaptop:items-start gap-8 smLaptop:gap-6 4k:gap-10"
    >
      <motion.h1 variants={headingVariants} initial="initial" whileInView={"visible"} className="underline underline-offset-4 text-4xl 4k:text-8xl font-extrabold text-primary-golden">Timeline</motion.h1>
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
