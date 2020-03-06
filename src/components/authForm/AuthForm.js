import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import * as authOperations from "../../redux/auth/authOperations";
import * as authSelectors from "../../redux/auth/authSelectors";
import * as opacityTransition from "../../transitions/opacityTransition.module.css";
import css from "./AuthForm.module.css";

// default authorization action

const actions = {
  login: "Вход",
  signup: "Регистрация"
};

// active enter-button styles

const activeActionLogin = activeAction => {
  if (activeAction === actions.login)
    return {
      color: "#fc842c",
      borderColor: "#fc842c"
    };
};

const activeActionSignup = activeAction => {
  if (activeAction === actions.signup)
    return {
      color: "#fc842c",
      borderColor: "#fc842c"
    };
};

// testing

const test = {
  isLatin: value => new RegExp("^[a-zA-Z0-9]+$").test(value), // regLatin = new RegExp('^[a-zA-Z0-9]+$');
  isTrueSimbols: value => new RegExp(`^[0-9]`).test(value) // regFirstNum = new RegExp(`^[0-9]`);
};

const getLoginError = login => {
  if (test.isTrueSimbols(login) && login.length >= 0)
    return "Логин не может начинаться с цифры.";
  else if (!test.isLatin(login) && login.length >= 0)
    return "Логин не может содержать кириллицу и спец символы.";
  else if (login.length >= 0 && login.length < 5)
    return "Логин должен состоять минимум из 5 знаков.";
  else if (login.length >= 0 && login.length > 16)
    return "Логин должен состоять максимум из 16 символов.";
  else return null;
};

const getPasswordError = password => {
  if (test.isTrueSimbols(password) && password.length >= 0)
    return "Пароль не может начинаться с цифры.";
  else if (!test.isLatin(password) && password.length >= 0)
    return "Пароль не может содержать кириллицу и спец символы.";
  else if (password.length >= 0 && password.length < 5)
    return "Пароль должен состоять минимум из 5 знаков.";
  else if (password.length >= 0 && password.length > 16)
    return "Пароль должен состоять максимум из 16 символов.";
  else return null;
};

const getRequestError = (action, error) => {
  if (action === actions.login && error !== null && error.status === 400)
    return (
      (error.data.err === "User doesnt exist" ||
        error.data.err === "Password is invalid") &&
      "Неправильный пароль или логин!"
    );

  if (action === actions.signup && error !== null && error.status === 400)
    return (
      error.data.message === "nickname already exist" &&
      "Этот логин уже используеться!"
    );
};

// default state

const INITIAL_STATE = {
  action: actions.login,
  login: "",
  password: "",
  isErrorVisible: false,
  errorMsg: null
};

// component
class AuthForm extends Component {
  state = { ...INITIAL_STATE };

  componentDidUpdate(_, prevState) {
    if (prevState.isErrorVisible === true) {
      // if (prevState.isErrorVisible === false) return;
      // else
      setTimeout(() => this.setState({ isErrorVisible: false }), 7000);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onLogin, onSignup, error } = this.props;
    const { login, password, action } = this.state;

    if (getLoginError(login)) {
      this.setState({
        isErrorVisible: true,
        errorMsg: getLoginError(login)
      });
    } else if (getPasswordError(password)) {
      this.setState({
        isErrorVisible: true,
        errorMsg: getPasswordError(password)
      });
    } else this.setState({ isErrorVisible: false, errorMsg: null });

    if (!getLoginError(login) && !getPasswordError(password)) {
      action === actions.login && onLogin({ nickname: login, password });
      action === actions.signup && onSignup({ nickname: login, password });

      getRequestError(action, error) &&
        this.setState({
          isErrorVisible: true,
          errorMsg: getRequestError(action, error)
        });

      e.target.elements[0].value = "";
      e.target.elements[1].value = "";
    }
  };

  handleClick = e => {
    this.setState({ action: e.target.name });
  };

  render() {
    const { action, isErrorVisible, errorMsg } = this.state;
    const { loading } = this.props;
    const changeLogin = activeActionLogin(action);
    const changeSignup = activeActionSignup(action);
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button
            style={changeLogin}
            className={css.entryBtn}
            type="button"
            name={actions.login}
            onClick={this.handleClick}
          >
            {actions.login}
          </button>
          <span className={css.entryBtn}> / </span>
          <button
            style={changeSignup}
            className={css.entryBtn}
            type="button"
            name={actions.signup}
            onClick={this.handleClick}
          >
            {actions.signup}
          </button>
          <input
            type="text"
            name="login"
            onChange={this.handleChange}
            placeholder="Логин *"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Пароль *"
          />
          <CSSTransition
            in={isErrorVisible}
            timeout={700}
            classNames={opacityTransition}
            unmountOnExit
          >
            <p className={css.errorNotification}>{errorMsg}</p>
          </CSSTransition>

          <button type="submit" name={action} className={css.submitBtn}>
            {action}
          </button>
        </form>
        {loading && (
          <h2 style={{ color: "red", padding: "20px 20px" }}>Loading...</h2>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
  authenticated: authSelectors.getIsAuthenticated(state),
  loading: authSelectors.getIsLoading(state)
});

const mapDispatchToProps = {
  onLogin: authOperations.login,
  onSignup: authOperations.signup,
  onLogout: authOperations.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
