"use client";

import Button from "@/app/_ui/Button";
import { useState, useRef } from "react";

function Cards({ details, isYearly }) {
  const [updatedDetails, setUpdatedDetails] = useState(details);

  function changeDetails(option) {
    const newDetail = details.map((detail) => {
      if (detail.option === option) {
        return {
          ...detail,
          isPicked: true,
        };
      }
      return {
        ...detail,
        isPicked: false,
      };
    });

    setUpdatedDetails(newDetail);
  }
  return (
    <main className="flex flex-col lg:flex-row gap-[1.7em] w-full md:px-[2em] lg:items-center  ">
      {updatedDetails.map((detail, index) => {
        const { option, details, isPicked, price } = detail;
        return (
          <section
            key={index}
            className={`${
              isPicked
                ? " bg-black w-[318px] h-[407px] md:h-[270px] lg:h-[470px] md:w-full  lg:w-[350px] relative flex flex-col md:flex-row px-[2em] items-center md:items-start justify-between lg:flex-col lg:items-center py-[2em] lg:py-[4.6em] gap-[2.4em] transition ease-linear duration-300 "
                : "lg:w-[350px] w-[318px] h-[407px] md:w-full md:h-[270px] lg:h-[407px] bg-[#F5F5F5]  flex flex-col md:flex-row lg:flex-col items-center md:items-start justify-between px-[2em] lg:items-center py-[2em] lg:py-[3em] gap-[2.4em]  duration-300 transition ease-linear outline-none"
            }`}
          >
            {isPicked && (
              <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] h-[318.3px] md:h-full lg:h-[336px] z-100  md:top-0  md:left-0 absolute  lg:rotate-90 lg:inset-0 lg:bottom-full lg:m-auto rotate-90 inset-0 bottom-full m-auto"></div>
            )}

            <div className="max-w-[270px] flex flex-col items-center gap-[1.3em] lg:gap-2">
              <h1
                className={`${
                  isPicked
                    ? "font-bold text-[24px] leading-[25px] capitalize text-white"
                    : "font-bold text-[24px] leading-[25px] capitalize"
                }`}
              >
                {option}
              </h1>
              <p
                className={`${
                  isPicked
                    ? "font-normal text-[15px] leading-[25px] text-white/50 text-center md:text-left lg:text-center "
                    : "font-normal text-[15px] leading-[25px] text-black/20  text-center md:text-left  lg:text-center"
                }`}
              >
                {details}
              </p>
              <Button
                style={`${
                  isPicked
                    ? "bg-white text-black uppercase  outline-none border-none font-bold text-[12px] tracking-[2px] h-[40px] w-[270px] cursor-pointer hover:bg-white/85 transition ease-linear delay-100  lg:hidden hidden md:flex"
                    : "bg-black text-white uppercase outline-none border-none font-bold text-[12px] tracking-[2px] h-[40px] w-[270px] cursor-pointer  hover:bg-black/10 hover:text-black transition ease-linear delay-100 lg:hidden hidden md:flex"
                }`}
                click={() => changeDetails(option)}
              >
                pick plan
              </Button>
            </div>

            <div className="flex flex-col gap-1 justify-center">
              <h3
                className={`${
                  isPicked
                    ? "font-bold text-[40px] leading-12 tracking-[4.17px] text-white"
                    : "font-bold text-[40px] leading-12 tracking-[4.17px]"
                }`}
              >
                {" "}
                ${isYearly ? price * 10 : price}.00
              </h3>
              <p
                className={`${
                  isPicked
                    ? "font-normal text-[15px] leading-[25px] text-white/50 text-center"
                    : "font-normal text-[15px] leading-[25px] text-black/20 text-center"
                }`}
              >
                {isYearly ? " per year" : "per month"}
              </p>
            </div>
            <Button
              style={`${
                isPicked
                  ? "bg-white text-black uppercase font-bold text-[12px] tracking-[2px] h-[40px] w-[270px] cursor-pointer hover:bg-white/85 transition ease-linear delay-100 md:hidden lg:block"
                  : "bg-black text-white uppercase font-bold text-[12px] tracking-[2px] h-[40px] w-[270px] cursor-pointer  hover:bg-black/10 hover:text-black transition ease-linear delay-100 md:hidden lg:block"
              }`}
              click={() => changeDetails(option)}
            >
              pick plan
            </Button>
          </section>
        );
      })}
    </main>
  );
}

export default Cards;
