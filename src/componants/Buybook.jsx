// Booking component
import React from 'react';
import '../App.css'; // Ensure to include your CSS for styling
import { useLocation } from 'react-router-dom';
import bookImage from '../assets/book.jpg'
import '../App.css'

export default function Booking() {
  const location = useLocation();
  const book = location.state;

  return (
    <div className='booking-container'>
        {console.log(book)}
        <div className='BookNow'>
            <div className='booking-image'>
                <img src={bookImage} alt="Book Cover" />
            </div>
            <div className='booking-summary'>
                <h1>{book.Book_Name}</h1>
                <h2>Book Author : {book.Author}</h2>
                <p>
                {book.Summary}
                </p>
                <button className='buy-button'>Buy Now</button>
            </div>
        </div>
    </div>
  );
}