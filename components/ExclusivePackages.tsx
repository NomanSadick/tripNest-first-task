import { ExclusivePackagesData } from "@/app/data/ExclusivePackagesData";
import Image from "next/image";
import React from "react";

const ExclusivePackages = () => {
  return (
    <div className="w-full bg-white border rounded-xl shadow-md mt-6">
      <div className="p-5">
        <p className="text-[#146B83] text-2xl font-semibold mb-4">
          Exclusive Packages
        </p>
        <div className="space-y-4">
          {ExclusivePackagesData.map((info, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={info.image}
                alt={info.title}
                width={56}
                height={56}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col">
                <p className="text-gray-800 text-sm font-semibold">
                  {info.title}
                </p>
                <p className="text-orange-500 font-semibold">
                  BDT {info.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusivePackages;
