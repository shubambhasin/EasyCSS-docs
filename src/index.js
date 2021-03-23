import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/sidebarContext";
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
