"use client";

import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import Profile from "@/app/components/Profile";
import Chat from "@/app/components/Chat";
import Notification from "@/app/components/Notification";
import CategorySelector from "../components/Categories";
import { SidebarProvider, useSidebar } from "../components/ContextProvider";

type AuthLayoutProps = {
  children: ReactNode;
};

// Separate component to use the context
function AuthLayoutContent({ children }: AuthLayoutProps) {
  const { isSidebarOpen, activeComponent, closeSidebar } = useSidebar();

  const sidebarComponents: { [key: string]: ReactNode } = {
    profile: <Profile onClose={closeSidebar} />,
    chat: <Chat onClose={closeSidebar} />,
    notifications: <Notification onClose={closeSidebar} />,
    categories: <CategorySelector onClose={closeSidebar} />,
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className=" flex flex-1 mt-16 relative">
        <main
          className={`flex-grow transition-all duration-300 ${
            isSidebarOpen ? "mr-0" : "mr-0"
          }`}
        >
          {children}
        </main>

      
        {isSidebarOpen && activeComponent && (
          <div className="fixed inset-y-0 right-0 w-[28%] mt-[5.5%] bg-white transform transition-transform duration-300 ease-in-out z-50">
            {sidebarComponents[activeComponent]}
          </div>
        )}
      </div>
    </div>
  );
}


export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <SidebarProvider>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </SidebarProvider>
  );
}
