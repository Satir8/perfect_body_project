import React, { Component } from "react";
import Header from "./header/Header";
import { Switch, Route } from "react-router-dom";
import NavPage from "../pages/navPage/NavPage";
import HomePage from "../pages/homePage/HomePage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import AuthorizationPage from "../pages/authorization/Authorization";

class App extends Component {
  state = {
    isMobile: false,
    isTablet: false,
    isDesktop: false
  };

  componentDidMount() {
    this.checkScreenWidth();
  }

  checkScreenWidth = () => {
    if (window.innerWidth < 768) {
      this.setState({
        isMobile: true,
        isTablet: false,
        isDesktop: false
      });
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.setState({
        isTablet: true,
        isMobile: false,
        isDesktop: false
      });
    } else {
      this.setState({
        isDesktop: true,
        isMobile: false,
        isTablet: false
      });
    }
  };

  render() {
    const { isMobile, isTablet, isDesktop } = this.state;
    return (
      <>
        <Header isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
        <DashboardPage isMobile={isMobile} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/nav" component={NavPage} />
          <Route path="/authorization" component={AuthorizationPage} />
        </Switch>
      </>
    );
  }
}

export default App;
