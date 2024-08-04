import { TracingBeam } from "@/components/aceternity/tracing-beam";
import Tag from "@/components/Tag";
// import Image from "next/image";

const experienceData = [
    {
      title: "Software Engineer",
      company: "Wittybrains software technology pvt ltd",
      time: "May 2022  to  June 2024",
      tasks: (
        <>
          <h5 className="font-bold mb-1">Project 1: Health Navigation jobs Application With React native.</h5>
          <p className="mt-2">Designed and implemented innovative features and user interfaces for the mobile application; restructured communication flow among 5 departments and cut downpaperwork by 65%.</p>
          
          <h5 className="font-bold mb-1 mt-3">Project 2: Share care admin console with ReactJS.</h5>
          <ul className="mt-2 flex flex-col gap-2 list-disc">
            <li>Enhanced web application efficiency by 15% through strategic updates of dependencie s and code refactoring, integrating user-requested features that significantly boosted overall user experience and satisfaction.</li>
            <li>Led the migration to a mono-repo environment, implementing, Micro Frontend/Module Federation and Nginx to streamline development processes. Resulted in a 20% increase in user engagement.</li>
            <li>Collaborated cross-functionally to troubleshoot and resolve technical issues, ensuring timely project delivery, and actively participated in client meetings to refine automated tests.</li>
          </ul>
        </>
      ),
      badges: ["React", "NextJs", "React Native"],
    },
    {
      title: "Web Developer",
      company: "Pablo Project",
      time: "Dec 2021  to  May 2022",
      tasks: (
        <>
          <ul className="flex flex-col gap-2 list-disc">
            <li>Crafted visually striking and user-centric websites and web apps by creating custom WordPress themes from scratch.</li>
            <li>Employed a blend of HTML, CSS, JavaScript, ReactJS, and WordPress to ensure seamless functionality and captivating design.</li>
            <li>Managed and developed WordPress theme development for web projects from scratch.</li>
          </ul>
        </>
      ),
      badges: ["Wordpress", "ReactJs", "Custom wordpress themes", "HTML", "CSS", "Javascript"],
    },
    {
        title: "Freelancer",
        company: "Fiver +",
        time: "Jan 2021  to  Dec 2021",
        tasks: (
        <>
          
        </>
      ),
      badges: ["wordpress", "business websites", "HTML", "CSS", "Javascript"],
    },
];

const Experience = () => {
  return (
    <section className='py-10 md:py-16'>
        <div className="container">
            <h2 className="text-center">WORK <span className="underline text-primaryClr">EXPERIENCE</span></h2>

            <TracingBeam className="px-6 mt-16">
                <div className="mx-auto antialiased pt-4 relative">
                    {experienceData.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h4>{item.title}</h4>
                            <h5 className="font-bold">{item.company}</h5>
                            <p className="text-sm">{item.time}</p>

                            <div className="flex flex-wrap gap-3 mt-3">
                                {item.badges?.map((badge, idx) => (
                                  <Tag key={badge+idx} text={badge} />
                                ))}
                            </div>

                            <div className="text-sm mt-3 prose prose-sm dark:prose-invert">{item.tasks}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>

            <div id='scroll-down' className='relative h-20 w-4 m-auto'></div>
        </div>
    </section>
  )
}

export default Experience;
