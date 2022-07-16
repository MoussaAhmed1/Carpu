import "./Nav.css";
import { Link } from "react-router-dom";
import React from "react";
const Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link font-weight-" to="#Features">
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#User_Reviews">
                  <span className="messages badge badge-pill badge-info" style={{ float: "right", marginBottom: "-10px" }}>3</span>
                  <i class="fa-regular  fa-lg fa-envelope"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#User_Reviews">
                  <span className="messages badge badge-pill badge-info" style={{ float: "right", marginBottom: "-10px" }}>1</span>
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
                  <span className="fa fa-lg fa-regular fa-circle-user"></span>

                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/profile/10">
                      My Profile
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/ProfileSetting/10">
                      Edit Profile
                    </Link>

                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/authLayout/login">
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/authLayout/Sign-up">
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Log-out
                    </Link>
                  </li>
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
