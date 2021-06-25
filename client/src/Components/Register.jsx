import React from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const takeInput = (e) => {
    let tag_name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [tag_name]: value });
  };

  const Register_User = async (e) => {
    e.preventDefault();

    const { username, phone, email, password } = userData;
    console.log(userData);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, phone, email, password }),
    });

    const data = await res.json();
    console.log(data);
    if (data.code === 409 || !data) {
      window.alert("User Alredy Registered");
      console.log("Registration Invalid Registration");
    } else {
      setUserData({ username: "", phone: "", email: "", password: "" });
      window.alert("Registration Succesful");
      console.log("Registration Succesful");
      history.push("/Login");
    }
  };

  return (
    <>
      <main>
        <div className="title">Enter Details</div>

        <form class="form">
          <div className="input-group">
            <input
              type="text"
              onChange={takeInput}
              name="username"
              id="first-name"
              placeholder="Username"
              value={userData.username}
            />
            <label for="first-name">Enter Username</label>
          </div>

          <div className="input-group">
            <input
              type="number"
              onChange={takeInput}
              name="phone"
              id="last-name"
              placeholder="Phone"
              value={userData.phone}
            />
            <label for="last-name">Phone</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              onChange={takeInput}
              name="email"
              id="e-mail"
              placeholder="e-mail"
              value={userData.email}
            />
            <label for="e-mail">E-mail</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              onChange={takeInput}
              name="password"
              id="last-name"
              placeholder="Last Name"
              value={userData.password}
            />
            <label for="last-name">Password</label>
          </div>

          <div className="button-div">
            <button type="submit" onClick={Register_User}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
