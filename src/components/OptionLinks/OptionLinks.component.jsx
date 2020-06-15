import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import KEYS from "./../../keys";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";

import "./OptionLinks.styles.css";

const OptionLinks = () => {
  const [startImage, setStartImage] = useState(null);
  useEffect(() => {
    axios.get(`${KEYS.FIREBASE_BASE_URL}/imageUrl.json`).then((response) => {
      setStartImage(response.data.startImageUrl);
    });
  }, []);
  return (
    <div className="option-links">
      <div className="heading">
        {startImage ? (
          <img src={startImage} alt="profile-logo" />
        ) : (
          <Skeleton variant="rect" width={75} height={75} />
        )}

        <h2>Swaraj</h2>
      </div>
      <Link to="/">
        <i className="fas fa-desktop"> &nbsp;&nbsp; Home</i>
      </Link>
      <hr />
      <Link to="/experience">
        <i className="fas fa-code-branch"> &nbsp;&nbsp;&nbsp; Experience</i>
      </Link>
      <hr />
      <Link to="/projects">
        <i className="fas fa-file-code"> &nbsp;&nbsp;&nbsp; Projects</i>
      </Link>
      <hr />
      <Link to="/contact">
        <i className="fas fa-id-card"> &nbsp;&nbsp; Contact</i>
      </Link>
      <hr />
      <Link to="/blog">
        <i className="fas fa-blog"> &nbsp;&nbsp; Blog</i>
      </Link>
      <hr />
    </div>
  );
};

export default OptionLinks;
