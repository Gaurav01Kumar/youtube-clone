import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
const App = () => {
  return (
    <div className="">
      <Header />
      <div className="fixed top-16 left-0 sm:max-w-[240px] h-full ">
        <Sidebar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
