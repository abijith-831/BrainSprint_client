import Courses from '@/Components/layout/Courses'
import Filter from '@/Components/layout/Filter'
import Navbar from '@/Components/layout/Navbar'
import ProblemSet from '@/Components/layout/ProblemSet'
import Calender from '@/Components/Sections/Calender'
import React from 'react'

const Problems = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950">
      <Navbar />
      <div className="mx-4 md:mx-8 flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="w-full md:w-3/4 rounded-md mt-2">
          <div className="my-auto bg-gray-300 dark:bg-neutral-800 rounded-md">
            <Courses />
          </div>
          <div className="bg-gray-300 dark:bg-neutral-800 mt-2 rounded-md">
            <Filter />
          </div>
          <div className="bg-gray-300 dark:bg-neutral-800 mt-2 rounded-md">
            <ProblemSet />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <Calender/>
        </div>
      </div>
    </div>
  )
}

export default Problems
