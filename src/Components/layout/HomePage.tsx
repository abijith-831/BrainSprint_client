'use client';

import Explore from '@/Components/Sections/Explore';
import ThemeToggle from '@/utils/ThemeToggle';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { logout } from '@/redux/slices/authSlice';
import React, { useState } from 'react';
import Product from '@/Components/Sections/Product';
import Developers from '@/Components/Sections/Developers';
import Companies from '@/Components/Sections/Companies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import Modal from '../ui/Modal';
import { Menu, X } from 'lucide-react';

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('persist:root');
  };

  const confirmLogout = () => {
    handleLogout();
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/images/bg-main-white.jpg')] dark:bg-[url('/images/bg-main-dark.jpg')]">
      {/* Navbar */}
{/* Navbar */}
<nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-4">
  <div className="text-2xl font-bold">BrainSprint</div>

  {/* Desktop Menu (only on lg and above) */}
  <ul className="hidden lg:flex gap-4 items-center">
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
          className="px-4 py-2 text-red-500 rounded-md cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Logout
        </li>
      </>
    ) : (
      <li className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black">
        <Link href="/auth/login">Login</Link>
      </li>
    )}

    <li className="px-4 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white hover:font-semibold transition-all">
      <Link href="/premium">Premium</Link>
    </li>
    <ThemeToggle />
  </ul>

  {/* Mobile Menu Button (visible until lg) */}
  <button
    className="lg:hidden p-2"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</nav>


      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white dark:bg-black shadow-lg">
          <ScrollLink
            to="explore"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Explore
          </ScrollLink>
          <ScrollLink
            to="product"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Product
          </ScrollLink>
          <Link href="/developer" onClick={() => setMenuOpen(false)}>
            Developer
          </Link>

          {user ? (
            <>
              <span className="font-semibold">Hi, {user.username}</span>
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  setShowModal(true);
                }}
              >
                Logout
              </span>
            </>
          ) : (
            <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}

          <Link
            href="/premium"
            className="px-4 py-2 bg-orange-400 rounded-md hover:bg-orange-500 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Premium
          </Link>
          <ThemeToggle />
        </div>
      )}

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

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-[70vh] sm:h-[80vh] text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-xl">
          Sharpen Your Coding Skills
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 drop-shadow-md max-w-2xl">
          Practice real-world coding problems and prepare for interviews with
          our interactive platform.
        </p>

        <button
          onClick={() => router.push('/problems')}
          className="mt-6 px-6 py-3 bg-black border border-transparent text-white font-semibold rounded-full hover:bg-white hover:text-black hover:border-black"
        >
          {user ? 'Explore' : 'Create Account'}
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
