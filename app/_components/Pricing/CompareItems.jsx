import Image from "next/image";
import React from "react";

function CompareItems({ feature, basic, pro, business, className }) {
  return (
    <main className={className}>
      <h3 className="text-[12px] font-bold tracking-[2px] justify-self-start uppercase ">
        {feature}
      </h3>
      <div className="grid  grid-cols-[5.5rem_5.5rem_5.5rem] md:grid md:grid-cols-[4.5rem_4.5rem_4.5rem] gap-x-[2em] md:justify-items-center   ">
        <div className="space-y-2">
          <h3 className="text-[12px] font-bold tracking-[2px] block md:hidden">
            basic
          </h3>
          <Image
            alt="check-icon"
            src="/assets/pricing/desktop/check.svg"
            width={0}
            height={0}
            className={`${
              basic === true ? "h-auto w-auto opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-[12px] font-bold tracking-[2px]  block md:hidden">
            pro
          </h3>
          <Image
            alt="check-icon"
            src="/assets/pricing/desktop/check.svg"
            width={0}
            height={0}
            className={`${
              pro === true ? "h-auto w-auto opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-[12px] font-bold tracking-[2px]  block md:hidden">
            business
          </h3>
          <Image
            alt="check-icon"
            src="/assets/pricing/desktop/check.svg"
            width={0}
            height={0}
            className={`${
              business === true ? "h-auto w-auto opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </main>
  );
}

export default CompareItems;
