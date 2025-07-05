'use client'
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedWipeText({ children, className = "", delay = 0 }: Props) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(maskRef.current, {
      width: "0%",
      duration: 1.2,
      ease: "power4.inOut",
      delay,
    });
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      `-=${0.8}`
    );
    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <h1 ref={textRef} className="relative z-10">{children}</h1>
      <div
        ref={maskRef}
        className="absolute inset-0 bg-[#0B0B0F] z-20"
        style={{ width: "100%" }}
      />
    </div>
  );
}