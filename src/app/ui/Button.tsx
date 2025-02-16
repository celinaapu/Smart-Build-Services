"use client";

import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  validateBeforeNavigate?: () => Promise<boolean>; // ✅ Added validation function
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  href,
  className = "",
  validateBeforeNavigate, // ✅ Accept validation function
}) => {
  const baseStyles =
    "rounded-[3rem] shadow-custom font-medium transition duration-300 focus:outline-none";

  const router = useRouter();

  const handleClick = async () => {
    if (validateBeforeNavigate) {
      const isValid = await validateBeforeNavigate();
      if (!isValid) return;
    }

    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <button
      className={`${baseStyles} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } text-[0.875rem] font-semibold py-4`}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
