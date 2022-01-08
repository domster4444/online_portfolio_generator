/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';

const Dummy = () => {
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  console.log(loggedInUser);
  if (loggedInUser != null) {
    console.log(loggedInUser);

    return (
      <section className="home-section">
        <div className="text">
          <AccountMenu />
          Dashboard
          <BreadCrumb />
        </div>
      </section>
    );
  }
  return <div className="display-3 text-center mt-5">Not logged in </div>;
};

export default Dummy;
