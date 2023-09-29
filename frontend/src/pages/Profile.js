import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import axios from 'axios';

function Profile() {
//   const [user, setUser] = useState(null);
  const [user, setUser] = useState({name: "John Doe", email: " dinesh@123", mobileNumber: "1234567890", address: "123, abc street, xyz city, 123456", password:"123456"});
  
  const [editPassword, setEditPassword] = useState(false);

  const handlePasswordChange = () => {
    console.log("Password change");
    setEditPassword(editPassword => !editPassword);
  }

  const handlePasswordChangeSubmit = () => {
    console.log("Password change submit");
    setEditPassword(editPassword => !editPassword);
  }

//   useEffect(() => {
//     // Use Axios to fetch user profile data from the URL
//     axios.get('http://127.0.0.1:8000/profile')
//       .then((response) => {
//         setUser(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching profile:', error);
//       });
//   }, []);


return (
  <div className="flex bg-sky-50">
    {user ? (
      <>
        <SideBar />
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Profile</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-bold min-w-[250px]">Name:</label>
              <div className="flex items-center">
                <input
                  className="px-2 py-1 border rounded-md"
                  value={user.name}
                />
                <button className="px-2 py-1 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" >
                  Edit
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="font-bold min-w-[250px]">Email:</label>
              <div className="flex items-center">
                <input
                  className="px-2 py-1 border rounded-md"
                  value={user.email}
                />
                <button className="px-2 py-1 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="font-bold min-w-[250px]">Mobile Number:</label>
              <div className="flex items-center">
                <input
                  className="px-2 py-1 border rounded-md"
                  value={user.mobileNumber}
                />
                <button className="px-2 py-1 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="font-bold min-w-[250px]">Address:</label>
              <div className="flex items-center">
                <input
                  className="px-2 py-1 border rounded-md"
                  value={user.address}
                />
                <button className="px-2 py-1 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  Edit
                </button>
              </div>
            </div>
            {editPassword ? (
              <>
                <div className="flex items-center space-x-4">
                  <label className="font-bold min-w-[250px]">Current Password:</label>
                  <div className="flex items-center">
                    <input
                      className="px-2 py-1 border rounded-md"
                      placeholder="Enter Current password"
                      type="password"
                      name="currentPassword"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="font-bold min-w-[250px]">Enter New Password:</label>
                  <div className="flex items-center">
                    <input
                      className="px-2 py-1 border rounded-md"
                      placeholder="Enter New password"
                      type="password"
                      name="newPassword"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="font-bold min-w-[250px]">Confirm New Password:</label>
                  <div className="flex items-center">
                    <input
                      className="px-2 py-1 border rounded-md"
                      placeholder="Confirm New password"
                      type="password"
                      name="confirmNewPassword"
                    />
                  </div>
                </div>
                <div className="flex items-end justify-end space-x-4">
                  <button className="px-2 py-1 mx-1 font-bold text-white bg-blue-500 rounded w-30 hover:bg-blue-700 " onClick={handlePasswordChangeSubmit}>Submit</button>    
                </div>              
              </>
            ):
            (
              <div className="flex items-center space-x-4">
                <label className="font-bold min-w-[250px]">Password:</label>
                <div className="flex items-center">
                  <input
                    className="px-2 py-1 border rounded-md"
                    value="********" // Display password as asterisks for security
                    type="password"
                  />
                  <button className="px-2 py-1 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handlePasswordChange}>
                    Change
                  </button>
                </div>
              </div>
            )
          }
          </div>
        </div>
      </>
    ) : (
      <p>Loading profile...</p>
    )}
  </div>
);

}

export default Profile;
