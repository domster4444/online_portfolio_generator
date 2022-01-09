/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { HexBase64BinaryEncoding } from 'crypto';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'library/common/components/stateSlices/registerSlice';
import './UploadImg.css';

const Register = () => {
  const [urlState, setUrlState] = useState('');

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
      url: urlState,
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

    onSubmit: async (values) => {
      // @ts-ignore: Unreachable code error
      // eslint-disable-next-line no-param-reassign
      const formData = values;
      formData.url = urlState;
      // @ts-ignore
      dispatch(registerUser(formData));
      console.log('formik value on form submmit', formData);
    },
  });

  if (userRegistered) {
    navigate('/login');
  }

  // ! image upload req .
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const changeHandler = (e: any) => {
    // for singleFileUpload the file will be in 0th index
    //* store file in variable
    const file = e.target.files[0];

    previewFile(file);
  };
  const previewFile = (file: any) => {
    // FileReader is builtIn Js object class
    //* create instance of FileReader to convert our image to base64String
    const reader = new FileReader();
    // *convert file to base64String using js object class "FielsReader"
    reader.readAsDataURL(file);
    //* when file is converted to base64String, call the onload function
    reader.onloadend = () => {
      //* set the previewSource to the base64String
      // @ts-ignore
      setPreviewSource(reader.result);
    };
  };

  // ===
  const submitImg = (e: any) => {
    e.preventDefault();
    console.log('submitImg function invoked');
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage: HexBase64BinaryEncoding) => {
    console.log(`uploadImage${base64EncodedImage}`);
    try {
      console.log('try catch block of fetch');
      await fetch('http://localhost:5001/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.result.secure_url);
          setUrlState(data.result.secure_url);

          console.warn('image submitted successfully');
          setSuccessMsg('Image uploaded successfully');
        });
      setFileInputState('');
      // @ts-ignore
      setPreviewSource('');
    } catch (err) {
      console.error(err);
      setErrMsg('Something went wrong!');
    }
  };

  return (
    <section id="register-form">
      <h3>{urlState}</h3>
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
        <div className="upload">
          <label htmlFor="file_id">
            Your File:
            <input
              id="file_id"
              type="file"
              name="image"
              value={fileInputState}
              onChange={changeHandler}
            />
          </label>

          {previewSource && (
            <img
              className="upload__preview"
              src={previewSource}
              alt="preview"
            />
          )}
        </div>
        <button
          onClick={(e) => {
            submitImg(e);
          }}
        >
          upload Image
        </button>

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
