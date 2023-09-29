import React from 'react'

const PaymentDetails = () => {
  return (
    <div>
      <div className='h-[200px] w-auto shadow-lg p-4 rounded-lg mb-5 mr-5'>
        Payment details
      </div>
      <button className="px-4 py-2 font-bold text-white bg-blue-400 hover:bg-blue-600 rounded-lg">
        Pay Now
      </button>
    </div>
  );
}

export default PaymentDetails
