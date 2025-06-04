import React from "react";

interface CategoryProps {
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}

const CategoryIcon: React.FC<CategoryProps> = ({
  width = 20,
  height = 20,
  className = "",
  stroke = "#E8E8E8",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_768_1957)">
        <path
          d="M15.8337 0.916504C16.7826 0.916558 17.6322 1.15437 18.239 1.76123C18.8458 2.36815 19.0837 3.21765 19.0837 4.1665V5.8335C19.0837 6.78231 18.8459 7.63191 18.239 8.23877C17.6322 8.84563 16.7826 9.08344 15.8337 9.0835H14.1667C13.2179 9.0835 12.3684 8.84558 11.7615 8.23877C11.1546 7.63191 10.9168 6.78231 10.9167 5.8335V4.1665C10.9167 3.21756 11.1545 2.36816 11.7615 1.76123C12.3684 1.1543 13.2178 0.916504 14.1667 0.916504H15.8337Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83374 10.9165C6.78255 10.9166 7.63216 11.1544 8.23901 11.7612C8.84582 12.3681 9.08374 13.2176 9.08374 14.1665V15.8335C9.08369 16.7823 8.84587 17.6319 8.23901 18.2388C7.63216 18.8456 6.78255 19.0834 5.83374 19.0835H4.16675C3.21789 19.0835 2.36839 18.8456 1.76147 18.2388C1.15462 17.6319 0.916802 16.7823 0.916748 15.8335V14.1665C0.916748 13.2176 1.15455 12.3682 1.76147 11.7612C2.3684 11.1543 3.21781 10.9165 4.16675 10.9165H5.83374Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.99976 0.916504C7.25481 0.916504 9.08356 2.7445 9.08374 4.99951C9.08374 7.25468 7.25492 9.0835 4.99976 9.0835C2.74474 9.08332 0.916748 7.25457 0.916748 4.99951C0.916924 2.74461 2.74485 0.91668 4.99976 0.916504Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9998 10.9165C17.2548 10.9165 19.0836 12.7445 19.0837 14.9995C19.0837 17.2546 17.2549 19.0835 14.9998 19.0835C12.7448 19.0833 10.9167 17.2545 10.9167 14.9995C10.9169 12.7446 12.7449 10.9167 14.9998 10.9165Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_768_1957">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CategoryIcon;
