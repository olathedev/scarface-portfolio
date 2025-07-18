"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const texts = [
  "Blockchain Builder",
  "Empowering African Developers",
  "Delivering Impactful Web3 Solutions",
];

const PreLoader = ({ onFinish }: { onFinish?: () => void }) => {
  const [currentText, setCurrentText] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (currentText < texts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      // After last text, fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
        // After fade, call onFinish if provided
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 700);
      }, 1200);
      return () => clearTimeout(fadeTimer);
    }
  }, [currentText, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="mb-8">
        <Image src="/images/logo.png" alt="Scarface Logo" width={80} height={80} />
      </div>
      <div className="text-white text-2xl font-bold min-h-[2.5rem] transition-opacity duration-500">
        {texts[currentText]}
      </div>
    </div>
  );
};

export default PreLoader;