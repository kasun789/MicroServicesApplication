import React from 'react'
import SideBar from '../components/SideBar'
import AccountBalance from '../components/AccountBalance';

const LandingPage = () => {
  return (
    <div className='flex'>
      <div>
        <SideBar />
      </div>
      <div>
        <AccountBalance />
      </div>
    </div>
  );
}

export default LandingPage
