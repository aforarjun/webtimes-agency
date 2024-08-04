import Image from 'next/image';
import React from 'react';
import Marquee from '../magicui/marquee';
import { cn } from '@/lib/utils';
import { reviewsData } from '@/lib/static/data';

const firstRow = reviewsData.slice(0, reviewsData.length / 2);
const secondRow = reviewsData.slice(reviewsData.length / 2);

const ReviewsSection: React.FC = () => {
  return (
    <section className="flex flex-col self-center py-10 md:py-20 w-full">
        <div className="container">
            <div className="flex flex-col">
                <div className="relative flex self-center px-5 font-bold text-center max-md:flex-wrap">
                    <h2 className="z-10 flex-auto my-auto">Our Recent <span className='underline'>Clients</span></h2>
                    <div className="absolute left-1/2 top-[50%] md:top-0 bg-primaryClr h-[60px] w-[150px] md:h-[80px] md:w-[250px] z-[-1]" />
                </div>

                <div className="w-full flex flex-col items-center justify-center mt-10 gap-10 lg:flex-row md:mt-24">
                    <div className="flex max-w-[557px] w-full">
                        <Image loading="lazy" src="/the-team-clients.png" width={557} height={257} alt="the-team-clients" className="object-contain grow w-full aspect-[2.17] max-md:mt-10 max-md:max-w-full" />
                    </div>

                    <div className="w-full md:max-w-full">
                        <h3 className="font-bold max-md:max-w-full">We exist to lead change in the Web world.</h3>
                        <p className="mt-3 max-md:max-w-full">Find out how our culture, approach and knowledge have made us a design partner to some of the world&apos;s leading web3 pioneers.</p>
                    </div>
                </div>
            </div>

            <div className="mt-9 relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
        </div>
    </section>
  );
};

export default ReviewsSection;

const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image className="rounded-full" width="32" height="32" alt="img" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
};