// components/icons/ProfileArrow.tsx

import React from "react";

interface ProfileArrowProps extends React.SVGProps<SVGSVGElement> {}

const ProfileArrow: React.FC<ProfileArrowProps> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 22L18.75 15.75L12.5 9.5"
      stroke="#9E9E9E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProfileArrow;
