import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Nav from "./components/Nav/Nav";
import React from "react";
import CreateRides from './components/Create_rides/CreateRides';
import Footer from "./components/footer/Footer";
import ProfileView from './components/profile/profileView/ProfileView';
import ProfileSettings from './components/profile/ProfileSettings/ProfileSettings';
import FindRides from "./components/Find_rides/FindRides";
import AuthLayout from './components/auth/AuthLayout'
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
          <Route path="/FindRides" exact>
            <FindRides />
          </Route>
          <Route path="/authLayout/login" exact>
            <AuthLayout />
          </Route>
          <Route path="/authLayout/Sign-up" exact>
            <AuthLayout />
          </Route>
          <Route path="/profile/:id" exact>
            <ProfileView />
          </Route>
          <Route path="/ProfileSetting/:id" exact>
            <ProfileSettings />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
