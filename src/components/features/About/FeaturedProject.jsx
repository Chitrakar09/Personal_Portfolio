import React from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import { Button } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'motion/react'
import { delay } from "motion";

function FeaturedProject() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  const featuredProject = isDesktop
    ? [
        {
          imgSrc: "/projects/OpenJournal.png",
          title: "OpenJournal: Full-Stack SPA",
          github: "https://github.com/Chitrakar09/OpenJournal-Blog-Project",
          url: "https://openjournal.netlify.app/home",
        },
        {
          imgSrc: "/projects/OpenJournal.png",
          title: "OpenJournal: Full-Stack SPA",
          github: "https://github.com/Chitrakar09/OpenJournal-Blog-Project",
          url: "https://openjournal.netlify.app/home",
        },
        {
          imgSrc: "/projects/OpenJournal.png",
          title: "OpenJournal: Full-Stack SPA",
          github: "https://github.com/Chitrakar09/OpenJournal-Blog-Project",
          url: "https://openjournal.netlify.app/home",
        },
      ]
    : [
        {
          imgSrc: "/projects/OpenJournal.png",
          title: "OpenJournal: Full-Stack SPA",
          github: "https://github.com/Chitrakar09/OpenJournal-Blog-Project",
          url: "https://openjournal.netlify.app/home",
        },
      ];

  const headingVariants = {
    initial: {
      y: 50,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

const projectVariants={
    initial:{
        opacity:0,
        y:50
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            delay:0.1,
            duration:0.5,
            ease:"easeIn"
        }
    }
}
  return (
    <div
      id="featuredProjectContainer"
      className="w-full px-5 md:px-10 flex flex-col items-center gap-10"
    >
      <motion.h1
      variants={headingVariants}
      initial="initial"
      whileInView={"visible"}
      className="text-4xl 4k:text-8xl font-extrabold text-text-light">
        Featured <span className="text-primary-golden">Projects</span>
      </motion.h1>
      <div
        id="projectContainer"
        className="w-full flex flex-row justify-center gap-8"
      >
        {featuredProject.map((project, i) => (
          <motion.div
          variants={projectVariants}
          initial="initial"
          whileInView={"visible"}
            key={i}
            className={`w-full smLaptop:w-1/3 rounded-xl p-5 border-2 border-primary-golden flex flex-col items-center gap-5 bg-background-dark hover:scale-110 ${i%2===0?'hover:-rotate-1':'hover:rotate-1'} transition-all duration-300 ease-out`}
          >
            <img src={project.imgSrc} className="w-full rounded-lg" />
            <h3 className="text-xl smLaptop:text-2xl 4k:text-5xl font-bold text-primary-golden text-center">
              {project.title}
            </h3>
            <div className="flex gap-5 items-center justify-center">
              <div className="flex justify-start items-center gap-5 text-xl 4k:text-3xl text-text-light">
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-primary-golden hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:text-primary-golden hover:-translate-y-1 transition-all duration-300"
                >
                  {" "}
                  <FontAwesomeIcon icon={faUpRightFromSquare} /> Live
                </a>
              </div>
              <Button
                text="View Details"
                className="px-3 py-2 text-sm hover:bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] hover:-translate-y-1 transition-transform delay-100 ease-linear"
                onClick={() => navigate("/realm/projects")}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProject;
