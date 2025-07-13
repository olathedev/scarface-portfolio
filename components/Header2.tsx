"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Header2 = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });

    tl.from(navRef.current, { opacity: 0, y: -40 })
      .from(imageRef.current, { opacity: 0, scale: 0.7 }, "-=0.4")
      .from(
        textRef.current ? Array.from(textRef.current.children) : [],
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
        },
        "-=0.3"
      )
      .from(
        buttonsRef.current ? Array.from(buttonsRef.current.children) : [],
        {
          opacity: 0,
          y: 30,
          stagger: 0.15,
        },
        "-=0.5"
      )
      .from(
        scrollIconRef.current,
        {
          opacity: 0,
          y: 20,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
        },
        "-=0.6"
      );
  }, []);

  return (
    <div className="h-screen w-full flex flex-col p-4 md:p-10 items-center relative overflow-hidden">
      <div ref={navRef}>
        <nav className="h-[50px] bg-[#15161A] px-6 border border-[#626468] rounded-2xl p-2.5 mb-6 flex gap-4 md:gap-8 text-[15px] items-center">
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#projects" className="text-white">
            Projects
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </nav>
      </div>

      <div className="w-full flex-1 flex flex-col justify-center gap-8 md:gap-10 p-4 md:pt-20 px-4 md:px-16">
        <div
          ref={textRef}
          className="flex flex-col text-white px-2 text-center md:text-start"
        >
          <h2 className="text-[28px] text-[#47484C] md:text-[60px]">
            Hi, I’m Peter Adaaku —
          </h2>
          <h2 className="text-[24px] md:text-[50px]">
            I Build Developers, Ecosystems &
          </h2>
          <h2 className="text-[24px] text-[#47484C] md:text-[50px]">
            The Future of Work in Africa.
          </h2>
        </div>

        <div
          ref={buttonsRef}
          className="flex flex-col gap-4 md:flex-row md:gap-4 w-full items-center px-2"
        >
          <button className="w-full md:w-auto py-3 px-4 border-[#626468] bg-primary rounded-lg text-sm ">
            <Link href="#professional" className="text-white block text-center">
              Check Out My Track Records
            </Link>
          </button>
          <button className="w-full md:w-auto py-2 px-4 border-2 border-[#626468] bg-[#15161A] rounded-lg text-sm md:text-">
            <a
              href="https://blockfuselabs.com/"
              target="_blank"
              className="text-white block text-center"
            >
              Inside Blockfuse Labs
            </a>
          </button>
        </div>

        <div className="">
          <div className="w-full md:w-[550px]">
            <div className="py-2 px-4 text-sm md:text-base flex items-center justify-center bg-[#08090D] text-white border mt-6 border-[#626468]/30 rounded-xl gap-2 md:gap-4 text-center">
              <span className="size-2 bg-white rounded-full"></span>
              <span>
                Over 3 years of professional experience building onchain
              </span>
              <span className="size-2 bg-white rounded-full"></span>
            </div>
          </div>
          <div className="w-full md:w-[550px]">
            <div className="py-2 px-4 text-sm md:text-base flex items-center justify-center bg-[#08090D] text-white border mt-6 border-[#626468]/30 rounded-xl gap-2 md:gap-4 text-center">
              <span className="size-2 bg-white rounded-full"></span>
              <span>
                Building Africa’s Web3 Future, One Developer at a Time.
              </span>
              <span className="size-2 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center relative">
          <div
            ref={scrollIconRef}
            className="md:absolute bottom-6 h-[40px] w-[36px] flex items-center justify-center border border-white rounded-[14px] cursor-pointer mt-6 md:h-[50px] md:w-[40px] md:mt-8"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.5L9.75 17.25L18.5 8.5M1 1L9.75 9.75L18.5 1"
                stroke="white"
              />
            </svg>
          </div>
        </div>

        {/* Background image adjusted for mobile and desktop */}
        <img
          src="/images/hero.png"
          alt=""
          className="absolute object-cover bottom-0 left-1/2 -translate-x-1/2 w-full md:top-4 md:right-0 md:left-auto md:w-auto md:translate-x-0 -z-10 opacity-20 md:opacity-80"
        />
      </div>
    </div>
  );
};

export default Header2;
