import HeaderSection from "@/components/header-section";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import PlanItem from "./_components/plan-item";
import GrowthSection from "./_components/growth-section";

type Props = {};

const ProcessPage = (props: Props) => {
  return (
    <main>
      <HeaderSection />
      <section className="container mx-auto px-4">
        <div className="relative pb-[175px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="py-5 font-semibold text-5xl font-workSans">
                Discovery / Ideation <br className="mobile-hidden" />
                Phase
              </h2>
              <p className="text-xl pb-8 font-workSans max-w-[560px]">
                We reveal revelations and mold brands, websites, and products by
                engaging in a process of discovery and scrutiny
              </p>
              <div className="flex flex-col gap-y-4 w-fit font-semibold pt-6 font-sans">
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  User of the Product
                </a>
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Competitor &amp; Market Analysis
                </a>
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Business Goals
                </a>
              </div>
            </div>
            <div className="border border-border bg-black/[.05] shadow"></div>
          </div>
        </div>

        <div className="relative pb-[175px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2">
              <h2 className="py-5 font-semibold text-5xl font-workSans">
                Design / Visual <br className="mobile-hidden" /> Element
              </h2>
              <p className="text-xl pb-8 font-workSans max-w-[560px]">
                We narrate distinct brand narratives, create exceptional visual
                personas, and sculpt user-centric digital journeys.
              </p>
              <div className="flex flex-col gap-y-4 w-fit font-semibold pt-6 font-sans">
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Ideation & Wireframe
                </a>
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Style Guide & Component Design
                </a>
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Visual Design & Prototype
                </a>
              </div>
            </div>
            <div className="border border-border bg-black/[.05] shadow"></div>
          </div>
        </div>
        <div className="relative pb-[175px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="py-5 font-semibold text-5xl font-workSans">
                Build / Product
                <br className="mobile-hidden" />
                Development
              </h2>
              <p className="text-xl pb-8 font-workSans max-w-[560px]">
                Supported by cutting-edge technologies, we construct websites
                and products that enhance functionality, ensure reliability, and
                adapt over time.
              </p>
              <div className="flex flex-col gap-y-4 w-fit font-semibold pt-6 font-sans">
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Frontend Development
                </a>
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Backend Development
                </a>
                <a className="py-2 px-4 border cursor-pointer inline-flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Test & Publish
                </a>
              </div>
            </div>
            <div className="border border-border bg-black/[.05] shadow"></div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-28">
        <div className="container px-4">
          <div className="mb-20">
            <h2 className="text-center font-semibold font-workSans text-5xl">
              Design Plan
            </h2>
            <p className="mt-8 max-w-xl text-xl mx-auto text-center font-workSans font-light">
              It is just a default services in the fixed cost, you can customise
              any plan as per your need.
            </p>
          </div>

          <PlanItem />
          <PlanItem />
          <PlanItem />
          <PlanItem />
        </div>
      </section>

      <GrowthSection />
    </main>
  );
};

export default ProcessPage;
