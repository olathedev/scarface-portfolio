"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function AnimatedButton({ children, className = "", delay = 0, onClick }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay }
    );
  }, [delay]);

  return (
    <button ref={btnRef} className={className} onClick={onClick}>
      {children}
    </button>
  );
}