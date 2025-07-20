"use client";
import Nav from "@/components/Nav";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

type Props = {};

const Blog = (props: Props) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);

  const blogPosts = [
    {
      title: "Building Sustainable Web3 Communities",
      subtitle: "Lessons learned from creating and nurturing ETHJos and ETHBenue. How to build lasting communities that empower local developers and bridge the gap with global ecosystems.",
      date: "25th August 2025",
      readTime: "8 mins read",
    },
    {
      title: "The Future of DeFi in Africa",
      subtitle: "Exploring how decentralized finance can transform financial inclusion across the continent. Real-world applications and the challenges we need to overcome.",
      date: "22nd August 2025",
      readTime: "12 mins read",
    },
    {
      title: "Smart Contract Security Best Practices",
      subtitle: "Essential security patterns and practices for building robust smart contracts. Lessons from auditing and deploying contracts in production environments.",
      date: "20th August 2025",
      readTime: "15 mins read",
    },
    {
      title: "Onboarding 10,000+ Africans to Blockchain",
      subtitle: "The strategies and campaigns that helped us introduce blockchain technology to thousands of Africans. From grassroots workshops to digital outreach programs.",
      date: "18th August 2025",
      readTime: "10 mins read",
    },
    {
      title: "Blockchain Education: Beyond the Basics",
      subtitle: "Advanced topics in blockchain education, from zero-knowledge proofs to layer 2 scaling solutions. How we're preparing the next generation of Web3 builders.",
      date: "15th August 2025",
      readTime: "14 mins read",
    },
    {
      title: "The Role of Mentorship in Web3",
      subtitle: "How mentorship programs are shaping the future of blockchain development in Africa. Stories from our 100+ trained developers and their journey into Web3.",
      date: "12th August 2025",
      readTime: "9 mins read",
    },
    {
      title: "Crypto Trading: A Beginner's Guide",
      subtitle: "Fundamentals of cryptocurrency trading for African investors. Risk management, market analysis, and building sustainable trading strategies.",
      date: "10th August 2025",
      readTime: "11 mins read",
    },
    {
      title: "Web3 Product Strategy in Emerging Markets",
      subtitle: "Developing and launching Web3 products that resonate with African users. Understanding local needs and building solutions that create real value.",
      date: "8th August 2025",
      readTime: "13 mins read",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.7 },
      });
      tl.from(headerRef.current, { opacity: 0, y: -30 }).from(
        introRef.current,
        { opacity: 0, y: 20 },
        "-=0.5"
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className=" min-h-screen h-full ">
      <div
        className="bg-center bg-cover py-10 relative"
        style={{
          backgroundImage: "url(/im4.JPG)",
        }}
      >
        <div className="bg-black/90 top-0 absolute h-full w-full"></div>
        <div className="py-10">
        </div>

        <div className="container mx-auto flex flex-col gap-4 py-4 relative px-4 md:px-0 mt-10 ">
          <header
            ref={headerRef}
            className="flex flex-col md:flex-row items-center gap-3  text-center md:text-left justify-center md:justify-start"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-white">
              Blog & Insights
            </h4>
            <div className="w-[60px] md:w-[80px] h-[8px] opacity-40 md:h-[11px] bg-primary rounded-xl"></div>
          </header>

          <p
            ref={introRef}
            className="text-gray-400 md:text-lg text-center md:text-start max-w-2xl"
          >
            Exploring the intersection of blockchain technology, community
            building, and African innovation through thoughtful insights and
            experiences.
          </p>
        </div>
      </div>

      <div className="my-16 flex flex-col gap-8 container mx-auto px-4">
        {/* featured */}
        <FeaturedPost
          title="HackMD helped us build trust"
          subtitle="I'm Peter, though most people in the ecosystem know me as Scarface. I'm the Co-founder and CEO of Blockfuse Labs here in Jos, Nigeria."
          date="10th August 2025"
          readTime="5 mins read"
          image="/hackmd.png"
          onClick={() => {
            // Handle click - could navigate to blog post
            console.log("Navigate to HackMD blog post");
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <Link key={index} href={`/blog/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))}`} className="block h-full">
              <BlogCard
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                readTime={blog.readTime}
                image="/hackmd.png"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
