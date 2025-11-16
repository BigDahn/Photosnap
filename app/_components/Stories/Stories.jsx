"use client";

import { wholeStory } from "@/app/_utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function Stories() {
  const [index, setIndex] = useState("");

  useGSAP(() => {
    gsap.set(".items", { opacity: 0 });
    ScrollTrigger.batch(".items", {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.19,
          duration: 1.3,
        });
      },
      onLeave: (batch) => {
        gsap.set(batch, {
          opacity: 0,
          overwrite: true,
        });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.19,
          duration: 1.3,
        });
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, {
          opacity: 0,
          overwrite: true,
        });
      },

      once: false, // Only animate once
    });
    const items = gsap.utils.toArray(".items");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -26,
          duration: 0.4,
          ease: "power1.inOut",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,

          duration: 0.4,
          ease: "power1.inOut",
        });
      });
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4">
      {wholeStory.map((story, i) => {
        const { title, author, image, date } = story;
        const { desktop, mobile } = image;
        return (
          <div
            key={i}
            className="relative h-[375px] md:h-[500px]  w-full items  "
            onMouseEnter={() => setIndex(i)}
            onMouseLeave={() => setIndex("")}
          >
            <Image
              src={desktop}
              alt={title}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover brightness-40 hidden md:flex"
            />
            <Image
              src={mobile}
              alt={title}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover brightness-70 md:hidden"
            />
            <div
              className={`${
                index === i
                  ? "w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)]  rotate-90  left-[49.7%] top-[40%] md:top-[61%] h-[120%]  md:h-[77.6%]  absolute  "
                  : "hidden "
              }`}
            ></div>
            <div className="absolute top-[63%] md:top-[73%] m-auto flex flex-col gap-[1em] justify-start px-[1.5em] lg:px-[3em] w-full">
              <div>
                <h3 className="text-white/80 font-medium text-[13px]">
                  {date}
                </h3>
                <h1 className="text-white font-bold text-[18px] leading-[25px]">
                  {title}
                </h1>
                <p className="text-white/80 font-medium text-[13px]">
                  by {author}
                </p>
              </div>
              <div className="border-b-2 border-white/40"></div>
              <div className="flex justify-between items-center">
                <Link
                  href="/stories"
                  className="text-white font-bold text-[12px] tracking-[2px] uppercase"
                >
                  read story
                </Link>
                <Image
                  src="/assets/shared/desktop/arrow.svg"
                  alt="arrow"
                  height={12}
                  width={42}
                  style={{ filter: "invert(100%)" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
