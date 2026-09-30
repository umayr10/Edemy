import React from 'react'
import {assets} from '../../assets/assets.js'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen gap-4 justify-start items-start text-gray-500 p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-center items-center gap-4 hover:text-gray-700 cursor-pointer">
        <img className='bg-white w-5' src={assets.home_icon} alt="home" />
        <h2 className="text-md text-center">Dashboard</h2>
      </div>

      <div className="flex justify-center items-center gap-4 hover:text-gray-700 cursor-pointer">
        <img className='bg-white w-5' src={assets.add_icon} alt="home" />
        <h2 className="text-md text-center">Add Course</h2>
      </div>

      <div className="flex justify-center items-center gap-4 hover:text-gray-700 cursor-pointer">
        <img className='bg-white w-5' src={assets.my_course_icon} alt="home" />
        <h2 className="text-md text-center">My Courses</h2>
      </div>

      <div className="flex justify-center items-center gap-4 hover:text-gray-700 cursor-pointer">
        <img className='bg-white w-5' src={assets.person_tick_icon} alt="home" />
        <h2 className="text-md text-center">Students Enrolled</h2>
      </div>
      
      
    </div>
  )
}

export default Sidebar