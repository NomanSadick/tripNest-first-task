import { ExclusionData } from "@/app/data/ExclusionData";
import { ImportantNoteData } from "@/app/data/ImportantNotesData";
import { InclusionData } from "@/app/data/Inclusion";
import Image from "next/image";
import React from "react";

const InclusionExclusion = () => {
  return (
    <div className="w-full flex items-center px-4 md:px-0">
      <div className=" w-[80%] space-y-8">
        <h1 className="text-3xl md:text-[32px] font-medium text-[#146B83]">
          Inclusion & Exclusion
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="space-y-6">
              {InclusionData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-gray-700 text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-300/60"></div>

          <div className="flex-1">
            <div className="space-y-6">
              {ExclusionData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-gray-700 text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4 bg-red-50 p-3 w-fit rounded-md">
            <Image
              src="/images/important.png"
              alt="important"
              width={24}
              height={24}
            />
            <h2 className="font-semibold text-amber-700 text-sm">
              Important Note
            </h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {ImportantNoteData.map((note, index) => (
              <li key={index}>{note.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InclusionExclusion;
