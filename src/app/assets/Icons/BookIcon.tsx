import React from "react";

interface BookIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const BookIcon: React.FC<BookIconProps> = ({
  width = 24,
  height = 24,
  className = "",
  strokeColor = "white",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 16.9808V11.7075C5 8.07416 5 6.25748 6.09835 5.12874C7.1967 4 8.96447 4 12.5 4C16.0355 4 17.8033 4 18.9017 5.12874C20 6.25748 20 8.07416 20 11.7075V16.9808C20 19.2867 20 20.4396 19.2755 20.8523C17.5 21 15.5 20.8523 14 20.8523C13 20.8523 12.9033 20.8523 12.5 20.8523C12.0967 20.8523 12 20.8523 11.0188 20.8523C9.5 20.8523 7.5 21 5.72454 20.8523C5 20.4396 5 19.2867 5 16.9808Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8H6.83333C11.1545 8 13.3152 8 14.6575 9.18988C16 10.3798 16 12.2948 16 16.125V21"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookIcon;
