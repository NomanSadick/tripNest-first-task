import React from "react";
import InfoTop from "./InfoTop";
import InfoTopRight from "./InfoTopRight";
import About from "./About";
import TravelForm from "./TravelForm";
import Highlights from "./Highlights";
import InclusionExclusion from "./InclusionExclusion";
import ExclusivePackages from "./ExclusivePackages";
import Itinerary from "./Itinerary";

const InfoSection = () => {
  return (
    <div className="container-custom bg-white w-full">
      <div className="w-[100%] mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <InfoTop />
            <div className="block md:hidden">
              <InfoTopRight />
            </div>
            <About />
            <Highlights />
            <InclusionExclusion />
            <Itinerary />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="hidden md:block">
              <InfoTopRight />
            </div>
            <TravelForm />
            <ExclusivePackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
