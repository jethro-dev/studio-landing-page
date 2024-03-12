"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { SplineDemo } from "./spline-demo";

type Props = {};

type Card = {
  title: string;
  description: string;
  asset: string;
  bgColor: string;
};

const cards = [
  {
    title: `Digital\n Marketing`,
    description: "This is the description for card 1.",
    asset: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
    bgColor: "bg-red-500",
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    asset: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-1.mp4",
    bgColor: "bg-green-500",
  },
  {
    title: "Card 3",
    description: "This is the description for card 3.",
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
    <div ref={container} className="flex flex-col gap-20 items-stretch py-16">
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05;
        return (
          <Card
            key={i}
            {...card}
            index={i}
            progress={scrollYProgress}
            range={[0.25 * i, 1]}
            opacityRange={[0.25 * i + 0.15, 0.25 * (i + 1)]}
            targetScale={targetScale}
          />
        );
      })}
      {/* <div className="h-screen flex items-center justify-center sticky top-0">
        Coming soon...
      </div> */}
    </div>
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
      className="h-screen flex items-center justify-center sticky top-0"
      style={{ top: `${index * 10}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={`relative w-full max-w-6xl bg-white rounded-lg px-12 py-16 shadow-lg border border-border`}
      >
        <div className="flex items-stretch h-full">
          <div className="basis-1/2 space-y-6">
            <h3 className="text-7xl font-medium whitespace-pre-line">
              {title}
            </h3>
            <p className="text-lg">{description}</p>
            <Button
              variant={"outline"}
              className="bg-tranparent border-black border-2"
            >
              Find out more
            </Button>
          </div>
          <div className="basis-1/2 overflow-hidden aspect-square rounded-tr-[200px]">
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
