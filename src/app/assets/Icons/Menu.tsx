import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  stroke?: string;
}

export default function Menu({
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
      <line x1="4" y1="6" x2="20" y2="6" stroke={stroke} strokeWidth="2" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={stroke} strokeWidth="2" />
      <line x1="4" y1="18" x2="20" y2="18" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
