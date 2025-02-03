import React from "react";
import Button from "./reusableComponents/Button";

const InfoTopRight = () => {
  return (
    <div className="text-center w-full bg-sky-400 container bg-[url('/images/Subtract.png')] bg-cover bg-center bg-no-repeat pt-4">
      <h2 className="text-[12px]">Starting Price</h2>
      <p className="text-[#146B83] text-xl font-bold pt-2">BDT 15,500</p>
      <Button>Proceed to Booking</Button>
    </div>
  );
};

export default InfoTopRight;
