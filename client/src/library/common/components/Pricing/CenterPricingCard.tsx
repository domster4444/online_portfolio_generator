import React from 'react';
// @ts-ignore
import KhaltiCheckout from 'khalti-checkout-web';
import config from 'library/utilities/payment/KhaltiConfig';

type PropType = {
  price: string;
  title: string;
  description: string;
};

export default function CenterPricingCard({
  price,
  title,
  description,
}: PropType) {
  const checkout = new KhaltiCheckout(config);

  return (
    <div className="priceCard centerPricingCard">
      <h1>{price}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => {
          checkout.show({ amount: 300000 });
        }}
        className="cursor"
      >
        <strong>Buy Now</strong>
      </button>
    </div>
  );
}
