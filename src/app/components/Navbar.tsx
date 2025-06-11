"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HomeIcon,
  LocationIcon,
  HugIcon,
  PostJobIcon,
  SearchIcon,
  NotificationIcon,
  ChatIcon,
} from "@/app/assets/Icons/NavbarIcons";
import Image from "next/image";
import logo from "@/app/assets/images/Navkraftaa.png";
import user from "@/app/assets/images/profilehead.png";
import { Input } from "./inputs/Input";
import { useSidebar } from "./ContextProvider";
import BookIcon from "../assets/Icons/BookIcon";
import { useUIContext } from "./UiContext";

export default function Navbar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const componentRef = useRef<HTMLElement>(null);
  const { setHeight } = useUIContext();

  useEffect(() => {
    if (componentRef.current) {
      const measuredHeight = componentRef.current.offsetHeight;
      setHeight(measuredHeight);
    }
  }, [setHeight]);

  return (
    <nav
      ref={componentRef}
      className="fixed top-0 left-0 w-full bg-eaa-purple-300 shadow-md flex items-center justify-between px-6 py-3 z-50"
    >
      <div className="w-[81.6rem] mx-auto">
        <div className="flex items-center w-full flex-grow-0 justify-between">
          <div className="text-xl font-bold">
            <Image src={logo} alt="logo" width={100} height={50} />
          </div>

          <div className="flex gap-7">
            <Link
              href="/dashboard"
              className={`relative flex items-center gap-2 font-bold justify-center ${
                pathname === "/dashboard"
                  ? "text-eaa-green-300 px-8"
                  : "text-white"
              }`}
            >
              <HomeIcon
                className={pathname === "/dashboard" ? "#B1FA63" : "white"}
              />
              {pathname === "/dashboard" && (
                <>
                  <span className="text-sm text-eaa-green-300">Home</span>
                  <div className="absolute -bottom-6 w-full h-1 bg-eaa-green-300 rounded-full"></div>
                </>
              )}
            </Link>

            <Link
              href="/location"
              className={`relative flex items-center gap-2 font-bold justify-center ${
                pathname === "/location"
                  ? "text-eaa-green-300 px-8"
                  : "text-white"
              }`}
            >
              <LocationIcon
                className={pathname === "/location" ? "#B1FA63" : "white"}
              />
              {pathname === "/location" && (
                <>
                  <span className="text-sm text-eaa-green-300">Location</span>
                  <div className="absolute -bottom-6 w-full h-1 bg-eaa-green-300 rounded-full"></div>
                </>
              )}
            </Link>

            <Link
              href="/booking"
              className={`relative flex items-center gap-2 font-bold justify-center ${
                pathname === "/booking"
                  ? "text-eaa-green-300 px-8"
                  : "text-white"
              }`}
            >
              <BookIcon
                className={pathname === "/booking" ? "#B1FA63" : "white"}
              />
              {pathname === "/booking" && (
                <>
                  <span className="text-sm text-eaa-green-300">Booking</span>
                  <div className="absolute -bottom-6 w-full h-1 bg-eaa-green-300 rounded-full"></div>
                </>
              )}
            </Link>
          </div>

          <Link
            href="/chat"
            className={`relative flex items-center gap-2 font-bold justify-center ${
              pathname === "/chat" ? "text-eaa-green-300 px-8" : "text-white"
            }`}
          >
            <ChatIcon className={pathname === "/chat" ? "#B1FA63" : "white"} />
            {pathname === "/chat" && (
              <>
                <span className="text-sm text-eaa-green-300">Chat</span>
                <div className="absolute -bottom-6 w-full h-1 bg-eaa-green-300 rounded-full"></div>
              </>
            )}
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative mr-11">
              <Input
                placeholder="Find artisan"
                className="placeholder:text-white placeholder:text-sm text-white"
              />
              <button className="absolute right-5 top-3 text-gray-500">
                <SearchIcon />
              </button>
            </div>

            <button className="bg-white text-eaa-purple-300 px-4 py-2 rounded-md flex items-center gap-2">
              <PostJobIcon />
              <h1>Post Jobs</h1>
            </button>

            <button onClick={() => toggleSidebar("notifications")}>
              <div className="mx-9">
                <NotificationIcon />
              </div>
            </button>

            <button onClick={() => toggleSidebar("profile")}>
              <div className="w-[2.56rem] h-[2.56rem] bg-gray-300 rounded-full overflow-hidden">
                <Image
                  src={user}
                  alt="user"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            <button onClick={() => toggleSidebar("chat")}>
              <HugIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
