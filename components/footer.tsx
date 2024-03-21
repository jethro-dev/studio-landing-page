import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const locations = [
  { country: "United Kingdom", cities: ["London", "Edinburgh"] },
  { country: "China", cities: ["Hong Kong"] },
];

const socials = [
  {
    name: "Dribbble",
    link: "https://dribbble.com/",
  },
  {
    name: "Instagram",
    link: "https://dribbble.com/",
  },
  {
    name: "LinkedIn",
    link: "https://dribbble.com/",
  },
  {
    name: "Facebook",
    link: "https://facebook.com/",
  },
  {
    name: "Clutch",
    link: "https://clutch.com/",
  },
];

export const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white ring-1">
      <div className="container mx-auto px-4 text-left pt-8 pb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          Let’s Create Something Better Together
        </h2>
        <p className="mt-2">Write us on</p>
        <h3 className="mt-2 text-xl font-semibold">
          <Link href="mailto:hello@yee.studio">hello@yee.studio</Link>
        </h3>

        <Button
          size={"lg"}
          variant={"outline"}
          className="mt-10 bg-black border-2 border-white text-white hover:bg-white hover:text-black"
          asChild
        >
          <Link href={`/contact`}>Start New Project</Link>
        </Button>

        <hr className="my-8 lg:my-16 border-bottom border-[#1e1e1e]" />

        <div className="grid grid-col-1 md:grid-cols-3 gap-8 lg:gap-16 font-workSans">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">YEE STUDIO</h2>
            <p className="mt-2 lg:mt-6">Transform visions into reality.</p>
          </div>

          <div>
            <div className="font-semibold text-xl">Location</div>
            {locations.map((location, i) => (
              <div key={i}>
                <div className="font-semibold text-lg mt-4 lg:mt-10">
                  {location.country}
                </div>
                <ul>
                  {location.cities.map((city, i) => (
                    <li key={i} className="mt-2 lg:mt-3">
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="font-semibold text-xl">Social</div>
            <ul className="mt-4 lg:mt-6 space-y-2">
              {socials.map((social, i) => (
                <li key={i}>
                  <Link
                    href={social.link}
                    target="_blank"
                    className="hover:text-yellow-300"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
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
            &copy; 2024 YEE STUDIO. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
