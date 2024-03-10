"use client";
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
};

const SmoothScrollingWrapper = ({ children }: Props) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    // @ts-ignore
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollingWrapper;
