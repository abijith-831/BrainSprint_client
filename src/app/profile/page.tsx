import React from 'react'

const page = () => {
  return (
    <div className='flex p-4 gap-4'> 
      
      <div className='w-1/4 bg-red-400 rounded-md items-center justify-center text-center h-screen'>
            <h1>left</h1>
      </div>
      <div className='w-4/5 bg-blue-400 rounded-md flex flex-row justify-between p-4 gap-4'>
        <div className='bg-white h-30 w-1/2'> 
            <h1>1</h1>
        </div>
        <div className='bg-green-400 h-30 w-1/2'>
            <h1>2</h1>
        </div>
      </div>
    </div>
  )
}

export default page
