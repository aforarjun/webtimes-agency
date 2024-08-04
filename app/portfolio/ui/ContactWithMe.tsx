import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUpRightFromSquare } from 'react-icons/fa6'

const ContactWithMe = () => {
  return (
    <section className='py-10 lg:py-20'>
        <div className="container border border-borderLine !p-0">
            <p className='px-4 py-2'>Collaboration</p>

            <div className='flex flex-wrap gap-8 border border-borderLine p-10'>
                <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                    <Image src={'/arjun.png'} width={200} height={200} alt={'arjun-singh'} style={{objectFit: 'contain'}} />
                </div>

                <div className="content">
                    <h4 className='topTag text-primaryClr text-base '>ABOUT ME!</h4>
                    <h2 className="">Let’s get to know <span className='underline text-primaryClr'>each other</span></h2>

                    <Link href='/contact-us'>
                        <Button title={'lets-get-in-touch'} rightImg={<FaUpRightFromSquare />} />
                    </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ContactWithMe