"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    features: string[];
    link?: string;
  },
  idx: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, idx }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Link
      href={service?.link || ""}
      key={service?.link}
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.4] block  rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      <Card>
        <h3 className="text-center max-md:max-w-full">{service.title}</h3>
        <p className="self-stretch mt-5 md:mt-9 max-md:max-w-full">{service.description}</p>

        {service.features.map((feature, index) => (
          <div key={index} className="flex gap-5 mt-5">
            <Image loading="lazy" width={40} height={40} src="/Checkmark.png" alt="Checkmark" className="shrink-0 w-10 aspect-square" />
            <div className="flex-auto self-start mt-3">{feature}</div>
          </div>
        ))}

        <Button
          title={'Explore More'} 
          rightImg={<Image loading="lazy" src="/Down-Left-Arrow.png" width={25} height={25} alt="Down-Left-Arrow" className="shrink-0 aspect-square w-[25px]" />}
        />
      </Card>
    </Link>
  );
};

export default ServiceCard;

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div
      className="rounded-2xl h-full w-full p-4 overflow-hidden border-borderLine bg-linearLight dark:bg-linearDark border-transparent relative z-20"
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}