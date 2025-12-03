import React from 'react'
import { AboutSection, Career,Footer } from '@/components'
import { useSelector } from 'react-redux'
import { Projects } from '.';

function About() {
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated);
  return (
    <div 

    id='aboutPage' className='w-full flex flex-col justify-between gap-10 smLaptop:gap-20'>
      <AboutSection/>  
      {hasAnimated&&<Career/>}
      {hasAnimated&&<Footer/>}
      </div>
  )
}

export default About
