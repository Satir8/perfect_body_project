import React from "react";
// import moment from "moment";
import "./App.css";
import {Loader} from "./components/loader/Loader";
import ModalWindow from "./components/modalWindow/ModalWindow";
import Summary from "./components/Summary";
import CalcForm from "./components/calcForm/CalcForm";

const state = {
  products: [
    { id: 1, name: "Мучные продукты" },
    { id: 2, name: "Молоко" },
    { id: 3, name: "Красное мясо" },
    { id: 4, name: "Копченности" }
  ],
  summCalories: 2800,
  btnStartBurn: "Начать худеть"
};

function App() {
  return (
    <>
      <Loader />
      <CalcForm />
      <ModalWindow state={state} />
      <Summary />
    </>
  );
}

export default App;
