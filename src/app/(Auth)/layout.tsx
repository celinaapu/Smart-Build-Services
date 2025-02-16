"use client";

import { ReactNode, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Profile from "@/app/components/Profile";
import Chat from "@/app/components/Chat";
import Notification from "@/app/components/Notification";
// import Settings from "@/app/components/Settings";
// import Notifications from "@/app/components/Notifications";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const sidebarComponents: { [key: string]: ReactNode } = {
    profile: <Profile onClose={() => setIsSidebarOpen(false)}/>,
    chat: <Chat onClose={() => setIsSidebarOpen(false)} />,
    notifications: <Notification onClose={() => setIsSidebarOpen(false)} />,
    // settings: <Settings />,
  };

  const toggleSidebar = (component: string) => {
    if (activeComponent === component && isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setActiveComponent(component);
      setIsSidebarOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenSidebar={toggleSidebar} />

      <div className="flex flex-1 mt-16 relative">
        <main
          className={`flex-grow transition-all duration-300 ${isSidebarOpen ? "mr-96" : "mr-0"}`}
        >
          {children}
        </main>

        {/* Sidebar */}
        {isSidebarOpen && activeComponent && (
          <div className="fixed inset-y-0 right-0 w-[26.8rem] bg-white border-l border-eaa-gray-25 top-[4.4rem] transform transition-transform duration-300 ease-in-out z-50">
            {sidebarComponents[activeComponent]}
          </div>
        )}
      </div>
    </div>
  );
}