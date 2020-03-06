import React, { Component } from "react";
import { connect } from "react-redux";
import * as authSelectors from '../../redux/auth/authSelectors'

const WithAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    componentDidMount() {
      this.props.authenticated && this.props.history.replace("/diary");
      !this.props.authenticated && this.props.history.push("/login");
    }

    componentDidUpdate() {
      this.props.authenticated && this.props.history.replace("/diary");
      !this.props.authenticated && this.props.history.push("/login");
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
      authenticated: authSelectors.getIsAuthenticated(state)
  })
  
  return connect(mapStateToProps)(WithAuthRedirect)
  
};

export default WithAuthRedirect;
