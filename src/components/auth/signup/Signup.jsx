import React ,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import signupImg from "pf +"add-friend.png"
import axios from 'axios';
// import { emailjs } from '@emailjs/browser';
import {send} from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
const pf = process.env.REACT_APP_PUBLIC_FOLDER;


export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username:"",
    phone:"",
    male:true,
    dateOfBirth:new Date(),
    
  });
  const [err, setErr] = useState({});
  let handelInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  //submit
  const [modalShow, setModalShow] = React.useState(false);
    let history = useHistory();
    let [ver_code,SetVerCode]=useState(0);
    const sendEmail = (e) => {
      e.preventDefault();
      if(!+localStorage.getItem('code')){
        SetVerCode(Math.floor(10000 + Math.random() * 90000));
      localStorage.setItem("code",ver_code);
     send('Gmail_cv60k5o', 'template_67w3yzb',{
        to_name: user.username,
        code:ver_code ,
        toGmail: user.email,
        }).then((result) => {
          console.log(result.text);
          }, (error) => {
          console.log(error.text);
          },'5JWk6V3ZLldyEg9bJ');
        }
        else{
        SetVerCode(+localStorage.getItem('code'));
        
        }
        setModalShow(true)
      }
    const onSubmit = (event) =>{
      event.preventDefault()
      const registered = user
       axios.post("http://localhost:5000/api/signup", registered)
       .then( ({data}) => {
       const {msg} = data;
        console.log(data)
        console.log(msg)
        // if (data=="Successfully Authenticated") {
        if (msg) {
          history.push("/Confirmation") 
    }
      else
      throw new Error("user Exist");
      
      
    }).catch(err => console.log("user Exist"));
  }
  return (
    <React.Fragment>
       <div className="Login rightSide col-md-6 bg-light">
          <div className="circle d-md-block d-sm-none">
          <div className="innerCircle">
            <img src={pf+ "car.png"} alt="yellowCar" className="yellowCar icon" />
            <img src={pf+ "google-maps.png"} alt="googleMap" className="googleMap icon" />
          </div>
          </div>
         
            
        </div>
    <div className="form login justify-content-center align-items-center mt-5 " >
      <div className="text-center userprofile d-flex justify-content-center d-sm-none d-md-block">
        <img src={pf +"add-friend.png"} alt="" className="img-fluid" />
      </div>
      <h2 className="fw-bold display-6 text-center my-2">Sign Up</h2>
      <form onSubmit={(e)=>sendEmail(e)}>
      <label htmlFor="FullName">Full Name</label>
        <div className="input-group mb-3">
         
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            aria-label="username"
            aria-describedby="username"
            onChange={(e) => handelInput(e)}
            value={user.username}
            autoComplete="false"
          />
           <span className="input-group-text lead" id="FullName">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          </span>
        </div>

        <label htmlFor="Email">Email</label>
        <div className="input-group mb-3">
         
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="Email"
            onChange={(e) => handelInput(e)}
            value={user.email}
          />
           <span className="input-group-text border-r-light lead" id="Email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>
        </div>

        <label htmlFor="password">Password</label>
        <div className="input-group mb-3">
         
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon2"
            onChange={(e) => handelInput(e)}
            value={user.password}
          />
           <span className="input-group-text" id="password">
            <i className="fa fa-key mx-1"></i>
          </span>
        </div>
        <div className="text-center justify-content-center">
          <button
            className="btn rounded-pill btn-md login-btn"
            type="submit"
          >
            <span className="text-light lead my-4">Sign up</span> 
           
          </button>
        <p className="lead ">Already have an account? <Link to="/Login">Login</Link>
              </p>
        </div>
      </form>
    </div>
    {/* modal */}
    <MyVerticallyCenteredModal
        email={user.email}
        code = {ver_code}
        show={modalShow}
        onSubmit={onSubmit}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  )
}
function MyVerticallyCenteredModal({onSubmit,code,email,...props}) {
  const[userCode,setUsercode] = useState("")
  const [err,setErr] = useState(false)
  const handelCheck =()=>{
    if(+userCode === code ){
      console.log("go");
      onSubmit()
      
    }
    else
    console.log("no")
    setErr(true)
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <div className='messagebox' style={{ paddingTop: '26px'}}>
        <img src={pf +"messagbox2.jpg"} alt="" className="img-fluid" />
        </div>
      <Modal.Body style={{padding: "2rem"}}>
        <h4>Email Confirmation Required</h4>
        <p>
                  
                    We sent the <span className='text-primary'>{email}</span>
                    Check your inbox to activate your account.

        </p>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <div className='row'>
          <div className="col-md-9">
        <Form.Control  size="sm"  placeholder="Your code" type="number" value={userCode} onSelect={()=>setErr(false)} onChange={(e)=>setUsercode(e.target.value)} />
        <span style={{display:`${err?"block":"none" }`}} className='text-danger err'>it's not true please make sure you have the right code</span>
          </div>
          <div className="col-md-2">

        <Button onClick={handelCheck} size="lg" style={{marginTop:"15px auto 0"}}>Check</Button>

          </div>

        </div>
      </Modal.Body>
    </Modal>
  );
}