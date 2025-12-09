import React from 'react'
import { CareerCard } from "@/components";
import { motion } from "motion/react";
function Education() {
    const educations = [
    {
      title: "Bsc in Computer Science and Information Technology (Bsc.CSIT)",
      date: "2024-Present | Patan Multiple Campus",
    },
    {
      title: "Higher Secondary Education",
      date: "2022-2024 | Grand Academy",
    },
  ];

  //animation
  const containerVariants = {
    initial: {
      opacity: 0,
      y:30
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
 
  return (
    <div
          id="experienceContainer"
          className=" bg-black text-text-light px-5 md:px-10 py-5 flex flex-col gap-10"
        >
          <motion.h1
          variants={containerVariants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: false }}
          className="underline underline-offset-4 text-4xl 4k:text-8xl font-extrabold text-center text-primary-golden smLaptop:text-start font-limelight">Education</motion.h1>
          <div id="cardContainer" className=" flex flex-col gap-5">
            {educations.map((education, i) => (
              <div key={i} className="w-full">
                <CareerCard
                  title={education.title}
                  date={education.date}
                  details={education.details?education.details:null}
                  tech={education.tech?education.tech:null}
                  val={i}
                />
              </div>
            ))}
          </div>
        </div>
  )
}

export default Education