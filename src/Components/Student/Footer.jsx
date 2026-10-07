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

        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3>Subscribe to our Newsletter</h3>
          <p>Stay updated with our latest courses and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        </div>
        
        
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>


      </footer>
    
  )
}

export default Footer