import React from "react";
import Link from "next/link";
import ProfileSaveArt from "../app/assets/Icons/ProfileSaveArt";
import ProfileArrow from "../app/assets/Icons/ProfileAarrow";
import ProfilePayHistIcon from "../app/assets/Icons/ProfilePaymentIcon";
import PaymentMethodIcon from "../app/assets/Icons/PaymentMethodIcon";
import SecurityIcon from "../app/assets/Icons/SecurityIcon";
import HelpIcon from "../app/assets/Icons/HelpIcon";
import ProfileIcon from "../app/assets/Icons/UserIcon";
import ProfileVeriIcon from "../app/assets/Icons/ProfileVeriIcon";
import CrossIcon from "../app/assets/Icons/SidebarIcons";
import ProfileHeader from "./ProfileHeader";
import LogoutIcon from "../app/assets/Icons/Logout";

export const settingsItems = [
  {
    icon: <ProfileIcon />,
    title: "Profile",
    subtitle: "Change your username, email, number etc.",
    href: "/profile",
  },
  {
    icon: <ProfileVeriIcon />,
    title: "Verification",
    subtitle: "Verify your Identity",
    href: "/verification",
    extra: (
      <span className="text-white text-xs px-3 py-1 bg-rose-500 rounded-full flex items-center gap-1">
        Not Verified
        <ProfileArrow className="w-3 h-3 text-white " />
      </span>
    ),
  },
  {
    icon: <ProfileSaveArt />,
    title: "Saved Artisans",
    subtitle: "View saved artisans",
    href: "/saved-artisans",
  },
  {
    icon: <ProfilePayHistIcon />,
    title: "Payment History",
    subtitle: "View transaction history",
    href: "/payment-history",
  },
  {
    icon: <PaymentMethodIcon />,
    title: "Payment Methods",
    subtitle: "Add payment method",
    href: "/payment-methods",
  },
  {
    icon: <SecurityIcon />,
    title: "Security",
    subtitle: "Add payment method",
    href: "/security",
  },
  {
    icon: <HelpIcon />,
    title: "Help & Support",
    subtitle: "Faqs, contact us, privacy policy",
    href: "/help-support",
  },
];

const ProfileSettings = ({ onClose }: { onClose: () => void }) => {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="px-6 py-6 bg-white flex flex-col">
      <div className="w-4 h-4">
        <button onClick={onClose} aria-label="Close chat sidebar">
          <CrossIcon />
        </button>
      </div>
      <div>
        <ProfileHeader />
      </div>

      <div className="">
        {settingsItems.map((item, index) => (
          <Link key={index} href={item.href} className="block">
            <div className="flex items-center justify-between m-2.5 shadow-sm hover:bg-gray-50 transition-colors duration-200 cursor-pointer rounded-md px-2">
              <div className="flex items-center">
                <div className="w-6 h-6">{item.icon}</div>
                <div className="pl-2">
                  <h4 className="text-[11px] font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-[9px] text-gray-500">{item.subtitle}</p>
                </div>
              </div>
              {item.extra ?? <ProfileArrow className="w-5 h-5 text-gray-400" />}
            </div>
          </Link>
        ))}
      </div>

      <Link href="/log-out" className="mt-10 flex justify-center">
        <button
          onClick={handleLogout}
          className="text-purple-600 text-[9px] font-medium flex items-center gap-1 hover:text-purple-700 transition-colors duration-200"
        >
          Log out
          <LogoutIcon />
        </button>
      </Link>
    </div>
  );
};

export default ProfileSettings;
