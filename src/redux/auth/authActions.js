import authTypes from './authTypes';

export const loginRequest = () => ({
    type: authTypes.LOGIN_REQUEST
});

export const loginSuccess = ( request ) => ({
    type: authTypes.LOGIN_SUCCESS,
    payload: request 
});

export const loginError = ( error ) => ({
    type: authTypes.LOGIN_ERROR,
    payload: error 
});

export const signupRequest = () => ({
    type: authTypes.SIGNUP_REQUEST
});

export const signupSuccess = ( request ) => ({
    type: authTypes.SIGNUP_SUCCESS,
    payload: request 
});

export const signupError = ( error ) => ({
    type: authTypes.SIGNUP_ERROR,
    payload: error 
});

export const logOut = () => ({
    type: authTypes.LOGOUT,
});