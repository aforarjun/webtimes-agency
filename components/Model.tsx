"use client";

import React from 'react'
import ReactDOM from "react-dom";
import { RiCloseFill } from "react-icons/ri";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: any;
  footer?: React.ReactNode;
};

const Modal = ({ title, isOpen, onClose, children, footer }: Props) => {
  if (!isOpen) return null;

  const modalContent = (
    <div id="default-modal" tabIndex={-1} aria-hidden="true" className="flex items-start overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-4xl max-h-full">

          {/* <!-- Modal content --> */}
          <div className="relative bg-white dark:bg-linearDark rounded-lg shadow">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">{title}</h3>
                <RiCloseFill size={35} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose} />
              </div>

              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                {children}
              </div>

              {/* <!-- Modal footer --> */}
              {footer && (
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  {footer}
                </div>
              )}
          </div>

      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default Modal;
