import React from 'react'
import { assets } from '../../assets/assets.js'

const Companies = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4'>
      <p>Trusted by learners from</p>
      
      {/* Companies Section */}

      <div className='flex justify-center items-center gap-24 text-center'>
        <img src={assets.microsoft_logo} alt="Microsoft Logo" />
        <img src={assets.walmart_logo} alt="Walmart Logo" />
        <img src={assets.accenture_logo} alt="Accenture Logo" />
        <img src={assets.adobe_logo} alt="Adobe Logo" />
        <img src={assets.paypal_logo} alt="PayPal Logo" />
      </div>
    </div>
  )
}

export default Companies