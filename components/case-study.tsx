import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data";
import { CaseStudyItem } from "./case-study-item";

type Props = {};

const CaseStudy = (props: Props) => {
  return (
    <div className="relative bg-black text-white pt-48 pb-24">
      <div className="mx-auto container pb-16 md:pb-28">
        <div className="flex gap-10">
          <div className="basis-1/2">
            <h2 className="text-9xl font-medium font-montserrat uppercase tracking-tight">
              <span className="block mt-28">Our</span>
              <span className="block pl-20 mt-4">Work</span>
            </h2>
          </div>
          <div className="basis-1/2  font-montserrat">
            <h2 className="text-6xl font-medium">
              Making brands a damn site better.
            </h2>
            <p className="text-lg font-normal mt-4">
              Let’s face it, first impressions matter. Your website’s an
              opportunity to wow your audience, so why choose bad design? Brands
              win over fans when they’re brave enough to go beyond their
              creative comfort zone.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
    </div>
  );
};

const Article = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => {
  return (
    <article className="flex flex-col items-start font-sans">
      <div className="relative w-full">
        <a href="/case-study/1">
          <Image
            src={image}
            alt={name}
            width={1600}
            height={900}
            className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] cursor-pointer"
          />
        </a>
      </div>
      <div className="w-full pointer-events-auto">
        <p className="pt-6 text-black text-base font-normal">{name}</p>
        <h3 className="mt-2 text-black max-w-sm text-3xl font-semibold font-workSans">
          {title}
        </h3>
        <a className="" href="/case-study/1">
          <p className="group mt-5 text-lg leading-6 text-black line-clamp-3 flex font-normal">
            View case study &nbsp;
            <span className="text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </span>
          </p>
        </a>
      </div>
    </article>
  );
};

export default CaseStudy;
