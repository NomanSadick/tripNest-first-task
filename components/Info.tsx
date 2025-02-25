import React from "react";
import { InfoTopData } from "@/app/data/InfoTop";
import Image from "next/image";
import Button from "./reusableComponents/Button";

const InfoHeader = ({ price = "BDT 15,500" }) => {
  return (
    <div className="container mx-auto mt-8">
      {/* Desktop Layout */}
      <div className="flex justify-between items-start">
        {/* Left side info with icons */}
        <div className="w-[75%]">
          <div className="flex gap-10">
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

          {/* Tabs - Desktop */}
        </div>

        {/* Right side price box */}
        <div className="hidden md:block w-[20%]">
          <div className="bg-[#F0F7FA] py-4 rounded relative overflow-hidden">
            <div className="absolute w-12 h-12 border-8 rounded-full -top-5 -left-5 border-[#ffffff]"></div>
            <div className="text-center">
              <h2 className="text-[12px]">Starting Price</h2>
              <p className="text-[#146B83] text-xl font-bold py-2">{price}</p>
              <Button>Proceed to Booking</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className=" px-4">
        {/* Left side info with icons - Mobile */}

        {/* Tabs and price on mobile */}
        <div className="mt-6">
          {/* Tabs - Mobile */}
          <div className="flex gap-4 mb-4">
            <button className="bg-[#FFC69D] px-3 rounded-lg py-1 text-[12px]">
              Package Details
            </button>
            <button className="bg-[#FFC69D] px-3 rounded-lg py-1 text-[12px]">
              Itinerary
            </button>
            <button className="bg-[#FFC69D] px-3 rounded-lg py-1 text-[12px]">
              Reviews
            </button>
          </div>

          {/* Border - Mobile */}
          <div className="border-b border-sky-300/60 mb-6"></div>

          {/* Price box - Mobile */}
          <div className="bg-[#F0F7FA] px-4 py-3 rounded relative overflow-hidden md:hidden">
            <div className="absolute w-12 h-12 border-8 rounded-full -top-5 -left-5 border-[#ffffff]"></div>
            <div className="text-center">
              <span className="text-[12px] text-gray-600">Starting Price</span>
              <p className="text-[#146B83] text-xl font-bold">{price}</p>
              <Button fullWidth={true}>Proceed to Booking</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
