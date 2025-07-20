"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 } ,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      tl.from(headerRef.current, { opacity: 0, y: -30 })
        .from(textRef.current, { opacity: 0, x: 40 }, "-=0.4")
        .from(imageRef.current, { opacity: 0, scale: 0.9 }, "-=0.5");
    }, sectionRef);
    return () => ctx.revert();
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
        <div className="h-80 md:h-[42rem] w-full md:w-1/2 mb-6 md:mb-0">
          <div className="h-full rounded-xl w-full md:w-[98%] overflow-hidden flex items-center justify-center relative">
            <Image
              ref={imageRef}
              src="/images/about.jpeg"
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
          <p className="text-sm sm:text-base md:text-lg leading-[1.8] text-center md:text-left">
            <span className="text-lg sm:text-2xl md:text-[35px] text-[#47484C] font-semibold">
              Hi, I’m Peter Adaaku Jr.
            </span>, a passionate software engineer, educator, and community builder — and currently the CEO/Co-founder of Blockfuse Labs, a developer hub shaping Africa’s next generation of Web3 builders.
            My journey started in Makurdi, Nigeria, where I began as a crypto enthusiast and transitioned into full-time engineering. Over time, I realized that many brilliant minds around me lacked access to proper guidance, mentorship, and technical resources. That inspired me to create Blockfuse Labs — a place where people like me could get a real shot at building a future in tech.
            Today, I lead a growing team training developers, building products, and nurturing local blockchain ecosystems across Nigeria — from Jos to Benue and beyond. I’m committed to decentralization, community-led innovation, and empowering African youth to solve real-world problems with technology.
            Let’s build the future, together.
          </p>
        </div>

        {/* Cards */}
      </div>
    </section>
  );
};

export default About;
