import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

import Explore from "../pages/Explore";
import Profile from "../pages/Profile";

const Main = () => {
  return (
    <div className="bg-[#43474a] overflow-y-scroll  w-full rounded-lg ">
      <NavBar  />

      <Switch>
        <Route exact path="/main">
          <Home />
        </Route>
        <Route exact path="/main/explore">
          <Explore />
        </Route>
        <Route exact path="/main/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  ); //lg:w-80 shadow-xl shadow-[#eeeeee]
};

export default Main;
