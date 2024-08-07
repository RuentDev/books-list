import React, { FC } from "react";

interface TextButtonProps {
  text: string
  isActive?: boolean
  onClick?: () => void
};

const TertButton:FC<TextButtonProps> = ({text, isActive, onClick}) => {
  return (
    <button onClick={onClick} className={`min-w-[100px] max-w-[130px] ${isActive ? "bg-primaryColor text-white shadow-2xl" : "bg-white text-black shadow-md"} hover:text-white ease-in-out duration-500 hover:bg-primaryColor text-[16px] p-2 rounded-sm`}>
      {text}
    </button>
  )
};

export default TertButton;