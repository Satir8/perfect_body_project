import axios from 'axios'
import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError
} from "./authActions";

export const login = credential => dispatch => {
  dispatch(loginRequest());

  axios.post("https://slim-moms.goit.co.ua/api/v1/login", credential, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(error => dispatch(loginError(error)))
};

export const signup = credential => dispatch => {
  dispatch(signupRequest());

  axios.post("https://slim-moms.goit.co.ua/api/v1/register", credential, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => dispatch(signupSuccess(response.data)))
    .catch(error => dispatch(signupError(error)))
};

export const logout = () => dispatch => dispatch(logout());