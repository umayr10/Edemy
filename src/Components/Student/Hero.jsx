import React from 'react'
import { assets } from '../../assets/assets.js'

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 bg-linear-to-b from-[#E6FFFF] to-[#FFFFFF] min-h-140 px-4">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full max-w-4xl text-center">
          Empower your future with the courses designed to{' '}
          <span className="text-blue-500">
            fit your choice.
          </span>
        </h1>

        <p className="w-full max-w-xl text-sm sm:text-base text-center">
          We bring together world-class instructors, interactive content, and a supportive
          community to help you achieve your personal and professional goals.
        </p>

        <div className="flex items-center w-full max-w-xl border border-gray-400 rounded-md gap-2 p-1 bg-white">

          <img
            src={assets.search_icon}
            alt="search_icon"
            className="pl-1 w-6 h-6"
          />

          <input
            className="flex-1 min-w-0 py-2 outline-none text-sm sm:text-base"
            type="text"
            placeholder="Search for courses"
          />

          <button className="bg-blue-600 rounded-md text-white px-4 sm:px-8 py-2">
            Search
          </button>

        </div>

      </div>
    </div>
  )
}

export default Hero