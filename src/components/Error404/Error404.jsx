import React from "react";
import './Error404.css'

const Error404 = () => {
    return (
        <section className="Error404 d-flex justify-content-center align-items-center w-100 h-100" style={{"postion":"absolute"}}>
        <h1 className="display-1 text-center text-light">404 <p>Not Found!!</p></h1>
        </section>
      );
}
 
export default Error404;