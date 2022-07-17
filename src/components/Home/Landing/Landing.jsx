import React from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <React.Fragment>
      {/* <!-- start landing--> */}
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center  align-items-center">
              <div className="text-content">
                <h1 className="text-left text-uppercase p-2 w-100 display-5 fw-bold">
                  CarPool app For Better Commute
                </h1>
                <h5 className="text-left  p-2 w-100 lead ">
                  CarPool to Home office with your friends , coworks ,
                  neighbours , to make your daily commute simple fun and more
                  rewarding{" "}
                </h5>
                <div className="buttons">
                  <Link to="/CreateRides" className="btn btn-lg btn-success mx-2">offer a ride</Link>
                  <Link to="/FindRides" className="btn btn-lg btn-outline-success mx-2 color-light "><span className="">find a ride</span></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <div className="image position-relative w-100">
                <img
                  className="below img-fluid position-relative  "
                  src={pf + "Home/blob.svg"}
                  alt=""
                />
                <img
                  className="over img-fluid mx-auto d-block position-absolute top-50 start-50 translate-middle"
                  src={pf + "Home/pngegg.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <a href="#Features" className="go-dwon">
            <i className="fas fa-angle-double-down fa-2x"></i>
          </a> */}
        </div>
      </div>
      {/* <!-- end landing-->*/}
    </React.Fragment>
  );
};

export default Landing;
