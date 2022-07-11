import React from "react";
import ReviewBox from "./ReviewBox";
import { useState } from "react";
import ALiImg from "../../assets/Home/ali.jpg";
import MousaImg from "../../assets/Home/mousa.jpg";
import nasserImg from "../../assets/Home/nasser.jpg";

export default function Reviews() {
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
            <ReviewBox name="Ali Mohamed" text={text} img={ALiImg} />
            <ReviewBox name="Mahmoud Nasser" text={text} img={nasserImg} />
            <ReviewBox name="Mousa Ahmed" text={text} img={MousaImg} />
          </div>
        </div>
      </div>
      {/* <!-- end  review--> */}
    </>
  );
}
