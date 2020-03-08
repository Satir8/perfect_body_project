import React, { Component } from "react";
import { connect } from "react-redux";
import * as authSelectors from "../../redux/auth/authSelectors";

const WithAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    componentDidMount() {
      const { location, history, authenticated } = this.props
      location.pathname === "/diary" && !authenticated && history.replace("/authorization");
      location.pathname === "/authorization" && authenticated && history.replace("/diary");
    }

    componentDidUpdate(prevProps) {

      if(prevProps.authenticated !== this.props.authenticated) {

        const { location, history, authenticated } = this.props;
        location.pathname === "/diary" && !authenticated && history.replace("/authorization");
        location.pathname === "/authorization" && authenticated && history.replace("/diary");

      };

    };

    render() {
      return <BaseComponent {...this.props} />;
    }
  };

  const mapStateToProps = state => ({
    authenticated: authSelectors.getIsAuthenticated(state)
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default WithAuthRedirect;
