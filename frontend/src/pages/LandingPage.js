import React from 'react'
import SideBar from '../components/SideBar';
import CurrentPackage from '../components/CurrentPackage';

const LandingPage = () => {
  return (
    <div className='flex flex-row'>
      <SideBar/>
      <CurrentPackage/>
    </div>
  )
}

export default LandingPage
