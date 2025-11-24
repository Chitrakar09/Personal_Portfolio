import React from 'react'
import Experience from './Experience'
import Education from './Education'

function Career() {
  return (
    <div id="careerContainer" className='w-full flex flex-col justify-evenly gap-20'>
      <Experience/>
      <Education/>
    </div>
  )
}

export default Career