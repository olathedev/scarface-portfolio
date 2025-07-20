'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/lib/theme";

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const sunIconRef = useRef<SVGSVGElement>(null);
  const moonIconRef = useRef<SVGSVGElement>(null);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/blog" && pathname.startsWith("/blog")) return true;
    return false;
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });
    tl.from(navRef.current, { opacity: 0, y: -40 });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  const handleThemeToggle = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.3 },
    });

    if (theme === 'dark') {
      // Switching to light mode: sun slides down in, moon slides up out
      tl.to(moonIconRef.current, { y: -20, opacity: 0, scale: 0.8 })
        .fromTo(sunIconRef.current, 
          { y: 20, opacity: 0, scale: 0.8 }, 
          { y: 0, opacity: 1, scale: 1 }, 
          "-=0.2"
        );
    } else {
      // Switching to dark mode: moon slides down in, sun slides up out
      tl.to(sunIconRef.current, { y: -20, opacity: 0, scale: 0.8 })
        .fromTo(moonIconRef.current, 
          { y: 20, opacity: 0, scale: 0.8 }, 
          { y: 0, opacity: 1, scale: 1 }, 
          "-=0.2"
        );
    }

    toggleTheme();
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-40 px-4">
      <div className="container mx-auto">
        <div
          ref={navRef}
          className="transition-all duration-500 z-30 w-full flex items-center justify-between"
        >
          <div className="">
            <Image src="/images/logo.png" alt="" height={60} width={60} />
          </div>

          {/* Desktop Nav */}
          <nav className="h-[60px] w-auto text-white px-4 border bg-black/50 backdrop-blur-sm border-[#3c3d3e] rounded-2xl p-3 mb-6 gap-4 md:gap-8 text-[15px] items-center transition-all duration-500 justify-center hidden md:flex">
            <Link 
              href="/" 
              className={`${isActive("/") ? "bg-primary rounded-lg px-4 py-1" : ""} text-white`}
            >
              Home
            </Link>
            <a href="#about" className="text-white">About</a>
            <a href="#projects" className="text-white">Projects</a>
            <a href="#gallery" className="text-white">Gallery</a>
            <Link 
              href="/blog" 
              className={`${isActive("/blog") ? "bg-primary rounded-lg px-4 py-1" : ""} text-white`}
            >
              Blog
            </Link>
            <a href="#contact" className="text-white">Contact</a>
          </nav>

          {/* Right: Dark/Light Switch + Hamburger (hamburger only on mobile) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleThemeToggle}
              className="size-[40px] text-white rounded-full bg-black/50 backdrop-blur-sm border border-[#3c3d3e] flex items-center justify-center mr-2 transition-colors duration-300 hover:bg-black/10 relative overflow-hidden"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {/* Sun icon for light mode */}
              <svg
                ref={sunIconRef}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute"
                style={{ 
                  opacity: theme === 'light' ? 1 : 0,
                  transform: theme === 'light' ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              
              {/* Moon icon for dark mode */}
              <svg
                ref={moonIconRef}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute"
                style={{ 
                  opacity: theme === 'dark' ? 1 : 0,
                  transform: theme === 'dark' ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </button>
            <button
              className="size-[40px] flex items-center justify-center border border-[#3c3d3e] rounded-full bg-transparent md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              {/* Provided Hamburger SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
          </div>

          {/* Mobile Fullscreen Dropdown Menu */}
          {menuOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-300"
              style={{}}
            >
              <button
                className="absolute top-6 right-6 size-12 flex items-center justify-center border border-[#3c3d3e] rounded-full bg-transparent text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-8 text-2xl text-text-primary items-center w-full">
                <Link href="/" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg hover:bg-primary/20 transition">Home</Link>
                <a href="#about" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg hover:bg-primary/20 transition">About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg hover:bg-primary/20 transition">Projects</a>
                <a href="#gallery" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg hover:bg-primary/20 transition">Gallery</a>
                <Link href="/blog" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg hover:bg-primary/20 transition">Blog</Link>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg hover:bg-primary/20 transition">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;