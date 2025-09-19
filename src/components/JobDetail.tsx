"use client";

import { useState } from "react";
import ChevronLeftIcon from "../app/assets/Icons/ChevronLeftIcon";
import MapPin from "../app/assets/Icons/MapPin";
import MinrateIcon from "../app/assets/Icons/MinRateIcon";
import SaveIcon from "../app/assets/Icons/saveIcon";
import SubmitProposal from "./Workers/SubmitProposal";
import { Job } from "./JobCard";

const JobDetails = ({ job, onBack }: { job: Job; onBack: () => void }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showSubmitProposal, setShowSubmitProposal] = useState(false);

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  const handleApplyNow = () => {
    setShowSubmitProposal(true);
    alert("Application submitted successfully!");
  };

  return (
    <div className="py-6 w-[50%] mx-auto bg-white min-h-screen sm:px-4 md:px-8 lg:px-16">
      <div className="flex w-[70%]  items-center p-4 border-b sm:flex-row">
        <button
          onClick={onBack}
          className="p-2 w-[20%] hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-700" />
        </button>
        <h1 className="text-[15px] w-[80%] justify-center text-center font-semibold text-gray-900">
          Job Details
        </h1>
        <div className="w-10"></div>
      </div>

      <div className="p-4 space-y-6 sm:p-4 md:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="">
            <div className="flex gap-6 item-center ">
              <h2 className="text-[16px] font-bold text-eaa-purple-300 mb-2">
                {job.title}
              </h2>
              <button
                onClick={handleSaveToggle}
                className={`flex items-center gap-1 px-3 py-1 text-[10px] transition-colors ${
                  isSaved ? " text-gray-600 " : " text-eaa-purple-300"
                }`}
              >
                <SaveIcon
                  className={`w-3 h-3 text-black ${
                    isSaved ? "fill-current" : ""
                  }`}
                />
                Saved
              </button>
            </div>

            <div className="flex flex-wrap items-center text-[12px] text-gray-600 mb-1 gap-2">
              <span className="font-medium">Category - {job.category}</span>
              <span>Posted {job.postedTime}</span>
            </div>
            <div className="flex items-center text-gray-600 text-[12px] gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Job Description
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm w-full md:w-[80%] lg:w-[60%]">
            {job.description}
            <span>
              Starton offers various kind of nail tech services gbheekeje euehs
              and actually assume my Starton offers various kind of nail tech
              services gbheekeje euehs and actually assume my Starton offers
              various kind of nail tech services gbheekeje euehs and actually
              assume myStarton offers various kind of nail tech services
              gbheekeje euehs and actually assume my
            </span>
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-eaa-purple-300 text-white px-4 py-2 rounded-full w-max">
          <MinrateIcon className="w-4 h-4" />
          <span className="font-semibold">Price - {job.price}</span>
        </div>
      </div>

      <div className="fixed w-full bottom-0 transform flex w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border-t p-4">
        <div className="flex justify-between w-full sm:flex-row item-center">
          <button
            onClick={handleSaveToggle}
            className={`flex w-28 items-center text-[12px] gap-1 justify-center px-2 py-2 rounded-full font-medium transition-colors duration-300 ease-in-out ${
              isSaved
                ? "bg-eaa-purple-300 text-eaa-purple-300 border border-purple-200"
                : "bg-white shadow-lg text-gray-700 hover:bg-eaa-purple-300 hover:text-white"
            }`}
          >
            <SaveIcon
              className={`w-4 h-4 text-black ${isSaved ? "fill-current" : ""}`}
            />
            Saved
          </button>
          <button
            onClick={handleApplyNow}
            className="text-[12px] bg-white shadow-lg w-28 rounded-full bg-gray-100 text-gray-700 hover:bg-eaa-purple-300 hover:text-white py-3 px-3 font-semibold transition-colors duration-300"
          >
            Apply now
          </button>
          {showSubmitProposal && (
            <SubmitProposal onClose={() => setShowSubmitProposal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
