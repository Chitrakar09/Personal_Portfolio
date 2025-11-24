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
    {
      title: "Secondary Education Examination (SEE) - Little Angel's School, Nepal",
      date: "Completed in 2022",
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
          className="w-full bg-amber-50 text-background-dark px-5 md:px-10 py-5 flex flex-col gap-2 tablet:gap-2 rounded-t-3xl rounded-b-3xl border-t-8 border-accent-amber"
        >
          <div id="headingContainer" className="w-full flex flex-col items-center">
            <motion.h1
              variants={childVariants}
              id="heading"
              className="w-fit text-[13vw] tablet:text-[10vw] smLaptop:text-[6vw] laptop:text-[4vw] font-heading font-[1000] underline underline-offset-4 hover:text-accent-tealGlow"
            >
              Education
            </motion.h1>
          </div>
          <div id="intro" className="w-full">
            <motion.p
              variants={childVariants}
              className=" text-[4vw]/5 tablet:text-[3.5vw]/7 smLaptop:text-[3.2vw] laptop:text-[2vw] text-center italic"
            >
              Before the projects and roles came the learning — here’s where it all started.
            </motion.p>
          </div>
          <div id="cardContainer" className="w-full flex flex-col mt-10 gap-5">
            {educations.map((education, i) => (
              <div key={i} className="w-full">
                <CareerCard
                  title={education.title}
                  date={education.date}
                  details={education.details?education.details:null}
                  tech={education.tech?education.tech:null}
                  val={i}
                  borderColor='accent-tealGlow'
                />
              </div>
            ))}
          </div>
        </motion.div>
  )
}

export default Education