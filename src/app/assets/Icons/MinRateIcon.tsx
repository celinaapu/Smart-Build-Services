"use client";

import React from "react";

type MinrateIconProps = React.SVGProps<SVGSVGElement>;

const MinrateIcon: React.FC<MinrateIconProps> = (props) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 10.6875C6.16719 11.0765 5.07317 11.3125 3.875 11.3125C3.2088 11.3125 2.57481 11.2396 2 11.1079C1.06223 10.8931 0.75 10.329 0.75 9.36625V2.63373C0.75 2.01821 1.40002 1.59546 2 1.73287C2.57481 1.86453 3.2088 1.9375 3.875 1.9375C5.07317 1.9375 6.16719 1.70147 7 1.3125C7.83281 0.923525 8.92681 0.6875 10.125 0.6875C10.7912 0.6875 11.4252 0.760469 12 0.892125C12.9886 1.11855 13.25 1.70022 13.25 2.63373V9.36625C13.25 9.98181 12.6 10.4046 12 10.2671C11.4252 10.1354 10.7912 10.0625 10.125 10.0625C8.92681 10.0625 7.83281 10.2985 7 10.6875Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default MinrateIcon;
