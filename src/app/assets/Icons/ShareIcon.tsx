import React from "react";

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Purple arrow icon"
    role="img"
    {...props}
  >
    <path d="M17.5 0.5L0.5 7.5L7.5 10.5L10.5 17.5L17.5 0.5Z" fill="#6828B0" />
  </svg>
);

export default ShareIcon;
