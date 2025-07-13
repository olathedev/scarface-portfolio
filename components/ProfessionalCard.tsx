import Image from "next/image";

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
  }) => (
    <div className="w-full bg-[#0E0E0E] p-6 rounded-2xl flex flex-col">
      <div className="h-[300px] w-full bg-white rounded-xl relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl border-primary"
          priority
        />
      </div>
      <h5 className="text-xl font-meidum mt-8">{title}</h5>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
      <div className="flex gap-4 mt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block mt-3 px-3 py-2 bg-primary/15 text-xs text-primary rounded-full w-fit"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );