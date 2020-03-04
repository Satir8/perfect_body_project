import React from "react";
import moment from "moment";
import "./App.css";
import Auth from "./pages/authorization/Authorization";
import Summary from "./components/Summary";
import CalcForm from "./components/calcForm/CalcForm";

function App() {
  return (
    <>
      {/* <CalcForm /> */}
      <Summary />
      <Auth />
    </>
  );
}

export default App;
