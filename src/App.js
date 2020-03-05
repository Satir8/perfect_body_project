import React, { lazy } from "react";
// import { Switch, Route } from "react-router-dom";
// import HomePage from "./pages/homePage/HomePage";
// import ModalWindow from "./components/modalWindow/ModalWindow";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <HomePage /> */}
      <DashboardPage />
      {/* <ModalWindow state={state} /> */}
    </>
  );
};

export default App;
