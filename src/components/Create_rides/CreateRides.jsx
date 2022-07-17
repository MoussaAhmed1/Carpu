import React from "react";
import { useState } from "react";
import "./CreateRide.css";
import RadioButton from "../layout/RadioButton";
import { useHistory } from "react-router-dom";
import MyCalendar from "../layout/Date_Time/MyCalender";
import GoogleMaps from "../layout/googleMaps/GoogleMaps";
// import Places from "../layout/GoogleMapApi/MygoogleMap";
// import PlacesAutocomplete from './../layout/googleMaps/PlacesAutoComplete';
export default function CreateRides() {
  const [ride, setRide] = useState({
    from: "",
    to: "",
    gender: "",
    air_condition: "",
    smoking: "",
    pet: "",
    seats: "",
    payment: "",
    fare: "",
    date: new Date(),
    time: null,
    created: new Date(),
    distance: 0,
    duration: "",
    // htmlFormatDate(props.date)
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
    setRide({
      ...ride,
      date: date,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(ride);
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
          <MyCalendar date={ride.date} handelDate={handelDate} />
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
