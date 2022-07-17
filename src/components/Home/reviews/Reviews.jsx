import React from "react";
import ReviewBox from "./ReviewBox";
import './Review.css'
import { useState } from "react";
// import pf + "Home/ali.jpg" from "pf + "Home/ali.jpg";
// import MousaImg from "pf + "Home/mousa.jpg";
// import nasserImg from "pf + "Home/nasser.jpg";

export default function Reviews() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  //   const [reviews,setReviews]  = useState([]);
  const text =
    "I made back the purchase price in just 48 hours ! Thank you  for  making pain less, pleasant. The service was execellent. I will refer everyone I know";
  return (
    <>
      {/* <!-- start review--> */}
      <div className="Reviews mt-5 " id="Reviews">
        <div className="container shape">
          <div className="special-heading  position-relative ms-auto me-auto mt-5 mb-5 ">
            <h3 className="text-center  p-1 m-0 "> REVIEWS </h3>
          </div>
          <div className="row">
            <ReviewBox name="Ali Mohamed" text={text} img={pf + "Home/ali.jpg"} />
            <ReviewBox name="Mahmoud Nasser" text={text} img={pf + "Home/nasser.jpg"} />
            <ReviewBox name="Mousa Ahmed" text={text} img={pf + "Home/mousa.jpg"} />
          </div>
        </div>
      </div>
      {/* <!-- end  review--> */}
    </>
  );
}
