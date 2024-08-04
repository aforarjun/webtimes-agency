import React from "react";
import { FaqsSection } from "@/components/ui/FaqsSection";
import Prefooter from "@/components/ui/Prefooter/Prefooter";
import { HeroProjectsParallax } from "./ui/HeroProjectsParallax";
import ProjectsSection from "./ui/ProjectsSection";

// import { instance } from "@/lib/axios";
// import { store } from "@/redux-store/store";
// import { fetchProjects } from "@/redux-store/slices/projectsSlice";

async function ProjectsPage() {
  const response:any = await fetch(`${process.env.APP_URL}/api/projects`); // store.dispatch(fetchProjects());
  const data:any = await response.json();

  return (
    <div>
      {!data && <div>Loading...</div>}

      {data?.success ? (
        <>
          <HeroProjectsParallax products={data.projects} />
          <ProjectsSection projects={data.projects} />
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
