import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginSignup from "./Components/loginSignup/LoginSignup";
import ToDo from "./Components/toDo/ToDo";
//import components here

export default (
  <Switch>
    <Route exact path="/" component={LoginSignup} />
    <Route exact path="/todo" component={ToDo} />
  </Switch>
);
