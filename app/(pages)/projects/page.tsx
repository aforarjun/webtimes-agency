import React from "react";
import { FaqsSection } from "@/components/ui/FaqsSection";
import Prefooter from "@/components/ui/Prefooter/Prefooter";
import { HeroProjectsParallax } from "./ui/HeroProjectsParallax";
import { store } from "@/redux-store/store";
import ProjectsSection from "./ui/ProjectsSection";
import { fetchProjects } from "@/redux-store/slices/projectsSlice";

const ProjectsPage = async () => {
  const {payload: {projects}} = await store.dispatch(fetchProjects());
  
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
