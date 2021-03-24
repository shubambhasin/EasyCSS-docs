import React, { useContext, useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);
export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  const [brand, setBrand] = useState(true);
  const [star, setStar] = useState(true);

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar, brand, setBrand, star, setStar }}>
      {children}
    </SidebarContext.Provider>
  );
};
