import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function FilterIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" 
        fill="white"
      />
    </svg>
  );
}