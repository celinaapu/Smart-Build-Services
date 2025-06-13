// "use client";

// import React from "react";

// // Define the structure of the booking data
// interface BookingData {
//   service: string;
//   professional: string;
//   date: string;
//   time: string;
//   amount: number;
// }

// // Define the props for the component
// interface PaymentDetailsProps {
//   onBack: () => void;
//   bookingData: BookingData;
// }

// // Payment Details Component
// const PaymentDetails: React.FC<PaymentDetailsProps> = ({
//   onBack,
//   bookingData,
// }) => {
//   return (
//     <div className="h-screen w-[70%] flex flex-col bg-gray-50 p-4">
//       <div className="flex items-center mb-4">
//         <button
//           onClick={onBack}
//           className="mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <h2 className="text-lg font-semibold">Payment Details</h2>
//       </div>

//       <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
//         {/* Booking Summary */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
//           <div className="bg-gray-50 p-4 rounded-lg space-y-2">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Service:</span>
//               <span className="font-medium">{bookingData.service}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Professional:</span>
//               <span className="font-medium">{bookingData.professional}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Date & Time:</span>
//               <span className="font-medium">
//                 {bookingData.date} at {bookingData.time}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Amount:</span>
//               <span className="font-medium text-purple-700">
//                 ₦{bookingData.amount}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
//           <div className="space-y-3">
//             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//               <input
//                 type="radio"
//                 name="payment"
//                 className="mr-3"
//                 defaultChecked
//               />
//               <span>Card Payment</span>
//             </label>
//             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//               <input type="radio" name="payment" className="mr-3" />
//               <span>Bank Transfer</span>
//             </label>
//             <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//               <input type="radio" name="payment" className="mr-3" />
//               <span>Wallet</span>
//             </label>
//           </div>
//         </div>

//         {/* Proceed Button */}
//         <div className="mt-auto pt-4 border-t text-center">
//           <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors font-medium">
//             Proceed to Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentDetails;
