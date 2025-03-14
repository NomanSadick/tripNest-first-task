import React from "react";
import Button from "./reusableComponents/Button";

const Book = () => {
  return (
    <main className="md:container-custom mx-auto my-20 md:my-20">
      <div className="w-full lg:w-[80%] mx-auto bg-gradient-to-r from-sky-950 via-sky-800 to-sky-700 text-white rounded-md">
        <div className="px-4 sm:px-6 md:px-2 lg:px-8">
          <div className="flex flex-col md:flex-row justify-evenly items-center py-12 space-y-4 md:space-y-0">
            <div className="text-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Thailand</h1>
              <p className="text-xl text-blue-100">NestAway In Phuket</p>
              <Button>Book Now</Button>
            </div>

            <div className="border-t md:border-l border-gray-400/60 my-2 md:mx-4 w-[30%] md:h-32 md:w-auto"></div>

            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Need Help?</h2>
              <p className="text-xl text-blue-100">Get Free Consultancy</p>
              <Button> 09666-771109</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Book;
