import React from "react";
import CalcForm from "../calcForm/CalcFormContainer";
import logo from "../../images/img/logo.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <div className="homePageHeader">
        <img src={logo} alt="header" width="320" height="80" />
      </div>
      <div className="homePageBody">
        <CalcForm />
      </div>
    </div>
  );
};

export default HomePage;
