"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const InfoCard = ({
  tintColor = "#000000",
  title,
  description = "",
  detailContent = "",
  children,
  ...props
}: {
  tintColor?: string;
  title: string;
  description?: string;
  detailContent?: string;
  children: React.ReactNode;
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const hasDetail = detailContent.length > 0;
  return (
    <div
      className="relative h-[800px] bg-white rounded-3xl px-8 pt-8 overflow-hidden flex flex-col gap-2"
      {...props}
    >
      <h2
        className="tracking-tight relative text-xl font-medium z-50"
        style={{ color: tintColor }}
      >
        {title}
      </h2>
      <p className="text-lg font-medium">{description}</p>
      {children}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            className="absolute inset-0 flex flex-col justify-center p-8"
            style={{ backgroundColor: tintColor }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: { delay: 0.5 } },
            }}
          >
            <p className="text-white font-medium text-lg max-w-[80ch] mx-auto">
              {detailContent}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {hasDetail && (
        <button
          onClick={() => setShowDetail(!showDetail)}
          className="bg-black absolute right-8 bottom-8 size-10 rounded-full flex justify-center items-center z-50 stroke-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default InfoCard;
