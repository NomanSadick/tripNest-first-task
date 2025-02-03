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
      <div className="w-[100%]">
        <div className="grid grid-cols-5">
          <div className="col-span-4">
            <InfoTop />
            <About />
            <Highlights />
            <InclusionExclusion />
            <Itinerary />
          </div>

          <div className="col-span-1">
            <InfoTopRight />
            <TravelForm />
            <ExclusivePackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
