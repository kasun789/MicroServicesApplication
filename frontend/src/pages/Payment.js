import React from 'react'
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import PaymentDetails from '../components/PaymentDetails';

function Payment() {
  return (
    <div>
      <SideBar />
      <div className="flex ml-[240px] pt-10 pl-10">
        <Link to="/payment">
          <button className="px-4 py-2 font-bold text-white bg-blue-400 hover:bg-blue-600">
            Payment
          </button>
        </Link>
        <Link to="/PaymentHistory">
          <button className="px-4 py-2 font-bold text-white bg-blue-800 hover:bg-blue-900">
            History
          </button>
        </Link>
      </div>
      <div className="ml-[280px] mt-5 w-auto max-w-[60%]">
        <PaymentDetails />
      </div>
    </div>
  );
}

export default Payment