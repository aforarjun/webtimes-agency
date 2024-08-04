import React from "react";
import { HeroParallax } from "./HeroParallax";
import { Project } from "@/lib/interface";
import Button from "@/components/Button";

export function HeroProjectsParallax({products = []}: {products: Project[]}) {
  return <HeroParallax header={<Header />} products={products} />;
  // return <Header />
}

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10">
      <h4 className='topTag text-primaryClr text-base text-left'>OUR CHECKS</h4>
      <h1 className="">
        Our work for thriving <br /> start-ups and businesses
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>

      <a href="#ProjectsSection">
        <Button title={"View All Projects"} />
      </a>
    </div>
  );
};
