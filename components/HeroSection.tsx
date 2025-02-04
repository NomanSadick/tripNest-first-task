import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="container-custom">
      <section className="pt-16">
        <div className=" py-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-[#146B83] mb-4 ">
              Thailand - NestAway In Phuket
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/images/left-img.png"
                alt="left"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/right-1.png"
                  alt="Right one"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/right-2.png"
                    alt="Right two"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/right-3.png"
                    alt="Right"
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
