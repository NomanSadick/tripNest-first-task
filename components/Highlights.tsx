import { HighlightsData } from "@/app/data/HighlightsData";
import Image from "next/image";
import React from "react";

const Highlights = () => {
  return (
    <div className="w-full px-4 md:px-0 lg:w-[80%] py-8">
      <h1 className="text-[#146B83] text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
        Highlights
      </h1>
      <div className="space-y-4">
        {HighlightsData.map((highlight) => (
          <div
            key={highlight.title}
            className="flex items-start gap-3 text-sm md:text-base"
          >
            <Image
              src={highlight.image}
              alt={highlight.title}
              width={16}
              height={16}
              className=""
            />

            <div className="flex flex-col">
              <span className="text-[#146B83] font-semibold text-sm md:text-base">
                {highlight.title}:
              </span>
              <span className="text-[#141414] text-sm md:text-base font-medium">
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
