import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section
      className="flex flex-col gap-8 py-4  relative px-4 md:px-0"
      id="blog"
    >
      <header className="flex flex-col md:flex-row items-center gap-3 md:mb-10 justify-center">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Blog</h4>
        <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[6px] sm:h-[8px] md:h-[11px] opacity-40 bg-primary rounded-xl"></div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((blog, index) => (
          <div className="w-full bg-[#0E0E0E] p-4 rounded-xl">
            <div className="h-56 w-full bg- rounded relative overflow-hidden">
              <Image src="/hackmd.png" alt="" fill className="object-cover" />
            </div>

            <div className="flex flex-col">
              <h2 className="mt-4 text-xl text-white font-semibold mb-2">
                HackMD helped us build trust
              </h2>
              <div className="flex text-sm text-gray-500 gap-4">
                <p> 10th August 2025</p> | <p>15mins read</p>
              </div>
              <p className="line-clamp-4 mt-4 text-gray-300 ">
                I’m Peter, though most people in the ecosystem know me as
                Scarface. I’m the Co-founder and CEO of Blockfuse Labs here in
                Jos, Nigeria. I’ve spent the last few years building in the
                blockchain space, working to create real opportunities for young
                African developers, especially in underserved communities. This
                is the story of how HackMD quietly became one of our most
                valuable tools for learning, documenting, and building a culture
                of trust.
              </p>

              <p className="flex items-center text-gray-400 mt-4 cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}


      </div>

    <div className="flex justify-center">

      <button className="bg-primary py-3 px-10 rounded mt-4 cursor-pointer">Read More Posts</button>
    </div>
    </section>
  );
};

export default Blog;
