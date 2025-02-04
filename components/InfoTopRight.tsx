import React from "react";
import Button from "./reusableComponents/Button";

const InfoTopRight = () => {
  return (
    <div className="text-center w-full bg-[#F0F7FA] container pt-4 relative overflow-hidden">
      <div className="absolute w-12 h-12 border-8 rounded-full -top-5 -left-5 border-[#ffffff]"></div>
      <h2 className="text-[12px]">Starting Price</h2>
      <p className="text-[#146B83] text-xl font-bold pt-2">BDT 15,500</p>
      <Button>Proceed to Booking</Button>
    </div>
  );
};

export default InfoTopRight;
