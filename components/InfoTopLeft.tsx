
import { HighlightsData } from "@/app/data/HighlightsData";
import { ExclusionData } from "@/app/data/ExclusionData";
import { ImportantNoteData } from "@/app/data/ImportantNotesData";
import { InclusionData } from "@/app/data/Inclusion";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const InfoTopLeft = () => {
  return (
    <div>
      {/* Info Top Start*/}
      
      {/* Info Top End*/}

      {/* About Start  */}
      <div className="mt-6 md:mt-8 w-full lg:w-[80%] px-0 md:px-0">
        <h1 className="text-2xl md:text-[32px] font-medium text-[#146B83] mb-4">
          About this Package
        </h1>
        <p className="text-sm md:text-base text-justify font-normal text-[#141414] ">
          Discover the serene beauty of Phuket with our package. This
          thoughtfully curated journey offers a perfect blend of relaxation and
          adventure, ensuring you experience the best of what Phuket has to
          offer. From the moment you arrive, enjoy hassle-free transfers,
          comfortable accommodations, and an unforgettable excursion to the
          stunning Phi Phi Islands. With TripNest, every moment is designed to
          create lasting memories, making your getaway truly special. Whether
          you're lounging by the beach or exploring the vibrant local culture,
          your trip will be nothing short of spectacular.
        </p>
      </div>
      {/* About End  */}

      {/* Highlights Start  */}
      <div className="w-full px-0 lg:w-[80%] my-6">
        <h1 className="text-[#146B83] text-2xl md:text-[32px] font-medium mb-6">
          Highlights
        </h1>
        <div className="space-y-4">
          {HighlightsData.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-start gap-3 text-sm md:text-base"
            >
              <div>
                <FaStar className="text-yellow-500" />
              </div>

              <div>
                <span className="text-[#146B83] font-normal text-sm md:text-base flex-start">
                  {highlight.title}:
                </span>
                <span className="text-[#141414] text-sm md:text-base font-normal flex-start">
                  {highlight.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Highlights End  */}
      {/* InclusionExclusion Start  */}
      <div className="w-full flex items-center pl-4 pr-0 md:px-0">
        <div className="w-[80%] space-y-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <h1 className="text-2xl md:text-[32px] font-medium text-[#146B83]">
                Inclusion
              </h1>
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
                      <p className="text-gray-700 text-sm md:text-base">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t md:border-l border-gray-300/60 my-0 md:mx-4 w-full md:w-auto"></div>
            <div>
              <h1 className="text-2xl md:text-[32px] font-medium text-[#146B83]">
                Exclusion
              </h1>
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
                      <p className="text-gray-700 text-sm md:text-base">{item.title}</p>
                    </div>
                  ))}
                </div>
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

      {/* InclusionExclusion End  */}
    </div>
  );
};

export default InfoTopLeft;
