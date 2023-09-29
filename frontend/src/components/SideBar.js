import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

    const linkStyle = {
      textDecoration: "none", // Remove underlines
    };
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 no-underline bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <div className="flex-1 font-bold">
            <Link className="flex ml-[40px] mt-[10px]" style={linkStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 m-[5px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="m-1">Dashboard</span>
            </Link>
            <Link className="flex ml-[40px] mt-[10px]" style={linkStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-[5px] mt-1 mr-[5px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="m-1">Profile</span>
            </Link>

            <Link className="flex ml-[40px] mt-[10px]" style={linkStyle}>
              <svg
                xmlns=""
                className="w-8 h-8 mt-[2px] mr-[2px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M9 16h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zM9 12h6"
                />
              </svg>

              <span className="m-1">Bill & Payment</span>
            </Link>

            <Link className="flex ml-[40px] mt-[10px]" style={linkStyle}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 m-[4px] mr-[5px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                ></path>
              </svg>

              <span className="m-1">Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
