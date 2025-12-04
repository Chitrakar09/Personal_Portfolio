import React from 'react'
import { CareerCard } from "@/components";
import { motion } from "motion/react";
function Education() {
    const educations = [
    {
      title: "Bachelors of Science in Computer Science and Information Technology (Bsc.CSIT)- Patan Multiple Campus, Nepal",
      date: "2024-Present",
    },
    {
      title: "Higher Secondary Education - Grand Academy, Nepal",
      date: "2022-2024",
    },
  ];

  //animation
  const containerVariants = {
    initial: {
      opacity: 0,
      y:10
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
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
          className="w-full bg-background-dark text-text-light px-5 md:px-10 py-5 flex flex-col gap-2 tablet:gap-2"
        >
          <div id="cardContainer" className=" flex flex-col gap-10">
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
        </motion.div>
  )
}

export default Education