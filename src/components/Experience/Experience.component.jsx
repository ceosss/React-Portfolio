import React from "react";

import Draggable from "react-draggable";

import "xp.css/dist/XP.css";
import "./Experience.styles.css";

const Experience = ({ history }) => {
  const sendHome = () => {
    history.push("/");
  };
  return (
    <Draggable handle="div.title-bar">
      <div className="experience">
        <div
          className="title-bar"
          style={{
            width: 75 + "%",
            paddingTop: 10 + "px",
            paddingBottom: 10 + "px",
            paddingLeft: 10 + "px",
          }}
        >
          <div className="title-bar-text title">Experience.exe</div>
          <div className="title-bar-controls">
            <button
              aria-label="Close"
              className="close"
              onClick={sendHome}
            ></button>
          </div>
        </div>
        <ul
          class="tree-view"
          style={{ border: "none", padding: "20px", fontSize: "17px" }}
        >
          <li>
            <strong>TYPE</strong>
          </li>
          <li>
            <details closed>
              <summary>
                {" "}
                <strong>Internship</strong>
              </summary>
              <ul>
                <div className="content">
                  <div className="exp-content">
                    <h2>WTF - Digital Waiter </h2>

                    <span className="tenure">June 2020 - Present</span>

                    <h4>SDE Intern </h4>
                    <span>
                      <p> - Designed and Developed Database Models.</p>
                      <p>
                        {" "}
                        - Made RESTful API's for large production Applications.
                      </p>
                      <p>
                        {" "}
                        - Documented Architecture for all RESTful API's using
                        Swagger.
                      </p>
                    </span>
                  </div>
                  <div className="exp-logo">
                    <img src={require("./wtf.menu.jpg")} alt="logo" />
                  </div>
                </div>
              </ul>
            </details>
            <details closed>
              <summary>
                {" "}
                <strong>Jobs</strong>
              </summary>
            </details>
          </li>
        </ul>
      </div>
    </Draggable>
  );
};

export default Experience;
