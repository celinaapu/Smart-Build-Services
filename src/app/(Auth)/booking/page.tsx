"use client";

import React, { useState } from "react";
import Image from "next/image";

const professionals = [
  { name: "Young", status: "unavailable" },
  { name: "Young", status: "selected" },
  { name: "Young", status: "available" },
  { name: "Young", status: "unavailable" },
  { name: "Young", status: "available" },
  { name: "Young", status: "available" },
];

const CompleteBooking = () => {
  const [selectedProIndex, setSelectedProIndex] = useState(1);
  const [selectedDate] = useState("Sept 26, 2024");
  const [selectedTime] = useState("9 am");

  return (
    <div className="h-screen flex flex-col bg-gray-50 p-4">
      <h2 className="text-center text-lg font-semibold mb-4">
        Complete booking
      </h2>

      <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-0">
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select service
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Choose service</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Describe what you need from artisan
              </label>
              <textarea
                rows={3}
                className="w-full focus:outline-none h-20 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none"
                placeholder="Plumber needed urgently new leaks so sus shut appt pls"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Amount</label>
              <div className=" border border-gray-200 w-full rounded-lg focus:outline-none flex ">
                <input
                  type="text"
                  className="flex text-[12px] w-[95%] rounded-lg px-3 focus:outline-none py-2 items-center justify-between"
                  placeholder="Enter Amount..."
                />

                <span className="text-gray-400 w-[5%] text-center cursor-pointer">
                  ✏️
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Select Time
              </label>
              <div className="flex gap-2">
                <button className="bg-purple-100 text-purple-700 rounded-lg px-4 py-2 text-sm font-medium">
                  {selectedDate}
                </button>
                <button className="bg-purple-100 text-purple-700 rounded-lg px-4 py-2 text-sm font-medium">
                  {selectedTime}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-medium mb-3">
              Available Professionals
            </h3>
            <div className="flex-1 grid grid-cols-3 gap-3 content-start">
              {professionals.map((pro, idx) => {
                const isSelected = idx === selectedProIndex;
                const statusLabel =
                  pro.status === "selected"
                    ? "Selected"
                    : pro.status === "unavailable"
                    ? "Unavailable"
                    : "Available";

                const statusColor =
                  pro.status === "selected"
                    ? "bg-green-100 text-green-700"
                    : pro.status === "unavailable"
                    ? "bg-gray-100 text-gray-500"
                    : "bg-green-500 text-white";

                const borderColor = isSelected
                  ? "border-purple-500 border-2"
                  : "border-gray-200";

                return (
                  <div
                    key={idx}
                    className={`border ${borderColor} rounded-xl p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition-shadow bg-white`}
                    onClick={() => setSelectedProIndex(idx)}
                  >
                    <Image
                      src="https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_11_tybcfu.jpg"
                      alt="Professional"
                      width={100}
                      height={100}
                      className="w-12 h-12 rounded-full object-cover mb-2"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23e5e7eb'/%3E%3Cpath d='M24 12c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 26c-5.3 0-10-2.8-10-7 0-3.3 4.7-6 10-6s10 2.7 10 6c0 4.2-4.7 7-10 7z' fill='%23fff'/%3E%3C/svg%3E";
                      }}
                    />
                    <p className="text-xs font-medium mb-1">{pro.name}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${statusColor}`}
                    >
                      {statusLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t text-center">
          <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors font-medium">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteBooking;
