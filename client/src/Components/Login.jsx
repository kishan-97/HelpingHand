import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [userdata, setData] = useState({ email: "", password: "" });
  const handleData = (e) => {
    let tag_name = e.target.name;
    let value = e.target.value;
    setData({ ...userdata, [tag_name]: value });
  };

  const authenticate_data = async (e) => {
    e.preventDefault();
    const { email, password } = userdata;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);
    if (data.code === 201) {
      history.push("/index.html");
      window.alert("Login Succesful");
    }
  };

  return (
    <>
      <main>
        <form action="" method="" className="form">
          <div className="input-group">
            <input
              type="email"
              name="email"
              onChange={handleData}
              id="Email"
              placeholder="Enter email"
            />
            <label for="email">Enter Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              onChange={handleData}
              id="password"
              placeholder="Enter Pasword"
            />
            <label for="password">Enter Password</label>
          </div>

          <div className="button-div">
            <button type="submit" onClick={authenticate_data}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
export default Login;
