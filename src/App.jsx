import "./App.css";
import AuthLayout from "./components/auth/AuthLayout";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Nav from "./components/Nav/Nav";
import React from "react";
import CreateRides from './components/Create_rides/CreateRides';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/createRides" exact>
            <CreateRides />
          </Route>
          <Route path="/authLayout/login" exact>
            <AuthLayout />
          </Route>
          <Route path="/authLayout/Sign-up" exact>
            <AuthLayout />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
