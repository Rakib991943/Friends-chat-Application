"use client";

import { MeetContext } from "@/context/MeetContext";
import React, { useContext, useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Timeline = () => {
  const context = useContext(MeetContext);
  const meetData = context?.meetData || [];

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredData = meetData.filter((item) => {
    const matchType =
      filter === "all" || item.type.toLowerCase() === filter;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  const getIcon = (type) => {
    if (type === "call") return <FaPhoneAlt className="text-pink-500" />;
    if (type === "video") return <FaVideo className="text-purple-500" />;
    if (type === "text") return <MdMessage className="text-gray-500" />;
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      <div className="flex gap-3 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-base-100 p-4 rounded-xl shadow"
          >
            <div className="text-xl">{getIcon(item.type)}</div>

            <div>
              <h2 className="font-semibold">
                {item.type} with {item.name}
              </h2>
              <p className="text-sm text-gray-400">
                {item.next_due_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;