import { InfoTopData } from "@/app/data/InfoTop";
import Image from "next/image";
import React from "react";

const InfoTop = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[60%]">
        {InfoTopData.map((info, index) => (
          <div key={index} className="flex items-center">
            <div className="w-12 h-12 flex justify-between items-center bg-[#9DDBED] rounded-sm ">
              <Image
                src={info.image}
                alt={info.title}
                width={28}
                height={28}
                className="object-cover mx-auto"
              />
            </div>

            <div className="pl-2">
              <p className="text-gray-600">{info.title}</p>
              <h3
                className={
                  info.highlight ? "text-[#212121] font-bold" : "text-gray-800"
                }
              >
                {info.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-10 border-b-2 w-[80%] border-sky-300">
        <div className="mb-2 flex gap-10">
          <button className="bg-[#FFC69D] px-4 rounded-lg py-1">
            Itinerary
          </button>
          <button className="bg-[#FFC69D] px-4 rounded-lg py-1">
            Package Details
          </button>
          <button className="bg-[#FFC69D] px-4 rounded-lg py-1">Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default InfoTop;
