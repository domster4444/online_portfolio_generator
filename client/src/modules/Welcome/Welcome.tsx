/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import './Welcome.css';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import HorizontalLinearStepper from 'library/common/components/Stepper/Stepper';
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import {
  GreenExploreCard,
  BlueExploreCard,
  RedExploreCard,
  PinkExploreCard,
} from 'library/common/components/ExploreCards/ExploreCards';

import PolarChart from 'library/common/components/Charts/BarChart/PolarChart';
import { DoughnutChart } from 'library/common/components/Charts/BarChart/DoughnutChart';
import Header from 'library/common/components/Header/Header';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';

const Welcome = () => {
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
            Dashboard
            <BreadCrumb />
            <section className="explore">
              <BlueExploreCard />
              <RedExploreCard />
              <GreenExploreCard />
              <PinkExploreCard />
            </section>
            <section className="chart__container">
              <div className="chart__container__left">
                <Header color="blue" />
                <br />
                <p className="light" style={{ fontSize: '1.6rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  id dolor ducimus. Ullam cum dolorum corrupti possimus!
                  Doloribus nobis labore odit consectetur quo facere id nihil
                  non minus quae quasi officia minima, totam accusamus corporis
                  sequi. Nostrum corrupti quam dicta veniam impedit quae unde
                  atque maiores corporis, officia, ad explicabo.
                </p>
                <Header color="red" />
                <br />
                <p className="light" style={{ fontSize: '1.6rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  id dolor ducimus. Ullam cum dolorum corrupti possimus!
                  Doloribus nobis labore odit consectetur quo facere id nihil
                  non minus quae quasi officia minima, totam accusamus corporis
                  sequi. Nostrum corrupti quam dicta veniam impedit quae unde
                  atque maiores corporis, officia, ad explicabo.
                </p>
                <Header color="green" />
                <br />
                <p className="light" style={{ fontSize: '1.6rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  id dolor ducimus. Ullam cum dolorum corrupti possimus!
                  Doloribus nobis labore odit consectetur quo facere id nihil
                  non minus quae quasi officia minima, totam accusamus corporis
                  sequi. Nostrum corrupti quam dicta veniam impedit quae unde
                  atque maiores corporis, officia, ad explicabo.
                </p>
                <Header color="gold" />
                <br />
                <p className="light" style={{ fontSize: '1.6rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  id dolor ducimus. Ullam cum dolorum corrupti possimus!
                  Doloribus nobis labore odit consectetur quo facere id nihil
                  non minus quae quasi officia minima, totam accusamus corporis
                  sequi. Nostrum corrupti quam dicta veniam impedit quae unde
                  atque maiores corporis, officia, ad explicabo.
                </p>
                <Header color="purple" />
                <br />
                <p className="light" style={{ fontSize: '1.6rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  id dolor ducimus. Ullam cum dolorum corrupti possimus!
                  Doloribus nobis labore odit consectetur quo facere id nihil
                  non minus quae quasi officia minima, totam accusamus corporis
                  sequi. Nostrum corrupti quam dicta veniam impedit quae unde
                  atque maiores corporis, officia, ad explicabo.
                </p>
                <Header color="pink" />
                <br />
                <p className="light" style={{ fontSize: '1.6rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  id dolor ducimus. Ullam cum dolorum corrupti possimus!
                  Doloribus nobis labore odit consectetur quo facere id nihil
                  non minus quae quasi officia minima, totam accusamus corporis
                  sequi. Nostrum corrupti quam dicta veniam impedit quae unde
                  atque maiores corporis, officia, ad explicabo.
                </p>
              </div>
              <div className="chart__container__right">
                <div className="upper__division">
                  <PolarChart />
                </div>
                <div className="lower__division">
                  <DoughnutChart />
                </div>
              </div>
            </section>
            <section className="horizontal__stepper">
              <HorizontalLinearStepper />
            </section>
          </div>
        </section>
      </>
    );
  }
  return <div className="display-3 text-center mt-5">Not logged in </div>;
};

export default Welcome;
