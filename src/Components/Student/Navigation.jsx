import React from 'react'
import { assets } from '../../assets/assets.js'
import { Link, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navigation = () => {

  const location = useLocation()

  const isCourseListPage = location.pathname.includes('/course-list')

  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
      }`}
    >

      <img
        src={assets.logo}
        className="w-28 lg:w-32 cursor-pointer"
        alt="Edemy Logo"
      />
        
        {/* Desktop Navigation */}

      <div className="hidden lg:flex items-center gap-5 text-gray-500">

        <div>
          <button>Become an Educator</button>
          {' | '}
          <Link
            to="/my-enrollments"
            className="text-blue-500"
          >
            My Enrollments
          </Link>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>

      </div>

      {/* Mobile Navigation */}

      <div className="lg:hidden flex items-center gap-2 sm:gap-5 text-gray-500">

        <div>
          <button>Become an Educator</button>
          | <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        <button className=' text-white'><img src={assets.user_icon} alt="User" /></button>

      </div>

    </div>
  )
}

export default Navigation


/* import React from 'react'
import assets from '../../assets/assets.js'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  return (
    <div className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img src={assets.logo} className='w-28 lg:w-32 cursor-pointer' alt="Edemy Logo" />

      <div className="hidden lg:flex items-center gap-5 text-gray-500">

        <div>
          <button>Become an Educator</button> | <Link to="/my-enrollments" className='text-blue-500'>My Enrollments</Link>
        </div>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>

      </div>

    </div>
  )
}

export default Navigation */