import React, { useState } from 'react';

function CurrentPackage() {
  const [packageDetails, setPackageDetails] = useState({
    id: '004322',
    name: 'Dialog 4G Home Broadband 50GB',
    data: '50GB Day Time + 50GB Night Time',
    voice: 'Unlimited',
    price: '1490',
    duration: '30 Days',
    description: 'Dialog 4G Home Broadband 50GB Day Time + 50GB Night Time',
  });

  const handleDeactivatePackage = () => {
    console.log('Deactivate Package');
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-100 ">
      <div className="flex flex-col items-center justify-center w-[60%] h-1/2 bg-white rounded-lg shadow-lg mt-3 mb-3">
        <div className="p-5 space-y-5">
          <h1 className="text-2xl font-bold text-black-500">Current Package</h1>
          <div className="space-y-2">
            <div className="flex justify-start items-center space-x-5">
                <div className="flex items-center space-x-5 py-1 min-w-[200px]">
                    <span className="text-base font-bold text-black-500">Package Name:</span>
                </div>
                <label className="font-medium py-1">{packageDetails.name}</label>
            </div>
            <div className="flex justify-start items-center space-x-5">
                <div className="flex items-center space-x-5 py-1 min-w-[200px]">
                    <span className="text-base font-bold text-black-500">Package Duration:</span>
                </div>
                <label className="font-medium py-1">{packageDetails.duration}</label>
            </div>
            <div className="flex justify-start items-center space-x-5">
                <div className="flex items-center space-x-5 py-1 min-w-[200px]">
                    <span className="text-base font-bold text-black-500">Data :</span>
                </div>
                <label className="font-medium py-1">{packageDetails.data}</label>
            </div>
            <div className="flex justify-start items-center space-x-5">
                <div className="flex items-center space-x-5 py-1 min-w-[200px]">
                    <span className="text-base font-bold text-black-500">Voice:</span>
                </div>
                <label className="font-medium py-1">{packageDetails.voice}</label>
            </div>
            <div className="flex justify-start items-center space-x-5">
                <div className="flex items-center space-x-5 py-1 min-w-[200px]">
                    <span className="text-base font-bold text-black-500">Package Description:</span>
                </div>
                <label className="font-medium py-1">{packageDetails.description}</label>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <button
              className="px-4 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={handleDeactivatePackage}
            >
              Deactivate Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentPackage;
