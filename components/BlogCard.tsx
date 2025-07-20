import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  image: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  subtitle,
  date,
  readTime,
  image,
  onClick,
}) => {
  return (
    <div className="w-full bg-[#0E0E0E] p-4 rounded-xl flex flex-col hover:scale-[1.02] transition-transform duration-300">
      <div className="h-48 sm:h-56 w-full rounded relative overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="mt-4 text-lg sm:text-xl text-white font-semibold mb-2">
          {title}
        </h2>
        <div className="flex text-xs sm:text-sm text-gray-500 gap-2 sm:gap-4 flex-wrap">
          <p>{date}</p> | <p>{readTime}</p>
        </div>
        <p className="line-clamp-4 mt-4 text-gray-300 text-sm sm:text-base">
          {subtitle}
        </p>

        <p 
          className="flex items-center text-gray-400 mt-4 cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out text-sm sm:text-base"
          onClick={onClick}
        >
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
  );
};

export default BlogCard; 