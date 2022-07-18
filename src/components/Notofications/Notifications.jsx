import React ,{useState}from 'react'
import './notification.css'
export default function Notifications() {
  const notifications = useState(null);
  return (
    <>
    {
      !notifications ? 
      <span className='text-info'>You don't have any notifications</span> 
      :
      <div id="wrapper">
      <div className="toast success">
          <div className="outer-container">
              <i className="fas fa-check-circle"></i>
          </div>
          <div className="inner-container">
              <p>Success</p>
              <p>Your changes saved successfully</p>
          </div>
          <button>&times;</button>
      </div>
      <div className="toast error">
          <div className="outer-container">
              <i className="fas fa-times-circle"></i>
          </div>
          <div className="inner-container">
              <p>Error</p>
              <p>Error has occured while saving changes.</p>
          </div>
      </div>
      </div> 
     
    } 
    </>  
  )
}
