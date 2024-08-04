import HomeHero from "@/components/ui/home/HomeHero";
import MargueeTags from "@/components/ui/MargueeTags";
import ExploreServices from "@/components/ui/home/ExploreServices";
import CommonSec from "@/components/ui/CommonSec/CommonSec";
import ServiceIndustries from "@/components/ui/ServiceIndustries/ServiceIndustries";
import ServicesSwiper from "@/components/ui/ServicesSwiper";
import VideoPlayer from "@/components/ui/home/VideoPlayer";
import ReviewsSection from "@/components/ui/ReviewsSection";
import Prefooter from "@/components/ui/Prefooter/Prefooter";
import { FaqsSection } from "@/components/ui/FaqsSection";
// import Projects from "@/components/ui/home/projects/Projects";
// import ClientsSection from "@/components/ui/ClientsSection";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <MargueeTags tags={["Development",
        "Web/App Design",
        "Dashboard",
        "Strategy",
        "Create Uniqueness",
        "SEO",
        "Social"]}
      />
      
      <CommonSec
        tag="IT'S TIME TO GROW!"
        title="We help local businesses grow <span>Leads</span> & <span>Revenue</span>"
        content="Whether you are looking for end-to-end website design or looking to optimize your website with some powerful integrations, webdew is here to make it happen. Additional features and integrations will turn your website into a multi-faceted, highly-functioning machine. All you have to do is tell us what you need."
        image="/webtimes-about-us01.jpg"
        buttonTitle="Contact us"
        link="/contact-us"
      />

      <CommonSec
        tag="ABOUT US"
        title="Webtimes is a digital marketing agency driving real results nationwide"
        content="Formerly Today’s Local Media, webtimes is a digital marketing brand built to bring new leads to businesses and accelerate their growth. We do this by increasing brand awareness, leveraging online advertising, and expanding their local presence."
        image="/webtimes-about-us03.jpeg"
        buttonTitle="See Why Our Clients Trust Us"
        link="/contact-us"
        flip={true}
        component={
          <ul className="mt-5 flex gap-3">
            <li>
              <h4 className="text-lightText dark:text-lightText-dark">FAST CUSTOMER SERVICE</h4>
              <p className="!mt-1">Contact us today, and your issue will be handled right away. You won’t be put in a queue.</p>
            </li>
            <li>
              <h4 className="text-lightText dark:text-lightText-dark">PROACTIVE, NOT REACTIVE</h4>
              <p className="!mt-1">We are always monitoring your account and strategizing on ways to make your business.</p>
            </li>
          </ul>
        }
      />

      <ExploreServices />
      <ServicesSwiper />

      <CommonSec
        tag="WEBSITE DESIGN"
        title="Beautiful websites that increase leads"
        content="As a full-service marketing agency serving clients nationwide, our mission is to fuel your business’s growth through innovative strategies that generate new leads and accelerate success."
        image="/web-design-celedon.png"
        buttonTitle="See Why Our Clients Trust Us"
        link="/contact-us"
        imageFit="contain"
        component={
          <>
            <VideoPlayer />
            <ul className="mt-5 flex flex-col gap-1 list-disc font-kamron">
              <li className="text-xl text-gray-800 dark:text-gray-200">Lead generating design</li>
              <li className="text-xl text-gray-800 dark:text-gray-200">Track every form and call</li>
              <li className="text-xl text-gray-800 dark:text-gray-200">Fast customer service</li>
            </ul>
          </>
        }
      />

      <ServiceIndustries />
      
      <ReviewsSection />
      {/* <Projects /> */}
      {/* <ClientsSection /> */}
      <FaqsSection />
      
      <Prefooter />
    </main>
  );
}
