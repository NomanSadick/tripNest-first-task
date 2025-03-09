import { TourCardData } from "@/app/data/TourCardData"; // Import the data directly
import Image from "next/image"; // If you're using images in Next.js

const TourCard = () => {
  return (
    <div className="w-full bg-white border rounded-xl shadow-md mt-6">
      <div className="p-5">
        <p className="text-[#146B83] text-2xl font-semibold mb-4">
          Exclusive Tours
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          {TourCardData.map((tour, index) => (
            <div
              key={index}
              className="max-w-lg w-full md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative"
            >
              {/* Background Image */}
              <div
                className="h-80 bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${tour.image})` }}
              ></div>

              {/* Discount Badge */}
              <div className="absolute top-3 right-3 bg-white px-12 py-4 rounded-full flex items-center shadow-md">
                <span className="bg-teal-600 text-white text-xs font-bold px-2 py-[10px] rounded-full absolute -left-3 w-16 text-center">
                  {tour.discount}
                </span>
                <span className="ml-2 text-gray-700 text-sm">Discount</span>
              </div>

              {/* Transparent Floating Info Box */}
              <div className="absolute bottom-0 left-0 w-full bg-[#146B83] bg-opacity-75 text-white p-5 border-t-2 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">{tour.destination}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">{tour.duration}</p>
                    <p className="text-xl font-bold mt-2">
                      {tour.currency} {tour.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
