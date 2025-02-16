"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/app/components/inputs/Input";
import Button from "@/app/ui/Button";
import EyeIcon from "@/app/assets/Icons/EyeIcon"; // Assuming you have these SVGs as components

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
    <div className="space-y-4">
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
          className="absolute right-3 top-10 text-gray-500"
          onClick={toggleConfirmPasswordVisibility}
        >
          {showConfirmPassword ? <EyeIcon /> : <EyeIcon />}
        </button>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <h1 className="text-xs">
          I’m agree to The{" "}
          <span className="text-eaa-purple-300">Terms of Service</span> and{" "}
          <span className="text-eaa-purple-300">Privacy Policy</span>
        </h1>
      </div>

      {/* Submit Button */}
      <div className="inline-flex flex-col items-center justify-center w-full pt-5 gap-2">
        <Button
          href="/signup/emailverification"
          className="bg-eaa-purple-300 text-xs text-white w-[11.8rem]"
          validateBeforeNavigate={validateStep}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
