import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
