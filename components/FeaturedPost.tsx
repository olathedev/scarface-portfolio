import React from "react";

interface FeaturedPostProps {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  image: string;
  featuredTag?: string;
  onClick?: () => void;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  title,
  subtitle,
  date,
  readTime,
  image,
  featuredTag = "Featured Story",
  onClick,
}) => {
  return (
    <div
      className="h-[300px] cursor-pointer w-full bg-center bg-cover rounded-xl overflow-hidden relative hover:scale-[1.02] transition-transform duration-300"
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={onClick}
    >
      <div className="bg-gradient-to-t from-black via-black/80 to-transparent bottom-0 absolute h-full w-full"></div>

      {/* Featured Content */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs w-fit mb-4">
          {featuredTag}
        </div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-8">
          {title}
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
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>

        <div className="mt-4">
          <div className="flex text-sm text-gray-400 gap-2">
            <p>{date}</p> | <p>{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost; 