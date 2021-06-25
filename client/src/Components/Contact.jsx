import React from "react";
import "../mystyle.css";
import { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    msg: "",
  });

  const handle_data = (e) => {
    let tag_name = e.target.name;
    let value = e.target.value;
    setContactData({ ...contactData, [tag_name]: value });
  };

  const save_data = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, msg } = contactData;
    console.log(contactData);
    const res = await fetch("/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name, last_name, email, msg }),
    });

    const response = await res.json();
    if (response.code == 422 || !response) {
      window.alert("Message Failer");
    } else {
      window.alert("Message Sent");
    }
  };
  return (
    <>
      <main>
        <div className="title">Contact us</div>
        <div className="title-info">We'll get back to you soon!</div>

        <form action="" method="" className="form">
          <div className="input-group">
            <input
              type="text"
              name="first_name"
              id="first-name"
              onChange={handle_data}
              placeholder="First name"
            />
            <label for="first-name">First name</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="last_name"
              id="last-name"
              onChange={handle_data}
              placeholder="Last Name"
            />
            <label for="last-name">Last name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              id="e-mail"
              onChange={handle_data}
              placeholder="e-mail"
            />
            <label for="e-mail">e-mail</label>
          </div>

          <div className="textarea-group">
            <textarea
              name="msg"
              id="message"
              rows="5"
              onChange={handle_data}
              placeholder="Message"
            ></textarea>
            <label for="message">Message</label>
          </div>

          <div className="button-div">
            <button type="submit" onClick={save_data}>
              Send
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
export default Contact;
