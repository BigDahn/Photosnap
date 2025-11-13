"use client";

import { fullFeatures } from "@/app/_utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

function FullFeatures() {
  useGSAP(() => {
    gsap.set(".info", {
      y: -100,
      opacity: 0,
    });

    gsap.to(".info", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power1.inOut",
      stagger: {
        grid: "auto",
        ease: "power1.inOut",
        each: 0.1,
        from: "start",
      },
    });
  }, []);
  return (
    <section className="grid  md:grid-cols-2 lg:grid-cols-3 md:gap-x-[3em] lg:gap-x-[1.3em] gap-y-[6em] items-center justify-center py-[10em] max-w-[1110px] md:px-[2.3em] lg:px-0  m-auto">
      {fullFeatures.map((feature, index) => {
        const { title, content, image } = feature;

        return (
          <div
            key={index}
            className={`flex flex-col ${
              index === 0
                ? "gap-[2.6em] info opacity-0 "
                : index === 1
                ? "gap-[5em] info opacity-0"
                : "gap-[1em] info opacity-0"
            }  h-[236px]    items-center justify-center max-w-[1110px]  info opacity-0 `}
          >
            <Image
              src={image}
              alt={title}
              height={0}
              width={0}
              className={
                index === 0
                  ? "h-[72px] w-[72px]"
                  : index === 1
                  ? "h-[36px] w-[72px]"
                  : "h-[74px] w-[71px]  relative bottom-[13%]"
              }
            />

            <div className="flex flex-col items-center justify-end  gap-[1em]  ">
              <h2 className="font-bold text-[18px] leading-[25px]">{title}</h2>
              <p className=" text-center font-normal text-[15px] leading-[25px] text-black/50 md:max-w-[340px] ">
                {content}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default FullFeatures;
