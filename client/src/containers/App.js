import React, { Suspense, useEffect } from 'react';
import { Switch, withRouter, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'api/auth';
import { authenticateUser, unAuthenticateUser } from 'actions/auth';
import appRoutes from 'routes/routes';
import RouteWrapper from 'components/PrivtaeRoute';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header/index';
import GenericNotFound from 'views/GenericNotFound'

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loggedInUser = useSelector(state => state.auth.user);

  useEffect(() => {
    if (localStorage.getItem('taskerToken')) {
      dispatch(user(authenticateUser, unAuthenticateUser));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      if (loggedInUser.role === 'admin') {
        history.push('/user-list')        
      } else {
        history.push('/')
      }
    } else {
      history.push('/login')
    }
  }, [isLoggedIn])
  
  const swithRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRoutes.map(route => (
          <RouteWrapper
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Route component={GenericNotFound} />
      </Switch>
    </Suspense>
  );
  return (
    <ErrorBoundary>
      <Header />
      {swithRoutes}
    </ErrorBoundary>
  );
}

export default withRouter(App);
