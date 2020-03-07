import axios from 'axios'
import * as sessionSelectors from './authSelectors'
import {
  loginRequest,
  loginSuccess,
  signupRequest,
  signupSuccess,
  refreshUserRequest,
  refreshUserSuccess,
  authError,
  logOut
} from "./authActions";

axios.defaults.baseURL = "https://slim-moms.goit.co.ua/api/v1";

export const login = credential => dispatch => {
  dispatch(loginRequest());

  axios.post("/login", credential, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(error => dispatch(authError(error.response)))
    .finally(()=>dispatch(loginRequest()))
};

export const signup = credential => dispatch => {
  dispatch(signupRequest());

  axios.post("/register", credential, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => dispatch(signupSuccess(response.data)))
    .catch(error => dispatch(authError(error.response)))
    .finally(()=>dispatch(loginRequest()))
};

export const refreshUser = () => (dispatch, getState) => {
  const token = sessionSelectors.getToken(getState())

  if(!token) return;

  dispatch(refreshUserRequest());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  axios.get( "/user", options )
      .then(response => dispatch(refreshUserSuccess(response.data)))
      .catch(error => dispatch(authError(error.response)))
      .finally(()=>dispatch(refreshUserRequest()))
};

export const logout = () => dispatch => dispatch(logOut());