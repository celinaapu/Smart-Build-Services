import  CrossIcon  from "@/app/assets/Icons/SidebarIcons";
import { CloseSideBar } from "../types";

export default function Chat({onClose}: CloseSideBar) {
    return (
      <div className="w-full h-full shadow-lg p-4 mt-18">
        <div className=" fixed top-0 left-0 w-full font-bold flex justify-between items-center px-9 py-5" >
          <h1 className="flex-grow text-center text-sm text-eaa-gray-300 pt-1  ">Chats</h1>
          <button onClick={onClose}> {/* Attach onClose to the CrossIcon */}
          <CrossIcon />
        </button>
        </div>
      </div>
    );
  }