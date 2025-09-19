import React from "react";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";

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

interface DynamicSidebarProps {
  activeView: "services" | "portfolio";
  onViewChange: (view: "services" | "portfolio") => void;
  services: Service[];
  portfolioItems: PortfolioItem[];
  onItemClick: (item: Service | PortfolioItem) => void;
}

export const DynamicSidebar: React.FC<DynamicSidebarProps> = ({
  activeView,
  onViewChange,
  services,
  portfolioItems,
  onItemClick,
}) => {
  return (
    <div className="w-full p-4 bg-gray-50">
      <div className="flex mb-4 bg-white rounded-lg p-1">
        <button
          className={`flex-1 py-1 px-2 text-xs rounded-md transition-colors ${
            activeView === "services"
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:text-purple-600"
          }`}
          onClick={() => onViewChange("services")}
        >
          Services
        </button>
        <button
          className={`flex-1 py-1 px-2 text-xs rounded-md transition-colors ${
            activeView === "portfolio"
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:text-purple-600"
          }`}
          onClick={() => onViewChange("portfolio")}
        >
          Portfolio
        </button>
      </div>

      {activeView === "services" ? (
        <div>
          <h3 className="font-semibold mb-3 text-sm">Most Booked Services</h3>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => onItemClick(service)}
                className="cursor-pointer hover:transform hover:scale-105 transition-transform"
              >
                <ServiceCard
                  title={service.title}
                  price={service.price}
                  description={service.description}
                  image={service.image}
                  isCompact={true}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3 className="font-semibold mb-3 text-sm">All Portfolio</h3>
          <div className="">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-2 shadow-sm cursor-pointer hover:transform hover:scale-105 transition-transform"
                onClick={() => onItemClick(item)}
              >
                <div className="relative w-full h-20 rounded-md overflow-hidden mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-purple-600 font-medium">
                  {item.title}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <button
            className="w-full py-2 bg-white border border-purple-600 text-purple-600 rounded-lg text-xs mt-3 hover:bg-purple-50 transition-colors"
            onClick={() => onViewChange("services")}
          >
            Back to Services
          </button>
        </div>
      )}
    </div>
  );
};
