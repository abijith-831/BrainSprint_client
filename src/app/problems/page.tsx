import Courses from '@/Components/layout/Courses'
import Filter from '@/Components/layout/Filter'
import Navbar from '@/Components/layout/Navbar'
import React from 'react'


const problems = () => {
  

  return (
    <div className='min-h-screen bg-gray-200 dark:bg-gray-950'>
        <Navbar/>
        <div className='  mx-8 flex gap-4'>
            <div className=' w-3/4 rounded-md mt-2 '>
                <div className='my-auto bg-gray-300 dark:bg-gray-900 rounded-md '>
                  <Courses/>
                </div>
               
                <div className='bg-gray-300 dark:bg-gray-900  mt-2 rounded-md'>
                  <Filter/>
                </div>
            </div>
            <div className='bg-green-400 w-1/4 mt-2 rounded-md' >
                <h1>sfdknsjk</h1>
            </div>
        </div>
        
    </div>
  )
}

export default problems
