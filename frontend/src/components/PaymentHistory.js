import React from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const payment = () => {
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
      <div className="ml-[280px] h-[200px] w-auto max-w-[60%] mr-5 shadow-lg p-4 rounded-lg mt-5">
        Payment history
      </div>
    </div>
  );
};

export default payment;
