import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <div id='header' className='min-w-full flex flex-col md:flex-row justify-center md:justify-center items-center gap-5'>
            <div id="intro" className='flex gap-3 w-full justify-start items-center md:justify-start'>
                <div id="logo" className='bg-linear-[90deg,#FFD54A_0%,#0A2540_100%] font-bold text-4xl min-h-14 min-w-14 max-w-15 max-h-15 flex justify-center items-center rounded-2xl'>P</div>
                <div id="description" className='flex flex-col justify-center items-start'>
                    <div id="name" className='font-bold text-primary-golden text-[1.15rem] ms:text-xl ls:text-2xl'>Pratyush Chitrakar</div>
                    <div id="title" className='font-bold text-text-muted text-[0.7rem] ls:text-sm'>Web Developer | CSIT Student</div>
                </div>
            </div>

            <nav className='w-full text-text-muted text-[1rem] flex justify-between md:justify-end md:gap-10 items-center px-1'>
                <NavLink className={({isActive})=>isActive?"text-text-light":null}>About</NavLink>
                <NavLink className={({isActive})=>isActive?"text-text-light":null}>Projects</NavLink>
                <NavLink className={({isActive})=>isActive?"text-text-light":null}>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Header