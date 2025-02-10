"use client";

import { ItineraryDayData } from "@/app/data/ItineraryDayData";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"; 

export default function Itinerary() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const toggleAll = () => {
    setIsAllExpanded(!isAllExpanded);
    setExpandedDay(null);
  };

  return (
    <div className="w-full flex items-center mt-8 md:mt-10">
      <div className="w-full lg:w-[80%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-[32px] font-medium text-[#146B83]">
            Itinerary
          </h1>
          <button
            onClick={toggleAll}
            className="text-orange-500 hover:text-orange-600 text-sm font-medium"
          >
            {isAllExpanded ? "Collapse all" : "Expand all"}
          </button>
        </div>

        <div className="space-y-4">
          {ItineraryDayData.map((day, index) => (
            <div
              key={day.day}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleDay(index)}
                className="w-full text-left flex items-center justify-between bg-sky-100 pr-2 md:pr-4"
              >
                <div className="flex items-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 min-w-[100px] bg-[#146B83] p-2 text-sm md:text-base">
                    <FaLocationDot className="text-white" />
                    <span className="font-medium text-white">
                      Day {day.day}
                    </span>
                  </div>
                  <h2 className="font-medium text-gray-900 text-sm md:text-base">{day.title}</h2>
                </div>
                {expandedDay === index || isAllExpanded ? (
                  <FaChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-orange-500" />
                )}
              </button>

              <div
                className={`px-2 pb-4 ${
                  expandedDay === index || isAllExpanded ? "block" : "hidden"
                }`}
              >
                <div className="pl-[1%] pr-4 mt-4">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{day.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
