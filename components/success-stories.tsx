import React from "react";

type Props = {};

export function SuccessStories({}: Props) {
  return (
    <section className="bg-white text-black py-40">
      <div className="container px-4">
        <h2 className="text-5xl font-semibold mb-16">
          Our Client’s Funding and
          <br className="hidden-mobile" />
          Success Stories
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="row-span-2 bg-black p-10 md:p-12 testimonial">
            <div className="relative h-full flex flex-col justify-between">
              <div className="z-10">
                <p className="text-[#8C8C8C] pb-4 font-light">
                  2 Years of Collaborations
                </p>
                <h3 className="text-white mt-2 line-clamp-3 text-3xl font-semibold">
                  “YEE STUDIO has managed to submit all the deliverables on
                  time, which being tested before the brand’s grand launch”
                </h3>
                <div className="overflow-hidden mt-8 md:mb-8">
                  <p className="text-lg font-medium text-white">Fred Cooper</p>
                  <p className="text-sm text-gray-500 truncate font-light">
                    Director of Digital Marketing Technology
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-8">
                <div></div>
                <a
                  href="https://techcrunch.com/2019/10/24/yc-grad-taskade-raises-5m-to-take-on-notion-with-a-more-collaborative-productivity-platform/"
                  target="_blank"
                >
                  <p className="group text-lg text-white flex font-medium">
                    Learn More &nbsp;
                    <span className="text-base pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 bg-[#66F3B1] text-black">
            <div>
              <p className="mb-4 font-light">Funding &amp; Investment</p>
              <h3 className="mt-2 line-clamp-3 text-3xl font-semibold">
                A new chapter in the Taskade journey — $5M Series Seed
                Investment
              </h3>
              <div className="flex justify-between items-center gap-8 mt-12">
                <div></div>
                <a
                  href="https://techcrunch.com/2019/10/24/yc-grad-taskade-raises-5m-to-take-on-notion-with-a-more-collaborative-productivity-platform/"
                  target="_blank"
                >
                  <p className="group text-lg text-black flex font-medium">
                    Learn More &nbsp;
                    <span className="text-base pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="p-10 md:p-12 bg-[#C189FF] text-black">
            <div>
              <p className="mb-4 font-light">Funding &amp; Investment</p>
              <h3 className="mt-2 line-clamp-3 text-3xl font-semibold">
                A new chapter in the Taskade journey — $5M Series Seed
                Investment
              </h3>
              <div className="flex justify-between items-center gap-8 mt-12">
                <div></div>
                <a
                  href="https://techcrunch.com/2019/10/24/yc-grad-taskade-raises-5m-to-take-on-notion-with-a-more-collaborative-productivity-platform/"
                  target="_blank"
                >
                  <p className="group text-lg text-black flex font-medium">
                    Learn More &nbsp;
                    <span className="text-base pt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
