"use client";

import React, { useState } from "react";
import CloseIcon from "@/app/assets/Icons/CloseIcon";
import Search from "@/app/assets/Icons/Search";
import { CloseCategorySelector } from "../types";

const categories = [
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber●",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
  "Barber",
  "Barber",
  "Plumber",
  "Electrician",
];

export default function CategorySelector({ onClose }: CloseCategorySelector) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Barber",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategoryPanel, setShowCategoryPanel] = useState(true);

  const toggleCategory = (category: string, index: number) => {
    const categoryKey = `${category}-${index}`;
    setSelectedCategories((prev) =>
      prev.includes(categoryKey)
        ? prev.filter((c) => c !== categoryKey)
        : [...prev, categoryKey]
    );
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" right-0 top-full inset-0 bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-lg mx-4 flex flex-col">
        <div className="w-full flex items-center justify-between p-4 border-b">
          <h2 className="text-[14px] w-[90%] text-center flex item-center justify-center font-semibold text-gray-700">
            Category
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 w-[10%] hover:text-gray-600 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-4 border-b">
          <div className="relative text-gray-600">
            <input
              type="text"
              placeholder="Search category"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-[12px] text-gray-900 pl-4 pr-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Search className="absolute text-gray-900 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-4 gap-3">
            {filteredCategories.map((category, index) => {
              const categoryKey = `${category}-${index}`;
              const isSelected = selectedCategories.includes(categoryKey);

              return (
                <button
                  key={categoryKey}
                  onClick={() => toggleCategory(category, index)}
                  className={`px-3 py-2 rounded-full hover:border-eaa-purple-300 hover:text-eaa-purple-300 border border-gray-500 text-[10px] transition-colors ${
                    isSelected
                      ? "text-eaa-purple-300 border-eaa-purple-300"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-eaa-purple-300  hover:text-eaa-purple-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
