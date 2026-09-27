import React from 'react'
import Home from './Pages/Student/Home.jsx'
import {Routes, Route} from "react-router-dom";
import CoursesList from './Pages/Student/CoursesList.jsx'
import CourseDetails from './Pages/Student/CourseDetails.jsx'
import Myenrollments from './Pages/Student/Myenrollments.jsx'
import Player from './Pages/Student/Player.jsx' 
import Loading from './Components/Student/Loading.jsx'
import Educator from './Pages/Educator/Educator.jsx'
import Dashboard from './Pages/Educator/Dashboard.jsx'
import AddCourse from './Pages/Educator/AddCourse.jsx'
import MyCourses from './Pages/Educator/MyCourses.jsx'
import StudentsEnrolled from './Pages/Educator/StudentsEnrolled.jsx'
import Navigation from './Components/Student/Navigation.jsx'

const App = () => {
  return (
   <div className='bg-white text-default min-h-screen'>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<Myenrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
          </Route>
      </Routes>

   </div>
  )
}

export default App
