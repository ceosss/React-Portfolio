import React from "react";

import { Route, Switch } from "react-router-dom";

import OptionLinks from "./../OptionLinks/OptionLinks.component";
import Home from "./../Home/Home.component";
import Experience from "./../Experience/Experience.component";
import Projects from "./../Projects/Projects.component";
import Contact from "./../Contact/Contact.component";
import Blog from "./../Blog/Blog.component";

import "./Sidebar.styles.css";

const Sidebar = ({ hide }) => {
  return (
    <div className="sidebar">
      {hide ? null : (
        <div className="side">
          <div className="options">
            <OptionLinks />
          </div>
        </div>
      )}

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
