"use client";

import ArtisansForYou from "@/app/components/ArtisansForYou";
import SavedArtNavbar from "@/app/components/SavedArtNavbar";
import { useState } from "react";

export default function SavedArtisans() {
  const initialExpanded = true;
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  return (
    <div className="w-[100%]">
      <div className="flex flex-row gap-4 ">
        <div className={`bg-white ${isExpanded ? "w-64" : "w-10"} `}>
          <SavedArtNavbar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
        <div className="bg-white/50 flex-grow ml-10">
          <div className="text-center py-4 font-semi-bold ">
            <h1>Saved Artisans</h1>
          </div>
          <ArtisansForYou hasDescription={true} />
        </div>
      </div>
    </div>
  );
}
