import Image from 'next/image'
import React from 'react'

const Anouncement = () => {
  return (
    <div className="bg-white text-black text-sm py-2">
  <div className="container mx-auto flex justify-between items-center px-6">
    {/* Left Section: Logo */}
    <div className="flex items-center absolute left-10">
    <Image src="/assets/Frame (1).png" alt="Jordan Logo" width={24} height={24} />
    </div>

    {/* Center Section: Buttons */}
    <div className="flex space-x-6 absolute right-10">
      <button className="hover:underline focus:outline-none">        Find a Store   </button>
      <button className="hover:underline focus:outline-none">|       Help     |</button>
      <button className="hover:underline focus:outline-none">|       Join Us       |</button>
      <button className="hover:underline focus:outline-none">|       Sign In          </button>
    </div>

    {/* Right Section: Placeholder */}
    <div className="w-4"></div>
  </div>
</div>


        
  )
}

export default Anouncement



