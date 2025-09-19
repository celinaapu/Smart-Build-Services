"use client";

import { useState } from "react";
import Image from "next/image";
import wave from "@/app/assets/images/Wave.png";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/inputs/Input";
import Button from "@/ui/Button";
import EyeIcon from "@/app/assets/Icons/EyeIcon";
const StepOne = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const validateStep = async () => {
    const isValid = await trigger(["password", "confirmPassword"]);
    return isValid;
  };

  return (
    <>
      <div className="">
        <div className="flex gap-2 items-center">
          <Image
            src={wave}
            alt="wave"
            width={0}
            height={0}
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="text-[1.5rem] text-eaa-gray-300] font-bold">
            Enter new password
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-eaa-gray-300">Create account as client</p>
        </div>
      </div>
      <div className="space-y-4 mt-6 shadow-custom px-6 py-16 rounded-md shadow-eaa-gray-300/15">
        {/* Password Field */}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            label="Password"
            {...register("password")}
            errorMessage={errors.password?.message as string}
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeIcon /> : <EyeIcon />}
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="********"
            label="Confirm Password"
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message as string}
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-eaa-gray-300"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <EyeIcon /> : <EyeIcon />}
          </button>
        </div>

        {/* Terms & Conditions */}

        <div className="inline-flex flex-col items-center justify-center w-full pt-5 gap-2">
          <Button
            className="bg-eaa-purple-300 text-xs text-white w-[11.8rem]"
            validateBeforeNavigate={validateStep}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepOne;
