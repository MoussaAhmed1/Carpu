import "./Features.css"
import Blob1 from "../../assets/Home/blob (1).svg";
import Blob2 from "../../assets/Home/blob (2).svg";
import Blob3 from "../../assets/Home/blob (3).svg";
import React, { Component } from 'react';

const Features = () => {
  return (
    <React.Fragment>
      {/* <!-- start features--> */}
      <div className="features  " id="Features">
        <div className="container">
          <div className="special-heading position-relative ms-auto me-auto mb-5">
            {/* <h3 className="text-center text-uppercase p-1 m-0 ">Features </h3> */}
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 ">
              <div className="feature-content position-relative ">
                <img
                  className=" position-relative img-fluid  "
                  src={Blob1}
                  alt=""
                />
                <i className="fas fa-desktop fa-5x position-absolute top-50 start-50 translate-middle "></i>
              </div>
              <div className="text">
                <h4 className="text-capitalize text-center mb-4">
                  save time and money
                </h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima nobis libero provident praesentium aspe
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 ">
              <div className="feature-content position-relative">
                <img
                  className="position-relative img-fluid"
                  src={Blob2}
                  alt=""
                />
                <i className=" fas fa-trophy fa-5x position-absolute top-50 start-50 translate-middle "></i>
              </div>
              <div className="text">
                <h4 className="text-capitalize text-center mb-4">
                  earn more rewards
                </h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima nobis libero provident praesentium aspe
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 ">
              <div className="feature-content position-relative">
                <img
                  className="position-relative img-fluid"
                  src={Blob3}
                  alt=""
                />
                <i className=" fas fa-globe-asia fa-5x position-absolute top-50 start-50 translate-middle"></i>
              </div>
              <div className="text">
                <h4 className="text-capitalize text-center mb-4">
                  meet more people
                </h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima nobis libero provident praesentium aspe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end features--> */}
    </React.Fragment>
  );
};

export default Features;
