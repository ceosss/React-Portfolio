import React, { useState } from "react";

import Header from "./../../components/Header/Header.component";
import Sidebar from "./../../components/Sidebar/Sidebar.component";
import StartMenu from "./../../components/StartMenu/StartMenu.component";

const HeaderSidebar = () => {
  const [hide, toggleHide] = useState(true); //true
  const handleToggle = () => {
    toggleHide(!hide);
  };
  return (
    <div>
      <Header />
      <Sidebar hide={hide} />
      <StartMenu handleToggle={handleToggle} />
    </div>
  );
};

export default HeaderSidebar;
