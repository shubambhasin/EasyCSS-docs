import React from "react";
import { Route, Switch } from "react-router";
import Docs from "./components/Docs";
import { HomePage } from "./components/HomePage";
import Avatar from "./components/library/Avatar";
import { Buttons } from "./components/library/Buttons";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import "./ease/ease.css"  
import "./style.css";


function App() {
  return (
    <div className="App">
      <>
      <Sidebar />
        
       
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/avatar" exact component={Avatar}/>
          <Route path="/buttons" exact component={Buttons}/>
          <Route path="/docs" exact component={Docs}/>
        </Switch>
      </>
    </div>
  );
}

export default App;
