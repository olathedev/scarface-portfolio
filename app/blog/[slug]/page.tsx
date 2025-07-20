"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// Mock data for demonstration
const blogPosts = [
  {
    slug: "building-sustainable-web3-communities",
    title: "Building Sustainable Web3 Communities",
    subtitle: "Lessons learned from creating and nurturing ETHJos and ETHBenue. How to build lasting communities that empower local developers and bridge the gap with global ecosystems.",
    date: "25th August 2025",
    readTime: "8 mins read",
    image: "/hackmd.png",
    content: `
      <p>This is a sample blog post content. Replace with real content.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
    `,
  },
  // Add more posts as needed
];

export default function BlogDetails() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts.find((b) => b.slug === slug) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header split layout */}
      <div className="container mx-auto mt-10 md:mt-20 px-4 md:px-0">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg bg-card-blog">
          {/* Image half */}
          <div className="md:w-1/2 w-full h-56 md:h-[340px] relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
          {/* Details half */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-10 gap-4 bg-background">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{post.title}</h1>
            <div className="text-primary font-semibold text-sm md:text-base mb-1">{post.date} • {post.readTime}</div>
            <div className="text-text-secondary text-base md:text-lg mb-2">{post.subtitle}</div>
          </div>
        </div>
      </div>
      {/* Blog content */}
      <div className="container mx-auto max-w-3xl px-4 md:px-0 mt-10 md:mt-16 pb-20">
        <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
} 