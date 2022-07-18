import "./Nav.css";
import { Link } from "react-router-dom";
import React, { useContext }  from "react";
import { AuthContext } from "../../context/AuthContext";

const Nav = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [user, setUser] = useState({});
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TRAVU
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav bg-md-info">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link font-weight-" >
                  Features
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#User_Reviews">
                <span className="messages badge badge-pill badge-info" style={{float:"right",marginBottom:"-10px"}}>3</span>
                <i class="fa-regular  fa-lg fa-envelope"></i>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="#User_Reviews">
                <span className="messages badge badge-pill badge-info" style={{float:"right",marginBottom:"-10px"}}>1</span>
                <span class="fa-regular  fa-lg fa-bell"></span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <span className="fa fa-lg fa-regular fa-circle-user"></span> */}
                  <img
                className="profileUserImg"
                src={
                  user ?
                  user.profilePicture
                    ? pf + user.profilePicture
                    : `http://localhost:5000/${user.profileimg}`
                    :" "
                }
                alt=""
              />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {
                    user!==null?
                    <>
                    <li className="nav-item">
                    <Link className="dropdown-item" to="/Myprofile">
                      My Profile
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/ProfileSetting">
                      Edit Profile
                    </Link>
                  </li>
                  <Link className="dropdown-item" to="">
                     Log-out
                    </Link>
                  </>
                    :
                    <>
                    <li>
                    <Link className="dropdown-item" to="/Login">
                      Log in 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Sign-up">
                       Sign-up
                    </Link>
                  </li>
                    </>

                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
