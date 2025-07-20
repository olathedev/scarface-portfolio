'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
            <div className="size-[40px] text-white rounded-full border border-[#3c3d3e] flex items-center justify-center mr-2">
              {/* Dark/Light mode switch placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </div>
            <button
              className="size-[40px] flex items-center justify-center bg-black/50 backdrop-blur-sm border border-[#3c3d3e] rounded-full md:hidden"
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
              className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-all"
              style={{}}
            >
              <button
                className="absolute top-6 right-6 size-12 flex items-center justify-center border border-[#3c3d3e] rounded-full bg-transparent text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-8 text-2xl text-white items-center">
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;