import React from 'react'
import { assets } from '../../assets/assets'
const Searchbar = () => {
  return (
        <form action="" className='flex items-center md:h-14 max-w-xl w-full h-12 border border-gray-500/20 rounded overflow-hidden'>
            <img src={assets.search_icon} alt="search icon" className='md:w-auto w-10 px-3 ' />
            <input type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80' />
            <button type='submit' className='bg-blue-600 text-white rounded hover:bg-blue-700 md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
        </form>
  )
}

export default Searchbar