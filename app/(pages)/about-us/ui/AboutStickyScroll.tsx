import { StickyScroll } from '@/components/aceternity/sticky-scroll-reveal'
import Image from 'next/image';

const scrollContnet = [
    {
        title: "Our Mission",
        description: "At Webtimmes, we strive to maximize your financial potential and ensure compliance with all regulations. Our mission is driven by our core values: integrity, expertise, and innovation.",
        content: (
          <Image src={'/our-mission.png'} alt={'our mission'} width={500} height={500} />
        ),
    },
    {
        title: "Our Vision",
        description: "We envision a world where financial complexity is simplified, empowering individuals and businesses to achieve their financial goals with confidence and clarity",
        content: (
            <Image src={'/our-vision.png'} alt={'our vision'} width={500} height={500} />
        ),
    },
    {
        title: "Our Aim",
        description: "Our aim is to provide holistic financial solutions that cater to the unique needs of each client, fostering long-term financial stability and growth.",
        content: (
            <Image src={'/our-aim.png'} alt={'our aim'} width={500} height={500} />
        ),
    },
    {
        title: "Our Story",
        description: "Founded with the vision of simplifying finances, Webtimes has grown to serve over 1000 clients with a broad range of financial solutions. With more than 15 years of experience, we are dedicated to helping you achieve financial success.",
        content: (
            <Image src={'/our-story.jpeg'} alt={'our story'} width={500} height={500} />
        ),
    },
] as any;

const Title = () => (
    <div className='text-center max-w-[500px] m-auto'>
        <h4 className='topTag text-primaryClr text-base'>LET’S TALK GROWTH</h4>
        <h2>We make it easier for you to do business.</h2>
    </div>
)

const AboutStickyScroll = () => {
  return (
    <section className="py-10 md:py-20">
        <StickyScroll 
            title={<Title />}
            content={scrollContnet}
        />
    </section>
  )
}

export default AboutStickyScroll;