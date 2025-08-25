'use client';
import ThemeToggle from '@/utils/ThemeToggle';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import Modal from '../ui/Modal';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('persist:root');
    router.push('/auth/login');
  };

  const confirmLogout = () => {
    handleLogout();
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-12 py-3 bg-gray-200 border border-b-black dark:border-b-gray-600 dark:bg-neutral-800">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        BrainSprint
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 items-center">
        <li className="nav-link  bg-gray-300 px-5 py-1 rounded-2xl hover:bg-gray-400 ">
          <Link href="/problems">Problems</Link>
        </li>
        <li className="nav-link bg-gray-300 px-5 py-1  rounded-2xl   hover:bg-gray-400">
          <Link href="/contest">Contest</Link>
        </li>
        <li className="nav-link  bg-gray-300 px-5 py-1  rounded-2xl  hover:bg-gray-400 ">
          <Link href="/discuss">Discuss</Link>
        </li>
        <li className="nav-link  bg-gray-300 px-5 py-1  rounded-2xl   hover:bg-gray-400">
          <Link href="/interview">Interview</Link>
        </li>
        <li className="nav-link  bg-gray-300 px-5 py-1  rounded-2xl  hover:bg-gray-400 ">
          <Link href="/store">Store</Link>
        </li>
        {!currentUser ? (
          <li className="nav-link  bg-gray-300 px-3 py-1  rounded-2xl   hover:bg-gray-400">
            <Link href="/auth/login">Login/Signup</Link>
          </li>
        ) : (
          <li
            onClick={() => setShowModal(true)}
            className="px-4 py-2 cursor-pointer text-red-500"
          >
            Logout
          </li>
        )}
        <li className="px-4 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white hover:font-semibold transition-all">
          <Link href="/premium">Premium</Link>
        </li>
        <ThemeToggle />
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-200 dark:bg-neutral-800 shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-50">
          <Link href="/problems" onClick={() => setMenuOpen(false)}>Problems</Link>
          <Link href="/contest" onClick={() => setMenuOpen(false)}>Contest</Link>
          <Link href="/discuss" onClick={() => setMenuOpen(false)}>Discuss</Link>
          <Link href="/interview" onClick={() => setMenuOpen(false)}>Interview</Link>
          <Link href="/store" onClick={() => setMenuOpen(false)}>Store</Link>
          {!currentUser ? (
            <Link href="/auth/login" onClick={() => setMenuOpen(false)}>Login/Signup</Link>
          ) : (
            <span
              onClick={() => {
                setMenuOpen(false);
                setShowModal(true);
              }}
              className="text-red-500 cursor-pointer"
            >
              Logout
            </span>
          )}
          <Link
            href="/premium"
            className="px-4 py-2 bg-orange-400 rounded-md text-center hover:bg-orange-500 text-white font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Premium
          </Link>
          <ThemeToggle />
        </div>
      )}

      {/* Logout Modal */}
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
  );
};

// Tailwind helper class for nav links
const navLink = `px-4 py-2 cursor-pointer hover:bg-black hover:text-white hover:rounded-full hover:font-semibold transition-all dark:hover:bg-white dark:hover:text-black`;

export default Navbar;
