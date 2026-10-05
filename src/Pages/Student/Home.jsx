import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CourseCard from '../../Components/Student/CourseCard'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-7 text-center">
      <Hero className="min-h-screen"/>
      <Companies />
      <CourseCard course_title="Build Text to Image SaaS app in React JS" course_author="Richard James" course_rating="4.5/5" course_price="$10.99" />
    </div>
  )
}

export default Home