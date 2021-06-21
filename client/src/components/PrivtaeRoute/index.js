import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  if (isPrivate && !localStorage.getItem('taskerToken')) {
    return <Redirect from={rest.path} to='/signup' />;
  }
  return <Route {...rest} component={Component} />;
}
