import Image from "next/image";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 text-left pb-8">
        <div className="text-normal md:text-lg font-semibold pb-12 font-sans pt-16">
          Let’s Create Something Better Together
        </div>
        <h3 className="text-xl md:text-5xl font-semibold mb-3 font-serif">
          Write us on
        </h3>
        <h4 className="text-3xl md:text-7xl font-bold font-serif">
          <a href="mailto:hello@dstudio.digital">hello@dstudio.digital</a>
        </h4>
        <div className="pt-4 inline-block mt-14">
          <div className="inline-block">
            <a href="/contact" className="btn-quote">
              <span> Start New Project</span>
            </a>
          </div>
        </div>

        <div>
          <hr className="my-16 border-bottom border-gray-800 border-[#1e1e1e]" />
        </div>

        <div className="grid grid-col-1 md:grid-cols-3 gap-8 lg:gap-16 font-workSans">
          <div className=" max-w-lg">
            <div className="footer-logo">
              <Image
                alt="dstudio logo"
                width="106"
                height="42"
                // style="color:transparent"
                src="https://www.dstudio.digital/logo-white.svg"
              />
            </div>
            <div className="text-3xl font-bold mt-6">5.0</div>
            <div className="mt-2">Rated on Clutch</div>
          </div>

          <div>
            <div className="font-semibold text-xl">Location</div>
            <div className="font-bold text-lg mt-10">United Kingdom</div>
            <p className=" mt-3 font-normal max-w-xs">
              Suite 55, Unit 3A 34-35, Hatton Garden, Holborn, London, EC1N 8DX
            </p>
            <div className="font-semibold text-lg mt-6">India</div>
            <p className="mt-3 font-normal max-w-xs pr-16">100% Remote Team</p>
            <div className="font-semibold text-lg mt-6">Hong Kong</div>
            <p className="mt-3 font-normal max-w-xs pr-16">100% Remote Team</p>
          </div>

          <div>
            <div className="font-semibold text-xl">Social</div>
            <ul className="mt-6">
              <li>
                <a
                  href="https://dribbble.com/D-studio"
                  target="_blank"
                  className="py-1 hover:text-yellow-300 block"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dstudioagency/"
                  target="_blank"
                  className="py-1 hover:text-yellow-300 block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/dstudioagency"
                  target="_blank"
                  className="py-1 hover:text-yellow-300 block"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dstudioagencyy/"
                  target="_blank"
                  className="py-1 hover:text-yellow-300 block"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/dstudioagency/"
                  target="_blank"
                  className="py-1 hover:text-yellow-300 block"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://clutch.co/profile/dstudio-agency-0"
                  target="_blank"
                  className="py-1 hover:text-yellow-300 block"
                >
                  Clutch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 font-sans md:grid-cols-2 mt-12 md:mt-20 gap-4 lg:gap-10">
          <div className="text-sm">
            <a href="/about" className="mr-7 hover:text-yellow-300">
              About Us
            </a>
            <a href="case-study" className="mr-7  hover:text-yellow-300">
              Case Study
            </a>
            <a href="contact" className="mr-7  hover:text-yellow-300">
              Contact
            </a>
          </div>
          <div className="text-sm text-left md:text-right">
            c 2023 Dstudio Digital - All rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
