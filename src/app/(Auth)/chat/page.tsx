"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import BookIcon from "@/app/assets/Icons/BookIcon";
import ShareIcon from "@/app/assets/Icons/ShareIcon";
import MapPin from "@/app/assets/Icons/MapPin";

export default function ChatPage() {
  const params = useParams();
  const slug = params.slug;

  return (
    <div className="relative h-screen w-full bg-chat-wallpaper">
      <div className="w-full bg-white gap-4 flex items-center p-4 shadow-sm">
        <div className="flex items-center w-[85%] justify-center gap-2">
          <Image
            src="https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_198_uoujzu.jpg"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h2 className="font-semibold text-gray-900 capitalize">{slug}</h2>
        </div>
        <div className="w-[10%]">
          <div
            role="button"
            className="bg-purple-600 text-sm flex text-white justify-center items-center rounded-full px-4 py-2 gap-1"
          >
            <span>
              <BookIcon />
            </span>
            Book
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto bg-chat-wallpaper">
        <div className="flex flex-col gap-4">
          <div className="self-start max-w-[70%]">
            <div className="bg-lime-400 text-black p-3 rounded-2xl rounded-bl-sm">
              <p className="text-sm">
                Okay sir, #3000 is fine you can proceed with
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-2">4:30pm</p>
          </div>

          <div className="self-end max-w-[70%]">
            <div className="bg-gray-700 text-white p-3 rounded-2xl rounded-br-sm">
              <p className="text-sm">okay, i&apos;m booking it now</p>
            </div>
            <p className="text-xs text-gray-500 mt-1 mr-2 text-right">4:30pm</p>
          </div>

          <div className="self-end max-w-[80%]">
            <div className="bg-gray-800 text-white p-4 rounded-2xl rounded-br-sm">
              <p className="text-purple-400 font-semibold text-sm mb-1">
                Acrylic Nail
              </p>
              <p className="font-semibold text-base mb-2">#15,000</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Starton offers various kind of nail tech services djheekeje
                euehe
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full fixed p-4 bottom-0 left-0 bg-white border-t flex items-center gap-3">
        <button className="p-1">
          <MapPin />
        </button>
        <input
          type="text"
          placeholder="Type Message...."
          className="flex-grow p-3 rounded-full bg-gray-100 border-0 focus:outline-none text-sm"
        />
        <button className="text-purple-600 p-1">
          <ShareIcon />
        </button>
      </div>
    </div>
  );
}
