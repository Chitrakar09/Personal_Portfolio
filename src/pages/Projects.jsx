import React from "react";
import { Footer, ProjectCard } from "@/components";
import { motion } from "motion/react";

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
      description: (
        <>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              React Component-Based UI engineered for rapid rendering and
              optimal performance.
            </li>
            <li>
              Integrated Appwrite BaaS for secure real-time data persistence and
              user authentication.
            </li>
            <li>
              Tailwind CSS mobile-first design focused on minimal footprint and
              optimal load speed.
            </li>
            <li>Managed end-to-end development and Netlify deployment.</li>
          </ul>
        </>
      ),
      github: "https://github.com/Chitrakar09/OpenJournal-Blog-Project",
      url: "https://openjournal.netlify.app/home",
    },
    {
      imgSrc: "/projects/youtube_backend.png",
      techs: [
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "JSON Web Token",
        "Multer+Cloudinary",
        "nodemon",
      ],
      title: "Youtube Backend Clone",
      intro: (
        <>
          <p>
            A professional backend service for a learning-focused MERN
            video-sharing application. VideoTube is designed to handle user
            accounts, video upload and management, reactions, comments,
            subscriptions, playlists, and channel analytics.
          </p>
        </>
      ),
      description: (
        <>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              JWT authentication with secure user, session, and profile
              management.
            </li>
            <li>
              Video upload, storage (Cloudinary), publishing, and full CRUD
              functionality.
            </li>
            <li>
              Interactive social features: comments, likes, subscriptions,
              playlists, and media posts.
            </li>
            <li>
              Creator dashboard with analytics, channel insights, and content
              management.
            </li>
            <li>
              Production-ready REST API with health monitoring and scalable
              architecture.
            </li>
          </ul>
        </>
      ),
      github:"https://github.com/Chitrakar09/Youtube-Clone"
    },
    {
      imgSrc: "/projects/student_registration_backend.png",
      techs: [
        "Express.js",
        "Node.js",
        "PostgreSql",
        "pg",
        "nodemon",
      ],
      title: "Student Registration System Backend",
      intro: (
        <>
          <p>
           An enterprise-grade backend system for streamlined student registration and academic management. Designed for registrars, administrators, and developers, this robust API manages end-to-end institutional workflows—from student profiling and department administration to course scheduling, instructor assignments, and real-time enrollment analytics.
          </p>
        </>
      ),
      description: (
        <>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Comprehensive Student Management System with CRUD operations for students, instructors, departments, and courses.
            </li>
            <li>
              Enrollment and academic workflow management with status tracking and instructor-course assignments.
            </li>
            <li>
              Analytics and reporting for course popularity, departmental metrics, and enrollment trends.
            </li>
            <li>
              Flexible data retrieval with filtering, sorting, pagination, and relational queries.
            </li>
            <li>
              Scalable Express.js REST API powered by PostgreSQL, validation, and robust error handling.
            </li>
          </ul>
        </>
      ),
      github:"https://github.com/Chitrakar09/Student_Registration_System"
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
        duration: 0.8,
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
        duration: 0.8,
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
            className="text-text-light text-xl smLaptop:text-3xl 4k:text-5xl font-extrabold font-limelight"
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
              <ProjectCard project={project} key={i} />
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
