import React from 'react';
import IconCloud from "@/components/magicui/icon-cloud";
import Tag from '@/components/Tag';

const slugs = [
    "html5",
    "css3",
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "reactnative",
    "nodedotjs",
    "express",
    "java",
    "flutter",
    "android",
    "amazonaws",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

const Skills = () => {
  return (
    <section className='py-10 md:py-16'>
        <div className="container flex flex-col flex-wrap justify-center items-center gap-6 lg:flex-row">
            <div className="relative max-w-[450px] flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
                <IconCloud iconSlugs={slugs} />
            </div>

            <div className='flex flex-col w-full max-w-[600px]'>
                <h2 className='mb-7'><span className="underline text-primaryClr">Skills: </span>Tools & Technologies</h2>

                <h5>Frontend Technologies :</h5>
                <div className='w-full flex flex-wrap gap-2 mb-5 mt-3'>
                    {["HTML5","CSS3","Typescript","Javascript","ReactJs","Next.js","React Native",]?.map((tech) => <Tag key={tech} text={tech} />)}
                </div>

                <h5>Backend Technologies :</h5>
                <div className='w-full flex flex-wrap gap-2 mb-5 mt-3'>
                    {["NodeJs", "Express", "MongoDb", "Firebase" , "Java", "Spring Boot"]?.map((tech) => <Tag key={tech} text={tech} />)}
                </div>

                <h5>Tools :</h5>
                <div className='w-full flex flex-wrap gap-2 mb-5 mt-3'>
                    {["amazonaws", "docker", "git", "jira", "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube","figma",]?.map((tech) => <Tag key={tech} text={tech} />)}
                </div>
            </div>

        </div>
        <div id='scroll-down' className='relative h-20 w-4 m-auto'></div>
    </section>
  )
}

export default Skills;
