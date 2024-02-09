import React, { createContext, useState } from "react";
 const SidebarContext = createContext();

  const SidebarToogleProvider = ({ children }) => {
  const [isToggled, setIsToggle] = useState();
  const toggle = () => {
    setIsToggle(!isToggled);
  };
  return (
    <SidebarContext.Provider value={{ isToggled, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export {SidebarContext,SidebarToogleProvider}