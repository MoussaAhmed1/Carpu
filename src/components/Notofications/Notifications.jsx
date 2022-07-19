import React, { useState } from "react";
import "./notification.css";
import { Link } from 'react-router-dom';
export default function Notifications() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [notifications] = useState([
    {
      _id:"42314443242",
      date:"25/7/2022",
      type:"request",
      user_id:"3441321",
      description:"Ask to join your ride",

    },
    {
      _id:"42314443262",
      date:"25/7/2022",
      type:"replay",
      user_id:"3441321",
      description:"has accepted to join his ride",
      
    },
    {
      _id:"4231444326542",
      date:"27/7/2022",
      type:"replay",
      user_id:"3441321",
      description:"has refused your request",
      
    }
  ]);
  const [user] = useState([
    {
      _id: "5ad7cf596149e8001401024d",
      name: "Moses Ahmed",
      profilepic: "mousa.jpg",
    }
])

const handelAccept = ()=>{
  console.log("accepted");
}
const handelRefuse = ()=>{
  console.log("refused");
}

return (
    <div id="notification">
      {
      !notifications? (
        <span className="text-info">You don't have any notifications yet</span>
      ) : (
        <>
            <div className="container">
              <table className="table table-borderless table-responsive card-1 p-4 mb-4">
                <thead>
                  <tr className="border-bottom">
                    <th>
                      <span className="ml-2">Time</span>
                    </th>
                    <th>
                      <span className="ml-2">Agent</span>
                    </th>
                    <th>
                      <span className="mx-4">descrption</span>
                    </th>
                    <th>
                      <span className="ml-4">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                  notifications.map((notification,id)=>{
                    return(
                  <tr className="border-bottom" key={id}>
                    <td>
                      <div className="p-2">
                        <span className="d-block font-weight-bold">{notification.date}</span>
                      </div>
                    </td>
                    <td>
                      <div className="p-2 d-flex flex-row align-items-center mb-2 mr-3">
                        <img
                         src={pf + user[0].profilepic}
                          width="40"
                          className="rounded-circle"
                        />
                        <div className="d-flex flex-column ml-4">
                          <Link to={`users/${user[0]._id}`} style={{textDecoration:"none"}}>
                          <span className="d-block font-weight-bold">
                            {user[0].name}
                          </span>
                          </Link>
                          <small className="text-muted">
                            {user[0]._id}
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="p-4">
                        <span className="font-weight-bold">{notification.description}</span>
                      </div>
                    </td>
                    <td>
                      <div className="p-2 d-flex ">
                        {
                          notification.type==="request" &&
                          <>
                        <span>
                          <input type="submit" onClick={handelAccept} value="Accept" className="btn btn-primary mx-3"/>
                        </span>
                       <span>
                          <input type="submit" onClick={handelRefuse} value="Refuse" className="btn btn-danger mx-3"/>
                       </span>
                          </>
                      
                        }
                      </div>
                    </td>
                  </tr>
                    )
                  })
                      }
                </tbody>
              </table>
            </div>
        
        </>
          
       
      )}
    </div>
  );
}
