import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
// import Summary from "./components/summary/Summary";
import Dashboard from "./components/dashboard/DashboardContainer";
import Summary from "./components/summary/Summary";
// import CalcForm from "./components/calcForm/CalcFormContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <HomePage />
      <Summary />
    </>
  );
};

export default App;
