"use client";

import Button from "../../../ui/Button";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="text-center">
      <div className="flex gap-2 items-center">
        <Image
          src="https://res.cloudinary.com/celina/image/upload/v1758035364/Pasted_image_3_zocu6v.png"
          alt="wave"
          width={50}
          height={50}
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="text-[1.5rem] text-eaa-gray-300] font-bold">
          Hi, Welcome to <span className="text-eaa-purple-300">Kraftaa!</span>
        </h1>
      </div>
      <h1 className="text-eaa-gray-300 w-[15rem] mx-auto">
        Let&apos;s get started by creating your account.
      </h1>
      <p className="text-[.75rem] mt-8 mb-3">Who are you?</p>
      <div className="flex flex-col items-center justify-center gap-3">
        <Button className="bg-eaa-green-300 w-[11.8rem]">
          I&apos;m an artisan
        </Button>
        <Button
          className="bg-eaa-purple-300 w-[11.8rem] text-[#FFFFFF]"
          href="/signup/step-one"
        >
          I&apos;m a client
        </Button>
      </div>
    </div>
  );
};
export default SignUp;
