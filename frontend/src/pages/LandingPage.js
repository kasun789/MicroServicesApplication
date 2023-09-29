import React from 'react'
import SideBar from '../components/SideBar'
import AccountBalance from '../components/AccountBalance';
import CurrentPackage from '../components/CurrentPackage';
import Packages from '../components/Packages';

const LandingPage = () => {
  return (
    <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          <AccountBalance />
          <CurrentPackage />
          <Packages />
        </div>
    </div>
  );
}

export default LandingPage
