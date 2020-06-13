import React from "react";

import HeaderSidebar from "./containers//HeaderSidebar/HeaderSidebar.container.jsx";
// import Header from "./components/Header/Header.component.jsx";
// import Sidebar from "./components/Sidebar/Sidebar.component.jsx";

import "./App.css";

function App() {
  return (
    <div>
      {/* <Route exact path="/" component={HeaderSidebar} /> */}
      <HeaderSidebar />
    </div>
  );
}

export default App;
