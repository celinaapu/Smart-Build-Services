"use client";

import Image from "next/image";
import kraftaa from "../assets/images/kraftaa.png";
import FindArtisanOrClient from "../ui/signup/FIndArtisanOrClient";

export default function SignUpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-svh gap-x-3 m-0 p-0">
      <FindArtisanOrClient />
      <div className="flex items-center flex-col justify-center relative">
        <div className="flex items-center justify-center">
        <Image
          src={kraftaa}
          alt="logo"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
          className="mb-4"
        />
      </div>
      {children}
      </div>
    </div>
  );
}
