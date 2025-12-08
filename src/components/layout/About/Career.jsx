import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import { SkillsSection } from "@/components";

function Career() {
  return (
    <div
      id="careerContainer"
      className="w-full flex flex-col items-center smLaptop:items-center gap-10 smLaptop:gap-30 4k:gap-60 mb-10"
    >
      <div
        id="skillsAndExperienceContainer"
        className="w-full flex flex-col smLaptop:flex-row justify-center gap-10 smLaptop:gap-0"
      >
        <SkillsSection />
        <div className="flex flex-col gap-10">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default Career;
