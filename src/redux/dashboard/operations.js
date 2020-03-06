import axios from "axios";

// import {
//   loginRequest,
//   loginSuccess,
//   loginError,
//   signupRequest,
//   signupSuccess,
//   signupError,
//   refreshRequest,
//   refreshSuccess,
//   refreshError,
//   LogOut
// } from "./dashboardActions";

// axios.defaults.baseURL = "https://slim-moms.goit.co.ua/api/v1";

// // Auth Operations

// const sighUp = ({ nickname, password }) => dispatch => {
//   dispatch(signupRequest());
//   axios
//     .post(" /register", {
//       nickname: nickname,
//       password: password
//     })
//     .then(data => {
//       console.log(data);
//       dispatch(signupSuccess(data));
//     })
//     .catch(error => {
//       console.log(error);
//       dispatch(signupError(error));
//     })
//     .finally(() => dispatch(signupRequest()));
// };

// const login = ({ nickname, password }) => dispatch => {
//   dispatch(loginRequest());
//   axios
//     .post("/login", {
//       nickname: nickname,
//       password: password
//     })
//     .then(data => {
//       console.log(data);
//       dispatch(loginSuccess(data));
//     })
//     .catch(error => {
//       console.log(error);
//       dispatch(loginError(error));
//     })
//     .finally(() => dispatch(loginRequest()));
// };

// const refresh = token => dispatch => {
//   dispatch(refreshRequest());

//   if(!token) return;

  
// };

// const logout = token => dispatch => {
//   axios
//     .post("/logout", {
//       Authorization: `Bearer ${token}`
//     })
//     .then(() => {
//       dispatch(LogOut());
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// // Get Products for select

// const getProducts = () => () => {};
