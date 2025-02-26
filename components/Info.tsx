import React from "react";
import { InfoTopData } from "@/app/data/InfoTop";
import Image from "next/image";
import Button from "./reusableComponents/Button";

const InfoHeader = () => {
  return (
    <div className="container-custom w-full mt-8">
      <div className="flex flex-col">
        {/* Top info section - stacks vertically on mobile, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Left side content */}
          <div className="w-full lg:w-[80%]">
            <div className="flex flex-row justify-between md:justify-start gap-2 md:gap-20 flex-wrap order-first lg:order-first">
              {InfoTopData.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 flex justify-center items-center bg-sky-100/50 rounded-sm">
                    <Image
                      src={info.image}
                      alt={info.title}
                      width={16}
                      height={16}
                      className="object-cover"
                    />
                  </div>
                  <div className="pl-2">
                    <span className="text-gray-600 text-[12px]">
                      {info.title}
                    </span>
                    <h3
                      className={
                        info.highlight
                          ? "text-[#212121] font-semibold text-[16px]"
                          : "text-gray-800 text-[16px]"
                      }
                    >
                      {info.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price box - Shows at top on mobile, right side on desktop */}
          <div className="w-full lg:w-[19%] mb-4 lg:mb-0 order-last mt-4 md:mt-0">
            <div className="bg-[#F0F7FA] rounded-md relative overflow-hidden">
              <div className="absolute w-12 h-12 border-8 rounded-full -top-5 -left-5 border-[#ffffff]"></div>
              <div className="text-center">
                <h2 className="text-[12px] py-2">Starting Price</h2>
                <p className="text-[#146B83] text-xl font-bold pt-2">
                  BDT 15,500
                </p>
                <Button className="w-full bg-[#F47521] text-white font-medium py-3 px-4 rounded-md mt-2 hover:bg-[#e26719]">
                  Proceed to Booking
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab buttons - Shows below price box on mobile */}
        <div className="flex gap-6 md:gap-8 mb-4 w-full mt-0 md:-mt-14">
          <button className="bg-[#FFC69D] px-2 md:px-4 rounded-lg py-2 text-[14px] whitespace-nowrap">
            Package Details
          </button>
          <button className="bg-[#FFF3EB] px-2 md:px-4 rounded-lg py-2 text-[14px] whitespace-nowrap">
            Itinerary
          </button>
          <button className="bg-[#FFF3EB] px-2 md:px-4 rounded-lg py-2 text-[14px] whitespace-nowrap">
            Reviews
          </button>
        </div>
        <div className="border-b border-sky-300/60 mb-6 w-full lg:w-[64%]"></div>
      </div>
    </div>
  );
};

export default InfoHeader;
