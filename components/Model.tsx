"use client";

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  style?: any;
};

export const Modal = ({ isOpen, children }: Props) => {
  if (!isOpen) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "auto";
    }
  }, []);

  // const modalRef = useRef(null);
  // useOutsideClick(modalRef, () => setOpen(false));

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          backdropFilter: "blur(10px)"
        }}
        exit={{
          opacity: 0,
          backdropFilter: "blur(0px)",
        }}
        className="fixed [perspective:800px] [transform-style:preserve-3d] bg-lightText-dark inset-0 h-full w-full  flex items-center justify-center z-[999]"
      >
        <div className="relative border border-borderLine rounded-lg shadow">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export const ModalHeader = ({children}: {children: React.ReactNode}) => (
  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
    {children}
  </div>
);

export const ModalContent = ({children}: {children: React.ReactNode}) => (
  <div className="p-4 md:p-5 space-y-4">
    {children}
  </div>
);

export const ModalFooter = ({children}: {children: React.ReactNode}) => (
  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
    {children}
  </div>
)

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
// export const useOutsideClick = (
//   ref: React.RefObject<HTMLDivElement>,
//   callback: Function
// ) => {
//   useEffect(() => {
//     const listener = (event: any) => {
//       // DO NOTHING if the element being clicked is the target element or their children
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       callback(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, callback]);
// };