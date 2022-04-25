import React from "react";
import { useState } from "react";
import "./Login.css";
import userImg from "../../assets/man.png";
import { Link } from 'react-router-dom';
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      <div className="form login justify-content-center align-items-center mt-5">
        <div className="text-center userprofile d-flex justify-content-center d-xs-none d-md-block">
          <img src={userImg} alt="" className="img-fluid" />
        </div>
        <h2 className="fw-bold display-6 text-center my-2">Log in</h2>
        <form>
          <label htmlFor="password">Email</label>
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
             <span className="input-group-text  lead" id="Email">
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
            <span className="text-light lead my-4">Log in</span>  
            </button>
          <p className="lead "> Not a member yet? <Link to="/authLayout/Sign-up">Join</Link></p>
          </div>
        </form>
      </div>
      </React.Fragment>
  );
}
