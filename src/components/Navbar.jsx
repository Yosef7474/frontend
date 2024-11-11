import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { HiOutlineUser } from "react-icons/hi";


import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbUserHexagon } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";


import avatarImg from "../assets/avatar.png"
import logoImg from "../assets/logo.jpg"

const navigation = [
        {name: "Dashboard", href:"/Dashboard"},
        {name: "Orders", href:"/orders"},
        {name: "Cart Page", href:"/cart"},
        {name: "Checkout", href:"/checkout"},
]
    

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen ] = useState(false)
   

    const currentUser = true;
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
       <nav className='flex justify-between items-center'>
        {/* left side */}

        <div className='flex items-center md:gap-16 gap-4'>
            <Link to="/">
            <img src={logoImg} alt="" className={`size-12 rounded-full `}/>
            </Link>

            {/* search input */}
            <div className='relative sm:w-72 w-40 space-x-2'>
            <FaSearch className='absolute inline-block left-3 inset-y-2' />
            <input type="text" 
            placeholder='Search here' 
            className='bg-[#EAEAED] w-full py-1 md:px-6 rounded-md
            focus:outline-none' />
            </div>
          

        </div>

        {/* right side */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>

        <div>
                    {
                        currentUser ? <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                           <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />

                        </button>
                        {/* show dropdown */}
                        {
                            isDropdownOpen && (
                                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                    <ul className='py-2'>
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                    {item.name}

                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </> : <Link to="/login">
                        <TbUserHexagon className='size-6'/>
                        </Link>
                         
                    }
                </div>
        
        <button className='hidden sm:block'>
        <FaRegHeart className='size-6' />
        </button>

        <Link to="/cart" className='bg-primary rounded-[10px] p-1 sm:px-6 py-2 flex items-center'>
        <FaCartPlus className='size-6' />
        <span className='text-sm font-semibold sm:ml-1'>0</span>

        </Link>
        
        </div>
       </nav>
        </header>
  )
}

export default Navbar