"use client";
import { useLoadingStateStore } from "@/hooks/use-loading-state-store";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
// const Spline = React.lazy(() => import("@splinetool/react-spline"));
import Spline from "@splinetool/react-spline";

type Props = {};

export const SplineDemo = (props: Props) => {
  const loaded = useLoadingStateStore((state) => state.loaded);
  const loading = useLoadingStateStore((state) => state.loading);

  return (
    <>
      {/* {loading && (
        <div className="w-screen h-screen absolute ring-1 inset-0 bg-red-500 z-20 flex items-center justify-center">
          <span className="ring-1">Loading : {loading}</span>
        </div>
      )} */}
      <Spline
        onLoad={() => {
          loaded();
        }}
        scene="https://prod.spline.design/FEouEwP6PdMCPAHJ/scene.splinecode"
      />
    </>
  );
};
