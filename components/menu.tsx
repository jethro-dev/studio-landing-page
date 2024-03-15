"use client";
import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useLenisStateStore } from "@/hooks/use-lenis-state-store";
import { useLenis } from "@studio-freight/react-lenis/types";
import { useToggleScroll } from "@/hooks/use-toggle-scroll";

type Props = {};

const links = [
  { name: "About", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Case Study", href: "/case-study" },
  { name: "Contact", href: "/contact" },
];

export const Menu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { disableScroll, enableScroll } = useToggleScroll();
  const { isScrollDisabled, setIsScrollDisabled } = useLenisStateStore(
    (state) => state
  );

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });

  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [open]);

  return (
    <>
      <div className={`transition-all ${open ? "text-black" : "text-white"}`}>
        <Hamburger rounded label="Show menu" toggled={open} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {open && (
          <div className="absolute inset-0 w-screen h-screen">
            {/* gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/20 z-0"
              onClick={() => setOpen(false)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 100, translateX: 0 }}
              exit={{ opacity: 0, translateX: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-4 right-4 z-0 bg-white text-black rounded-md pt-12 pb-8 px-8 max-w-sm w-screen"
            >
              <div className="">
                <div className="flex flex-col space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-normal text-xl"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
