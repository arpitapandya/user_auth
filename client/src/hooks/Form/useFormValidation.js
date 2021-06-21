import { useState, useEffect } from 'react';
import validate from 'validates/validateForm';

function useFormValidation(initialValues, submitForm) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        submitForm();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting, errors, submitForm]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleBlur(event) {
    const validateInputField = {
      [event.target.name]: event.target.name,
    };
    const validateErrors = validate(values, errors, validateInputField);
    setErrors(validateErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validateErrors = validate(values, errors, initialValues);
    setErrors(validateErrors);
    setIsSubmitting(true);
  }

  return {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
