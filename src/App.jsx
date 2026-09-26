import React from 'react'
import Home from './Pages/Student/Home.jsx'
import {Routes, Route} from "react-router-dom";
import CoursesList from './Pages/Student/CoursesList.jsx'

const App = () => {
  return (
   <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
      </Routes>

   </div>
  )
}

export default App
