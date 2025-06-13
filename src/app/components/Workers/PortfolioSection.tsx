import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
  onViewMore: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  items,
  onViewMore,
}) => {
  const displayItems = items.slice(0, 2); 

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-3">Portfolio</h2>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {displayItems.map((item) => (
          <div key={item.id} className="relative">
            <div className="relative w-full h-24 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-purple-600 mt-2 font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={onViewMore}
        className="w-full py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
      >
        View more...
      </button>
    </div>
  );
};
