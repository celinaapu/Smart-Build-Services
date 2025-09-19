"use client";

import { useState } from "react";
import * as Yup from "yup";
import OTPInput from "@/components/inputs/OtpInput";
import Button from "@/ui/Button";
import { otpSchema } from "@/components/Validation";
import background from "@/app/assets/images/otpbg.svg";

const PasswordConfirmation = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      // Validate the OTP
      await otpSchema.validate({ otp });
      setError("");

      console.log("Verifying OTP...");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center p-6 rounded-2xl bg-eaa-purple-300 shadow-md py-14 w-96"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h1 className="text-white text-2xl font-bold">Verify your account</h1>
        <p className="text-white text-sm mb-4">
          Enter code sent to name@gmail.com
        </p>

        <OTPInput length={6} onChange={(otp) => setOtp(otp)} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <Button
          href="/login/newpassword"
          onClick={handleVerify}
          className="mt-6 text-eaa-purple-300 bg-white w-[11.8rem] px-6 py-2 rounded-full font-semibold hover:bg-purple-100 active:bg-purple-200 transition-colors"
        >
          Verify
        </Button>
      </div>
    </>
  );
};

export default PasswordConfirmation;
