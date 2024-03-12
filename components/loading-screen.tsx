"use client";
import { useLoadingStateStore } from "@/hooks/use-loading-state-store";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const LoadingScreen = (props: Props) => {
  const [show, setShow] = useState(true);
  const loading = useLoadingStateStore((state) => state.loading);

  console.log({ loading });

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;

    // setTimeout(() => {
    //   setShow(false);
    //   body.classList.remove("noscroll");
    // }, 500);
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="w-screen h-screen absolute ring-1 inset-0 bg-neutral-900 z-50 flex items-center justify-center"
        >
          <span className="ring-1">Loading : {loading}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
