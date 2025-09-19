import DotsIcon from "../app/assets/Icons/DotsIcon";
import MapPin from "../app/assets/Icons/MapPin";
import MarkIcon from "../app/assets/Icons/Markicon";

export interface Job {
  id: string;
  title: string;
  category: string;
  postedTime: string;
  description: string;
  price: string;
  location: string;
  applied: boolean;
}
const JobCard = ({ job, onClick }: { job: Job; onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-3">
        {job.applied && (
          <div className="flex items-center gap-2 text-green-600 text-[10px]">
            <p className="w-3 h-3">
              <MarkIcon />
            </p>

            <span className="font-medium text-[10px]">Applied</span>
          </div>
        )}
        <button className=" w-5 h-5 text-gray-400 hover:text-gray-600 ml-auto">
          <DotsIcon />
        </button>
      </div>

      <div className="bg-gray-50 px-3 pt-3 pb-2 rounded-lg">
        <h3 className="text-[14px] font-semibold text-eaa-purple-300 mb-2">
          {job.title}
        </h3>

        <div className="flex items-center text-[10px] gap-2 text-gray-500 mb-3">
          <span>Category - {job.category}</span>
          <span>Posted {job.postedTime}</span>
        </div>

        <p className="text-gray-600 text-[12px] mb-4 line-clamp-2">
          {job.description}
        </p>
      </div>

      <div className="flex items-center mt-2 justify-between text-[10px]">
        <div className="bg-purple-600 text-white px-3 py-1 rounded-full font-medium">
          Price - {job.price}
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-[10px]">
          <MapPin className="w-3 h-3" />
          <span>{job.location}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
