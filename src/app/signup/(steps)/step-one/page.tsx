"use client";

import { useFormContext } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { Input } from "@/app/components/inputs/Input";
import Button from "@/app/ui/Button";
import GoogleIcon from "@/app/assets/Icons/GoogleIcon";

const StepOne = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  const validateStep = async () => {
    const isValid = await trigger(["name", "email"]);
    return isValid;
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="enter your full name"
        label="Name"
        {...register("name")}
        errorMessage={errors.name?.message as string}
      />
      <Input
        placeholder="name@example.com"
        label="Email"
        {...register("email")}
        errorMessage={errors.email?.message as string}
      />
      <div className="inline-flex flex-col items-center justify-center w-full pt-5 gap-2">
        <Button
          href="/signup/step-two"
          className="bg-eaa-purple-300 text-xs text-white w-[11.8rem]"
          validateBeforeNavigate={validateStep}
        >
          Continue
        </Button>
        <h2>or</h2>
        <Button className="border-eaa-gray-50 border px-8 text-eaa-gray-300 text-xs flex items-center gap-4">
          <GoogleIcon/>
          <h1>Continue with Google</h1>
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
