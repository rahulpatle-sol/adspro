import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-300 py-6 px-4 mt-8'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between'>
        <p className='text-sm'>&copy; {new Date().getFullYear()} Light Up Ads. All rights reserved.</p>
        <div className='flex space-x-4 mt-2 md:mt-0'>
          <a href='/privacy' className='hover:text-white text-sm'>Privacy Policy</a>
          <a href='/terms' className='hover:text-white text-sm'>Terms of Service</a>
          <a href='/contact-us' className='hover:text-white text-sm'>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
