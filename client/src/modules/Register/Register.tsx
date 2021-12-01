import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
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
      console.log(values);
    },
  });
  return (
    <section id="register-form">
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
      </form>
    </section>
  );
};

export default Register;
