import React from "react";

const Works = () => {
  return (
    <section className="flex flex-col gap-8 py-8 mt-28 relative">
      <header className="flex items-center gap-3 mb-10 justify-center">
        <h4 className="text-3xl font-bold">My Work</h4>
        <div className="w-[80px] h-[11px] bg-[#15161A] rounded-xl"></div>
      </header>

      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex flex-col gap-3 items-center">
            <div className="size-[58px] bg-white rounded-full"></div>
            <h4 className="text-white text-lg font-bold">Blockfuse Labs</h4>
            <div className="w-full bg-[#15161A] border border-[#626468] rounded-2xl h-[130px] flex items-center justify-center text-center text-sm text-white">
              A training hub building Africa’s next generation of blockchain
              developers.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
