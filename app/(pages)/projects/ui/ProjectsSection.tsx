import React from 'react'
import { Project } from '@/lib/interface'
import { PinContainer } from '@/components/aceternity/3d-pin'

const ProjectsSection = ({projects}: {projects: Project[]}) => {
  return (
    <section id='ProjectsSection' className='py-10 md:py-16'>
      <div className="container justify-center flex flex-wrap gap-5">
        {projects?.map((project) => (
          <PinContainer key={project._id} href={project.link} title={project.title} containerClassName='h-[24rem]'>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection