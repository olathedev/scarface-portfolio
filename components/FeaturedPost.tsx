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

const splitTitle = (title: string) => {
  if (!title) return ['', ''];
  const words = title.split(' ');
  if (words.length < 2) return [title, ''];
  const mid = Math.floor(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  title,
  subtitle,
  date,
  readTime,
  image,
  featuredTag = "Featured Story",
  onClick,
}) => {
  const [firstLine, secondLine] = splitTitle(title);
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
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          {firstLine}<br />{secondLine}
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl line-clamp-3">
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