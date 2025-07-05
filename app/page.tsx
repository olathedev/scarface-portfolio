"use client";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Preloader from "@/components/animations/PreLoader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedFadeText from "@/components/animations/AnimatedFadedText";
import Qualifications from "@/components/Qualifications";
import About from "@/components/About";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-full  bg-center bg-cover">
      <Header />

      <div className="container mx-auto text-white mt-32">
        <About />

        <Works />

        <Testimonials />

        <section
          className="flex flex-col gap-8 py-4 md:py-8 relative px-4 md:px-0"
          id="contact"
        >
          {/* Header */}
          <header className="flex items-center gap-3 md:mb-10 justify-center">
            <h4 className="text-2xl md:text-3xl font-bold">Connect with me</h4>
            <div className="w-[60px] md:w-[80px] h-[8px] md:h-[11px] bg-[#15161A] rounded-xl"></div>
          </header>

          <div className="border border-[#626468] w-full flex flex-col gap-2 items-center rounded-2xl p-10">
            <h5 className="text-2xl text-[#47484C]">Join my newsletter</h5>
            <p>Receive fresh articles straight in your inbox, every Friday morning. I also share interesting finds from the internet!</p>
            <form className="flex flex-col w-full  mt-6">
              <input
                type="email"
                placeholder="Your email address…"
                className="p-2.5 bg-[#15161A] w-full border border-[#626468] rounded-lg text-white text-center"
              />
              <p className="text-xs text-[#47484C] text-center mt-2">
               Weekly newsletter only. No spam, unsubscribe at any time.
              </p>

          <div className="flex justify-center">

              <button
                type="submit"
                className="bg-[#5F59D2] text-white py-2 px-4 rounded-lg hover:bg-[#47484C] text-sm mt-4"
              >
                Subscribe
              </button>
          </div>
            </form>

          </div>
        </section>
      </div>
    </div>
  );
}
