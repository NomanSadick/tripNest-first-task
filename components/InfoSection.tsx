import React from "react";
import InfoTopRight from "./InfoTopRight";
import TravelForm from "./TravelForm";
import ExclusivePackages from "./ExclusivePackages";
import Itinerary from "./Itinerary";
import InfoTopLeft from "@/components/InfoTopLeft";

const InfoSection = () => {
  return (
    <div className="container-custom bg-white w-full">
      <div className="w-[100%] mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <div className="block md:hidden">
              {/* <InfoTopRight /> */}
            </div>
            <InfoTopLeft />
            <Itinerary />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="hidden md:block">
              {/* <InfoTopRight /> */}
            </div>
            <div className="hidden md:block">
              <TravelForm></TravelForm>
            </div>
            <div className="hidden md:block">
              <ExclusivePackages></ExclusivePackages>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
