import { SkillContainer } from "@/components";
import React from "react";
import { motion } from "motion/react";

function SkillsSection() {
  const skills = {
    technical: {
      frameworks: ["React.js", "Javascript(ES6+)", "HTML5", "CSS3"],
      services: ["Appwrite (BaaS)"],
      design: ["Tailwind CSS", "Figma", "Responsive Design"],
      workflow: ["Git", "Github", "npm", "VS Code"],
    },
    soft: [
      "Technical Communication",
      "Growth Mindset",
      "Problem Solving",
      "Collaboration",
      "Adaptability",
    ],
  };
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

  const titleVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView={"visible"}
      viewport={{ once: false }}
      id="skillsSectionContainer"
      className="w-full h-full text-text-light smLaptop:border-r-2 px-5 md:px-10 py-5 flex flex-col gap-8 smLaptop:gap-6 4k:gap-8 items-center smLaptop:items-start"
    >
      <motion.h2
        variants={headingVariants}
        initial="initial"
        whileInView={"visible"}
        viewport={{ once: false }}
        className="underline underline-offset-4 text-4xl 4k:text-8xl font-extrabold text-primary-golden"
      >
        Skills
      </motion.h2>
      <div
        id="skillsContainer"
        className="w-full flex flex-col gap-5 4k:gap-10"
      >
        <div
          id="technicalSkills"
          className="flex flex-col justify-evenly items-start gap-5 4k:gap-10"
        >
          <div id="frameworkContainer" className="w-full flex flex-col gap-3">
            <motion.h2
              variants={titleVariants}
              initial="initial"
              whileInView={"visible"}
              viewport={{ once: false }}
              className="text-xl tablet:text-2xl 4k:text-5xl font-bold text-center smLaptop:text-start"
            >
              Languages and Frameworks
            </motion.h2>
            <SkillContainer skills={skills.technical.frameworks} />
          </div>
          <div id="designContainer" className="w-full flex flex-col gap-3">
            <motion.h2
              variants={titleVariants}
              initial="initial"
              whileInView={"visible"}
              viewport={{ once: false }}
              className="text-xl tablet:text-2xl 4k:text-5xl font-bold text-center smLaptop:text-start"
            >
              Design & Aesthetics
            </motion.h2>
            <SkillContainer skills={skills.technical.design} />
          </div>
          <div id="servicesContainer" className="w-full flex flex-col gap-3">
            <motion.h2
              variants={titleVariants}
              initial="initial"
              whileInView={"visible"}
              viewport={{ once: false }}
              className="text-xl tablet:text-2xl 4k:text-5xl font-bold text-center smLaptop:text-start"
            >
              Data & Services
            </motion.h2>
            <SkillContainer skills={skills.technical.services} />
          </div>
          <div id="workflowContainer" className="w-full flex flex-col gap-3">
            <motion.h2
              variants={titleVariants}
              initial="initial"
              whileInView={"visible"}
              viewport={{ once: false }}
              className="text-xl tablet:text-2xl 4k:text-5xl font-bold text-center smLaptop:text-start"
            >
              DevOps & Workflow
            </motion.h2>
            <SkillContainer skills={skills.technical.workflow} />
          </div>
        </div>
        <div
          id="softSkills"
          className="flex flex-col justify-evenly items-start"
        >
          <div id="softSkillContainer" className="w-full flex flex-col gap-3">
            <motion.h2
              variants={titleVariants}
              initial="initial"
              whileInView={"visible"}
              viewport={{ once: false }}
              className="text-xl tablet:text-2xl 4k:text-5xl font-bold text-center smLaptop:text-start"
            >
              Core Competencies
            </motion.h2>
            <SkillContainer skills={skills.soft} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsSection;
