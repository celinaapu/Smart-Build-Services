"use client";

import { useState } from "react";
import Search from "../../assets/Icons/Search";
import Menu from "../../assets/Icons/Menu";
import Share from "../../assets/Icons/Share";
import TrendingArtisans from "../../components/TrendingArt";
import ArtisansForYou from "../../components/ArtisansForYou";
import CategoryIcon from "@/app/assets/Icons/category";
import MapPin from "@/app/assets/Icons/MapPin";
import { DropdownIcon } from "@/app/assets/Icons/DropDown";
import PricingIcon from "@/app/assets/Icons/Pricing";
import GenderIcon from "@/app/assets/Icons/Gender";
import { RatingIcon } from "@/app/assets/Icons/Rating";
import { useSidebar } from "@/app/components/ContextProvider";

const categories = [
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "More...",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
  "Electrician",
];

export default function KraftaaMain() {
  const { toggleSidebar } = useSidebar();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Barber",
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className=" border-b bg-eaa-purple-300 px-4 py-3">
        <div className="flex flex-grow  w-[1145px] items-center justify-between mx-auto gap-6 bg-eaa-purple-300 px-6 py-4 text-white">
          <span className="text-sm font-medium">Filters:</span>
          <div className="flex w-[116px] gap-6 items-center ">
            <CategoryIcon className="w-[20px] h-[20px]" />
            <span className="text-[13px]">Category</span>
          </div>
          <div className="flex w-[219px] gap-6 items-center">
            <MapPin width="16" height="16" />
            <span className="text-[13px]">Current location</span>
            <DropdownIcon width="20" height="20" />
          </div>
          <div className="flex w-[148px] items-center gap-6">
            <RatingIcon width="20" height="20" />
            <span className="text-[13px]">Rating</span>
            <DropdownIcon width="20" height="20" />
          </div>
          <div className="flex w-[152px] items-center gap-6">
            <PricingIcon className="w-[20px] h-[20px]" />
            <span className="text-[13px]">Pricing</span>
            <DropdownIcon width="20" height="20" />
          </div>
          <div className="flex w-[158px] items-center gap-6">
            <GenderIcon className="w-[20px] h-[20px]" />
            <span className="text-[13px]">Gender</span>
            <DropdownIcon width="20" height="20" />
          </div>
        </div>
      </header>
      <div className="text-center font-semi-bold pt-4 ">
        <h1>Trending Artisans</h1>
      </div>
      <div className="flex mx-auto">
        <div className="flex-1 p-6">
          <TrendingArtisans />
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              Choose Category
            </h3>
            <div className="w-[85%] flex flex-wrap gap-3 mt-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full border text-[10px] transition-colors ${
                    selectedCategories.includes(category)
                      ? "text-purple-600 border-purple-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-purple-300"
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => toggleSidebar("categories")}
                className="text-eaa-purple-300 text-[10px] hover:underline"
              >
                View more...
              </button>
            </div>
          </div>
          <ArtisansForYou />
        </div>
      </div>
    </div>
  );
}
