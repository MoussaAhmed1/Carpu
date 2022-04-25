import pngegg2 from "../../assets/Home/pngegg (2).png";
import pngegg1 from "../../assets/Home/blob.svg";
import React, { Component } from 'react'
const Landing = () => {
  return (
    <React.Fragment>
      {/* <!-- start landing--> */}
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center  align-items-center">
              <div className="text-content ">
                <h1 className="text-left text-uppercase p-2 w-100 display-5 fw-bold">
                  CarPool app For Better Commute
                </h1>
                <h5 className="text-left  p-2 w-100 lead ">
                  CarPool to Home office with your friends , coworks ,
                  neighbours , to make your daily commute simple fun and more
                  rewarding{" "}
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <div className="image position-relative w-100">
                <img
                  className="below img-fluid position-relative  "
                  src={pngegg1}
                  alt=""
                />
                <img
                  className="over img-fluid mx-auto d-block position-absolute top-50 start-50 translate-middle"
                  src={pngegg2}
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
