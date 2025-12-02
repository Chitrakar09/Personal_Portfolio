import React from 'react'
import { Footer } from '@/components'
import projects from '@/features/projectsDatabase'

function Projects() {
  return (
    <div id='pageContainer' className='w-full h-full flex flex-col justify-between'>
      <div id="contentContainer"className='w-full h-full p-5'>
        <div id="intro" className='flex flex-col gap-3'>
        <p className='text-center text-text-muted text-sm tablet:text-lg font-bold'>Each project taught me something new. Every line of code, no matter how messy, became part of the story that shaped how I build today.</p>
        </div>
        <div id="projectContainer" className='w-full'>
      
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects