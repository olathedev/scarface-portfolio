"use client";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Preloader from "@/components/animations/PreLoader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedFadeText from "@/components/animations/AnimatedFadedText";
import Qualifications from "@/components/Qualifications";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Link from "next/link";
import Header2 from "@/components/Header2";
import About from "@/components/About2";
import Professional from "@/components/Professional";
import Header3 from "@/components/Header3";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import { client } from "@/sanity/client";

const BLOGS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  snippet,
  body
}`;
const options = { next: { revalidate: 30 } };

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await client.fetch(BLOGS_QUERY, {}, options);
      setPosts(data);
    }
    fetchBlogs();
  }, []);

  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-full  bg-center bg-cover">
      {/* {showPreloader && (
        <Preloader onFinish={() => setShowPreloader(false)} />
      )} */}
      <Header3 />

      <div className="container mx-auto text-text-primary mt-32 ">
        <About />

        <Professional />

        <Works />
      </div>

      <Gallery />
      <div className="container mx-auto text-text-primary mt-32 ">
        <Blog posts={posts} />
        <Testimonials />

        <Contact />
      </div>
    </div>
  );
}
