import React from 'react'
import { AboutSection, Career,FeaturedProject,Footer, } from '@/components'
import { useSelector } from 'react-redux'

function About() {
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated);
  return (
    <div 

    id='aboutPage' className='w-full flex flex-col justify-between gap-10 smLaptop:gap-30'>
      <AboutSection/>  
      {hasAnimated&&<Career/>}
      {hasAnimated&&<FeaturedProject/>}
      {hasAnimated&&<Footer/>}
      </div>
  )
}

export default About
