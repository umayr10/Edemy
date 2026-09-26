import React from 'react'
import logo from '../assets/logo.svg'

const Navigation = () => {
  return (
    <>
        <div className='flex justify-between flex-wrap items-center  sm: p-4'>
            
            <img src={logo} alt="logo" />
            
            <div className='flex justify-between items-center gap-4 '>
                <ul className='hidden sm:flex sm:justify-between sm:items-center gap-3'>
                
                    <li>Add Courses</li>
                    <span>|</span>
                    <li>Login</li>
                
                </ul>

                <button className='bg-blue-500 rounded-4xl text-white py-2 px-4 hover:bg-blue-600'>Create Account</button>
            </div>

        </div>
        <hr className='w-full'/>
    </>
  )
}

export default Navigation