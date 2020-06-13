import React from "react";

import { Link } from "react-router-dom";

import "./OptionLinks.styles.css";

const OptionLinks = () => {
  return (
    <div className="option-links">
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default OptionLinks;
