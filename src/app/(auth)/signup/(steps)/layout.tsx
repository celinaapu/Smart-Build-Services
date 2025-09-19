"use client";

import BackIcon from "@/app/assets/Icons/BackIcon";
import { usePathname, useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/components/Validation";
import { SignUpData } from "@/types";
import Image from "next/image";

const StepsLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const steps = ["/signup/step-one", "/signup/step-two", "/signup/step-three"];
  const currentStep = steps.findIndex((step) => pathname.startsWith(step)) + 1;

  const methods = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center justify-center bg-white p-4 ">
        <div
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center px-4 py-2 rounded-lg gap-4 cursor-pointer"
        >
          <BackIcon />
          <h1 className="text-eaa-purple-300 font-semibold text-[.75rem]">
            Back
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="https://res.cloudinary.com/celina/image/upload/v1758035364/Pasted_image_3_zocu6v.png"
            alt="wave"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="text-[1.5rem] text-eaa-gray-300] font-bold">
            Hi, Welcome to <span className="text-eaa-purple-300">Kraftaa!</span>
          </h1>
        </div>
        {/* Step Indicator */}
        <h1 className="font-semibold mb-4">Create account as client</h1>
        <div className="flex items-center gap-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-xs text-white ${
                currentStep === index + 1
                  ? "bg-eaa-purple-300"
                  : "bg-eaa-gray-75"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        {/* Form Container */}
        <div className="mt-6 shadow-custom px-6 py-9 rounded-md shadow-eaa-gray-300/15">
          {children}
        </div>
        <h1 className="text-eaa-gray-300 text-xs mt-8">
          Already have an account?{" "}
          <span
            className="text-eaa-purple-300 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </h1>
      </div>
    </FormProvider>
  );
};

export default StepsLayout;
