/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from 'api/auth';
import { signupSuccess, signupFailure } from 'actions/auth';
import useFormValidation from 'hooks/Form/useFormValidation';
import './styles.scss';

const INITAIL_STATE = {
  username: '',
  password: '',
  age: 10,
};

function SignUp() {
  const error = useSelector(state => state.auth.error);
  const [ isAdmin, setIsAdmin ] = useState(false);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormValidation(INITAIL_STATE, authenticateUser);
  const dispatch = useDispatch();

  function authenticateUser() {
    const data = {
      ...values,
      role: isAdmin ? 'admin' : 'user',
    }
    dispatch(signup(data, signupSuccess, signupFailure));
  }

  return (
    <div className='signup_banner'>
      <div className='main_subtitle'>
        Make the most of your professional life
      </div>
      <form autoComplete='off' className='signup_form' onSubmit={handleSubmit}>
        <div className='input_banner'>
          <label htmlFor='username'>User Name</label>
          <input
            name='username'
            type='username'
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.username && 'error-input'}
            autoComplete='none'
          />
          {errors.username && <p className='error-text'>{errors.username}</p>}
        </div>
        <div className='input_banner'>
          <label htmlFor='password'>Password (8 or more characters)</label>
          <input
            name='password'
            type='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.password && 'error-input'}
            autoComplete='off'
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}
        </div>

        <div className='input_banner'>
          <label htmlFor='age'>Age</label>
          <input
            min='1'
            name='age'
            type='number'
            value={values.age}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.age && 'error-input'}
            autoComplete='off'
          />
          {errors.age && <p className='error-text'>{errors.age}</p>}
        </div>

        <label htmlFor='isAdmin'>
          <input type='checkbox'
            defaultChecked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
            className='checkbox'
          />
          Admin
        </label>

        <div className='btn_banner'>
          <button disabled={isSubmitting} type='submit'>
            Join
          </button>
        </div>
        <p className='have_account'>
          Already on AuthApp?{' '}
          <Link to='/login' className='sign_in_link'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
