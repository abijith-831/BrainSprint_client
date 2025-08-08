'use client';

import Explore from '@/Components/Sections/Explore';
import ThemeToggle from '@/utils/ThemeToggle';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { logout } from '@/redux/auth/authSlice';
import React, { useState } from 'react';
import Product from '@/Components/Sections/Product';
import Developers from '@/Components/Sections/Developers';
import Companies from '@/Components/Sections/Companies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import Modal from '../ui/Modal';

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state
    localStorage.removeItem('persist:root'); // Optional: clear persisted store
  };

  const confirmLogout = () => {
    handleLogout();
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/images/bg-main-white.jpg')] dark:bg-[url('/images/bg-main-dark.jpg')]">
      <nav className="flex justify-between items-center px-48 py-4">
        <div className="text-2xl font-bold">BrainSprint</div>
        <ul className="flex gap-4 items-center">
          <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
            <ScrollLink to="explore" smooth duration={500} offset={-70}>
              Explore
            </ScrollLink>
          </li>
          <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
            <ScrollLink to="product" smooth duration={500} offset={-70}>
              Product
            </ScrollLink>
          </li>
          <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
            <Link href="/developer">Developer</Link>
          </li>

          {user ? (
            <>
              <li className="px-4 py-2 font-semibold">Hi, {user.username}</li>
              <li
                className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
                onClick={() => setShowModal(true)}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <li className='px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black'>
                <Link href="/auth/login">Login</Link>
              </li>

            </>
          )}

          <li className="px-4 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white hover:font-semibold transition-all">
            <Link href="/premium">Premium</Link>
          </li>
          <ThemeToggle />
        </ul>
      </nav>

      {/* Modal */}
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

      <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl">
          Sharpen Your Coding Skills
        </h1>
        <p className="text-xl mt-4 drop-shadow-md max-w-2xl">
          Practice real-world coding problems and prepare for interviews with our interactive platform.
        </p>
        
        <button onClick={()=>router.push('/problems')} className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-white hover:text-black hover:border hover:border-black transition">
          {user ? 'Explore':'Create Account'}  
        </button>
      </div>

      <div id="explore">
        <Explore />
        <Product />
        <Developers />
        <Companies />
      </div>
    </div>
  );
};

export default HomePage;
