"use client";

import BackIcon from "@/app/assets/Icons/BackIcon";
import { useRouter } from "next/navigation";
// import { useForm, FormProvider } from "react-hook-form";
// import Image from "next/image";
// import wave from "../../assets/images/Wave.png";

const PasswordLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  

  return (
      <div className="flex flex-col items-center justify-center bg-white p-4 ">
        <div
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center px-4 py-2 rounded-lg gap-4 cursor-pointer"
        >
          <BackIcon />
          <h1 className="text-eaa-purple-300 font-semibold text-[.75rem]">Back</h1>
        </div>
        
        
        
          {children}
        
      </div>
  );
};

export default PasswordLayout;
