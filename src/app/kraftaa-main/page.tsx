"use client";

import { useState } from "react";
import TrendingArtisans from "../../components/TrendingArt";
import ArtisansForYou from "../../components/ArtisansForYou";
import { useSidebar } from "@/components/ContextProvider";
import SecondNavber from "@/components/SecondNavbar";

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
  const [selectedCategories] = useState<string[]>(["Barber"]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <SecondNavber />
      </div>

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
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Artisans for you
            </h3>
            <ArtisansForYou />
          </div>
        </div>
      </div>
    </div>
  );
}
