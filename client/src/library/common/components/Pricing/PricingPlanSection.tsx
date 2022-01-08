import React from 'react';

import SidePricingCard from './SidePricingCard';
import CenterPricingCard from './CenterPricingCard';

import './PricingPlan.css';

export default function PricingPlanSection() {
  return (
    <section id="pricingPlanSection">
      <div className="containerCenter">
        <div className="contentBlock">
          <main>
            <h2>PRICING PLANS</h2>
            <h1>Best Pricing Plans</h1>

            <div className="container">
              <SidePricingCard
                price="$59"
                title="For enterprise use"
                description="

                My lady bits and bobs cup of tea bubble and squeak brolly
                "
              />
              <CenterPricingCard
                price="$59"
                title="For enterprise use"
                description="
                My lady bits and bobs cup of tea bubble and squeak brolly

                "
              />
              <SidePricingCard
                price="$59"
                title="For enterprise use"
                description="
                My lady bits and bobs cup of tea bubble and squeak brolly
                "
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
