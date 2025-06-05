"use client";

import VerifiedBadgeIcon from "../assets/Icons/Bookmark";
import MapPin from "../assets/Icons/MapPin";
import Image from "next/image";
import SmileyIcon from "../assets/Icons/SmileyIcon";
import JobIcon from "../assets/Icons/JobIcon";
import SaveIcon from "../assets/Icons/saveIcon";

interface ArtisanForYou {
  id: number;
  name: string;
  category: string;
  location: string;
  jobs: number;
  reviews: number;
  rating: number;
  verified: boolean;
  image: string;
}

const artisansForYou: ArtisanForYou[] = [
  {
    id: 1,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    jobs: 500,
    reviews: 80,
    rating: 4.5,
    verified: true,
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  },
  {
    id: 2,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    jobs: 500,
    reviews: 80,
    rating: 4.5,
    verified: true,
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  },
  {
    id: 3,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    jobs: 500,
    reviews: 80,
    rating: 4.5,
    verified: true,
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  },
  {
    id: 4,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    jobs: 500,
    reviews: 80,
    rating: 4.5,
    verified: true,
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  },
  {
    id: 5,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    jobs: 500,
    reviews: 80,
    rating: 4.5,
    verified: true,
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  },
  {
    id: 6,
    name: "Chomzy nails",
    category: "Nail Technician",
    location: "Surulere, Lagos",
    jobs: 500,
    reviews: 80,
    rating: 4.5,
    verified: true,
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  },
];

export default function ArtisansForYou() {
  return (
    <div className="">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Artisans for you
      </h3>
      <div className="flex flex-wrap gap-6">
        {artisansForYou.map((artisan) => (
          <div
            key={artisan.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="flex">
              <div className="w-32 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <Image
                  src={artisan.image}
                  alt={`${artisan.name} - ${artisan.category}`}
                  fill
                  className="object-cover w-[164px] h-[191px]"
                />
              </div>

              <div className="flex-1 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    {artisan.name}
                    {artisan.verified && (
                      <div>
                        <VerifiedBadgeIcon />
                      </div>
                    )}
                  </h4>
                </div>

                <div className="flex items-center text-xs text-gray-600 mb-3">
                  <span className="flex items-center mr-3">
                    <span className="mr-1">
                      <JobIcon />
                    </span>
                    {artisan.jobs} Jobs
                  </span>
                  <span className="flex items-center">
                    <SmileyIcon className="mr-1" />
                    {artisan.reviews} reviews
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  {artisan.location}
                </div>
                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-sm ${
                        star <= Math.floor(artisan.rating)
                          ? "text-eaa-purple-300 "
                          : star <= artisan.rating
                          ? "text-eaa-purple-300 "
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-eaa-purple-300 w-[130px] text-white px-4 py-2 rounded-full text-[11px] transition-colors">
                    Book now
                  </button>
                  <button className="text-eaa-purple-300 ">
                    <SaveIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
