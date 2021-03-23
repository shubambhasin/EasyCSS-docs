import React, { useContext, useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);
export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
