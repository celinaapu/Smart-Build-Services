import React from "react";
import UpArrowIcon from "../app/assets/Icons/UpArrow";
import ChevronLeftIcon from "../app/assets/Icons/ChevronLeftIcon";

interface Payment {
  id: number;
  title: string;
  date: string;
  amount: number;
}

const payments: Payment[] = [
  { id: 1, title: "Chomzy nails", date: "05.09.2022", amount: 10000 },
  { id: 2, title: "Chomzy nails", date: "05.09.2022", amount: 10000 },
  { id: 3, title: "Chomzy nails", date: "05.09.2022", amount: 10000 },
  { id: 4, title: "Chomzy nails", date: "05.09.2022", amount: 10000 },
  { id: 5, title: "Chomzy nails", date: "05.09.2022", amount: 10000 },
];

const PaymentHistory: React.FC = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto py-4 text-center  from-purple-100 to-purple-50">
      {/* Header */}
      <div className="flex items-center px-4 py-6">
        <button className="mr-4">
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Payment history</h1>
      </div>

      {/* Payment List Container */}
      <div className="bg-purple-100/60 mx-4 bg-gradient-to-b rounded-2xl p-6 space-y-5">
        {payments.map((payment) => (
          <div key={payment.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icon Container */}
              <div className="bg-white rounded-full p-3 shadow-sm">
                <UpArrowIcon className="w-5 h-5 text-green-600" />
              </div>

              {/* Payment Details */}
              <div>
                <p className="text-gray-800 font-medium text-base">
                  {payment.title}
                </p>
                <p className="text-gray-500 text-sm mt-1">{payment.date}</p>
              </div>
            </div>

            {/* Amount */}
            <p className="text-green-600 font-semibold text-base">
              #{payment.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
