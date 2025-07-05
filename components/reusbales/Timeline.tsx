interface TimelineItemProps {
  title: string;
  type: string;
  company: string;
  location: string;
  date: string;
  align: "left" | "right";
}

export default function TimelineItem({
  title,
  type,
  company,
  location,
  date,
  align,
}: TimelineItemProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`relative flex w-full ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <div className="w-1/2 px-4">
        <div className="bg-white rounded-md p-4">
          <h3 className="font-semibold text-lg">
            {title}{" "}
            <span className="text-sm font-normal text-gray-600">({type})</span>
          </h3>
          <p className="text-gray-700">
            {company} – {location}
          </p>
          <p className="text-sm text-gray-500 mt-1">📅 {date}</p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
}
