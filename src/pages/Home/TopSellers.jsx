import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'


import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const categories = ["chose a genre", "Business" , "Fiction", "Horor", "Adventure"]

const TopSellers = () => {

    const [books, setBooks] = useState([])
    const [selectedCategory, setselectedCategory] = useState("Choose Genre")

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    }, [])

    const filteredBooks = selectedCategory === "Choose Genre" ? books: books.filter(book => book.category === selectedCategory.toLocaleLowerCase())
    console.log(filteredBooks)
    

  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
                 {/* category filter */}
        <div className='mb-8 flex items-center'>
            <select
            onChange={(e) => setselectedCategory(e.target.value) }
            name="category" id="category" className='border bg-white
            border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
            {
                categories.map((category, index) => (
                    <option key={index} value={category}> {category}</option>
                    
                ))
            }
            </select>

        </div>



        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
               filteredBooks.length > 0 && filteredBooks.map((book,index) => (
                    <SwiperSlide>
                        <BookCard key={index} book={book}/>
                    </SwiperSlide>
                       
                   
                ))
            }  
       
      </Swiper>

        
            
        

    </div>
  )
}

export default TopSellers