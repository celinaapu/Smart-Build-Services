"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/inputs/Input";
import Button from "@/ui/Button";
import Image from "next/image";
const ForgetPassword = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  const validateStep = async () => {
    const isValid = await trigger(["email"]);
    return isValid;
  };

  return (
    <>
      <div className="flex items-center flex-col">
        <div className="flex gap-2 items-center">
          <Image
            src="https://res.cloudinary.com/celina/image/upload/v1758035364/Pasted_image_3_zocu6v.png"
            alt="wave"
            width={50}
            height={70}
          />
          <h3 className="text-[1.5rem] text-eaa-gray-300] font-bold">Hi,</h3>
        </div>
        <h3 className="text-[1.5rem] text-eaa-gray-300] font-bold">
          forgotten your Password?
        </h3>
        <p className="text-eaa-gray-300 ">Enter your email to reset</p>
      </div>
      <div className="space-y-4 mt-6 shadow-custom px-6 py-9 rounded-md shadow-eaa-gray-300/15 ">
        <Input
          placeholder="enter your full name"
          label="Email"
          {...register("email")}
          errorMessage={errors.email?.message as string}
        />

        <div className="inline-flex flex-col items-center justify-center w-full pt-5 gap-2">
          <Button
            href="/login/passwordconfirmation"
            className="bg-eaa-purple-300 text-xs text-white w-[11.8rem]"
            validateBeforeNavigate={validateStep}
          >
            Reset Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
