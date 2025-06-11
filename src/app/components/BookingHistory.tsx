"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function BookingHistory() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Completed",
    "Rejected",
    "Cancelled",
    "Awaiting payment",
  ];

  const bookings = [
    {
      id: 1,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Awaiting payment",
      statusColor: "bg-orange-100 text-orange-600",
    },
    {
      id: 2,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      id: 3,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Cancelled",
      statusColor: "bg-gray-100 text-gray-600",
    },
    {
      id: 4,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Awaiting payment",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 5,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Release payment",
      statusColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 6,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 7,
      name: "Grace Nails",
      date: "12/11/2024",
      status: "Cancelled",
      statusColor: "bg-gray-100 text-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto py-4 text-center">
        <h1 className="text-[16px] font-semibold">Booking History</h1>
      </div>

      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="px-4 py-4">
          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-[12px] font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-eaa-purple-300 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between bg-white border-y border-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
              >
                <div className=" flex">
                  <div className="w-10 h-10 items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_198_uoujzu.jpg"
                      alt="Grace Nails"
                      width={50}
                      height={50}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-2">
                    <h3 className="font-semibold flex text-gray-900 text-[12px]">
                      {booking.name}
                    </h3>
                    <p className="text-[11px] text-gray-500">{booking.date}</p>
                  </div>
                </div>

                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${booking.statusColor}`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-8 text-center">
          <p className="text-gray-500 text-sm">
            You have no previous booking with this artisan...
          </p>
        </div>
      </div>
    </div>
  );
}
