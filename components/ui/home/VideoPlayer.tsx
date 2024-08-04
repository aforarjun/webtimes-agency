"use client"

import Modal from '@/components/Model';
import Image from 'next/image'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="videoTag absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[20%] lg:translate-y-[-50%] flex items-center justify-center w-[250px] h-[250px] z-10">
        <div className="circles">
            <Image src={"/Play-icon.png"} width={60} height={60} alt={"Play-icon"} className='z-[100]' onClick={() => setIsOpen(true)} />
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
        </div>
    </div>

    {isOpen && (
        <Modal title={'Project Video'} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ReactPlayer playing controls url={"/videos/celedon-law.mp4"} width="100%" height="100%" />
        </Modal>
    )}
    </>
  )
}

export default VideoPlayer