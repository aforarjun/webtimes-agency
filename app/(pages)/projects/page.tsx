import React from "react";
import { FaqsSection } from "@/components/ui/FaqsSection";
import Prefooter from "@/components/ui/Prefooter/Prefooter";
import { HeroProjectsParallax } from "./ui/HeroProjectsParallax";
import ProjectsSection from "./ui/ProjectsSection";

import { store } from "@/redux-store/store";
import { fetchProjects } from "@/redux-store/slices/projectsSlice";

async function ProjectsPage() {
  const { payload = null } = await store.dispatch(fetchProjects());

  return (
    <div>
      {!!payload && <div>Loading...</div>}
      
      {payload?.success ? (
        <>
          <HeroProjectsParallax products={payload.projects} />
          <ProjectsSection projects={payload.projects} />
        </>
      ) : (
        <div>Error in Fetching Projects</div>
      )}

      {/* <OurTeamSection /> */}
      {/* <Testimonials /> */}
      <FaqsSection />
      <Prefooter />
    </div>
  );
}

export default ProjectsPage;
