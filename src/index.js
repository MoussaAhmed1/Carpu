//import reportWebVitals from './reportWebVitals';
// import {createRoot} from 'react-dom/client'
// import '../node_modules/bootstrap/dist/css/bo
// import  'react-bootstrap';
// const container = document.getElementById("root")
// const root = createRoot(root);
// createRoot(container!) if you use TypeScript
import React from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import {BrowserRouter as Router} from "react-router-dom";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  
  <Router>
    <App tab="home" />
  </Router>
 

);

// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>

//   <Router>
//       <App />
//   </Router>

//   </React.StrictMode>
// );
// reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
