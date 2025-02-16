import CrossIcon from "../assets/Icons/SidebarIcons";
import { CloseSideBar } from "../types";

export default function Profile({onClose}: CloseSideBar) {
    return (
      <div className="w-full h-full bg-white shadow-lg p-4">
        <button onClick={onClose}> {/* Attach onClose to the CrossIcon */}
          <CrossIcon />
        </button>
        {/* Add profile content here */}
      </div>
    );
  }