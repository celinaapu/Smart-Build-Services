"use client";

import { useState } from "react";
import Image from "next/image";
import BookingHistory from "@/app/components/BookingHistory";
import BookingDetails from "@/app/components/BookingDetails";

const services = ["Plumbing", "Electrical", "Carpentry"];
const professionals = [
  { name: "John Doe", status: "available" },
  { name: "Jane Smith", status: "unavailable" },
  { name: "Mark Johnson", status: "available" },
  { name: "Jane Smith", status: "unavailable" },
  { name: "Mark Johnson", status: "available" },
  { name: "Mark Johnson", status: "available" },
];

interface Errors {
  service?: string;
  description?: string;
  amount?: string;
  professional?: string;
}

const CompleteBooking = () => {
  const [selectedProIndex, setSelectedProIndex] = useState(1);
  const [selectedDate] = useState("Sept 26, 2024");
  const [selectedTime] = useState("9 am");
  const [selectedService, setSelectedService] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [currentView, setCurrentView] = useState<"booking" | "payment">(
    "booking"
  );

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!selectedService) {
      newErrors.service = "Please select a service";
    }

    if (!description.trim()) {
      newErrors.description = "Please describe what you need";
    }

    if (!amount.trim()) {
      newErrors.amount = "Please enter an amount";
    } else if (isNaN(Number(amount)) || parseFloat(amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    const selectedProfessional = professionals[selectedProIndex];
    if (
      !selectedProfessional ||
      selectedProfessional.status === "unavailable"
    ) {
      newErrors.professional = "Please select an available professional";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookNow = () => {
    if (validateForm()) {
      setCurrentView("payment");
    }
  };

  const handleBackToBooking = () => {
    setCurrentView("booking");
  };

  const bookingData = {
    service: selectedService,
    professional: professionals[selectedProIndex]?.name,
    date: selectedDate,
    time: selectedTime,
    amount: parseFloat(amount),
    description: description,
    location: "",
  };

  if (currentView === "payment") {
    return (
      <div className="flex flex-row w-full">
        <BookingDetails
          onBack={handleBackToBooking}
          bookingData={bookingData}
        />
        <div className="w-[30%]">
          <BookingHistory />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full">
      <div className="h-screen w-[70%] flex flex-col bg-gray-50 p-4">
        <h2 className="text-center text-lg font-semibold mb-4">
          Complete booking
        </h2>
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select service
                </label>
                <select
                  className={`w-full border ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-3 py-2 text-sm`}
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Choose service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Describe what you need from artisan
                </label>
                <textarea
                  rows={3}
                  className={`w-full h-20 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-3 py-2 text-sm resize-none`}
                  placeholder="Plumber needed urgently, leaking pipe..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <div
                  className={`border ${
                    errors.amount ? "border-red-500" : "border-gray-200"
                  } w-full rounded-lg flex`}
                >
                  <input
                    type="text"
                    className="flex-grow text-sm px-3 py-2 rounded-l-lg focus:outline-none"
                    placeholder="Enter Amount..."
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <span className="text-gray-400 px-3 py-2 text-sm">₦</span>
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                )}
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
              {errors.professional && (
                <p className="text-red-500 text-xs mb-2">
                  {errors.professional}
                </p>
              )}
              <div className="grid grid-cols-3 gap-3 content-start">
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
                    : errors.professional && pro.status === "unavailable"
                    ? "border-red-300"
                    : "border-gray-200";

                  return (
                    <div
                      key={idx}
                      className={`border ${borderColor} rounded-xl p-3 flex flex-col items-center cursor-pointer hover:shadow-md bg-white transition ${
                        pro.status === "unavailable"
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => {
                        if (pro.status !== "unavailable") {
                          setSelectedProIndex(idx);
                        }
                      }}
                    >
                      <Image
                        src="https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_11_tybcfu.jpg"
                        alt="Professional"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover mb-2"
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
            <button
              onClick={handleBookNow}
              className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors font-medium"
            >
              Book now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[30%]">
        <BookingHistory />
      </div>
    </div>
  );
};

export default CompleteBooking;
