import React from 'react'
import SideBar from '../components/SideBar'
import AccountBalance from '../components/AccountBalance';
import CurrentPackage from '../components/CurrentPackage';

const LandingPage = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="grid-flow-row grid-cols-1">
        <div>
          <AccountBalance />
        </div>
        <div>
          <CurrentPackage />
        </div>
      </div>
    </div>
  );
}

export default LandingPage
