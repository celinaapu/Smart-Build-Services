// components/UserIcon.tsx

import React from "react";

interface  ProfileIconProps {
  width?: number;
  height?: number;
  strokeColor?: string;
}

const  ProfileIcon: React.FC<ProfileIconProps> = ({
  width = 20,
  height = 21,
  strokeColor = "#242834",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.48131 13.4012C4.30234 14.1032 1.21114 15.5366 3.09389 17.3304C4.01359 18.2065 5.03791 18.8332 6.32573 18.8332H13.6743C14.9621 18.8332 15.9864 18.2065 16.9061 17.3304C18.7888 15.5366 15.6977 14.1032 14.5187 13.4012C11.754 11.7549 8.24599 11.7549 5.48131 13.4012Z"
        stroke={strokeColor}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 5.9165C13.75 7.98757 12.0711 9.6665 10 9.6665C7.92893 9.6665 6.25 7.98757 6.25 5.9165C6.25 3.84544 7.92893 2.1665 10 2.1665C12.0711 2.1665 13.75 3.84544 13.75 5.9165Z"
        stroke={strokeColor}
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default  ProfileIcon;

