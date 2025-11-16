"use client";

import { stories } from "@/app/_utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function HomeStories() {
  const [index, setIndex] = useState("");

  useGSAP(() => {
    const storyLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#stories",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart non restart none",
      },
    });

    storyLine.to(".img", {
      opacity: 1,
      duration: 1,
      stagger: 0.04,
      ease: "power1.inOut",
    });
  });

  return (
    <main
      id="stories"
      className="lg:flex md:grid-cols-2 grid py-[2em] md:py-0 "
    >
      {stories.map((story, i) => {
        const { title, author, image } = story;
        const { desktop, mobile } = image;
        return (
          <button
            key={i}
            className="relative opacity-0 h-[375px] md:h-[500px] w-full img hover:-translate-y-8 transition-all  duration-150 overflow-hidden "
            onMouseEnter={() => setIndex(i)}
            onMouseLeave={() => setIndex("")}
          >
            <Image
              src={desktop}
              alt={title}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover brightness-70 hidden md:flex"
            />
            <Image
              src={mobile}
              alt={title}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover brightness-70  md:hidden"
            />

            <div
              className={`${
                index === i
                  ? "w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)]  rotate-90  left-[49.7%] top-[40%] md:top-[49.4%] lg:top-[61%]  h-[120%] md:h-full overflow-hidden lg:h-[77.6%]  absolute  "
                  : "hidden "
              }`}
            ></div>

            <div className="absolute top-[68%] md:top-[74%]  m-auto flex flex-col gap-[1em]  px-[2em] lg:px-[3em] w-full">
              <div className="w-full justify-start flex flex-col items-start">
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
          </button>
        );
      })}
    </main>
  );
}

export default HomeStories;
