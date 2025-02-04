import { useState } from "react";
import {  FaChevronDown } from "react-icons/fa";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-16 h-8 flex justify-between items-center rounded-full p-1 cursor-pointer border-2 border-gray-500 ${
        isOn ? "bg-orange-500" : "bg-white"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-6 h-6 bg-orange-500 rounded-full shadow-md transform duration-300 flex items-center justify-center ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      >
        <span className="text-white font-bold">S</span>
        
      </div>
      <FaChevronDown className="w-5 h-5 text-gray-500" />
    </div>
  );
};

export default ToggleSwitch;
