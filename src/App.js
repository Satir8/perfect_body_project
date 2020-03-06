import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as authOperations from "./redux/auth/authOperations";

// import moment from "moment";
import "./App.css";
import Auth from "./pages/authorization/Authorization";
// import Summary from "./components/Summary";
// import CalcForm from "./components/calcForm/CalcForm";

class App extends Component {
  componentDidMount() {
    this.props.refreshUser()
  }

  render() {
    return (
      <>
      {/* <CalcForm /> */}
      {/* <Summary /> */}
      <Auth />
    </>
    );
  }
}


const mapDispatchToProps = {
  refreshUser: authOperations.refreshUser 
}


export default connect(null, mapDispatchToProps)(App);
