import React from "react";

import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import UserScreen from "./UserScreen";
import AdminScreen from "./AdminScreen";
import Header from "./Header";

const SelectScreen = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Header" component={Header}></Route>
        <Route path="/UserScreen" strict component={UserScreen}></Route>
        <Route path="/AdminScreen" exact component={AdminScreen}></Route>
      </Switch>
    </div>
  );
};

export default SelectScreen;
