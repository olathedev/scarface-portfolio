import React from "react";
import AnimatedSection from "./animations/AnimatedSection";
import TimelineItem from "./reusbales/Timeline";

const Qualifications = () => {
const experiences: Array<{
    title: string;
    type: string;
    company: string;
    location: string;
    date: string;
    align: "left" | "right";
}> = [
    {
        title: "Chief Executive Officer",
        type: "Full-time",
        company: "BlockFuse Labs",
        location: "Remote",
        date: "August 2024 – Present",
        align: "left",
    },
    {
        title: "Blockchain Solutions Architect",
        type: "Consultant",
        company: "ChainBridge Technologies",
        location: "San Francisco, USA",
        date: "March 2023 – July 2024",
        align: "right",
    },
    {
        title: "Head of Blockchain Engineering",
        type: "Full-time",
        company: "CryptoNova",
        location: "Berlin, Germany",
        date: "January 2022 – February 2023",
        align: "left",
    },
    {
        title: "Lead Smart Contract Developer",
        type: "Part-time",
        company: "DeFiX",
        location: "London, UK",
        date: "June 2021 – December 2021",
        align: "right",
    },
];

  return (
    <AnimatedSection className="w-full flex flex-col gap-6 items-center my-14 py-6">
      <header className="text-center">
        <h1 className="text-3xl  text-black">
          Qualifications <span className="font-bold">and Experience</span>
        </h1>
        <h2 className="text-lg text-gray-600 mt-2">
          A track record of technical excellence, Educational Prowess and leadership
        </h2>
        <div className="flex justify-center mt-4">
          {/* <span className="block w-[100px] border-b-2 border-primary"></span> */}
        </div>
      </header>

      <div className="">
        <div className="relative ml-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-indigo-500"></div>
          <div className="space-y-12 py-12">
            {experiences.map((item, idx) => (
              <TimelineItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Qualifications;
