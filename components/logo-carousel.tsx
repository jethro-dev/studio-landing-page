"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type Props = {};

const logos = [
  {
    title: "Deloitte",
    image: "https://www.dstudio.digital/clients/deloitte.svg",
  },
  {
    title: "Amazon",
    image: "https://www.dstudio.digital/clients/amazon.svg",
  },
  {
    title: "Kwik",
    image: "https://www.dstudio.digital/clients/kwik.svg",
  },
  {
    title: "Tangible",
    image: "https://www.dstudio.digital/clients/Tangible.svg",
  },
  {
    title: "Taskade",
    image: "https://www.dstudio.digital/clients/taskade.svg",
  },
  {
    title: "Samurai",
    image: "https://www.dstudio.digital/clients/samurai.svg",
  },
  {
    title: "Vallery",
    image: "https://www.dstudio.digital/clients/valley.svg",
  },
  {
    title: "Unmarshal",
    image: "https://www.dstudio.digital/clients/unmarshal.svg",
  },
  {
    title: "Frontier",
    image: "https://www.dstudio.digital/clients/frontier.svg",
  },
  {
    title: "Tool Finder",
    image: "https://www.dstudio.digital/clients/toolfinder.svg",
  },
  {
    title: "Teero",
    image: "https://www.dstudio.digital/clients/teero.svg",
  },
  {
    title: "Outshifter",
    image: "https://www.dstudio.digital/clients/outshifter.svg",
  },
  {
    title: "Notice",
    image: "https://www.dstudio.digital/clients/Notice.svg",
  },
];

export const LogoCarousel = (props: Props) => {
  return (
    <Marquee autoFill gradient={false} speed={30}>
      {logos.map((logo, i) => (
        <Image
          key={i}
          src={`${logo.image}`}
          alt={logo.title}
          width="100"
          height="100"
          priority
          className="h-20 mr-12"
        />
      ))}
    </Marquee>
  );
};
