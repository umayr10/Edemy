import React from 'react'
import { assets } from '../../assets/assets.js'

const CourseCard = (props) => {
  return (
    <div className=" flex flex-col w-66.5 h-75.75 bg-white rounded-lg border-gray border shadow-md p-4 items-center justify-center gap-4 my-4">
      <img className="w-full h-37 object-cover" src={assets.course_1_thumbnail} alt="Course 1" />
      <div className="flex flex-col items-start justify-center gap-2 p-2 text-start">
        <h3 className="text-md font-bold">{props.course_title}</h3>
        <p>{props.course_author}</p>
        <p>{props.course_rating}</p>
        <p className="text-md font-bold">{props.course_price}</p>
      </div>
    </div>
  )
}

export default CourseCard