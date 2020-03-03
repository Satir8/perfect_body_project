import React, { Component } from "react";
import { connect } from "react-redux";
import * as authOperations from "../../redux/auth/authOperations";
import css from "./AuthForm.module.css";

class AuthForm extends Component {

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onLogin, onSignup, actionTitle } = this.props;
    actionTitle === "Вход" ? onLogin({...this.state}) : onSignup(this.state)

    console.log(this.props)


    e.target.elements[0].value = '';
    e.target.elements[1].value = '';
    this.setState({ nickname: "", password: ""});
  };

  render() {
    const {actionTitle} = this.props

    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="nickname"
            onChange={this.handleChange}
            placeholder="Логин*"
          />
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="Пароль*"
          />
          <button type="submit">{actionTitle}</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
  onSignup: authOperations.signup
};

export default connect(null, mapDispatchToProps)(AuthForm);