import React from "react";
import ProfilePic from "./ProfilePic";
import Button from "./Button";
import {
  css,
  tailwind,
  html,
  react,
  javascript,
  git,
  figma,
} from "@/assets/icon_index";

function About_Tile() {
  const icons = [
    { icon: react },
    { icon: javascript },
    { icon: tailwind },
    { icon: html },
    { icon: css },
    { icon: figma },
    { icon: git },
  ];
  return (
    <div
      id="container"
      className="min-w-full min-h-full p-5 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-10 xl:gap-0"
    >
      <div
        id="profile"
        className="w-full flex flex-col justify-center items-center px-2.5 lg:pl-5 gap-1 rounded-2xl lg:order-2"
      >
        <ProfilePic
          url="/profile_About.jpg"
          classname="min-h-40 min-w-40 md:min-h-50 md:min-w-50 lg:min-h-90 lg:min-w-90 xl:min-w-115 xl:min-h-115 2xl:min-w-80 2xl:min-h-80 3xl:min-w-150 3xl:min-h-150 lg:mb-5 rounded-full bg-center md:shadow-[0_30px_131px_120px_rgba(255,213,74,0.56)] xl:shadow-[0_60px_131px_150px_rgba(255,213,74,0.56)]"
        />
        <span className="text-text-light font-extrabold text-xl lg:text-3xl xl:text-5xl 2xl:text-[2.5rem] 3xl:text-7xl text-center">
          Pratyush Chitrakar
        </span>
        <span className="text-text-light/60 text-[0.8rem] ms:text-xs ls:text-[0.8rem] md:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl text-center mb-1">
          Web Developer | UI/UX Enthusiast | CSIT Student
        </span>
        <div
          id="tech_stack"
          className="w-full flex justify-center gap-3 items-center"
        >
          {icons.map((item) => (
            <img
              src={item.icon}
              alt={`${item.icon}`}
              key={`${item.icon}`}
              className="w-3 ms:w-5 lg:w-8 3xl:w-12 h-auto"
            />
          ))}
        </div>
      </div>
      <div
        id="about"
        className="w-full text-text-light flex flex-col justify-center items-center gap-3 lg:order-1"
      >
        <h1 className="text-center font-bold text-[1.11rem] ms:text-[1.5rem] ls:text-2xl md:text-4xl lg:text-left lg:text-7xl lg:mb-2 xl:text-[7rem] 2xl:text-[5.5rem] 3xl:text-[11rem]">
          Solving, creating, exploring with purpose.
        </h1>
        <p className="text-text-muted text-center 3xl:mb-3 text-[0.8rem] ms:text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl lg:text-left">
          I’m a CSIT student and web developer passionate about building modern,
          responsive websites.{" "}
        </p>
        <p className="text-text-muted text-center text-[0.8rem] ms:text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl lg:text-left">
          Currently, I’m sharpening my skills in React, Tailwind, and
          problem-solving while working on personal projects to learn and grow.
        </p>
        <div
          id="buttons"
          className="w-full mt-5 3xl:mt-10 flex justify-center lg:justify-start items-center gap-5"
        >
          <Button
            text="View Projects"
            className="py-2 px-3 md:py-4 md:px-5 md:text-2xl 3xl:py-10 3xl:px-12 3xl:text-5xl"
          />
          <Button
            className="py-2 px-3 md:py-4 md:px-5 md:text-2xl 3xl:py-10 3xl:px-12 3xl:text-5xl"
            ring={true}
            text="Download CV"
            text_Color="text-text-light"
            background="bg-background-dark"
            shadow={false}
          />
        </div>
      </div>
    </div>
  );
}

export default About_Tile;
