import React from 'react'
import { AboutSection, Career,FeaturedProject,Footer, Hobbies, } from '@/components'
import { useSelector } from 'react-redux'

function About() {
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated);
  return (
    <div 

    id='aboutPage' className='w-full flex flex-col justify-between gap-20 smLaptop:gap-30'>
     <div><AboutSection/></div>   
      {hasAnimated&&<Career/>}
      {hasAnimated&&<FeaturedProject/>}
      {hasAnimated&&<Hobbies/>}
      {hasAnimated&&<Footer/>}
      </div>
  )
}

export default About
