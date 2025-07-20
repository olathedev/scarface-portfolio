import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProfessionalCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });
      tl.from(cardRef.current, { opacity: 0, y: 40 })
        .from(imageRef.current, { opacity: 0, scale: 0.95 }, "-=0.5")
        .from(titleRef.current, { opacity: 0, y: 20 }, "-=0.4")
        .from(descRef.current, { opacity: 0, y: 20 }, "-=0.4")
        .from(
          tagsRef.current ? Array.from(tagsRef.current.children) : [],
          { opacity: 0, y: 20, stagger: 0.1 },
          "-=0.3"
        );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full bg-card-bg p-6 rounded-2xl flex flex-col"
    >
      <div
        ref={imageRef}
        className="h-[300px] w-full bg-white rounded-xl relative"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl border-primary"
          priority
        />
      </div>
      <h5 ref={titleRef} className="text-xl font-meidum mt-8">
        {title}
      </h5>
      <p ref={descRef} className="text-sm text-gray-400 mt-2">
        {description}
      </p>
      <div ref={tagsRef} className="flex flex-wrap gap-4 mt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block mt-3 px-3 py-2 bg-primary/15 text-xs text-primary rounded-full w-fit whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
