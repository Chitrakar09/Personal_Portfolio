import React from 'react'
import { Header } from '@/components'
import { Outlet } from 'react-router'

function MainPage() {
  return (
    <div id='mainContainer' className='h-full flex flex-col justify-start'>
      <Header />
      <Outlet />
    </div>

  )
}

export default MainPage