"use client";

import React, { useState } from "react";
import Image from "next/image";
import ChevronLeftIcon from "../app/assets/Icons/ChevronLeftIcon";
import VerifiedBadgeIcon from "../app/assets/Icons/Bookmark";

interface BookingDetailsProps {
  onBack: () => void;
  bookingData: {
    service: string;
    amount: number | string;
    location: string;
    date: string;
    time: string;
  };
}

export default function BookingDetails({
  onBack,
  bookingData,
}: BookingDetailsProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Awaiting Artisan" },
    { id: 2, label: "Awaiting payment" },
    { id: 3, label: "Release payment" },
    { id: 4, label: "Completed" },
  ];

  const handleStepClick = (stepId: React.SetStateAction<number>) => {
    setCurrentStep(stepId);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div
        className="flex items-center justify-between p-4 border-b"
        onClick={onBack}
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        <h1 className="text-base font-medium text-gray-900">Booking details</h1>
        <div className="w-6"></div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
          <div className="relative inline-block mb-3">
            <Image
              src="https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_198_uoujzu.jpg"
              alt="Williams Profile"
              width={40}
              height={40}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="flex w-full justify-center text-center">
            <h2 className="text-[16px] pr-1 font-medium text-gray-900 mb-1">
              Williams
            </h2>
            <VerifiedBadgeIcon className="w-5 h-5 bg-white rounded-full" />
          </div>
          <p className="text-xs text-gray-500">Booking id: XRTY12PG31</p>
        </div>

        <div className="space-y-2 w-[70%] mb-5">
          <div className="flex justify-start gap-14">
            <span className="text-[12px] text-gray-600">Service</span>
            <span className="text-[12px] text-gray-400">
              {bookingData.service}
            </span>
          </div>
          <div className="flex justify-start gap-12 ">
            <span className="text-[12px] text-gray-600">Amount</span>
            <span className="text-[12px] text-gray-400">
              ₦{bookingData.amount}
            </span>
          </div>
          <div className="flex justify-start gap-12">
            <span className="text-[12px] text-gray-600">Location</span>
            <span className="text-[12px] text-gray-400">
              {bookingData.location}
            </span>
          </div>
          <div className="flex justify-start gap-6">
            <span className="text-[12px] text-gray-600">Booking time</span>
            <span className="text-[12px] text-gray-400">
              {bookingData.date} at {bookingData.time}
            </span>
          </div>
        </div>
        <div className="border-b border-gray-400 mb-2"></div>

        <div className="mb-8">
          <h3 className="text-[14px] font-medium text-gray-900 mb-3">
            Description
          </h3>
          <p className="text-[12px] text-gray-400 leading-relaxed">
            I want a pink acrylic nail for my son, he is a good boy and I want
            him to be happy and he jid yhe infant cure big spag anime ok good
            and o as It is in the document and is not responsible for sa...
          </p>
        </div>

        {/* ✅ Payment Details section added here
        <div className="mb-8">
          <h3 className="text-[14px] font-medium text-gray-900 mb-3">
            Payment Details
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-[12px] text-gray-600">
              <span>Service fee</span>
              <span>#30,000</span>
            </div>
            <div className="flex justify-between text-[12px] text-gray-600">
              <span>Kraftaa fee</span>
              <span>#1,500</span>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex justify-between text-[12px] font-medium text-gray-900">
              <span>Total</span>
              <span>#31,500</span>
            </div>
          </div>
        </div> */}

        <div className="mb-8">
          <h3 className="text-[14px] font-medium text-gray-900 mb-6 text-center">
            Track booking
          </h3>

          <div className="relative">
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-200"></div>
            <div
              className={`absolute top-3 left-0 h-0.5 transition-all duration-300 ${
                currentStep === 4 ? "bg-green-500" : "bg-orange-400"
              }`}
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>

            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleStepClick(step.id)}
                >
                  <div
                    className={`w-6 h-6 rounded-full mb-2 transition-all duration-300 ${
                      step.id <= currentStep
                        ? currentStep === 4 && step.id <= 4
                          ? "bg-green-500"
                          : "bg-orange-400"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  <span
                    className={`text-xs text-center transition-colors duration-300 ${
                      step.id <= currentStep
                        ? currentStep === 4 && step.id <= 4
                          ? "text-green-600 font-medium"
                          : "text-orange-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-full text-sm font-medium hover:bg-eaa-purple-300 transition-colors">
            Cancel
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-full text-sm font-medium hover:bg-eaa-purple-300 transition-colors">
            Deposit to Kraftaa
          </button>
        </div>
      </div>
    </div>
  );
}
