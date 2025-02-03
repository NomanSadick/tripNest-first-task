import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
