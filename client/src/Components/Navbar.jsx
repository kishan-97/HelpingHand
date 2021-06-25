import React from "react";
import "../mystyle.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-side">
          <div className="logo">
            <a href="#">
              <img
                src="./static/img/covidupdate_logo.jpg"
                alt="TSEC CodeCell"
              />
            </a>
          </div>

          <ul className="navbar-main-ul hide-burger-menu burger-menu-dropdown">
            <a href="index.html">
              <li>Home</li>
            </a>
            <NavLink to="/Aboutus">
              <li>About</li>
            </NavLink>
            <NavLink to="/Register">
              <li>Register</li>
            </NavLink>
            <NavLink to="/Login">
              <li>Login</li>
            </NavLink>
            <NavLink to="/Contact">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>

        <div className="right-side">
          <div className="account">
            <img src="./static/img/admin.jpg" alt="HK" />

            <div className="dropdown-caret"></div>
          </div>

          <div className="dropdown hide">
            <div className="user-name">Admin</div>

            <ul>
              <a href="#">
                <li>Your profile</li>
              </a>
              <a href="#">
                <li>Settings</li>
              </a>
              <a href="#">
                <li>Log Out</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
      {/*<Route path='/Aboutus' component={Aboutus}></Route>*/}
    </>
  );
};
export default Navbar;
