"use client";

import Image from "next/image";
import FindArtisanOrClient from "../../../ui/signup/FIndArtisanOrClient";

export default function SignUpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-full flex m-0 p-0">
      <div className="w-[50%] h-full">
        <FindArtisanOrClient />
      </div>

      <div className="flex items-center w-[50%] flex-col justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/celina/image/upload/v1758035235/Pasted_image_2_zoilx0.png"
            alt="logo"
            width={150}
            height={180}
            className="mb-4"
            unoptimized
          />
        </div>
        {children}
      </div>
    </div>
  );
}
