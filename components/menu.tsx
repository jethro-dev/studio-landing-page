import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
type Props = {};

const links = [
  { name: "About", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Case Study", href: "/case-study" },
  { name: "Contact", href: "/contact" },
];

export const Menu = (props: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.querySelector("body")?.classList.add("noscroll");
    } else {
      document.querySelector("body")?.classList.remove("noscroll");
    }
  }, [open]);

  //   document
  //     .getElementById("hamburgerMenu")
  //     .addEventListener("click", function () {
  //       this.classList.toggle("open");
  //     });

  //   console.log({ open });
  return (
    <>
      <div className="absolute top-6 right-6 z-10">
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
              className="absolute top-4 right-4 z-0 bg-white rounded-md pt-12 pb-8 px-8 max-w-sm w-screen"
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
