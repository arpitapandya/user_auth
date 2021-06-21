import { lazy } from 'react';

const Login = lazy(() => import('views/Auth/login'));
const SignUp = lazy(() => import('views/SignUp'));
const Home = lazy(() => import('views/Home'));
const UserList = lazy(() => import('views/UserList'))

const appRoutes = [
  {
    path: '/',
    component: Home,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/user-list',
    component: UserList,
    isPrivate: true,
    isAdmin: true,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
  },
];

export default appRoutes;
