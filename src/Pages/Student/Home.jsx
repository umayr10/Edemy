import React from 'react'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'

const Home = () => {
  return (
    <div>
      <Hero className="min-h-screen"/>
      <Companies />
    </div>
  )
}

export default Home