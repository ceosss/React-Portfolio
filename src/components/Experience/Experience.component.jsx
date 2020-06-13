import React from "react";

import "./Experience.styles.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      {/* &#x2022; */}

      <h2> &#x2022; WTF-Digital Waiter </h2>
      <div className="vertical">
        <span className="tenure">June 2020 - Present</span>

        <h3>SDE Intern </h3>
        <span>
          <p> - Designed and Developed Database Models.</p>
          <p> - Made RESTful API's for large production Applications.</p>
          <p> - Documented Architecture for all RESTful API's using Swagger.</p>
        </span>
      </div>
    </div>
  );
};

export default Experience;
