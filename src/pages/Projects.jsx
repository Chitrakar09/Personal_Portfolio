import React from 'react'
import { Footer } from '@/components'

function Projects() {
  return (
    <div id='projectsPageContainer' className='w-full h-full flex flex-col justify-between'>
      <div id="projectsContainer" className='w-full h-full flex flex-col items-center p-10'>
        <div id="heading">
          <h1 className='text-text-light'>
            Projects
          </h1>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects