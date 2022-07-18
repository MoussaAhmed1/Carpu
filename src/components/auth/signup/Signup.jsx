import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import signupImg from "pf +"add-friend.png"
import axios from 'axios';

export default function Signup() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({
      email: "",
      password: "",
      username:"",
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
    let history = useHistory();
    const onSubmit = (event) =>{
      event.preventDefault()
      
      const registered = user
       axios.post("http://localhost:5000/api/signup", registered)
       .then( ({data}) => {
       const {msg} = data;
        console.log(data)
        console.log(msg)
        // if (data=="Successfully Authenticated") {
        if (msg) {
          history.push("/profile/:id") 
    }
      else
      throw new Error("user Exist");
      
      
    }).catch(err => console.log("user Exist"));
  }
  return (
    <React.Fragment>
       <div className="Login rightSide col-md-6 bg-light">
          <div className="circle d-md-block d-sm-none">
          <div className="innerCircle">
            <img src={pf+ "car.png"} alt="yellowCar" className="yellowCar icon" />
            <img src={pf+ "google-maps.png"} alt="googleMap" className="googleMap icon" />
          </div>
          </div>
         
            
        </div>
    <div className="form login justify-content-center align-items-center mt-5 " >
      <div className="text-center userprofile d-flex justify-content-center d-sm-none d-md-block">
        <img src={pf +"add-friend.png"} alt="" className="img-fluid" />
      </div>
      <h2 className="fw-bold display-6 text-center my-2">Sign Up</h2>
      <form onSubmit={(e)=>onSubmit(e)}>
      <label htmlFor="FullName">Full Name</label>
        <div className="input-group mb-3">
         
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            aria-label="username"
            aria-describedby="username"
            onChange={(e) => handelInput(e)}
            value={user.username}
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
        <p className="lead ">Already have an account? <Link to="/Login">Login</Link>
              </p>
        </div>
      </form>
    </div>
    </React.Fragment>
  )
}