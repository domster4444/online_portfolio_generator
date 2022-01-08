/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

// ?  components
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';
import PricingPlanSection from 'library/common/components/Pricing/PricingPlanSection';
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';

const Payment = () => {
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  console.log(loggedInUser);
  if (loggedInUser != null) {
    console.log(loggedInUser);

    return (
      <>
        <DashboardDrawer />

        <section className="home-section">
          <div className="text">
            <AccountMenu />
            Payment
            <BreadCrumb />
            <section className="pricing__plan">
              <PricingPlanSection />
            </section>
          </div>
        </section>
      </>
    );
  }
  return <div className="display-3 text-center mt-5">Not logged in </div>;
};

export default Payment;
