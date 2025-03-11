"use client"

import type React from "react"
import { useState } from "react"
import dynamic from "next/dynamic"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TourCardData } from "@/app/data/TourCardData"

const Slider = dynamic(() => import("react-slick"), { ssr: false })

const ExclusiveOffers = () => {
  const [activeTab, setActiveTab] = useState<string>("all")

  const filteredData =
    activeTab === "all"
      ? TourCardData
      : TourCardData.filter((item) => {
          if (activeTab === "tour") return item.type === "tour"
          if (activeTab === "visa") return item.type === "visa"
          return true
        })

  const PrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props
    return (
      <div
        className="z-10 bg-red-300 rounded-full p-2 shadow-md sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 max-sm:static max-sm:mx-1 max-sm:mb-4"
        onClick={onClick}
      >
        <FaArrowLeft className="h-5 w-5 text-[#146B83]" />
      </div>
    )
  }
  
  const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props
    return (
      <div
        className="z-10 bg-red-300 rounded-full p-2 shadow-md sm:absolute sm:-right-0 sm:top-1/2 sm:-translate-y-1/2 max-sm:static max-sm:mx-1 max-sm:mb-4"
        onClick={onClick}
      >
        <FaArrowRight className="h-5 w-5 text-[#146B83]" />
      </div>
    )
  }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: "16px" } },
    ],
  }

  return (
    <div className="w-full mt-6 container-custom">
      <div className="flex flex-col">
        <h2 className="text-[#146B83] text-2xl font-semibold text-center">Exclusive Offers</h2>
        <div className="flex justify-center sm:justify-end mb-6">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === "all" ? "bg-orange-100 text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
            >All</button>
            <button
              onClick={() => setActiveTab("tour")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === "tour" ? "bg-orange-100 text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
            >Tour Package</button>
            <button
              onClick={() => setActiveTab("visa")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === "visa" ? "bg-orange-100 text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
            >Visa</button>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          {filteredData.length > 0 && (
            <Slider {...settings}>
              {filteredData.map((tour) => (
                <div key={tour.id} className="px-2">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 relative h-[250px]">
                    <div
                      className="h-full bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${tour.image})`, backgroundSize: "cover" }}
                    ></div>
                    <div className="absolute top-3 right-3 bg-white pl-12 pr-2 py-2 rounded-full flex items-center shadow-md">
                      <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full absolute -left-3 w-14">
                        {tour.discount}
                      </span>
                      <span className="ml-0 text-gray-700 text-sm">Discount</span>
                    </div>
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
          )}
        </div>
      </div>
    </div>
  )
}

export default ExclusiveOffers
