import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function Share2(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" stroke="currentColor" strokeWidth="2"/>
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}