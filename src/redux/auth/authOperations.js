import axios from 'axios'
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
import {getToken} from './authSelectors'

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

export const refreshUser = (credential, getState) => dispatch => {
  const token = getToken(getState())

  if(!token) return

  const options = {headers: {Autorization: token}}

  axios.get("/user", options, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => console.log(response))
  // dispatch(refreshUserRequest());

  // axios.get("/user", credential, {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(response => dispatch(refreshUserSuccess(response.data)))
  //   .catch(error => dispatch(authError(error.response)))
  //   .finally(()=>dispatch(refreshUserRequest()))
};

export const logout = () => dispatch => dispatch(logOut()); 