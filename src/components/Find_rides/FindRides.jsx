import React from 'react'
import './FindRides.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlacesAutocomplete from "../layout/googleMaps/PlacesAutoComplete";
export default function FindRides() {
  const [search,setSearch] = useState({
    from:"",
    to:"",
    date:new Date(),
    availbleSeats:"",
  })
  const[rides,setRides] = useState([]);

  const [selected, setSelected] = useState(null);
  let history = useHistory();
  
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    history.push(`/Rides/?${search.from},${search.to}`);
  };
  const handelFrom = (from) => {
    setSearch({
      ...search,
      from: from,
    });
  };
  const handelTo = (to) => {
    setSearch({
      ...search,
      to: to,
    });
  };

  const handelcancel = () => {
    console.log("cancel");
    history.push("/");
  };
  let handelInput = (e) => {
    console.log(e.target.name)
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
    <div className='findride'>
      <div className="wrapper bg-white">
        <form action="#">
          <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <PlacesAutocomplete
                setSelected={setSelected}
                handelInput={handelFrom}
                name="from"
              />
              <div className="label" id="from"></div>
              <span className="fas fa-dot-circle text-muted"></span>
            </div>
            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <PlacesAutocomplete
                setSelected={setSelected}
                handelInput={handelTo}
                name="to"
              />{" "}
              <div className="label" id="to"></div>
              <span className="fas fa-map-marker text-muted"></span>
            </div>
          </div>
          <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
              <input
                type="date"
                required
                placeholder="leaving date"
                className="form-control"
                onChange={(e)=>handelInput(e)}
                value={search.date}
                name="date"
              />
              <div className="label" id="leaving date"></div>
            </div>
          </div>
          <div className="form-group border-bottom d-flex align-items-center position-relative">
            <input
              type="number"
              required
              placeholder="Passenger(s)"
              className="form-control"
              onChange={(e)=>handelInput(e)}
              value={search.availbleSeats}
              name={"availbleSeats"}
            />
            <div className="label" id="psngr"></div>
            <span className="fas fa-users text-muted"></span>
          </div>
          <div className="form-group my-3 d-flex justify-content-around">
            <button className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"
                onClick={handelSubmit}
                >
              Search Rides
              </button>
            <button
              className="btn btn-secondary rounded-0 d-flex justify-content-center text-center p-3"
              onClick={handelcancel}
            >
              Cancel
            </button>
          </div>
          <div className="form-group my-3">
          </div>
        </form>
      </div>
    </div>
  
    </>
  )
}
