"use client";

import Image from "next/image";
import VerifiedBadgeIcon from "../assets/Icons/Bookmark";
import MapPin from "../assets/Icons/MapPin";
import SaveIcon from "../assets/Icons/saveIcon";

interface Artisan {
  id: number;
  name: string;
  category: string;
  location: string;
  image: string;
  rating: number;
  verified: boolean;
}

const mockArtisans: Artisan[] = [
  {
    id: 1,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1748781035/Rectangle_231_kq5u1d.jpg",
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1748781035/Rectangle_231_kq5u1d.jpg",
    rating: 4.8,
    verified: true,
  },
  {
    id: 3,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1748781035/Rectangle_231_kq5u1d.jpg",
    rating: 4.9,
    verified: true,
  },
];

export default function TrendingArtisans() {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap overflow-x-auto gap-6 pb-4">
        {mockArtisans.map((artisan) => (
          <div
            key={artisan.id}
            className="flex-shrink-0 shadow-2xl w-[381px] h-[296px] bg-white rounded-[35px] shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="relative">
              <div className="h-[160px] bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={artisan.image}
                    alt={`${artisan.name} - ${artisan.category}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="rounded-es-full absolute h-[35px] w-[131px] items-center justify-center flex top-[-1] right-[-1] bg-white/70 transparent px-3 py-1 text-xs font-sm text-black ">
                  {artisan.category}
                </span>
              </div>
            </div>
            <div className="p-4 h-[125px] w-[318px] px-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  {artisan.name}
                  {artisan.verified && (
                    <div>
                      <VerifiedBadgeIcon />
                    </div>
                  )}
                </h3>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {artisan.location}
              </div>

              <div className="w-[318px] h-[] flex items-center justify-between">
                <button className="w-[150] h-[40px] shadow-2xl bg-eaa-purple-300 shadow-10 text-white px-6 py-2 rounded-full text-[10px] font-sm">
                  Book now
                </button>
                <button className="w-[150] h-[40px] flex shadow-2xl items-center justify-center text-eaa-purple-300 px-6 py-2 border-2 rounded-full text-sm font-sm">
                  <SaveIcon className="w-4 te h-4 mr-1 text-[16px]" />
                  <p className="text-[11px]"> Save</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
