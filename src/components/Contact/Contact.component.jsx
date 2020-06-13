import React, { useState } from "react";

import axios from "axios";
import KEYS from "./../../keys.js";
import "xp.css/dist/XP.css";

import "./Contact.styles.css";

const Contact = () => {
  const [values, setValues] = useState({ email: "", text: "", status: "" });

  const styles = {
    formFontSize: {
      fontSize: 20 + "px",
    },
    formDim: {
      height: 40 + "px",
    },
  };

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
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
      <div className="head">
        <h1>CONTACT</h1>
      </div>
      <div className="field-row-stacked form" style={{ width: 90 + "%" }}>
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          onChange={onChangeHandler}
          required
          style={{ fontSize: 20 + "px", height: 40 + "px", padding: 15 + "px" }}
        />
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="Enter you Text Here..."
          onChange={onChangeHandler}
          required
          style={{ fontSize: 20 + "px", padding: 15 + "px" }}
        ></textarea>
        <button
          onClick={handleSubmit}
          style={{ height: 40 + "px", fontSize: 15 + "px",fontWeight:"bold" }}
        >
          SEND
        </button>
        <span className="status">{values.status}</span>
      </div>
      {/* <div className="form">
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          onChange={onChangeHandler}
          required
        />
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="Enter you Text Here..."
          onChange={onChangeHandler}
          required
        ></textarea>
        <button onClick={handleSubmit}>Send</button>
        <span className="status">{values.status}</span>
      </div> */}
    </div>
  );
};

export default Contact;
