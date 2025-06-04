import React from "react";

interface JobIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
}

const JobIcon: React.FC<JobIconProps> = ({
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
      <path
        d="M4.875 3.79167H2.70833C2.11002 3.79167 1.625 4.27669 1.625 4.875V9.75C1.625 10.3483 2.11002 10.8333 2.70833 10.8333H10.2917C10.89 10.8333 11.375 10.3483 11.375 9.75V4.875C11.375 4.27669 10.89 3.79167 10.2917 3.79167H8.125M4.875 3.79167V2.70833C4.875 2.11002 5.36002 1.625 5.95833 1.625H7.04167C7.63999 1.625 8.125 2.11002 8.125 2.70833V3.79167M4.875 3.79167H8.125"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default JobIcon;
