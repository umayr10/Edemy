import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
      <footer className="flex flex-col items-center justify-between gap-4 bg-[#111820] text-white w-full h-80 p-12">
        
        <div className=" w-full flex justify-between items-center gap-4 container mx-auto">
          <div className="flex flex-col ">
          <img className=" text-white w-32 h-32" src={assets.logo_dark} alt="Company Logo" />
          <p className='max-w-95 text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt, alias odit officia esse quae sint, quo ex accusantium, illum quaerat maiores quidem iure nobis!</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>
          <p>Stay updated with our latest courses and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input className='border border-gray-400 p-2' type="email" placeholder="Enter your email" />
            <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600' type="submit">Subscribe</button>
          </form>
        </div>
        </div>
        
        
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Edemy. All rights reserved.</p>
        </div>


      </footer>
    
  )
}

export default Footer