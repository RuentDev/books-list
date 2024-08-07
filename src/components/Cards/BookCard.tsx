"use client"
import { capitalizeFirstCharacterInString } from "@/libs/utils";
import Image from "next/image";
import React, { FC } from "react";



interface BookCardProps {
  image: string
  title: string
  author: string
  genre: string[]
  onClick: () => void
}


const BookCard:FC<BookCardProps> = ({image, title, author, genre, onClick}) => {
  

  return (
    <div onClick={onClick} className="w-full min-w-[300px] max-h-[750px] rounded-sm flex flex-col gap-5 cursor-pointer">
      <div className="image-container w-full h-[500px] relative overflow-hidden">
        <Image alt="book" src={image} width={1000} height={700} className="absolute object-cover object-center z-10"/>
        <div className="image-card-overlay w-full h-full bg-white absolute"></div>
      </div>
      <div className="title-container flex flex-col gap-2">
        <h2 className="book-author uppercase text-center font-bold">{title}</h2>
        <p className="book-title uppercase text-center">Olivia <span className="text-red-500">Wilson</span></p>
        <p className="book-genre text-center">
          {genre.map((item, idx) => (
            `${capitalizeFirstCharacterInString(item)}${idx < genre.length -1 ? " | " : ""}`
          ))}
        </p>
      </div>
    </div>
  )
};

export default BookCard;