import { CurvedText } from "@/components/curved-text";
import { TypographyH1 } from "@/components/ui/typography-h1";
import React from "react";

type Props = {};

export const HeaderSection = (props: Props) => {
  return (
    <section className="relative py-4 my-10 bg-white md:my-20">
      <div className="mx-auto container px-4 pt-4">
        <div className="mb-8">
          <TypographyH1 className="font-semibold text-8xl font-workSans">
            About
            <br className="hidden-mobile" /> Team / Office
          </TypographyH1>
        </div>
        <div className="flex relative">
          <div className="flex-auto md:flex-1 pe-4 hidden md:inline-block relative">
            <CurvedText />
          </div>
          <div className="flex-auto md:flex-1 pt-20">
            <div className="ml-auto max-w-xl">
              <p className="text-2xl font-light pb-6">
                We design and code user-centric digital products for enterprises
                and startups.
              </p>
              <div className="inline-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
