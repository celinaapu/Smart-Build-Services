"use client";

import Image from "next/image";
import kraftaa from "../assets/images/kraftaa.png";
import FindArtisanOrClient from "../ui/signup/FIndArtisanOrClient";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/app/components/Validation";
import { SignUpData } from "../types";

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const methods = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
    mode: "onBlur",
  });
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
        <FormProvider {...methods}>{children}</FormProvider>
      </div>
    </div>
  );
}
