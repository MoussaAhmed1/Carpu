import "./App.css";
// import './scss/elzero.scss'
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Nav from "./components/Nav/Nav";
import React from "react";
import CreateRides from './components/Create_rides/CreateRides';
import Footer from "./components/footer/Footer";
import ProfileView from './components/profile/profileView/ProfileView';
import ProfileSettings from './components/profile/ProfileSettings/ProfileSettings';
import FindRides from "./components/Find_rides/FindRides";
import ViewRides from './components/Find_rides/ViewRides/ViewRides';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import RateDriver from './components/RateThedriver/RateDriver';
import Notifications from './components/Notofications/Notifications';
function App() {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Router>
        {
            user &&
            <Nav/>
        }
      
        <Switch>
          <Route path="/" exact>
          {user ? <Home /> : <Login />}
          </Route>
          <Route path="/createRides" exact>
            <CreateRides />
          </Route>
          <Route path="/FindRides" exact>
            <FindRides />
          </Route>
          <Route path="/Rides/" exact>
            <ViewRides />
          </Route>
          <Route path="/login" exact>
          {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/Sign-up" exact>
          {user ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/Myprofile" exact>
          {user ?  <ProfileView /> :  <Login/>}
           
          </Route>
          <Route path="/ProfileSetting" exact>
            <ProfileSettings />
          </Route>
          <Route path="/rateThedriver/:id" exact>
            <RateDriver />
          </Route>
          <Route path="/notification" exact>
            <Notifications />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
      {
            user &&
            <Footer />
        }
      
     
    </React.Fragment>
  );
}

export default App;
