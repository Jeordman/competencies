import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginSignup from "./Components/loginSignup/LoginSignup";
import ToDo from "./Components/toDo/ToDo";
import ListItem from './Components/listItem/ListItem'
//import components here

export default (
  <Switch>
    <Route path='/listItem/:id' component={ListItem}/>
    <Route exact path="/" component={LoginSignup} />
    <Route exact path="/todo" component={ToDo} />
  </Switch>
);
