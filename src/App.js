import React from "react";
import { Route, Switch } from "react-router";
import Docs from "./components/Docs";
import { HomePage } from "./components/HomePage";
import Alert from "./components/library/Alert";
import Avatar from "./components/library/Avatar";
import { Buttons } from "./components/library/Buttons";
import Card from "./components/library/Card";
import Navigation from "./components/library/Navigation";
import Sidebar from "./components/Sidebar";
// import TopNav from "./components/TopNav";
import "./ease/ease.css"  
import "./style.css"; 


function App() {

  // const [theme, setTheme] = useState("dark")
  // const toggleTheme = () => {

  //   if(theme === "dark") setTheme("light")
  //     else setTheme("dark")
  // }
  return (
    <div className={`App`}>
      
      <>
      <Sidebar />
      
       
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/avatar" exact component={Avatar}/>
          <Route path="/alert" exact component={Alert}/>
          <Route path="/buttons" exact component={Buttons}/>
          <Route path="/card" exact component={Card}/>
          <Route path="/docs" exact component={Docs}/>
          <Route path="/navigation" exact component={Navigation}/>
        </Switch>
      </>
    </div>
  );
}

export default App;
