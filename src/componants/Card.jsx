// Card component
import React from 'react'
import bookImg from '../assets/book.jpg'
import '../App.css'
import { Books } from '../assets/BookData'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Card() {
  const navigate = useNavigate()

  return (
    <div className='grid'>
      {
        Books.map((book) => (
          <div className='card'>
            <div className='bookimg'>
              <img src={bookImg} alt="" />
            </div>
            <div className='bookcontent'>
              <h2 className='booktitle'>{book.Book_Name}</h2>
              <p className='bookauthor'>{book.Author}</p>
              <p className='bookprice'>Price : ${book.Price}</p>
              <button onClick={() => navigate('/booking', { state: book })}>Buy Now</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}