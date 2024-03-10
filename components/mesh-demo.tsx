"use client";
import React, { useEffect } from "react";
import { Gradient } from "@/lib/mesh-gradient";
import { motion } from "framer-motion";

type Props = {};

const colorPatterns = [
  ["#c3e4ff", "#6ec3f4", "#eae2ff", "#b9beff"], // Pattern 1
  ["#ff9a9e", "#fad0c4", "#fad0c4", "#ff9a9e"], // Pattern 2
  // Dreamy Sky
  ["#C3E4FF", "#A4D4FF", "#82C4FF", "#6EB4F4"],
  // Sunset Glow
  ["#FFD1DC", "#FFA6C1", "#FF7DAE", "#FF63A5"],
  // Lavender Field
  ["#EAE2FF", "#D6CCFF", "#C2B6FF", "#B9BEFF"],
  // Ocean Breeze
  ["#A3EFFF", "#6ED4F4", "#59C2E6", "#47B2D8"],
  // Forest Whisper
  ["#D3EEDF", "#BDEAC8", "#A7E6B1", "#91E29A"],
  // Rose Gold
  ["#FFD7E0", "#FFC0CB", "#FFAAB5", "#FF95A0"],
  // Pastel Sunset
  ["#FFD6A5", "#FABD80", "#F7A56B", "#F48C57"],
  // Mint Freshness
  ["#D0F4DE", "#B4F0CA", "#98ECC6", "#7CE8B2"],
  // Golden Hour
  ["#FFDEB4", "#FFD19A", "#FFC480", "#FFB766"],
  // Arctic Dawn
  ["#D4F0FF", "#AEDDFF", "#88CAFF", "#62B7FF"],
  // Berry Smoothie
  ["#FFCCE6", "#FFB3DC", "#FF99D3", "#FF80C9"],
  // Moody Blues
  ["#A0B9FF", "#829AFF", "#647BFF", "#4662FF"],
  // Peachy Keen
  ["#FFE5B4", "#FFDB99", "#FFD27F", "#FFC966"],
  // Teal Dreams
  ["#B4FFF3", "#99FFE6", "#7FFFF9", "#66FFF3"],
  // Purple Haze
  ["#DABFFF", "#C79EFF", "#B47EFF", "#A15DFF"],
  // Whispering Pines
  ["#CCE0CC", "#B3D1B2", "#99C299", "#80B380"],
  // Twilight Sparkle
  ["#CCC8FF", "#B3AFFE", "#9996FD", "#807EFC"],
  // Caramel Latte
  ["#FFE6CC", "#FFD8B2", "#FFCA99", "#FFBC7F"],
  // Radiant Orchid
  ["#E6CCFF", "#D1B2FF", "#BC99FF", "#A67FFF"],
  // Soft Coral
  ["#FFCCCC", "#FFB2B2", "#FF9999", "#FF7F7F"],
  // Add more patterns as needed
];

export const setRandomPatterns = () => {
  const gradientCanvas = document.getElementById("gradient-canvas");
  if (!gradientCanvas) return;
  const randomPattern =
    colorPatterns[Math.floor(Math.random() * colorPatterns.length)];

  gradientCanvas.style.setProperty("--gradient-color-1", randomPattern[0]);
  gradientCanvas.style.setProperty("--gradient-color-2", randomPattern[1]);
  gradientCanvas.style.setProperty("--gradient-color-3", randomPattern[2]);
  gradientCanvas.style.setProperty("--gradient-color-4", randomPattern[3]);
};

export const MeshDemo = (props: Props) => {
  useEffect(() => {
    const gradient = new Gradient();
    const gradientCanvas = document.getElementById("gradient-canvas");

    if (!gradientCanvas) return;

    const randomPattern =
      colorPatterns[Math.floor(Math.random() * colorPatterns.length)];

    gradientCanvas.style.setProperty("--gradient-color-1", randomPattern[0]);
    gradientCanvas.style.setProperty("--gradient-color-2", randomPattern[1]);
    gradientCanvas.style.setProperty("--gradient-color-3", randomPattern[2]);
    gradientCanvas.style.setProperty("--gradient-color-4", randomPattern[3]);

    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  const setRandomPatterns = () => {
    const gradientCanvas = document.getElementById("gradient-canvas");
    if (!gradientCanvas) return;
    const randomPattern =
      colorPatterns[Math.floor(Math.random() * colorPatterns.length)];

    gradientCanvas.style.setProperty("--gradient-color-1", randomPattern[0]);
    gradientCanvas.style.setProperty("--gradient-color-2", randomPattern[1]);
    gradientCanvas.style.setProperty("--gradient-color-3", randomPattern[2]);
    gradientCanvas.style.setProperty("--gradient-color-4", randomPattern[3]);
  };

  return (
    <div
      className="fixed top-0 -z-10 h-screen w-screen"
      onClick={() => setRandomPatterns()}
    >
      <motion.canvas
        id="gradient-canvas"
        data-transition-in
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
};
//cormorant - elegant vibe
