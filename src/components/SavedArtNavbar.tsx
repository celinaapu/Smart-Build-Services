"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProfileIcon from "../app/assets/Icons/UserIcon";
import ProfileVeriIcon from "../app/assets/Icons/ProfileVeriIcon";
import ProfileSaveArt from "../app/assets/Icons/ProfileSaveArt";
import HelpIcon from "../app/assets/Icons/HelpIcon";
import PaymentMethodIcon from "../app/assets/Icons/PaymentMethodIcon";
import ProfileArrow from "../app/assets/Icons/ProfileAarrow";
import ProfilePayHistIcon from "../app/assets/Icons/ProfilePaymentIcon";
import SecurityIcon from "../app/assets/Icons/SecurityIcon";
import LogoutIcon from "../app/assets/Icons/Logout";

export const navigationItems = [
  { icon: <ProfileIcon />, title: "Profile", href: "/profile" },
  { icon: <ProfileVeriIcon />, title: "Verification", href: "" },
  {
    icon: <ProfileSaveArt />,
    title: "Saved Artisans",
    href: "/ashboard/saved-artisans",
  },
  {
    icon: <ProfilePayHistIcon />,
    title: "Payment History",
    href: "",
  },
  {
    icon: <PaymentMethodIcon />,
    title: "Payment Methods",
    href: "",
  },
  { icon: <SecurityIcon />, title: "Security", href: "/security" },
  { icon: <HelpIcon />, title: "Help & Support", href: "/help-support" },
];

interface FlexibleNavbarProps {
  items?: typeof navigationItems;
  isExpanded?: boolean;
  setIsExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const SavedArtNavbar: React.FC<FlexibleNavbarProps> = ({
  items = navigationItems,
  isExpanded,
  setIsExpanded,
  className = "",
}) => {
  const [sidebarHeight, setSidebarHeight] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSidebarHeight = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      setSidebarHeight(windowHeight - navbarHeight);
    };

    updateSidebarHeight();
    window.addEventListener("resize", updateSidebarHeight);
    return () => window.removeEventListener("resize", updateSidebarHeight);
  }, []);

  const toggleExpanded = () => {
    if (setIsExpanded) setIsExpanded(!isExpanded);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <>
      <div ref={navbarRef} className="h-[60px] w-full bg-white"></div>

      <div
        style={{
          height: `${sidebarHeight}px`,
          boxShadow: "4px 0px 15px 0px #00000026",
        }}
        className={`fixed top-[60px] z-50 bg-white flex flex-col transition-all duration-300 ease-in-out ${className}`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleExpanded}
            className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200"
            aria-label={isExpanded ? "Collapse navbar" : "Expand navbar"}
          >
            <ProfileArrow
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex-1">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="block">
              <div
                className={`flex items-center hover:bg-eaa-purple-300 transition-colors duration-200 cursor-pointer rounded-md ${
                  isExpanded ? "p-3" : "py-3 px-2 justify-center"
                }`}
              >
                <div
                  className={`w-5 flex-shrink-0 ${
                    isExpanded ? "mr-2" : "mb-3"
                  }`}
                >
                  {item.icon}
                </div>
                {isExpanded && (
                  <span className="text-[10px] pl-2 font-medium text-gray-900 truncate">
                    {item.title}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div
          onClick={handleLogout}
          className={`flex items-center hover:bg-eaa-purple-300 transition-colors duration-200 cursor-pointer rounded-md mt-auto ${
            isExpanded ? "p-3" : "py-3 px-2 justify-center"
          }`}
        >
          <div className={`w-5 flex-shrink-0 ${isExpanded ? "mr-2" : "mb-3"}`}>
            <LogoutIcon className="w-6 h-4" />
          </div>
          {isExpanded && (
            <span className="text-[10px] pl-2 font-medium text-gray-900 truncate">
              Log out
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedArtNavbar;
