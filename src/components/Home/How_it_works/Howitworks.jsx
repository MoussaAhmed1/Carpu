// import pf + "Home/gallery-03.jpg" from "pf + "Home/gallery-03.jpg";
// import gallary4 from "pf + "Home/gallery-04.png";
// import gallary5 from "pf + "Home/gallery-05.jpg";
import './How_it_works.css'
import React from 'react'
const Howitworks = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    return ( <React.Fragment>
    
    {/* <!-- start how it works --> */}
    <div className="how-it-works m-0  position-relative " id="How_It_Work">
        <div className="line position-absolute  mb-5   "></div>
        <div className="container">
          <div className="special-heading  position-relative ms-auto me-auto mt-5 mb-5 ">
            <h3 className="text-center  p-1 m-0 ">How It Works </h3>
          </div>
          <div className="row gap-4 d-flex justify-content-center align-items-center ">
            <div className="position-relative  col-md-4 col-sm-6 w-25 p-0">
              <div className="number nbox anmi1 p-2 mb-4">1</div>
              <div className="box">
                <img className="img-fluid  " src={pf + "Home/gallery-03.jpg"} alt="" />
                <div className="text-content">
                  <h4 className="mt-4 ms-2 text-capitalize ">car owners</h4>
                  <p className="m-2 mt-3 mb-3">
                    {" "}
                    if you own a car,share your daily rides to works,university,
                    and tralviling trips
                  </p>
                </div>
              </div>
            </div>
            <div className=" position-relative  col-md-4  col-sm-6 w-25 p-0">
              <div className="number nbox anmi2 p-2 mb-4">2</div>
              <div className="box">
                <img className="img-fluid " src={pf + "Home/gallery-04.png"} alt="" />
                <div className="text-content">
                  <h4 className="mt-4 ms-2 text-capitalize"> riders</h4>
                  <p className="m-2 mt-3 mb-3">
                    if you need a ride,find an share your rides and traveling
                    trips with few clicks
                  </p>
                </div>
              </div>
            </div>
            <div className="position-relative  col-md-4 col-sm-6 w-25 p-0">
              <div className="number nbox anmi3 mb-4 p-2 ">3</div>
              <div className="box">
                <img className="img-fluid " src={pf + "Home/gallery-05.jpg"} alt="" />
                <div className="text-content">
                  <h4 className="mt-4 ms-2 text-capitalize">
                    split cost,save money
                  </h4>
                  <p className="m-2 mt-3 mb-3">
                    trust in travu,we will save your time and money
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end  how it works --> */}
    
    </React.Fragment> );
}
 
export default Howitworks;