import React, { Component } from "react";
// import Header from "../../components/header/Header"
import logo from "../../images/header_desktop.jpg";
// import { connect } from "react-redux";
// import Summary from "../../components/summary/Summary";
import "./DashboardPage.css";

class DashboardContainer extends Component {
  state = {
    isCalc: true,
    isDiary: true,
    isAchivements: true
  };
  render() {
    const { isCalc } = this.state
    return (
      <>
      {/* <Header /> */}
        <div className="dashboardPageBody">
          {isCalc && <div className="calcForm">Форма/Достижения</div>}
          <div className="summary">
            <div>Общая статистика</div>
            </div>
        </div>
      </>
    );
  }
}

export default DashboardContainer;
