import React, { useState } from "react";
import "./ratedriver.css";
import { Rating } from "@mui/material";
export default function RateDriver() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [rate, setRate] = useState();
  const [ride] = useState({
    from: "كلية الهندسة الإلكترونية جامعة المنوفية بمنوف، Madinet Menuf, Menouf, Egypt",
    to: "الماي، Al May, Shibin el Kom, Egypt",
    driver: "5ad7cf596149e8001401024d",
  });
  const [user] = useState({
    _id: "5ad7cf596149e8001401024d",
    name: "Moses Ahmed",
    profilepic: "mousa.jpg",
  });
  return (
    <div id="rate_driver">
      <div className="container d-flex justify-content-center mt-5">
        <div className="card text-center mb-5">
          <div className="circle-image">
            <img src={pf + user.profilepic} width="50" />
          </div>

          <span className="dot"></span>

          <span className="name mb-1 fw-500">{user.name}</span>
          <small className="text-black-50 font-weight-bold">{user._id}</small>

          <div className="location mt-4">
            <span className="d-block">
              <i className="fa fa-map-marker start"></i>{" "}
              <small className="text-truncate ml-2">{ride.from}</small>{" "}
            </span>

            <span>
              <i className="fa fa-map-marker stop mt-2"></i>{" "}
              <small className="text-truncate ml-2">{ride.to}</small>{" "}
            </span>
          </div>

          <div className="rate bg-success py-3 text-white mt-3">
            <h6 className="mb-0">Rate your driver</h6>

            <div className="rating">
              <Rating
                name="simple-controlled"
                value={rate}
                onChange={(event, newValue) => {
                  setRate(newValue);
                }}
              />
            </div>

            <div className="buttons px-4 mt-0">
              <button className="btn btn-warning btn-block rating-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
