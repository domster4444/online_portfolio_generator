import React from 'react';

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
  return (
    <div className="priceCard centerPricingCard">
      <h1>{price}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" className="cursor">
        <strong>Buy Now</strong>
      </button>
    </div>
  );
}
