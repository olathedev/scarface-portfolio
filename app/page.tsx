"use client";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Preloader from "@/components/animations/PreLoader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedFadeText from "@/components/animations/AnimatedFadedText";
import Qualifications from "@/components/Qualifications";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Link from "next/link";
import Header2 from "@/components/Header2";
import About from "@/components/About2";
import Professional from "@/components/Professional";
import Header3 from "@/components/Header3";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-full  bg-center bg-cover">
      <Header3 />

      <div className="container mx-auto text-white mt-32 ">
        <About />

        <Professional />

        <Works />

      </div>

      <Gallery />
      <div className="container mx-auto text-white mt-32 ">


        <Testimonials />

        <Contact />
        </div>
      <footer className="w-full bg-[#15161A] border-t border-[#626468] text-white text-sm py-6 px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a href="#home" className="text-white">
            Home
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#projects" className="text-white">
            Projects
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </div>

        <div className="w-full bg-[#1E1E1E] px-4 py-4 text-[13px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 rounded-lg">
          <p className="text-center md:text-left">
            Email me at: <a href="mailto:peter@blockfuselabs.com" className="underline">peter@blockfuselabs.com</a> | Phone: <a href="tel:+2348025463838" className="underline">+234 8025463838</a>
          </p>

          <div className="flex items-center gap-4 justify-center">
            <a href="https://web.facebook.com/AdaakuPeterjr" target="_blank" rel="noopener noreferrer">
              {/* Facebook */}
              <svg
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.78669 14V7.43079H-0.000244141V5.06556H1.78669V3.04535C1.78669 1.45785 2.84225 0 5.27446 0C6.25923 0 6.98742 0.09177 6.98742 0.09177L6.93004 2.30049C6.93004 2.30049 6.1874 2.29347 5.377 2.29347C4.49991 2.29347 4.35939 2.68638 4.35939 3.33851V5.06556H6.99976L6.88487 7.43079H4.35939V14H1.78669Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://x.com/scarfacedoteth" target="_blank" rel="noopener noreferrer">
              {/* Twitter/X */}
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9999 1.7049C17.3258 1.98937 16.6109 2.1761 15.8788 2.25887C16.6414 1.82346 17.2269 1.13398 17.5026 0.312468C16.7777 0.722276 15.9846 1.01101 15.1576 1.1662C14.4839 0.482477 13.5242 0.0551758 12.462 0.0551758C10.4225 0.0551758 8.76897 1.63041 8.76897 3.57326C8.76897 3.84904 8.80167 4.11752 8.8646 4.37508C5.79546 4.22831 3.07436 2.82771 1.25292 0.699175C0.935104 1.21878 0.752995 1.82319 0.752995 2.46786C0.752995 3.68848 1.405 4.76527 2.39585 5.39621C1.8094 5.37871 1.23587 5.22781 0.723112 4.95611C0.722901 4.97085 0.722901 4.98559 0.722901 5.00039C0.722901 6.70497 1.99584 8.12694 3.68517 8.45015C3.14136 8.59105 2.57095 8.61167 2.0175 8.51044C2.48739 9.90816 3.85125 10.9253 5.46717 10.9537C4.2033 11.8973 2.61093 12.4598 0.880823 12.4598C0.582698 12.4598 0.288792 12.4431 -0.00012207 12.4106C1.63415 13.4088 3.57527 13.9913 5.66074 13.9913C12.4534 13.9913 16.1678 8.63034 16.1678 3.98127C16.1678 3.82868 16.1643 3.67695 16.1571 3.5261C16.8801 3.02819 17.5041 2.41147 17.9999 1.7049Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/peter-adaaku/" target="_blank" rel="noopener noreferrer">
              {/* LinkedIn */}
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.63281 15V4.87953H0.202508V15H3.63281ZM1.9181 3.49692C3.11431 3.49692 3.85889 2.71978 3.85889 1.74862C3.8366 0.755565 3.11436 0 1.9408 0C0.767434 0 0.00012207 0.75558 0.00012207 1.74862C0.00012207 2.71983 0.74452 3.49692 1.89571 3.49692H1.918H1.9181ZM5.53147 15H8.96177V9.34824C8.96177 9.04576 8.98406 8.7436 9.07465 8.52738C9.32263 7.92304 9.88705 7.29712 10.8346 7.29712C12.0759 7.29712 12.5725 8.2252 12.5725 9.5857V14.9999H16.0026V9.19695C16.0026 6.08834 14.3103 4.64193 12.0533 4.64193C10.2028 4.64193 9.39033 5.65626 8.93895 6.34712H8.96185V4.87932H5.53155C5.57657 5.82897 5.53155 14.9998 5.53155 14.9998L5.53147 15Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://github.com/scarfacedotcom" target="_blank" rel="noopener noreferrer">
              {/* GitHub */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00368 3.95708C5.73225 3.95708 3.90011 5.76059 3.90011 7.99653C3.90011 10.2325 5.73225 12.036 8.00368 12.036C10.2751 12.036 12.1073 10.2325 12.1073 7.99653C12.1073 5.76059 10.2751 3.95708 8.00368 3.95708ZM8.00368 10.6227C6.53583 10.6227 5.33583 9.44497 5.33583 7.99653C5.33583 6.54809 6.53225 5.37036 8.00368 5.37036C9.47511 5.37036 10.6715 6.54809 10.6715 7.99653C10.6715 9.44497 9.47154 10.6227 8.00368 10.6227ZM13.2322 3.79184C13.2322 4.31567 12.8037 4.73403 12.2751 4.73403C11.743 4.73403 11.318 4.31216 11.318 3.79184C11.318 3.27153 11.7465 2.84966 12.2751 2.84966C12.8037 2.84966 13.2322 3.27153 13.2322 3.79184ZM15.9501 4.74809C15.8894 3.48598 15.5965 2.36802 14.6572 1.44692C13.7215 0.52583 12.5858 0.237549 11.3037 0.174268C9.98225 0.100439 6.02154 0.100439 4.70011 0.174268C3.42154 0.234033 2.28583 0.522314 1.34654 1.44341C0.407258 2.3645 0.117972 3.48247 0.0536865 4.74458C-0.0213135 6.04536 -0.0213135 9.94418 0.0536865 11.245C0.114401 12.5071 0.407258 13.625 1.34654 14.5461C2.28583 15.4672 3.41797 15.7555 4.70011 15.8188C6.02154 15.8926 9.98225 15.8926 11.3037 15.8188C12.5858 15.759 13.7215 15.4707 14.6572 14.5461C15.593 13.625 15.8858 12.5071 15.9501 11.245C16.0251 9.94418 16.0251 6.04887 15.9501 4.74809ZM14.243 12.6407C13.9644 13.3297 13.4251 13.8606 12.7215 14.1383C11.668 14.5497 9.16797 14.4547 8.00368 14.4547C6.8394 14.4547 4.33583 14.5461 3.28583 14.1383C2.58583 13.8641 2.04654 13.3332 1.7644 12.6407C1.34654 11.6036 1.44297 9.14262 1.44297 7.99653C1.44297 6.85044 1.35011 4.38598 1.7644 3.35239C2.04297 2.66333 2.58226 2.13247 3.28583 1.85474C4.3394 1.44341 6.8394 1.53833 8.00368 1.53833C9.16797 1.53833 11.6715 1.44692 12.7215 1.85474C13.4215 2.12895 13.9608 2.65981 14.243 3.35239C14.6608 4.3895 14.5644 6.85044 14.5644 7.99653C14.5644 9.14262 14.6608 11.6071 14.243 12.6407Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
