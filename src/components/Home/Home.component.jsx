import React from "react";

import { Skeleton } from "@material-ui/lab";
import Typed from "react-typed";

import "xp.css/dist/XP.css";
import "./Home.styles.css";

const Home = (props) => {
  const { imageUrl } = props;
  return (
    <div className="home">
      <div
        className="title-bar"
        style={{
          width: 89 + "%",
          paddingTop: 10 + "px",
          paddingBottom: 10 + "px",
          paddingLeft: 10 + "px",
        }}
      >
        <div className="title-bar-text title">Home.exe</div>
        <div className="title-bar-controls">
          <button aria-label="Close" className="close"></button>
        </div>
      </div>
      <div
        className="home-content"
        style={{ width: 89 + "%", border: "5px solid #1D7BF5", borderTop: 0 }}
      >
        <div className="image">
          {imageUrl ? (
            <img src={imageUrl} alt="profile" />
          ) : (
            <Skeleton variant="circle" width={300} height={300} />
          )}
        </div>
        <div className="type">
          <Typed
            strings={["Web Developer", "Student", "Intern", "Photographer"]}
            typeSpeed={200}
            loop
          />
        </div>
        <div className="text">
          <p>
            A Computer Science passionate individual. Thriving to take
            challenges and solving complex problems. Skilled in C, C++, SQL,
            HTML, CSS, JavaScript, NodeJs, ExpressJs, ReactJs, Redux, Hooks,
            MongoDB, Firebase, etc. Pursuing Engineering.
          </p>
        </div>
        <div className="social">
          <div className="social-head">
            <h1>Social</h1>
          </div>
          <div className="social-icons fa-lg">
            <a href="https://www.linkedin.com/in/ceosss/" target="blank">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/ceosss/" target="blank">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/ceo.sss/" target="blank">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.facebook.com/swarajsamantsingh/"
              target="blank"
            >
              <i className="fab fa-facebook-square fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
