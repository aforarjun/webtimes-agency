import NumberTicker from '@/components/magicui/number-ticker'
import Particles from '@/components/magicui/particles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeHero = () => {
  return (
    <div className="HomepageSection relative">
      <h2 className="headline text-lightText dark:text-lightText-dark">WELCOME TO WEBTIMES <br /> YOUR BEST & FIRST CHOICE</h2>

      <div className='container relative !max-w-[850px] z-[2]'>
        <div className="text-center flex flex-col items-center">
          <h1 className='title-main'><span className='underline'>Start, Build & Grow</span> your <br /> Business with <span className='underline'>Webtimes</span></h1>
          <p className='mt-6 max-w-[650px]'>We’re the online growth engine that powers your business. Let us help you exceed your goals month after month, year after year. [We create user-friendly interfaces for fast-growing startups. And help in Start, Build & Grow your Business.]</p>

          <Link href="/contact-us">
            <Image src="/btn.png" width={200} height={200} alt='contact us button' className='mt-10 w-[100px] h-[100px] md:w-[200px] md:h-[200px]' />
          </Link>
        </div>

        <div className='mt-8 max-w-[480px]'>
          <h3>
            <span className='text-3xl font-normal'>More Than</span> <br />
            <span className='text-5xl '><NumberTicker value={200} />+</span> 
            <span className='text-base font-normal'> satisfied clients</span>
          </h3>
          <p>Weather you are a Businessman OR starting a business</p>
          <p>We are here to serve you best!</p>
        </div>
      </div>

      <div className="container relative z-[2]">
        <div className='mt-10 md:mt-24 pt-[20px] px-[25px] md:pt-[53px] md:px-[94px] bg-linearLight dark:bg-linearDark border-borderLine rounded-20'>
          <Image src="/hero-home.png" priority width={1200} height={676} className='object-contain' alt='dashboard' />
        </div>
      </div>


      <Particles
        className="absolute inset-0 z-[1]"
        quantity={500}
        ease={80}
        // color={color}
        refresh
      />
    </div>
  )
}

export default HomeHero