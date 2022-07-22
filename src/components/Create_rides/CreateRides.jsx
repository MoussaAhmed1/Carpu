import React, { useContext } from "react";
import { useState } from "react";
import "./CreateRide.css";
import RadioButton from "../layout/RadioButton";
import { useHistory } from "react-router-dom";
import MyCalendar from "../layout/Date_Time/MyCalender";
import GoogleMaps from "../layout/googleMaps/GoogleMaps";
import  axios  from 'axios';
import { AuthContext } from './../../context/AuthContext';
export default function CreateRides() {
  const { user } = useContext(AuthContext);
  const [ride, setRide] = useState({
    userid:user._id,
    from: "",
    to: "",
    gender: "",
    air_condition: "",
    smoking: "",
    pet: "",
    seats: "",
    payment: "",
    fare: "",
    date: null,
    time: null,
    created: null,
    distance: "",
    duration: "",
    joinedusers:""
  });
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [selected, setSelected] = useState(null);
  //   const [err, setErr] = useState({});
  let handelInput = (e) => {
    setRide({
      ...ride,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();
  const handelcancel = () => {
    console.log("cancel");
    history.push("/");
  };
  const handelDate = (date) => {
    const  str_date = date.toISOString().slice(0,10).replace(/--/g,"");
   setRide({
    ...ride,
    date: str_date,
  }); 
  };





//submit
  const handelSubmit = async(event) => {
    event.preventDefault();
    const dt =new Date()  
 const  str_created =  dt.toISOString().slice(0,10).replace(/--/g,"");
    setRide({
      ...ride,
      created: str_created
    }); 
    console.log(ride)
    try{
      const res =  await axios.post('http://localhost:5000/api/rides/offer_ride',ride)
      console.log(res)
    }
    catch(err){
      console.log("first")
      console.log(err);
    }
  };
  const handelFrom = (from) => {
    setRide({
      ...ride,
      from: from,
    });
  };
  const handelTo = (to) => {
    setRide({
      ...ride,
      to: to,
    });
  };
  const setDistance = (distance) => {
    setRide({
      ...ride,
      "distance": distance,
    });
  };
  const setDuration = (duration) => {
    setRide({
      ...ride,
      "duration": duration,
    });
  };
  const setDuration_Distance = (duration,distance) => {
    setRide({
      ...ride,
      "duration": duration,
      "distance": distance,
    });
  };
// const handleSelect =  address =>{
  
// }
  return (
    <div className="map">
      <GoogleMaps
        handelFrom={handelFrom}
        handelTo={handelTo}
        from={ride.from}
        to={ride.to}
        setDuration={setDuration}
        setDistance={setDistance}
        duration={ride.duration}
        distance={ride.distance}
        setDuration_Distance={setDuration_Distance}
        // handleSelect={handleSelect}
      />
      <section className="form1 rounded bg-light " id="Createridebox">
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
          {/* <div className="my-2">
          
          <PlacesAutocomplete setSelected={setSelected} handelInput={handelFrom} name="from"  />
        </div>
        <div className="my-2">

          <PlacesAutocomplete setSelected={setSelected} handelInput={handelTo}  name="to" />
        </div> */}
          <hr />
          <h3>{"Date & time"}</h3>
          <MyCalendar date={new Date()} handelDate={handelDate} />
          <input
            type="time"
            name="time"
            id="time"
            className="form-control my-1"
            placeholder="To"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={handelInput}
            value={ride.time}
          />
          <hr />
          <h3>Features</h3>
          <RadioButton
            handelRadio={handelInput}
            name="gender"
            radios={["men", "women", "any"]}
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
          <input
            type="submit"
            value="submit"
            className="btn btn-lg btn-primary mx-2"
            
          />
          <input
            type="reset"
            value="cancel"
            className="btn btn-lg btn-outline-primary mx-2"
            onClick={handelcancel}
          />
        </form>
      </section>

      {/* if you give up from gm */}
      {/* <div className="row">
<div className="col-md-6">

</div>
<div className="col-md-6">
<img src={pf+"offerRide.jpg"} alt="sas" className="img-fluid d-flex justfy-content-center d-flex align-items-center py-5" />
</div>
   </div> */}
    </div>
  );
}
