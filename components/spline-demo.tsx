// "use client";
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

type Props = {};

export const SplineDemo = (props: Props) => {
  return (
    <Suspense
      fallback={<div className="text-white font-bold text-7xl">Loading...</div>}
    >
      <Spline scene="https://prod.spline.design/FEouEwP6PdMCPAHJ/scene.splinecode" />
    </Suspense>
  );
};
