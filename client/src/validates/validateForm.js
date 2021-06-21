export default function validateAuth(values, initialErrors, inputFields) {
  const errors = { ...initialErrors };
  let error = null;
  if (inputFields.username || inputFields.username === '') {
    error = validateUserName(values);
    if (error) {
      errors.username = error;
    } else {
      delete errors.username;
    }
  }

  if (inputFields.password || inputFields.password === '') {
    error = validatePassword(values);
    if (error) {
      errors.password = error;
    } else {
      delete errors.password;
    }
  }

  return errors;
}

function validateUserName(values) {
  let error = null;
  if (!values.username) {
    error = 'Please enter your username';
  }
  return error;
}

function validatePassword(values) {
  let error = null;
  if (!values.password) {
    error = 'Please enter your password.';
  } else if (values.password.length < 8) {
    error = 'Password must be at least 8 characters';
  }
  return error;
}
