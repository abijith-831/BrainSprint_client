import Explore from '@/Sections/Explore'
import ThemeToggle from '@/utils/ThemeToggle'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-cover bg-center  bg-[url('/images/bg-main-white.jpg')] dark:bg-[url('/images/bg-main-dark.jpg')] " >
      <nav className="flex justify-between items-center px-48 py-4">
        <div className="text-2xl font-bold">BrainSprint</div>
        <ul className="flex gap-4">
          {["Explore", "Product", "Developer", "Login", "Signup"].map((item) => (
            <li
              key={item}
              className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all"
            >
              {item}
            </li>
          ))}
          
          <li className="px-4 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white hover:font-semibold transition-all">
            Premium
          </li>
          <ThemeToggle/>
        </ul>
      </nav>


      {/* Banner Text */}
      <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl">Sharpen Your Coding Skills</h1>
        <p className="text-xl mt-4 drop-shadow-md max-w-2xl">
          Practice real-world coding problems and prepare for interviews with our interactive platform.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-white hover:text-black hover:border hover:border-black transition">
          Create Account
        </button>
        
      </div>  

      <Explore/>
      
    </div>
  )
}

export default page
