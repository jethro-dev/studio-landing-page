import React from "react";
import { PromoBar } from "./promo-bar";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  promo?: boolean;
};

const links = [
  { name: "About", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Case Study", href: "/case-study" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = ({ promo = true }: Props) => {
  return (
    <div className="sticky top-0 left-0 w-full z-30 font-sans">
      {/* {promo && <PromoBar />} */}
      <nav className="bg-white w-full z-20 nav-sec ">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center" href="/">
            <img
              alt="dstudio logo"
              loading="lazy"
              width="120"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="https://www.dstudio.digital/logo-black.svg"
            />
          </a>
          <div className="flex md:order-2 items-center">
            <Button
              className="px-6 py-3 h-auto font-workSans text-base font-normal"
              asChild
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-0 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-10 w-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden items-center justify-between w-full lg:flex lg:w-auto md:order-2 lg:order-1">
            <ul className="flex flex-col lg:flex-row  gap-8 ">
              {links.map((link) => (
                <li>
                  <a className="font-workSans font-normal" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};