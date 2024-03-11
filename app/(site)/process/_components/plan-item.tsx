import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const PlanItem = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-4 lg:gap-10 xl:gap-16 max-w-[1140px] mx-auto mb-12 md:mb-24">
        <div>
          <div className="font-inter text-4xl mb-8 md:mb-0">Early MVP</div>
        </div>

        <div>
          <div className="lg:text-md">
            <div className="flex items-center mb-2 gap-4">
              <Check className="w-4 h-4" /> Your Ideation
            </div>
            <div className="flex items-center mb-2 gap-4">
              <Check className="w-4 h-4" /> Dedicated Designer
            </div>
            <div className="flex items-center mb-2 gap-4 text-[#7b7b7b]">
              <Check className="w-4 h-4" /> 2 Updates in Week
            </div>
          </div>
        </div>

        <div>
          <div className="lg:text-md">
            <div className="flex items-center mb-2 gap-4">
              <Check className="w-4 h-4" /> Your Ideation
            </div>
            <div className="flex items-center mb-2 gap-4">
              <Check className="w-4 h-4" /> Dedicated Designer
            </div>
            <div className="flex items-center mb-2 gap-4 text-[#7b7b7b]">
              <Check className="w-4 h-4" /> 2 Updates in Week
            </div>
          </div>
        </div>

        <div className="pt-4 lg:text-md">
          <Link
            href="/contact"
            className="transition ease-in-out delay-150  btn-white-slide"
          >
            <span>Request for Price</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanItem;
