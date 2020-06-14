import React, { useState } from "react";

import axios from "axios";
import KEYS from "./../../keys.js";
import "xp.css/dist/XP.css";

import "./Contact.styles.css";

const Contact = ({ history }) => {
  const [values, setValues] = useState({ email: "", text: "", status: "" });

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const sendHome = () => {
    history.push("/");
  };

  const handleSubmit = () => {
    const { email, text } = values;

    if (email === "" || text === "") {
      setValues({ ...values, status: "Please fill all the fields" });
      return;
    }
    const newContact = { email, text };
    console.log(newContact);

    axios
      .post(`${KEYS.FIREBASE_BASE_URL}/contact.json`, newContact)
      .then((response) => {
        // console.log(response);
        setValues({
          ...values,
          email: "",
          text: "",
          status: "Sent Successfully",
        });
      })
      .catch((error) => {
        // console.log(error);
        setValues({ ...values, status: "Something Went Wrong, Try Again..." });
      });
  };

  return (
    <div className="contact">
      <div
        className="title-bar"
        style={{
          width: 89 + "%",
          paddingTop: 10 + "px",
          paddingBottom: 10 + "px",
          paddingLeft: 10 + "px",
        }}
      >
        <div className="title-bar-text title">Contact.exe</div>
        <div className="title-bar-controls">
          <button
            aria-label="Close"
            className="close"
            onClick={sendHome}
          ></button>
        </div>
      </div>
      {/* <div className="head">
        <h1>CONTACT</h1>
      </div> */}
      <div
        className="field-row-stacked form"
        style={{ width: 89 + "%", border: "5px solid blue", borderTop: 0 }}
      >
        <label>EMail:</label>
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          onChange={onChangeHandler}
          required
          style={{ fontSize: 20 + "px", height: 40 + "px", padding: 15 + "px" }}
        />
        <label>Your Message:</label>
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="Enter you Text Here..."
          onChange={onChangeHandler}
          required
          style={{ fontSize: 20 + "px", padding: 15 + "px" }}
        ></textarea>
        <div className="buttons">
          <button
            onClick={handleSubmit}
            style={{
              fontSize: 15 + "px",
              fontWeight: "bold",
            }}
          >
            SEND
          </button>
          <button
            onClick={sendHome}
            style={{
              fontSize: 15 + "px",
              fontWeight: "bold",
            }}
          >
            Cancel
          </button>
        </div>

        <span className="status">{values.status}</span>
      </div>
    </div>
  );
};

export default Contact;
