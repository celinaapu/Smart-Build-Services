import React from "react";
import VerifiedBadgeIcon from "../assets/Icons/Bookmark";
import Image from "next/image";

interface ProfileHeaderProps {
  name?: string;
  email?: string;
  profileImage?: string;
  isVerified?: boolean;
  onClose?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name = "Mirabel Gates",
  email = "Mirabelgates@gmail.com",
  profileImage = "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749043048/profileForSide_bqaf3q.jpg",
  isVerified = true,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-x-sm mx-auto">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-14 h-14 p-1 ">
            <Image
              src={profileImage}
              alt={`${name}' profile`}
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <h2 className="text-[12px] font-semibold text-gray-900">{name}</h2>
            {isVerified && (
              <div className="p-1">
                <VerifiedBadgeIcon className="text-white" />
              </div>
            )}
          </div>
          <p className="text-gray-500 text-[9px]">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
