import React from "react";
import './authLayout.css'
// import yellowCar from "pf+ "car.png";
// import googleMap from  "pf+ "google-maps.png";
// import dots from "pf+ "dots.png"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from './login/Login';
import Signup from './signup/Signup';


const AuhtLayout = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  // let history = useHistory();
  let location = useLocation();
  // console.log(history);
  console.log(location.pathname);
  
  return (
    <Router>
      <section className="authSection">
        <div className="row justify-content-center">
          <div className="auth-background bg-light col-md-6 bg-info ">
            {/* <div className="shape  shape1"></div> */}
            {/* <div className="shape shape2"></div> */}
            <div className="auth">
              <img src={pf+ "dots.png"} alt=" dots" className="dots"/>
              <div className="overlay d-flex justify-content-center align-items-end">
              {/* <h1 className="display-5 text-center p-3 lead text-light fw-bold ">the best place to find people going to your distiny</h1> */}
              <h1 className="display-5 text-center p-3 lead text-light fw-bold ">the best place to connecting people in the same direction</h1>
              </div>
            </div>
          </div>
          {/* rightside */}
          <div className="Login rightSide col-md-6 bg-light">
          <div className="circle d-md-block d-sm-none">
          <div className="innerCircle">
            <img src={pf+ "car.png"} alt="yellowCar" className="yellowCar icon" />
            <img src={pf+ "google-maps.png"} alt="googleMap" className="googleMap icon" />
          </div>
          </div>
          {/* <div className="header my-3">
        <div className="row">
          <div className="col">
            <h2 className="display-6">CARPU</h2>
          </div>
          <div className="col text-end">    
          </div>
        </div>
      </div> */}
            <Switch>
              <Route path="/authLayout/Login" exact component={Login} />
              <Route path="/authLayout/Sign-up" exact component={Signup} />
            </Switch>
          </div>
        </div>
      </section>
    </Router>
  );
}
 
export default AuhtLayout;

  

