import React from "react";
import BlogCard from "./BlogCard";
import { urlFor } from "@/lib/sanityImage";
import Link from "next/link";
import { calculateReadTime } from "@/lib/CalculatereadTime";

type BlogProps = {
  posts: any[];
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section
      className="flex flex-col gap-8 py-4  relative px-4 md:px-0"
      id="blog"
    >
      <header className="flex flex-col md:flex-row items-center gap-3 md:mb-10 justify-center">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary">
          Blog
        </h4>
        <div className="w-[40px] sm:w-[60px] md:w-[80px] h-[6px] sm:h-[8px] md:h-[11px] opacity-40 bg-primary rounded-xl"></div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((blog, index) => (
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

      <div className="flex justify-center">
        <Link href="/blog" className="bg-primary py-3 px-6 text-white w-full sm:w-auto rounded mt-4 cursor-pointer text-sm sm:text-base text-center">
          Read More Posts
        </Link>
      </div>
    </section>
  );
};

export default Blog;
