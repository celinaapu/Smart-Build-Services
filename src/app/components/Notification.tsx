"use client";

import React from "react";
import ChatBubbleIcon from "../assets/Icons/ChatIcon";
import ChecklistIcon from "../assets/Icons/CheckList";
import CrossIcon from "../assets/Icons/SidebarIcons";
import { CloseSideBar } from "../types";
import Image from "next/image";

const NotificationPanel = ({ onClose }: CloseSideBar) => {
  const notifications = [
    {
      id: 1,
      icon: ChatBubbleIcon,
      title: "New Chat",
      description: "kayo plumbing sent you a new message",
      time: "4:30pm",
    },
    {
      id: 2,
      icon: ChecklistIcon,
      title: "Booking accepted",
      description: "Chomzy nail accepted your booking",
      time: "4:30pm",
    },
    {
      id: 3,
      type: "update",
      icon: "",
      imageUrl:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1748944494/Frame_36776_tgbmbf.jpg",
      title: "Kraftaa Update",
      description: "new app feature",
      time: "4:30pm",
    },
  ];

  return (
    <div className="w-full h-screen bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="w-full font-bold flex justify-between items-center px-9 py-5 bg-white">
        <h1 className="flex-grow text-center text-sm text-eaa-gray-300 pt-1">
          Notification
        </h1>
        <button onClick={onClose} aria-label="Close chat sidebar">
          <CrossIcon />
        </button>
      </div>

      <div className="">
        {notifications.map((notification, index) => {
          const IconComponent = notification.icon;
          return (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              <div className="p-2 rounded-lg">
                {notification.imageUrl ? (
                  <Image
                    src={notification.imageUrl}
                    alt="Kraftaa logo"
                    className="w-5 h-5 object-contain"
                    width={40}
                    height={40}
                  />
                ) : (
                  <IconComponent />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-[12px] font-medium text-gray-900 truncate">
                    {notification.title}
                  </h3>
                  <span className="text-[10px] text-gray-300 ml-2 flex-shrink-0">
                    {notification.time}
                  </span>
                </div>
                <p className="text-[10px] text-gray-300 mt-1">
                  {notification.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationPanel;
