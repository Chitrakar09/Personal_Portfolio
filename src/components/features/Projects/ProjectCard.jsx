import React from "react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project, Key }) {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const [isInViewMore, setIsViewMore] = useState(false);
  const projectContainerVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={projectContainerVariants}
      initial="initial"
      {...(isDesktop ? { whileInView: "visible" } : { animate: "visible" })}
      key={Key}
      className={`w-full flex flex-col smLaptop:flex-row mx-auto bg-background-dark border border-primary-golden rounded-xl shadow-lg transition duration-300 hover:shadow-accent-amber hover:scale-105`}
    >
      {/* image */}
      <img
        src={project.imgSrc}
        className="w-full smLaptop:w-4/12 h-auto rounded-xl object-cover"
      />
      {/* project info */}
      <div id="info" className="p-8 flex flex-col flex-grow">
        {/* title */}
        <h3 className="text-2xl smLaptop:text-4xl 4k:text-6xl font-bold text-text-light mb-4 4k:mb-8 hover:text-primary-golden underline underline-offset-4">
          {project.title}
        </h3>
        {/* description */}
        <div className="text-text-muted text-sm tablet:text-lg smLaptop:text-base lgLaptop:text-lg 4k:text-3xl mb-4 4k:mb-8 flex flex-col justify-between gap-2 4k:gap-4 flex-grow">
          {project.intro}
          {(isInViewMore && isDesktop) && project.description}
          {(isDesktop)? isInViewMore ? (
            <button
              onClick={() => setIsViewMore(false)}
              className="text-text-light underline underline-offset-2 text-left hover:text-accent-amber"
            >
              Read Less
            </button>
          ) : (
            <button
              onClick={() => setIsViewMore(true)}
              className="text-text-light underline underline-offset-2 text-left hover:text-accent-amber"
            >
              Read More
            </button>
          ):null}
        </div>
        {/* tech stack */}
        <div className="flex flex-wrap gap-2 4k:gap-5 text-sm 4k:text-3xl text-text-light mb-3 font-bold">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="border-2 border-text-light hover:border-primary-golden hover:text-accent-amber rounded-xl p-1.5"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* links */}
        <div className="flex justify-start gap-5 text-xl 4k:text-3xl text-text-light mt-3 4k:mt-5">
          <a
            href={project.github}
            target="_blank"
            className="mt-auto hover:text-primary-golden hover:-translate-y-1 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a
            href={project.url}
            target="_blank"
            className="mt-auto hover:text-primary-golden hover:-translate-y-1 transition-all duration-300"
          >
            {" "}
            <FontAwesomeIcon icon={faUpRightFromSquare} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
