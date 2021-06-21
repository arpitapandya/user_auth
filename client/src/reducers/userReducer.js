import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default function users(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_ALL_USERS_SUCCESS:
      return [...action.payload.users];
    case types.GET_ALL_USERS_FAILURE:
      return [...state];
    default:
      return state;
  }
}
