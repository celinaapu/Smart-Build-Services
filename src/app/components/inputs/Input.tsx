import { forwardRef, ReactNode } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  errorMessage?: string;
  labelClass?: string;
  className? : string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, prefix, suffix, errorMessage, labelClass, className, ...rest }, ref) => {
    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={name}
            className={`text-sm text-eaa-gray-300 px-2 rounded-md ${labelClass}`}
          >
            {label}
          </label>
        )}

        {/* Input Wrapper */}
        <div
          className={`flex w-[19rem]  border border-gray-300 pl-5 pr-3 rounded-3xl gap-x-2 text-xs ${
            errorMessage ? "border-eaa-red-300" : "border-eaa-gray-50"
          } ${className}  `}
          style={{ minHeight: "2rem" }}
        >
          {prefix && <span>{prefix}</span>}

          {/* Input Field */}
          <input
            {...rest}
            name={name}
            ref={ref}
            className={`w-full text-xs bg-transparent border-none outline-none placeholder-eaa-gray-100 placeholder:text-xs py-3 ${className}`}
          />

          {suffix && <span>{suffix}</span>}
        </div>

        {/* Error Message */}
        {errorMessage && <div className="text-eaa-red-300 text-xs mt-1">{errorMessage}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
