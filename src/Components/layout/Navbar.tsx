'use client';
import ThemeToggle from '@/utils/ThemeToggle'
import Link from 'next/link'
import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const Navbar:React.FC = () => {

  const currentUser = useSelector((state:RootState)=>state.auth.currentUser)
  console.log('navbar',currentUser);
  
  return (
    <div className='flex items-center justify-between px-12 py-4 bg-gray-200 border border-b-black dark:border-b-gray-600 dark:bg-gray-950'>
      <div>
        <Link href='/' className='px-4 py-2 text-xl font-bold cursor-pointer'>BrainSprint</Link>
      </div>
      <div>
        <ul className="flex gap-4">
            
            <li className="px-4 py-2  cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                <Link href="/developer">Explore</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                <Link href="/problems">Problems</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                <Link href="/contest">Contest</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                <Link href="/discuss">Discuss</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                <Link href="/interview">Interview</Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                <Link href="/store">Store</Link>
            </li>
            {!currentUser && (
                <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                  <Link href="/auth/login">Login/Signup</Link>
                </li>
              )}
            <li className="px-4 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white hover:font-semibold transition-all">
                <Link href="/premium">Premium</Link>
            </li>
            <ThemeToggle />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
