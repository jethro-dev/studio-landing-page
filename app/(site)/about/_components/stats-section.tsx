import React from "react";

type Props = {};

const data = [
  {
    _id: "1",
    stat: "$2M",
    title: "Funds raised by Outshifter",
    description:
      "We helped Outshifter to build the website and enhancement of product.",
  },
  {
    _id: "2",
    stat: "$3M",
    title: "Funds raised by Tansible",
    description:
      "We Enhanced the overall User Experience and Visual Design of the product.",
  },
  {
    _id: "3",
    stat: "$5M",
    title: "Funds raised by Taskade",
    description:
      "Our team created a stunning website for Taskade to achieve their goal.",
  },
  {
    _id: "4",
    stat: "5.0",
    title: "Average ratings on Clutch",
    description:
      "Every single one of our clients has awarded us a complete five-star rating.",
  },
  {
    _id: "5",
    stat: "30%",
    title: "Increased user on Kwik Platform",
    description:
      "We achieved outstanding results, leading to a remarkable 30% increase in users.",
  },
  {
    _id: "6",
    stat: "85+",
    title: "Projects Delivered Successfully",
    description:
      "We design and code user-centric digital products for enterprises and startups.",
  },
];

const StatsSection = (props: Props) => {
  return (
    <section className="pt-24 pb-4 bg-black">
      <div className="container">
        <h2 className="text-white mb-10 md:mb-20 text-5xl font-semibold">
          Recent Stats Updates <br className="hidden-mobile" />
          From Client
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => (
            <div key={item._id} className="mb-10 md:mb-20">
              <div className="text-white text-5xl md:text-7xl font-semibold">
                {item.stat}
              </div>
              <p className="text-[#CDCDCD] text-2xl font-medium mt-4 mb-8">
                {item.title}
              </p>
              <p className="text-white text-xl mt-2 line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
