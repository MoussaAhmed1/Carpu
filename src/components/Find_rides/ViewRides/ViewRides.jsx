import { Rating } from "@mui/material";
import React from "react";
import "./viewRide.css";
// import TimeLineFT from '../../layout/TimeLineFT'
// import { useState } from 'react';
export default function ViewRides() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const rides = [
    {
      passengers: [],
      _id: "5ae4ecaf4e1bdd00147e2b07",
      type: "request",
      studentID: "",
      fulfilled: false,
      from: "Hannaford Supermarket, Court Street, Middlebury, VT, USA",
      fromgeo: { lat: 44.0011809, lng: -73.1558293 },
      to: "Middlebury, VT, USA",
      togeo: { lat: 44.0153371, lng: -73.16733999999997 },
      time: "14:00",
      date: "2018-05-30",
      seats_avail: 2,
      notes: "",
      price: 0,
      user: "5ad7cf596149e8001401024d",
      distance: "15",
      username:"Mahmoud Nasser",
      profilepic:"nasser.jpg"
    },
    {
      passengers: ["5ad7cf596149e8001401024d"],
      smoking: "no-smoking",
      _id: "5ae522018ba7d20014d398e9",
      type: "request",
      studentID: "",
      fulfilled: true,
      from: "New York, NY, USA",
      fromgeo: { lat: 40.7127753, lng: -74.0059728 },
      to: "Middlebury, VT, USA",
      togeo: { lat: 44.0153371, lng: -73.16733999999997 },
      time: "15:00",
      date: "2018-05-24",
      seats_avail: 3,
      notes: "",
      price: 0,
      user: "5ae521cb8ba7d20014d398e8",
      distance: "15",
      username:"Mahmoud Nasser",
      profilepic:"nasser.jpg"
    },
    {
      passengers: [],
      _id: "5ae74326d9625000145ae416",
      type: "request",
      studentID: "",
      fulfilled: false,
      from: "Georgia Avenue, Silver Spring, MD, USA",
      fromgeo: { lat: 39.0084192, lng: -77.04014540000003 },
      to: "Summerfield, NC, USA",
      togeo: { lat: 36.2087468, lng: -79.90475830000003 },
      time: "00:12",
      date: "2018-05-01",
      seats_avail: 1,
      notes: "",
      price: 50,
      user: "5adfe362110b0e00148845a8",
      distance: "15",
      name:"Mahmoud Nasser",
      profilepic:"nasser.jpg",
      air_condition: "air_condition",
      smoking: "no-smoking",
    },
    {
      passengers: [],
      _id: "5af5d2da5fcaaf0014ce001c",
      type: "offer",
      studentID: "",
      fulfilled: false,
      from: "كلية الهندسة الإلكترونية جامعة المنوفية بمنوف، Madinet Menuf, Menouf, Egypt",
      fromgeo: { lat: 44.00825950000001, lng: -73.17731520000001 },
      to: "الماي، Al May, Shibin el Kom, Egypt",
      togeo: { lat: 38.9076089, lng: -77.07225849999998 },
      time: "14:00",
      date: "2018-06-21",
      seats_avail: 3,
      notes: "",
      price: 30,
      user: "5ad7cf596149e8001401024d",
      distance: "15",
      name:"Ali Mohamed",
      profilepic:"ali.jpg",
      air_condition: "air_condition",
      smoking: "no-smoking",
      gender: "men",
      payment: "card",

    },
    {
      from: "",
      to: "",
      gender: "men",
      air_condition: "air_condition",
      smoking: "no-smoking",
      pet: "",
      seats: "",
      payment: "",
      fare: "",
      date: "",
      time: null,
      created: "",
      distance: "15",
      duration: "25 min",
      name:"Moses Ahmed",
      profilepic:"mousa.jpg",
      air_condition: "air_condition",
      smoking: "no-smoking",
    },
  ];

  return (
    <>
      {
        !rides ? <span>
            loading
        </span> 
            :
            rides.map((ride,id)=>{
                return(
                    <div classNameName="view-rides" id="viewride" key={id}>
                <div className="container px-4 py-5 mx-auto">
                  <div className="row ">
                    <div className="card card2">
                      <div className="row ">
                        <div className="col-4 d-flex">
                          <img
                            className="profile-pic col-2 mx-2"
                            src={`${pf}${ride.profilepic}`}
                          />
                          <h3 className="mt-2 font-weight-normal">{ride.name}</h3>
                        </div>
                        <div className="col-8 d-flex justify-content-end">
                          <h5 className="text-primary">{ride.price} EGP</h5>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-1"></div>
                        <div className="col-5">
                          <Rating name="read-only" value={3.5} readOnly precision={0.5} />
                        </div>
                        <div className="col-6 d-flex justify-content-end ">
                          <h5 className="text-muted">
                            <i className="fa-solid fa-users-between-lines"></i>
                            {ride.seats_avail} Availble Seats
                          </h5>
                        </div>
                      </div>
          
                      <div className="row my-2">
                        <div className="d-flex">
                          <h6 className="text-primary">
                            <i className="fa fa-location"></i> From
                          </h6>
                          <h6 className="lead text-muted mx-4">{ride.from}</h6>
                          <h6 className="text-primary">
                            <i className="fa-solid fa-location-dot"></i> To
                          </h6>
                          <h6 className="lead text-muted mx-4">{ride.to}</h6>
                        </div>
                        <div className="col-md-4"></div>
                      </div>


                      <div className="row mt-5" >
                     
                        <div className="col" id="fa-lg">
                          {ride.gender == "men" ? (
                            <i className="fa-solid fa-person"></i>
                          ) : (
                            <i className="fa-solid fa-person-dress"></i>
                          )}
                          {ride.air_condition === "air-condition" ? (
                            <i className="fa-solid fa-fan"></i>
                          ) : (
                            " "
                          )}
                          {ride.payment === "card" ? (
                            <i className="fa-regular fa-credit-card"></i>
                          ) : (
                          <i className="fa-regular fa-money-bill-1"></i>
                          )}
                          {ride.smoking === "no-smoking" ? (
                            <i className="fa-solid fa-ban-smoking"></i>
                          ) : (
                            ""
                          )}
          
                          {ride.pet === "no-pet" ? (
                              <>
                              <i className="fa-solid fa-cat"></i>
                              <i className="fa-solid fa-ban"></i>
                              </>
                          ) : (
                              " "
                          )}
                          {ride.pet === "no-pet" ? (
                            <i className="fa-solid fa-fan"></i>
                          ) : (
                            " "
                          )}
                        </div>
                        <div className="col">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span> {ride.date}</span>
                          <span> | </span>
                          <i className="fa-regular fa-clock"></i>
                          <span> {ride.time}</span>
                        </div>
                        <div className="col">
                          <i className="fa-solid fa-map-location"></i>
                          <span> {ride.distance} km</span>
                        </div>
                        <div className="col">
                          <i className="fa-regular fa-clock"></i>
                          <span> {ride.duration}25 min</span>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <input
                            type="submit"
                            className="btn btn-lg btn-primary "
                            value={"request"}
                          />
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                )
              
          })

      }
    </>
  );
}
