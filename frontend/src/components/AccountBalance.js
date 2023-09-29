import React, { useState } from "react";

const AccountBalance = () => {
  const [balance, setBalace] = useState("");

  //backend code
  const showBalance = (text) => {
    setBalace(text);
  };

  return (
    <div className="container flex-col items-center justify-center mx-auto mt-8 text-center">
      <h2>Account balance</h2>
      <div className="space-x-4 fle">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => showBalance("Money")}
        >
          Money
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          onClick={() => showBalance("Mobile Data")}
        >
          Mobile Data
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
          onClick={() => showBalance("Voice")}
        >
          Voice
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
          onClick={() => showBalance("SMS")}
        >
          SMS
        </button>
      </div>
      <div className="text-xl font-semibold m-4 shadow-xl h-[50px] w-[400px] rounded-lg">
        <p className="pt-2">{balance}</p>
      </div>
    </div>
  );
};

export default AccountBalance;
