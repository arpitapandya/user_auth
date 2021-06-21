import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory as createHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers/rootReducer';
import preloadedState from './reducers/initialState';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history: createHistory(),
});

export const configureStore = () => {
  const middlewares = [loggerMiddleware, thunkMiddleware, routerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export const history = createReduxHistory(configureStore());
