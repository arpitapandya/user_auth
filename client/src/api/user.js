import request from './request';

export const users = (successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/users',
        successAction,
        failureAction,
        opts: {
          method: 'GET',
        },
      }),
    );
  };
};


export const changePassword = (successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'user/change-password',
        successAction,
        failureAction,
        opts: {
          method: 'GET',
        },
      }),
    );
  };
};

export const changePasswordAdmin = (data, successAction, failureAction) => {
  return dispatch => {
    dispatch(
      request({
        path: 'admin/change-password',
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
