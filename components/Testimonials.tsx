"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    text: "Peter’s vision and leadership at Blockfuse Labs is inspiring. His commitment to developer empowerment is shaping the future of Web3 in Africa.",
    name: "dami.base.eth",
    title: "West-Africa Lead, Base (Coinbase)",
    image: "https://pbs.twimg.com/profile_images/1794683549779382272/FoXWXDnX_400x400.jpg",
  },
  {
    id: 2,
    text: "Working at Blockfuse Labs has accelerated my growth as a blockchain engineer. The mentorship and hands-on projects are world-class.",
    name: "Shaibu Suleman",
    title: "Engineer, Blockfuse Labs",
  },
  {
    id: 3,
    text: "Peter’s guidance helped me master Solidity and smart contract development. Blockfuse Labs is a game-changer for African devs.",
    name: "Kingsley Kefas",
    title: "Engineer, Blockfuse Labs",
  },
  {
    id: 4,
    text: "The collaborative environment at Blockfuse Labs pushes you to innovate and solve real-world problems. I’m proud to be part of this team.",
    name: "Emmanuel Dochi",
    title: "Engineer, Blockfuse Labs",
  },
  {
    id: 5,
    text: "Joining Blockfuse Labs gave me the confidence and skills to build my first dApp. The support from mentors is unmatched!",
    name: "Lucky Kamshak",
    title: "Engineer, Blockfuse Labs",
  },
  {
    id: 6,
    text: "Blockfuse Labs made blockchain accessible and fun. I learned so much and met amazing people!",
    name: "Ola Michael",
    title: "Student, Blockfuse Labs",
  },
  {
    id: 7,
    text: "The workshops and bootcamps at Blockfuse Labs helped me land my first internship in Web3. Highly recommended!",
    name: "Deborah Kudaru",
    title: "Student, Blockfuse Labs",
  },
  {
    id: 8,
    text: "I never imagined I’d understand blockchain, but Blockfuse Labs made it possible. The community is so supportive.",
    name: "James Victor",
    title: "Student, Blockfuse Labs",
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
        <h4 className="text-2xl md:text-3xl font-bold text-center text-[var(--text-primary)]">
          Testimonials / Recognition
        </h4>
        <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-[var(--card-bg)] rounded-xl"></div>
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
                  : "bg-[var(--card-bg)]"
              } border border-[var(--card-border)] p-5 sm:p-6 rounded-2xl flex flex-col gap-4`}
            >
              <p className="text-sm text-[var(--text-primary)]">{testimonial.text}</p>
              <div className="flex gap-2 items-center">
                <div className="size-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 object-cover rounded-full" />
                  ) : null}
                </div>
                <div>
                  <h4 className="text-[var(--text-primary)] text-sm font-bold">
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-xs ${
                      isMiddle ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
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
                  : "bg-[var(--card-border)]"
              }`}
            ></span>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-8">
          <button
            onClick={prevSlide}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--card-bg)] flex items-center cursor-pointer justify-center border border-[var(--card-border)]"
          >
            <ArrowLeft className="text-[var(--text-primary)] w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--card-bg)] flex cursor-pointer items-center justify-center border border-[var(--card-border)]"
          >
            <ArrowRight className="text-[var(--text-primary)] w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
