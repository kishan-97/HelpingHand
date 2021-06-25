import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Contact from "./Components/Contact.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <>
      <div className="firediv">
        <div>
          <img
            src="helpinghand"
            className="scraper"
            alt="Image will be shown to u early"
          />
        </div>
        <div className="firediv2">
          <h1 className="hh1">Helping Hand</h1>
        </div>
      </div>

      <Navbar />
      <Route path="/Aboutus">
        <Aboutus />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>

      <Route path="/index.html">
        <Home />
      </Route>
    </>
  );
};
export default App;
