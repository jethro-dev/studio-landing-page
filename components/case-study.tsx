import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const data = [
  {
    name: "Taskade",
    title: "The ultimate to-do list app for managing tasks",
    image: "https://www.dstudio.digital/casestudy/alfan.png",
  },
  {
    name: "Alfan",
    title: "The Platform for Content Creators",
    image: "https://www.dstudio.digital/casestudy/tasked.png",
  },
  {
    name: "Samurai App",
    title: "A.I. Powered Financial Protection",
    image: "https://www.dstudio.digital/casestudy/samurai.png",
  },
  {
    name: "Tool Finder",
    title: "The Best Place ToFind Productivity Tools",
    image: "https://www.dstudio.digital/casestudy/toolfinder.png",
  },
];

const CaseStudy = (props: Props) => {
  return (
    <div className="relative pb-4 pt-10 md:pt-16">
      <div className="mx-auto container px-6 pb-16 md:pb-28">
        <h2 className="text-5xl font-semibold">
          Our <br className="hidden-mobile" />
          Case Study
        </h2>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {data.map((item, key) => (
            <Article key={key} {...item} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="font-workSans" size={"lg"} asChild>
            <Link href="/case-study">View All</Link>
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
