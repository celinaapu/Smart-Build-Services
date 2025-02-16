import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient": "linear-gradient(to bottom, #6828B0, #B1FA63)",
        OTP: "url('/assets/images/otpbg.svg')",
      },
      maxWidth: {
        "82.6": "82.6rem",
      },
      boxShadow: {
        custom: "0px 4px 12px",
      },
      colors: {
        // foreground: "var(--foreground)",
        eaa: {
          "custom-gradient": "linear-gradient(to bottom, #6828B0, #B1FA63)",
          "green-300": "#B1FA63",
          "purple-300": "#6828B0",
          "gray-25": "#BBBBBB",
          "gray-50": "#CBCACA",
          "gray-75": "#B8B8B8",
          "gray-100": "#ADADAD",
          "gray-300": "#242834",
          "red-300": "#FF4C51",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
