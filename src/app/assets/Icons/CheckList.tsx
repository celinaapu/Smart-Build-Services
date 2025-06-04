import React from "react";

interface ChecklistIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const ChecklistIcon: React.FC<ChecklistIconProps> = ({
  width = 20,
  height = 21,
  className = "",
  strokeColor = "#242834",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.16675 12.1784L8.60265 13.6043L11.8334 10.396"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15.3173V10.9229C3 7.89513 3 6.38123 3.91529 5.44062C4.83058 4.5 6.30372 4.5 9.25 4.5C12.1962 4.5 13.6694 4.5 14.5847 5.44062C15.5 6.38123 15.5 7.89513 15.5 10.9229V15.3173C15.5 17.2389 15.5 18.1997 14.8962 18.5436C13.4167 18.6667 11.75 18.5436 10.5 18.5436C9.66667 18.5436 9.58608 18.5436 9.25 18.5436C8.91392 18.5436 8.83333 18.5436 8.01565 18.5436C6.75 18.5436 5.08333 18.6667 3.60378 18.5436C3 18.1997 3 17.2389 3 15.3173Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 2.1665H9.16667C13.095 2.1665 15.0592 2.1665 16.2796 3.3869C17.5 4.60728 17.5 6.57146 17.5 10.4998V15.4998"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChecklistIcon;
