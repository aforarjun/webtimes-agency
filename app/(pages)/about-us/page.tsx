import React from "react";
import Image from "next/image";

import styles from "./aboutUsPage.module.scss";
import CommonSec from "@/components/ui/CommonSec/CommonSec";
import Prefooter from "@/components/ui/Prefooter/Prefooter";
import { BgFallingStars } from "@/components/aceternity/bg-fallingStarts";
import AboutStickyScroll from "./ui/AboutStickyScroll";
import OurCoreValues from "./ui/OurCoreValues";
import { FaqsSection } from "@/components/ui/FaqsSection";

const {
  aboutHeader_text,
  aboutHeader_text_leftImg,
  aboutHeader_text_rightImg,
  aboutHeader_text_underline,
  aboutHeader_text_dot,
} = styles;

function Page() {
  return (
    <main className='relative'>
      <header className='relative grid w-full h-[500px] md:pt-[96px] pt-[50px] overflow-hidden'>
        <div className='container'>
          <div className={aboutHeader_text}>
            <Image
              className={`${aboutHeader_text_leftImg} invert dark:invert-0`}
              src={"/left-about-1.svg"}
              alt="left-about"
              width={80}
              height={80}
            />
            <Image
              className={`${aboutHeader_text_rightImg} invert dark:invert-0`}
              src={"/right-about-2.png"}
              alt="right-about"
              width={150}
              height={150}
            />

            <div>
              <h4 className='topTag text-primaryClr text-base'>CURIOUS?</h4>
              <h1>About Us</h1>
              <Image
                className={aboutHeader_text_underline}
                src={"/underline.png"}
                alt="underline"
                width={150}
                height={20}
              />
              <Image
                className={aboutHeader_text_dot}
                src={"/dot.png"}
                alt="dot"
                width={15}
                height={15}
              />
            </div>

            <h5 className="mt-14 text-center">
              <strong>Get to know about us and relive our journey </strong>Get
              acquainted with our team and understand how we work and proceed
              towards success.
            </h5>
          </div>
        </div>

        <BgFallingStars />
      </header>

      <CommonSec
        tag={"Face Behind The Brand"}
        title={"Hello everyone, <br /> My name is Arjun"}
        content="I am a web developer freelancer who started my journey on Fiverr (a Freelance platform) back in Sep 2020. <br />
                I had the privilege to work with many businesses and delivered the best possible services which resulted in 150+ 5-star reviews & level-two seller status. <br />
                Making websites / web apps for small startups / businesses always amazed me. I wanted to learn more about it and share all the helpful information along the way. This is the main reason I started The WebTimes."
        image={"/about_me.jpg"}
        buttonTitle={"Contact me today for your website redesign"}
        link="/contact-us"
      />

      <AboutStickyScroll />

      {/* <TeamWorkSlider /> */}


      <OurCoreValues />
      {/* <OurTeamSection /> */}
      {/* <Testimonials /> */}
      <FaqsSection />
      <Prefooter />
    </main>
  );
}

export default Page;
