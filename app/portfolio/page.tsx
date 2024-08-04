import React from 'react'
import Header from './ui/Header';
import Skills from './ui/Skills';
import Experience from './ui/Experience';
import AboutMe from './ui/AboutMe';
import ContactWithMe from './ui/ContactWithMe';

const page = () => {
  return (
    <main className='relative'>
        <Header />
        <AboutMe />
        <Skills />
        <Experience />
        <ContactWithMe />
    </main>
  )
}

export default page