"use client";
import React from "react";
import { CurvedText } from "./curved-text";
import { setRandomPatterns } from "./mesh-demo";
import { Gradient } from "@/lib/mesh-gradient";
import { Button } from "./ui/button";

type Props = {
  title: string;
  description: string;
};

export const HeaderSection = ({ title, description }: Props) => {
  return (
    <section className="relative min-h-screen py-10 md:py-20 flex flex-col justify-center">
      <div className="mx-auto container px-4 pt-4">
        <div className="mb-8">
          <h1 className="font-semibold text-7xl xl:text-8xl">
            {/* <p className="font-neutralFace">Full - Cycle</p> */}
            <p className="font-anandaBlack font-bold text-9xl mb-6">Design</p>
            <p className="text-right font-haverbrooke mb-6">Development</p>
            <p className="font-neutralFace">Agency</p>
          </h1>
        </div>
        {/* <div className="flex relative">
       
          <div className="flex-auto md:flex-1 pt-20">
            <div className="ml-auto max-w-xl">
              <p className="text-2xl font-light pb-6">{description}</p>
            </div>
          </div>
        </div> */}

        <div
          className="absolute bottom-0 left-0 flex items-end gap-4 pb-4 pl-4"
          onClick={() => {
            // alert("clicked");
            const gradient = new Gradient();
            setRandomPatterns();
            // @ts-ignore
            gradient.initGradient("#gradient-canvas");
          }}
        >
          <CurvedText />
          <Button variant={"ghost"} className="underline font-light">
            Click to Dream
          </Button>
          {/* <CurvedText />
          <CurvedText /> */}
        </div>
      </div>
    </section>
  );
};
