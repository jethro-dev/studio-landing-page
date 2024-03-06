import React from "react";
import { CurvedText } from "./curved-text";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <section className="relative py-4 my-10 bg-white md:my-20">
      <div className="mx-auto container px-4 pt-4">
        <div className="mb-8">
          <h1 className="font-semibold text-8xl font-workSans">
            We Are Full-Cycle
            <br className="hidden-mobile" /> Development Agency
          </h1>
        </div>
        <div className="flex relative">
          <div className="flex-auto md:flex-1 pe-4 hidden md:inline-block relative">
            <CurvedText />
          </div>
          <div className="flex-auto md:flex-1 pt-20">
            <div className="ml-auto max-w-xl">
              <p className="text-2xl font-light pb-6">
                We specialise in delivering ready-to-use websites, mobile
                applications, and comprehensive online business services.
              </p>
              <div className="inline-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
