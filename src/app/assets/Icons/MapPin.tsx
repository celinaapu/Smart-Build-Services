import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  stroke?: string;
}

export default function MapPin({
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
        stroke={stroke}
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="3" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
