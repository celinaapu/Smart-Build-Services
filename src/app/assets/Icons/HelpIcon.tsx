// components/icons/HelpIcon.tsx

import React from "react";

interface HelpIconProps extends React.SVGProps<SVGSVGElement> {}

const HelpIcon: React.FC<HelpIconProps> = (props) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99984 18.8332C14.6022 18.8332 18.3332 15.1022 18.3332 10.4998C18.3332 5.89746 14.6022 2.1665 9.99984 2.1665C5.39746 2.1665 1.6665 5.89746 1.6665 10.4998C1.6665 15.1022 5.39746 18.8332 9.99984 18.8332Z"
      stroke="#242834"
      strokeWidth="1.25"
    />
    <path
      d="M8.3335 8.00016C8.3335 7.07969 9.07966 6.3335 10.0002 6.3335C10.9207 6.3335 11.6668 7.07969 11.6668 8.00016C11.6668 8.33195 11.5699 8.6411 11.4027 8.90083C10.9047 9.67491 10.0002 10.413 10.0002 11.3335V11.7502"
      stroke="#242834"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M9.99316 14.6665H10.0007"
      stroke="#242834"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HelpIcon;
