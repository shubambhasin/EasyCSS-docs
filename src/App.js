import React from "react";
import { Route, Switch } from "react-router";
import Docs from "./components/Docs";
import Avatar from "./components/library/Avatar";
import Sidebar from "./components/Sidebar";
import "./style.css";

function App() {
  return (
    <div className="App">
      <>
        <Sidebar />
        <Switch>
          <Route path="/abc" exact component={Docs}/>
          <Route path="/avatar" exact component={Avatar}/>
        </Switch>
      </>
    </div>
  );
}

export default App;
