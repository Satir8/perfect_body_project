import React, { Component } from "react";
import AuthForm from "../../components/authForm/AuthForm";
import css from "./Authorization.module.css";

class AuthPage extends Component {
  state = { actionTitle: "Вход" };

  componentDidMount() {
    this.props.authenticated && this.props.history.replace("/");
  }

  componentDidUpdate() {
    this.props.authenticated && this.props.history.replace("/");
  }

  handleClick = e => {
    this.setState({ actionTitle: e.target.name });
  };

  render() {
    const { actionTitle } = this.state;
    return (
      <>
        <button className={css.entry} name="Вход" onClick={this.handleClick}>
          ВХОД
        </button>
        <span className={css.entry}>/</span>
        <button
          className={css.entry}
          name="Регистрация"
          onClick={this.handleClick}
        >
          РЕГИСТРАЦИЯ
        </button>
        <AuthForm actionTitle={actionTitle} />
      </>
    );
  }
}

export default AuthPage;
