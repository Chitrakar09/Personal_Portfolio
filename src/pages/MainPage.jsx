import React from 'react'
import { Footer, Header } from '@/components'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux';

function MainPage() {
  const hasAnimated=useSelector((state)=>state.checkForAnimated.hasAnimated);
  return (
    <div id='mainContainer' className='w-full flex flex-col justify-between items-center'>
      <Header />
      <Outlet />
      {hasAnimated&& <Footer />}
    </div>

  )
}

export default MainPage