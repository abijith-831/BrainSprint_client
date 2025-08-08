'use client';
import React from 'react'
import TagMultiSelectPage from '../ui/multiselector2';


const Filter:React.FC = () => {
  return (
    <div className='flex md:flex-row items-center justify-between'>
        <div className='flex items-center gap-3 px-4'>
            <input type="text" placeholder='Search Question...' className='px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'/>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Filter
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Sort
            </button>
        </div>
        <div className='px-2'>
            <TagMultiSelectPage/>
        </div>
    </div>
  )
}

export default Filter
