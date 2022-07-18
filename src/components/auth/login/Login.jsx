import React from "react";
import { useState,useContext } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
export default function Login() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState({});
  let handelInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  let history = useHistory();
const { isFetching, dispatch } = useContext(AuthContext);

const login = (e) => {
  e.preventDefault();
  loginCall(
     user ,
    dispatch
  );
};
  return (
    <React.Fragment>
      <div className="form login justify-content-center align-items-center mt-5">
        <div className="text-center userprofile d-flex justify-content-center d-xs-none d-md-block">
          <img src={pf +"man.png"} alt="" className="img-fluid" />
        </div>
        <h2 className="fw-bold display-6 text-center my-2">Log in</h2>
        <form onSubmit={(e)=>login(e)}>
          <label htmlFor="password">Email</label>
          <div className="input-group mb-3">
           
            <input
              type="email"
              name="username"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="Email"
              onChange={(e) => handelInput(e)}
              value={user.username}
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
          <p className="lead "> Not a member yet? <Link to="/Sign-up">Join</Link></p>
          </div>
        </form>
      </div>
      </React.Fragment>
  );
}
