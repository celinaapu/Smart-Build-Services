import Image from "next/image";
import ChatBubbleIcon from "@/app/assets/Icons/ChatIcon";
import BookIcon from "@/app/assets/Icons/BookIcon";
import MinrateIcon from "@/app/assets/Icons/MinRateIcon";
import SmileyIcon from "@/app/assets/Icons/SmileyIcon";
import JobIcon from "@/app/assets/Icons/JobIcon";
import { RatingIcon } from "@/app/assets/Icons/Rating";

interface PortfolioHeaderProps {
  name: string;
  profession: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  minRate: string;
  jobsCount: string;
  reviewsCount: string;
  onMessage: () => void;
  onBookNow: () => void;
}

export const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  name,
  profession,
  location,
  description,
  image,
  rating,
  minRate,
  jobsCount,
  reviewsCount,
  onMessage,
  onBookNow,
}) => {
  return (
    <div className="bg-white p-4 shadow-sm">
      {/* Portfolio Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">{name}</h1>
            <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{profession}</p>
          <p className="text-xs text-gray-500">{location}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <RatingIcon
                key={i}
                className={`w-3 h-3 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <MinrateIcon className="w-4 h-4 text-gray-600 mb-2" />
          <div className="text-xs text-gray-600 mb-1">Min. rate</div>
          <div className="font-semibold">{minRate}</div>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <JobIcon className="w-4 h-4 text-gray-600 mb-2" />
          <div className="text-xs text-gray-600 mb-1">Jobs</div>
          <div className="font-semibold">{jobsCount}</div>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <SmileyIcon className="w-4 h-4 text-gray-600 mb-2" />
          <div className="text-xs text-gray-600 mb-1">Reviews</div>
          <div className="font-semibold">{reviewsCount}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onMessage}
          className="flex items-center justify-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg flex-1 hover:bg-purple-50 transition-colors"
        >
          <ChatBubbleIcon className="w-4 h-4" />
          Message
        </button>
        <button
          onClick={onBookNow}
          className="flex items-center justify-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <BookIcon className="w-4 h-4" />
          Book Now
        </button>
      </div>
    </div>
  );
};
