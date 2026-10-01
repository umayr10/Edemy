import React from 'react'
import Sidebar from '../../Components/Educator/Sidebar'
import { assets} from '../../assets/assets.js'

const AddCourse = () => {
  return (
    <div className='flex gap-4'>
      <Sidebar />
      
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex flex-col gap-4 p-4'>
          <p>Course Title</p>
          <input className='border border-gray-300 rounded-md p-2 w-119' type="text" placeholder='Type here' />
      </div>
    
      <div className='flex flex-col gap-4 p-4'>
        <p>Course Heading</p>
        <input className='border border-gray-300 rounded-md p-2 w-119' type="text" placeholder='Type here' />
      </div>

      <div className='flex flex-col gap-4 p-4'>
        <p>Course Description</p>
        <input className='border border-gray-300 rounded-md px-2 pt-2 pb-16  w-119' type="text" placeholder='Type here' />
      </div>

      <div className='flex flex-col justify-center items-start text-center gap-4 p-4'>
        <div className=''>
          <p>Course Price</p>
        </div>
        <div className='flex justify-between items-center gap-8 text-center'>
          <input className='border border-gray-300 rounded-md p-2  w-34.75' type="text" placeholder='Type here' />
          <div className="flex justify-between items-center gap-4 text-center"> 
            <p>Course Thumbnail</p>
          <img className='w-9 h-9' src={assets.file_upload_icon} alt="Course Thumbnail" />
          </div>
        </div>
      </div> 

      </div>
    
    </div>
  )
}

export default AddCourse