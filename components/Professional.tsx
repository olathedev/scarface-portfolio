import Image from "next/image";
import React from "react";
import { ProfessionalCard } from "./ProfessionalCard";

const Professional = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-16 md:mt-28 px-4 md:px-0">
      <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-20 lg:gap-44">
        <div>
          <header className="flex flex-col md:flex-row items-center gap-3 mb-2 text-center md:text-left justify-center md:justify-start">
            <h4 className="text-2xl md:text-3xl font-bold">
              Professional Highlights
            </h4>
            <div className="w-[60px] md:w-[80px] h-[8px] opacity-40 md:h-[11px] bg-primary rounded-xl"></div>
          </header>

          <p className="text-gray-400 md:text-lg text-center md:text-start">
            A snippet into my professional achivements and activities
          </p>
        </div>

        <ProfessionalCard
          imageSrc="/im3.JPG"
          imageAlt="About Image"
          title="100+ developers trained"
          description="Led comprehensive training programs and workshops that equipped over 100 developers with practical skills in blockchain, Web3, and emerging technologies. Focused on hands-on learning, mentorship, and real-world project experience to accelerate career growth."
          tags={["Mentorship", "Engineering", "Leadership"]}
        />

        <ProfessionalCard
          imageSrc="/im1.JPG"
          imageAlt="About Image"
          title="Co-Founded Blockfuse Labs"
          description="Co-founding Blockfuse Labs was driven by a vision to bridge the gap between African talent and the global blockchain industry. Through hands-on training, mentorship, and real-world projects, we’ve empowered aspiring developers to build, innovate, and lead in Web3."
          tags={["Leadership", "Engineering"]}
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-20 lg:gap-40 mt-10 lg:mt-0">
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
      </div>
    </div>
  );
};

export default Professional;
