import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
// import DashboardPage from "./pages/dashboardPage/DashboardPage";
// import Summary from "./components/summary/Summary";
// import CalcForm from "./components/calcForm/CalcFormContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <HomePage />
      {/* <Summary /> */}
    </>
  );
};

export default App;
