"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MyWork = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.7 } });

    tl.from(headerRef.current, { opacity: 0, y: -30 })
      .from(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        {
          opacity: 0,
          y: 40,
          stagger: 0.2,
        },
        "-=0.3"
      );
  }, []);

  return (
    <section className="flex flex-col gap-8 py-8 mt-6 md:mt-28 relative px-4 md:px-0" id="projects">
      <header
        ref={headerRef}
        className="flex items-center gap-3 md:mb-10 justify-center"
      >
        <h4 className="text-2xl md:text-3xl font-bold">My Work</h4>
        <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-primary opacity-40 rounded-xl"></div>
      </header>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center text-center"
          >
            <div className="size-[50px] md:size-[58px] bg-white rounded-full"></div>
            <h4 className="text-white text-base md:text-lg font-bold">
              Blockfuse Labs
            </h4>
            <div className="w-full bg-[#15161A] border border-[#626468] rounded-2xl h-[120px] md:h-[130px] flex items-center justify-center px-3 text-sm text-white">
              A training hub building Africa’s next generation of blockchain
              developers.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
