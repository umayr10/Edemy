import React from 'react'

const CourseCard = (props) => {
  return (
    <div className=" flex flex-col w-full max-w-66.5 h-80 bg-white rounded-lg border-gray-300 border shadow-md my-4 overflow-hidden">
      <img className="w-full h-37 object-cover" src={props.course_thumbnail} alt="Course 1" />
      <div className="flex flex-col items-start justify-center p-2 text-start">
        <h3 className="text-md font-bold">{props.course_title}</h3>
        <p>{props.course_author}</p>
        <p>{props.course_rating}</p>
        <p className="text-md font-bold">{props.course_price}</p>
      </div>
    </div>
  )
}

export default CourseCard