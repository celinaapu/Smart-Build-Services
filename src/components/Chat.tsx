import Image from "next/image";
import Link from "next/link";
import CrossIcon from "@/app/assets/Icons/SidebarIcons";
import { CloseSideBar } from "../types";

const chatData = [
  {
    name: "Kleen Cut",
    message: "Okay sir, #3000 is fine you can proceed with ...",
    time: "4:30pm",
    slug: "kleen-cut",
  },
  {
    name: "Grace Nails",
    message: "Okay sir, #3000 is fine you can proceed with ...",
    time: "4:30pm",
    slug: "grace-nails",
  },
  {
    name: "Ben pipe",
    message: "Okay sir, #3000 is fine you can proceed with ...",
    time: "4:30pm",
    slug: "ben-pipe",
  },
];

export default function Chat({ onClose }: CloseSideBar) {
  return (
    <div className="w-full h-full shadow-lg p-4 mt-16">
      <div className="fixed top-0 left-0 w-full font-bold flex justify-between items-center px-9 py-5 bg-white z-10">
        <h1 className="flex-grow text-center text-sm text-eaa-gray-300 pt-1">
          Chats
        </h1>
        <button onClick={onClose} aria-label="Close chat sidebar">
          <CrossIcon />
        </button>
      </div>

      <div className=" mx-auto">
        {chatData.map((chat, index) => (
          <Link
            key={index}
            href={`/chat/${chat.slug}`}
            className="block hover:bg-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between bg-white pb-2 pt-2 border-b border-t">
              <div className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_198_uoujzu.jpg"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full pr-2"
                />
                <div>
                  <div className="font-semibold text-[12px]">{chat.name}</div>
                  <div className="text-gray-500 text-[10px] truncate max-w-[200px]">
                    {chat.message}
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-[10px]">{chat.time}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
