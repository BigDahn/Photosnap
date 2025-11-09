import Button from "@/app/_ui/Button";
import { useState } from "react";

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
    <main className="flex gap-[1.7em] items-center ">
      {updatedDetails.map((detail, index) => {
        const { option, details, isPicked, price } = detail;
        return (
          <section
            key={index}
            className={`${
              isPicked
                ? " bg-black h-[470px] w-[350px] relative flex flex-col items-center py-[4.6em] gap-[2.4em]"
                : "w-[350px] h-[407px] bg-[#F5F5F5]  flex flex-col items-center py-[3em] gap-[2.4em] "
            }`}
          >
            {isPicked && (
              <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)]  h-[350px] z-100 absolute rotate-90 inset-0 bottom-full m-auto"></div>
            )}

            <div className="max-w-[270px] flex flex-col items-center gap-2">
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
                    ? "font-normal text-[15px] leading-[25px] text-white/50 text-center"
                    : "font-normal text-[15px] leading-[25px] text-black/20 text-center"
                }`}
              >
                {details}
              </p>
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
                  ? "bg-white text-black uppercase font-bold text-[12px] tracking-[2px] h-[40px] w-[270px] cursor-pointer hover:bg-white/95"
                  : "bg-black text-white uppercase font-bold text-[12px] tracking-[2px] h-[40px] w-[270px] cursor-pointer  hover:bg-black/10 hover:text-black"
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
