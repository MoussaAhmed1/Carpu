import "./Features.css";
// import pf + "Home/blob (1).svg" from "pf + "Home/blob (1).svg";
// import Blob2 from "pf + "Home/blob (2).svg";
// import Blob3 from "pf + "Home/blob (3).svg";
import React, { Component } from "react";
const pf = process.env.REACT_APP_PUBLIC_FOLDER;
const Features = () => {
  return (
    <React.Fragment>
      {/* <!-- start features--> */}
      <div
        className="features  d-none d-md-block justfy-content-center   "
        id="Features"
      >
        <div className="container  d-flex justify-content-around ">
          <div className="special-heading position-relative ms-auto me-auto mb-5">
            {/* <h3 className="text-center text-uppercase p-1 m-0 ">Features </h3> */}
          </div>
          <div className="row  d-flex justify-content-around ">
            <div className="col-md-3 col-sm-12 feature box  ">
              <div className="feature-content position-relative ">
                <img
                  className=" position-relative img-fluid  "
                  src={pf + "Home/blob2.svg"}
                  alt=""
                />
                <i className="fas fa-hand-holding-dollar fa-5x position-absolute top-50 start-50 translate-middle "></i>
              </div>
              <div className="text">
                <h4 className="text-capitalize text-center mb-4">
                  save time and money
                </h4>
                <p className="text-center">
                  Save significantly on your commute cost and recover your car
                  ownership cost.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-12  feature box  ">
              <div className="feature-content position-relative">
                <img
                  className="position-relative img-fluid"
                  src={pf + "Home/blob3.svg"}
                  alt=""
                />
                <i className=" fas fa-solid fa-award fa-5x position-absolute top-50 start-50 translate-middle "></i>
              </div>
              <div className="text">
                <h4 className="text-capitalize text-center mb-4">
                  earn more rewards
                </h4>
                <p className="text-center">
                  Make your KMs count! Get amazing rewards daily for every KM
                  you carpool.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 feature box  ">
              <div className="feature-content position-relative">
                <img
                  className="position-relative img-fluid"
                  src={pf + "Home/blob3.svg"}
                  alt=""
                />
                <i className=" fas fa-solid fa-handshake fa-5x position-absolute top-50 start-50 translate-middle"></i>
              </div>
              <div className="text">
                <h4 className="text-capitalize text-center mb-4">
                  meet Great people
                </h4>
                <p className="text-center">
                  Grow your network organically by meeting amazing new people
                  daily.
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
