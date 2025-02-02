import React from "react";

const InfoTopRight = () => {
  return (
    <div className="text-center w-full bg-sky-400 container bg-[url('/images/Subtract.png')] bg-cover bg-center bg-no-repeat pt-4">
      <h2 className="text-[12px]">Starting Price</h2>
      <p className="text-[#146B83] text-xl font-bold pt-2">BDT 15,500</p>
      <div className="w-full flex justify-center pt-4">
        <button className="bg-[#ff6b00] text-white px-8 py-3 rounded-lg hover:bg-[#e65c00] transition-colors w-full">
          Proceed to Booking
        </button>
      </div>
    </div>
  );
};

export default InfoTopRight;
