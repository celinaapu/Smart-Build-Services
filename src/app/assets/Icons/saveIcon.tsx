import React from "react";

interface SaveIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

const SaveIcon: React.FC<SaveIconProps> = ({
  width = 30,
  height = 29,
  className = "",
  strokeColor,
  strokeWidth = 1.25,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M5 22.476V12.1344C5 7.5927 5 5.32185 6.46446 3.91093C7.92894 2.5 10.286 2.5 15 2.5C19.714 2.5 22.0711 2.5 23.5355 3.91093C25 5.32185 25 7.5927 25 12.1344V22.476C25 25.3584 25 26.7995 24.034 27.3154C22.1631 28.3143 18.654 24.9815 16.9875 23.978C16.021 23.396 15.5378 23.105 15 23.105C14.4622 23.105 13.979 23.396 13.0125 23.978C11.346 24.9815 7.83684 28.3143 5.96606 27.3154C5 26.7995 5 25.3584 5 22.476Z"
        stroke={strokeColor ?? "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SaveIcon;
