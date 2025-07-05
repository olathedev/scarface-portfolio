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
      </div>
    </div>
  );
}
