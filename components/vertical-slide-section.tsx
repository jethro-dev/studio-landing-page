"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

type Props = {};

type Card = {
  title: string;
  description: string;
  asset: string;
  bgColor: string;
};

const cards = [
  {
    title: `WEB DESIGN`,
    description:
      "Crafting visually stunning and user-friendly websites that captivate your audience and enhance your digital presence.",
    asset: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
    bgColor: "bg-red-500",
  },
  {
    title: "Web development",
    description:
      "Building robust, scalable, and high-performance websites tailored to meet your business needs and exceed expectations. Whether you want to build with a site builder or with custom code, we got you.",
    asset: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-1.mp4",
    bgColor: "bg-green-500",
  },
  {
    title: "Branding",
    description:
      "Creating impactful brand identities that resonate with your target audience, differentiate you from competitors, and foster brand loyalty.",
    asset: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-3.mp4",
    bgColor: "bg-blue-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Driving business growth through strategic digital marketing campaigns that increase visibility, engagement, and conversions across all digital platforms.",
    asset: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-3.mp4",
    bgColor: "bg-blue-500",
  },
];

const VerticalSlideSection = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="mt-16">
      <div className="container flex flex-col md:flex-row justify-between gap-4 md:gap-8">
        <div className="flex items-center">
          <h2 className="md:w-1/2">
            <span className="block uppercase">Our</span>
            <span className="block uppercase">Services</span>
          </h2>
        </div>
        <p>
          At YEE STUDIO, we believe in crafting digital experiences that are as
          unique as your brand. From web design and development to branding and
          digital marketing, our services are tailored to fit your exact needs.
        </p>
        <p>
          Choose the full suite or select precisely what your business requires.
          Ready for a flexible, tailored approach to your online presence?
          Explore our services and discover how we can elevate your brand today.
        </p>
      </div>

      <div
        ref={container}
        className="mt-6 md:-mt-40 flex flex-col gap-8 lg:gap-20 items-stretch py-8 lg:py-16"
      >
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.05;
          return (
            <Card
              key={i}
              {...card}
              index={i}
              progress={scrollYProgress}
              range={[(1 / cards.length) * i, 1]}
              opacityRange={[
                (1 / cards.length) * i,
                (1 / cards.length) * (i + 1),
              ]}
              targetScale={targetScale}
            />
          );
        })}
        <div className="h-[50vh] hidden lg:flex items-center justify-center sticky top-0"></div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  asset,
  bgColor,
  index,
  progress,
  range,
  opacityRange,
  targetScale,
}: {
  index: number;
  progress: MotionValue<number>;
  range: number[];
  opacityRange: number[];
  targetScale: number;
} & Card) => {
  const { width = 0, height = 0 } = useWindowSize();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  //   const imgScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  // console.log({ targetScale, range });
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, opacityRange, [1, 0]);

  return (
    <div
      ref={container}
      className="md:h-screen flex items-center justify-center md:sticky top-0 container"
      // style={{ top: `${index * 20}px` }}
    >
      <motion.div
        style={{
          scale: width > 768 ? (index === cards.length - 1 ? "1" : scale) : "1",
          // opacity: index === cards.length - 1 ? "100" : opacity,
        }}
        className="relative  w-full h-2/3 md:h-[600px] bg-black border border-neutral-700 shadow-2xl shadow-neutral-700/20 rounded-lg overflow-hidden flex items-stretch"
      >
        <div className="basis-1/2 px-12 flex flex-col justify-center items-start gap-6">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button
            // variant={"outline"}
            className="bg-white text-black border-2 font-semibold"
          >
            Find out more
          </Button>
        </div>
        <div className="basis-1/2 relative">
          <div className="bg-gradient-to-r from-black to-transparent absolute left-0 top-0 bottom-0 w-full -translate-x-[1px]"></div>
          <video
            src={asset}
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalSlideSection;
