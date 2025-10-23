import React from 'react'
import ProfilePic from './ProfilePic'

function About_Tile() {
    return (
        <div id="container" className='bg-[linear-gradient(180deg,#0A2540_0%,#000000_100%)] min-w-full min-h-full p-5 rounded-3xl flex flex-col'>
            <div id="profile" className='w-full flex flex-col justify-center items-center bg-[#2c2c2c]/30 px-2.5 py-8 rounded-2xl'>
                <ProfilePic url='/profile_About.jpg' classname='min-h-20 min-w-20 rounded-2xl bg-center'/>
                <span className='text-text-light font-extrabold text-xl text-center'>Pratyush Chitrakar</span>
                <span className='text-text-muted text-[0.67rem] ms:text-[0.9rem] ls:text-[1rem] text-center'>Web Developer | UI/UX Enthusiast | CSIT Student</span>
            </div>
        </div>
    )
}

export default About_Tile