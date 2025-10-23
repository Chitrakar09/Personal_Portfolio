import React from 'react'

function Footer() {
  return (
    <div id="footer" className='w-full bg-background-dark rounded-[1.25rem] flex justify-between items-center text-text-light'>
      <div id="copyright" className='flex flex-col items-start justify-evenly w-full'>
        <span className='font-bold text-sm lg:text-lg'>Pratyush Chitrakar</span>
        <span className='text-[0.625rem] lg:text-[0.7rem] flex flex-wrap'>© 2025 • Designed & Developed by Pratyush Chitrakar</span>
      </div>
      <div id="follow" className='flex flex-col md:flex-row md:justify-end md:items-end items-end justify-center w-full md:gap-2'>
        <span className='text-[0.625rem] md:text-sm lg:text-lg font-bold'>Follow</span>
        <span className='text-[0.625rem] md:text-sm lg:text-lg hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out'><a href=''>Github</a></span>
        <span className='text-[0.625rem] md:text-sm lg:text-lg hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out'><a href=''>Linkedin</a></span>
        <span className='text-[0.625rem] md:text-sm lg:text-lg hover:text-accent-amber hover:-translate-y-0.5 transition ease-in-out'><a href=''>Instagram</a></span>
      </div>
    </div>
  )
}

export default Footer