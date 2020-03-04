import React, { Component } from "react";
import { connect } from "react-redux";
import * as authOperations from "../../redux/auth/authOperations";
import css from "./AuthForm.module.css";

class AuthForm extends Component {
  state = { actionTitle: "Вход" };


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onLogin, onSignup } = this.props;
    const { nickname, password, actionTitle } = this.state;
    actionTitle === "Вход" && onLogin({ nickname, password });
    actionTitle === "Регистрация" && onSignup({ nickname, password });

    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    this.setState({ nickname: "", password: "" });
  };

  handleClick = e => {
    this.setState({ actionTitle: e.target.name });
  };

  render() {
    const { actionTitle } = this.state;
    console.dir(this.props)

    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button
            className={css.entryBtn}
            type="button"
            name="Вход"
            onClick={this.handleClick}
          >
            Вход
          </button>
          <span className={css.entryBtn}> / </span>
          <button
            className={css.entryBtn}
            type="button"
            name="Регистрация"
            onClick={this.handleClick}
          >
            Регистрация
          </button>
          <input
            type="text"
            name="nickname"
            onChange={this.handleChange}
            placeholder="Логин *"
          />
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="Пароль *"
          />
          <button type="submit" className={css.submitBtn}>
            {actionTitle}
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
  onSignup: authOperations.signup,
  onLogout: authOperations.logout
};

export default connect(null, mapDispatchToProps)(AuthForm);
