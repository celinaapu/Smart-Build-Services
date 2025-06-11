import React, { useState, useRef, useEffect } from "react";

import CategoryIcon from "@/app/assets/Icons/category";
import MapPin from "@/app/assets/Icons/MapPin";
import { DropdownIcon } from "@/app/assets/Icons/DropDown";
import PricingIcon from "@/app/assets/Icons/Pricing";
import GenderIcon from "@/app/assets/Icons/Gender";
import { RatingIcon } from "@/app/assets/Icons/Rating";
import CloseIcon from "../assets/Icons/CloseIcon";

// Popover Components
interface PopoverProps {
  onClose: () => void;
}

const PriceRangePopover: React.FC<PopoverProps> = ({ onClose }) => (
  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-6 z-50">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Choose range</h3>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        ×
      </button>
    </div>
    <div className="mb-6">
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-green-400 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="w-3 h-3 bg-green-400 rounded-full -mt-1"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full -mt-1"></div>
        </div>
      </div>
    </div>
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="text-sm text-gray-900 mb-1 block">Min</label>
        <input
          type="text"
          value="₦8,000"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none"
          readOnly
        />
      </div>
      <div className="flex-1">
        <label className="text-sm text-gray-900 mb-1 block">Max</label>
        <input
          type="text"
          value="₦100,000"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none"
          readOnly
        />
      </div>
    </div>
  </div>
);

const RatingPopover: React.FC<PopoverProps> = ({ onClose }) => {
  const [selectedRating, setSelectedRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (rating: number) => setSelectedRating(rating);
  const handleStarHover = (rating: number) => setHoverRating(rating);
  const handleStarLeave = () => setHoverRating(0);

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Rating</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <CloseIcon />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const isActive = star <= (hoverRating || selectedRating);
            return (
              <RatingIcon
                key={star}
                className={`w-8 h-8 cursor-pointer transition-colors ${
                  isActive
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-200"
                }`}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LocationPopover: React.FC<PopoverProps> = ({ onClose }) => (
  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border p-4 z-50">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Change current location
      </h3>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        <CloseIcon />
      </button>
    </div>
    <div className="mb-4 relative">
      <input
        type="text"
        placeholder="Add location"
        className="w-full px-3 py-2 pr-10 text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
    <div className="text-sm text-gray-900">
      Current location: Ikeja, Surulere
    </div>
  </div>
);

const GenderPopover: React.FC<PopoverProps> = ({ onClose }) => (
  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-50">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Select gender of artisan
      </h3>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        ×
      </button>
    </div>
    <div className="flex gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="gender"
          value="male"
          defaultChecked
          className="sr-only"
        />
        <div className="w-4 h-4 border-2 border-green-400 rounded-full bg-green-400"></div>
        <span className="text-sm text-gray-700">Male</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="gender" value="female" className="sr-only" />
        <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
        <span className="text-sm text-gray-700">Female</span>
      </label>
    </div>
  </div>
);

const SecondNavber: React.FC = () => {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActivePopover(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePopover = (popoverName: string) => {
    setActivePopover(activePopover === popoverName ? null : popoverName);
  };

  return (
    <header className="border-b bg-eaa-purple-300 px-4 py-3" ref={navRef}>
      <div className="flex flex-grow w-[1145px] items-center justify-between mx-auto gap-6 bg-eaa-purple-300 px-6 py-4 text-white">
        <span className="text-sm font-medium">Filters:</span>

        <div className="flex w-[116px] gap-6 items-center cursor-pointer hover:opacity-80">
          <CategoryIcon className="w-[20px] h-[20px]" />
          <span className="text-[13px]">Category</span>
        </div>

        <div className="relative flex w-[219px] gap-6 items-center">
          <button
            className="flex items-center gap-6 hover:opacity-80"
            onClick={() => togglePopover("location")}
          >
            <MapPin />
            <span className="text-[13px]">Current location</span>
            <DropdownIcon width="20" height="20" />
          </button>
          {activePopover === "location" && (
            <LocationPopover onClose={() => setActivePopover(null)} />
          )}
        </div>

        <div className="relative flex w-[148px] items-center gap-6">
          <button
            className="flex items-center gap-6 hover:opacity-80"
            onClick={() => togglePopover("rating")}
          >
            <RatingIcon width="20" height="20" />
            <span className="text-[13px]">Rating</span>
            <DropdownIcon width="20" height="20" />
          </button>
          {activePopover === "rating" && (
            <RatingPopover onClose={() => setActivePopover(null)} />
          )}
        </div>

        <div className="relative flex w-[152px] items-center gap-6">
          <button
            className="flex items-center gap-6 hover:opacity-80"
            onClick={() => togglePopover("pricing")}
          >
            <PricingIcon className="w-[20px] h-[20px]" />
            <span className="text-[13px]">Pricing</span>
            <DropdownIcon width="20" height="20" />
          </button>
          {activePopover === "pricing" && (
            <PriceRangePopover onClose={() => setActivePopover(null)} />
          )}
        </div>

        <div className="relative flex w-[158px] items-center gap-6">
          <button
            className="flex items-center gap-6 hover:opacity-80"
            onClick={() => togglePopover("gender")}
          >
            <GenderIcon className="w-[20px] h-[20px]" />
            <span className="text-[13px]">Gender</span>
            <DropdownIcon width="20" height="20" />
          </button>
          {activePopover === "gender" && (
            <GenderPopover onClose={() => setActivePopover(null)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default SecondNavber;
