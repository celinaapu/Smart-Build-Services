"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import EyeIcon from "@/app/assets/Icons/EyeIcon";
import GoogleIcon from "@/app/assets/Icons/GoogleIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/inputs/Input";
import Button from "@/ui/Button";
import Link from "next/link";

const Login = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();
  const validateStep = async () => {
    const isValid = await trigger(["email", "password"]);
    return isValid;
  };
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src="https://res.cloudinary.com/celina/image/upload/v1758035364/Pasted_image_3_zocu6v.png"
            alt="wave"
            width={50}
            height={70}
          />
          <h1 className="text-[1.5rem] text-eaa-gray-300] font-bold">
            Hi, Welcome to <span className="text-eaa-purple-300">Kraftaa!</span>
          </h1>
        </div>
        <div className="space-y-4 mt-6 shadow-custom px-6 py-9 rounded-md shadow-eaa-gray-300/15/15 ">
          <Input
            placeholder="enter your full name"
            label="Email"
            {...register("email")}
            errorMessage={errors.email?.message as string}
          />
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
              className="absolute right-3 top-10 text-eaa-gray-300"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeIcon /> : <EyeIcon />}
            </button>
          </div>

          <div>
            <Link
              href="/login/forgotPassword"
              className="text-eaa-red-300 text-xs flex justify-end"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-full pt-5 gap-2">
            <Button
              href=""
              className="bg-eaa-purple-300 text-xs text-white w-[11.8rem]"
              validateBeforeNavigate={validateStep}
            >
              Login
            </Button>
            <h2>or</h2>
            <Button className="border-eaa-gray-50 border px-8 text-eaa-gray-300 text-xs flex items-center gap-4">
              <GoogleIcon />
              <h1>Continue with Google</h1>
            </Button>
          </div>
        </div>
        <div className="justify-center items-center align-">
          <h1 className="text-eaa-gray-300 text-xs mt-8">
            Don’t have an account?
            <span
              className="text-eaa-purple-300 cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
