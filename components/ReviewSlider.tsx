"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ReviewsData } from "@/app/data/ReviewData";



// const Slider = dynamic(() => import("react-slick"), { ssr: false }) as unknown as React.ComponentType;
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-12 px-2 md:px-4">
      <div className="w-[100%] md:w-[80%] mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-6">
          Customer <span className="text-[#146B83]">Review</span>
        </h2>

        <Slider {...settings}>
          {ReviewsData.map((review) => (
            <div key={review.id} className="p-2 ">
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <FaQuoteLeft className="text-gray-100 text-4xl" />
                <div className="flex space-x-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-gray-700">{review.review}</p>

                <div className="flex items-center mt-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-md border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-sm">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
