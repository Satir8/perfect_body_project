import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
// import DashboardPage from "./pages/dashboardPage/DashboardPage";
import Summary from "./components/summary/Summary";
// import CalcForm from "./components/calcForm/CalcFormContainer";
import ModalWindow from "./components/modalWindow/ModalWindow";
import "./App.css";
import ModalLogout from "./components/modalLogout/modalLogout.jsx"

// console.log(moment().format());


const state = {
  products: 
  [{id: 1, name: "banana"},
  {id: 2, name: "banana"},
  {id: 3, name: "banana"},
  {id: 4, name: "banana"},
  {id: 5, name: "banana"},
  {id: 6, name: "banana"},
],
  summCalories: 2000,
}

const App = () => {
  return (
    <>
      <HomePage />
      <Summary />
      <ModalWindow state={state}/>
      <ModalLogout/>
      
    </>
  );
};

export default App;
