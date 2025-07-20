"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// Mock data for demonstration
const blogPosts = [
  {
    slug: "building-sustainable-web3-communities",
    title: "Building Sustainable Web3 Communities",
    subtitle:
      "Lessons learned from creating and nurturing ETHJos and ETHBenue. How to build lasting communities that empower local developers and bridge the gap with global ecosystems.",
    date: "25th August 2025",
    readTime: "8 mins read",
    image: "/hackmd.png",
    content: `
      HackMD helped us build trust
I’m Peter, though most people in the ecosystem know me as Scarface. I’m the Co-founder and CEO of Blockfuse Labs here in Jos, Nigeria. I’ve spent the last few years building in the blockchain space, working to create real opportunities for young African developers, especially in underserved communities.

This is the story of how HackMD quietly became one of our most valuable tools for learning, documenting, and building a culture of trust.

Building a Community from Scratch
When we started Blockfuse Labs, our main goal was clear: equip young talents with the skills and confidence to build impactful Web3 products.

One of our biggest challenges has always been access, access to funding, reliable infrastructure, and sometimes even stable electricity. But beyond those hurdles, we were trying to build something deeper: a culture of consistency, accountability, and collaboration. That doesn’t happen overnight, especially when you’re starting from scratch.

Discovering HackMD
I first came across HackMD during the Ethereum Protocol Fellowship Cohort IV. At the time, our instructor required us to use it for weekly reports. Honestly, I thought it was just another note-taking app.

But as soon as I started using it, I realized how clean and frictionless it was. No login walls, no heavy UI, just a straightforward, collaborative space where I could document and share progress easily.

When we launched Blockfuse Labs, it felt natural to make HackMD part of our workflow. We started using it for everything from weekly updates to curriculum notes. Over time, it became the backbone of how we work.

Showing the Work
HackMD quickly turned into much more than a note-taking tool for us. It became the place where we show our work—where everyone’s progress, challenges, and breakthroughs are documented in real time.

Every student in our program uses HackMD to track their journey, from writing “Hello World” to deploying smart contracts on mainnet. It’s helped us create an environment of accountability and visibility.

One of my favorite moments was when a student shared a detailed write-up about a smart contract bug they encountered. By the next day, three other students had read it and fixed similar issues in their own projects.

HackMD didn’t just improve our writing—it quietly became a bridge for connection, transparency, and deeper technical conversations. It made learning feel shared, and that shifted the entire vibe of our program.

Building Culture Through Clear Communication
I’ve always believed you can have all the talent in the world, but if knowledge is hoarded or scattered, progress slows down. That’s why we’ve built our culture around open learning, sharing what you know as you grow.

HackMD fits perfectly into that philosophy. It supports transparency, and it makes documentation feel like a natural part of the process, rather than an obligation.

A Single Source of Truth
We rely on HackMD for almost everything: weekly reflections, internal documentation, curriculum notes, event proposals, even pitch decks.

Everyone has access to everyone else’s docs, so picking up context doesn’t require endless meetings. There’s also this quiet but powerful accountability, if your doc is empty, everyone can see it.

One time, we were planning a decentralized hackathon with partners across three different countries. Time zones and unreliable connectivity made coordination almost impossible. Instead of juggling 100 Slack messages, we created a single HackMD doc everyone contributed to. That document became our source of truth and helped us deliver everything on schedule.

Scaling with Simplicity
As we grow into more cohorts, HackMD will continue to be a core part of our onboarding. I see it as each student’s personal dev blog and accountability tracker.

We’re also planning to experiment with real-time collaborative project planning in HackMD across different builder teams. My vision is to create a living archive of our community’s growth—so future students can learn from the progress and struggles of those who came before them.

Advice for Other Community Builders
If you’re considering HackMD for your own community or team, my advice is simple: start small and consistent. Don’t expect it to be your full-stack tool, just use it for what it does best: shared knowledge, collaborative notes, and reflections.

Create rituals around it, like weekly posts or team retrospectives, so it naturally becomes part of your culture.

What makes HackMD special for us is how low the barriers are. Anyone can jump in and contribute. It’s transparent. It encourages documentation as part of growth, not just an admin task. For us, it feels like Google Docs but lighter, and much friendlier to developers.

Reflections on Trust and Transparency
HackMD has helped us build trust—something that’s essential when you’re leading a grassroots community with limited resources.

When transparency isn’t optional but survival, tools that support openness are invaluable. HackMD isn’t fancy, but it’s effective. And in a place like Jos, that means a lot.
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
      <div className="container mx-auto mt-22 md:mt-38 px-4 md:px-20">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden  bg-card-blog">
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
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              {post.title}
            </h1>
            <div className="text-primary font-semibold text-sm md:text-base mb-1">
              {post.date} • {post.readTime}
            </div>
            <div className="text-text-secondary text-base md:text-lg mb-2">
              {post.subtitle}
            </div>
          </div>
        </div>
      </div>
      {/* Blog content */}
      <div className="container mx-auto  px-4 md:px-20 mt-10 md:mt-16 pb-20">
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
