import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Router";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
