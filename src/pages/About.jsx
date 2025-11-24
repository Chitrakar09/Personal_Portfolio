import React from 'react'
import { AboutSection, Career } from '@/components'
import { useSelector } from 'react-redux'

function About() {
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated);
  return (
    <div 

    id='aboutPage' className='w-full h-full flex flex-col'>
      <AboutSection/>  
      {hasAnimated&&<Career/>}
      </div>
  )
}

export default About
