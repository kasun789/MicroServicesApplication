import React,{useState} from 'react'

function Profile() {



    return (

        <div>
              <div className='SignUpForm1'>
     
                 <div className='innerContainer'>
     
                     <form>
                     <h3>Profile</h3>
                     <div className="mb-3">
                     <label>Name</label>
                     <input
                         type="text"
                         className="form-control"
                         placeholder="First name"
                     />
                     </div>
                     <div className="mb-3">
                     <label>NIC</label>
                     <input type="text" className="form-control" placeholder="Last name" />
                     </div>
                     <div className="mb-3">
                     <label>Phone No</label>
                     <input
                         type="email"
                         className="form-control"
                         placeholder="Enter email"
                     />
                     </div>
                     <div className="mb-3">
                     <label>Email address</label>
                     <input
                         type="email"
                         className="form-control"
                         placeholder="Enter email"
                     />
                     </div>
                     <div className="mb-3">
                     <label>Password</label>
                     <input
                         type="password"
                         className="form-control"
                         placeholder="Enter password"
                     />
                     </div>
                 </form>
     
             </div>
     
           </div>                 
        
        </div>
     
       )
}

export default Profile