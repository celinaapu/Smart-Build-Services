import { useRef, useState } from "react";

const OTPInput = ({ length = 6, onChange }: { length?: number; onChange: (otp: string) => void }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    event.target.value = value; // Update input value

    // Update OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Pass the OTP to the parent component
    onChange(newOtp.join(""));

    // Move to next input if a digit is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text").replace(/\D/g, ""); // Get pasted data and remove non-digits

    if (pasteData.length === length) {
      const newOtp = pasteData.split("");

      setOtp(newOtp);

      onChange(newOtp.join(""));

      inputRefs.current[length - 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && index > 0 && !event.currentTarget.value) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-9 h-11 text-center text-lg font-bold rounded-[1.5rem] border border-gray-300 focus:border-purple-500 focus:outline-none"
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;