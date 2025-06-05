import React from "react";

export default function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.0625 7.5C2.0625 4.70104 2.0625 3.30156 2.93202 2.43202C3.80156 1.5625 5.20104 1.5625 8 1.5625C10.7989 1.5625 12.1984 1.5625 13.068 2.43202C13.9375 3.30156 13.9375 4.70104 13.9375 7.5C13.9375 10.2989 13.9375 11.6984 13.068 12.568C12.1984 13.4375 10.7989 13.4375 8 13.4375C5.20104 13.4375 3.80156 13.4375 2.93202 12.568C2.0625 11.6984 2.0625 10.2989 2.0625 7.5Z"
        stroke="#6828B0"
        strokeWidth="1.25"
      />
      <path
        d="M10.5 7.5H5.5M10.5 7.5C10.5 7.06237 9.25356 6.24471 8.9375 5.9375M10.5 7.5C10.5 7.93763 9.25356 8.75531 8.9375 9.0625"
        stroke="#6828B0"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
