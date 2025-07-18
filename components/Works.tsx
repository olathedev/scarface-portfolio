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

  const works = [
    {
      title: "Blockfuse Labs",
      role: "Co-founder & CEO",
      description:
        "A blockchain education hub training Africa’s next generation of developers through bootcamps, mentorship, and real-world product building.",
      link: "https://blockfuselabs.com/",
    },
    {
      title: "ETHJos",
      role: "Co-organizer",
      description:
        "A regional Ethereum community organizing developer meetups, Solidity bootcamps, and builder sessions across Jos, Nigeria.",
      link: "https://t.me/+H0NfQg8zhoEwNzI0",
    },
    {
      title: "EthBenue",
      role: "Founder",
      description:
        "A grassroots Ethereum community in Benue focused on onboarding new Web3 developers and running monthly learning events.",
      link: "https://t.me/ethbenue",
    },
    {
      title: "SF Crypto Academy",
      role: "Advisor",
      description:
        "Partnered to deliver blockchain training sessions, mentorship, and foundational courses for African developers.",
      link: "https://t.me/+5TP4VNTyBFFjY2Y0",
    },
  ];

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
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {works.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 items-center text-center hover:scale-105 transition-transform"
          >
            <div className="size-[50px] md:size-[58px] bg-white rounded-full flex items-center justify-center overflow-hidden">
              {work.title === "Blockfuse Labs" ? (
                <img src="https://blockfuselabs.com/assets/blockfuse-logo-BgIWHfHT.png" alt="Blockfuse Labs Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              ) : work.title === "ETHJos" ? (
                <img src="https://pbs.twimg.com/profile_images/1745902865355276288/ntCI8AfP_400x400.jpg" alt="ETHJos Logo" className="w-8 h-8 rounded-full md:w-10 md:h-10 object-contain" />
              ) : work.title === "EthBenue" ? (
                <img src="https://pbs.twimg.com/profile_images/1836658556608618497/X5zhMUy5_400x400.jpg" alt="ETHBenue Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              ) :  work.title === "SF Crypto Academy" ? (
                <img src="/sf.jpeg" alt="SF Crypto Academy Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-contain" />
              ) : null}
            </div>
            <h4 className="text-white text-base md:text-lg font-bold">
              {work.title}
            </h4>
            <div className="text-primary text-xs md:text-sm font-semibold mb-1">{work.role}</div>
            <div className="w-full bg-[#15161A] border border-[#626468] rounded-2xl h-[120px] md:h-[130px] flex items-center justify-center px-3 text-sm text-white">
              <span className="line-clamp-3">{work.description}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
