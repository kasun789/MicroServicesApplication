import React from 'react'
import Button from 'react-bootstrap/Button';
import '../assets/css/home.css'



export default function SignUp() {
  return (

   <div>

   
         <div className='SignUpForm1'>

            <div className='innerContainer'>

                <form>
                <h3>Sign Up</h3>
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
                <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
                </div>
                <p className="forgot-password text-right" id='gotoLogin'>
                Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>

        </div>

      </div>                 
   
   </div>
   


  )}