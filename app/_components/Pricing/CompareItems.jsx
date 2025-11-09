import Image from "next/image";
import React from "react";

function CompareItems({ feature, basic, pro, business }) {
  return (
    <main className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase ">
      <h3 className="text-[12px] font-bold tracking-[2px] justify-self-start uppercase">
        {feature}
      </h3>
      <div>
        <h3 className="text-[12px] font-bold tracking-[2px] hidden">basic</h3>
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
      <div>
        <h3 className="text-[12px] font-bold tracking-[2px] hidden">pro</h3>
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
      <div>
        <h3 className="text-[12px] font-bold tracking-[2px] hidden">
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
    </main>
  );
}

export default CompareItems;
