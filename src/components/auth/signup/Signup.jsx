import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import signupImg from "../../assets/add-friend.png"
export default function Signup() {
  const [user, setUser] = useState({
      email: "",
      password: "",
      fullName:"",
      phone:"",
      male:true,
      dateOfBirth:new Date(),
      
    });
    const [err, setErr] = useState({});
    let handelInput = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
  return (
    <React.Fragment>
    <div className="form login justify-content-center align-items-center mt-5 " >
      <div className="text-center userprofile d-flex justify-content-center d-sm-none d-md-block">
        <img src={signupImg} alt="" className="img-fluid" />
      </div>
      <h2 className="fw-bold display-6 text-center my-2">Sign Up</h2>
      <form>
      <label htmlFor="FullName">Full Name</label>
        <div className="input-group mb-3">
         
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            aria-label="FullName"
            aria-describedby="FullName"
            onChange={(e) => handelInput(e)}
            value={user.fullName}
            autoComplete="false"
          />
           <span className="input-group-text lead" id="FullName">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          </span>
        </div>

        <label htmlFor="Email">Email</label>
        <div className="input-group mb-3">
         
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="Email"
            onChange={(e) => handelInput(e)}
            value={user.email}
          />
           <span className="input-group-text border-r-light lead" id="Email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>
        </div>

        <label htmlFor="password">Password</label>
        <div className="input-group mb-3">
         
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon2"
            onChange={(e) => handelInput(e)}
            value={user.password}
          />
           <span className="input-group-text" id="password">
            <i className="fa fa-key mx-1"></i>
          </span>
        </div>
        <div className="text-center justify-content-center">
          <button
            className="btn rounded-pill btn-md login-btn"
            type="submit"
          >
            <span className="text-light lead my-4">Sign up</span> 
           
          </button>
        <p className="lead ">Already have an account? <Link to="/authLayout/Login">Login</Link>
              </p>
        </div>
      </form>
    </div>
    </React.Fragment>
  )
}
