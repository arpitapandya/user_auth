import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from 'actions/auth';

import './styles.scss';


function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const logoutUser = () => {
    dispatch(logout());
  }
  return (
    <div className='header'>
      <div className='title'>AUTH APP</div>
      {isLoggedIn && (
        <div className='logout' onClick={logoutUser}>Logout</div>
      )}
    </div>
  );
}
export default Header;
