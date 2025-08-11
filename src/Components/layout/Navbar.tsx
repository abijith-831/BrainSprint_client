'use client';
import ThemeToggle from '@/utils/ThemeToggle'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import Modal from '../ui/Modal';

const Navbar:React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector((state:RootState)=>state.auth.currentUser)
  console.log('navbar',currentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout()); 
    localStorage.removeItem('persist:root'); 
    router.push('/auth/login'); 
  };
  
  const confirmLogout = () => {
    handleLogout();
    setShowModal(false);
  };

  return (
    <div className='flex items-center justify-between px-12 py-3 bg-gray-200 border border-b-black dark:border-b-gray-600 dark:bg-neutral-800'>
      <div>
        <Link href='/' className='px-4 py-2 text-xl font-bold cursor-pointer'>BrainSprint</Link>
      </div>
      <div>
        <ul className="flex gap-4">
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
            {!currentUser ? (
                <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
                  <Link href="/auth/login">Login/Signup</Link>
                </li>
            ):
              <li onClick={() => setShowModal(true)} className="px-4 py-2 cursor-pointer    text-red-500">  Logout</li>
            }
            <li className="px-4 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white hover:font-semibold transition-all">
                <Link href="/premium">Premium</Link>
            </li>
            <ThemeToggle />
        </ul>
      </div>
      {showModal && (
        <Modal
          question="Are you sure?"
          description="Do you really want to log out? You will need to log in again."
          onConfirm={confirmLogout}
          onCancel={() => setShowModal(false)}
          confirmText="Yes, Logout"
          cancelText="Cancel"
        />
      )}

    </div>

  )
}

export default Navbar
