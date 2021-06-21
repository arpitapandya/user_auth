import { combineReducers } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import auth from './authReducer';
import users from './userReducer';

const { routerReducer } = createReduxHistoryContext({
  history: createHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  auth,
  users,
});

export default rootReducer;
