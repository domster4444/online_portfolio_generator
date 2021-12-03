import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

const Welcome = () => {
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  console.log(loggedInUser);
  if (loggedInUser != null) {
    console.log(loggedInUser);
    return (
      <div className="display-3 text-center mt-5">
        Welcome
        {loggedInUser.firstName}
      </div>
    );
  }
  return <div className="display-3 text-center mt-5">Not logged in </div>;
};

export default Welcome;
