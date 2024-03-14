"use client";
import { useLoadingStateStore } from "@/hooks/use-loading-state-store";
import React, { useEffect, useState } from "react";
// const Spline = React.lazy(() => import("@splinetool/react-spline"));
import Spline from "@splinetool/react-spline";
import ReactDOM from "react-dom";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

type Props = {};

export const SplineDemo = () => {
  const controls = useAnimationControls();

  return (
    <>
      <motion.div
        className="w-full"
        initial={{ scale: 0 }}
        animate={controls}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Spline
          onLoad={() => controls.start({ scale: 1 })}
          scene="https://prod.spline.design/FEouEwP6PdMCPAHJ/scene.splinecode"
        />
      </motion.div>
    </>
  );
};

// const LoadingScreen = () => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, [mounted]);

//   if (!mounted) return;
//   return ReactDOM.createPortal(
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1 }}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "rgba(0, 0, 0, 1)",
//           zIndex: 1000,
//         }}
//       >
//         <p>Loading...</p>
//       </motion.div>
//     </AnimatePresence>,
//     document.body // Mounting the loading screen directly to the body
//   );
// };
