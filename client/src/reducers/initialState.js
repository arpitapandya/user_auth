const initialState = {
  auth: {
    user: {},
    isLoggedIn: false,
    error: null,
    isChangePassword: false,
    isChangePasswordError: null,
    isChangePasswordApiHit: false,
  },
  users: [],
};

export default initialState;
