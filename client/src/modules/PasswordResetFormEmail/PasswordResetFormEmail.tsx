/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { sendPasswordResetEmail } from 'library/common/components/stateSlices/passwordResetEmailSlice';

const PasswordResetFormEmail = () => {
  const { status, emailSentSuccess, error } = useSelector(
    (state: any) => state.passwordResetEmail
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
    }),
    onSubmit: (values) => {
      // disable ts for below line to avoid error
      // @ts-ignore
      dispatch(sendPasswordResetEmail(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {emailSentSuccess && <div>{emailSentSuccess.message}</div>}
      {error && <div>{error}</div>}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit">Submit</button>
      {status === 'loading' ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : null}
    </form>
  );
};
export default PasswordResetFormEmail;
