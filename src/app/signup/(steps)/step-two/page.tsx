"use client";

import { useFormContext } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { Input } from "@/app/components/inputs/Input";
import Button from "@/app/ui/Button";

 const StepOne = () => {
  const { register, formState: { errors }, trigger } = useFormContext();
  const validateStep = async () => {
    const isValid = await trigger(["username", "mobileNumber"]);
    return isValid;
  };


  return (
    <div className="space-y-4">
      <Input placeholder="username" label="Username" {...register("username")} errorMessage={errors.username?.message as string} />
      <Input placeholder="+2341112345678" label="Mobile number" {...register("mobileNumber")} errorMessage={errors.mobileNumber?.message as string} />
    <div className="inline-flex flex-col items-center justify-center w-full pt-5 gap-2">
<Button href= "/signup/step-three" className="bg-eaa-purple-300 text-xs text-white w-[11.8rem]" validateBeforeNavigate={validateStep}>
        Last step...
      </Button>
      
    </div>
      
    </div>
  );
}

export default StepOne