import * as types from './actionTypes';

export const getAllUsers = payload => {
  return {
    type: types.GET_ALL_USERS_SUCCESS,
    payload,
  };
};

export const getAllUsersFailure = payload => {
  return {
    type: types.GET_ALL_USERS_FAILURE,
    payload,
  };
};

export const startChangePassword = () => {
  return {
    type: types.CHANGE_PASSWORD_START,
  }
}

export const changePasswordSuccess = payload => {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
    payload,
  };
};

export const changePasswordFailure = payload => {
  return {
    type: types.CHANGE_PASSWORD_FAILURE,
    payload,
  };
};

