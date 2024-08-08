"use client"
import { Book } from "@/libs/types";
import React, { FC, useState } from "react";
import Cards from "../Cards";
import Buttons from "../Buttons";
import { FILTERS, ITEMS_PER_PAGE } from "@/libs/constant";
import Modal from "../Modal/Modal";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

interface BooksProps {
  books: Book[]
};


const Books:FC<BooksProps> = ({books}) => {

  const [booksData, setBooksData] = useState<Book[]>(books.slice(0, 12))
  const [current, setCurrent] = useState(1)
  const [bookFilters, setBookFilers] = useState(FILTERS)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const handleFilterClick = (filter: string) => {

    setBooksData((prevState) => {
      const newState = books.filter((item) => {

        if(filter === "all"){
          return books
        }

        if(item.genre.includes(filter)){
          setBookFilers((preBookFilters) => {
          
            preBookFilters.forEach((items) => {
              if(items.label === filter){
                items.isActive = true
              }else{
                items.isActive = false
              }
            })

            return preBookFilters

          })
          return item
        }
      })

      return newState
    })
  }

  const handleBookClick = (book: Book) => {
    setSelectedBook((prevState) => prevState = book)
  }

  const handleOverlayClick = () => {
    setSelectedBook(null)
  }

  const handlePaginationClick = (page: number) => {
    setCurrent(page);
    
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    setBooksData(books.slice(startIndex, endIndex));
  };



  return (
    <div className="books-container w-full h-auto">
      <div className="filters flex">
        <div className="right-content w-full h-auto grid p-5 grid-cols-3 md:grid-cols-2 lg:grid-cols-9 gap-5 justify-end py-5">
          {bookFilters.map((item) => (
            <Buttons.TextButton
              key={item.id} 
              text={item.label.toUpperCase()}
              isActive={item.isActive}
              onClick={() => handleFilterClick(item.label)}
            />
          ))}
        </div>
      </div>

      {selectedBook && (<Modal onOverlayClick={handleOverlayClick} book={selectedBook} />)}

      <div className="books w-full h-auto grid items-center p-5 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 lg:gap-10">
        {booksData.map((book) => {
        return (
          <Cards.BookCard 
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            image={book.image}
            onClick={() => handleBookClick(book)}
          />
        )
      })}
      </div>

      <div className="pagination w-full p-5 flex items-center justify-center">
        <ResponsivePagination
          current={current}
          total={Math.ceil(books.length / ITEMS_PER_PAGE)}
          onPageChange={handlePaginationClick}
        />
      </div>
    </div>
  )
};



export default Books;