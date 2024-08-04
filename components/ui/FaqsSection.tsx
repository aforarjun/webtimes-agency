"use client"

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqsData } from "@/lib/static/data";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ i, faq, expanded, setExpanded }:any) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex justify-between items-center w-full border border-borderLine px-5 py-3"
      >
        <h5>{faq.title}</h5>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", padding: "12px 20px" },
              collapsed: { opacity: 0, height: 0, padding: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full border border-borderLine"
          >
            <p dangerouslySetInnerHTML={{__html: `${faq.content}`}}></p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqsSection = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h4 className='topTag text-primaryClr text-base text-center'>Have questions?</h4>
        <h2 className="text-center">Let’s clear all the <span className="underline text-primaryClr">doubts</span></h2>

        <div className="w-full flex flex-col mx-auto gap-5 mt-16 max-w-[750px]">
          {faqsData?.map((faq) => (
            <Accordion key={faq.id} i={faq.id} faq={faq} expanded={expanded} setExpanded={setExpanded} />
          ))}
        </div>
      </div>
    </section>
  )
};