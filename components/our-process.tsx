import React from "react";
import { MovingBorder } from "./ui/moving-border";

type Props = {};

const process = [
  {
    title: "Discovery & Strategy",
    subHeading: "Understanding Your Vision",
    description:
      "We begin with a deep dive into your business objectives, target audience, and competitive landscape. This phase helps us align on your goals and craft a tailored strategy that serves as the blueprint for your project.",
  },
  {
    title: "Design & Branding",
    subHeading: "Crafting Your Identity",
    description:
      "Leveraging creative ingenuity, we design distinctive branding and visual elements that reflect your brand's ethos. This stage ensures your business stands out with a compelling and cohesive brand identity",
  },
  {
    title: "Web Design & Development",
    subHeading: "Bringing Ideas to Life",
    description:
      "Our team of skilled designers and developers work in tandem to create a responsive, intuitive, and engaging website. We focus on user experience and functionality, ensuring your site performs flawlessly on all devices.",
  },
  {
    title: "Digital Marketing Strategy",
    subHeading: "Maximizing Reach and Engagement",
    description:
      "With a comprehensive digital marketing strategy, we amplify your online presence. From SEO to social media marketing, we employ targeted approaches to drive traffic, generate leads, and boost conversions.",
  },
  {
    title: "Launch & Optimization",
    subHeading: "Going Live",
    description:
      "After rigorous testing and refinements, we launch your project to the world. But our journey doesn't end here. We continuously monitor performance, gather feedback, and make necessary adjustments to ensure sustained success.",
  },
  {
    title: "Ongoing Support & Growth",
    subHeading: "Your Partner in Progress",
    description:
      "Yee Studio is committed to your long-term growth. We offer ongoing support, updates, and marketing insights to adapt to changing market trends and keep your business ahead of the curve.",
  },
];

const OurProcess = (props: Props) => {
  return (
    <section className="pb-40">
      <div className="container">
        <h2 className="lg:text-7xl space-y-2">
          <span className="block">Start a project with</span>
          <span className="block uppercase font-bold">Yee Studio</span>
        </h2>
      </div>

      <div className="mt-40 container space-y-40">
        {process.map((item, i) => (
          <div
            key={i}
            className={`flex gap-10
            ${i % 2 !== 0 ? "justify-end" : "justify-start"}
            `}
          >
            <MovingBorder>
              <div
                className={`w-full max-w-lg shadow-2xl shadow-emerald-500/[0.2] py-16 px-12 rounded-lg basis-1/2 space-y-6`}
              >
                <span className="font-bold text-8xl font-montserrat">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h3>{item.title}</h3>
                <h4 className="font-medium font-montserrat text-3xl">
                  {item.subHeading}
                </h4>
                <p className="font-montserrat font-normal text-lg">
                  {item.description}
                </p>
              </div>
            </MovingBorder>
            {/* <div
              className={`basis-1/2 ${i % 2 !== 0 ? "order-1" : "order-2"}`}
            ></div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
