// PaymentMethods.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// Import your SVGs
import {
  visa,
  mastercard,
  stripe,
  applepay,
  googlepay,
  paypal,
} from "../assets/index";

export default function Payment() {
  const paymentSvgs = [visa, mastercard, stripe, applepay, googlepay, paypal];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full  p-6 rounded-lg gap-8">
      {/* Left  */}
      <div className="flex items-center  gap-3">
        <FaCheckCircle className="text-gray-400  w-9 h-9  text-1xl" />
        <p className="text-gray-400 font-medium text-lg">
          Payments are 100% securely handled by <br /> Chargebee
        </p>
      </div>

      {/* Right  */}
      <div className="flex items-center gap-14 flex-wrap ml-12">
        {paymentSvgs.map((svg, index) => (
          <img
            key={index}
            src={svg}
            alt={`payment method ${index}`}
            className="w-16 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
