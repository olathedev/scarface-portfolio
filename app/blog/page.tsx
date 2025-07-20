"use client";
import Nav from "@/components/Nav";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { urlFor } from '@/lib/sanityImage';

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    image {
      asset->{
        _id,
        url
      }
    },
    snippet,
    body
  }`;

const options = { next: { revalidate: 30 } };


type Props = {};

// Utility function to calculate read time from body
function calculateReadTime(body: any[]): string {
  // Extract all text from blocks
  const text = body
    ?.map(block => {
      if (block._type === 'block' && Array.isArray(block.children)) {
        return block.children.map((child: any) => child.text).join(' ');
      }
      return '';
    })
    .join(' ');
  const words = text ? text.trim().split(/\s+/).length : 0;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const Blog = (props: Props) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);

  const [posts, setPosts] = React.useState<SanityDocument[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
        console.log(data)
        setPosts(data);
      } catch (error) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

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
        {!loading && posts.length > 0 && (
          <Link href={`/blog/${posts[0].slug?.current ?? ''}`}>
        <FeaturedPost
              title={posts[0].title}
              subtitle={posts[0].snippet}
              date={posts[0].publishedAt ? new Date(posts[0].publishedAt).toLocaleDateString() : ''}
              readTime={calculateReadTime(posts[0].body)}
              image={posts[0].image ? urlFor(posts[0].image) : "/hackmd.png"}
              onClick={() => {}}
            />
          </Link>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(1).map((blog, index) => (
            <Link key={index} href={`/blog/${blog.slug?.current ?? ''}`} className="block h-full">
              <BlogCard
                title={blog.title}
                subtitle={blog.snippet}
                date={blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ''}
                readTime={calculateReadTime(blog.body)}
                image={blog.image ? urlFor(blog.image) : ""}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
