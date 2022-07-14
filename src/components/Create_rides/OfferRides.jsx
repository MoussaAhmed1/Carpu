import React from 'react'
import CreateRides from './CreateRides';

export default function OfferRides() {
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
      
    
  return (
    <div>
        <CreateRides/>
        
    </div>
  )
}
