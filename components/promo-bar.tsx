import React from "react";

type Props = {};

export const PromoBar = (props: Props) => {
  return (
    <div className="w-full flex items-center text-center text-white bg-black py-2.5 px-6 sm:px-3.5">
      <p className="w-full text-sm font-sans leading-6">
        <a href="#">
          <strong className="font-semibold">Get 20% OFF </strong>on Monthly
          Subscription - Onboard your best UI/UX Team Now
          <span aria-hidden="true"> →</span>
        </a>
      </p>
    </div>
  );
};
