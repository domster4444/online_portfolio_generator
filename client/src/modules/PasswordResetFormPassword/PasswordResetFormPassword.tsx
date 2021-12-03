/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { sendNewPassword } from 'library/common/components/stateSlices/passwordResetPasswordSlice';

const PasswordResetFormPassword = ({
  history,
  match,
}: {
  history: any;
  match: any;
}) => {
  const { token } = useParams();
  const { status, passwordReset, error } = useSelector(
    (state: any) => state.passwordResetPassword
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Please enter your password')
        .min(5, 'Must be 5 characters or more'),
    }),
    onSubmit: (values) => {
      alert('submitted');
      console.log(token);
      const { password } = values;
      // @ts-ignore
      dispatch(
        /* @ts-ignore */
        sendNewPassword({
          password,
          token,
        })
      );
    },
  });

  if (passwordReset) {
    alert('Password has been reset');
    console.log(passwordReset);
  }
  return (
    <div>
      <div>
        <h1>Reset Password</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="password">Enter a new password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <small>{formik.errors.password}</small>
          ) : null}
        </div>
        <div>
          <button type="submit">Reset Password</button>
          {status === 'loading' ? (
            <div>
              <span>Loading...</span>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};
export default PasswordResetFormPassword;
