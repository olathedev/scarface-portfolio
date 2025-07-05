"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const WORDS = ["blockchain", "innovation", "leadership"];

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate each word in, one after the other, but keep them visible
    WORDS.forEach((_, i) => {
      tl.fromTo(
        textRefs.current[i],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        i === 0 ? 0.5 : `+=0.2`
      );
    });

    // Curtain drop after all words are in
    tl.to(preloaderRef.current, {
      y: "100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.7,
      onComplete: onFinish,
    });

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0F] text-white"
      style={{ willChange: "transform" }}
    >
      <Image src="/images/logo.png" alt="Logo" width={80} height={80} priority />
      <div className="relative h-12 mt-8 flex items-center justify-center">
        <span className="text-2xl font-bold tracking-wide text-center">
          {WORDS.map((word, i) => (
            <span
              key={word}
              ref={el => { textRefs.current[i] = el; }}
              className="inline-block"
              style={{ opacity: 0, marginRight: i < WORDS.length - 1 ? 8 : 0 }}
            >
              {word}
              {i < WORDS.length - 1 && <span>, </span>}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}