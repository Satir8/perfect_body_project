import { React, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/DashboardContainer";
import Summary from "./components/summary/Summary";
import CalcForm from "./components/calcForm/CalcFormContainer";

function App() {
  return (
    <>
      <CalcForm />

      <Switch>{/* <Route exact path="/" component={Home} /> */}</Switch>
      <Dashboard />
    </>
  );
}

export default App;
