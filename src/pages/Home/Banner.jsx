import React from 'react'
import bannerImg from "../../assets/banner/banner.jpg"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>
        Recently Published Books
        </h1>
        <p className='mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corporis accusamus perferendis tempore veritatis quae suscipit amet,
            sapiente at, eligendi laudantium atque delectus. 
            Asperiores numquam amet ipsum quibusdam repellat dolorum omnis!
        </p>

        <button className='bg-primary  px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>
            Follow
            </button>
        </div>
        
       
    </div>
    
    
    
  )
}

export default Banner