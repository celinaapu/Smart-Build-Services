import CrossIcon from "@/app/assets/Icons/SidebarIcons";
import { CloseSideBar } from "@/types";

export default function SubmitProposal({ onClose }: CloseSideBar) {
  return (
    <form className="w-full h-full shadow-lg p-4 mt-16">
      <div className="fixed top-0 left-0 w-full font-bold flex justify-between items-center px-9 py-5 bg-white z-10">
        <h1 className="flex-grow text-center text-sm text-eaa-gray-300 pt-1">
          Chats
        </h1>
        <button onClick={onClose} aria-label="Close chat sidebar">
          <CrossIcon />
        </button>
      </div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        Write a short description why I should hire you
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        rows={5}
        placeholder="Your response..."
      ></textarea>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Amount (₦)
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="15,000"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className=" hover:bg-eaa-purple-300 text-gray-900 font-medium py-3 px-8 rounded-full transition-colors duration-300"
        >
          Submit proposal
        </button>
      </div>
    </form>
  );
}
