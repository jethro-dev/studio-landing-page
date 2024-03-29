"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
type Props = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // This value is arbitrary and should be large enough to cover the content's height.
  // You might need to adjust it based on your content's needs.
  const maxHeight = isOpen ? "20rem" : "0rem";
  const opacity = isOpen ? 1 : 0;
  const rotate = isOpen ? -135 : 0;

  return (
    <div
      className="border border-white/[.2] rounded-[12px] cursor-pointer hover:bg-black/[.05] transition duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 lg:p-6 flex items-center justify-between">
        <p className="font-medium">{question}</p>
        <motion.div
          initial={{ rotate }}
          animate={{ rotate }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Plus className="h-4 w-4 lg:h-6 lg:w-6" />
        </motion.div>
      </div>
      <motion.div
        initial={{ maxHeight, opacity }}
        animate={{ maxHeight, opacity }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-4 lg:px-6 pb-4 lg:pb-6 font-light">{answer}</p>
      </motion.div>
    </div>
  );
};
