"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

type Props = {};

type Card = {
  title: string;
  description: string;
  asset: string;
  bgColor: string;
};

const cards = [
  {
    title: `Web\n design`,
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
    <>
      <div className="pt-40 container">
        <h2 className="font-montserrat md:text-8xl lg:text-9xl font-medium">
          <span className="block uppercase">Our</span>
          <span className="block uppercase ml-40">Services</span>
        </h2>
      </div>

      <div ref={container} className="flex flex-col gap-20 items-stretch py-16">
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
        <div className="h-[50vh] flex items-center justify-center sticky top-0"></div>
      </div>
    </>
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
      className="h-screen flex items-center justify-center sticky top-0 container"
      // style={{ top: `${index * 20}px` }}
    >
      <motion.div
        style={{
          scale: index === cards.length - 1 ? "1" : scale,
          // opacity: index === cards.length - 1 ? "100" : opacity,
        }}
        className={`relative  w-full h-[700px] md:h-[600px] bg-white text-black rounded-lg p-10 md:p-20 border border-border  shadow-[0px_10px_60px_20px_rgba(255,255,255,.2)]`}
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-10 h-full">
          <div className="order-2 md:order-1 basis-1/2 space-y-6">
            <h3 className="text-6xl font-semibold whitespace-pre-line">
              {title}
            </h3>
            <p className="text-lg font-medium">{description}</p>
            <Button
              variant={"outline"}
              className="bg-tranparent border-black border-2"
            >
              Find out more
            </Button>
          </div>
          <div className="order-1 md:order-2 basis-1/2 overflow-hidden aspect-square rounded-lg">
            <motion.div
            //  style={{ scale: imgScale }}
            >
              <video
                src={asset}
                playsInline
                muted
                loop
                autoPlay
                preload="auto"
                className="object-cover object-bottom"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalSlideSection;
