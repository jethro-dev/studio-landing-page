"use client";
import React from "react";
import { CurvedText } from "./curved-text";
import { MeshDemo, setRandomPatterns } from "./mesh-demo";
import { Gradient } from "@/lib/mesh-gradient";
import { Button } from "./ui/button";
import Spline from "@splinetool/react-spline";
import { SplineDemo } from "./spline-demo";

type Props = {
  title: string;
  description: string;
};

export const HeaderSection = ({ title, description }: Props) => {
  return (
    <section className="relative h-screen max-h-[1000px] py-10 md:py-20 flex flex-col justify-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0)_0%,rgba(0,0,0,.8)_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <MeshDemo />

      <div className="py-24 md:py-0 container max-w-8xl absolute inset-0 grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-10 z-10 font-montserrat">
        <div className="col-span-1 md:col-span-8 row-span-2 flex items-center justify-start">
          <h1 className="uppercase space-y-2 md:space-y-6">
            {/* <p className="font-neutralFace">Full - Cycle</p> */}
            <span className="block">Full-Cycle</span>
            <span className="block">Web</span>
            <span className="block">Agency</span>
          </h1>
        </div>

        <div className="col-span-1 md:col-span-4 flex items-end md:items-center justify-end">
          <div className="max-w-lg">
            <p className="uppercase text-5xl md:text-6xl font-semibold whitespace-pre-line text-right">
              {`Vision\ninto\nReality`}
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 flex items-start md:items-center justify-end ">
          <div className="max-w-sm">
            <p className=" text-right font-medium font-montserrat text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 flex itemsce justify-center">
        <SplineDemo />
      </div>
    </section>
  );
};
