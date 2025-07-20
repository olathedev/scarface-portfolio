import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { satoshi } from "../lib/fonts";
import Link from "next/link";
import gsap from "gsap";
import Nav from "./Nav";

const Header3 = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });
    tl.from(logoRef.current, { opacity: 0, scale: 0.7 })
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
        socialsRef.current ? Array.from(socialsRef.current.children) : [],
        {
          opacity: 0,
          y: 30,
          stagger: 0.1,
        },
        "-=0.4"
      );
    if (scrollIconRef.current) {
      gsap.to(scrollIconRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col p-4 md:py-10 md:px-20 items-center relative bg-black overflow-hidden">

      <div className="flex-1 flex flex-col items-center justify-center z-20 text-white gap-8 md:gap-10 p-4 md:p-10">
        <div
          ref={logoRef}
          className="size-16 bg-white rounded-xl flex items-center justify-center mx-auto"
        >
          <Image src="/images/logo.png" alt="" height={50} width={50} />
        </div>

        <div ref={textRef} className="text-center w-full max-w-xl mx-auto">
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-bold text-[#4D4D4D] mb-2 ${satoshi.className}`}
          >
            Hello there,
          </h1>
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl my-3 font-bold ${satoshi.className}`}
          >
            I’m Peter Adaaku
          </h1>
          <p className="mt-6 text-gray-500 text-base sm:text-lg">
            I’m a blockchain-focused builder dedicated to empowering African
            developers and delivering impactful Web3 solutions, blending
            technical expertise with a passion for mentorship and innovation.
          </p>
        </div>

        {/* Buttons (if you want to animate them, wrap in a div with ref) */}
        {/*
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition text-center">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition text-center">
            Get in Touch
          </a>
        </div>
        */}

        <div
          ref={socialsRef}
          className="flex items-center gap-4 sm:gap-6 justify-center mt-6"
        >
          <a
            href="https://x.com/scarfacedoteth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x.svg" alt="Twitter/X" />
          </a>
          <a
            href="https://www.linkedin.com/in/peter-adaaku/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://wa.me/2348025463838"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" />
          </a>
          <a
            href="https://github.com/scarfacedotcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
          {/* <a href="mailto:peter@blockfuselabs.com"> */}
          {/* Simple mail icon SVG */}
          {/* <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V4.5a.5.5 0 0 0-.5-.5h-15Zm15.5 2.783-7.646 5.09a1 1 0 0 1-1.208 0L3.5 6.783V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6.783Z" fill="#fff"/></svg> */}
          {/* </a> */}
        </div>
      </div>

      <div
        ref={scrollIconRef}
        className="md:absolute bottom-6 h-[40px] w-[36px] flex items-center justify-center border border-white rounded-[14px] cursor-pointer mt-6 md:h-[50px] md:w-[40px] md:mt-8 left-1/2 md:left-auto md:translate-x-0 -translate-x-1/2"
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
      <div className="py-8"></div>

      <Image
        src="/pattern-1.webp"
        alt=""
        height={100}
        width={100}
        className="absolute left-0 bottom-0 hidden sm:block"
      />
      <Image
        src="/file.webp"
        alt=""
        height={100}
        width={100}
        className="absolute right-0 -bottom-6 hidden sm:block"
      />
      <img
        src="/images/heroimg.png"
        alt=""
        className="absolute w-2/3 sm:w-1/2 object-cover bottom-0 md:-bottom-[5rem] left-0 z-10 opacity-20 filter grayscale scale-x-[-1]"
      />

      <img
        src="/images/heroimg.png"
        alt=""
        className="absolute w-2/3 sm:w-1/2 object-cover bottom-0 md:-bottom-[5rem] right-0 z-10 opacity-20 filter grayscale"
      />
    </div>
  );
};

export default Header3;
