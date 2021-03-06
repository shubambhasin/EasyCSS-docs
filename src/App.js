import React from "react";
import { Route, Switch } from "react-router";
import Docs from "./components/Docs";
import { HomePage } from "./components/HomePage";
import Alert from "./components/library/Alert";
import Avatar from "./components/library/Avatar";
import Badge from "./components/library/Badge";
import { Buttons } from "./components/library/Buttons";
import Card from "./components/library/Card";
import Grid from "./components/library/Grid";
import Image from "./components/library/Image";
import Input from "./components/library/Input";
import Lists from "./components/library/Lists";
import Modal from "./components/library/Modal";
import Navigation from "./components/library/Navigation";
import Ratings from "./components/library/Ratings";
import TextUtils from "./components/library/TextUtils";
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
          <Route path="/badge" exact component={Badge}/>
          <Route path="/card" exact component={Card}/>
          <Route path="/docs" exact component={Docs}/>
          <Route path="/navigation" exact component={Navigation}/>
          <Route path="/ratings" exact component={Ratings}/>
          <Route path="/images" exact component={Image}/>
          <Route path="/text-utilities" exact component={TextUtils}/>
          <Route path="/input" exact component={Input}/>
          <Route path="/simplified-grids" exact component={Grid}/>
          <Route path="/lists" exact component={Lists}/>
          <Route path="/modal" exact component={Modal}/>

        </Switch>
      </>
    </div>
  );
}

export default App;
