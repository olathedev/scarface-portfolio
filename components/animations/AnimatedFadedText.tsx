'use client'
import React, { useRef, useEffect } from "react";
import type { JSX } from "react";
import gsap from "gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedFadeText({ children, className = "", delay = 0, as = "p" }: Props) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay }
    );
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  );
}