import React from "react";
import { FaqsSection } from "@/components/ui/FaqsSection";
import Prefooter from "@/components/ui/Prefooter/Prefooter";
import { HeroProjectsParallax } from "./ui/HeroProjectsParallax";
import { store } from "@/redux-store/store";
import ProjectsSection from "./ui/ProjectsSection";

const ProjectsPage = async () => {
  const { project: { projects, loading } } = store.getState();

  console.log("projects.length", projects.length, loading)
  
  return (
    <div>
      <HeroProjectsParallax products={projects} />

      <ProjectsSection projects={projects} />

      {/* <OurTeamSection /> */}
      {/* <Testimonials /> */}
      <FaqsSection />
      <Prefooter />
    </div>
  );
};

export default ProjectsPage;
