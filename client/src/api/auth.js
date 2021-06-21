import request from './request';

export const signup = (data, successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/signup',
        successAction,
        failureAction,
        opts: {
          data,
          method: 'POST',
        },
      }),
    );
  };
};

export const signin = (data, successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/login',
        successAction,
        failureAction,
        opts: {
          data,
          method: 'POST',
        },
      }),
    );
  };
};

export const user = (successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user',
        successAction,
        failureAction,
        opts: {
          method: 'GET',
        },
      }),
    );
  };
};
