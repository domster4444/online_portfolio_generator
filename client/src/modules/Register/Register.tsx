import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'library/common/components/stateSlices/registerSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, userRegistered, error } = useSelector(
    (state: RootStateOrAny) => state.register
  );

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, 'must be less than 20 character')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'must be less than 20 character')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),

    onSubmit: (values) => {
      // @ts-ignore: Unreachable code error
      dispatch(registerUser(values));
    },
  });

  if (userRegistered) {
    navigate('/login');
  }

  return (
    <section id="register-form">
      <header>
        <h1>Register</h1>
      </header>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="firstName"
          {...formik.getFieldProps('firstName')}
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <p className="error">{formik.errors.firstName}</p>
        ) : null}
        <br />
        <input
          type="text"
          id="lastName"
          {...formik.getFieldProps('lastName')}
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <p className="error">{formik.errors.lastName}</p>
        ) : null}
        <br />
        <input type="email" id="email" {...formik.getFieldProps('email')} />
        {formik.errors.email && formik.touched.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
        <br />
        <input
          type="password"
          id="password"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null}
        <br />
        <button type="submit">Register</button>
        {status === 'loading' ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default Register;
