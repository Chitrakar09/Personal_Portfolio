import React from 'react'
import { motion } from "motion/react";

function SkillContainer({skills}) {
  const containerVariants={
    initial:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:0.5,
        delayChildren:0.5,
        staggerChildren:0.2,
        ease:"easeOut"
      }
    }
  }
  const pillVariants={
    initial:{
      opacity:0,
      y:10
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.3,
        ease:"easeIn"
      }
    }
  }
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView={"visible"} className='w-full flex flex-wrap justify-center smLaptop:justify-start gap-3 4k:gap-5'>
        {skills.map((skill,i)=>(
            <motion.button variants={pillVariants} key={i} className='bg-linear-[135deg,#FFD54A_0%,#00FFD1_100%] shadow-accent-amber shadow-md text-black border-2 border-white hover:rotate-3 py-1 px-2 rounded-lg font-bold text-sm tablet:text-xl smLaptop:text-sm lgLaptop:text-lg 4k:text-4xl'>#{skill}</motion.button>
        ))}
    </motion.div>
  )
}

export default SkillContainer