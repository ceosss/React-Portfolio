import React, { useState, useEffect } from "react";

import axios from "axios";
import KEYS from "./../../keys";

import Header from "./../../components/Header/Header.component";
import Sidebar from "./../../components/Sidebar/Sidebar.component";

const HeaderSidebar = () => {
  let [imageUrl, setImageUrl] = useState({ url: null });

  useEffect(() => {
    axios.get(`${KEYS.FIREBASE_BASE_URL}/imageUrl.json`).then((response) => {
      setImageUrl({ url: response.data.url });
    });
  }, []);

  return (
    <div>
      <Header />
      <Sidebar imageUrl={imageUrl.url} />
    </div>
  );
};

export default HeaderSidebar;
