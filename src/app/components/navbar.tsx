import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div><div>
    <div className="container mx-auto flex items-center justify-between px-6 py-3">
      {/* Left Section: Placeholder for Logo */}
      <div className="w-16 h-8 ">
        <Image alt="nike logo" src="/assets/Vector.png"
        height={100}
        width={100}/>
      </div>
  
      {/* Center Section: Navigation Buttons */}
      <div className="flex space-x-6">
        <button className="text-sm font-semibold hover:text-gray-500 focus:outline-none">
          New & Featured
        </button>
        <button className="text-sm font-semibold hover:text-gray-500 focus:outline-none">
          Men
        </button>
        <button className="text-sm font-semibold hover:text-gray-500 focus:outline-none">
          Women
        </button>
        <button className="text-sm font-semibold hover:text-gray-500 focus:outline-none">
          Kids
        </button>
        <button className="text-sm font-semibold hover:text-gray-500 focus:outline-none">
          Sale
        </button>
        <button className="text-sm font-semibold hover:text-gray-500 focus:outline-none">
          SNKRS
        </button>
      </div>
  
      {/* Right Section: Placeholders for Icons */}
      <div className="flex items-center space-x-4">
        <div className="w-5 h-5"><CiSearch /></div>
        <div className="w-5 h-5"><FaHeart /></div>
        <div className="w-5 h-5 "><BsBag /></div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Navbar