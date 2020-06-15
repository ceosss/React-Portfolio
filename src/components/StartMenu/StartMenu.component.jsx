import React, { useState, useEffect } from "react";

import Logo from "./newstrtbtn.png";

import "./StartMenu.styles.css";

const StartMenu = ({ handleToggle }) => {
  const [time, setTime] = useState({ time: null, checkTime: null });

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      setTime({
        ...time,
        time: `${hour} : ${min}`,
        checkTime: `${hour} : ${min} : ${sec}`,
      });

      // console.log(time.checkTime);
    }, 3000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="task-bar">
      <div className="start-menu"></div>
      <div className="bar-holder">
        <div className="bar">
          <img src={Logo} alt="start-btn" onClick={handleToggle} />
          <div className="time">
            <p>{time.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
