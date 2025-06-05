import React from "react";
import ProfileSaveArt from "../assets/Icons/ProfileSaveArt";
import ProfileArrow from "../assets/Icons/ProfileAarrow";
import ProfilePayHistIcon from "../assets/Icons/ProfilePaymentIcon";
import PaymentMethodIcon from "../assets/Icons/PaymentMethodIcon";
import SecurityIcon from "../assets/Icons/SecurityIcon";
import HelpIcon from "../assets/Icons/HelpIcon";
import ProfileIcon from "../assets/Icons/UserIcon";
import ProfileVeriIcon from "../assets/Icons/ProfileVeriIcon";
import CrossIcon from "../assets/Icons/SidebarIcons";
import ProfileHeader from "./ProfileHeader";

const settingsItems = [
  {
    icon: <ProfileIcon />,
    title: "Profile",
    subtitle: "Change your username, email, number etc.",
  },
  {
    icon: <ProfileVeriIcon />,
    title: "Verification",
    subtitle: "Verify your Identity",
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
  },
  {
    icon: <ProfilePayHistIcon />,
    title: "Payment History",
    subtitle: "View transaction history",
  },
  {
    icon: <PaymentMethodIcon />,
    title: "Payment Methods",
    subtitle: "Add payment method",
  },
  {
    icon: <SecurityIcon />,
    title: "Security",
    subtitle: "Add payment method",
  },
  {
    icon: <HelpIcon />,
    title: "Help & Support",
    subtitle: "Faqs, contact us, privacy policy",
  },
];

const ProfileSettings = ({ onClose }: { onClose: () => void }) => {
  // const { closeSidebar } = useSidebar();
  return (
    <div className=" px-4 py-6 bg-white">
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
          <div
            key={index}
            className="flex items-center justify-between shadow-sm py-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6">{item.icon}</div>
              <div>
                <h4 className="text-[11px] font-medium text-gray-900">
                  {item.title}
                </h4>
                <p className="text-[9px] text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            {item.extra ?? <ProfileArrow className="w-5 h-5 text-gray-400" />}
          </div>
        ))}
      </div>

      <div className="pt-8 flex justify-center">
        <button className="text-purple-600 text-[9px] font-medium flex items-center gap-1">
          Log out
          <span className="inline-block w-4 h-4 bg-purple-600 rounded-full" />
          {/* Replace with logout icon */}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
