import { HighlightsData } from "@/app/data/HighlightsData";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
const Highlights = () => {
  return (
    <div className="w-full px-0 lg:w-[80%] py-4">
      <h1 className="text-[#146B83] text-3xl md:text-[32px] font-medium mb-6">
        Highlights
      </h1>
      <div className="space-y-4">
        {HighlightsData.map((highlight) => (
          <div
            key={highlight.title}
            className="flex items-start gap-3 text-sm md:text-base"
          >
            <div>
              <FaStar className="text-yellow-500"/>
            </div>

            <div>
              <span className="text-[#146B83] font-normal text-[16px] flex-start">
                {highlight.title}:
              </span>
              <span className="text-[#141414] text-[16px] font-normal flex-start">
                {highlight.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
