import React from 'react'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 bg-linear-to-b from-[#E6FFFF] to-[#FFFFFF] h-140.25'>
      <h1 className='text-5xl font-bold w-198 text-center'>Empower your future with the courses designed to <span className='text-blue-500'>fit your choice.</span></h1>
      
      <p className='w-140 text-center'>We bring together world-class instructors, interactive content, and a supportive
        community to help you achieve your personal and professional goals.</p>
      
      <div className='flex items-center border-b border border-gray-400 rounded-md gap-2 p-1'>
        <img src={assets.search_icon} alt="search_icon" className='pl-1'/>
        <input className=' w-149.75 py-1' type="text" placeholder="Search for courses" />
        <button className='bg-blue-600 rounded-md text-white px-8 py-2 '>Search</button>
      </div>
    </div>
  )
}

export default Home