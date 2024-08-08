import { Book } from '@/libs/types'
import { capitalizeFirstCharacterInString } from '@/libs/utils'
import Image from 'next/image'
import React from 'react'

interface ModalProps{
  book: Book
  onOverlayClick: () => void
}

const Modal: React.FC<ModalProps> = ({book, onOverlayClick}) => {
  return (
    <div onClick={onOverlayClick} className='modal w-full h-screen fixed z-50 top-0 left-0 bg-modalOverlay p-5 flex items-center justify-center'>
      <div className="inner-container md:h-[90%] lg:w-[60%] lg:h-[80%] bg-white rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        <div className="left-container relative w-full h-full overflow-hidden">
          <Image 
            width={1000}
            height={1000}
            src={book.image}
            alt={book.title}
            className='absolute object-cover object-center'
          />
        </div>
        <div className="right-container w-full h-full border-2">
          <div className="book-details p-5 flex flex-col gap-5">
            <p className="title"><span className='font-semibold'>Title: </span>{book.title}</p>
            <p className="description"><span className='font-semibold'>Description: </span>{book.description}</p>
            <p className="pages"><span className='font-semibold'>Pages: </span>{book.pages}</p>
            <p className="author"><span className='font-semibold'>Author: </span>{book.author}</p>
            <p className="genre"><span className='font-semibold'>Genre: </span>{book.genre.map((item, idx) => `${capitalizeFirstCharacterInString(item)}${idx < book.genre.length -1 ? " | " : ""}`)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal