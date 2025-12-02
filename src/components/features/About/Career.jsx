import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";
import {motion} from 'motion/react'

function Career() {
  const [state, setState] = useState("experience");

  //Animation for tab

  const tabVariants={
    initial:{
      opacity:0,
      y:20
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
        ease:"easeInOut"
      }
    }
  }
  return (
    <div
      id="careerContainer"
      className="w-full flex flex-col justify-evenly items-center smLaptop:items-start gap-5 mb-10"
    >
      <motion.div
      variants={tabVariants}
      initial="initial"
      whileInView="visible"
      viewport={{once:false}}
        id="tab"
        className="bg-background-dark mx-5 md:mx-10 py-1 px-5 tablet:px-10 smLaptop:px-7 text-text-light flex text-[4vw] tablet:text-[3.5vw] smLaptop:text-[2vw] laptop:text-[1.5vw] font-bold gap-5 border-b-2"
      >
        <button onClick={() => (setState("experience"))} className={(state==="experience")?' text-primary-golden transition-all delay-75 underline underline-offset-2':null}>Timeline</button>
        <button onClick={() => setState("education")} className={(state==="education")?' text-primary-golden transition-all delay-75 underline underline-offset-2':null}>Education</button>
      </motion.div>
      {state === "experience" ? <Experience /> : <Education />}
    </div>
  );
}

export default Career;
