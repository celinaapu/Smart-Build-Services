// components/icons/PaymentMethodIcon.tsx

import React from "react";

interface PaymentMethodIconProps extends React.SVGProps<SVGSVGElement> {}

const PaymentMethodIcon: React.FC<PaymentMethodIconProps> = (props) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.78809 13.9979L13.4789 3.30713M15.5263 9.71291L13.6934 11.5458M12.1291 13.0915L11.3135 13.9071"
      stroke="#242834"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M2.6454 13.9508C1.34021 12.6456 1.34021 10.5294 2.6454 9.22426L8.72426 3.1454C10.0294 1.84021 12.1456 1.84021 13.4508 3.1454L17.3543 7.04893C18.6595 8.35412 18.6595 10.4703 17.3543 11.7754L11.2754 17.8543C9.97026 19.1595 7.85412 19.1595 6.54893 17.8543L2.6454 13.9508Z"
      stroke="#242834"
      strokeWidth="1.25"
    />
    <path
      d="M3.3335 18.8335H16.6668"
      stroke="#242834"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

export default PaymentMethodIcon;
