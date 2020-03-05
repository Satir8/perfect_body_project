import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
import Summary from "../../components/summary/Summary";
import Diary from "../../components/diary-block/DiaryBlock";
import CalcForm from "../../components/calcForm/CalcFormContainer";
import Achievements from "../../components/achievements/Achievements";

class DashboardContainer extends Component {
  // state = {};
  render() {
    const { isMobile } = this.props;
    return (
      <>
        <Switch>
          <Route path="/diary" component={Diary} />
          {/* <Route path="/calculator" component={calcForm} /> */}
          <Route
            path="/calculator"
            render={props => (
              <Summary>
                <CalcForm {...props} />
              </Summary>
            )}
          />
          <Route
            path="/achievements"
            render={props => (
              <Summary>
                <Achievements {...props} isMobile={isMobile} />
              </Summary>
            )}
          />
        </Switch>
      </>
    );
  }
}

export default DashboardContainer;
