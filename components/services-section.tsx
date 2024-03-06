"use client";
import React, { ChangeEvent, useState } from "react";
import { useInterval } from "usehooks-ts";
import { motion, useSpring, useTransform } from "framer-motion";

type Props = {};

const data = [
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX Design service crafts engaging digital experiences that align with your brand.",
  },
  {
    title: "Brand Identity",
    description:
      "Our team creates compelling brand identities that communicate your message with your target audience.",
  },
  {
    title: "Mobile Development",
    description:
      "We deliver user-friendly apps with engaging interfaces and seamless functionality across platforms.",
  },
  {
    title: "Web Development",
    description:
      "Our team create responsive websites with sleek designs and optimised performance to enhance user experience.",
  },
];

export const ServicesSection = (props: Props) => {
  // The counter
  const [index, setIndex] = useState<number>(0);

  // Interval duration in seconds
  const DURATION = 6;

  useInterval(
    () => {
      // Your custom logic here
      if (index >= data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    },
    // Delay in milliseconds or null to stop it
    DURATION * 1000
  );

  return (
    <section className="relative px-4">
      <div className="overflow-hidden w-full flex items-center py-16 md:py-20">
        <div className="mx-auto container">
          <h2 className="text-5xl font-semibold">
            Our Services to Scale
            <br className="hidden-mobile" />
            of Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative pb-10">
              <div className="max-w-2xl flex justify-between flex-col">
                <div className="mb-4">
                  <p className="my-6 pr-20 large text-[#6F6F6F]">
                    We help businesses outshine with tailored tech solutions
                    that improve efficiency and competitiveness.
                  </p>
                </div>

                <ol className="list-none mt-10 max-w-xl text-base leading-7 lg:max-w-none">
                  {data.map((item, i) => (
                    <li className="relative features-item">
                      <div className="py-2">
                        <div className="relative flex justify-between cursor-pointer">
                          <h2 className="feature-title text-black">
                            <span className="inline-flex mr-4 text-lg">
                              {i + 1}.{" "}
                            </span>
                            {item.title}
                          </h2>
                          {index === i && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#000"
                              className="w-6 h-6 cursor-pointer"
                              //   style="opacity: 1; transform: none;"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                              ></path>
                            </svg>
                          )}
                        </div>
                        {index === i && (
                          <p className="text-lg text-[#888888] font-sans pl-6 pt-2 ml-1 w-3/4">
                            {item.description}
                          </p>
                        )}
                        {/* <svg className="ring-1 w-full h-1 mt-4">
                          <motion.line
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                            stroke-width="4"
                            stroke="#000"
                            className="z-10"
                            pathLength="1"
                            stroke-dashoffset="0px"
                            stroke-dasharray="1px 1px"
                            // initial={{ opacity: 0, scale: 0.5 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            // transition={{ duration: 3 }}
                          ></motion.line>
                          <line
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                            stroke-width="2.5"
                            stroke="#d6d6d6"
                          ></line>
                        </svg> */}

                        <div className="w-full h-1 mt-4">
                          <div className="w-full bg-black/[.2] h-[1px]"></div>
                          {index === i && (
                            <motion.div
                              className="w-full bg-black h-[1px]"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{
                                ease: "easeInOut",
                                duration: DURATION,
                              }}
                            ></motion.div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}

                  {/* <li className="relative features-item">
                    <div className="py-2">
                      <div className="relative flex justify-between cursor-pointer">
                        <h2 className="feature-title text-black">
                          <span className="inline-flex mr-4 text-lg">2. </span>
                          Brand Identity
                        </h2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#000"
                          className="w-6 h-6 cursor-pointer"
                          //   style="opacity: 1; transform: none;"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-lg text-[#888888] font-sans pl-6 pt-2 ml-1 w-3/4">
                        Our team creates compelling brand identities that
                        communicate your message with your target audience.
                      </p>
                      <svg className="w-full h-1 mt-4">
                        <line
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                          stroke-width="4"
                          stroke="#000"
                          className="z-10"
                          pathLength="1"
                          stroke-dashoffset="0px"
                          stroke-dasharray="0.33511847123147415px 1px"
                        ></line>
                        <line
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                          stroke-width="2.5"
                          stroke="#d6d6d6"
                        ></line>
                      </svg>
                    </div>
                  </li> */}
                </ol>
              </div>
            </div>
            <div className="relative overflow-hidden items-baseline flex">
              <video
                src="https://www.dstudio.digital/video/hero-sec.mp4"
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
