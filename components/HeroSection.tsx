import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="container-custom">
      <section className="pt-6">
        <div>
          <h1 className="text-2xl md:text-5xl font-medium text-[#146B83] mb-2">
            Thailand - NestAway In Phuket
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Image */}
            <div className="relative w-full h-[175px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/left-img.png"
                alt="left"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Images */}
            <div className="grid grid-rows-2 gap-4 hidden md:grid">
              <div className="relative w-full h-[195px] rounded-lg overflow-hidden">
                <Image
                  src="/images/right-1.png"
                  alt="Right one"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-[195px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/right-2.png"
                    alt="Right two"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-[195px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/right-3.png"
                    alt="Right three"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
