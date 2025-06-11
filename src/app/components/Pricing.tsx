// "use client";

// import React, { useState, useRef, useEffect } from "react";

// interface PricingProps {
//   onClose: () => void;
// }

// const Pricing: React.FC<PricingProps> = ({ onClose }) => {
//   const [minValue, setMinValue] = useState(5000);
//   const [maxValue, setMaxValue] = useState(100000);
//   const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const MIN_RANGE = 1000;
//   const MAX_RANGE = 1000000;

//   const formatCurrency = (value: number): string => {
//     return `#${value.toLocaleString()}`;
//   };

//   const getPercentage = (value: number): number => {
//     return ((value - MIN_RANGE) / (MAX_RANGE - MIN_RANGE)) * 100;
//   };

//   const handleMouseDown = (type: "min" | "max") => {
//     setIsDragging(type);
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging || !sliderRef.current) return;

//     const rect = sliderRef.current.getBoundingClientRect();
//     const percentage = Math.max(
//       0,
//       Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
//     );
//     const value = Math.round(
//       MIN_RANGE + (percentage / 100) * (MAX_RANGE - MIN_RANGE)
//     );

//     if (isDragging === "min") {
//       const newMin = Math.min(value, maxValue - 10000);
//       setMinValue(Math.max(MIN_RANGE, newMin));
//     } else if (isDragging === "max") {
//       const newMax = Math.max(value, minValue + 10000);
//       setMaxValue(Math.min(MAX_RANGE, newMax));
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(null);
//   };

//   // Close modal when clicking outside
//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // Close modal on Escape key
//   useEffect(() => {
//     const handleEscapeKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscapeKey);
//     return () => {
//       document.removeEventListener("keydown", handleEscapeKey);
//     };
//   }, [onClose]);

//   useEffect(() => {
//     if (isDragging) {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//       return () => {
//         document.removeEventListener("mousemove", handleMouseMove);
//         document.removeEventListener("mouseup", handleMouseUp);
//       };
//     }
//   }, [isDragging, minValue, maxValue]);

//   const minPercentage = getPercentage(minValue);
//   const maxPercentage = getPercentage(maxValue);

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-white rounded-2xl p-8 w-full max-w-lg mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-xl font-semibold text-gray-800">Choose range</h2>
//         </div>

//         {/* Blue container */}
//         <div className="border-2 border-blue-400 rounded-xl p-8 bg-gray-50">
//           {/* Slider container */}
//           <div className="mb-8">
//             <div
//               ref={sliderRef}
//               className="relative h-2 bg-gray-300 rounded-full cursor-pointer"
//             >
//               {/* Active range track */}
//               <div
//                 className="absolute h-2 bg-green-400 rounded-full"
//                 style={{
//                   left: `${minPercentage}%`,
//                   width: `${maxPercentage - minPercentage}%`,
//                 }}
//               />

//               {/* Min handle */}
//               <div
//                 className="absolute w-6 h-6 bg-green-400 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-lg"
//                 style={{ left: `${minPercentage}%` }}
//                 onMouseDown={() => handleMouseDown("min")}
//               />

//               {/* Max handle */}
//               <div
//                 className="absolute w-6 h-6 bg-green-400 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-lg"
//                 style={{ left: `${maxPercentage}%` }}
//                 onMouseDown={() => handleMouseDown("max")}
//               />
//             </div>
//           </div>

//           {/* Value inputs */}
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <div className="bg-white rounded-full px-6 py-4 border border-gray-300">
//                 <span className="text-gray-400 text-sm mr-2">Min</span>
//                 <span className="font-semibold text-gray-800 text-lg">
//                   {formatCurrency(minValue)}
//                 </span>
//               </div>
//             </div>

//             <div className="flex-1">
//               <div className="bg-white rounded-full px-6 py-4 border border-gray-300">
//                 <span className="text-gray-400 text-sm mr-2">Max</span>
//                 <span className="font-semibold text-gray-800 text-lg">
//                   {formatCurrency(maxValue)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
