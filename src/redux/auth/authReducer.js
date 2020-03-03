import { combineReducers } from "redux";
import authTypes from "./authTypes";

// const session = {
//     user: {},
//     authenticated: false,
//     token: "",
//     error: ""
// }

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload.user;
    case authTypes.SIGNUP_SUCCESS:
      return payload.user;
    case authTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return true;
    case authTypes.SIGNUP_SUCCESS:
      return true;
    case authTypes.LOGOUT:
      return false;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload.user.token;
    case authTypes.SIGNUP_SUCCESS:
      return payload.user.token;
    case authTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  error
});
