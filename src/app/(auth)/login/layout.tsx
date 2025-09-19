"use client";
import Image from "next/image";
import FindArtisanOrClient from "../../../ui/signup/FIndArtisanOrClient";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/components/Validation";
import { SignUpData } from "../../../types";


export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const methods = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
    mode: "onBlur",
  });

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Fixed */}
      <div className="w-[50%] h-full">
        <FindArtisanOrClient />
      </div>

      {/* Right side - Scrollable */}
      <div className="w-[50%] h-full overflow-y-auto bg-white">
        <div className="min-h-full flex items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/celina/image/upload/v1758035235/Pasted_image_2_zoilx0.png"
                alt=""
                width={100}
                height={150}
                className="mb-4"
              />
            </div>
            <FormProvider {...methods}>{children}</FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

// Login Component - Updated to work within the layout
