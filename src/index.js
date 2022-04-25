import React from 'react';
//import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client'

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
// import  'react-bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import {BrowserRouter as Router} from "react-router-dom";
const container = document.getElementById("root")
const root = createRoot(root);
root.render(
  <Router>
      <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
