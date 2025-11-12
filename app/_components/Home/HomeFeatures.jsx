"use client";

import { features } from "@/app/_utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function HomeFeatures() {
  const ScrollRef = useRef();

  useGSAP(
    () => {
      const feature = gsap.timeline({
        scrollTrigger: {
          trigger: ScrollRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart non restart none",
        },
      });

      feature.from("#feature", {
        x: 100,
        opacity: 0,
        stagger: 0.06,
        duration: 1.1,
      });
    },
    { scope: ScrollRef }
  );

  return (
    <section
      ref={ScrollRef}
      className="flex gap-x-[0.7em]  items-center justify-center py-[6em] max-w-[1110px]  m-auto"
    >
      {features.map((feature, index) => {
        const { title, content, image } = feature;

        return (
          <div
            id="feature"
            key={index}
            className={`flex flex-col ${
              index === 0
                ? "gap-[2.6em]"
                : index === 1
                ? "gap-[5em]"
                : "gap-[1em]"
            }  h-[236px]    items-center justify-center max-w-[1110px]`}
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
                  : "h-[72px] w-[71px]  relative bottom-[13%]"
              }
            />

            <div className="flex flex-col items-center justify-end  gap-[1em]  ">
              <h2 className="font-bold text-[18px] leading-[25px]">{title}</h2>
              <p className=" text-center font-normal text-[15px] leading-[25px] text-black/50">
                {content}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HomeFeatures;
