import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm('xeqnonjr');
  if (state.succeeded) {
    return <p>Thank you, your feedback has been recorded</p>;
  }
  return (
    <div>
      <hr />
      <h3>FOOTER</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Enter your email to contact you with reply
          <input type="email" name="email" id="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <br />
        <label htmlFor="message">
          Enter Your Query
          <textarea name="message" id="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Footer;
