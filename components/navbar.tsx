"use client";
import React from "react";
import { PromoBar } from "./promo-bar";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "./menu";

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
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-30 font-sans">
      {/* {promo && <PromoBar />} */}
      <nav className="bg-transparent w-full">
        <div className="h-28 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center" href="/">
            <Image
              alt="dstudio logo"
              width="120"
              height="60"
              src="https://www.dstudio.digital/logo-black.svg"
            />
          </Link>
          <div className="flex md:order-2 items-center">
            {/* <Button
              className="px-6 py-3 h-auto font-workSans text-base font-normal"
              asChild
            >
              <Link href="/contact">Get Quote</Link>
            </Button> */}

            <Menu />
          </div>
          {/* <div className="hidden items-center justify-between w-full lg:flex lg:w-auto md:order-2 lg:order-1">
            <ul className="flex flex-col lg:flex-row  gap-8 ">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    className={cn(
                      `font-workSans font-normal`,
                      link.href === pathname && "font-semibold"
                    )}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};
