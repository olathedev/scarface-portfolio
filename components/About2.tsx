"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.7 },
    });

    tl.from(headerRef.current, { opacity: 0, y: -20 })
      .from(textRef.current, { opacity: 0, x: -30 }, "-=0.4")
      .from(imageRef.current, { opacity: 0, scale: 0.9 }, "-=0.5");

    if (cardsRef.current?.children) {
      tl.from(
        Array.from(cardsRef.current.children),
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
        },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-8 py-4 md:py-8 relative px-4 md:px-0"
      id="about"
    >
      {/* Header */}
      <header
        ref={headerRef}
        className="flex flex-col md:flex-row items-center gap-3 md:mb-10 justify-center"
      >
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">About</h4>
        <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[6px] sm:h-[8px] md:h-[11px] opacity-40 bg-primary rounded-xl"></div>
      </header>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="h-64 sm:h-80 md:h-[28rem] w-full md:w-1/2 mb-6 md:mb-0">
          <div className="h-full rounded-xl w-full md:w-[98%] overflow-hidden flex items-center justify-center relative">
            <Image
              ref={imageRef}
              src="/im2.JPG"
              alt="About Image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-primary"
              priority
            />
          </div>
        </div>

        {/* Left Text */}
        <div className="w-full md:w-1/2 flex items-center" ref={textRef}>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed text-center md:text-left">
            <span className="text-lg sm:text-2xl md:text-[35px] text-[#47484C] font-semibold">
              I’m a builder
            </span>{" "}
            at heart. Over the past five years, I’ve dedicated myself to helping
            African developers find their voice in the global tech ecosystem.
            With a proven track record in the blockchain space, I have empowered
            countless individuals through education, community building, and
            innovative product development. My passion lies in unlocking
            opportunities for others in Web3, AI, and emerging technologies,
            enabling them to thrive and make a global impact. Whether mentoring
            aspiring developers, leading collaborative projects, or advocating
            for technological advancement, I am committed to driving positive
            change and fostering growth across Africa and beyond.
          </p>
        </div>

        {/* Cards */}
      </div>
    </section>
  );
};

export default About;
