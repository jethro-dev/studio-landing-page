import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const CaseStudyItem = ({
  title,
  name,
  image,
  index,
}: {
  title: string;
  name: string;
  image: string;
  index: number;
}) => {
  return (
    <article
      className={cn(
        "flex flex-col items-start font-sans row-span-1 border border-white/[0.2] rounded overflow-hidden",
        index === 0 && "lg:col-span-2 row-span-2"
      )}
    >
      <div className="bg-black py-2 px-6 lg:px-8 lg:py-4">
        <h6>{name}</h6>
      </div>
      <div className="group relative w-full rounded overflow-hidden">
        <Link href="/case-study/1">
          <Image
            src={image}
            alt={name}
            width={1600}
            height={900}
            className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] cursor-pointer pointer-events-none"
          />
        </Link>
        <div className="pointer-events-none opacity-0 group-hover:opacity-100 bg-black/50 absolute inset-0 flex items-center px-10 py-10 transition-opacity">
          <div>
            <p>{title}</p>
          </div>
          <div className="absolute bottom-10">hello baadges</div>
        </div>
      </div>
      {/* <div className="w-full pointer-events-auto">
        <p className="pt-6 text-white text-base font-normal">{name}</p>
        <h3 className="mt-2 text-white max-w-sm text-3xl font-semibold font-workSans">
          {title}
        </h3>
        <a className="" href="/case-study/1">
          <p className="group mt-5 text-lg leading-6 text-white line-clamp-3 flex font-normal">
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
      </div> */}
    </article>
  );
};
