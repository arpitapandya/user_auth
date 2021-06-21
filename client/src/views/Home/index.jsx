/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {changePasswordAdmin} from 'api/user'
import { changePasswordSuccess, changePasswordFailure, startChangePassword } from 'actions/user';


import './styles.scss';

function Home(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.auth.user);

  const [password, setPassword] = useState('');
  const [isSubmit, setSubmit] = useState(false);

  useEffect(() => {
    if (!auth.isChangePasswordApiHit && isSubmit) {
      if (auth.isChangePasswordError) {
        alert(auth.isChangePasswordError)
      } else {
        alert('Password Changed Successfully');
        setPassword('');
      }
      setSubmit(false)
    }
  }, [auth.isChangePassword, auth.isChangePasswordApiHit, auth.isChangePasswordError])

  const displayUser = props?.location?.state ? props?.location?.state : user;

  const updatePassword = () => {
    const data = {
      newPassword: password,
      username: displayUser.username,
    }
    setSubmit(true);
    dispatch(startChangePassword());
    dispatch(changePasswordAdmin(data, changePasswordSuccess, changePasswordFailure));
  }

  return (
    <div className='home_banner'>
      <div className='details'>USER NAME: {displayUser?.username}</div>
      <div className='details'>USER AGE: {displayUser?.age}</div>

      {user.role === 'admin' && (
        <>
          <div className='input_banner'>
            <label htmlFor='password'>Password (8 or more characters)</label>
            <input
              name='password'
              type='password'
              value={password}
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='btn_banner'>
            <button disabled={!password} type='button' onClick={updatePassword}>
              Change Password
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default Home;
