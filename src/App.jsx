import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { SidebarToogleProvider } from "./context/SidebarContext";
const App = () => {
  return (
    <SidebarToogleProvider>
      <div className="">
        <Header />

        <Sidebar />

        <main>
          <Outlet />
        </main>
      </div>
    </SidebarToogleProvider>
  );
};

export default App;
