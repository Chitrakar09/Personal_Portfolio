import React from 'react'
import ProfilePic from '../components/ProfilePic'
import { Button } from '../components'
import { Link } from 'react-router'

function LandingPage() {
  return (
    <div id='container' className="max-h-full max-w-full min-h-full min-w-full flex justify-center items-center gap-10 px-10 flex-col lg:flex-row">
        <ProfilePic url='/profile_Landing.jpg' classname='min-w-52 min-h-52 lg:w-70 lg:h-70 animate-fade animate-duration-[2000ms] animate-ease-linear rounded-full bg-top'/>
        <div id='info' className="text-text-light text-center flex flex-col items-center justify-center gap-1 ">
            <p id='intro' className='font-extrabold text-3xl ls:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-0 animate-fade animate-duration-[2000ms] animate-delay-700 animate-ease-linear'>Hi, I am <span className='bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] bg-clip-text text-transparent'>Pratyush</span></p>

            <p id='title' className='font-bold text-[16px] ls:text-lg md:text-sm lg:text-xl text-text-muted m-0 animate-fade animate-duration-[2000ms] animate-delay-900 animate-ease-linear'>Web Developer | UI/UX Enthusiast | CSIT Student</p>
            <Link to="/realm/about"><Button text='Discover Me' className="text-lg md:text-2xl hidden lg:block mt-5 animate-fade animate-duration-[2000ms] animate-delay-1200 animate-ease-linear hover:bg-linear-[135deg,#00FFD1_0%,#FFD54A_100%] hover:-translate-y-1 transition-transform delay-100 ease-linear"/></Link>
        </div>
        <Link to="/realm/about"><Button text='Discover Me' className="text-lg md:text-2xl lg:hidden animate-fade animate-duration-[1500ms] animate-delay-1500 animate-ease-linear"/></Link>
    </div>
  )
}

export default LandingPage