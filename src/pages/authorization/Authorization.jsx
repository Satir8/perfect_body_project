import React, { Component } from "react";
import AuthForm from "../../components/authForm/AuthForm";
import css from "./Authorization.module.css";

class AuthPage extends Component {

  componentDidMount() {
    this.props.authenticated && this.props.history.replace("/");
  }

  componentDidUpdate() {
    this.props.authenticated && this.props.history.replace("/");
  }

  render() {
    return (
      <div className={css.pageWrapper}>
        <AuthForm />
      </div>
    );
  }
}

export default AuthPage;
