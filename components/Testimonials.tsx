"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Morbi tristique vitae cursus cursus eu iaculis id.",
    name: "John Doe",
    title: "CEO, Example Corp",
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Jane Smith",
    title: "CTO, Sample Inc",
  },
  {
    id: 3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Alice Johnson",
    title: "CMO, CompanyX",
  },
  {
    id: 4,
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    name: "Bob Brown",
    title: "COO, CorpZ",
  },
  {
    id: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    name: "Lisa Green",
    title: "Lead Designer, StudioX",
  },
  {
    id: 6,
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.",
    name: "Tom Lee",
    title: "Head of Growth, ScaleIt",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getSlideTestimonials = () => {
    const start = currentSlide * cardsPerSlide;
    return testimonials.slice(start, start + cardsPerSlide);
  };

  useEffect(() => {
    if (!cardContainerRef.current) return;
    const q = gsap.utils.selector(cardContainerRef);
    gsap.fromTo(
      q(".testimonial-card"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, [currentSlide]);

  return (
    <section
      className="flex flex-col gap-8 py-8 mt-12 relative px-4 md:px-0"
      id="testimonials"
    >
      <header className="flex items-center gap-3 mb-6 justify-center">
        <h4 className="text-2xl md:text-3xl font-bold text-center">
          Testimonials / Recognition
        </h4>
        <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-[#15161A] rounded-xl"></div>
      </header>

      {/* Cards container */}
      <div
        ref={cardContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-300 ease-in-out"
      >
        {getSlideTestimonials().map((testimonial, index) => {
          const isMiddle = index === 1;
          return (
            <div
              key={testimonial.id}
              className={`testimonial-card w-full ${
                isMiddle
                  ? "bg-gradient-to-l from-[#312E6C] via-[#5F59D2] to-[#312E6C]"
                  : "bg-[#08090D]"
              } border border-[#6264684D] p-5 sm:p-6 rounded-2xl flex flex-col gap-4`}
            >
              <p className="text-sm text-white">{testimonial.text}</p>
              <div className="flex gap-2 items-center">
                <div className="size-10 rounded-full bg-white"></div>
                <div>
                  <h4 className="text-white text-sm font-bold">
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-xs ${
                      isMiddle ? "text-white" : "text-[#47484C]"
                    }`}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index
                  ? "bg-gradient-to-l from-[#312E6C] via-[#5F59D2] to-[#312E6C]"
                  : "bg-[#ffffff]"
              }`}
            ></span>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-8">
          <button
            onClick={prevSlide}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center cursor-pointer justify-center"
          >
            <ArrowLeft className="text-black w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex cursor-pointer items-center justify-center"
          >
            <ArrowRight className="text-black w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
