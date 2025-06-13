"use client";

import { DescriptionModal } from "@/app/components/Workers/DescriptionModal";
import { DynamicSidebar } from "@/app/components/Workers/DynamicSidebar";
import { PortfolioHeader } from "@/app/components/Workers/PortfolioHeader";
import { PortfolioSection } from "@/app/components/Workers/PortfolioSection";
import { ServiceCard } from "@/app/components/Workers/ServiceCard";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description?: string;
}

interface Service {
  title: string;
  price: string;
  description: string;
  image: string;
}

const WorkersPage = () => {
  const [sidebarView, setSidebarView] = useState<"services" | "portfolio">(
    "services"
  );
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    image: string;
    description: string;
    price?: string;
  }>({
    isOpen: false,
    title: "",
    image: "",
    description: "",
    price: undefined,
  });
  const router = useRouter();

  const profileData = {
    name: "Starton Nails",
    profession: "Nail Technician",
    location: "Surulere, Lagos",
    description:
      "Starton offers various kind of nail tech services djheskeje eushe uejoju deuhudod huhdv udjvhjdw udjh dujvd ujdye hofuefjyhsej",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_201_1_plwlbt.jpg",
    rating: 5,
    minRate: "₦50,000",
    jobsCount: "500",
    reviewsCount: "96",
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Acrylic on swag",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Rectangle_254_zumond.jpg",
      description:
        "Stunning acrylic nail extensions with a swag finish. Features long-lasting durability, smooth application, and a glossy finish that enhances natural nail beauty.",
    },
    {
      id: 2,
      title: "Acrylic on swag",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749633695/Rectangle_256_kyapew.jpg",
      description:
        "Premium acrylic nail service with custom swag design. Perfect for special occasions with attention to detail and professional finishing techniques.",
    },
    {
      id: 3,
      title: "French Manicure",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Rectangle_254_zumond.jpg",
      description:
        "Classic French manicure with clean white tips and natural base. Timeless elegance that complements any style, perfect for professional or casual settings.",
    },
    {
      id: 4,
      title: "Gel Polish",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749633695/Rectangle_256_kyapew.jpg",
      description:
        "High-quality gel polish application with chip-resistant formula. Long-lasting shine that maintains color vibrancy for weeks with proper care.",
    },
    {
      id: 5,
      title: "Nail Art Design",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Rectangle_254_zumond.jpg",
      description:
        "Creative custom nail art designs tailored to your preferences. Intricate patterns, colors, and themes that express your unique personality and style.",
    },
    {
      id: 6,
      title: "Chrome Finish",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749633695/Rectangle_256_kyapew.jpg",
      description:
        "Mirror-like chrome finish that creates a stunning metallic effect. Modern and eye-catching with a smooth, reflective surface that catches light beautifully.",
    },
  ];

  const services = [
    {
      title: "Acrylic Nail",
      price: "₦15,000",
      description:
        "Starton offers various kind of nail tech services djheskeje eushe",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
    },
    {
      title: "Acrylic Nail",
      price: "₦15,000",
      description:
        "Starton offers various kind of nail tech services djheskeje eushe",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
    },
    {
      title: "Acrylic Nail",
      price: "₦15,000",
      description:
        "Starton offers various kind of nail tech services djheskeje eushe",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
    },
    {
      title: "Acrylic Nail",
      price: "₦15,000",
      description:
        "Starton offers various kind of nail tech services djheskeje eushe",
      image:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
    },
  ];

  const mainService = {
    title: "Acrylic Nail",
    price: "₦15,000",
    description:
      "Starton offers various kind of nail tech services djheskeje eushe uejoju deuhudod huhdv udjvhjdw udjh dujvd ujdye hofuefjyhsej",
    image:
      "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043063/Frame36758_hkzxjq.jpg",
  };

  const handleMessage = () => {
    router.push("/chat");
  };

  const handleBookNow = () => {
    router.push("/booking");
  };

  const handleViewMore = () => {
    setSidebarView("portfolio");
  };

  const handleServicesClick = () => {
    setSidebarView("services");
  };

  const handleItemClick = (item: Service | PortfolioItem) => {
    const isService = "price" in item;

    setModalData({
      isOpen: true,
      title: item.title,
      image: item.image,
      description: item.description || "No description available",
      price: isService ? item.price : undefined,
    });
  };

  const handleCloseModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="pl-6 min-h-screen flex flex-col lg:flex-row bg-gray-50">
      <div className="w-full lg:w-[30%] p-6 bg-white min-h-screen">
        <PortfolioHeader
          {...profileData}
          onMessage={handleMessage}
          onBookNow={handleBookNow}
        />

        <div className="p-4">
          <PortfolioSection
            items={portfolioItems}
            onViewMore={handleViewMore}
          />

          <div className="mt-6">
            <button
              className="font-semibold mb-3 text-left cursor-pointer hover:text-purple-600 transition-colors"
              onClick={handleServicesClick}
            >
              Services
            </button>
            <ServiceCard
              title={mainService.title}
              price={mainService.price}
              description={mainService.description}
              image={mainService.image}
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[30%] border-t lg:border-t-0 lg:border-l border-gray-200 bg-white p-4">
        <DynamicSidebar
          activeView={sidebarView}
          onViewChange={setSidebarView}
          services={services}
          portfolioItems={portfolioItems}
          onItemClick={handleItemClick}
        />
      </div>
      <DescriptionModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        title={modalData.title}
        image={modalData.image}
        description={modalData.description}
        price={modalData.price}
      />
    </div>
  );
};

export default WorkersPage;
