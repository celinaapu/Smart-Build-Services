import React, { useState, useRef, useEffect } from "react";

import CategoryIcon from "@/app/assets/Icons/category";
import MapPin from "@/app/assets/Icons/MapPin";
import { DropdownIcon } from "@/app/assets/Icons/DropDown";
import PricingIcon from "@/app/assets/Icons/Pricing";
import GenderIcon from "@/app/assets/Icons/Gender";
import { RatingIcon } from "@/app/assets/Icons/Rating";
import CloseIcon from "../app/assets/Icons/CloseIcon";
import { useSidebar } from "./ContextProvider";

interface PopoverProps {
  onClose: () => void;
}
const PriceRangePopover: React.FC<PopoverProps> = ({ onClose }) => {
  const [minValue] = useState(8000);
  const [maxValue] = useState(100000);

  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Choose range</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-400 rounded-full relative"
              style={{ width: "60%" }}
            >
              <div className="absolute -right-1.5 -top-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
              <div className="absolute -left-1.5 -top-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Min
          </label>
          <input
            type="text"
            value={`₦${minValue.toLocaleString()}`}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            readOnly
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Max
          </label>
          <input
            type="text"
            value={`₦${maxValue.toLocaleString()}`}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

const RatingPopover: React.FC<PopoverProps> = ({ onClose }) => {
  const [selectedRating, setSelectedRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (rating: number) => setSelectedRating(rating);
  const handleStarHover = (rating: number) => setHoverRating(rating);
  const handleStarLeave = () => setHoverRating(0);

  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Rating</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
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
                className={`w-8 h-8 cursor-pointer transition-all duration-200 ${
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

const LocationPopover: React.FC<PopoverProps> = ({ onClose }) => {
  const [location, setLocation] = useState("");

  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Change current location
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Add location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 pr-12 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 placeholder-gray-500"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
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

      <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
        Current location:{" "}
        <span className="font-medium text-gray-900">Ikeja, Surulere</span>
      </div>
    </div>
  );
};

const GenderPopover: React.FC<PopoverProps> = ({ onClose }) => {
  const [selectedGender, setSelectedGender] = useState("male");

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Select gender of artisan
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ×
        </button>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 border-2 rounded-full transition-all ${
              selectedGender === "male"
                ? "border-green-400 bg-green-400"
                : "border-gray-300 group-hover:border-green-300"
            }`}
          >
            {selectedGender === "male" && (
              <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">Male</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 border-2 rounded-full transition-all ${
              selectedGender === "female"
                ? "border-green-400 bg-green-400"
                : "border-gray-300 group-hover:border-green-300"
            }`}
          >
            {selectedGender === "female" && (
              <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">Female</span>
        </label>
      </div>
    </div>
  );
};

const SecondNavber: React.FC = () => {
  const { toggleSidebar } = useSidebar();
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

        <div
          className="flex w-[116px] gap-6 items-center cursor-pointer hover:opacity-80"
          onClick={() => toggleSidebar("categories")}
        >
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
