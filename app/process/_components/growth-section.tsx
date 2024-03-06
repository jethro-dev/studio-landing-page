import React from "react";

type Props = {};

const GrowthSection = (props: Props) => {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-[60px] md:text-[180px] font-bold">32%</h2>
        <p className="max-w-[580px] text-[32px] font-bold">
          On an average, our efforts led to a remarkable increase in the
          company&apos;s user base, witnessing a growth rate of 32%.
        </p>

        <div className="my-16">
          <div data-aos="fade-up" className="aos-init aos-animate">
            <div className="grid grid-cols-6 gap-4 cirle-grid">
              <div>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="100" fill="#C189FF"></circle>
                </svg>
              </div>
              <div>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.8"
                    cx="100"
                    cy="100"
                    r="99"
                    fill="#C189FF"
                  ></circle>
                </svg>
              </div>
              <div>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.64"
                    cx="100"
                    cy="100"
                    r="99"
                    fill="#C189FF"
                    stroke="#C189FF"
                    stroke-width="2"
                  ></circle>
                </svg>
              </div>
              <div>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.48"
                    cx="100"
                    cy="100"
                    r="99"
                    fill="#C189FF"
                    stroke="#C189FF"
                    stroke-width="2"
                  ></circle>
                </svg>
              </div>
              <div>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.32"
                    cx="100"
                    cy="100"
                    r="99"
                    fill="#C189FF"
                    stroke="#C189FF"
                    stroke-width="2"
                  ></circle>
                </svg>
              </div>
              <div>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.16"
                    cx="100"
                    cy="100"
                    r="99"
                    fill="#C189FF"
                    stroke="#C189FF"
                    stroke-width="2"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[60px] text-center leading-none md:text-[140px] lg:text-[180px] h-auto font-sans font-bold pb-4">
            $158.85M
          </div>
          <p className="text-2xl text-center pb-10 font-sans font-semibold">
            (We helped our clients to raise fund)
          </p>
          <div className="mt-[80px] md:w-[70%] bg-[#66F3B1] p-3 text-base md:text-lg flex justify-between items-center font-medium">
            <div>Mvp Stage Level, Small Medium, Early Startup</div>
            <div>70%</div>
          </div>
          <div className="mt-[40px] md:w-[30%] bg-[#C189FF] p-3 text-base md:text-lg flex justify-between items-center font-medium">
            <div>Medium, Fortune 500</div>
            <div>30%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
