"use client";

  import React from 'react'
  import { Button } from '../Components/ui/button'
  import { FaSun , FaMoon} from 'react-icons/fa'
  import { useTheme } from 'next-themes';

  const ThemeToggle = () => {
      const {theme , setTheme} = useTheme()
    return (
      <div>
          <Button variant="outline" size="icon" className='rounded-full border-2 border-black hover:transition-transform duration-300 hover:scale-110 dark:border-white' onClick={()=>setTheme(theme === 'light'?"dark":'light')}>
              <FaSun className='absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0'></FaSun>
              <FaMoon className='absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100'></FaMoon>
          </Button>
      </div>
    )
  }

  export default ThemeToggle
