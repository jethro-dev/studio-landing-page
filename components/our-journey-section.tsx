import React from "react";

type Props = {};

export const OurJourneySection = (props: Props) => {
  return (
    <section className="relative snap-start mt-20 mb-16">
      <div className="mx-auto container px-10 grid grid-cols-1 md:grid-cols-2 gap-10 border border-border bg-white rounded-lg p-10">
        <div>
          <h1 className="font-semibold text-8xl font-workSans">
            Our Design -
            <br className="hidden-mobile" /> Journey
          </h1>
        </div>
        <div></div>
        <div className="mt-9">
          <video
            src="https://www.dstudio.digital/video/hero-sec.mp4"
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
          />
        </div>
        <div className="max-w-[43rem] mt-16">
          <div data-aos="fade-up" className="aos-init aos-animate">
            <p className="text-2xl font-sans pb-6">
              A globally distributed digital agency uniting remote team members
              and collaborators to offer valuable insights and a diverse
              perspective.
            </p>
          </div>
          <div data-aos="fade-up" className="aos-init aos-animate">
            <p className="text-2xl font-sans pb-6">
              Our strength lies in challenging fundamental assumptions,
              unraveling entrenched behaviors, simplifying intricate processes,
              and crafting impactful products and services that enhance the
              lives of millions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
