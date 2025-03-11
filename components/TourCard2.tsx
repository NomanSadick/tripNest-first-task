"use client"
import { useState } from "react"
import dynamic from "next/dynamic"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { TourCardData } from "@/app/data/TourCardData"

// Define a type for the slider instance
interface SliderInstance {
  slickPrev: () => void
  slickNext: () => void
  slickGoTo: (slideNumber: number) => void
}

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false })

const ExclusiveOffers = () => {
  const [activeTab, setActiveTab] = useState<string>("all")
  // Use the specific type instead of any
  const [slider, setSlider] = useState<SliderInstance | null>(null)

  const filteredData =
    activeTab === "all"
      ? TourCardData
      : TourCardData.filter((item) => {
          if (activeTab === "tour") return item.type === "tour"
          if (activeTab === "visa") return item.type === "visa"
          return true
        })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
    arrows: false,
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
  }

  const goToPrev = () => {
    if (slider) {
      slider.slickPrev()
    }
  }

  const goToNext = () => {
    if (slider) {
      slider.slickNext()
    }
  }

  return (
    <div className="w-full mt-6 container-custom">
      <div className="flex flex-col">
        {/* Title */}
        <h2 className="text-center mb-4">
          <span className="text-[#146B83] text-2xl md:text-5xl font-semibold">Exclusive</span>{" "}
          <span className="text-black text-2xl md:text-5xl font-semibold">Offers</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center sm:justify-end mb-6">
          <div className="inline-flex bg-[#fff] rounded-full shadow-sm border border-gray-200">
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

        {/* Tour Cards Slider with Responsive Arrows */}
        <div className="w-full relative">
          {filteredData.length > 0 && (
            <>
              {/* Desktop Arrows - Hidden on mobile, positioned half in/half out */}
              <div className="hidden md:block">
                <div
                  className="absolute left-0 top-1/2 z-20 bg-white rounded-full p-2 shadow-md cursor-pointer"
                  onClick={goToPrev}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateX(-50%) translateY(-50%)",
                  }}
                >
                  <FaArrowLeft className="h-5 w-5 text-[#146B83]" />
                </div>
                <div
                  className="absolute right-0 top-1/2 z-20 bg-white rounded-full p-2 shadow-md cursor-pointer"
                  onClick={goToNext}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateX(50%) translateY(-50%)",
                  }}
                >
                  <FaArrowRight className="h-5 w-5 text-[#146B83]" />
                </div>
              </div>

              {/* Add a wrapper with overflow-hidden for the slider only */}
              <div className="overflow-hidden">
              <Slider ref={(c) => setSlider(c)} {...settings}>
                  {filteredData.map((tour) => (
                    <div key={tour.id} className="px-2">
                      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 relative h-[250px]">
                        <div
                          className="h-full bg-cover bg-center bg-no-repeat relative"
                          style={{
                            backgroundImage: `url(${tour.image})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                        {tour.discount && (
                          <div className="absolute top-3 right-3 bg-white pl-12 pr-2 py-2.5 rounded-full flex items-center shadow-md">
                            <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full absolute -left-3 w-14">
                              {tour.discount}
                            </span>
                            <span className="ml-0 text-gray-700 text-sm">Discount</span>
                          </div>
                        )}
                        <div className="absolute top-3 left-3 bg-[#146B83] text-white px-2 md:px-4 py-3 rounded-full text-xs font-medium">
                          {tour.type === "tour" ? "Tour Packages" : tour.type === "visa" ? "E-Visa" : ""}
                        </div>
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
              </div>

              {/* Mobile Arrows - Hidden on desktop */}
              <div className="flex md:hidden justify-center items-center mt-6 space-x-4">
                <div
                  className="bg-white rounded-full p-2 shadow-md cursor-pointer"
                  onClick={goToPrev}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaArrowLeft className="h-5 w-5 text-[#146B83]" />
                </div>
                <div
                  className="bg-white rounded-full p-2 shadow-md cursor-pointer"
                  onClick={goToNext}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaArrowRight className="h-5 w-5 text-[#146B83]" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExclusiveOffers

