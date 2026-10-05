import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CourseCard from '../../Components/Student/CourseCard'
import  course_1  from '../../assets/course_1.png'
import course_2  from '../../assets/course_2.png'
import course_3  from '../../assets/course_3.png'
import course_4  from '../../assets/course_4.png'


function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-7 text-center">
      <Hero className="min-h-screen" />
      <Companies />

      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-md">Learn from the best</h1>
        
        <p className="w-157.5 text-center">Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <CourseCard course_thumbnail={ course_1 } course_title="Build Text to Image SaaS app in React JS" course_author="Richard James" course_rating="4.5/5" course_price="$10.99" />

          <CourseCard course_thumbnail={ course_2 } course_title="Build AI BG Removal SaaS 
          App in React JS" course_author="Richard James" course_rating="4.5/5" course_price="$10.99" /> 

          <CourseCard course_thumbnail={ course_3 } course_title="React Router Complete Course
          in One Video" course_author="Richard James" course_rating="4.5/5" course_price="$10.99" /> 

          <CourseCard course_thumbnail={ course_4 } course_title="Build Full Stack E-Commerce 
          App in React JS" course_author="Richard James" course_rating="4.5/5" course_price="$10.99" /> 
        </div>
      </div>
      
    </div>
  )
}

export default Home