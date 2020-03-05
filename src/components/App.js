import React, { Component } from 'react';
import Header from './header/Header';
import { Switch, Route } from 'react-router-dom';
import NavPage from '../pages/navPage/NavPage';
import Achievements from './achievements/Achievements';
import CalcForm from './calcForm/CalcForm';

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
    const { isMobile, isTablet, isDesktop } = this.state
    return (
      <>
        <Header isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
        <Switch>
          <Route exact path='/' component={CalcForm} />
          <Route path='/nav' component={NavPage} />
          <Route
            path='/authorization'
            component={() => <div>Login/Signup</div>}
          />
          <Route path='/achievements' render={props => <Achievements {...props} isMobile={isMobile} />} />
        </Switch>
      </>
    );
  }
}

export default App;
