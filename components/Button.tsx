import React from 'react';

interface ButtonProps {
  title: string;
  wrapperStyle?: React.CSSProperties;
  classname?: string;
  rightImg?: React.ReactNode;
  leftImg?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?:boolean;
  onClick?: () => void;
}

const Button = ({ title, wrapperStyle = {}, classname = "", rightImg, leftImg, ...props }: ButtonProps) => {
  return (
    <button
      style={wrapperStyle}
      className={`${classname} flex gap-4 items-center px-8 py-3.5 mt-12 mb-1.5 text-base text-center border border-primaryClr border-solid bg-primaryClr bg-opacity-0 rounded-[40px] max-md:px-5 max-md:mt-10`}
      {...props}
    >
      {leftImg}
      <span>{title}</span>
      {rightImg}
    </button>
  )
}

export default Button