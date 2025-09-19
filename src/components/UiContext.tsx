"use client"

import React, { createContext, useContext, useState } from "react";

interface UIContextProps {
  height: number;
  setHeight: (height: number) => void;
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);

export const useUIContext = (): UIContextProps => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be used within a UIProvider");
  }
  return context;
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [height, setHeight] = useState<number>(0);

  return (
    <UIContext.Provider
      value={{
        height,
        setHeight,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
