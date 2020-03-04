import  React, {lazy } from "react";
import { Switch, Route } from "react-router-dom";
// import Summary from "./components/summary/Summary";
import HomePage from "./components/homePage/HomePage";
import Dashboard from "./components/dashboard/DashboardContainer";
// import Summary from "./components/summary/Summary";
// import CalcForm from "./components/calcForm/CalcFormContainer";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
      {/* <Summary /> */}
      {/* <CalcForm /> */}

      {/* <Switch><Route exact path="/" component={Home} /></Switch> */}
      <Dashboard />
    </>
  );
}

export default App;
