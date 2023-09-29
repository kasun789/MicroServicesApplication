import React from 'react'
import SideBar from '../components/SideBar'
import AccountBalance from '../components/AccountBalance';
import CurrentPackage from '../components/CurrentPackage';

const LandingPage = () => {
  return (
    <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          <AccountBalance />
          <CurrentPackage />
        </div>
    </div>
  );
}

export default LandingPage
