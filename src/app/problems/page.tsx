import Courses from '@/Components/layout/Courses'
import Navbar from '@/Components/layout/Navbar'
import React from 'react'

const problems = () => {
  return (
    <div className='min-h-screen bg-gray-200 dark:bg-gray-950'>
        <Navbar/>
        <div className='  mx-8 flex gap-4'>
            <div className='bg-grya-300 dark:bg-gray-900 w-3/4 rounded-md mt-4'>
                <Courses/>
            </div>
            <div className='bg-green-400 w-1/4'>
                <h1>sfdknsjk</h1>
            </div>
        </div>
    </div>
  )
}

export default problems
