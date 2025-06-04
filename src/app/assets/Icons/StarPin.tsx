// export const StarPin = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M12 2L14.09 8.26L20.18 8.27L15.91 12.14L17.27 18.27L12 14.77L6.73 18.27L8.09 12.14L3.82 8.27L9.91 8.26L12 2Z"
//       fill="#000000"
//     />
//   </svg>
// );

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
