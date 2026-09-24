import React from 'react'

const Navigation = () => {
  return (
    <div className='flex justify-between flex-wrap items-center sm: m-4'>
        
        <h1 className='text-2xl'><span className='text-purple-500 font-bold text-4xl'>E</span>demy</h1>
        
        <ul className='hidden sm:flex sm:justify-between sm:items-center gap-3'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        
        </ul>
    
    </div>
  )
}

export default Navigation