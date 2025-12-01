import React from 'react'
import { AboutSection, Career,Footer } from '@/components'
import { useSelector } from 'react-redux'

function About() {
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated);
  return (
    <div 

    id='aboutPage' className='w-full flex flex-col'>
      <AboutSection/>  
      {hasAnimated&&<Career/>}
      {hasAnimated&& <Footer />}
      </div>
  )
}

export default About
