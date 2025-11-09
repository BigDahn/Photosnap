"use client";

import ToggleBtn from "@/app/_ui/ToggleBtn";
import React, { useState } from "react";
import Cards from "./Cards";

const details = [
  {
    option: "basic",
    details:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    isPicked: false,
    price: 19.0,
  },
  {
    option: "pro",
    details:
      "More advanced features available. Recommended for photography veterans and professionals.",
    isPicked: true,
    price: 39.0,
  },
  {
    option: "business",
    details:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    isPicked: false,
    price: 99.0,
  },
];

function Subscription() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <main className="m-auto flex flex-col gap-[2em] items-center justify-center py-[8em]  max-w-[1110px] ">
      <div className="flex gap-[2em] items-center">
        <h3
          className={
            isYearly
              ? "font-bold text-[18px] leading-[25px] text-black/10"
              : "font-bold text-[18px] leading-[25px] text-black"
          }
        >
          Monthly
        </h3>
        <ToggleBtn isYearly={isYearly} setIsYearly={setIsYearly} />
        <h3
          className={
            isYearly
              ? "font-bold text-[18px] leading-[25px] text-black"
              : "font-bold text-[18px] leading-[25px] text-black/10"
          }
        >
          Yearly
        </h3>
      </div>
      <Cards details={details} isYearly={isYearly} />
    </main>
  );
}

export default Subscription;
