import React from 'react'
import { Header } from '@/components'
import { Outlet } from 'react-router'

function MainPage() {
  return (
    <div id='mainContainer' className='w-full h-full flex flex-col justify-between items-center'>
      <Header />
      <Outlet />
    </div>

  )
}

export default MainPage