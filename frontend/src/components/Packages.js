import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Packages() {
    const [packages, setPackages] = useState([
        {
          id: 1,
          name: 'Package 1',
          price: '$10',
          period: '1 month',
          details: 'Includes unlimited calls and 10GB data',
        },
        {
          id: 2,
          name: 'Package 2',
          price: '$20',
          period: '3 months',
          details: 'Includes unlimited calls and 20GB data',
        },
        {
          id: 3,
          name: 'Package 3',
          price: '$30',
          period: '6 months',
          details: 'Includes unlimited calls and 30GB data',
        },
      ]);
  const [expandedPackage, setExpandedPackage] = useState(null);

//   useEffect(() => {
//     // Make an Axios GET request to fetch package details from the backend URL
//     axios.get('http://127.0.0.1:8000/packages')
//       .then((response) => {
//         // Set the fetched package data to the state
//         setPackages(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching packages:', error);
//       });
//   }, []); // Empty dependency array to run the effect only once when the component mounts

    const handleActivatePackage = () => {
        console.log('Activate Package');
    };


  const togglePackageDetails = (packageId) => {
    if (expandedPackage === packageId) {
      setExpandedPackage(null);
    } else {
      setExpandedPackage(packageId);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-100 ">
        <div className="flex flex-col items-center justify-center w-[60%] h-1/2 bg-white rounded-lg shadow-lg mt-3 mb-3">
            <div className="p-5 space-y-5">
                <h1 className="text-2xl font-bold text-black-500 flex-//#region ">Packages</h1>
                <table className='w-full border-collapse text-base font-bold text-black-500 '>
                    <thead className='font-black text-lg'>
                    <tr>
                        <th className='w-[400px] py-2'>Package Name</th>
                        <th className='w-[400px]'>Package Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {packages.map((packageItem,index) => (
                        <React.Fragment key={packageItem.id}>
                        <tr onClick={() => togglePackageDetails(packageItem.id)} className={index % 2 === 0 ? 'bg-blue-gray-100 cursor-pointer pt-4 pb-4 m-2' : 'bg-white cursor-pointer pt-4 pb-4 m-2'} >
                            <td>{packageItem.name}</td>
                            <td>{packageItem.price}</td>
                        </tr>
                        {expandedPackage === packageItem.id && (
                            <tr>
                            <td colSpan="2">
                                <p>Time Period: {packageItem.period}</p>
                                <p>Details: {packageItem.details}</p>
                                <button className="px-4 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleActivatePackage}>Activate Package</button>
                            </td>
                            </tr>
                        )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default Packages;
