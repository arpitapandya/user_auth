import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      localStorage.setItem('taskerToken', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        error: null,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        error: action.payload,
      };
    case types.SIGNIN_SUCCESS:
      localStorage.setItem('taskerToken', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        error: null,
      };
    case types.SIGNIN_FAILURE:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        error: action.payload,
      };
    case types.AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        error: null,
      };
    case types.UN_AUTHENTICATE_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    case types.LOGOUT:
      localStorage.removeItem('taskerToken');
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        error: null,
      }
    
    case types.CHANGE_PASSWORD_START:
      return {
        ...state,
        isChangePasswordApiHit: true,
        isChangePassword: false,
        error: null,
      }
    
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isChangePassword: true,
        isChangePasswordApiHit: false,
        error: null,
      }
    
    case types.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isChangePassword: false,
        isChangePasswordApiHit: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export const isLoggedIn = state => state.auth.isLoggedIn;
