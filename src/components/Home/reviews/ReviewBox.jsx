import React from "react";

export default function ReviewBox({name,text,img}) {
  return (
    <>
      <div className="col-lg-4 d-flex justify-content-center">
        <div className="card">
          <div className="card-body text-center">
            <div className="card-img pt-2 pb-3">
              <img src={img} alt={"hey"} />
            </div>
            <div className="name h5">{name}</div>
            <div className="testimonial">
             {text}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
