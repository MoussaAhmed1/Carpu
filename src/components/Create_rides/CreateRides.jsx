import React from "react";
import { useState } from "react";
import './CreateRide.css'
import RadioButton from "../layout/RadioButton";
import { useHistory } from "react-router-dom";
import MyCalendar from "../layout/Date_Time/MyCalender";
import GoogleMaps from "../layout/googleMaps/GoogleMaps"; 
export default function CreateRides() {
  const [ride, setRide] = useState({
    from: "",
    to: "",
    gender: "",
    air_condition: "",
    smoking: "",
    pet: "",
    seats:"",
    payment:"",
    fare:"",
    date:new Date(),
    time:null,
    created: new Date(),
    // htmlFormatDate(props.date)
  });
  //   const [err, setErr] = useState({});
  let handelInput = (e) => {
    console.log(e.target.name,e.target.value);
    setRide({
      ...ride,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();
  const handelcancel = ()=>{
    console.log("cancel");
    history.push("/");
  }
  const handelDate = (date) => {
    setRide({
      ...ride,
      "date":date})
  }
  
   const handelSubmit = (event)=>{
    event.preventDefault();
    console.log(ride);
   }
   const handelFrom = (from) => {
    setRide({
      ...ride,
      "from":from})
  }
   const handelTo = (to) => {
    setRide({
      ...ride,
      "to":to})
  }

  return (

    <div className="map">
   <GoogleMaps handelFrom={handelFrom} handelTo={handelTo} from={ride.from} to={ride.to}/>  
    <section className="form1 rounded bg-light justfy-content-center">
      <h1>Offer a ride</h1>
      <form action="" onSubmit={handelSubmit}> 
      {/* <input
          type="text"
          className="form-control my-1"
          placeholder="From"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handelInput}
          name="from"
          value={ride.from}
        />       
      <input
          type="text"
          className="form-control my-1"
          placeholder="To"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handelInput}
          name="to"
          value={ride.to}
        />  */}
        <hr />
        <h3>{"Date & time"}</h3>
        <MyCalendar  date={ride.date} handelDate={handelDate} /> 
        <input type="time" name="time" id="time"
        className="form-control my-1"
        placeholder="To"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        onChange={handelInput}
        value={ride.time} />
        <hr />
        <h3>Features</h3>    
      <RadioButton
        handelRadio={handelInput}
        name="gender"
        radios={["Men", "women", "any"]}
      />
      <RadioButton
        handelRadio={handelInput}
        name="smoking"
        radios={["smoking", "no-smoking", "any"]}
      />
      <RadioButton
        handelRadio={handelInput}
        name="air_condition"
        radios={["air-condition", "no-AC", "any"]}
      />
      <RadioButton
        handelRadio={handelInput}
        name="pet"
        radios={["pet", "no-pet", "any"]}
      />
      <RadioButton
        handelRadio={handelInput}
        name="payment"
        radios={["Cash", "card", "any"]}
      />
      <div class="input-group mb-3 seats">
        <i
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
        >
          <i className="fa fa-car"></i>
        </i>
        <input
          type="number"
          className="form-control"
          placeholder="Available seats"
          onChange={handelInput}
          name="seats"
          value={ride.seats}
        />
      </div>
      <div className="input-group mb-3 fare">
        <i
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
        >
          
          <i className="fa-solid fa-money-check-dollar"></i>
        </i>
        <input
          type="number"
          className="form-control"
          placeholder="fare/Seat"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handelInput}
          name="fare"
          value={ride.fare}
        />
      </div>
     <input type="submit" value="submit" className="btn btn-lg btn-primary mx-2"/> 
     <input type="reset" value="cancel" className="btn btn-lg btn-outline-primary mx-2"onClick={handelcancel} /> 
      </form>
    </section>
      </div>
    
  );
}
