import React from "react";
import { Footer,ProjectCard } from "@/components";
import {motion} from 'motion/react'

function Projects() {

  //projects data

  const projects = [
    {
      imgSrc: "/projects/OpenJournal.png",
      techs: [
        "React.js",
        "Javascript(ES6+)",
        "Tailwind CSS",
        "Appwrite",
        "Figma",
        "Netlify",
        "Git/Github",
      ],
      title: "OpenJournal: Full-Stack SPA",
      intro: (
        <>
          <p>
            A self-initiated, performance-driven Full-Stack application built
            with React and Appwrite, created specifically to document and track
            my personal journey of becoming a Web Developer.
          </p>
        </>
      ),
      description:(
        <>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                React Component-Based UI engineered for rapid rendering and
                optimal performance.
              </li>
              <li>
                Integrated Appwrite BaaS for secure real-time data persistence
                and user authentication.
              </li>
              <li>
                Tailwind CSS mobile-first design focused on minimal footprint
                and optimal load speed.
              </li>
              <li>Managed end-to-end development and Netlify deployment.</li>
            </ul>
        </>
      ),
      github: "https://github.com/Chitrakar09/OpenJournal-Blog-Project",
      url: "https://openjournal.netlify.app/home",
    },
   
  ];

  //Animation
  const introParentVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const introChildVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <div
      id="pageContainer"
      className="w-full h-full flex flex-col justify-between"
    >
      <div
        id="contentContainer"
        className="w-full p-6 flex flex-col justify-start items-center"
      >
        <motion.div
          variants={introParentVariants}
          initial="initial"
          animate="visible"
          id="intro"
          className="text-center flex flex-col gap-0.5 4k:gap-5 "
        >
          <motion.h1
            variants={introChildVariants}
            className="text-text-light text-xl smLaptop:text-3xl 4k:text-5xl font-extrabold"
          >
            My <span className="text-primary-golden">Works</span>
          </motion.h1>
          <motion.p
            variants={introChildVariants}
            className="text-text-muted text-sm tablet:text-lg 4k:text-3xl"
          >
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance and user experience
          </motion.p>
        </motion.div>

        <div
          id="project-showcase-container"
          className="max-w-8xl mx-auto py-10 px-4 lg:px-8"
        >
          <motion.div
            id="projectContainer"
            className="flex flex-col justify-center items-start gap-8"
          >
            {projects.map((project, i) => (
              <ProjectCard project={project} key={i}/>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;

