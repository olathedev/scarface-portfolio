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
        className="flex items-center gap-3 md:mb-10 justify-center"
      >
        <h4 className="text-2xl md:text-3xl font-bold">about</h4>
        <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-[#15161A] rounded-xl"></div>
      </header>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Text */}
        <div className="w-full md:w-[40%]" ref={textRef}>
          <p className="text-base md:text-xl leading-relaxed">
            <span className="text-[26px] md:text-[35px] text-[#47484C]">
              I’m a builder
            </span>{" "}
            at heart. Over the past few years, I’ve dedicated myself to helping
            African developers find their voice in the global tech ecosystem.
            Through education, community, and product innovation, I help others
            unlock opportunities in Web3, AI, and beyond.
          </p>
        </div>

        {/* Stacked Images - Desktop only */}
        <div className="w-[20%] h-[300px] relative hidden md:block">
          <div className="absolute w-full h-full -top-16">
            <Image
              src="/images/middle.png"
              alt=""
              width={122}
              height={122}
              className="object-cover h-[122px] w-[122px] absolute top-4 right-3 z-10"
            />
            <Image
              src="/images/middle.png"
              alt=""
              width={198}
              height={198}
              className="object-cover h-[198px] w-[198px] absolute top-16 -left-12"
            />
            <Image
              src="/images/middle.png"
              alt=""
              width={122}
              height={122}
              className="object-cover h-[122px] w-[122px] absolute -bottom-3 right-3 z-10"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="w-full md:w-[40%] flex justify-end">
          <div ref={cardsRef} className="flex flex-col gap-4 w-full ">
            <div className="w-full py-2.5 bg-[#3A3A3B] text-center text-sm md:text-lg text-white rounded-2xl">
              Co-Founded Blockfuse Labs
            </div>

            <div className="w-full py-2.5 bg-[#3A3A3B] text-center text-sm md:text-lg text-white rounded-2xl">
              100+ developers trained
            </div>

            <div className="w-full py-2.5 bg-[#3A3A3B] text-center text-sm md:text-lg text-white rounded-2xl">
              Web3 Product Strategist
            </div>

            <div className="w-full py-2.5 bg-[#3A3A3B] text-center text-sm md:text-lg text-white rounded-2xl">
              Frequent Speaker & Panelist
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image Stack - only on small screens */}
      <div className="flex md:hidden justify-center gap-4 mt-8">
        <Image
          src="/images/middle.png"
          alt=""
          width={130}
          height={130}
          className="object-cover h-[100px] w-[100px]"
        />
        <Image
          src="/images/middle.png"
          alt=""
          width={180}
          height={180}
          className="object-cover h-[150px] w-[150px]"
        />
        <Image
          src="/images/middle.png"
          alt=""
          width={130}
          height={130}
          className="object-cover h-[100px] w-[100px]"
        />
      </div>
    </section>
  );
};

export default About;
