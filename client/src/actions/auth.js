import * as types from './actionTypes';

export const signupSuccess = payload => {
  return dispatch => {
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload,
    });
  };
};

export const signupFailure = payload => {
  return {
    type: types.SIGNUP_FAILURE,
    payload,
  };
};

export const signinSuccess = payload => {
  return dispatch => {
    dispatch({
      type: types.SIGNIN_SUCCESS,
      payload,
    });
  };
};

export const signinFailure = payload => {
  return {
    type: types.SIGNIN_FAILURE,
    payload,
  };
};

export const authenticateUser = payload => {
  return dispatch => {
    dispatch({
      type: types.AUTHENTICATE_USER,
      payload,
    });
  };
};

export const unAuthenticateUser = payload => {
  return {
    type: types.UN_AUTHENTICATE_USER,
    payload,
  };
};


export const logout = () => {
  return {
    type: types.LOGOUT,
  }
};
