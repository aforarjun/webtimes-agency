"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaUpRightFromSquare } from 'react-icons/fa6';

const AboutMe = () => {
    const constraintsRef = useRef(null);
    
  return (
    <section className='py-10 md:py-16'>
        <div className="container">
            <h4 className='topTag text-primaryClr text-base text-center'>ABOUT ME!</h4>
            <h2 className="text-center">Let’s get to <br /> know <span className='underline text-primaryClr'>each other</span></h2>
            <p className='text-center'>Let me introduce myself, my workflows, my collaborations, <br /> and the technologies I like to use to bring my projects to life.</p>

            <div className='relative mt-10'>
                <motion.div className="w-full h-[120vh] md:h-[80vh]" ref={constraintsRef} />
                <motion.div
                    className='drag-item absolute w-full max-w-[500px] top-0 right-0 [backdrop-filter:blur(10px)] [background-color:rgba(255,255,255,0.25)]'
                    drag
                    dragConstraints={constraintsRef}
                    children={<ImageCard title="Arjun Singh" />}
                />
                <motion.div
                    // onMouseDown={mouseDownListner}
                    className='drag-item absolute w-full max-w-[500px] top-0 left-0 [backdrop-filter:blur(10px)] [background-color:rgba(255,255,255,0.25)]'
                    drag
                    dragConstraints={constraintsRef}
                    children={<About title="About Me" />}
                />
                <motion.div
                    className='drag-item absolute w-full max-w-[300px] bottom-0 left-1/2 [backdrop-filter:blur(10px)] [background-color:rgba(255,255,255,0.25)]'
                    drag
                    dragConstraints={constraintsRef}
                    children={<WhereIWork title="Where I Work" />}
                />
                {/* <motion.div
                    className='drag-item absolute w-full max-w-[400px] bottom-0 right-1/2 [backdrop-filter:blur(10px)] [background-color:rgba(255,255,255,0.25)]'
                    drag
                    dragConstraints={constraintsRef}
                    children={<Collaborations title="Collaborations" />}
                /> */}
                <motion.div
                    className='drag-item absolute w-full max-w-[250px] bottom-[-30px] [backdrop-filter:blur(10px)] [background-color:rgba(255,255,255,0.25)]'
                    drag
                    dragConstraints={constraintsRef}
                    children={<FindMeOnline title='Find me Online' />}
                />
            </div>

        </div>
        
        <div id='scroll-down' className='relative h-20 w-4 m-auto'></div>
    </section>
  )
}

export default AboutMe;

const About = ({title}: {title: string}) => (
    <div className='border border-borderLine'>
        <p className='px-3 py-1'>{title}</p>
        <ol className='list-decimal border border-borderLine p-4 pl-8 flex flex-col gap-2'>
            <li>Hi, I'm Arjun, a freelance Frontend web developer.</li>
            <li>Graduated in 2021 from NIT Allahabd.</li>
            <li>My focus is on creative development: my skills describe between Optimized, security and technical proficiency.</li>
            <li>My favorite technologies are based on the Javascripy & React paradigm: while my focus is on front-end development , I can also take care of all other stages of the whole development process, from the CMS configuration, to the live deployment on the hosting platform.</li>
        </ol>
    </div>
)

const WhereIWork = ({title}: {title: string}) => (
    <div className='border border-borderLine'>
        <p className='px-3 py-1'>{title}</p>
        <ol className='list-decimal border border-borderLine p-4 pl-8 flex flex-col gap-2'>
            <li>Currently looking for fulltime, remote, contactual Job Role.</li>
            <li>Available for freelance work and collaborations across worldwide.</li>
        </ol>
    </div>
)

const Collaborations = ({title}: {title: string}) => (
    <div className='border border-borderLine'>
        <p className='px-3 py-1'>{title}</p>
        <ol className='list-decimal border border-borderLine p-4 pl-8 flex flex-col gap-2'>
            <li>Currently looking for fulltime, remote, contactual Job Role.</li>
            <li>Available for freelance work and collaborations across worldwide.</li>
        </ol>
    </div>
)

const FindMeOnline = ({title}: {title: string}) => (
    <div className='border border-borderLine'>
        <p className='px-3 py-1'>{title}</p>
        <ol className='list-decimal border border-borderLine p-4 pl-8 flex flex-col gap-2'>
            <li className='hover:text-primaryClr'><a href="https://www.linkedin.com/in/arjun-singh-549934182/" target='_blank' className='flex gap-4'>LinkedIn <FaUpRightFromSquare /></a></li>
            <li className='hover:text-primaryClr'><a href="https://github.com/aforarjun" target='_blank' className='flex gap-4'>GitHub <FaUpRightFromSquare /></a></li>
            <li className='hover:text-primaryClr'><a href="https://wa.me/+918433243283" target='_blank' className='flex gap-4'>Whatsapp <FaUpRightFromSquare /></a></li>
            <li className='hover:text-primaryClr'><a href="https://www.instagram.com/webtimessolutions/" target='_blank' className='flex gap-4'>Instagram <FaUpRightFromSquare /></a></li>
            <li className='hover:text-primaryClr'><a href="https://www.facebook.com/profile.php?id=61560707943304" target='_blank' className='flex gap-4'>Facebook <FaUpRightFromSquare /></a></li>
        </ol>
    </div>
)

const ImageCard = ({title}: {title: string}) => (
    <div className='border border-borderLine'>
        <p className='px-3 py-1'>{title}</p>
        <Image
            src={'/arjun.png'}
            width={400}
            height={300}
            style={{objectFit: 'contain', padding: "10px 20px"}}
            alt={'Arjun/webtimes'}
        />
    </div>
)