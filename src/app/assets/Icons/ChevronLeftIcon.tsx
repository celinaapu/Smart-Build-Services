import React from "react";

interface ChevronLeftIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({
  width = 11,
  height = 20,
  className = "",
  strokeColor = "#242834",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.33325 1.66699L0.999918 10.0003L9.33325 18.3337"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
