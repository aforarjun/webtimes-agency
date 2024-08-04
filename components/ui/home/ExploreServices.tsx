import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';

interface Service {
  title: string;
  description: string;
  features: string[];
  link?: string;
}

const services: Service[] = [
  {
    title: "UI / UX Design",
    description: "Crafting intuitive and engaging user experiences tailored to your needs.",
    features: ["Website Unique Design", "Website Unique Design", "Website Unique Design"],
    link: ""
  },
  {
    title: "Web Development",
    description: "Building robust and scalable web applications to drive your business forward.",
    features: ["Website Unique Design", "Website Unique Design", "Website Unique Design"],
    link: ""
  },
  {
    title: "Website Development",
    description: "Creating visually appealing and responsive websites that captivate your audience.",
    features: ["Website Unique Design", "Website Unique Design", "Website Unique Design"],
    link: ""
  },
  {
    title: "Bug/Error Fixes",
    description: "Ensuring seamless functionality with our comprehensive bug and error fixing services.",
    features: ["Website Unique Design", "Website Unique Design", "Website Unique Design"],
    link: ""
  },
  {
    title: "App Development",
    description: "Designing and developing mobile apps that offer great performance and user experience.",
    features: ["Website Unique Design", "Website Unique Design", "Website Unique Design"],
    link: ""
  },
  {
    title: "Backend APIs",
    description: "Providing reliable and efficient backend API services for your applications.",
    features: ["Website Unique Design", "Website Unique Design", "Website Unique Design"],
    link: ""
  }
];

const ExploreServices: React.FC = () => {
  return (
    <>
      <section className="flex flex-col self-center mt-12 md:mt-36 w-full">
        <div className="container">
          <div className="title relative">
            <h2 className="text-center">Explore Our <span className='underline'>Services</span></h2>
            <div className="absolute left-1/2 top-[50%] md:top-0 bg-primaryClr h-[60px] w-[150px] md:h-[80px] md:w-[250px] z-[-1]" />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10'>
            {services.map((service, idx) => (
              <ServiceCard key={service.title} service={service} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreServices;