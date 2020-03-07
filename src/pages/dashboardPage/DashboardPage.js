import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Diary from "../../components/diary-block/DiaryBlock";
import CalcForm from "../../components/calcForm/CalcFormContainer";
import Achievements from "../../components/achievements/Achievements";
import styles from "./DashboardPage.module.css";

class DashboardContainer extends Component {
  render() {
    return (
      <>
        <div className={styles.DashboardContainer}>
          <Switch>
            <Route path="/diary" component={Diary} />
            <Route path="/calculator" component={CalcForm} />
            <Route
              path="/achievements"
              component={Achievements}
            />

            {/* <Route
              path="/achievements"
              render={props => (
                <Summary>
                  <Achievements {...props} isMobile={isMobile} />
                </Summary>
              )}
            /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default DashboardContainer;
