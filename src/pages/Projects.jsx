import React from "react";
import { Footer } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import {motion} from 'motion/react'

function Projects() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const projects=[{
    imgSrc:'OpenJournal.png',
    techs:['React.js','Javascript(ES6+)','Tailwind CSS','Appwrite','Figma','Netlify','Git/Github'],
    title:"OpenJournal: Full-Stack SPA",
    description:(<>
        <p>
          A self-initiated, performance-driven Full-Stack application built with React and Appwrite, created specifically to document and track my personal journey of becoming a Web Developer.
        </p>
       { isDesktop&&<ul className="list-disc pl-4 space-y-1">
            <li>
                React Component-Based UI engineered for rapid rendering and optimal performance.
            </li>
            <li>
                Integrated Appwrite BaaS for secure real-time data persistence and user authentication.
            </li>
            <li>
                Tailwind CSS mobile-first design focused on minimal footprint and optimal load speed.
            </li>
            <li>
                Managed end-to-end development and Netlify deployment.
            </li>
        </ul>}
    </>),
    github:'https://github.com/Chitrakar09/OpenJournal-Blog-Project',
    url:'https://openjournal.netlify.app/home'
},
]
  return (
    <div
      id="pageContainer"
      className="w-full h-full flex flex-col justify-between"
    >
      <div
        id="contentContainer"
        className="w-full p-6 flex flex-col justify-start items-center"
      >
        <div id="intro" className="text-center flex flex-col gap-0.5 4k:gap-5 ">
          <h1 className="text-text-light text-xl smLaptop:text-3xl 4k:text-5xl font-extrabold">
            Featured <span className="text-primary-golden">Projects</span>
          </h1>
          <p className="text-text-muted text-sm tablet:text-lg 4k:text-3xl">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance and user experience
          </p>
        </div>

        <div
          id="project-showcase-container"
          className="max-w-8xl mx-auto py-10 px-4 lg:px-8"
        >
          <div
            id="projectContainer"
            className="flex flex-col flex-wrap justify-center items-center gap-8"
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className={`w-full flex flex-col smLaptop:flex-row bg-black border border-primary-golden rounded-xl shadow-lg transition duration-300 hover:shadow-accent-amber hover:scale-105`}
              >
                {<ProjectImage imageName={project.imgSrc}/>}
                <div id="info" className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl smLaptop:text-4xl 4k:text-6xl font-bold text-text-light mb-4 4k:mb-8 hover:text-primary-golden underline underline-offset-4">
                    {project.title}
                  </h3>
                  <div className="text-text-muted text-sm smLaptop:text-base lgLaptop:text-lg 4k:text-3xl mb-4 4k:mb-8 flex flex-col gap-2 4k:gap-4 flex-grow">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2 4k:gap-5 text-sm 4k:text-3xl text-text-light mb-3 font-bold">
                    {project.techs.map((tech, i) => (
                      <span key={tech} className="border-2 border-text-light hover:border-primary-golden hover:text-accent-amber rounded-xl p-1.5">{tech}</span>
                    ))}
                  </div>
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
                    > <FontAwesomeIcon icon={faUpRightFromSquare} /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;

export function ProjectImage({ imageName }) {
  const imagePath = new URL(`../assets/projects/${imageName}`, import.meta.url)
    .href;
  return (
    <img
      src={imagePath}
      alt={imageName}
      className="w-full smLaptop:w-5/15 h-auto rounded-xl object-cover"
    />
  );
}
