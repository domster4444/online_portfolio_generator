import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { loginUser } from 'library/common/components/stateSlices/loginSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const { status, loggedInUser, error } = useSelector(
    (state: RootStateOrAny) => state.login
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),

    onSubmit: (values) => {
      // @ts-ignore: Unreachable code error
      dispatch(loginUser(values));
    },
  });

  if (loggedInUser) {
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    navigate('/welcome');
  }
  return (
    <section id="register-form">
      <header>
        <h1>Login</h1>
      </header>
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit">Login</button>
        {status === 'loading' ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}

        <a href="http://localhost:3000/passwordresetformemail">
          reset password
        </a>
      </form>
    </section>
  );
};

export default Login;
