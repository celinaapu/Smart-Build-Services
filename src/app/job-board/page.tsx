"use client";

import React, { useState } from "react";
import JobCard from "@/components/JobCard";
import JobDetails from "@/components/JobDetail";

interface Job {
  id: string;
  title: string;
  category: string;
  postedTime: string;
  description: string;
  price: string;
  location: string;
  applied: boolean;
}

const JobBoard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: "1",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
    {
      id: "2",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
    {
      id: "3",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
    {
      id: "4",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
    {
      id: "5",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
    {
      id: "6",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
    {
      id: "7",
      title: "Child barber needed",
      category: "Barber",
      postedTime: "10 mins ago",
      description:
        "Starton offers various kind of nail tech services gbheekeje euehs and actually assume my ...",
      price: "₦15000",
      location: "Kilo, surulers lagos",
      applied: true,
    },
  ];
  const filterOptions = ["All", "Recently posted", "Jobs for you"];

  const getFilteredJobs = (): Job[] => {
    switch (activeFilter) {
      case "Recently posted":
        return jobs.filter((job) => job.applied);
      case "Jobs for you":
        return jobs.slice(0, 3);
      default:
        return jobs;
    }
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleBackToJobBoard = () => {
    setSelectedJob(null);
  };

  if (selectedJob) {
    return <JobDetails job={selectedJob} onBack={handleBackToJobBoard} />;
  }

  const filteredJobs = getFilteredJobs();
  const recentlyAppliedJobs = jobs.filter((job) => job.applied).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-2 mb-4">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {activeFilter === "All" && (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">
                Recently applied
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {recentlyAppliedJobs.map((job) => (
                  <JobCard
                    key={`recent-${job.id}`}
                    job={job}
                    onClick={() => handleJobClick(job)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">
                All jobs
              </h2>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => handleJobClick(job)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
