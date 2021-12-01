import React from 'react';
import { useFormik } from 'formik';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
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
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
