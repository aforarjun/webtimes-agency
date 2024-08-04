"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const servicesData = [
    {
        id: '1webtimes',
        title: 'PR & Link Building',
        link: '',
        content: '',
        icon: '/service-1.png'
    },
    {
        id: '2webtimes',
        title: 'Google Business Profile',
        link: '',
        content: '',
        icon: '/service-2.png'
    },
    {
        id: '3webtimes',
        title: 'Website Design & Development',
        link: '',
        content: '',
        icon: '/service-3.png'
    },
    {
        id: '4webtimes',
        title: 'Local SEO',
        link: '',
        content: '',
        icon: '/service-4.png'
    },
    {
        id: '5webtimes',
        title: 'Google Ads Management',
        link: '',
        content: '',
        icon: '/service-5.png'
    },
    {
        id: '6webtimes',
        title: 'Mobile Apps and Development',
        link: '',
        content: '',
        icon: '/service-6.png'
    },
    {
        id: '7webtimes',
        title: 'Dashboard development',
        link: '',
        content: '',
        icon: '/service-7.png'
    },
]

const ServicesSwiper = () => {
  return (
    <div className='py-[80px] md:py-[100px]'>
        <div className="container">
            <h4 className='topTag text-primaryClr text-base'>Our Services</h4>
            <h2>Learn about our digital <br /> marketing services</h2>

            <Swiper
                slidesPerView={1}
                autoplay={true}
                speed={800}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    420: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="servicesSwiper mt-16"
            >
                {servicesData?.map(({id, icon, title, content, link = '#'}) => (
                    <SwiperSlide key={id} className='p-5 min-h-[200px] border border-lightText-dark bg-lightText-dark hover:border-primaryClr'>
                        <Link href={link}>
                            <article className='flex flex-col gap-2'>
                                <Image src={icon} width={60} height={60} alt={title} />
                                <h4>{title}</h4>
                                <p>{content}</p>
                            </article>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default ServicesSwiper