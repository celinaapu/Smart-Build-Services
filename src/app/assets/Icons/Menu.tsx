
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function Menu(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="4" x2="20" y1="6" y2="6" stroke="currentColor" strokeWidth="2"/>
      <line x1="4" x2="20" y1="12" y2="12" stroke="currentColor" strokeWidth="2"/>
      <line x1="4" x2="20" y1="18" y2="18" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}