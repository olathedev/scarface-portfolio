"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PortableText,
  type SanityDocument,
  type PortableTextComponents,
} from "next-sanity";
import { urlFor } from "@/lib/sanityImage";
import { calculateReadTime } from "@/lib/CalculatereadTime";

type BlogDetailsProps = {
  post: SanityDocument;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="my-4 leading-relaxed text-base md:text-lg">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default function BlogDetails({ post }: BlogDetailsProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const postImageUrl = post.image ? urlFor(post.image) : null;
  const readTime = calculateReadTime(post.body);
  const blogUrl = typeof window !== "undefined" ? window.location.origin + pathname : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(blogUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="container mx-auto min-h-screen max-w-3xl px-4  py-24 md:py-36 flex flex-col items-center">
      <Link href="/blog" className="hover:underline self-start mb-6">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-xl w-full max-h-[400px] object-cover mb-8"
          priority
        />
      )}
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center w-full">
        {post.title}
      </h1>
      <div className="text-gray-400 mb-6 text-center w-full">
        {post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString()
          : ""} {" "}
        • {readTime}
      </div>
      {/* Share section */}
      <div className="flex items-center gap-6 mb-10">
        {/* X */}
        <a
          href={`https://x.com/intent/tweet?url=${encodeURIComponent(
            blogUrl
          )}&text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
        >
          <img src="/x.svg" alt="X" className="w-5 h-5" />
        </a>
        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            blogUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
        </a>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            post.title + " " + blogUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
        </a>
        {/* Copy link */}
        <button
          onClick={handleCopy}
          className="w-7 h-7 flex  items-center justify-center bg-gray-800 rounded hover:bg-gray-700 transition relative"
          aria-label="Copy link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>

          {copied && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow">
              Copied!
            </span>
          )}
        </button>
      </div>
      <div className="prose prose-invert prose-lg max-w-none w-full max-w-3xl">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={components} />
        )}
      </div>
    </main>
  );
} 