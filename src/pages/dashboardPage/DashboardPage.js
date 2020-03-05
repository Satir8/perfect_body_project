import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
import Summary from "../../components/summary/Summary";
import diaryComp from "../../components/diary/diaryComp";
import calcForm from "../../components/calcForm/CalcFormContainer";
import Achievements from "../../components/achievements/Achievements";

class DashboardContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route path="/diary" component={diaryComp} />
          <Route path="/calculator" component={calcForm} />
          <Route
            path="/achievements"
            render={props => <Achievements {...props} />}
          />
        </Switch>
        {/* <Summary /> */}
      </>
    );
  }
}

export default DashboardContainer;
