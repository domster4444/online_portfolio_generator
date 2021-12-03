/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
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
  const { status, passwordReset, error } = useSelector(
    (state: any) => state.passwordResetPassword
  );

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Please enter your password'),
    }),
    onSubmit: (values) => {
      const { password } = values;
      dispatch(
        // @ts-ignore
        sendNewPassword({
          password,
          token: match.params.token,
        })
      );
    },
  });
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
            type="password"
            {...formik.getFieldProps('email')}
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
