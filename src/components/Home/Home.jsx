import React from "react";
import "./Home.css";
import Features from "../features/Features";
import Landing from "../Landing/Landing";
import Howitworks from "../How_it_works/Howitworks";
export default function Home() {
  return (
    <React.Fragment>
      <Landing />

      <Features />
      
      <Howitworks/>
    </React.Fragment>
  );
}
