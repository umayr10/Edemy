import React from 'react'
import { assets } from '../../assets/assets.js'
import { Link, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navigation = () => {

  const location = useLocation()

  const isCourseListPage = location.pathname.includes('/course-list')

  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-500 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
      }`}
    >

      {/* Logo */}

      <img
        src={assets.logo}
        className="w-24 sm:w-28 lg:w-32 cursor-pointer"
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

        {user ? (
          <UserButton />
        ) : (
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
            onClick={openSignIn}
          >
            Create Account
          </button>
        )}

      </div>

      {/* Mobile / Tablet Navigation */}

      <div className="flex lg:hidden items-center gap-3 sm:gap-5 text-gray-500 text-sm sm:text-base">

        <Link
          to="/my-enrollments"
          className="hidden sm:block text-blue-500"
        >
          My Enrollments
        </Link>

        <button className="hidden sm:block">
          Become an Educator
        </button>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-blue-600 text-white px-3 sm:px-5 py-2 rounded-full text-sm"
          >
            Sign In
          </button>
        )}

      </div>

    </div>
  )
}

export default Navigation