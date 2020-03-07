import React, { Component, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavPage from "../pages/navPage/NavPage";
import HomePage from "../pages/homePage/HomePage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import AuthorizationPage from "../pages/authorization/Authorization";
import Header from "./header/Header";
import * as authOperations from "../redux/auth/authOperations";

export const appContext = createContext();

class App extends Component {
  state = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    showExitModal: false
  };

  componentDidMount() {
    this.checkScreenWidth();
    this.props.refreshUser();
    !this.props.authenticated && this.props.history.push("/");
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

  openExitModal = () => {
    this.setState({showExitModal: true})
  }

  closeModal = () => {
    this.setState({showExitModal: false});
  };

  render() {
    const { isMobile, isTablet, isDesktop, showExitModal } = this.state;
    return (
      <appContext.Provider value={{isMobile, isTablet, isDesktop, showExitModal, openExitModal: this.openExitModal, closeModal: this.closeModal}}>
        <Header />
        <DashboardPage isMobile={isMobile} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/nav" render={props => <NavPage {...props} isMobile={isMobile} isDesktop={isDesktop} />} />
          <Route path="/authorization" component={AuthorizationPage} />
          {!this.props.auth && <Redirect to="/authorization" />}
        </Switch>
      </appContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.session.authenticated
});

const mapDispatchToProps = {
  refreshUser: authOperations.refreshUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
