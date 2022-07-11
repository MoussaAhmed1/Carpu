import React from "react";
import "./Home.css";
import Features from "../features/Features";
import Landing from "../Landing/Landing";
import Howitworks from "../How_it_works/Howitworks";
import Reviews from "../reviews/Reviews";
import ContactUs from '../contactUs/ContactUs';
export default function Home() {
  return (
    <React.Fragment>
      <Landing />

      <Features />
      
      <Howitworks/>

      <Reviews />
      <ContactUs/>

    </React.Fragment>
  );
}
