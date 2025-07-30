"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-zinc-500 text-white px-4 py-2'>
      <div className='flex justify-between items-center'>
        <Image
          src='/logo.jpg'
          width={80}
          height={40}
          alt='logo png'
          className='cursor-pointer'
          onClick={() => window.location.href = '/'}
        />
        <button
          className='md:hidden text-white focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className='hidden md:flex space-x-6 text-lg'>
          <li><Link href='/' className='hover:text-gray-300'>Home</Link></li>
          <li><Link href='/about' className='hover:text-gray-300'>About</Link></li>
          <li><Link href='/contact-us' className='hover:text-gray-300'>Contact-us</Link></li>
          <li><Link href='/Login' className='hover:text-gray-300'>Login</Link></li>
          <li><Link href='/Register' className='hover:text-gray-300'>Register</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col space-y-2 text-lg mt-2'>
          <li><Link href='/' className='hover:text-gray-300'>Home</Link></li>
          <li><Link href='/about' className='hover:text-gray-300'>About</Link></li>
          <li><Link href='/contact-us' className='hover:text-gray-300'>Contact-us</Link></li>
          <li><Link href='/login' className='hover:text-gray-300'>Login</Link></li>
          <li><Link href='/register' className='hover:text-gray-300'>Register</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar;
