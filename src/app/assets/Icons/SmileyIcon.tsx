import React from "react";

interface SmileyIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
}

const SmileyIcon: React.FC<SmileyIconProps> = ({
  width = 13,
  height = 13,
  className = "",
  strokeColor = "#616161",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2637_198)">
        <path
          d="M6.50004 11.9168C9.49158 11.9168 11.9167 9.4917 11.9167 6.50016C11.9167 3.50862 9.49158 1.0835 6.50004 1.0835C3.5085 1.0835 1.08337 3.50862 1.08337 6.50016C1.08337 9.4917 3.5085 11.9168 6.50004 11.9168Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.33337 8.125C4.82744 8.7828 5.61404 9.20833 6.50004 9.20833C7.38604 9.20833 8.17265 8.7828 8.66671 8.125"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.33823 4.875H4.33337M8.66671 4.875H8.66183"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2637_198">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SmileyIcon;
