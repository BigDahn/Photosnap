"use client";

import { stories } from "@/app/_utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function HomeStories() {
  useGSAP(() => {
    const storyLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#stories",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart non restart none",
      },
    });

    storyLine.from(".img", {
      opacity: 0,
      duration: 1,
      stagger: 0.04,
      ease: "power1.inOut",
    });
  });

  return (
    <main id="stories" className="lg:flex md:grid-cols-2 grid">
      {stories.map((story, i) => {
        const { title, author, image } = story;
        const { desktop, mobile } = image;
        return (
          <div key={i} className="relative h-[375px] md:h-[500px] w-full img">
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
              className="object-cover brightness-70 md:hidden"
            />
            <div className="absolute top-[68%] md:top-[74%] m-auto flex flex-col gap-[1em] justify-start px-[2em] lg:px-[3em] w-full">
              <div>
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
    </main>
  );
}

export default HomeStories;
