import React from "react";
import Image from "next/image";
import CloseIcon from "@/app/assets/Icons/CloseIcon";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  price?: string;
}

export const DescriptionModal: React.FC<DescriptionModalProps> = ({
  isOpen,
  onClose,
  title,
  image,
  description,
  price,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-opacity-50 z-40" />

      <div className="inset-0 z-50 flex items-right justify-right p-4">
        <div className="bg-white rounded-lg max-w-sm w-full max-h-[80vh]">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-purple-600">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <CloseIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="p-4">
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>

            <div className="mb-3">
              <h3 className="font-semibold text-purple-600 mb-1">{title}</h3>
              {price && <p className="font-bold text-lg">{price}</p>}
            </div>

            <div className="text-sm text-gray-600 leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
