"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TourCardData } from "@/app/data/TourCardData";

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ExclusiveOffers = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sliderRef = useRef<any>(null); // Create a ref for the slider

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter data based on active tab
  const filteredData =
    activeTab === "all"
      ? TourCardData
      : TourCardData.filter((item) => {
          if (activeTab === "tour") return item.type === "tour";
          if (activeTab === "visa") return item.type === "visa";

          return true;
        });

  // Custom arrow components for the slider
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="z-10 bg-[#EC6809] rounded-full p-2 shadow-md sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 max-sm:static max-sm:mx-1 max-sm:mb-4 sm:mb-4"
        onClick={onClick}
      >
        <ChevronLeft className="h-5 w-5 text-[#fff]" />
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="z-10 bg-[#EC6809] rounded-full p-2 shadow-md sm:absolute sm:-right-0 sm:top-1/2 sm:-translate-y-1/2 max-sm:static max-sm:mx-1 max-sm:mb-4 sm:mb-4"
        onClick={onClick}
      >
        <ChevronRight className="h-5 w-5 text-[#fff]" />
      </button>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
    prevArrow: !isMobile && <PrevArrow />,
    nextArrow: !isMobile && <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "16px",
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-6 container-custom">
      <div className="flex flex-col">
        {/* Title */}
        <h2 className="text-[#146B83] text-2xl font-semibold text-center">Exclusive Offers</h2>

        {/* Tabs */}
        <div className="flex justify-center sm:justify-end mb-6">
          <div className="inline-flex  bg-[#fff] rounded-full shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "all" ? "bg-[#FFE9DA] text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("tour")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "tour" ? "bg-[#FFE9DA] text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Tour Package
            </button>
            <button
              onClick={() => setActiveTab("visa")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "visa" ? "bg-[#FFE9DA] text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Visa
            </button>
          </div>
        </div>

        {/* Tour Cards Slider */}
        <div className="w-full overflow-hidden">
          {filteredData.length > 0 && (
            <Slider ref={sliderRef} {...settings}>
              {filteredData.map((tour) => (
                <div key={tour.id} className="px-2">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 relative h-[250px]">
                    {/* Increased height */}
                    {/* Background Image */}
                    <div
                      className="h-full bg-cover bg-center bg-no-repeat relative"
                      style={{
                        backgroundImage: `url(${tour.image})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    {/* Discount Badge - Display only if tour.discount exists */}
                    {tour.discount && (
                      <div className="absolute top-3 right-3 bg-white pl-12 pr-2 py-2 rounded-full flex items-center shadow-md">
                        <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full absolute -left-3 w-14">
                          {tour.discount}
                        </span>
                        <span className="ml-0 text-gray-700 text-sm">Discount</span>
                      </div>
                    )}
                    {/* Type Badge */}
                    <div className="absolute top-3 left-3 bg-[#146B83] text-white px-2 md:px-4 py-3 rounded-full text-xs font-medium ">
                      {tour.type === "tour" ? "Tour Packages" : tour.type === "visa" ? "E-Visa" : ""}
                    </div>
                    {/* Transparent Floating Info Box */}
                    <div className="absolute bottom-0 left-0 w-full bg-[#146B83] bg-opacity-75 text-white p-4 border-t-2 rounded-b-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xl font-bold">{tour.destination}</span>
                          <p className="text-sm text-gray-300">{tour.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">
                            {tour.currency} {tour.price.toLocaleString()}
                          </p>
                          {tour.type === "tour" && (
                            <p className="text-xs text-gray-300 line-through">
                              {tour.currency} {(tour.price * 1.15).toFixed(0)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}

          {/* Arrows for mobile */}
          {isMobile && (
            <div className="flex justify-center mt-4 sm:hidden">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
