import React from "react";
import { CareerCard } from "@/components";
import { motion } from "motion/react";

function Experience() {
  //experience
  const experiences = [
    {
      title: "Lead Frontend Developer & Coordinator - Hackathon Project",
      details: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Built and deployed a full-stack blogging platform using React.js and
            Tailwind CSS
          </li>
          <li>
            Integrated Appwrite for authentication, database management, and
            image storage
          </li>
          <li>
            Implemented full CRUD functionality with secure user-specific data
            handling
          </li>
          <li>
            Engineered protected routes and personalized user dashboard system
          </li>
          <li>
            Optimized state management using Redux ToolKit for scalable
            architecture
          </li>
        </ul>
      ),
    },
    {
      title: "Volunteer Computer Instructor",
      details: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Taught computer fundamentals to Class 12 students</li>
          <li>Strengthened communication, leadership, and mentoring skills</li>
        </ul>
      ),
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
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const headingVariants = {
    initial: {
      y: 30,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
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
      className="w-full text-white px-5 md:px-10 py-5 flex flex-col items-center smLaptop:items-start gap-8 smLaptop:gap-6 4k:gap-10"
    >
      <motion.h1
        variants={headingVariants}
        initial="initial"
        whileInView={"visible"}
        className="underline underline-offset-4 text-4xl 4k:text-8xl font-extrabold text-primary-golden font-limelight"
      >
        Timeline
      </motion.h1>
      <div
        id="cardContainer"
        className="w-full flex flex-col gap-5 smLaptop:pt-7"
      >
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
