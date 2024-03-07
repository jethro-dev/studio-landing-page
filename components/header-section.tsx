import React from "react";
import { CurvedText } from "./curved-text";

type Props = {
  title: string;
  description: string;
};

export const HeaderSection = ({ title, description }: Props) => {
  return (
    <section className="relative py-4 my-10 bg-white md:my-20">
      <div className="mx-auto container px-4 pt-4">
        <div className="mb-8">
          <h1 className="font-semibold text-8xl font-workSans whitespace-pre-line">
            {/* We Are Full-Cycle
            <br className="hidden-mobile" /> Development Agency */}
            {title}
          </h1>
        </div>
        <div className="flex relative">
          <div className="flex-auto md:flex-1 pe-4 hidden md:inline-block relative">
            <CurvedText />
          </div>
          <div className="flex-auto md:flex-1 pt-20">
            <div className="ml-auto max-w-xl">
              <p className="text-2xl font-light pb-6">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
