import { ExclusionData } from "@/app/data/ExclusionData";
import { ImportantNoteData } from "@/app/data/ImportantNotesData";
import { InclusionData } from "@/app/data/Inclusion";
import Image from "next/image";
import React from "react";

const InclusionExclusion = () => {
  return (
    <div className="w-full flex items-center">
      <div className=" w-[80%] space-y-8">
        <h1 className="text-4xl md:text-4xl font-medium text-[#146B83]">
          Inclusion & Exclusion
        </h1>

        <div className=" flex">
          <div className="" />
          <div>
            <div className="space-y-8">
              {InclusionData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-[1px] border-[#146B83] mx-4"></div>

          <div className=" ml-4">
            <div className="space-y-8">
              {ExclusionData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/important.png"
              alt="important"
              width={16}
              height={16}
            />
            <h2 className="font-semibold text-amber-700">Important Note</h2>
          </div>
          <ul className="list-decimal pl-5 space-y-2">
            {ImportantNoteData.map((note, index) => (
              <li key={index} className="text-gray-700">
                {note.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InclusionExclusion;
