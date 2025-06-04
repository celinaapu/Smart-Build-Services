import React from "react";

interface ChatBubbleIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  dotStrokeWidth?: number;
}

const ChatBubbleIcon: React.FC<ChatBubbleIconProps> = ({
  width = 20,
  height = 21,
  className = "",
  strokeColor = "#242834",
  strokeWidth = 1.25,
  dotStrokeWidth = 1.66667,
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
        d="M11.8089 17.9089C15.2947 17.6772 18.0714 14.8612 18.2999 11.3259C18.3446 10.6341 18.3446 9.91758 18.2999 9.22575C18.0714 5.69048 15.2947 2.87444 11.8089 2.64272C10.6197 2.56367 9.37808 2.56384 8.19125 2.64272C4.7054 2.87444 1.92875 5.69048 1.70028 9.22575C1.65557 9.91758 1.65557 10.6341 1.70028 11.3259C1.7835 12.6135 2.35294 13.8057 3.02334 14.8123C3.41259 15.5171 3.1557 16.3967 2.75025 17.165C2.45792 17.719 2.31175 17.996 2.42911 18.1961C2.54648 18.3962 2.80863 18.4026 3.33294 18.4153C4.3698 18.4406 5.06898 18.1466 5.62398 17.7373C5.93875 17.5052 6.09614 17.3892 6.20461 17.3758C6.31308 17.3625 6.52655 17.4504 6.95342 17.6262C7.33708 17.7842 7.78255 17.8817 8.19125 17.9089C9.37808 17.9878 10.6197 17.988 11.8089 17.9089Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9.99607 10.5H10.0036M13.3257 10.5H13.3332M6.6665 10.5H6.67398"
        stroke={strokeColor}
        strokeWidth={dotStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatBubbleIcon;
