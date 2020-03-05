import React from "react";
//import moment from "moment";
import "./App.css";
import AuthForm from "./pages/authorization/Authorization";
// import Summary from "./components/Summary";
import CalcForm from "./components/calcForm/CalcFormContainer";
import DashboardContainer from "./components/dashboard/DashboardContainer";

function App() {
  return (
    <CalcForm />
    //<Summary />
    // <AuthForm />
    // <DashboardContainer />
  );
}

export default App;
