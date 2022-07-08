import React from "react";
import { useState } from "react";
import RadioButton from "../layout/RadioButton";

export default function CreateRides() {
  const [ride, setRide] = useState({
    from: "",
    to: "",
    gender: "",
    air_condition: "",
    smoking: "",
    pet: "",
    seats:"",
    cost:"",
    dateOfBirth: new Date(),
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

  const handelcancel = ()=>{
    console.log("cancel");
  }

  return (
    <>
      <h1>Offer a ride</h1>
      <form action="" onSubmit={()=>(console.log(ride))}>        
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
        radios={["air-condition", "no-air-condition", "any"]}
      />
      <RadioButton
        handelRadio={handelInput}
        name="Pet"
        radios={["pet", "no-pet", "any"]}
      />
      <RadioButton
        handelRadio={handelInput}
        name="Cash"
        radios={["Cash", "card", "any"]}
      />
      <div class="input-group mb-3 seats">
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
        >
          <i className="fa fa-car"></i>
        </button>
        <input
          type="number"
          className="form-control"
          placeholder="Available seats"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handelInput}
          name="seats"
          value={ride.seats}
        />
      </div>
      <div className="input-group mb-3 cost">
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
        >
          
          <i className="fa-solid fa-money-check-dollar"></i>
        </button>
        <input
          type="number"
          className="form-control"
          placeholder="25 EGP/Seat"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handelInput}
          name="cost"
          value={ride.cost}
        />
      </div>
     <input type="submit" value="submit" className="btn btn-lg btn-primary mx-2"/> 
     <input type="reset" value="cancel" className="btn btn-lg btn-outline-primary mx-2"onClick={handelcancel} /> 
      </form>
    </>
  );
}
