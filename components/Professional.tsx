import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ProfessionalCard } from "./ProfessionalCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Professional = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });
      tl.from(headerRef.current, { opacity: 0, y: -30 }).from(
        introRef.current,
        { opacity: 0, y: 20 },
        "-=0.5"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-16 md:mt-28 px-4 md:px-0"
      id="#professional"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-20 lg:gap-44">
        <div>
          <header
            ref={headerRef}
            className="flex flex-col md:flex-row items-center gap-3 mb-2 text-center md:text-left justify-center md:justify-start"
          >
            <h4 className="text-2xl md:text-3xl font-bold">
              Professional Highlights
            </h4>
            <div className="w-[60px] md:w-[80px] h-[8px] opacity-40 md:h-[11px] bg-primary rounded-xl"></div>
          </header>

          <p
            ref={introRef}
            className="text-gray-400 md:text-lg text-center md:text-start"
          >
            A snippet into my professional achivements and activities
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-20 lg:gap-28">
          <ProfessionalCard
            imageSrc="/im3.JPG"
            imageAlt="About Image"
            title="Introduced 10,000+ to Blockchain"
            description="Designed and executed onboarding campaigns, workshops, and digital outreach that have introduced over 10,000 Africans to the world of blockchain technology, DeFi, and Web3 innovation."
            tags={["Onboarding", "Blockchain Literacy", "Ecosystem Growth"]}
          />

          <ProfessionalCard
            imageSrc="/im1.JPG"
            imageAlt="About Image"
            title="Built Thriving Web3 Communities: ETHJos & ETHBenue"
            description="Founded and nurtured ETHJos and ETHBenue, two fast-growing Ethereum communities focused on developer empowerment, grassroots education, and localized innovation. These communities serve as bridges between local talent and the global Ethereum ecosystem."
            tags={[
              "Community Building",
              "Leadership",
              "Ethereum",
              "Grassroots Movement",
            ]}
          />

          <ProfessionalCard
            imageSrc="/im3.JPG"
            imageAlt="About Image"
            title="100+ Developers Trained"
            description="Through Blockfuse Labs and ecosystem partnerships, led immersive developer programs that have trained over 100 blockchain engineers in Solidity, Cairo, smart contracts, and decentralized infrastructure."
            tags={["Mentorship", "Engineering", "Developer Education"]}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-20 lg:gap-28 mt-10 lg:mt-0">
        <ProfessionalCard
          imageSrc="/im1.JPG"
          imageAlt="About Image"
          title="Co-Founded Blockfuse Labs"
          description="Co-founding Blockfuse Labs was driven by a vision to bridge the gap between African talent and the global blockchain industry. Through hands-on training, mentorship, and real-world projects, we’ve empowered aspiring developers to build, innovate, and lead in Web3."
          tags={["Leadership", "Engineering"]}
        />

        <ProfessionalCard
          imageSrc="/im4.JPG"
          imageAlt="About Image"
          title="Web3 Product Strategist"
          description="Developed and executed product strategies for innovative Web3 solutions, driving adoption and user engagement. Collaborated with cross-functional teams to deliver impactful blockchain products from concept to launch. Passionate about leveraging decentralized technologies to solve real-world problems and create value."
          tags={["Leadership", "Engineering"]}
        />

        <ProfessionalCard
          imageSrc="/im1.JPG"
          imageAlt="About Image"
          title="1000+ People Trained on Crypto Trading"
          description="Led comprehensive programs that introduced over 1,000 individuals to the fundamentals of cryptocurrency trading, empowering them with financial literacy, market insight, and practical skills to navigate the crypto space."
          tags={["Education", "Empowerment", "Trading"]}
        />

        <ProfessionalCard
          imageSrc="/im4.JPG"
          imageAlt="About Image"
          title="Web3 Product Strategist"
          description="Developed strategies for impactful Web3 solutions, collaborating across teams to launch decentralized products focused on real-world utility, scalability, and user-centered design."
          tags={["Product Development", "Innovation", "Engineering"]}
        />
      </div>
    </div>
  );
};

export default Professional;
