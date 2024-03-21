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
        "flex flex-col items-start font-sans row-span-1 border border-white/[0.2] rounded-[8px] overflow-hidden",
        index === 0 && "lg:col-span-2 row-span-2"
      )}
    >
      <div className="bg-black py-2 px-4 lg:px-8 lg:py-4">
        <h6>{name}</h6>
      </div>
      <div className="group relative w-full rounded-[8px] overflow-hidden">
        <Link href="/case-study/1">
          <Image
            src={image}
            alt={name}
            width={1600}
            height={900}
            className="aspect-video"
          />
        </Link>
        <div className="pointer-events-none opacity-0 group-hover:opacity-100 bg-black/50 absolute inset-0 flex items-center px-10 py-10 transition-opacity">
          <div>
            <p>{title}</p>
          </div>
          <div className="absolute bottom-10">hello baadges</div>
        </div>
      </div>
    </article>
  );
};
