import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
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
      console.log(values);
    },
  });
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
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Login;
