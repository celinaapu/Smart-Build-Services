"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type SidebarComponent =
  | "profile"
  | "chat"
  | "notifications"
  | "categories"
  | null;


interface SidebarContextType {
  isSidebarOpen: boolean;
  activeComponent: SidebarComponent;
  toggleSidebar: (component: SidebarComponent) => void;
  closeSidebar: () => void;
  openSidebar: (component: SidebarComponent) => void;
}


const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] =
    useState<SidebarComponent>(null);

  const toggleSidebar = (component: SidebarComponent) => {
    if (activeComponent === component && isSidebarOpen) {
      setIsSidebarOpen(false);
      setActiveComponent(null);
    } else {
      setActiveComponent(component);
      setIsSidebarOpen(true);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setActiveComponent(null);
  };

  const openSidebar = (component: SidebarComponent) => {
    setActiveComponent(component);
    setIsSidebarOpen(true);
  };

  const value: SidebarContextType = {
    isSidebarOpen,
    activeComponent,
    toggleSidebar,
    closeSidebar,
    openSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
