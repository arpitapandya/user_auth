import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {},
        isLoggedIn: false,
        error: null,
        isChangePassword: false,
        isChangePasswordError: null,
        isChangePasswordApiHit: false,
      },
      users: [],
    });
  });
 
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}>
        <Home />
      </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


