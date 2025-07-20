import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      title: "HackMD helped us build trust",
      subtitle: "I'm Peter, though most people in the ecosystem know me as Scarface. I'm the Co-founder and CEO of Blockfuse Labs here in Jos, Nigeria. I've spent the last few years building in the blockchain space, working to create real opportunities for young African developers, especially in underserved communities. This is the story of how HackMD quietly became one of our most valuable tools for learning, documenting, and building a culture of trust.",
      date: "10th August 2025",
      readTime: "15mins read",
      image: "/hackmd.png",
    },
    {
      title: "Building Web3 Communities in Africa",
      subtitle: "The journey of creating ETHJos and ETHBenue, two thriving Ethereum communities focused on developer empowerment and grassroots education. How we're bridging local talent with the global Ethereum ecosystem.",
      date: "15th August 2025",
      readTime: "12mins read",
      image: "/hackmd.png",
    },
    {
      title: "The Future of Blockchain Education",
      subtitle: "Through Blockfuse Labs and ecosystem partnerships, we've trained over 100 blockchain engineers. Here's what we've learned about effective developer education in the Web3 space.",
      date: "20th August 2025",
      readTime: "18mins read",
      image: "/hackmd.png",
    },
  ];

  return (
    <section
      className="flex flex-col gap-8 py-4  relative px-4 md:px-0"
      id="blog"
    >
      <header className="flex flex-col md:flex-row items-center gap-3 md:mb-10 justify-center">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Blog</h4>
        <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[6px] sm:h-[8px] md:h-[11px] opacity-40 bg-primary rounded-xl"></div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.date}
            readTime={blog.readTime}
            image={blog.image}
            onClick={() => {
              // Handle click - could navigate to blog post
              console.log(`Navigate to blog post: ${blog.title}`);
            }}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-primary py-3 px-6 w-full sm:w-auto rounded mt-4 cursor-pointer text-sm sm:text-base">
          Read More Posts
        </button>
      </div>
    </section>
  );
};

export default Blog;
