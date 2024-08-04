import React from 'react';
import Marquee from '../magicui/marquee';
import Image from 'next/image';
import { clientsImages } from '@/lib/static/data';

const ClientsSection = () => {
  return (
    <div className='flex flex-col self-center py-10 md:py-20 w-full'>
        <div className="container">
            <div className="flex flex-col gap-6">
                <h3 className="text-4xl text-center font-normal text-lightText dark:text-lightText-dark">We’ve worked with <br /> over <span className='font-bold underline'>50 Web brands</span></h3>

                <div className="hidden md:flex flex-wrap self-center justify-center max-w-[894px]">
                    {clientsImages?.map((client:string) => (
                        <div key={client} className="grid w-[298px] h-[205px] border-borderLine is(dark):border-lightBorderLine">
                            <Image
                                loading="lazy"
                                src={`/clients/${client}.png`}
                                alt={client || "client"}
                                width={150}
                                height={70}
                                className={'aspect-auto object-contain m-auto invert'}
                            />
                        </div>
                    ))}
                </div>

                <Marquee className="flex gap-6 md:hidden">
                    {clientsImages?.map((client) => (
                        <Image
                            key={client}
                            loading="lazy"
                            src={`/clients/${client}.png`}
                            alt={client || "client"}
                            width={150}
                            height={70}
                            className={'aspect-auto object-contain m-auto invert mx-8'}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default ClientsSection