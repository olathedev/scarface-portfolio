"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
/// <reference types="react-fast-marquee" />

const images = [
  {
    src: "/gallery/gal1.jpg",
    alt: "Gallery Image 1",
    details: "Panel at ETHJos 2023",
  },
  {
    src: "/gallery/gal2.JPG",
    alt: "Gallery Image 2",
    details: "Workshop at Blockfuse Labs",
  },
  {
    src: "/gallery/gal3.JPG",
    alt: "Gallery Image 3",
    details: "Speaking at SF Crypto Academy",
  },
  {
    src: "/gallery/gal4.JPG",
    alt: "Gallery Image 4",
    details: "Mentorship event in Benue",
  },
  {
    src: "/gallery/gal5.jpeg",
    alt: "Gallery Image 5",
    details: "ETHJos Hackathon Winner",
  },
  {
    src: "/im1.JPG",
    alt: "Gallery Image 6",
    details: "Web3 Bootcamp Graduation",
  },
  {
    src: "/im2.JPG",
    alt: "Gallery Image 7",
    details: "Keynote at Blockchain Summit",
  },
  {
    src: "/im3.JPG",
    alt: "Gallery Image 8",
    details: "Community Meetup in Jos",
  },
  // Duplicates for longer marquee
  {
    src: "/gallery/gal2.JPG",
    alt: "Gallery Image 9",
    details: "Workshop at Blockfuse Labs (Repeat)",
  },
  {
    src: "/im1.JPG",
    alt: "Gallery Image 10",
    details: "Web3 Bootcamp Graduation (Repeat)",
  },
];

const Gallery = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <section className="flex flex-col gap-8 py-4 mt-8 md:py-8 relative px-4 md:px-0" id="gallery">
      {/* Header */}
      <header
        ref={headerRef}
        className="flex flex-col md:flex-row items-center gap-3 md:mb-10 justify-center"
      >
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Gallery</h4>
        <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[6px] sm:h-[8px] md:h-[11px] opacity-40 bg-primary rounded-xl"></div>
      </header>
      <div className="flex flex-col gap-6 w-full">
        <Marquee gradient={false} speed={20} pauseOnHover={true} className="w-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden w-[70vw] h-[38vw] max-w-[320px] max-h-[180px] sm:w-[38vw] sm:h-[20vw] md:w-[260px] md:h-[180px] lg:w-[320px] lg:h-[220px] mx-2 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl"
                priority={idx === 0}
              />
              {/* Hover Sheet */}
              <div className="absolute left-0 bottom-0 w-full h-[70%] bg-black/80 text-white flex items-end p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-xs sm:text-base font-semibold">{img.details}</span>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={20} pauseOnHover={true} direction="right" className="w-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden w-[70vw] h-[38vw] max-w-[320px] max-h-[180px] sm:w-[38vw] sm:h-[20vw] md:w-[260px] md:h-[180px] lg:w-[320px] lg:h-[220px] mx-2 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl"
                priority={idx === 0}
              />
              {/* Hover Sheet */}
              <div className="absolute left-0 bottom-0 w-full h-[70%] bg-black/80 text-white flex items-end p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-xs sm:text-base font-semibold">{img.details}</span>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={20} pauseOnHover={true} className="w-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden w-[70vw] h-[38vw] max-w-[320px] max-h-[180px] sm:w-[38vw] sm:h-[20vw] md:w-[260px] md:h-[180px] lg:w-[320px] lg:h-[220px] mx-2 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl"
                priority={idx === 0}
              />
              {/* Hover Sheet */}
              <div className="absolute left-0 bottom-0 w-full h-[70%] bg-black/80 text-white flex items-end p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-xs sm:text-base font-semibold">{img.details}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>


    </section>
  );
};

export default Gallery; 