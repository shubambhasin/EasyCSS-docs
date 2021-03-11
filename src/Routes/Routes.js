import React from "react";
import { Route, Switch } from "react-router";
import Docs from "../components/Docs";
import { Buttons } from "../components/library/Buttons";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/docs" exact component={Docs} />
        <Route path="/buttons" exact component={Buttons}/>
      </Switch>
    </div>
  );
}
