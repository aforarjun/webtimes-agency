"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { Modal, ModalContent, ModalHeader } from '@/components/Model';

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
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <h3 className="text-xl font-semibold">{"Project Video"}</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </ModalHeader>

            <ModalContent>
                <ReactPlayer playing controls url={"/videos/celedon-law.mp4"} width="100%" height="100%" />
            </ModalContent>
        </Modal>
    )}
    </>
  )
}

export default VideoPlayer;