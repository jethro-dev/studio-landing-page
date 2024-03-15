import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data";
import { CaseStudyItem } from "./case-study-item";

type Props = {};

const CaseStudy = (props: Props) => {
  return (
    <section className="mt-20 relative">
      <div className="mx-auto container pb-16 md:pb-28">
        <div className="md:mt-40 flex flex-col md:flex-row justify-between gap-3 lg:gap-10">
          <h2 className="md:mt-40 md:w-1/2">
            <span className="block uppercase">Our</span>
            <span className="ml-6 md:ml-40 block uppercase">Work</span>
          </h2>
          <div className="md:w-1/2 space-y-3 lg:space-y-6">
            <h4>Making brands a damn site better.</h4>
            <p>
              Let’s face it, first impressions matter. Your website’s an
              opportunity to wow your audience, so why choose bad design? Brands
              win over fans when they’re brave enough to go beyond their
              creative comfort zone.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-6 lg:gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((item, i) => (
            <CaseStudyItem key={i} {...item} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="font-workSans" size={"lg"} asChild>
            <Link href="/case-study">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
